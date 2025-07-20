import React, { useEffect, useRef } from 'react';

const TWO_PI = Math.PI * 2;
const HALF_PI = Math.PI / 2;

type Point = {
  x: number;
  y: number;
  isAnchor: boolean;
};

class Line {
  x: number;
  y: number;
  path: Point[] = [];
  pathLength = 0;
  angle = 0;
  speed: number;
  target: { x: number; y: number };
  thickness: number;
  maxLength: number;
  hasShadow: boolean;
  decay: number;
  alpha = 1;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.speed = random(1, 4);
    this.target = { x: x + 0.1, y: y + 0.1 };
    this.thickness = Math.round(random(0.5, 3));
    this.maxLength = Math.round(random(100, 350));
    this.hasShadow = this.thickness > 2;
    this.decay = random(0.0075, 0.05);
  }

  step() {
    if (this.pathLength >= this.maxLength) {
      this.alpha -= this.decay;
      return;
    }

    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    let isAnchor = false;
    const dx = this.target.x - this.x;
    const dy = this.target.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < this.speed) {
      isAnchor = true;
      this.x = this.target.x;
      this.y = this.target.y;
      this.steer();
    }

    this.path.push({ x: this.x, y: this.y, isAnchor });
    this.pathLength++;
  }

  draw(context: CanvasRenderingContext2D, frame: number) {
    context.save();
    context.globalAlpha = this.alpha;
    context.lineWidth = this.thickness;

    // Draw the line path
    context.beginPath();
    this.path.forEach((point, i) => {
      context[i === 0 ? 'moveTo' : 'lineTo'](point.x, point.y);
    });
    context.stroke();

    // Draw glowing node only if it's an anchor
    const node = this.path[0];
    if (node?.isAnchor) {
      context.save(); // isolate glow context
      context.beginPath();

      // Pulse glow with sin wave based on frame count
      const glowPulse = (Math.sin(frame * 0.1) + 1) / 2; // 0 → 1
      const glowBlur = 8 + glowPulse * 12; // 8 → 20
      const glowAlpha = 0.3 + glowPulse * 0.5; // 0.3 → 0.8

      context.shadowColor = `rgba(0, 123, 255, ${glowAlpha})`;
      context.shadowBlur = glowBlur;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;

      context.fillStyle = '#4da3ffff'; 
      context.arc(node.x, node.y, 5, 0, TWO_PI);
      context.fill();

      context.restore();
    }

    context.restore();
  }

  steer() {
    const distance = random(50, 200);
    const angle = random([-HALF_PI, 0, HALF_PI, -Math.PI]);

    // Only keep anchor points
    this.path = this.path.filter((point) => point.isAnchor);

    this.target.x = this.x + Math.cos(angle) * distance;
    this.target.y = this.y + Math.sin(angle) * distance;
    this.angle = angle;
  }
}

function random(min?: number | number[], max?: number): number {
  if (arguments.length === 0) return Math.random();
  if (Array.isArray(min)) return min[Math.floor(Math.random() * min.length)];
  if (typeof min === 'undefined') min = 1;
  if (typeof max === 'undefined') {
    max = min;
    min = 0;
  }
  return min + Math.random() * (max - min);
}

const CanvasAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const linesRef = useRef<Line[]>([]);
  const frameRef = useRef(0);
  const gradientRef = useRef<CanvasGradient | null>(null);

  const resize = () => {
    if (typeof window === 'undefined') return;
    const scale = window.devicePixelRatio || 1;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * scale;
    canvas.height = height * scale;
    context.scale(scale, scale);

    const gradient = context.createLinearGradient(width * 0.25, 0, width * 0.75, 0);
    gradient.addColorStop(0, '#39b0ffff');
    gradient.addColorStop(1, '#00448dff');
    gradientRef.current = gradient;
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.lineCap = 'round';
    context.strokeStyle = gradientRef.current!;
    context.fillStyle = '#006effff';

    linesRef.current = linesRef.current.filter((line) => {
      line.step();
      return line.alpha > 0.01;
    });

    linesRef.current.forEach((line) => line.draw(context, frameRef.current));

    if (frameRef.current % 12 === 0) {
      const x = width * 0.5 + random(-150, 150);
      const y = height * 0.5 + random(-100, 100);
      linesRef.current.push(new Line(x, y));
    }

    frameRef.current++;
    requestAnimationFrame(draw);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Style setup
    canvas.style.position = 'fixed';
    canvas.style.top = '-30%';
    canvas.style.left = '30%';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';

    document.documentElement.style.cssText = 'margin:0;padding:0;height:100%';
    document.body.style.cssText =
      'height:100%;margin:0;padding:0;background-image:linear-gradient(-180deg,#F5F8FA 0%,#FFFFFF 100%)';

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default CanvasAnimation;

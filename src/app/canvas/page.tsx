"use client";
import React, { useEffect, useRef } from "react";

const TWO_PI = Math.PI * 2;

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
    this.speed = random(0.5, 1.25);
    this.target = { x: x + 0.1, y: y + 0.1 };
    this.thickness = Math.round(random(0.5, 3));
    this.maxLength = 1000;
    this.hasShadow = this.thickness > 2;
    this.decay = 1 / (60 * 0.5); 
  }

  step(canvasW: number, canvasH: number) {
    if (this.alpha <= 0) return;

    if (this.pathLength >= this.maxLength) {
      this.alpha -= this.decay;
      this.pathLength++;
      this.path.push({ x: this.x, y: this.y, isAnchor: false });
      return;
    }

    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    const dx = this.target.x - this.x;
    const dy = this.target.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < this.speed) {
      this.x = this.target.x;
      this.y = this.target.y;
      this.steer(canvasW, canvasH);
      this.path.push({ x: this.x, y: this.y, isAnchor: true });
    } else {
      this.path.push({ x: this.x, y: this.y, isAnchor: false });
      this.pathLength++;
    }

    if (this.path.length > this.maxLength) this.path.shift();

    this.x = Math.max(0, Math.min(this.x, canvasW));
    this.y = Math.max(0, Math.min(this.y, canvasH));
  }

  draw(context: CanvasRenderingContext2D, frame: number) {
    context.save();
    context.globalAlpha = this.alpha;
    context.lineWidth = this.thickness;

    context.beginPath();
    this.path.forEach((point, i) => {
      context[i === 0 ? "moveTo" : "lineTo"](point.x, point.y);
    });
    context.stroke();

    const node = this.path.find((p) => p.isAnchor);
    if (node) {
      context.save();
      context.beginPath();

      const glowPulse = (Math.sin(frame * 0.1) + 1) / 2;
      const glowBlur = 8 + glowPulse * 8;

      context.shadowBlur = glowBlur;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;

      context.fillStyle = "#094e99ff";
      context.arc(node.x, node.y, 5, 0, TWO_PI);
      context.fill();
      context.restore();
    }

    context.restore();
  }

  steer(canvasW: number, canvasH: number) {
    const distance = random(150, 1000); 

    const allowedAngles = [
      0,
      Math.PI / 4,
      Math.PI / 2,
      (3 * Math.PI) / 4,
      Math.PI,
      (5 * Math.PI) / 4,
      (3 * Math.PI) / 2,
      (7 * Math.PI) / 4,
    ];

    let angle: number;
    let tx: number;
    let ty: number;
    let attempts = 0;

    do {
      angle = random(allowedAngles);
      tx = this.x + Math.cos(angle) * distance;
      ty = this.y + Math.sin(angle) * distance;
      attempts++;
    } while (
      (tx < 0 || tx > canvasW || ty < 0 || ty > canvasH) &&
      attempts < 10
    );

    this.target.x = tx;
    this.target.y = ty;
    this.angle = angle;
  }
}

function random(min?: number | number[], max?: number): number {
  if (arguments.length === 0) return Math.random();
  if (Array.isArray(min)) return min[Math.floor(Math.random() * min.length)];
  if (typeof min === "undefined") min = 1;
  if (typeof max === "undefined") {
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "0";
    canvas.style.pointerEvents = "none"; 

    document.documentElement.style.cssText = "margin:0;padding:0;height:100%";
    document.body.style.cssText =
      "height:100%;margin:0;padding:0;background-image:linear-gradient(-180deg,#001e41 0%,#001e41 100%);";

    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const gradient = ctx.createLinearGradient(width * 0.25, 0, width * 0.75, 0);
      gradient.addColorStop(0, "#023d64");
      gradient.addColorStop(1, "#0054ad");
      gradientRef.current = gradient;
    };


    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx || !gradientRef.current) return;

      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";
      ctx.strokeStyle = gradientRef.current;
      ctx.fillStyle = "#006eff";

      linesRef.current = linesRef.current.filter((line) => {
        line.step(width, height);
        return line.alpha > 0.01;
      });

      linesRef.current.forEach((line) => line.draw(ctx, frameRef.current));

      if (frameRef.current % 12 === 0) {
        const x = random(0, width);
        const y = random(0, height);
        linesRef.current.push(new Line(x, y));
      }

      if (linesRef.current.length > 300) linesRef.current.shift();

      frameRef.current++;
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default CanvasAnimation;
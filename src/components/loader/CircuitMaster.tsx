import React from "react";

const BizwiseLoader: React.FC = () => (
  <div id="loading-wrapper">
    <div id="loading-content"></div> {/* rotating ring */}

    {/* Text separate, absolutely centered */}
    <svg
      viewBox="0 0 600 150"
      xmlns="http://www.w3.org/2000/svg"
      width="600"
      height="150"
      id="bizwise-text-svg"
    >
      <text
        x="50%"
        y="70%"
        textAnchor="middle"
        fontSize="100"
        fontFamily="Arial, sans-serif"
        fill="none"
        stroke="#0062D6"
        strokeWidth="2"
        className="bizwise-text"
      >
        BizWise.lk
      </text>
    </svg>

    <span id="loading-text">Loading...</span>
  </div>
);

export default BizwiseLoader;

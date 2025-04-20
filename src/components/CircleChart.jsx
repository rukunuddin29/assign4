import React from "react";

const CircleChart = ({ value, color }) => {
  const percentage = parseInt(value); // e.g., "42%" -> 42
  const radius = 30;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  const colorMap = {
    green: {
      dark: "#16a34a",   // Tailwind green-600
      light: "#bbf7d0",  // Tailwind green-200
    },
    red: {
      dark: "#dc2626",   // Tailwind red-600
      light: "#fecaca",  // Tailwind red-200
    },
    blue: {
      dark: "#2563eb",   // Tailwind blue-600
      light: "#bfdbfe",  // Tailwind blue-200
    },
    purple: {
      dark: "#7c3aed",   // Tailwind purple-600
      light: "#ddd6fe",  // Tailwind purple-200
    },
  };

  const colors = colorMap[color] || colorMap.green;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke={colors.light}
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={colors.dark}
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference + " " + circumference}
        strokeDashoffset={strokeDashoffset}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{ transition: "stroke-dashoffset 0.5s" }}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        fontSize="12"
        fill={colors.dark}
      >
        {value}
      </text>
    </svg>
  );
};

export default CircleChart;

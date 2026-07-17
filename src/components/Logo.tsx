import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-12 w-auto", showText = true }: LogoProps) {
  return (
    <svg
      viewBox="0 0 500 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circle 1 - 'C' (Navy Blue) */}
      <g>
        <circle cx="82" cy="70" r="50" fill="#05045B" />
        <text
          x="82"
          y="70"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          fontWeight="900"
          fontSize="56"
          fill="#FFFFFF"
          textAnchor="middle"
          dominantBaseline="central"
        >
          C
        </text>
      </g>

      {/* Circle 2 - 'M' (Rich Indigo/Purple) */}
      <g>
        <circle cx="194" cy="70" r="50" fill="#45019A" />
        <text
          x="194"
          y="70"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          fontWeight="900"
          fontSize="56"
          fill="#FFFFFF"
          textAnchor="middle"
          dominantBaseline="central"
        >
          M
        </text>
      </g>

      {/* Circle 3 - 'A' (Amethyst Lavender with custom vertical stripes) */}
      <g>
        <circle cx="306" cy="70" r="50" fill="#9E7DD5" />
        
        {/* White letter 'A' background mask or custom shape */}
        <text
          x="306"
          y="70"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          fontWeight="900"
          fontSize="56"
          fill="#FFFFFF"
          textAnchor="middle"
          dominantBaseline="central"
        >
          A
        </text>

        {/* Custom graphic vertical lines under the crossbar of the 'A' */}
        <g>
          <rect x="298" y="76" width="2" height="15" fill="#05045B" />
          <rect x="302" y="76" width="2" height="15" fill="#05045B" />
          <rect x="306" y="76" width="2" height="15" fill="#05045B" />
          <rect x="310" y="76" width="2" height="15" fill="#05045B" />
          <rect x="314" y="76" width="2" height="15" fill="#05045B" />
        </g>
      </g>

      {/* Circle 4 - 'C' (Royal Blue) */}
      <g>
        <circle cx="418" cy="70" r="50" fill="#0100BD" />
        <text
          x="418"
          y="70"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          fontWeight="900"
          fontSize="56"
          fill="#FFFFFF"
          textAnchor="middle"
          dominantBaseline="central"
        >
          C
        </text>
      </g>

      {/* 'D E S I G N S' Typography beneath */}
      {showText && (
        <text
          x="250"
          dx="14"
          y="170"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
          fontWeight="400"
          fontSize="36"
          fill="#05045B"
          letterSpacing="28"
          textAnchor="middle"
        >
          DESIGNS
        </text>
      )}
    </svg>
  );
}

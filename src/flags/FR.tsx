import React from 'react';

type FRFlagProps = {
  className?: string;
};

export const FR: React.FC<FRFlagProps> = (props) => (
  <div>
    <svg
      width="21px"
      height="15px"
      viewBox="0 0 21 15"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <title>FR</title>
      <desc>Flag of France</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-2"
        >
          <stop stopColor="#F44653" offset="0%" />
          <stop stopColor="#EE2A39" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-3"
        >
          <stop stopColor="#1035BB" offset="0%" />
          <stop stopColor="#042396" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="FR">
          <rect
            id="FlagBackground"
            fill="url(#linearGradient-1)"
            x="0"
            y="0"
            width="21"
            height="15"
          />
          <rect
            id="Mask"
            fill="url(#linearGradient-2)"
            x="10"
            y="0"
            width="11"
            height="15"
          />
          <rect
            id="Rectangle-2"
            fill="url(#linearGradient-3)"
            x="0"
            y="0"
            width="7"
            height="15"
          />
          <rect
            id="Rectangle-2-Copy"
            fill="url(#linearGradient-1)"
            x="7"
            y="0"
            width="7"
            height="15"
          />
        </g>
      </g>
    </svg>
  </div>
);

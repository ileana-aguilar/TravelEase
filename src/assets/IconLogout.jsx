import React from "react";

const IconLogout = ({ width = 18, height = 19, fill = 'black' }) => (
    <svg
      width={width}  // allows dynamic resizing based on props
      height={height}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={fill} d="M1.81687 19C1.29937 19 0.867375 18.8171 0.520875 18.4514C0.174375 18.0856 0.00075 17.6292 0 17.0822V1.91781C0 1.37156 0.173625 0.915562 0.520875 0.549812C0.868125 0.184062 1.30012 0.000791667 1.81687 0H9.02138V1.1875H1.81687C1.64437 1.1875 1.48575 1.2635 1.341 1.4155C1.19625 1.5675 1.12425 1.73494 1.125 1.91781V17.0822C1.125 17.2643 1.197 17.4317 1.341 17.5845C1.485 17.7373 1.64362 17.8133 1.81687 17.8125H9.02138V19H1.81687ZM14.0197 13.7014L13.23 12.8476L15.8389 10.0938H5.841V8.90625H15.8389L13.2289 6.15125L14.0197 5.29862L18 9.5L14.0197 13.7014Z" />
    </svg>
  );
  
  export default IconLogout;
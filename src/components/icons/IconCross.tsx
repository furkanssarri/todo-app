import * as React from "react";
const SvgIconCross = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#0E121B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6 6 12 12m0-12L6 18"
    />
  </svg>
);
export default SvgIconCross;

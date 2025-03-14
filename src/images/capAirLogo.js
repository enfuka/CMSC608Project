import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";

export default function CapAirLogo(props) {
  let textfill = props.textfill;
  let cfill = props.cfill;
  textfill = textfill ? textfill : "#003865";
  cfill = cfill ? cfill : "#003865";
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={724.75}
        height={307.1}
        data-name="Layer 2"
        {...props}
      >
        <g className="layer" display="inline">
          <title>{"Layer 1"}</title>
          <g id="svg_1" />
          <g
            data-name="Layer 1"
            id="svg_8"
            transform="translate(470 -117) matrix(1 0 0 1 -468 117)"
          >
            <path
              d="m210.72,172.73c0,17.17 11.11,28.12 28.29,28.12c11.78,0 23.4,-4.21 31.99,-12.29l5.89,21.89c-11.62,10.94 -27.44,15.48 -43.27,15.48c-29.63,0 -50.17,-18.01 -50.17,-48.15c0,-40.07 28.28,-71.72 69.03,-71.72c11.78,0 28.62,3.36 36.53,13.3l-11.95,22.73c-4.72,-7.58 -18.52,-12.13 -26.77,-12.13c-23.74,0 -39.57,20.04 -39.57,42.77z"
              fill="#fdda24"
              id="svg_10"
              stroke="#fdda24"
              strokeWidth={0}
            />
            <path
              d="m222.43,30.3c-25.32,17.06 -104.06,140.22 -144.04,195.85c-39.99,55.62 -78.39,80.95 -78.39,80.95l282.34,0l101.54,-307.1s-136.12,13.24 -161.45,30.3z"
              fill="#fdda24"
              id="svg_11"
              stroke="#fdda24"
              strokeWidth={0}
            />
          </g>
          <line
            fill="none"
            id="svg_31"
            x1={-65.34}
            x2={18.35}
            y1={-29.69}
            y2={13.4}
          />
          <text
            fill="#000000"
            fontFamily="Serif"
            fontSize={170.82}
            id="svg_35"
            opacity={0}
            strokeWidth={0}
            textAnchor="middle"
            x={218.76}
            xmlSpace="preserve"
            y={170.72}
          />
          <g data-name="Layer 1" id="svg_17" />
          <text
            fill="#000000"
            fontFamily="Serif"
            fontSize={181}
            id="svg_36"
            strokeWidth={8}
            textAnchor="middle"
            transform="matrix(1 0 0 1 0 0)"
            x={438.35}
            xmlSpace="preserve"
            y={233.64}
          >
            {"608Air"}
          </text>
        </g>
      </svg>
    </SvgIcon>
  );
}

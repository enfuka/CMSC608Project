import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";

export default function CapAirIcon(props) {
  let cfill = props.cfill;
  cfill = cfill ? cfill : "#003865";
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
        width={383.88}
        height={307.1}
        data-name="Layer 2"
        {...props}
      >
        <g className="layer">
          <title>{"Layer 1"}</title>
          <g
            data-name="Layer 1"
            id="svg_4"
            transform="translate(4.1841 0.41841) matrix(1 0 0 1 -5.02092 -0.00000572205)"
          >
            <g id="svg_5">
              <path
                d="m222.43,30.3c-25.32,17.06 -104.06,140.22 -144.04,195.85c-39.99,55.62 -78.39,80.95 -78.39,80.95l282.34,0l101.54,-307.1s-136.12,13.24 -161.45,30.3z"
                fill="#fdda24"
                id="svg_7"
              />
              <text
                fill="#000000"
                fontFamily="Serif"
                fontSize={24}
                id="svg_2"
                strokeWidth={0}
                textAnchor="middle"
                x={232.44}
                xmlSpace="preserve"
                y={180.35}
              />
              <text
                fill="#000000"
                fontFamily="Serif"
                fontSize={24}
                id="svg_1"
                strokeWidth={0}
                textAnchor="middle"
                x={223.23}
                xmlSpace="preserve"
                y={179.51}
              />
            </g>
          </g>
          <text
            fill="#000000"
            fontFamily="Serif"
            fontSize={181.36}
            id="svg_21"
            strokeWidth={0}
            textAnchor="middle"
            x={285.99}
            xmlSpace="preserve"
            y={175.33}
          />
          <text
            fill="#000000"
            fontFamily="Serif"
            fontSize={181.36}
            id="svg_22"
            strokeWidth={0}
            textAnchor="middle"
            x={285.16}
            xmlSpace="preserve"
            y={175.33}
          />
          <text
            fill="#000000"
            fontFamily="Serif"
            fontSize={181}
            id="svg_3"
            strokeWidth={0}
            textAnchor="middle"
            x={226.58}
            xmlSpace="preserve"
            y={235.02}
          >
            {"6"}
          </text>
        </g>
      </svg>
    </SvgIcon>
  );
}

import * as React from "react"
const ConfirmAge = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 4" {...props}>
    <defs>
      <style>{".cls-3{fill:#fff}"}</style>
    </defs>
    <title>{"Asset 3"}</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <rect
          width={45}
          height={4}
          rx={2}
          style={{
            fill: "#00b4fb",
            opacity: 0.33,
          }}
        />
        <rect
          width={43}
          height={2}
          x={1}
          y={1}
          rx={1}
          style={{
            fill: "#3fc3ff",
          }}
        />
        <rect width={17} height={2} x={1} y={1} className="cls-3" rx={1} />
        <circle cx={17} cy={2} r={2} className="cls-3" />
      </g>
    </g>
  </svg>
)
export default ConfirmAge;

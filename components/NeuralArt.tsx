const RAW: [number, number, number][] = [
  // x, y, animation offset (s) — laid out then scaled about the canvas centre
  [170, 158, 0], [214, 132, 0.6], [258, 150, 1.2], [292, 186, 0.3],
  [300, 234, 0.9], [272, 274, 1.5], [230, 296, 0.4], [186, 282, 1.1],
  [156, 246, 0.7], [152, 200, 1.4], [206, 190, 0.2], [246, 208, 1.0],
  [222, 240, 1.7], [268, 320, 0.5], [136, 300, 1.3],
];

const S = 1.3;
const CX = 218;
const CY = 226;
const sx = (x: number) => Math.round((220 + (x - CX) * S) * 10) / 10;
const sy = (y: number) => Math.round((214 + (y - CY) * S) * 10) / 10;

const NODES: [number, number, number][] = RAW.map(([x, y, d]) => [sx(x), sy(y), d]);

const LOOP = RAW.slice(0, 10)
  .map(([x, y], i) => `${i === 0 ? "M" : "L"}${sx(x)} ${sy(y)}`)
  .join(" ") + " Z";

/** Outer ring markers — the wider network the coordinating team reaches into. */
const RING_MARKERS = 14;

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 0],
  [10, 0], [10, 1], [10, 11], [11, 2], [11, 4], [12, 10], [12, 11], [12, 6],
  [12, 8], [5, 13], [13, 6], [7, 14], [14, 8],
];

/** Connective arcs, drawn in sequence on mount. */
const ARCS = [
  "M148 212c14-30 44-46 74-40 26 5 34 26 24 40-11 15-38 8-42-8-4-14 10-26 26-22",
  "M170 268c22 16 56 14 76-6 16-16 12-38-6-44-16-5-30 8-27 22 3 12 20 15 28 6",
  "M206 148c26-12 58-4 72 18 12 19 4 40-14 44",
  "M262 288c22-6 38-26 38-50",
];

export default function NeuralArt() {
  return (
    <svg className="neural" viewBox="0 0 440 440" role="img" aria-label="Abstract diagram of a nationwide network of connected physicians">
      <defs>
        <linearGradient id="naTeal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14867E" />
          <stop offset="100%" stopColor="#0F6E68" />
        </linearGradient>
        <radialGradient id="naGlow" cx="50%" cy="48%" r="50%">
          <stop offset="0%" stopColor="#14867E" stopOpacity="0.16" />
          <stop offset="70%" stopColor="#14867E" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#14867E" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="220" cy="220" r="205" fill="url(#naGlow)" />

      {/* Rotating measurement rings */}
      <g className="neural__ring neural__ring--a">
        <circle cx="220" cy="220" r="198" fill="none" stroke="#0B1A20" strokeOpacity="0.14" strokeWidth="1" strokeDasharray="2 9" />
      </g>
      <g className="neural__ring neural__ring--b">
        <circle cx="220" cy="220" r="172" fill="none" stroke="#0F6E68" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="34 12 4 12" />
      </g>
      <circle cx="220" cy="220" r="150" fill="none" stroke="#0B1A20" strokeOpacity="0.08" strokeWidth="1" />

      {/* Network markers around the outer ring */}
      <g>
        {Array.from({ length: RING_MARKERS }, (_, i) => {
          const a = (i / RING_MARKERS) * Math.PI * 2 - Math.PI / 2;
          const x = 220 + Math.cos(a) * 186;
          const y = 220 + Math.sin(a) * 186;
          const inner = i % 3 === 0;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={inner ? "3" : "2.2"}
              fill={inner ? "#0F6E68" : "none"}
              fillOpacity={inner ? 0.5 : 0}
              stroke="#0F6E68"
              strokeOpacity="0.5"
              strokeWidth="1"
              className="neural__node"
              style={{ ["--d" as string]: `${(i % 5) * 0.4}s` }}
            />
          );
        })}
      </g>

      {/* Edges */}
      <g stroke="url(#naTeal)" strokeOpacity="0.42" strokeWidth="1">
        {EDGES.map(([a, b], i) => {
          const [x1, y1] = NODES[a];
          const [x2, y2] = NODES[b];
          const len = Math.hypot(x2 - x1, y2 - y1);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className="neural__trace"
              style={{ ["--len" as string]: len, ["--d" as string]: `${0.25 + i * 0.055}s` }}
            />
          );
        })}
      </g>

      {/* Cortical folds */}
      <g fill="none" stroke="#0B1A20" strokeOpacity="0.22" strokeWidth="1.1" strokeLinecap="round"
         transform={`translate(${220 - CX * S} ${214 - CY * S}) scale(${S})`}>
        {ARCS.map((d, i) => (
          <path
            key={i}
            d={d}
            className="neural__trace"
            style={{ ["--len" as string]: 340, ["--d" as string]: `${0.8 + i * 0.35}s` }}
          />
        ))}
      </g>

      {/* Nodes */}
      <g>
        {NODES.map(([x, y, d], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={3}
            fill={i % 5 === 0 ? "#C9502A" : "#0F6E68"}
            className="neural__node"
            style={{ ["--d" as string]: `${d}s` }}
          />
        ))}
      </g>

      {/* Travelling signal along the outer loop */}
      <circle
        r="3.2"
        fill="#C9502A"
        className="neural__spark"
        style={{
          ["--path" as string]: `path("${LOOP}")`,
          ["--dur" as string]: "7s",
        }}
      />
      <circle
        r="2.4"
        fill="#14867E"
        className="neural__spark"
        style={{
          ["--path" as string]: `path("${LOOP}")`,
          ["--dur" as string]: "7s",
          ["--d" as string]: "-3.5s",
        }}
      />

      {/* Baseline readout */}
      <g opacity="0.55">
        <path
          d="M96 372h26l9-20 11 42 10-31 8 20 7-11h38l9 15 9-27 11 20 7-9h55"
          fill="none"
          stroke="#0F6E68"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="eeg__line"
        />
        <circle cx="96" cy="372" r="2" fill="#0F6E68" />
        <circle cx="342" cy="372" r="2" fill="#0F6E68" />
      </g>
    </svg>
  );
}

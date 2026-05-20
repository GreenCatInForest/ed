"use client";

// ============================================================
// HOUSE DIAGRAM — editable in 4 layers
// 1. UNITS data array → which dots appear, what color, what label
// 2. CALLOUT_UNIT_ID → which unit gets the floating label
// 3. STATUS_COLORS → change the color palette
// 4. SVG geometry → the house shape (only touch if reshaping)
// ============================================================

// === LAYER 1: DATA — edit this to change which dots show ===
const UNITS = [
  // Left face (back-left wall of the house)
  { id: "1A", x: 120, y: 165, status: "compliant" as const },
  { id: "2A", x: 170, y: 207, status: "in_progress" as const },
  // Right face (back-right wall)
  { id: "4B", x: 230, y: 140, status: "breach_risk" as const, deadlineHours: 48 },
  { id: "3C", x: 280, y: 220, status: "compliant" as const },
];

// === LAYER 2: which unit gets the floating callout ===
const CALLOUT_UNIT_ID = "4B";

// === LAYER 3: color palette — change here once, applies everywhere ===
const STATUS_COLORS = {
  compliant: { color: "#10b981", pulseDuration: "2.4s" },
  in_progress: { color: "#f59e0b", pulseDuration: "1.8s" },
  breach_risk: { color: "#ef4444", pulseDuration: "1.2s" },
} as const;

type Status = keyof typeof STATUS_COLORS;
type Unit = {
  id: string;
  x: number;
  y: number;
  status: Status;
  deadlineHours?: number;
};

export function HouseDiagram() {
  const callout = UNITS.find((u) => u.id === CALLOUT_UNIT_ID);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg
        viewBox="0 0 400 340"
        width="100%"
        className="overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* === GLOW GRADIENTS — defines the soft halo around each dot === */}
        <defs>
          {Object.entries(STATUS_COLORS).map(([key, { color }]) => (
            <radialGradient key={key} id={`glow-${key}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={color} stopOpacity="0.6" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>

        {/* === GROUND SHADOW === */}
        <ellipse cx="200" cy="305" rx="140" ry="8" fill="#ef4444" opacity="0.06" />

        {/* === LAYER 4: HOUSE GEOMETRY ===
            These polygons form the isometric house.
            Don't touch unless reshaping the building entirely. */}

        {/* Back-left wall (lighter face) */}
        <polygon
          points="80,150 200,90 200,250 80,310"
          fill="#0f172a"
          stroke="#475569"
          strokeWidth="0.8"
        />
        {/* Back-right wall (darker face — creates depth) */}
        <polygon
          points="200,90 320,150 320,310 200,250"
          fill="#1e293b"
          stroke="#475569"
          strokeWidth="0.8"
        />
        {/* Roof left */}
        <polygon
          points="80,150 200,90 200,50 80,110"
          fill="#1e293b"
          stroke="#475569"
          strokeWidth="0.8"
        />
        {/* Roof right */}
        <polygon
          points="200,90 320,150 320,110 200,50"
          fill="#0f172a"
          stroke="#475569"
          strokeWidth="0.8"
        />
        {/* Roof ridge line */}
        <line x1="80" y1="110" x2="320" y2="110" stroke="#64748b" strokeWidth="0.8" />

        {/* Storey divider lines */}
        <line x1="80" y1="190" x2="200" y2="130" stroke="#334155" strokeWidth="0.6" strokeDasharray="2,2" />
        <line x1="200" y1="130" x2="320" y2="190" stroke="#334155" strokeWidth="0.6" strokeDasharray="2,2" />
        <line x1="80" y1="250" x2="200" y2="190" stroke="#334155" strokeWidth="0.6" strokeDasharray="2,2" />
        <line x1="200" y1="190" x2="320" y2="250" stroke="#334155" strokeWidth="0.6" strokeDasharray="2,2" />
        {/* Vertical corner */}
        <line x1="200" y1="90" x2="200" y2="250" stroke="#475569" strokeWidth="0.6" />

        {/* Windows — left face */}
        <polygon points="105,155 135,140 135,175 105,190" fill="#334155" stroke="#64748b" strokeWidth="0.5" />
        <polygon points="155,130 185,115 185,150 155,165" fill="#334155" stroke="#64748b" strokeWidth="0.5" />
        <polygon points="105,215 135,200 135,235 105,250" fill="#334155" stroke="#64748b" strokeWidth="0.5" />
        <polygon points="155,190 185,175 185,210 155,225" fill="#334155" stroke="#64748b" strokeWidth="0.5" />

        {/* Windows — right face */}
        <polygon points="215,115 245,130 245,165 215,150" fill="#334155" stroke="#64748b" strokeWidth="0.5" />
        <polygon points="265,140 295,155 295,190 265,175" fill="#334155" stroke="#64748b" strokeWidth="0.5" />
        <polygon points="215,175 245,190 245,225 215,210" fill="#334155" stroke="#64748b" strokeWidth="0.5" />
        <polygon points="265,200 295,215 295,250 265,235" fill="#334155" stroke="#64748b" strokeWidth="0.5" />

        {/* === DATA-DRIVEN STATUS MARKERS === */}
        {UNITS.map((unit) => {
          const { color, pulseDuration } = STATUS_COLORS[unit.status];
          return (
            <g key={unit.id}>
              {/* Soft glow halo */}
              <circle cx={unit.x} cy={unit.y} r="16" fill={`url(#glow-${unit.status})`} />
              {/* Solid dot */}
              <circle
                cx={unit.x}
                cy={unit.y}
                r="6"
                fill={color}
                stroke="#0a0e1a"
                strokeWidth="1.5"
              />
              {/* Pulse animation overlay */}
              <circle cx={unit.x} cy={unit.y} r="6" fill={color}>
                <animate
                  attributeName="r"
                  values="6;10;6"
                  dur={pulseDuration}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="1;0.2;1"
                  dur={pulseDuration}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* === CONNECTOR LINES — visual link between matching statuses ===
            Comment these out if you don't want them */}
        <line x1="120" y1="165" x2="230" y2="140" stroke="#ef4444" strokeWidth="0.6" strokeDasharray="3,3" opacity="0.35" />
        <line x1="170" y1="207" x2="280" y2="220" stroke="#10b981" strokeWidth="0.6" strokeDasharray="3,3" opacity="0.35" />

        {/* === CALLOUT — floating label on the urgent unit === */}
        {callout && (
          <g>
            <line
              x1={callout.x}
              y1={callout.y}
              x2={callout.x + 95}
              y2={callout.y - 55}
              stroke="#ef4444"
              strokeWidth="0.6"
              opacity="0.55"
            />
            <rect
              x={callout.x + 95}
              y={callout.y - 72}
              width="68"
              height="36"
              rx="4"
              fill="#0a0e1a"
              stroke="#ef4444"
              strokeWidth="0.8"
            />
            <text
              x={callout.x + 129}
              y={callout.y - 57}
              fontSize="9"
              fill="#fca5a5"
              textAnchor="middle"
              fontWeight="500"
            >
              Flat {callout.id}
            </text>
            {callout.deadlineHours !== undefined && (
              <text
                x={callout.x + 129}
                y={callout.y - 44}
                fontSize="8"
                fill="#94a3b8"
                textAnchor="middle"
              >
                {callout.deadlineHours}h remaining
              </text>
            )}
          </g>
        )}
      </svg>

      {/* === LEGEND === */}
      <div className="flex justify-center gap-6 mt-6 text-sm">
        <LegendItem color={STATUS_COLORS.compliant.color} label="Compliant" />
        <LegendItem color={STATUS_COLORS.in_progress.color} label="In progress" />
        <LegendItem color={STATUS_COLORS.breach_risk.color} label="Breach risk" />
      </div>
    </div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="w-2 h-2 rounded-full"
        style={{ background: color, boxShadow: `0 0 6px ${color}` }}
      />
      <span className="text-fg-muted">{label}</span>
    </div>
  );
}
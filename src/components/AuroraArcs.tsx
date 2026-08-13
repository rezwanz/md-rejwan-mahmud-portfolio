import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const VIEWBOX = 160;
const CENTER = 6;

const ARCS = [
  { r: 36, color: "#2dd4bf", width: 3 },
  { r: 48, color: "#a78bfa", width: 1.5 },
  { r: 60, color: "#5eead4", width: 3.4 },
  { r: 74, color: "#8b5cf6", width: 1.5 },
  { r: 88, color: "#2dd4bf", width: 2.4 },
  { r: 106, color: "#7c3aed", width: 1.5 },
  { r: 128, color: "#5eead4", width: 2 },
];

export default function AuroraArcs() {
  const { theme } = useTheme();

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pointer-events-none absolute left-0 top-0 z-0 h-24 w-24 overflow-hidden md:h-40 md:w-40"
    >
      <svg
        viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
        fill="none"
        className="h-full w-full"
        style={{ opacity: theme === "dark" ? 1 : 0.85 }}
      >
        <defs>
          <filter
            id="auroraArcsGlow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
          <radialGradient
            id="auroraArcsFade"
            cx={CENTER}
            cy={CENTER}
            r={VIEWBOX}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
          </radialGradient>
          <mask
            id="auroraArcsMask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={VIEWBOX}
            height={VIEWBOX}
          >
            <rect
              x="0"
              y="0"
              width={VIEWBOX}
              height={VIEWBOX}
              fill="url(#auroraArcsFade)"
            />
          </mask>
        </defs>
        <g mask="url(#auroraArcsMask)">
          <g filter="url(#auroraArcsGlow)">
            {ARCS.map((arc) => (
              <circle
                key={`glow-${arc.r}`}
                cx={CENTER}
                cy={CENTER}
                r={arc.r}
                stroke={arc.color}
                strokeWidth={arc.width * 1.8}
                strokeOpacity={0.55}
              />
            ))}
          </g>
          {ARCS.map((arc) => (
            <circle
              key={`core-${arc.r}`}
              cx={CENTER}
              cy={CENTER}
              r={arc.r}
              stroke={arc.color}
              strokeWidth={arc.width}
              strokeOpacity={0.9}
            />
          ))}
        </g>
      </svg>
    </motion.div>
  );
}

// AmbientOrbs.tsx
import { Box } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

export default function AmbientOrbs() {
  const reduce = useReducedMotion();

  return (
    <Box
      aria-hidden
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 0,               // keep behind content (ensure your main content has zIndex > 0)
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Orb 1 */}
      <motion.div
        initial={{ x: "-10%", y: "-20%" }}
        animate={
          reduce
            ? undefined
            : { x: ["-10%", "10%", "-15%"], y: ["-20%", "0%", "-10%"] }
        }
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          left: "-8%",
          top: "-12%",
          opacity: 0.12,
          background:
            "radial-gradient(closest-side, rgba(9,95,91,0.42), rgba(9,95,91,0.18), transparent 70%)",
          filter: "blur(2px)", // tiny blur only
        }}
      />

      {/* Orb 2 */}
      <motion.div
        initial={{ x: "65%", y: "20%" }}
        animate={
          reduce
            ? undefined
            : { x: ["65%", "55%", "70%"], y: ["20%", "35%", "18%"] }
        }
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          width: 640,
          height: 640,
          right: "-10%",
          top: "10%",
          opacity: 0.09,
          background:
            "radial-gradient(closest-side, rgba(191,120,64,0.35), rgba(191,120,64,0.16), transparent 70%)",
        }}
      />

      {/* Orb 3 (very faint) */}
      <motion.div
        initial={{ x: "10%", y: "75%" }}
        animate={reduce ? undefined : { x: ["10%", "0%", "12%"], y: ["75%", "70%", "78%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          left: "5%",
          bottom: "-20%",
          opacity: 0.06,
          background:
            "radial-gradient(closest-side, rgba(31,128,124,0.28), rgba(31,128,124,0.12), transparent 70%)",
        }}
      />
    </Box>
  );
}

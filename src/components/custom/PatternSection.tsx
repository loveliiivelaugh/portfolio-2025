// SectionPattern.tsx
import { Box } from "@mui/material";

type Variant = "none" | "dots" | "grid" | "checker";

export default function SectionPattern({
  children,
  variant = "none",
  opacity = 0.04,
}: {
  children: React.ReactNode;
  variant?: Variant;
  opacity?: number;
}) {
  const bg =
    variant === "dots"
      ? `radial-gradient(rgba(255,255,255,${opacity}) 1px, transparent 1px)`
      : variant === "grid"
      ? `linear-gradient(rgba(255,255,255,${opacity}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(255,255,255,${opacity}) 1px, transparent 1px)`
      : variant === "checker"
      ? `linear-gradient(45deg, rgba(255,255,255,${opacity}) 1px, transparent 1px),
         linear-gradient(-45deg, rgba(255,255,255,${opacity}) 1px, transparent 1px)`
      : "none";

  const size =
    variant === "dots" ? "16px 16px" : variant === "grid" ? "32px 32px" : "22px 22px";

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        "&::before": {
          content: '""',
          position: "absolute",
          inset: -100,
          pointerEvents: "none",
          opacity: 1,
          backgroundImage: bg,
          backgroundSize: size,
          backgroundPosition: "center",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)", // fade edges
        },
      }}
    >
      {children}
    </Box>
  );
}

import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

const pulses = [
  {
    title: "Orchestration Status",
    status: "Nominal",
    detail: "9 active workflows · 0 stalled",
    tags: ["n8n", "LLM Router", "Queue"],
  },
  {
    title: "Data Plane",
    status: "Stable",
    detail: "Latency p95 118ms · 2 regions",
    tags: ["Supabase", "Postgres", "Edge"],
  },
  {
    title: "Product Signals",
    status: "Live",
    detail: "Deploys 3d ago · 1 hotfix queued",
    tags: ["CI/CD", "Rollouts", "Monitoring"],
  },
];

export default function AutomationPulse() {
  const [index, setIndex] = useState(0);
  const [lastSync, setLastSync] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % pulses.length);
      setLastSync(new Date());
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  const current = pulses[index];
  const timeLabel = useMemo(
    () =>
      lastSync.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    [lastSync]
  );

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        border: "1px solid rgba(15, 22, 26, 0.12)",
        background: "linear-gradient(140deg, rgba(11, 93, 91, 0.08), rgba(250, 245, 236, 0.6))",
        boxShadow: "0 20px 60px rgba(18, 22, 25, 0.12)",
      }}
    >
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="overline" sx={{ letterSpacing: "0.22em", color: "text.secondary" }}>
            LIVE SYSTEMS
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                {current.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {current.detail}
              </Typography>
            </Box>
            <Chip
              label={current.status}
              sx={{
                fontWeight: 600,
                bgcolor: "rgba(11, 93, 91, 0.12)",
                color: "#0b5d5b",
              }}
            />
          </Stack>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {current.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{ bgcolor: "rgba(17, 24, 28, 0.06)" }}
              />
            ))}
          </Stack>
          <Typography variant="caption" color="text.secondary">
            Last sync {timeLabel} · auto-rotating feeds
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

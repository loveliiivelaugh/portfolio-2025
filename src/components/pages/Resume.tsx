import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { TextGenerateEffect } from "@theme/TextGenerateEffect";
import { TypewriterEffectSmooth } from "@theme/TypeWriterEffect";

const rituals = [
  "Incident intake → triage → action queue",
  "Docs sync → schema checks → publish",
  "Release gating → canary → rollout",
  "Telemetry drift → alert → fix",
];

const chapters = [
  {
    title: "The Charter",
    body: "I build systems that stay calm under load: automation layers, infrastructure, and product platforms with rigorous contracts.",
  },
  {
    title: "The Craft",
    body: "From orchestration to data architecture, every deliverable is designed for reliability, observability, and clean handoffs.",
  },
  {
    title: "The Signal",
    body: "Work is measured by what ships, what scales, and what stays visible when the room gets loud.",
  },
];

const skills = [
  "Automation Orchestration",
  "Product Infrastructure",
  "Service Contracts",
  "Data Pipelines",
  "Observability",
  "Agentic Systems",
  "Local-First Architecture",
  "System Reliability",
];

const Resume = () => {
  const [index, setIndex] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rituals.length);
      setLastUpdate(new Date());
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const timeLabel = useMemo(
    () =>
      lastUpdate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    [lastUpdate]
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, rgba(255, 247, 233, 0.9) 0%, rgba(245, 236, 218, 0.92) 40%, rgba(235, 225, 206, 0.96) 100%)",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" spacing={2}>
            <Stack spacing={1}>
              <Typography variant="overline" sx={{ letterSpacing: "0.32em", color: "#5f5446" }}>
                INTERACTIVE RESUME
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontFamily: '"Cormorant Garamond", serif', letterSpacing: "0.04em" }}
              >
                <TextGenerateEffect words="The Systems Grimoire" />
              </Typography>
              <Box sx={{ color: "#3d342a", fontSize: { xs: "0.95rem", md: "1.1rem" }, fontWeight: 500 }}>
                <TypewriterEffectSmooth
                  words={[
                    { text: "Automation" },
                    { text: "Infrastructure" },
                    { text: "Product" },
                    { text: "Systems" },
                  ]}
                />
              </Box>
            </Stack>
            <Stack spacing={1} alignItems={{ xs: "flex-start", md: "flex-end" }}>
              <Button component={RouterLink} to="/" variant="outlined">
                Return to Portfolio
              </Button>
              <Button
                component="a"
                href="https://docs.google.com/document/d/1XRXuKHKSs5A1Kh2XkxHu-qxJpbrd527_ug9ycvp7u2o/edit?usp=sharing"
                target="_blank"
                variant="contained"
              >
                Download Resume
              </Button>
            </Stack>
          </Stack>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 6,
                  border: "1px solid rgba(73, 63, 50, 0.16)",
                  background: "linear-gradient(180deg, #fff8e8 0%, #f2e7d2 100%)",
                  boxShadow: "0 30px 80px rgba(30, 24, 18, 0.18)",
                }}
              >
                <CardContent>
                  <Stack spacing={3}>
                    <Typography variant="h4" sx={{ fontFamily: '"Cormorant Garamond", serif' }}>
                      Operator Profile
                    </Typography>
                    <Typography color="text.secondary">
                      Senior systems engineer focused on automation-first delivery, platform reliability, and clean product handoffs.
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          sx={{
                            bgcolor: "rgba(124, 74, 45, 0.12)",
                            color: "#3b2d22",
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Stack>
                    <Divider sx={{ borderColor: "rgba(73, 63, 50, 0.2)" }} />
                    <Stack spacing={2}>
                      {chapters.map((chapter) => (
                        <Box key={chapter.title}>
                          <Typography variant="h6" sx={{ fontFamily: '"Cormorant Garamond", serif' }}>
                            {chapter.title}
                          </Typography>
                          <Typography color="text.secondary">{chapter.body}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={3}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 5,
                    border: "1px solid rgba(73, 63, 50, 0.16)",
                    background: "rgba(255, 249, 238, 0.9)",
                  }}
                >
                  <CardContent>
                    <Stack spacing={1.5}>
                      <Typography variant="overline" sx={{ letterSpacing: "0.24em", color: "#6a5d4b" }}>
                        LIVE LEDGER
                      </Typography>
                      <Typography variant="h5" sx={{ fontFamily: '"Cormorant Garamond", serif' }}>
                        Active Ritual
                      </Typography>
                      <Typography>{rituals[index]}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        Updated {timeLabel} · auto-rotating
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>

                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 5,
                    border: "1px solid rgba(73, 63, 50, 0.16)",
                    background: "rgba(255, 249, 238, 0.9)",
                  }}
                >
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="overline" sx={{ letterSpacing: "0.24em", color: "#6a5d4b" }}>
                        CURRENT FOCUS
                      </Typography>
                      {["Automation hardening", "Platform observability", "Agent workflows", "Tooling for calm teams"].map(
                        (item, idx) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                          >
                            <Typography>{item}</Typography>
                          </motion.div>
                        )
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Resume;

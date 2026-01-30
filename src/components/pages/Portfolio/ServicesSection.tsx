import { Box, Typography, Chip, Button, Grid2 as Grid } from "@mui/material";
import { motion } from "framer-motion";
// import { SiWordpress, SiDatabricks, SiServerfault, SiE } from "react-icons/si";
// import { MdWeb, MdStorage, MdAppSettingsAlt } from "react-icons/md";
// import { FaDatabase, FaCode } from "react-icons/fa";
import SocialBar from "@components/custom/SocialBar/SocialBar";
import {
  MdAppSettingsAlt, MdWeb, MdApi, MdOutlineAnimation,
} from "react-icons/md";
import {
  FaDatabase, FaRobot, FaServer, FaTools, FaCogs,
} from "react-icons/fa";
import {
  SiDatabricks, SiSupabase, SiOpenai, SiDocker, SiGooglecloud,
  SiGraphql, SiTypescript, SiNextdotjs, SiNotion, SiGithub, SiSlack,
} from "react-icons/si";

// const MotionButton = motion(Button as any);

const services = [
  { label: "Product Engineering", icon: <MdAppSettingsAlt /> },
  { label: "Automation Orchestration", icon: <MdOutlineAnimation /> },
  { label: "API & Service Design", icon: <MdApi /> },
  { label: "Data Architecture", icon: <FaDatabase /> },
  { label: "Agentic Systems", icon: <FaRobot /> },
  { label: "Local-First Platforms", icon: <FaServer /> },
  { label: "Infrastructure-as-Code", icon: <FaCogs /> },
  { label: "Supabase Systems", icon: <SiSupabase /> },
  { label: "Workflow Bots", icon: <SiSlack /> },
  { label: "DevOps Automation", icon: <SiGithub /> },
  { label: "Containerized Services", icon: <SiDocker /> },
  { label: "TypeScript Systems", icon: <SiTypescript /> },
  { label: "GraphQL / REST", icon: <SiGraphql /> },
  { label: "LLM Tooling", icon: <SiOpenai /> },
  { label: "Knowledge Ops", icon: <SiNotion /> },
  { label: "Cloud & Edge", icon: <SiGooglecloud /> },
  { label: "Next.js / React", icon: <SiNextdotjs /> },
  { label: "Systems Reliability", icon: <FaTools /> },
  { label: "Content Infrastructure", icon: <SiDatabricks /> },
  { label: "Web Platforms", icon: <MdWeb /> },
];


export default function ServicesSection() {
  return (
    <Box component="section" py={6}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Capabilities
        </Typography>

        <Box
          display="flex"
          flexWrap="wrap"
          gap={2}
          mt={2}
          mb={6}
        >
          {services.map((service, i) => (
            <Chip
              key={i}
              icon={service.icon}
              label={service.label}
              sx={{
                px: 2,
                py: 1,
                fontSize: "0.875rem",
                fontWeight: 500,
                bgcolor: "rgba(11, 93, 91, 0.08)",
                color: "text.primary",
                borderRadius: "999px",
                border: "1px solid rgba(11, 93, 91, 0.18)",
                "& svg": { fontSize: "1rem" }
              }}
            />
          ))}
        </Box>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        style={{ paddingTop: "48px 0 24px" }}
      >
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Build With Me
        </Typography>

        <Grid container spacing={3} alignItems="center" mt={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Button
              fullWidth
              variant="outlined"
              href="mailto:hello@woodwardstudio.dev"
              color="inherit"
              onClick={() => navigator.clipboard.writeText("hello@woodwardstudio.dev")}
              sx={{
                fontWeight: 600,
                fontSize: "0.95rem",
                py: 1.5,
                textTransform: "uppercase",
                borderRadius: 2,
              }}
            >
              hello@woodwardstudio.dev
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            {/* <MotionButton
                variant="outlined"
                // size="large"
                color="inherit"
                whileHover={{ scale: 1.1 }}
                sx={{
                    borderRadius: "24px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                    "&:hover": {
                        bgcolor: "rgba(255,255,255,0.02)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 40px rgba(0,0,0,.45)"
                    }
                }}
                component="a"
                target="_blank"
                href="https://calendly.com/mwoodward1-woodwardwebdev/30min"
            >
                Book a Free Consultation
            </MotionButton> */}
            <Button
                fullWidth
                variant="outlined"
                color="inherit"
                component="a"
                href="https://calendly.com/mwoodward1-woodwardwebdev/30min"
                target="_blank"
                sx={{
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    py: 1.5,
                    textTransform: "uppercase",
                    borderRadius: 2,
                    // bgcolor: "rgba(255,255,255,0.02)",
                }}
            >
              Book a Free Consultation
            </Button>
          </Grid>
        </Grid>

        <Box mt={4} sx={{ display: "flex", justifyContent: "space-between" }}>
          <SocialBar />
            <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
              Michael Woodward © 2025
            </Typography>
        </Box>
      </motion.div>
    </Box>
  );
}

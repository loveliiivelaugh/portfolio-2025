import { Box, Typography, Chip, Button, Grid2 as Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
// import { SiWordpress, SiDatabricks, SiServerfault, SiE } from "react-icons/si";
// import { MdWeb, MdStorage, MdAppSettingsAlt } from "react-icons/md";
// import { FaDatabase, FaCode } from "react-icons/fa";
import SocialBar from "@components/custom/SocialBar/SocialBar";
import {
  MdAppSettingsAlt, MdWeb, MdStorage, MdApi, MdOutlineAnimation,
} from "react-icons/md";
import {
  FaCode, FaDatabase, FaRobot, FaServer, FaTools, FaCogs, FaRegKeyboard,
} from "react-icons/fa";
import {
  SiWordpress, SiDatabricks, SiServerfault, SiSupabase, SiOpenai, SiDocker, SiGooglecloud,
  SiGraphql, SiTypescript, SiNextdotjs, SiNotion, SiGithub, SiSlack,
} from "react-icons/si";

const services = [
  // 🔧 Core Development
  { label: "Application Development", icon: <MdAppSettingsAlt /> },
  { label: "Full Stack Web Development", icon: <MdWeb /> },
  { label: "API Development", icon: <MdApi /> },
  { label: "Database Management", icon: <FaDatabase /> },

  // 🧠 AI + Automation
  { label: "AI-Powered Automation", icon: <MdOutlineAnimation /> },
  { label: "Local LLM Infrastructure", icon: <SiOpenai /> },
  { label: "Agentic System Design", icon: <FaRobot /> },
  { label: "Memory & Vector DBs", icon: <SiDatabricks /> },

  // 🧰 Tools + Integrations
  { label: "Supabase Architecture", icon: <SiSupabase /> },
  { label: "Notion Automation", icon: <SiNotion /> },
  { label: "Slack Bots & Workflows", icon: <SiSlack /> },
  { label: "GitHub Actions / DevOps", icon: <SiGithub /> },
  { label: "Dockerized Services", icon: <SiDocker /> },

  // 🗂️ CMS / Web
  { label: "Custom WordPress Solutions", icon: <SiWordpress /> },
  { label: "CMS + Content Systems", icon: <SiDatabricks /> },
  { label: "Hosting & Deployment", icon: <SiServerfault /> },
  { label: "Cloud Services", icon: <SiGooglecloud /> },

  // 🧩 Frameworks / Tools
  { label: "Next.js / React", icon: <SiNextdotjs /> },
  { label: "GraphQL / REST", icon: <SiGraphql /> },
  { label: "TypeScript Engineering", icon: <SiTypescript /> },

  // 🔒 Infrastructure
  { label: "Local-First Architecture", icon: <FaServer /> },
  { label: "Automation Pipelines", icon: <FaCogs /> },
  { label: "Self-Hosted Systems", icon: <FaTools /> },
];


export default function ServicesSection() {
  const theme = useTheme();

  return (
    <Box component="section" py={6}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Services
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
                bgcolor: theme.palette.grey[900],
                color: theme.palette.common.white,
                borderRadius: "999px",
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
          Let’s Build Something
        </Typography>

        <Grid container spacing={3} alignItems="center" mt={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Button
              fullWidth
              variant="outlined"
              href="mailto:hello@woodwardwebdev.com"
              onClick={() => navigator.clipboard.writeText("hello@woodwardwebdev.com")}
              sx={{
                fontWeight: 600,
                fontSize: "0.95rem",
                py: 1.5,
                textTransform: "uppercase",
                borderRadius: 2,
              }}
            >
              hello@woodwardwebdev.com
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                component="a"
                href="https://calendly.com/mwoodward1-woodwardwebdev/30min"
                target="_blank"
                sx={{
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    py: 1.5,
                    textTransform: "uppercase",
                    borderRadius: 2,
                }}
            >
              Book a Free Consultation
            </Button>
          </Grid>
        </Grid>

        <Box mt={4} sx={{ display: "flex", justifyContent: "space-between" }}>
          <SocialBar />
          <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
            Made with ❤️ by Michael Woodward © 2025
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
}

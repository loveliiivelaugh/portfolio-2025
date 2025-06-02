import { Box, Grid2 as Grid, ListItemText, Typography, Chip, Button, Avatar, Stack, Tooltip } from "@mui/material";
import {
    SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiGraphql,
    SiDocker, SiPostgresql, SiOpenai, SiRedux, SiZod, SiBun, SiGithub, SiSupabase,
} from "react-icons/si";
import SlideIn from "@theme/animations/SlideIn";
import SocialBar from "@components/custom/SocialBar/SocialBar";
import headshotCropped from "@assets/headshot-cropped.png";
import { motion } from "framer-motion";
import DateTimeLabel from "@components/custom/DateTimeLabel/DateTimeLabel";

const MotionButton = motion(Button as any);

const techIcons = [
    { icon: <SiJavascript />, label: "JavaScript" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <SiReact />, label: "React" },
    { icon: <SiNodedotjs />, label: "Node.js" },
    { icon: <SiSupabase />, label: "Supabase" },
    { icon: <SiDocker />, label: "Docker" },
    { icon: <SiPostgresql />, label: "PostgreSQL" },
    { icon: <SiOpenai />, label: "LLMs" },
    { icon: <SiZod />, label: "Zod/OpenAPI" },
    { icon: <SiBun />, label: "Bun Runtime" },
];

export default function HeroSection() {
    return (
        <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }} order={2}>
                <SlideIn>
                    <Typography variant="h2" fontWeight={400}>
                        Michael Woodward
                    </Typography>

                    <Box display="flex" alignItems="center" gap={2} mt={1}>
                        <Typography variant="h4" fontWeight={500}>
                            AI Systems Engineer & Automation Architect
                        </Typography>
                        <Chip
                            label={<i>est. 2019</i>}
                            sx={{
                                fontSize: "0.875rem",
                                fontStyle: "italic",
                                bgcolor: "grey.800",
                                color: "white",
                            }}
                        />
                    </Box>

                    <Stack direction="row" spacing={2} mt={2}>
                        {techIcons.map((tech, idx) => (
                            <Tooltip key={idx} title={tech.label} arrow>
                                <Box sx={{ fontSize: 24, color: "text.secondary" }}>{tech.icon}</Box>
                            </Tooltip>
                        ))}
                    </Stack>

                    <ListItemText 
                        secondary={(
                            <a
                                href="https://www.discover.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#F6A623", textDecoration: "none", fontWeight: 600, fontSize: "20px" }}
                            >
                                Discover Financial Services
                            </a>
                        )} 
                        primary={<Typography typography="h6">Applications Engineer <span style={{ color: "#999" }}>@</span></Typography>}
                    />

                    <Typography variant="h6" color="text.secondary">
                        Based in Chicago, Illinois, USA <span style={{ fontSize: "14px" }}><DateTimeLabel /> CST</span>
                    </Typography>

                    <Stack direction="row" spacing={2} mt={2}>
                        <MotionButton
                            variant="outlined"
                            size="large"
                            whileHover={{ scale: 1.1 }}
                            component="a"
                            target="_blank"
                            href="https://docs.google.com/document/d/1XRXuKHKSs5A1Kh2XkxHu-qxJpbrd527_ug9ycvp7u2o/edit?usp=sharing"
                        >
                            View Resume
                        </MotionButton>
                        <SocialBar />
                    </Stack>
                </SlideIn>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }} order={1}>
                <SlideIn>
                    <Box textAlign="center">
                        <Avatar
                            src={headshotCropped}
                            sx={{ width: 200, height: 200, mx: "auto", boxShadow: 3 }}
                        />
                        <Typography
                            variant="subtitle1"
                            fontStyle="italic"
                            mt={2}
                            px={2}
                            color="text.secondary"
                            textAlign="center"
                        >
                            "I build autonomous systems, local-first infrastructure, and powerful developer tooling for teams building the future."
                        </Typography>
                    </Box>
                </SlideIn>
            </Grid>
        </Grid>
    );
}

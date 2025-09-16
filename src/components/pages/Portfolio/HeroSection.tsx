import { Box, Container, Grid2 as Grid, Typography, Button, Avatar, Stack, Tooltip, Icon } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
    SiJavascript, SiTypescript, SiReact, SiNodedotjs,
    SiDocker, SiPostgresql, SiOpenai, SiZod, SiBun, SiSupabase,
} from "react-icons/si";
import SlideIn from "@theme/animations/SlideIn";
import SocialBar from "@components/custom/SocialBar/SocialBar";
import headshotCropped from "@assets/headshot-cropped.png";
import { motion } from "framer-motion";
import DateTimeLabel from "@components/custom/DateTimeLabel/DateTimeLabel";

const MotionButton = motion(Button as any);

const techIcons = [
    { logo: <SiJavascript />, name: "JavaScript" },
    { logo: <SiTypescript />, name: "TypeScript" },
    { logo: <SiReact />, name: "React" },
    { logo: <SiNodedotjs />, name: "Node.js" },
    { logo: <SiSupabase />, name: "Supabase" },
    { logo: <SiDocker />, name: "Docker" },
    { logo: <SiPostgresql />, name: "PostgreSQL" },
    { logo: <SiOpenai />, name: "LLMs" },
    { logo: <SiZod />, name: "Zod/OpenAPI" },
    { logo: <SiBun />, name: "Bun Runtime" },
];

// Styled Components
const MarqueeWrapper = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  backgroundColor: theme.palette.background.default,
//   padding: theme.spacing(6, 0),
}));

const MarqueeInner = styled(motion.div)({
  display: 'flex',
  gap: '80px',
  alignItems: 'center',
});

const PlatformLogo = styled('img')({
  height: 40,
  filter: 'brightness(0) invert(1)',
  opacity: 0.7,
  transition: 'opacity 0.3s ease',
  '&:hover': { opacity: 1 }
});

const Section = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    padding: theme.spacing(8, 0),
}));

export function PlatformCarousel() {
    return (
        <Section zIndex={100} sx={{ maxWidth: "90vw" }}>
            {/* <Container maxWidth="md">
                <SlideIn>
                    <Typography variant="h4" fontWeight={600} textAlign="center" gutterBottom>
                        Platforms I Build With
                    </Typography>
                </SlideIn> */}

                <MarqueeWrapper>
                    <MarqueeInner
                        animate={{
                            x: ['0%', '-50%']
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 40, // Smooth slow professional scroll
                            ease: 'linear'
                        }}
                    >
                        {[...techIcons, ...techIcons].map((platform, index) => (
                            <Tooltip title={platform.name} key={index}>
                                <Icon>
                                    {platform.logo}
                                </Icon>
                                {/* {platform.logo} */}
                                {/* <PlatformLogo src={platform.logo} alt={platform.name} /> */}
                            </Tooltip>
                        ))}
                    </MarqueeInner>
                </MarqueeWrapper>
            {/* </Container> */}
        </Section>
    );
}



export default function HeroSection() {
    return (
        <Grid container spacing={4} alignItems="center">
            {/* <Grid size={12} order={3}>
                <PlatformCarousel />
            </Grid> */}
            <Grid size={{ xs: 12, md: 8 }} order={2}>
                <SlideIn>
                    <Typography variant="h5" color="text.secondary" fontWeight={100}>
                        Michael Woodward
                    </Typography>

                    <Box display="flex" alignItems="center" gap={2}>
                        <Typography variant="h6" fontWeight={500}>
                            Full-Stack JavaScript Developer
                        </Typography>
                        {/* <Chip
                            label={<i>est. 2019</i>}
                            sx={{
                                fontSize: "0.875rem",
                                fontStyle: "italic",
                                bgcolor: "grey.800",
                                color: "white",
                            }}
                        /> */}
                    </Box>

                    {/* <Stack direction="row" spacing={2} mt={2}>
                        {techIcons.map((tech, idx) => (
                            <Tooltip key={idx} title={tech.name} arrow>
                                <Box sx={{ fontSize: 24, color: "text.secondary" }}>{tech.logo}</Box>
                            </Tooltip>
                        ))}
                    </Stack> */}
                    {/* <PlatformCarousel /> */}

                    {/* <ListItemText 
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
                    /> */}

                    {/* <Typography variant="h6" color="text.secondary">
                        Based in Chicago, Illinois, USA <span style={{ fontSize: "14px" }}><DateTimeLabel /> CST</span>
                    </Typography> */}
                    <Typography
                        variant="subtitle1"
                        // fontStyle="italic"
                        // mt={2}
                        // px={2}
                        color="text.secondary"
                        // textAlign="center"
                    >
                        I build for the web, local-first infrastructure, and powerful developer tooling for teams building the future.
                    </Typography>

                    <Stack direction="row" spacing={2} mt={2}>
                        {/* <MotionButton
                            variant="outlined"
                            size="large"
                            whileHover={{ scale: 1.1 }}
                            component="a"
                            target="_blank"
                            href="https://docs.google.com/document/d/1XRXuKHKSs5A1Kh2XkxHu-qxJpbrd527_ug9ycvp7u2o/edit?usp=sharing"
                        >
                            View Resume
                        </MotionButton> */}
                        {/* <SocialBar /> */}
                    </Stack>
                </SlideIn>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }} order={1}>
                <SlideIn>
                    <Box textAlign="center">
                        <Avatar
                            src={headshotCropped}
                            variant="square"
                            sx={{ 
                                width: 200, height: 200, 
                                mx: "auto", boxShadow: 3,
                                borderRadius: "24px"
                            }}
                        />
                        <SocialBar />
                        {/* <Typography
                            variant="subtitle1"
                            fontStyle="italic"
                            mt={2}
                            px={2}
                            color="text.secondary"
                            textAlign="center"
                        >
                            "I build for the web, local-first infrastructure, and powerful developer tooling for teams building the future."
                        </Typography> */}
                    </Box>
                </SlideIn>
            </Grid>

            {/* <PlatformCarousel /> */}
        </Grid>
    );
}

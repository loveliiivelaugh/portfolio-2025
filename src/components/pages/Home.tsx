import { ThemeProvider } from "@emotion/react"
import {
    Box,
    Button,
    Card, CardContent, CircularProgress,
    Container, CssBaseline, Grid2 as Grid, ListItem, ListItemIcon,
    ListItemText, Stack, Typography, createTheme
} from "@mui/material";
// import { ThemeToggleButton } from "@theme/ThemeProvider";
import useUtilityStore from "@store/utilityStore";
import HeroSection, { PlatformCarousel } from "./Portfolio/HeroSection";
import { ExperienceSection2 } from "./Portfolio/ExperienceSection2";
import { cms } from "@config/../data/cms";
import SlideIn from "@theme/animations/SlideIn";
// import ProjectCard from "./Portfolio/ProjectCard";
import ServicesSection from "./Portfolio/ServicesSection";
// import TestimonialsSection from "./Portfolio/TestimonialSection";
import CustomCursor from "@theme/animations/CircleCursor";
import { useThemeStore } from "@store/themeStore";
import { motion } from "framer-motion";
// import AboutSection from "./Portfolio/AboutSection";
// import CertificationsSection from "./Portfolio/CertificationSection";
// import CoreValues from "./Portfolio/CoreValues";
// import ExperienceTimeline from "./Portfolio/ExperienceTimelineSection";
import { useIsMobile } from "@lib/useIsMobile";
import { DownloadIcon } from "@radix-ui/react-icons";
import { Place } from "@mui/icons-material";
import { ProjectGallery } from "@components/custom/ProjectGallery";
import DateTimeLabel from "@components/custom/DateTimeLabel/DateTimeLabel";
import FeaturedWriting, { PostItem } from "@components/custom/WritingSection";
import MovingOrbs from "@components/custom/MovingOrbs";
import SectionPattern from "@components/custom/PatternSection";

import { alpha, styled } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#0FA3B1" }, // your accent (used on hover)
        text: { primary: "#E6E9EE", secondary: "#AAB1BC" },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 999,
                },

                // SOLID pill — white by default, accent on hover
                contained: ({ theme }) => ({
                    backgroundColor: theme.palette.common.white,
                    color: "#0E1116",
                    boxShadow: "0 1px 0 rgba(0,0,0,.4), inset 0 0 0 1px rgba(0,0,0,.06)",
                    "&:hover": {
                        backgroundColor: theme.palette.common.white,
                        color: theme.palette.primary.main,
                        boxShadow: `inset 0 0 0 1px ${alpha(theme.palette.primary.main, 0.6)}`,
                    },
                }),

                // OUTLINED pill — white border/text; accent tint on hover
                outlined: ({ theme }) => ({
                    color: theme.palette.common.white,
                    borderColor: alpha(theme.palette.common.white, 0.28),
                    "&:hover": {
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        backgroundColor: alpha(theme.palette.primary.main, 0.10),
                    },
                }),

                // TEXT button — white text; subtle accent tint on hover
                text: ({ theme }) => ({
                    color: theme.palette.common.white,
                    "&:hover": {
                        backgroundColor: alpha(theme.palette.primary.main, 0.10),
                        color: theme.palette.primary.main,
                    },
                }),
            },
        },

        // Optional: make icon buttons match the same hover feel
        MuiIconButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.common.white,
                    "&:hover": {
                        backgroundColor: alpha(theme.palette.primary.main, 0.10),
                        color: theme.palette.primary.main,
                    },
                }),
            },
        },
    },
});

const theme2 = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#0FA3B1" },              // your accent (ring color)
        text: { primary: "#E6E9EE", secondary: "#AAB1BC" },
    },
    components: {
        MuiButton: {
            defaultProps: { disableElevation: true },
            styleOverrides: {
                root: ({ theme }) => ({
                    textTransform: "none",
                    borderRadius: 999,
                    position: "relative",
                    transition: "box-shadow .2s ease, color .2s ease, border-color .2s ease, background-color .2s ease",
                    // ring color as a CSS var
                    "--ring": alpha(theme.palette.primary.main, 0.22) as any,
                    // base subtle stroke
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
                    // ring on hover (outside only)
                    "&:hover": {
                        boxShadow: `0 0 0 8px var(--ring), inset 0 0 0 1px rgba(255,255,255,0.08)`,
                    },
                    // stronger ring for keyboard focus
                    "&:focus-visible": {
                        boxShadow: `0 0 0 10px ${alpha(theme.palette.primary.main, 0.30)}`,
                        outline: "none",
                    },
                }),

                // Contained: white pill at rest
                contained: ({ theme }) => ({
                    backgroundColor: theme.palette.common.white,
                    color: "#0E1116",
                    "&:hover": {
                        backgroundColor: theme.palette.common.white,   // keep white; ring handles color
                    },
                }),

                // Outlined: white stroke; ring on hover
                outlined: ({ theme }) => ({
                    color: theme.palette.common.white,
                    borderColor: "rgba(255,255,255,0.28)",
                    backgroundColor: "transparent",
                    "&:hover": {
                        backgroundColor: "transparent",
                        borderColor: "rgba(255,255,255,0.55)",
                    },
                }),

                // Text: neutral; ring only
                text: {
                    color: "#fff",
                    backgroundColor: "transparent",
                    "&:hover": { backgroundColor: "transparent" },
                },
            },
        },

        // (optional) IconButtons get the same ring
        MuiIconButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    borderRadius: 999,
                    transition: "box-shadow .2s ease, color .2s ease, background-color .2s ease",
                    "--ring": alpha(theme.palette.primary.main, 0.22) as any,
                    "&:hover": { boxShadow: `0 0 0 8px var(--ring)` },
                    "&:focus-visible": { boxShadow: `0 0 0 10px ${alpha(theme.palette.primary.main, 0.30)}` },
                }),
            },
        },
    },
});

const MotionButton = motion(Button as any);

// TODO: New Reusable Component
// *QueryWrapper family
const getData = (query: any, dataTarget: string, onSuccess: (data: any) => JSX.Element) => {
    if (query.isLoading) return <CircularProgress />;
    if (!query.isSuccess || !query.data) return [];

    const properties = dataTarget.split('.');
    let returnData = query.data;

    for (const prop of properties) {
        if (!returnData) return []; // if undefined/null, exit early
        returnData = returnData[prop];
    }

    return onSuccess(returnData);
};

const AnimatedType = motion(Typography as any);

const Home = () => {
    const { colorMode } = useUtilityStore();
    const { isHovering, setIsHovering } = useThemeStore();
    const isMobile = useIsMobile();
    // const navigate = useNavigate();
    // const appConfigQuery = useQuery(queries.query("/api/v1/appConfig"));
    // *mock config query for prod for now
    const appConfigQuery = {
        data: { cms },
        isLoading: false,
        isSuccess: true
    };

    let hidePricing = true;

    return (
        <ThemeProvider theme={theme}
        // theme={createTheme({ palette: { mode: colorMode } })}
        >
            <CssBaseline />
            <Container maxWidth={false}>
                <MovingOrbs />
                {/* Only use custom cursor on Desktop */}
                {!isMobile && <CustomCursor active={isHovering} />}
                <Box sx={{ position: "fixed", top: 20, right: 36, zIndex: 100 }}>
                    <Button
                        component="a"
                        target="_blank"
                        href="https://docs.google.com/document/d/1XRXuKHKSs5A1Kh2XkxHu-qxJpbrd527_ug9ycvp7u2o/edit?usp=sharing"
                        color="inherit"
                        variant="outlined"
                        sx={{
                            display: "flex", alignItems: "center", gap: 1,
                            backdropFilter: "blur(10px)",
                            borderRadius: "24px",
                            border: "1px solid rgba(255,255,255,0.08)",
                            boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                            "&:hover": {
                                bgcolor: "rgba(255,255,255,0.02)",
                                transform: "translateY(-2px)",
                                boxShadow: "0 12px 40px rgba(0,0,0,.45)"
                            }
                        }}
                    >Download Resume <DownloadIcon /></Button>
                </Box>
                <Box sx={{ position: "sticky", marginTop: "-72px", marginLeft: "12px" }}>
                    {/* Chicago, IL, USA <Place /> */}
                    <ListItemText
                        primary={<>Chicago, IL USA <Place /></>}
                        secondary={<span style={{ fontSize: "12px" }}><DateTimeLabel /> CST</span>}
                        sx={{ color: "text.secondary" }}
                    />
                </Box>
                <Grid
                    container
                    p={4}
                    spacing={2}
                    // sx={{ 
                    //     maxWidth: "100vw", 
                    //     border: `1px solid ${colorMode === "dark" ? "white" : "black"}`, 
                    //     borderRadius: "24px",
                    //     mb: 4
                    // }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >

                    {/* <Grid size={12} sx={{ display: "flex", justifyContent: "end" }}>
                        <ThemeToggleButton />
                    </Grid> */}

                    <Grid size={12}>
                        <SectionPattern variant="checker">
                            <HeroSection />
                        </SectionPattern>
                    </Grid>

                    <Grid size={12}>
                        <PlatformCarousel />
                    </Grid>

                    <Grid size={12} py={0}>
                        <SectionPattern variant="grid">
                            <SlideIn>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Box>
                                        <Typography variant="h4" fontWeight={600}>Showcase</Typography>
                                        <ListItemText secondary="Projects, Pipelines & OSS Systems" sx={{ pl: 1, mb: 4 }} />
                                    </Box>
                                    <MotionButton
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
                                        href="https://woodwardstudio.dev/post/roadmap"
                                    >
                                        Read about my project roadmap
                                    </MotionButton>
                                </Box>
                                {/* @ts-ignore */}
                                <ProjectGallery projects={appConfigQuery?.data?.cms?.showcase || []} />
                                {/* <Grid container spacing={2}>
                                {appConfigQuery.data.cms.showcase.map((project, index) => (
                                    <Grid size={{ sm: 12, md: 3, lg: 3 }} sx={{ display: "flex", justifyContent: "space-around"}}>
                                        <ProjectCard
                                            key={index}
                                            title={project.name}
                                            description={project.description}
                                            imageUrl={project.thumb || "https://picsum.photos/400"}
                                            tech={project.tech || ["React", "Supabase", "Zustand", "Framer Motion"]}
                                            link={project.live as string}
                                            github={project.github as string}
                                        />
                                    </Grid>
                                ))}
                            </Grid> */}
                                {/* <Grid container spacing={2} p={2}>
                                <ShowcaseCarousel projects={getData(appConfigQuery, "cms.showcase", (data: any) => data) as any} />
                            </Grid> */}
                            </SlideIn>
                        </SectionPattern>
                    </Grid>

                    <Grid size={12} py={6}>
                        <SectionPattern variant="checker">
                            {/* <DocumentationSection /> */}
                            <SlideIn>
                                <Typography variant="h4" fontWeight={600}>Documentation</Typography>
                                <ListItemText secondary="Proven, enterprise-grade documentation workflows built into every project I ship." sx={{ pl: 1, mb: 4 }} />
                                <Grid container>
                                    {getData(appConfigQuery, "cms.docs", (data: any) => data.map((document: {
                                        name: string;
                                        description: string[];
                                        link: string;
                                    }, index: number) => (
                                        <Grid key={index} size={{ sm: 12, md: 4 }}>
                                            <Stack
                                                component="a"
                                                href={document.link}
                                                target="_blank"
                                                sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
                                            >
                                                <ListItemIcon>
                                                    <img src={(document as any).logo} alt={document.name} style={{ height: "100px" }} />
                                                </ListItemIcon>
                                                <ListItem key={index} sx={{ textAlign: "center" }}>
                                                    <ListItemText
                                                        primary={
                                                            <AnimatedType
                                                                variant="h5"
                                                                sx={{ color: (colorMode === "light") ? "#333" : "#fff", fontWeight: 300 }}
                                                                whileHover={{ scale: 1.1 }}
                                                            >
                                                                {document.name}
                                                            </AnimatedType>
                                                        }
                                                        secondary={document.description[0] ?? "Woodward-Studio Application Framework Documentation"}
                                                    />
                                                </ListItem>
                                            </Stack>
                                        </Grid>
                                    )))}
                                </Grid>
                            </SlideIn>
                        </SectionPattern>
                    </Grid>

                    {/* Experience */}
                    <Grid size={12} py={4}>
                        <SectionPattern variant="grid">
                            <SlideIn>
                                <Typography variant="h4" fontWeight={600} gutterBottom>Experience</Typography>
                                <ExperienceSection2 />
                            </SlideIn>
                        </SectionPattern>
                    </Grid>

                    {/* <TestimonialsSection /> */}
                    {/* <CertificationsSection /> */}

                    {/* <AboutSection /> */}

                    {/* <ExperienceTimeline /> */}

                    {/* <CoreValues /> */}

                    <Grid size={12} py={4}>
                        <SectionPattern variant="checker">
                            <Container>
                                <SlideIn>
                                    {/* <Typography variant="h4" fontWeight={600} gutterBottom>Writing</Typography> */}
                                    <FeaturedWriting posts={cms.posts as PostItem[]} />
                                </SlideIn>
                            </Container>
                        </SectionPattern>
                    </Grid>

                    <Grid size={12} py={4}>
                        <SectionPattern variant="checker">
                            <ServicesSection />
                        </SectionPattern>
                    </Grid>

                    {/* Pricing */}
                    {!hidePricing && (
                        <Grid size={12}>
                            <SlideIn>
                                <Typography variant="h4" gutterBottom>Pricing</Typography>
                                <Grid container spacing={2}>
                                    {[
                                        { label: "Small/Simple", cost: "up to $500" },
                                        { label: "Medium", cost: "up to $5,000" },
                                        { label: "Complex", cost: "starting at $5,000" },
                                        { label: "Custom", cost: "Call for Pricing ($75/hr)" },
                                        { label: "AI", cost: "Call for Pricing ($100/hr)" },
                                        { label: "Automation", cost: "Call for Pricing ($50/hr)" },
                                    ].map((item, idx) => (
                                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                                            <Card>
                                                <CardContent>
                                                    <Typography variant="h6">{item.label}</Typography>
                                                    <Typography>{item.cost}</Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </SlideIn>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </ThemeProvider>
    )
}

export default Home
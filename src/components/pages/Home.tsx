import { ThemeProvider } from "@emotion/react"
import {
    Box,
    Button,
    Card, CardContent, CircularProgress,
    Container, CssBaseline, Grid2 as Grid, ListItem, ListItemIcon,
    ListItemText, Stack, Typography, createTheme
} from "@mui/material";
// import { ThemeToggleButton } from "@theme/ThemeProvider";
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
import { Place } from "@mui/icons-material";
import { ProjectGallery } from "@components/custom/ProjectGallery";
import DateTimeLabel from "@components/custom/DateTimeLabel/DateTimeLabel";
import FeaturedWriting, { PostItem } from "@components/custom/WritingSection";
import MovingOrbs from "@components/custom/MovingOrbs";
import SectionPattern from "@components/custom/PatternSection";
import AutomationPulse from "@components/custom/AutomationPulse";
import { Link as RouterLink } from "react-router-dom";

import { alpha } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: "light",
        primary: { main: "#0B5D5B" },
        secondary: { main: "#7C4A2D" },
        background: {
            default: "#f6f2eb",
            paper: "#fbf7f0",
        },
        text: { primary: "#1b2226", secondary: "#4a565c" },
    },
    typography: {
        fontFamily: '"Sora", "Inter", sans-serif',
        h1: { fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, letterSpacing: "-0.02em" },
        h2: { fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, letterSpacing: "-0.02em" },
        h3: { fontFamily: '"Cormorant Garamond", serif', fontWeight: 600 },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 999,
                },
                contained: ({ theme }) => ({
                    backgroundColor: theme.palette.primary.main,
                    color: "#f8f6f1",
                    boxShadow: "0 12px 24px rgba(12, 24, 28, 0.12)",
                    "&:hover": {
                        backgroundColor: "#0f6f6a",
                        boxShadow: "0 18px 40px rgba(12, 24, 28, 0.18)",
                    },
                }),
                outlined: ({ theme }) => ({
                    color: theme.palette.text.primary,
                    borderColor: "rgba(13, 22, 26, 0.2)",
                    "&:hover": {
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        backgroundColor: alpha(theme.palette.primary.main, 0.08),
                    },
                }),
                text: ({ theme }) => ({
                    color: theme.palette.text.primary,
                    "&:hover": {
                        backgroundColor: alpha(theme.palette.primary.main, 0.08),
                        color: theme.palette.primary.main,
                    },
                }),
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.text.primary,
                    "&:hover": {
                        backgroundColor: alpha(theme.palette.primary.main, 0.08),
                        color: theme.palette.primary.main,
                    },
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

    // Google Developer Learning
    // https://g.dev/michael-woodward
    // Amazon Skills Learning
    // https://skillsprofile.skillbuilder.aws/user/michael-woodward
    // Salesforce Learning 
    // https://www.salesforce.com/trailblazer/michaelawoodward

    return (
        <ThemeProvider theme={theme}
        // theme={createTheme({ palette: { mode: colorMode } })}
        >
            <CssBaseline />
            <Container maxWidth={false} sx={{ px: { xs: 2, md: 6 }, backgroundColor: "background.default" }}>
                <MovingOrbs />
                {!isMobile && <CustomCursor active={isHovering} />}

                <Box
                    sx={{
                        position: "sticky",
                        top: 0,
                        zIndex: 40,
                        backdropFilter: "blur(12px)",
                        background: "rgba(246, 242, 235, 0.86)",
                        borderBottom: "1px solid rgba(15, 22, 26, 0.08)",
                    }}
                >
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        alignItems={{ xs: "flex-start", md: "center" }}
                        justifyContent="space-between"
                        spacing={2}
                        sx={{ py: 2 }}
                    >
                        <Stack spacing={0.5}>
                            <Typography variant="h6" fontWeight={600}>
                                Woodward Studio
                            </Typography>
                            <ListItemText
                                primary={<>Chicago, IL USA <Place /></>}
                                secondary={<span style={{ fontSize: "12px" }}><DateTimeLabel /> CST</span>}
                                sx={{ color: "text.secondary" }}
                            />
                        </Stack>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} alignItems={{ xs: "flex-start", sm: "center" }}>
                            <Button component="a" href="#showcase" variant="text">Work</Button>
                            <Button component="a" href="#systems" variant="text">Systems</Button>
                            <Button component="a" href="#experience" variant="text">Experience</Button>
                            <Button component={RouterLink} to="/resume" variant="contained">Interactive Resume</Button>
                        </Stack>
                    </Stack>
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

                    <Grid size={12} id="systems" py={2}>
                        <SectionPattern variant="grid">
                            <SlideIn>
                                <AutomationPulse />
                            </SlideIn>
                        </SectionPattern>
                    </Grid>

                    <Grid size={12}>
                        <PlatformCarousel />
                    </Grid>

                    <Grid size={12} id="showcase" py={0}>
                        <SectionPattern variant="grid">
                            <SlideIn>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
                                    <Box>
                                        <Typography variant="h4" fontWeight={600}>Selected Systems</Typography>
                                        <ListItemText secondary="Automation cores, product platforms, and real-world tooling." sx={{ pl: 1, mb: 4 }} />
                                    </Box>
                                    <MotionButton
                                        variant="outlined"
                                        color="inherit"
                                        whileHover={{ scale: 1.05 }}
                                        sx={{
                                            borderRadius: "24px",
                                            border: "1px solid rgba(18, 22, 26, 0.16)",
                                            boxShadow: "0 10px 30px rgba(18, 22, 25, 0.08)",
                                            "&:hover": {
                                                bgcolor: "rgba(11, 93, 91, 0.08)",
                                                transform: "translateY(-2px)",
                                                boxShadow: "0 14px 40px rgba(18, 22, 25, 0.12)"
                                            }
                                        }}
                                        component="a"
                                        target="_blank"
                                        href="https://woodwardstudio.dev/post/roadmap"
                                    >
                                        Roadmap Notes
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
                                <Typography variant="h4" fontWeight={600}>Documentation Systems</Typography>
                                <ListItemText secondary="Contracts, runbooks, and living docs embedded into every delivery." sx={{ pl: 1, mb: 4 }} />
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
                                                    <Box component="img" src={(document as any).logo} alt={document.name} sx={{ height: "100px", filter: "grayscale(100%)", transition: "all 0.3s ease", "&:hover": { filter: "grayscale(0%)", transform: "scale(1.1)" } }} />
                                                </ListItemIcon>
                                                <ListItem key={index} sx={{ textAlign: "center" }}>
                                                    <ListItemText
                                                        primary={
                                                            <AnimatedType
                                                                variant="h5"
                                                                sx={{ color: "text.primary", fontWeight: 400 }}
                                                                whileHover={{ scale: 1.05 }}
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
                    <Grid size={12} py={4} id="experience">
                        <SectionPattern variant="grid">
                            <SlideIn>
                                <Typography variant="h4" fontWeight={600} gutterBottom>Execution History</Typography>
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
                                    <FeaturedWriting posts={cms.posts as PostItem[]} heading="Field Notes" />
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

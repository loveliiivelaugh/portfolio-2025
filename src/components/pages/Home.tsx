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
import AboutSection from "./Portfolio/AboutSection";
import CertificationsSection from "./Portfolio/CertificationSection";
import CoreValues from "./Portfolio/CoreValues";
import ExperienceTimeline from "./Portfolio/ExperienceTimelineSection";
import { useIsMobile } from "@lib/useIsMobile";
import { DownloadIcon } from "@radix-ui/react-icons";
import { Place } from "@mui/icons-material";
import { ProjectGallery } from "@components/custom/ProjectGallery";
import DateTimeLabel from "@components/custom/DateTimeLabel/DateTimeLabel";
import FeaturedWriting, { PostItem } from "@components/custom/WritingSection";

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
    const {isHovering, setIsHovering} = useThemeStore();
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
        <ThemeProvider theme={createTheme({ palette: { mode: colorMode } })}>
            <CssBaseline />
            <Container maxWidth={false}>
                {/* Only use custom cursor on Desktop */}
                {!isMobile && <CustomCursor active={isHovering} />}
                <Box sx={{ position: "fixed", top: 20, right: 20, zIndex: 100 }}>
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
                <Box sx={{ position: "sticky", marginTop: "-60px" }}>
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
                        <HeroSection />
                    </Grid>

                    <Grid size={12}>
                        <PlatformCarousel />
                    </Grid>

                    <Grid size={12} py={0}>
                        <SlideIn>
                            <Typography variant="h4" fontWeight={600}>Showcase</Typography>
                            <ListItemText secondary="Projects, Pipelines & OSS Systems" sx={{ pl: 1, mb: 4 }} />
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
                    </Grid>
                    
                    <Grid size={12} py={6}>
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
                                                            sx={{ color: (colorMode === "light") ? "#333" : "#fff", fontWeight: 300}} 
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
                    </Grid>

                    {/* Experience */}
                    <Grid size={12} py={4}>
                        <SlideIn>
                            <Typography variant="h4" fontWeight={600} gutterBottom>Experience</Typography>
                            <ExperienceSection2 />
                        </SlideIn>
                    </Grid>

                    {/* <TestimonialsSection /> */}
                    {/* <CertificationsSection /> */}

                    {/* <AboutSection /> */}

                    {/* <ExperienceTimeline /> */}

                    {/* <CoreValues /> */}

                    <Grid size={12} py={4}>
                        <Container>
                            <SlideIn>
                                {/* <Typography variant="h4" fontWeight={600} gutterBottom>Writing</Typography> */}
                                <FeaturedWriting posts={cms.posts as PostItem[]} />
                            </SlideIn>
                        </Container>
                    </Grid>

                    <ServicesSection />

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
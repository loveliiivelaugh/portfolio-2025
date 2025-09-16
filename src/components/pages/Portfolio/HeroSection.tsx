import React from "react";
import { Box, Grid2 as Grid, Typography, Avatar, Stack, Tooltip, Icon } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
    SiJavascript, SiTypescript, SiReact, SiNodedotjs,
    SiDocker, SiPostgresql, SiOpenai, SiZod, SiBun, SiSupabase,
} from "react-icons/si";
import SlideIn from "@theme/animations/SlideIn";
import SocialBar from "@components/custom/SocialBar/SocialBar";
import headshotCropped from "@assets/headshot-cropped.png";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const MotionButton = motion(Button as any);

// const techIcons = [
//     { logo: <SiJavascript />, name: "JavaScript" },
//     { logo: <SiTypescript />, name: "TypeScript" },
//     { logo: <SiReact />, name: "React" },
//     { logo: <SiNodedotjs />, name: "Node.js" },
//     { logo: <SiSupabase />, name: "Supabase" },
//     { logo: <SiDocker />, name: "Docker" },
//     { logo: <SiPostgresql />, name: "PostgreSQL" },
//     { logo: <SiOpenai />, name: "LLMs" },
//     { logo: <SiZod />, name: "Zod/OpenAPI" },
//     { logo: <SiBun />, name: "Bun Runtime" },
// ];

// // Styled Components
// const MarqueeWrapper = styled(Box)(({ theme }) => ({
//   overflow: 'hidden',
//   position: 'relative',
//   width: '100%',
//   backgroundColor: theme.palette.background.default,
// //   padding: theme.spacing(6, 0),
// }));

// const MarqueeInner = styled(motion.div)({
//   display: 'flex',
//   gap: '80px',
//   alignItems: 'center',
// });

// // const PlatformLogo = styled('img')({
// //   height: 40,
// //   filter: 'brightness(0) invert(1)',
// //   opacity: 0.7,
// //   transition: 'opacity 0.3s ease',
// //   '&:hover': { opacity: 1 }
// // });

// const Section = styled(Box)(({ theme }) => ({
//     backgroundColor: theme.palette.background.default,
//     color: theme.palette.text.primary,
//     padding: theme.spacing(8, 0),
// }));

// export function PlatformCarousel() {
//     return (
//         <Section zIndex={100} sx={{ maxWidth: "90vw" }}>
//             {/* <Container maxWidth="md">
//                 <SlideIn>
//                     <Typography variant="h4" fontWeight={600} textAlign="center" gutterBottom>
//                         Platforms I Build With
//                     </Typography>
//                 </SlideIn> */}

//                 <MarqueeWrapper>
//                     <MarqueeInner
//                         animate={{
//                             x: ['0%', '-50%']
//                         }}
//                         transition={{
//                             repeat: Infinity,
//                             repeatType: 'loop',
//                             duration: 40, // Smooth slow professional scroll
//                             ease: 'linear'
//                         }}
//                     >
//                         {[...techIcons, ...techIcons].map((platform, index) => (
//                             <Tooltip title={platform.name} key={index}>
//                                 <Icon>
//                                     {platform.logo}
//                                 </Icon>
//                                 {/* {platform.logo} */}
//                                 {/* <PlatformLogo src={platform.logo} alt={platform.name} /> */}
//                             </Tooltip>
//                         ))}
//                     </MarqueeInner>
//                 </MarqueeWrapper>
//             {/* </Container> */}
//         </Section>
//     );
// }
// import { Box, Grid, Tooltip, Icon } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import {
//   SiJavascript, SiTypescript, SiReact, SiNodedotjs,
//   SiDocker, SiPostgresql, SiOpenai, SiZod, SiBun, SiSupabase,
// } from "react-icons/si";
// import { motion } from "framer-motion";
// import React from "react";

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

// constants
// constants
const ICON_GAP_PX = 80;   // between individual icons
const SET_GAP_PX = 80;  // <-- visible blank gap between loops (tweak)

const MarqueeWrapper = styled(Box)(({ theme }) => ({
    position: "relative",
    overflow: "hidden",
    width: "100%",
    backgroundColor: theme.palette.background.default,
    WebkitMaskImage:
        "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
    maskImage:
        "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
}));

const Track = styled(motion.div)({
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    willChange: "transform",
});

const OneSet = React.forwardRef<HTMLDivElement>((_p, ref) => (
    <Box ref={ref} sx={{ display: "flex", alignItems: "center", gap: `${ICON_GAP_PX}px`, py: 0.5 }}>
        {techIcons.map((p, i) => (
            <Tooltip title={p.name} key={`${p.name}-${i}`}>
                <Icon
                    sx={{
                        fontSize: 28,
                        lineHeight: 1,
                        display: "inline-flex",
                        alignItems: "center",
                        color: "text.secondary",
                        opacity: 0.8,
                        transition: "opacity .2s ease, color .2s ease",
                        "&:hover": { opacity: 1, color: "primary.main" },
                    }}
                >
                    {p.logo}
                </Icon>
            </Tooltip>
        ))}
    </Box>
));
OneSet.displayName = "OneSet";

const Spacer = () => (
    <Box sx={{ flex: `0 0 ${SET_GAP_PX}px`, width: SET_GAP_PX, height: 1 }} />
);

export function PlatformCarousel() {
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const setRef = React.useRef<HTMLDivElement>(null);

    const [cycleWidth, setCycleWidth] = React.useState(0); // one set + spacer
    const [rowHeight, setRowHeight] = React.useState(48);
    const [repeatCount, setRepeatCount] = React.useState(2);

    React.useLayoutEffect(() => {
        const measure = () => {
            const rect = setRef.current?.getBoundingClientRect();
            const sw = rect?.width ?? 0;                        // sub-pixel precise
            const sh = rect?.height ?? 48;
            const ww = wrapperRef.current?.offsetWidth ?? 0;

            if (sw > 0) {
                const cycle = Math.round(sw + SET_GAP_PX + 0.5);  // avoid 1px seam
                setCycleWidth(cycle);
                setRowHeight(Math.max(48, Math.ceil(sh)));
                setRepeatCount(Math.max(2, Math.ceil(ww / cycle) + 2));
            }
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    return (
        <Box sx={{ py: 4 }}>
            <MarqueeWrapper ref={wrapperRef} sx={{ height: rowHeight }}>
                <Track
                    animate={cycleWidth ? { x: [0, -cycleWidth] } : undefined}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                >
                    {/* measured cycle */}
                    <OneSet ref={setRef} />
                    <Spacer />
                    {/* extras */}
                    {Array.from({ length: repeatCount - 1 }).map((_, i) => (
                        <React.Fragment key={i}>
                            <OneSet />
                            <Spacer />
                        </React.Fragment>
                    ))}
                </Track>
            </MarqueeWrapper>
        </Box>
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
                        <MotionButton
                            variant="outlined"
                            size="large"
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
                            href="https://woodwardstudio.dev/consulting"
                        >
                            Work with me
                        </MotionButton>
                        <MotionButton
                            variant="outlined"
                            size="large"
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
                            href="https://woodwardstudio.dev"
                        >
                            Read my blog
                        </MotionButton>
                        
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

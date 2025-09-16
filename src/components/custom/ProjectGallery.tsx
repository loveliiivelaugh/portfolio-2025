// ProjectGallery.tsx
import { Box, Card, CardActionArea, CardContent, Chip, Grid2 as Grid, IconButton, Stack, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
// OPTIONAL: remove framer bits if you don't use it
import { motion } from "framer-motion";

type Project = {
    title: string;
    blurb: string;
    cover: string;        // 16:10 image URL
    href: string;         // live/demo or case study
    repo?: string;
    caseStudy?: string;
    tags: string[];
};

type Project2 = {
    name: string;
    description: string;
    thumb: string;        // 16:10 image URL
    href: string;         // live/demo or case study
    live: string;         // live/demo or case study
    repo?: string;
    caseStudy?: string;
    tags: string[];
    tech: string[];
};

export function ProjectGallery({ projects }: { projects: Project2[] }) {
    return (
        <Grid container spacing={3}>
            {projects.map((p, i) => (
                <Grid key={p.name} size={{ xs: 12, sm: 6, md: 4 }}>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.35, ease: [0.2, 0.6, 0, 1] }}
                    >
                        <ProjectCard
                            title={p.name}
                            blurb={p.description.split(".")[0]}
                            cover={p.thumb}
                            href={p.live}
                            repo={p.live}
                            caseStudy={p.description}
                            tags={p.tech}
                            index={i}
                        />
                        {/* <ProjectCard {...p} index={i} /> */}
                    </motion.div>
                </Grid>
            ))}
        </Grid>
    );
}

// function ProjectCard({
//   title, blurb, cover, href, repo, caseStudy, tags, index
// }: Project & { index: number }) {
//   return (
//     <Card
//     key={index}
//     sx={{
//       overflow: "hidden",
//       borderRadius: 3,
//       border: "1px solid",
//       borderColor: "rgba(255,255,255,0.08)",
//       bgcolor: "background.paper",
//       boxShadow: "0 10px 30px rgba(0,0,0,.35)",
//       ":focus-within": { outline: "2px solid", outlineColor: "primary.main" }
//     }}>
//       <CardActionArea href={href} target="_blank" sx={{ position: "relative", display: "block" }}>
//         {/* Cover */}
//         <Box sx={{
//           aspectRatio: "16 / 10",
//           backgroundImage: `url(${cover})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           position: "relative"
//         }}>
//           {/* gradient to ensure text legible */}
//           <Box sx={{
//             position: "absolute", inset: 0,
//             background: "linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,.05))"
//           }} />
//           {/* Hover/focus overlay */}
//           <Box
//             className="overlay"
//             sx={{
//               position: "absolute",
//               inset: 0,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "flex-end",
//               p: 2,
//               color: "#fff",
//               opacity: { xs: 1, md: 0 },                     // always visible on mobile
//             //   "&:hover": { opacity: { xs: 1, md: 1 } },
//               opacity: { xs: 1, md: 1 },                     // always visible
//             // Show overlay on hover/focus of the parent (desktop)
//             transform: { md: "translateY(6px)" },
//             transition: "opacity .25s ease, transform .25s ease",
//             pointerEvents: "none",
//             [`&:where(:focus-within)`]: { opacity: 1, transform: "translateY(0)" },
//             "&:hover .overlay, &:focus-visible .overlay, &:focus-within .overlay": {
//                 opacity: 1,
//                 transform: "translateY(0)",
//             },
//             }}
//           >
//             <Typography variant="h6" sx={{ mb: .5 }}>{title}</Typography>
//             <Typography variant="body2" sx={{ opacity: .9, mb: 1.25 }}>{blurb}</Typography>
//             <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 1 }}>
//               {tags.map(t => (
//                 <Chip key={t} label={t} size="small"
//                   sx={{
//                     bgcolor: "rgba(15,163,177,.14)",
//                     color: "#9be3ea",
//                     border: "1px solid rgba(15,163,177,.28)"
//                   }} />
//               ))}
//             </Stack>
//             {/* Quick actions */}
//             <Stack direction="row" spacing={1} sx={{ pointerEvents: "auto" }}>
//               {href && (
//                 <IconButton size="small" color="inherit" aria-label="Open demo" href={href}>
//                   <LaunchIcon fontSize="small" />
//                 </IconButton>
//               )}
//               {repo && (
//                 <IconButton size="small" color="inherit" aria-label="Open repository" href={repo}>
//                   <GitHubIcon fontSize="small" />
//                 </IconButton>
//               )}
//               {caseStudy && (
//                 <IconButton size="small" color="inherit" aria-label="Read case study" href={caseStudy}>
//                   <ArticleIcon fontSize="small" />
//                 </IconButton>
//               )}
//             </Stack>
//           </Box>
//         </Box>

//         {/* Always-visible metadata (helps SEO & non-hover devices) */}
//         <CardContent sx={{ display: { xs: "block", md: "none" } }}>
//           <Typography variant="h6" sx={{ mb: .5 }}>{title}</Typography>
//           <Typography variant="body2" color="text.secondary">{blurb}</Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }
function ProjectCard({
    title, blurb, cover, href, repo, caseStudy, tags, index
}: Project & { index: number }) {
    return (
        <Card
            key={index}
            sx={{
                overflow: "hidden",
                borderRadius: 3,
                border: "1px solid",
                borderColor: "rgba(255,255,255,0.08)",
                bgcolor: "background.paper",
                boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                ":focus-within": { outline: "2px solid", outlineColor: "primary.main" },
            }}
        >
            <CardActionArea
                href={href}
                target="_blank"
                sx={{
                    position: "relative",
                    display: "block",
                    // Reveal overlay + dim image on hover/focus
                    "&:hover .overlay, &:focus-visible .overlay, &:focus-within .overlay": {
                        opacity: 1,
                        transform: "translateY(0)",
                    },
                    "&:hover .dim, &:focus-visible .dim, &:focus-within .dim": {
                        opacity: 1,
                    },
                }}
            >
                {/* Cover */}
                <Box
                    sx={{
                        aspectRatio: "16 / 10",
                        backgroundImage: `url(${cover})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                    }}
                >
                    {/* Gradient for legibility */}
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to top, rgba(0,0,0,.35), rgba(0,0,0,.05))",
                        }}
                    />
                    {/* Dim layer (hidden until hover) */}
                    <Box
                        className="dim"
                        sx={{
                            position: "absolute",
                            inset: 0,
                            backgroundColor: "rgba(0,0,0,0.45)",
                            opacity: 0,
                            transition: "opacity .25s ease",
                        }}
                    />
                    {/* Overlay details */}
                    <Box
                        className="overlay"
                        sx={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            p: 2,
                            color: "#fff",
                            opacity: { xs: 1, md: 0 },               // visible on mobile, hidden on desktop
                            transform: { md: "translateY(6px)" },
                            transition: "opacity .25s ease, transform .25s ease",
                            pointerEvents: "none",                    // click goes to card
                            zIndex: 1,
                        }}
                    >
                        <Typography variant="h6" sx={{ mb: 0.5 }}>{title}</Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9, mb: 1.25 }}>{blurb}</Typography>
                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 1 }}>
                            {tags.map(t => (
                                <Chip key={t} label={t} size="small"
                                    sx={{
                                        bgcolor: "rgba(15,163,177,.14)",
                                        color: "#9be3ea",
                                        border: "1px solid rgba(15,163,177,.28)",
                                    }}
                                />
                            ))}
                        </Stack>
                        {/* Quick actions (re-enable pointer events just here) */}
                        {/* Quick actions */}
                        <Stack direction="row" spacing={1} sx={{ pointerEvents: "auto" }}>
                            {href && (
                                <IconButton size="small" color="inherit" aria-label="Open demo" href={href}>
                                    <LaunchIcon fontSize="small" />
                                </IconButton>
                            )}
                            {repo && (
                                <IconButton size="small" color="inherit" aria-label="Open repository" href={repo}>
                                    <GitHubIcon fontSize="small" />
                                </IconButton>
                            )}
                            {caseStudy && (
                                <IconButton size="small" color="inherit" aria-label="Read case study" href={caseStudy}>
                                    <ArticleIcon fontSize="small" />
                                </IconButton>
                            )}
                        </Stack>
                    </Box>
                </Box>

                {/* Mobile-only metadata (for touch devices) */}
                <CardContent sx={{ display: { xs: "block", md: "none" } }}>
                    <Typography variant="h6" sx={{ mb: 0.5 }}>{title}</Typography>
                    <Typography variant="body2" color="text.secondary">{blurb}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
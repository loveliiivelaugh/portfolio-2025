// src/pages/ProjectPage.tsx
// Usage (React Router):
//   <Route path="/project/:slug" element={<ProjectPage />} />
//
// Usage (Next.js):
//   export default function Page() { const { slug } = useParams(); return <ProjectPage slug={slug} />; }

import * as React from "react";
import {
  Box, Breadcrumbs, Button, Card, CardContent, CardMedia, Chip,
  Container, Divider, Grid, IconButton, Link, Skeleton, Stack, Typography
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom"; // if not using RR, replace with your router
// import { useQuery } from "@tanstack/react-query";
import { cms } from "@config/../data/cms";

const WP_URL = (import.meta as any).env?.VITE_WP_URL //|| (process as any).env?.NEXT_PUBLIC_WP_URL || "";

type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  _embedded?: any;
  acf?: Record<string, any>;
};

type Project = {
  id: number;
  slug: string;
  title: string;
  excerpt?: string;
  contentHtml?: string;
  cover?: string;
  liveUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
  tech: string[];
  status?: string;
  role?: string;
  highlights: string[];
  gallery: string[]; // image urls
  date?: string;     // published/updated
};

function mapWpPostToProject(p: WPPost): Project {
  const media = p._embedded?.["wp:featuredmedia"]?.[0];
  const cover = media?.source_url;

  // ACF fallbacks
  const live = p.acf?.project_live_url || p.acf?.live_url || "";
  const repo = p.acf?.project_repo_url || p.acf?.repo_url || "";
  const status = p.acf?.project_status || p.acf?.status || "";
  const role = p.acf?.project_role || p.acf?.role || "";
  const techCsv = p.acf?.project_tech || p.acf?.tech || "";
  const highlightsText = p.acf?.project_highlights || "";
  const gallery = Array.isArray(p.acf?.project_gallery)
    ? p.acf.project_gallery.map((g: any) => g?.url || g?.sizes?.large || g?.sizes?.full || g?.source_url).filter(Boolean)
    : [];

  return {
    id: p.id,
    slug: p.slug,
    date: p.date,
    title: stripHtml(p.title.rendered),
    excerpt: cleanWpHtml(p.excerpt?.rendered || ""),
    contentHtml: p.content?.rendered || "",
    cover,
    liveUrl: live || undefined,
    repoUrl: repo || undefined,
    caseStudyUrl: p.acf?.case_study_url || undefined,
    tech: (Array.isArray(techCsv) ? techCsv : String(techCsv)).split(",").map(s => s.trim()).filter(Boolean),
    status: status || undefined,
    role: role || undefined,
    highlights: Array.isArray(highlightsText)
      ? highlightsText
      : String(highlightsText).split("\n").map(s => s.trim()).filter(Boolean),
    gallery,
  };
}

function stripHtml(s: string) {
  if (!s) return s;
  const div = document.createElement("div");
  div.innerHTML = s;
  return div.textContent || div.innerText || "";
}

function cleanWpHtml(html: string) {
  // WordPress excerpts often include <p>…</p>
  return html?.replace(/<\/?p>/g, "");
}

async function fetchProjectBySlug(slug: string): Promise<Project> {
  // Find portfolio category id
  const catRes = await fetch(`${WP_URL}/wp-json/wp/v2/categories?per_page=100`);
  const cats = await catRes.json();
  const cat = cats.find((c: any) => c.slug === "portfolio");
  const postsRes = await fetch(
    `${WP_URL}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed${cat ? `&categories=${cat.id}` : ""}`
  );
  if (!postsRes.ok) throw new Error("Failed to load project");
  const arr: WPPost[] = await postsRes.json();
  if (!arr?.length) throw new Error("Project not found");
  return mapWpPostToProject(arr[0]);
}

type ProjectPageProps = { slug?: string };

export default function ProjectPage(props?: ProjectPageProps) {
  // If you’re not using React Router, pass slug via props
  const params = useParams();
  const slug = props?.slug || params.slug || "";
  const nav = useNavigate();

//   const { data: project, isLoading, error } = useQuery({
//     queryKey: ["project", slug],
//     queryFn: () => fetchProjectBySlug(String(slug)),
//     enabled: Boolean(slug),
//     staleTime: 60_000,
//   });

const project = cms.showcase[1] as any;
const isLoading = false;
const error = null;

  if (isLoading) return <PageSkeleton onBack={() => nav(-1)} />;
  if (error || !project) {
    return (
      <Container sx={{ py: 6 }}>
        <Button startIcon={<ArrowBackIcon />} onClick={() => nav(-1)} sx={{ mb: 2 }}>
          Back
        </Button>
        <Typography color="error">Unable to load project.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: { xs: 3, md: 6 } }}>
      <Stack spacing={2} sx={{ mb: 2 }}>
        <Button startIcon={<ArrowBackIcon />} onClick={() => nav(-1)} sx={{ alignSelf: "flex-start" }}>
          Back
        </Button>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">Home</Link>
          <Link underline="hover" color="inherit" href="/#showcase">Showcase</Link>
          <Typography color="text.primary">{project.title}</Typography>
        </Breadcrumbs>
      </Stack>

      {/* Hero */}
      <Box
        component={motion.section}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 3,
          mb: 4,
          border: "1px solid",
          borderColor: "rgba(255,255,255,0.08)",
          bgcolor: "background.paper",
          boxShadow: "0 10px 30px rgba(0,0,0,.35)",
        }}
      >
        {project.cover && (
          <CardMedia
            component="img"
            image={project.cover}
            alt={project.title}
            sx={{
              height: { xs: 220, md: 360 },
              objectFit: "cover",
              filter: "saturate(0.9)",
            }}
          />
        )}
        {/* Overlay header */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,.55) 0%, rgba(0,0,0,.3) 40%, rgba(0,0,0,0) 70%)",
            display: "flex",
            alignItems: "flex-end",
            p: 3,
          }}
        >
          <Stack spacing={1} sx={{ color: "#fff" }}>
            <Typography variant="h4" fontWeight={900}>{project.title}</Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {project.tech.slice(0, 6).map(t => (
                <Chip key={t} label={t} size="small"
                  sx={{ bgcolor: "rgba(15,163,177,.14)", color: "#9be3ea", border: "1px solid rgba(15,163,177,.28)" }}
                />
              ))}
              {project.status && <Chip label={project.status} size="small" color="default" />}
            </Stack>
            <Stack direction="row" spacing={1} sx={{ pt: 0.5 }}>
              {project.liveUrl && (
                <Button variant="contained" size="small" color="primary" endIcon={<LaunchIcon />} href={project.liveUrl} target="_blank">
                  Live
                </Button>
              )}
              {project.repoUrl && (
                <Button variant="outlined" size="small" color="inherit" endIcon={<GitHubIcon />} href={project.repoUrl} target="_blank">
                  Repo
                </Button>
              )}
              {project.caseStudyUrl && (
                <Button variant="outlined" size="small" color="inherit" endIcon={<ArticleIcon />} href={project.caseStudyUrl} target="_blank">
                  Case Study
                </Button>
              )}
            </Stack>
          </Stack>
        </Box>
      </Box>

      {/* Body */}
      <Grid container spacing={3}>
        {/* Main content */}
        <Grid item xs={12} md={8}>
          {/* Overview / excerpt */}
          {project.excerpt && (
            <Card
              component={motion.div}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              sx={{ mb: 3, borderRadius: 3, border: "1px solid", borderColor: "rgba(255,255,255,0.08)", bgcolor: "background.paper" }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1.5 }}>Overview</Typography>
                <Typography variant="body1" color="text.secondary">{project.excerpt}</Typography>
              </CardContent>
            </Card>
          )}

          {/* Highlights */}
          {project.highlights?.length > 0 && (
            <Card
              component={motion.div}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              sx={{ mb: 3, borderRadius: 3, border: "1px solid", borderColor: "rgba(255,255,255,0.08)", bgcolor: "background.paper" }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1.5 }}>Highlights</Typography>
                <Stack component="ul" spacing={1.2} sx={{ m: 0, pl: 2 }}>
                  {project.highlights.map((h, i) => (
                    <Typography key={i} component="li" variant="body2" color="text.secondary">{h}</Typography>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          )}

          {/* Full content from WP */}
          {project.contentHtml && (
            <Card
              component={motion.div}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              sx={{ mb: 3, borderRadius: 3, border: "1px solid", borderColor: "rgba(255,255,255,0.08)", bgcolor: "background.paper" }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1.5 }}>Case Study</Typography>
                <div
                  className="wp-content"
                  // You control WP content; sanitize server-side if user-generated.
                  dangerouslySetInnerHTML={{ __html: project.contentHtml }}
                />
              </CardContent>
            </Card>
          )}
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Card
            component={motion.div}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            sx={{ mb: 3, borderRadius: 3, border: "1px solid", borderColor: "rgba(255,255,255,0.08)", bgcolor: "background.paper" }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1.5 }}>Details</Typography>
              <Stack spacing={1.2}>
                {project.role && <DetailRow label="Role" value={project.role} />}
                {project.status && <DetailRow label="Status" value={project.status} />}
                {project.date && <DetailRow label="Published" value={new Date(project.date).toLocaleDateString()} />}
                {project.liveUrl && <DetailLink label="Live" href={project.liveUrl} icon={<LaunchIcon fontSize="small" />} />}
                {project.repoUrl && <DetailLink label="Repo" href={project.repoUrl} icon={<GitHubIcon fontSize="small" />} />}
                {project.caseStudyUrl && <DetailLink label="Case Study" href={project.caseStudyUrl} icon={<ArticleIcon fontSize="small" />} />}
              </Stack>
            </CardContent>
          </Card>

          {/* Gallery */}
          {project.gallery?.length > 0 && (
            <Card
              component={motion.div}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              sx={{ borderRadius: 3, border: "1px solid", borderColor: "rgba(255,255,255,0.08)", bgcolor: "background.paper" }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1.5 }}>Gallery</Typography>
                <Grid container spacing={1}>
                  {project.gallery.map((url, i) => (
                    <Grid item xs={6} key={i}>
                      <Box
                        component={motion.img}
                        whileHover={{ scale: 1.02 }}
                        src={url}
                        alt={`Screenshot ${i + 1}`}
                        sx={{
                          width: "100%",
                          height: 140,
                          objectFit: "cover",
                          borderRadius: 2,
                          border: "1px solid",
                          borderColor: "rgba(255,255,255,0.08)",
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />
      {/* (Optional) Related projects area could go here */}
    </Container>
  );
}

/* ---------- helpers & small components ---------- */

function DetailRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
      <Typography variant="body2" color="text.secondary">{label}</Typography>
      <Typography variant="body2">{value}</Typography>
    </Stack>
  );
}

function DetailLink({ label, href, icon }: { label: string; href: string; icon?: React.ReactNode }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
      <Typography variant="body2" color="text.secondary">{label}</Typography>
      <IconButton size="small" href={href} target="_blank" rel="noopener">
        {icon || <LaunchIcon fontSize="small" />}
      </IconButton>
    </Stack>
  );
}

function PageSkeleton({ onBack }: { onBack: () => void }) {
  return (
    <Container sx={{ py: { xs: 3, md: 6 } }}>
      <Button startIcon={<ArrowBackIcon />} onClick={onBack} sx={{ mb: 2 }}>
        Back
      </Button>
      <Skeleton variant="rectangular" height={360} sx={{ mb: 3, borderRadius: 3 }} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Skeleton variant="rectangular" height={220} sx={{ mb: 3, borderRadius: 3 }} />
          <Skeleton variant="rectangular" height={420} sx={{ mb: 3, borderRadius: 3 }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Skeleton variant="rectangular" height={180} sx={{ mb: 3, borderRadius: 3 }} />
          <Skeleton variant="rectangular" height={280} sx={{ borderRadius: 3 }} />
        </Grid>
      </Grid>
    </Container>
  );
}
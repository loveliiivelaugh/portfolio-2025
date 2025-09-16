// FeaturedWriting.tsx
import * as React from "react";
import {
  Box,
  Divider,
  Link as MuiLink,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { motion, useReducedMotion } from "framer-motion";

export type PostItem = {
  title: string;
  date: string;       // e.g. "5/31/2025"
  readTime: number;   // minutes
  link: string;       // absolute URL
};

type FeaturedWritingProps = {
  posts: PostItem[];
  heading?: string;
  limit?: number;            // default: 5
  sort?: "desc" | "none";    // default: 'desc' by date
};

function formatDateDDMMYY(raw: string) {
  // Robust parse for M/D/YYYY or MM/DD/YYYY
  const m = raw.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{2,4})$/);
  if (m) {
    const [_, mo, da, yr] = m;
    const dd = da.padStart(2, "0");
    const mm = mo.padStart(2, "0");
    const yy = (yr.length === 4 ? yr.slice(2) : yr).padStart(2, "0");
    return `${dd}/${mm}/${yy}`;
  }
  // Fallback
  const d = new Date(raw);
  if (!isNaN(d.getTime())) {
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yy = String(d.getFullYear()).slice(2);
    return `${dd}/${mm}/${yy}`;
  }
  return raw;
}

export default function FeaturedWriting({
  posts,
  heading = "Writing",
  limit = 5,
  sort = "desc",
}: FeaturedWritingProps) {
  const theme = useTheme();
  const prefersReduced = useReducedMotion();

  const items = React.useMemo(() => {
    const cloned = [...posts];
    if (sort === "none") {
      cloned.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }
    return cloned.slice(0, limit);
  }, [posts, sort, limit]);

  return (
    <Box>
      <Typography
        variant="overline"
        sx={{ letterSpacing: 2, color: "text.secondary" }}
      >
        {heading.toUpperCase()}
      </Typography>

      <Stack
        component="ul"
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
          mt: 1,
          borderTop: `1px solid ${theme.palette.divider}`,
        }}
      >
        {items.map((p, idx) => {
          const MotionLi = motion.li as any;
          return (
            <MotionLi
              key={p.link}
              initial={prefersReduced ? false : { opacity: 0, y: 8 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.28, ease: [0.2, 0.6, 0, 1], delay: idx * 0.03 }}
              style={{ listStyle: "none" }}
            >
              <Row post={p} />
              {idx < items.length - 1 && (
                <Divider sx={{ borderColor: "divider" }} />
              )}
            </MotionLi>
          );
        })}
      </Stack>
    </Box>
  );
}

function Row({ post }: { post: PostItem }) {
  const dateStr = formatDateDDMMYY(post.date);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "84px 1fr auto", sm: "110px 1fr auto" },
        alignItems: "center",
        gap: 1.5,
        py: 1.25,
        "&:hover .post-title": { color: "primary.main" },
      }}
    >
      <Typography
        sx={{
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", monospace',
          color: "text.secondary",
          letterSpacing: "0.04em",
          fontSize: 14,
          whiteSpace: "nowrap",
        }}
      >
        {dateStr}
      </Typography>

      <MuiLink
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        className="post-title"
        sx={{
          color: "text.primary",
          transition: "color .18s ease, transform .18s ease",
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "primary.main",
            borderRadius: 0.5,
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.5,
            display: "inline",
          }}
        >
          {post.title}
        </Typography>
      </MuiLink>

      <Stack
        direction="row"
        spacing={0.75}
        alignItems="center"
        sx={{ color: "text.secondary", whiteSpace: "nowrap" }}
      >
        <AccessTimeRoundedIcon sx={{ fontSize: 18, opacity: 0.9 }} />
        <Typography variant="body2">{post.readTime} m</Typography>
      </Stack>
    </Box>
  );
}

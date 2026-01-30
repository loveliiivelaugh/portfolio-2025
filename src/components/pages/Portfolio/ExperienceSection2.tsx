import {
    Box,
    Typography,
    Stack,
    Button,
    Divider,
    List,
    ListItem,
    useTheme,
    useMediaQuery,
    Avatar,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
// import { SiDiscover } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type ExperienceDataType = {
    company: string;
    position: string;
    period: string;
    details: string[];
    links: {
        companySite?: string;
        linkedin?: string;
    };
    logo?: string; // optional logo URL
};

const defaultExperienceData: ExperienceDataType[] = [
    {
        company: "Discover Financial Services, Chicago, Illinois",
        position: "Application Engineer",
        period: "September 2024 - Present",
        details: [
            "Ship TypeScript and React systems with strong runtime contracts and test coverage.",
            "Scale microfrontend delivery without sacrificing performance budgets.",
            "Build integration APIs and orchestration flows for cross-team platforms.",
            "Harden CI/CD quality gates and release safety checks.",
            "Mentor engineers on system boundaries, reviews, and observability discipline.",
        ],
        links: { companySite: "", linkedin: "" },
        logo: "D"//discoverLogo,
    },
    {
        company: "Spectrum, Austin, Texas",
        position: "JavaScript Developer",
        period: "June 2022 - September 2024",
        details: [
            "Automated enterprise workflows for field operations with measurable SLA impact.",
            "Delivered React interfaces tuned for speed, reliability, and operator clarity.",
            "Migrated services to Node.js while preserving contract integrity.",
            "Implemented data validation rules and audit traces across critical flows.",
        ],
        links: { companySite: "", linkedin: "" },
        logo: "S"//spectrumLogo,
    },
    {
        company: "3vue, Woodridge, Illinois",
        position: "Front End React Web Developer",
        period: "July 2021 - April 2022",
        details: [
            "Built BI interfaces for health and life sciences with strict data governance.",
            "Integrated analytics tooling and data visualization pipelines.",
            "Created a reusable design system that reduced delivery time and defects.",
        ],
        links: { companySite: "", linkedin: "" },
        logo: "3"//medproLogo,
    },
];

const AccordionListItem = (
    { company, position, period, details, links, logo }: ExperienceDataType,
    // index: number,
    _: number,
    autoExpand: boolean
) => {
    const [expanded, setExpanded] = useState(autoExpand);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            sx={{
                borderRadius: 3,
                bgcolor: theme.palette.background.paper,
                boxShadow: expanded ? 4 : 1,
                mb: 3,
                px: 3,
                py: 2,
                transition: "box-shadow 0.3s ease",
                position: "relative",
                ":hover": { boxShadow: 4 },
                ...(isMobile && {
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                    mb: 4,
                }),
            }}
            onClick={() => setExpanded((prev) => !prev)}
        >
            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
            >
                <Stack direction="row" spacing={2} alignItems="center" flex={1}>
                    {logo && <Avatar src={logo} alt={company} variant="rounded" />}
                    <Box>
                        <Typography variant="h6" fontWeight={600}>
                            {company}
                        </Typography>
                        <Typography variant="subtitle1" fontWeight={500}>
                            {position}
                        </Typography>
                    </Box>
                </Stack>
                <ExpandMore
                    style={{
                        transform: expanded ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform 0.3s ease",
                    }}
                />
            </Stack>

            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body2" fontWeight={500} gutterBottom>
                            {period}
                        </Typography>
                        <List dense disablePadding>
                            {details.map((item, i) => (
                                <ListItem key={i} disableGutters>
                                    <Typography variant="body2" color="text.secondary">
                                        • {item}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                        {(links.companySite || links.linkedin) && (
                            <Stack direction="row" spacing={2} mt={2}>
                                {links.companySite && (
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        href={links.companySite}
                                        target="_blank"
                                    >
                                        Company Site
                                    </Button>
                                )}
                                {links.linkedin && (
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        href={links.linkedin}
                                        target="_blank"
                                    >
                                        LinkedIn
                                    </Button>
                                )}
                            </Stack>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    );
};

export const ExperienceSection2 = ({
    experienceData = defaultExperienceData,
}: {
    experienceData?: ExperienceDataType[];
}) => {
    return (
        <Box>
            {/* <Typography variant="h4" fontWeight={700} gutterBottom>
          Experience
        </Typography> */}
            {experienceData.map((item, index) =>
                AccordionListItem(item, index, index === 0)
            )}
        </Box>
    );
};

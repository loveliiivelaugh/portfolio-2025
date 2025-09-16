import { Box, IconButton, Tooltip, Stack } from "@mui/material";
import { LinkedIn, GitHub, OpenInNew } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";

const socialLinks = [
    { label: "LinkedIn", icon: <LinkedIn />, link: "https://www.linkedin.com/in/michaelanthonywoodward" },
    { label: "X", icon: <XIcon />, link: "https://www.twitter.com" },
    { label: "GitHub", icon: <GitHub />, link: "https://github.com/loveliiivelaugh" },
    { label: "Blog", icon: <>📚</>, link: "https://www.blog.woodardwebdev.com" },
    // { label: "Blog", icon: <OpenInNew />, link: "https://www.blog.woodardwebdev.com" },
];

const SocialBar = () => {
    return (
        <Box>
            {/* <Typography variant="h6">Follow my work 😎</Typography> */}
            <Stack direction="row" spacing={2} sx={{ textAlign: "center", justifyContent: "center"}}>
            {socialLinks.map((social, index) => (
                <Tooltip title={social.label}>
                    <IconButton key={index} component="a" href={social.link} target="_blank" rel="noopener noreferrer" color="inherit">
                        {social.icon}
                    </IconButton>
                </Tooltip>
            ))}
            </Stack>
        </Box>
    );
};

export default SocialBar

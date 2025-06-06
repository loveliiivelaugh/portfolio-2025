// Packages
import { useMemo } from 'react';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@emotion/react';
import { motion } from "framer-motion";
import { themeConfig } from './themeConfig';
import { useUtilityStore } from "@store/index";

import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Tooltip from "@mui/material/Tooltip";


const useTheme = ({ mode }: { mode: string }) => useMemo(() => createTheme({
  ...themeConfig.common,
  // @ts-expect-error
  ...themeConfig[mode],
}), [mode])

export const ThemeProvider = ({ children }: { children: any }) => {
  const { colorMode } = useUtilityStore();
  console.log(colorMode);
  const theme = useTheme({ mode: "dark" }); //|| colorMode });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
        {children}
    </MuiThemeProvider>
  )
}

export const ThemeToggleButton: React.FC = () => {
  const { colorMode, setColorMode } = useUtilityStore();
  const toggleTheme = () => setColorMode(colorMode === "light" ? "dark" : "light");
  return (
    <Tooltip title={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}>
      <IconButton onClick={toggleTheme} color="inherit">
        {colorMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  );
};

export const PageTransitionWrapper = ({ children }: any) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { 
          opacity: 0,
          transition: { duration: 0.35 }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

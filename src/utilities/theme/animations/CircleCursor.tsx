import { motion, AnimatePresence } from 'framer-motion';
import { useMousePosition } from '@lib/useMousePosition';
import { useThemeStore } from '@store/themeStore';
// import { useIsMobile } from '@lib/useIsMobile';

interface CursorProps {
    active: boolean;
}

const CustomCursor: React.FC<CursorProps> = ({ active }) => {
    // const isMobile = useIsMobile();
    const isMobile = true;
    const { x, y } = useMousePosition();
    const { cursorProps } = useThemeStore();
    const props = {
        ...cursorProps,
        animate: {
            ...cursorProps.animate,
            x: x - cursorProps.animate.x,
            y: y - cursorProps.animate.y
        }
    };
    return isMobile ? <></> : (
        <AnimatePresence>
            {active && <motion.div key="cursor" {...props} /> }
        </AnimatePresence>
    );
};

export default CustomCursor;
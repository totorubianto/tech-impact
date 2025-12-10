import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-14 h-8 rounded-full p-1 transition-colors duration-300"
            style={{
                background: theme === 'dark'
                    ? 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)'
                    : 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                boxShadow: theme === 'dark'
                    ? 'inset 0 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(168, 85, 247, 0.2)'
                    : 'inset 0 2px 4px rgba(0,0,0,0.1), 0 0 20px rgba(251, 191, 36, 0.3)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            <motion.div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{
                    background: theme === 'dark'
                        ? 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)'
                        : 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
                    boxShadow: theme === 'dark'
                        ? '0 2px 10px rgba(168, 85, 247, 0.5)'
                        : '0 2px 10px rgba(251, 191, 36, 0.5)'
                }}
                animate={{
                    x: theme === 'dark' ? 0 : 24,
                    rotate: theme === 'dark' ? 0 : 360
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
                {theme === 'dark' ? (
                    <Moon className="w-3.5 h-3.5 text-white" />
                ) : (
                    <Sun className="w-3.5 h-3.5 text-white" />
                )}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;

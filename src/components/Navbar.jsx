import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Programs", href: "#certifications" },
        { name: "Pathways", href: "#levels" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? "py-3 backdrop-blur-xl border-b"
                : "py-6"
                }`}
            style={{
                backgroundColor: isScrolled
                    ? (theme === 'dark' ? 'rgba(10, 10, 15, 0.8)' : 'rgba(248, 250, 252, 0.9)')
                    : 'transparent',
                borderColor: isScrolled ? 'var(--theme-border)' : 'transparent'
            }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-lg shadow-brand-primary/20">
                        <span className="text-white font-bold text-lg">TI</span>
                    </div>
                    <span className="text-xl font-bold font-display tracking-tight" style={{ color: 'var(--theme-text)' }}>
                        Tech<span className="text-brand-primary">Impact</span>
                    </span>
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-brand-primary/10"
                            style={{ color: 'var(--theme-text-muted)' }}
                            whileHover={{ color: 'var(--theme-text)' }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <motion.a
                        href="#certifications"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-sm font-semibold shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:shadow-brand-primary/40 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Certified
                        <ChevronRight className="w-4 h-4" />
                    </motion.a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button className="p-2" style={{ color: 'var(--theme-text)' }} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t"
                        style={{
                            backgroundColor: 'var(--theme-bg)',
                            borderColor: 'var(--theme-border)'
                        }}
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg py-2 transition-colors"
                                    style={{ color: 'var(--theme-text)' }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#certifications"
                                onClick={() => setIsOpen(false)}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="block w-full text-center py-3 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold mt-4"
                            >
                                Get Certified
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

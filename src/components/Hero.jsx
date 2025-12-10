import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";
import ParticleField from "./ParticleField";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
    const { theme } = useTheme();
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* ===== ANIMATED BACKGROUND ===== */}
            <motion.div
                className="absolute inset-0"
                style={{ backgroundColor: 'var(--theme-bg)' }}
            >
                {/* Gradient Mesh */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-primary/40 via-transparent to-brand-secondary/30 animate-gradient"></div>
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand-accent/20 via-transparent to-transparent animate-gradient" style={{ animationDelay: "-4s" }}></div>
                </div>

                {/* Large Glowing Orbs with Parallax */}
                <motion.div
                    style={{ y }}
                    className="absolute top-[-30%] left-[-10%] w-[900px] h-[900px] rounded-full bg-brand-primary/20 blur-[150px] animate-pulse-glow"
                />
                <motion.div
                    style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
                    className="absolute bottom-[-40%] right-[-20%] w-[800px] h-[800px] rounded-full bg-brand-secondary/25 blur-[120px] animate-pulse-glow"
                />
                <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] rounded-full bg-brand-accent/15 blur-[100px] animate-pulse-glow" style={{ animationDelay: "-3s" }}></div>

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(var(--theme-border) 1px, transparent 1px), linear-gradient(90deg, var(--theme-border) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                        opacity: 0.3
                    }}
                ></div>

                {/* Particle Field */}
                <ParticleField count={30} />
            </motion.div>

            {/* ===== FLOATING DECORATIVE ELEMENTS ===== */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[15%] right-[10%] w-32 h-32 border rounded-full"
                    style={{ borderColor: 'rgba(168, 85, 247, 0.2)' }}
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] right-[12%] w-48 h-48 border border-dashed rounded-full"
                    style={{ borderColor: 'rgba(99, 102, 241, 0.15)' }}
                />
                <motion.div
                    animate={{ y: [-20, 20, -20] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[20%] left-[8%] w-20 h-20 glass rounded-2xl rotate-12"
                />
                <motion.div
                    animate={{ y: [20, -20, 20], rotate: [0, 10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[35%] left-[5%] w-16 h-16 border-gradient rounded-xl"
                />

                {/* New: Floating badges */}
                <motion.div
                    animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[25%] right-[25%] px-4 py-2 glass rounded-full text-xs font-medium"
                    style={{ color: 'var(--theme-text-muted)' }}
                >
                    🔥 15,000+ Certified
                </motion.div>
                <motion.div
                    animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[30%] right-[8%] px-4 py-2 glass rounded-full text-xs font-medium"
                    style={{ color: 'var(--theme-text-muted)' }}
                >
                    ⭐ 98% Success Rate
                </motion.div>
            </div>

            {/* ===== MAIN CONTENT ===== */}
            <motion.div
                style={{ opacity }}
                className="container mx-auto px-6 relative z-10 pt-32 pb-20"
            >
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-8"
                    >
                        <motion.div
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Sparkles className="w-4 h-4 text-brand-gold" />
                        </motion.div>
                        <span className="text-sm font-medium bg-gradient-to-r from-brand-gold to-yellow-200 bg-clip-text text-transparent">
                            Engineered by IEG Campus
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl sm:text-7xl lg:text-8xl font-bold font-display leading-[0.95] mb-8"
                    >
                        <motion.span
                            className="block"
                            style={{ color: 'var(--theme-text)' }}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            The Future of
                        </motion.span>
                        <motion.span
                            className="block text-gradient text-glow-purple mt-2"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Digital Certification
                        </motion.span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-xl sm:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
                        style={{ color: 'var(--theme-text-muted)' }}
                    >
                        Tech Impact validates <span className="font-medium" style={{ color: 'var(--theme-text)' }}>world-class digital skills</span> in AI,
                        Cloud, Cybersecurity & beyond. Become industry-certified. Become future-ready.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })} className="text-lg px-8 py-4 group">
                            Start Your Journey
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <motion.button
                            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                            className="flex items-center gap-3 px-6 py-4 transition-colors group"
                            style={{ color: 'var(--theme-text)' }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.span
                                className="w-12 h-12 rounded-full glass-strong flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Play className="w-5 h-5 fill-current" />
                            </motion.span>
                            <span className="font-medium">Watch Video</span>
                        </motion.button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-20 pt-12 border-t"
                        style={{ borderColor: 'var(--theme-border)' }}
                    >
                        <p className="text-sm mb-6 uppercase tracking-widest" style={{ color: 'var(--theme-text-muted)' }}>
                            Trusted by industry leaders worldwide
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
                            {["MICROSOFT", "GOOGLE", "AWS", "IBM", "NVIDIA"].map((name, i) => (
                                <motion.span
                                    key={i}
                                    className="text-xl font-bold font-display tracking-wider"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + i * 0.1 }}
                                    style={{ color: 'var(--theme-text)' }}
                                >
                                    {name}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* ===== SCROLL INDICATOR ===== */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2" style={{ borderColor: 'var(--theme-border)' }}>
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-brand-primary"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

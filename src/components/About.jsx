import { motion } from "framer-motion";
import { Target, Zap, Globe2, TrendingUp } from "lucide-react";
import { useCounter, staggerContainer, staggerItem } from "../hooks/useAnimations";
import { useTheme } from "../context/ThemeContext";

const features = [
    {
        icon: Target,
        title: "Industry Standards",
        desc: "Aligned with global technology benchmarks and real industry requirements."
    },
    {
        icon: Zap,
        title: "Applied Learning",
        desc: "Practical assessments focused on real-world scenarios and job-ready competencies."
    },
    {
        icon: Globe2,
        title: "Global Recognition",
        desc: "Certifications recognized across borders and validated by international partners."
    },
    {
        icon: TrendingUp,
        title: "Career Impact",
        desc: "Proven credentials that accelerate career growth and open new opportunities."
    }
];

const StatItem = ({ value, label, suffix = "" }) => {
    const numericValue = parseInt(value.replace(/\D/g, ''));
    const { count, ref } = useCounter(numericValue, 2000);

    return (
        <motion.div
            ref={ref}
            variants={staggerItem}
            className="text-center"
        >
            <div className="text-4xl md:text-5xl font-bold text-gradient font-display mb-2">
                {count.toLocaleString()}{suffix}
            </div>
            <div className="text-sm uppercase tracking-wider" style={{ color: 'var(--theme-text-muted)' }}>
                {label}
            </div>
        </motion.div>
    );
};

const About = () => {
    const { theme } = useTheme();

    return (
        <section id="about" className="py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--theme-bg)' }}>
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-brand-primary mb-6"
                    >
                        Why Tech Impact
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6"
                        style={{ color: 'var(--theme-text)' }}
                    >
                        Built for the <span className="text-gradient">Digital Economy</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl leading-relaxed"
                        style={{ color: 'var(--theme-text-muted)' }}
                    >
                        Tech Impact bridges the gap between innovation and credentialing, ensuring
                        every certification reflects the demands of Industry 4.0 and beyond.
                    </motion.p>
                </div>

                {/* Feature Cards */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative p-8 rounded-3xl glass transition-all duration-500 border-gradient hover-lift"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <motion.div
                                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                                    whileHover={{ rotate: 5 }}
                                >
                                    <feature.icon className="w-7 h-7 text-brand-primary" />
                                </motion.div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors" style={{ color: 'var(--theme-text)' }}>
                                    {feature.title}
                                </h3>
                                <p className="leading-relaxed text-sm" style={{ color: 'var(--theme-text-muted)' }}>
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-20 p-8 rounded-3xl glass-strong"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <StatItem value="15000" label="Certified Professionals" suffix="+" />
                        <StatItem value="98" label="Success Rate" suffix="%" />
                        <StatItem value="250" label="Partner Organizations" suffix="+" />
                        <StatItem value="40" label="Countries Reached" suffix="+" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

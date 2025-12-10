import { motion } from "framer-motion";
import { Brain, Database, Shield, Cloud, Laptop, Lightbulb, ArrowUpRight } from "lucide-react";
import { staggerContainer, staggerItem } from "../hooks/useAnimations";
import { useTheme } from "../context/ThemeContext";

const domains = [
    {
        title: "Artificial Intelligence",
        desc: "Machine Learning, Deep Learning, Neural Networks & AI Ethics",
        icon: Brain,
        color: "from-violet-500 to-purple-600",
        featured: true
    },
    {
        title: "Data Analytics",
        desc: "Big Data, Business Intelligence & Predictive Modeling",
        icon: Database,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Cybersecurity",
        desc: "Zero Trust, Threat Defense & Security Operations",
        icon: Shield,
        color: "from-red-500 to-orange-500"
    },
    {
        title: "Cloud Computing",
        desc: "Multi-cloud, DevOps & Infrastructure as Code",
        icon: Cloud,
        color: "from-cyan-500 to-teal-500"
    },
    {
        title: "Digital Productivity",
        desc: "Modern Workplace, Automation & Collaboration Tools",
        icon: Laptop,
        color: "from-emerald-500 to-green-500"
    },
    {
        title: "Future Skills",
        desc: "Innovation Thinking, Digital Literacy & Adaptability",
        icon: Lightbulb,
        color: "from-amber-500 to-yellow-500"
    }
];

const Certifications = () => {
    const { theme } = useTheme();

    return (
        <section id="certifications" className="py-32 relative overflow-hidden" style={{ backgroundColor: theme === 'dark' ? '#0d0d14' : '#f1f5f9' }}>
            {/* Background */}
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[200px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-brand-accent mb-6"
                        >
                            Certification Programs
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6"
                            style={{ color: 'var(--theme-text)' }}
                        >
                            Master the Skills <br />
                            <span className="text-gradient">That Matter</span>
                        </motion.h2>
                    </div>
                    <motion.a
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                        href="#levels"
                        className="flex items-center gap-2 text-brand-primary font-semibold"
                    >
                        View All Programs <ArrowUpRight className="w-5 h-5" />
                    </motion.a>
                </div>

                {/* Bento Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {domains.map((domain, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`
                                group relative rounded-3xl overflow-hidden cursor-pointer hover-lift
                                ${domain.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''}
                            `}
                            onClick={() => document.getElementById('levels')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            {/* Card Background */}
                            <div className="absolute inset-0 glass"></div>

                            {/* Gradient Overlay on Hover */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${domain.color}`}
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.2 }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className={`relative z-10 p-8 h-full flex flex-col ${domain.featured ? 'lg:min-h-[400px]' : 'min-h-[200px]'}`}>
                                <motion.div
                                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${domain.color} flex items-center justify-center mb-auto shadow-lg`}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <domain.icon className="w-7 h-7 text-white" />
                                </motion.div>

                                <div className="mt-8">
                                    <h3 className="text-2xl font-bold font-display mb-2 transition-colors" style={{ color: 'var(--theme-text)' }}>
                                        {domain.title}
                                    </h3>
                                    <p style={{ color: 'var(--theme-text-muted)' }}>
                                        {domain.desc}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <motion.div
                                    className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                >
                                    <ArrowUpRight className="w-5 h-5" style={{ color: 'var(--theme-text)' }} />
                                </motion.div>
                            </div>

                            {/* Border */}
                            <div className="absolute inset-0 rounded-3xl border transition-colors pointer-events-none" style={{ borderColor: 'var(--theme-border)' }}></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;

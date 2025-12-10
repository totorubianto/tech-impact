import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Building2, GraduationCap, BadgeCheck } from "lucide-react";
import { staggerContainer, staggerItem, fadeInLeft, fadeInRight } from "../hooks/useAnimations";
import { useTheme } from "../context/ThemeContext";

const benefits = [
    "Industry-Recognised Certifications",
    "Practical, Job-Ready Assessments",
    "Future-Proof Skill Development",
    "Employer Confidence Guarantee",
    "Regional & Global Alignment"
];

const audienceCards = [
    {
        icon: Building2,
        title: "For Organizations",
        desc: "Build high-performance, tech-enabled teams with verified digital capabilities.",
        color: "from-violet-500 to-purple-600"
    },
    {
        icon: GraduationCap,
        title: "For Educators",
        desc: "Become an Accredited Training Provider and deliver certified programs.",
        color: "from-cyan-500 to-blue-600"
    },
    {
        icon: BadgeCheck,
        title: "For Professionals",
        desc: "Validate your skills with industry-recognized credentials and accelerate your career.",
        color: "from-amber-500 to-orange-600"
    }
];

const WhyChooseUs = () => {
    const { theme } = useTheme();

    return (
        <section className="py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--theme-bg)' }}>
            {/* Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-primary/5 rounded-full blur-[200px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInLeft}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-brand-primary mb-6">
                            The Tech Impact Advantage
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold font-display mb-8" style={{ color: 'var(--theme-text)' }}>
                            Credentials That <br />
                            <span className="text-gradient">Open Doors</span>
                        </h2>

                        <motion.div
                            className="space-y-4 mb-10"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {benefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    variants={staggerItem}
                                    className="flex items-center gap-4"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0" />
                                    </motion.div>
                                    <span className="text-lg" style={{ color: 'var(--theme-text)' }}>{benefit}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.button
                            onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
                            className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold shadow-lg shadow-brand-primary/25 group"
                            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -15px rgba(168, 85, 247, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Certification
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.div>

                    {/* Right Side - Partner Cards */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInRight}
                        className="relative"
                    >
                        <motion.div
                            className="grid gap-6"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {audienceCards.map((card, i) => (
                                <motion.div
                                    key={i}
                                    variants={staggerItem}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                    onClick={() => document.getElementById('levels')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="p-6 rounded-2xl glass-strong flex items-start gap-5 group cursor-pointer hover-lift"
                                >
                                    <motion.div
                                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shrink-0 shadow-lg`}
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                    >
                                        <card.icon className="w-7 h-7 text-white" />
                                    </motion.div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1" style={{ color: 'var(--theme-text)' }}>{card.title}</h4>
                                        <p className="text-sm leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
                                            {card.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

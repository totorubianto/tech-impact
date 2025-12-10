import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../hooks/useAnimations";
import { useTheme } from "../context/ThemeContext";

const levels = [
    {
        level: "01",
        title: "Foundation",
        desc: "Digital literacy and fundamental competencies for beginners.",
        color: "from-emerald-500 to-teal-500"
    },
    {
        level: "02",
        title: "Intermediate",
        desc: "Applied knowledge and practical workplace skills.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        level: "03",
        title: "Advanced",
        desc: "Professional mastery and industry-ready expertise.",
        color: "from-violet-500 to-purple-500"
    },
    {
        level: "04",
        title: "Expert",
        desc: "Leadership, innovation, and strategic transformation.",
        color: "from-amber-500 to-orange-500"
    }
];

const Levels = () => {
    const { theme } = useTheme();

    return (
        <section id="levels" className="py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--theme-bg)' }}>
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-brand-gold mb-6"
                    >
                        Certification Pathways
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6"
                        style={{ color: 'var(--theme-text)' }}
                    >
                        Your Journey to <span className="text-gradient">Mastery</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl"
                        style={{ color: 'var(--theme-text-muted)' }}
                    >
                        Progressive certification tiers designed to validate competencies at every stage.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <motion.div
                        className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px]"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        style={{
                            background: 'linear-gradient(to right, #10b981, #6366f1, #f59e0b)',
                            transformOrigin: 'left',
                            opacity: 0.3
                        }}
                    />

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {levels.map((lvl, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                whileHover={{ y: -10 }}
                                className="relative group"
                            >
                                {/* Card */}
                                <div className="relative p-8 rounded-3xl glass h-full hover-lift">
                                    {/* Level Number Background */}
                                    <motion.div
                                        className={`absolute -top-4 -left-2 text-7xl font-bold font-display bg-gradient-to-br ${lvl.color} bg-clip-text text-transparent`}
                                        initial={{ opacity: 0.1 }}
                                        whileHover={{ opacity: 0.3 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {lvl.level}
                                    </motion.div>

                                    {/* Icon Circle */}
                                    <motion.div
                                        className="relative z-10 mb-6"
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                    >
                                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${lvl.color} flex items-center justify-center shadow-lg`}>
                                            <span className="text-white font-bold text-xl font-display">{lvl.level}</span>
                                        </div>
                                    </motion.div>

                                    <h3 className="text-2xl font-bold font-display mb-3 transition-colors" style={{ color: 'var(--theme-text)' }}>
                                        {lvl.title}
                                    </h3>
                                    <p className="leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
                                        {lvl.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Levels;

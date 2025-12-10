import { motion } from "framer-motion";

const stats = [
    { label: "Certified Professionals", value: "15,000+" },
    { label: "Global Partners", value: "250+" },
    { label: "Countries Reached", value: "40+" },
    { label: "Success Rate", value: "98%" },
];

const Stats = () => {
    return (
        <section className="py-12 border-b border-white/5 bg-brand-dark/50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center px-4"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-2 font-display">
                                {stat.value}
                            </h3>
                            <p className="text-brand-muted text-sm uppercase tracking-wider font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

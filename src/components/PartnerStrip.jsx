import { motion } from "framer-motion";

const partners = [
    "TechCorp Global", "FutureSystems", "CloudNative", "DataMind", "SecureNet", "AI Innovations",
    "CyberGuard", "InnoVance", "NextGen Digital", "GlobalConnect"
];

const PartnerStrip = () => {
    return (
        <section className="py-8 bg-white/5 border-y border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark z-10 pointer-events-none"></div>

            <div className="flex">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30, // Slow continuous scroll
                        ease: "linear",
                    }}
                    className="flex items-center gap-16 px-8 whitespace-nowrap"
                >
                    {[...partners, ...partners].map((partner, index) => (
                        <div key={index} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                            {/* Placeholder Logo Icon */}
                            <div className="w-8 h-8 bg-brand-primary/20 rounded-md"></div>
                            <span className="text-lg font-display font-semibold tracking-widest uppercase">{partner}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PartnerStrip;

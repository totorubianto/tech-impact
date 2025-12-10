import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight, Linkedin, Twitter, Youtube } from "lucide-react";
import { staggerContainer, staggerItem } from "../hooks/useAnimations";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
    const { theme } = useTheme();

    const footerLinks = {

        Programs: [
            { name: "AI & Machine Learning", href: "#certifications" },
            { name: "Data Analytics", href: "#certifications" },
            { name: "Cybersecurity", href: "#certifications" },
            { name: "Cloud Computing", href: "#certifications" },
            { name: "Digital Productivity", href: "#certifications" }
        ],
        Company: [
            { name: "About Us", href: "#about" },
            { name: "Careers", href: "#" },
            { name: "News", href: "#" },
            { name: "Partners", href: "#" },
            { name: "Contact", href: "mailto:info@iegcampus.com" }
        ],
        Resources: [
            { name: "Documentation", href: "#" },
            { name: "Verify Credential", href: "#" },
            { name: "Training Providers", href: "#" },
            { name: "FAQ", href: "#" },
            { name: "Support", href: "mailto:support@iegcampus.com" }
        ]
    };

    return (
        <footer id="contact" className="pt-32 pb-8 relative overflow-hidden border-t" style={{ backgroundColor: 'var(--theme-bg)', borderColor: 'var(--theme-border)' }} >
            {/* Background */}
            < div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" ></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 rounded-3xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 border mb-20 text-center relative overflow-hidden"
                    style={{ borderColor: 'var(--theme-border)' }}
                >
                    {/* Animated Background Orbs */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px] animate-pulse-glow"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '-2s' }}></div>

                    <div className="relative z-10">
                        <motion.h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6"
                            style={{ color: 'var(--theme-text)' }}
                        >
                            Ready to Get <span className="text-gradient">Certified?</span>
                        </motion.h2>
                        <p className="text-xl max-w-2xl mx-auto mb-8" style={{ color: 'var(--theme-text-muted)' }}>
                            Join thousands of professionals building future-ready careers with Tech Impact credentials.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.a
                                href="#certifications"
                                className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand-dark font-semibold group"
                                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(255,255,255,0.3)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Your Journey
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="mailto:info@iegcampus.com"
                                className="flex items-center gap-2 px-8 py-4 rounded-full border font-semibold"
                                style={{ borderColor: 'var(--theme-border)', color: 'var(--theme-text)' }}
                                whileHover={{ scale: 1.05, backgroundColor: 'var(--theme-surface-hover)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Sales
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {/* Brand Column */}
                    <motion.div variants={staggerItem} className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                                <span className="text-white font-bold text-lg">TI</span>
                            </div>
                            <span className="text-xl font-bold font-display" style={{ color: 'var(--theme-text)' }}>
                                Tech<span className="text-brand-primary">Impact</span>
                            </span>
                        </div>
                        <p className="mb-6 max-w-sm leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
                            A premier technology certification body engineered by IEG Campus.
                            Certifying tomorrow's digital leaders.
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href={i === 0 ? "https://linkedin.com" : i === 1 ? "https://twitter.com" : "https://youtube.com"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full glass flex items-center justify-center"
                                    style={{ color: 'var(--theme-text)' }}
                                    whileHover={{ scale: 1.1, backgroundColor: 'var(--theme-primary)', color: 'white' }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <motion.div key={title} variants={staggerItem}>
                            <h4 className="font-bold mb-6 font-display" style={{ color: 'var(--theme-text)' }}>{title}</h4>
                            <ul className="space-y-3">
                                {links.map((link, i) => (
                                    <li key={i}>
                                        <motion.a
                                            href={link.href}
                                            className="text-sm transition-colors"
                                            style={{ color: 'var(--theme-text-muted)' }}
                                            whileHover={{ color: 'var(--theme-text)', x: 5 }}
                                        >
                                            {link.name}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-8 py-8 border-y mb-8" style={{ borderColor: 'var(--theme-border)' }}>
                    {[
                        { icon: Mail, text: "info@iegcampus.com", href: "mailto:info@iegcampus.com" },
                        { icon: Phone, text: "+60 3 1234 5678" },
                        { icon: MapPin, text: "Kuala Lumpur, Malaysia" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center gap-3"
                            style={{ color: 'var(--theme-text-muted)' }}
                            whileHover={{ color: 'var(--theme-text)' }}
                        >
                            <item.icon className="w-5 h-5 text-brand-primary" />
                            {item.href ? (
                                <a href={item.href} className="transition-colors">{item.text}</a>
                            ) : (
                                <span>{item.text}</span>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: 'var(--theme-text-muted)' }}>
                    <p>&copy; {new Date().getFullYear()} Tech Impact by IEG Campus. All rights reserved.</p>
                    <div className="flex gap-6">
                        {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                className="transition-colors"
                                whileHover={{ color: 'var(--theme-text)' }}
                            >
                                {link}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;

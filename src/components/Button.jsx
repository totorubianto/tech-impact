import { motion } from "framer-motion";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
    const baseStyles = "relative px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden";

    const variants = {
        primary: `
      bg-gradient-to-r from-brand-primary to-brand-secondary text-white 
      shadow-lg shadow-brand-primary/25
      hover:shadow-xl hover:shadow-brand-primary/40 hover:scale-105
      active:scale-95
    `,
        outline: `
      border border-white/20 text-white bg-white/5 backdrop-blur-sm
      hover:bg-white/10 hover:border-white/30
    `,
        ghost: `
      text-brand-muted hover:text-white hover:bg-white/5
    `,
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {/* Shine effect on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700"></span>
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.button>
    );
};

export default Button;

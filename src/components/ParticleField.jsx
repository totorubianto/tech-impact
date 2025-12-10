import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const Particle = ({ delay, duration, size, x, y }) => {
    return (
        <motion.div
            className="absolute rounded-full"
            style={{
                width: size,
                height: size,
                left: `${x}%`,
                top: `${y}%`,
                background: `radial-gradient(circle, var(--theme-primary) 0%, transparent 70%)`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0.5],
                y: [-20, -100],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeOut",
            }}
        />
    );
};

const ParticleField = ({ count = 20 }) => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const generated = Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            delay: Math.random() * 5,
            duration: Math.random() * 3 + 3,
        }));
        setParticles(generated);
    }, [count]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <Particle key={p.id} {...p} />
            ))}
        </div>
    );
};

export default ParticleField;

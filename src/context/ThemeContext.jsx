import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
    dark: {
        name: 'dark',
        colors: {
            bg: '#0a0a0f',
            bgAlt: '#12121a',
            surface: 'rgba(255, 255, 255, 0.03)',
            surfaceHover: 'rgba(255, 255, 255, 0.08)',
            border: 'rgba(255, 255, 255, 0.08)',
            borderHover: 'rgba(255, 255, 255, 0.15)',
            text: '#f1f5f9',
            textMuted: '#64748b',
            primary: '#a855f7',
            secondary: '#6366f1',
            accent: '#22d3ee',
        }
    },
    light: {
        name: 'light',
        colors: {
            bg: '#f8fafc',
            bgAlt: '#ffffff',
            surface: 'rgba(0, 0, 0, 0.02)',
            surfaceHover: 'rgba(0, 0, 0, 0.05)',
            border: 'rgba(0, 0, 0, 0.08)',
            borderHover: 'rgba(0, 0, 0, 0.15)',
            text: '#0f172a',
            textMuted: '#64748b',
            primary: '#7c3aed',
            secondary: '#4f46e5',
            accent: '#0891b2',
        }
    }
};

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const saved = localStorage.getItem('techimpact-theme');
        if (saved && themes[saved]) {
            setTheme(saved);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('techimpact-theme', theme);
        document.documentElement.setAttribute('data-theme', theme);

        // Apply CSS variables
        const root = document.documentElement;
        const t = themes[theme].colors;
        root.style.setProperty('--theme-bg', t.bg);
        root.style.setProperty('--theme-bg-alt', t.bgAlt);
        root.style.setProperty('--theme-surface', t.surface);
        root.style.setProperty('--theme-surface-hover', t.surfaceHover);
        root.style.setProperty('--theme-border', t.border);
        root.style.setProperty('--theme-border-hover', t.borderHover);
        root.style.setProperty('--theme-text', t.text);
        root.style.setProperty('--theme-text-muted', t.textMuted);
        root.style.setProperty('--theme-primary', t.primary);
        root.style.setProperty('--theme-secondary', t.secondary);
        root.style.setProperty('--theme-accent', t.accent);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}

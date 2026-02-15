/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#6366f1", // Indigo 500 - Vibrant
                    light: "#818cf8",   // Indigo 400
                    dark: "#4f46e5",    // Indigo 600
                    glow: "rgba(99, 102, 241, 0.5)"
                },
                secondary: {
                    DEFAULT: "#ec4899", // Pink 500
                    light: "#f472b6",
                    dark: "#db2777",
                },
                accent: {
                    cyan: "#06b6d4",
                    teal: "#14b8a6",
                    purple: "#8b5cf6",
                },
                background: {
                    light: "#ffffff",
                    dark: "#030014", // Deep space blue/black
                    card: {
                        light: "rgba(255, 255, 255, 0.7)",
                        dark: "rgba(15, 23, 42, 0.6)",
                    }
                },
            },
            fontFamily: {
                display: ["Inter", "sans-serif"],
                sans: ["Inter", "sans-serif"],
            },
            borderRadius: {
                "lg": "1rem",
                "xl": "1.5rem",
                "2xl": "2rem",
                "3xl": "2.5rem",
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                'glow': '0 0 20px rgba(99, 102, 241, 0.5)',
                'glow-sm': '0 0 10px rgba(99, 102, 241, 0.3)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
                'slide-in-right': 'slideInRight 0.5s ease-out forwards',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 7s ease-in-out infinite 2s',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                glow: {
                    'from': { boxShadow: '0 0 10px rgba(99, 102, 241, 0.3)' },
                    'to': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.6), 0 0 10px rgba(99, 102, 241, 0.3)' },
                }
            }
        },
    },
    plugins: [],
}

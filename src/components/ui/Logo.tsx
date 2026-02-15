import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Outer Ring - 270 degrees approx */}
            <path
                d="M 85 50 A 35 35 0 1 0 50 85"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
            />
            {/* Middle Ring - 180 degrees approx */}
            <path
                d="M 70 50 A 20 20 0 1 0 50 70"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
            />
            {/* Center Dot */}
            <circle cx="50" cy="50" r="10" fill="currentColor" />
        </svg>
    );
};

export const LogoColor: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
            </defs>
            <path
                d="M 85 50 A 35 35 0 1 0 50 85"
                stroke="url(#purpleGradient)"
                strokeWidth="12"
                strokeLinecap="round"
            />
            <path
                d="M 70 50 A 20 20 0 1 0 50 70"
                stroke="url(#purpleGradient)"
                strokeWidth="12"
                strokeLinecap="round"
            />
            <circle cx="50" cy="50" r="10" fill="url(#purpleGradient)" />
        </svg>
    );
};

"use client";

import { useId } from "react";

interface AnimatedBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function AnimatedBackground({
  children,
  className = "",
}: AnimatedBackgroundProps) {
  const gradientId = useId();

  return (
    <div
      className={`relative overflow-hidden bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full opacity-90 animate-pulse shadow-lg shadow-yellow-400"></div>
        <div className="absolute top-1/3 right-1/3 w-2.5 h-2.5 bg-white rounded-full opacity-80 animate-pulse animation-delay-2000 shadow-lg shadow-white"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-85 animate-pulse animation-delay-4000 shadow-lg shadow-cyan-400"></div>
        <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-pink-400 rounded-full opacity-75 animate-pulse animation-delay-3000 shadow-lg shadow-pink-400"></div>
        <div className="absolute top-1/6 left-1/2 w-2 h-2 bg-white rounded-full opacity-70 animate-pulse animation-delay-1500"></div>
        <div className="absolute bottom-1/3 right-1/6 w-2.5 h-2.5 bg-yellow-300 rounded-full opacity-80 animate-pulse animation-delay-2500"></div>

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-35 animate-blob animation-delay-3000"></div>

        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id={gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#4338ca" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#db2777" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <path
              d="M0,50 Q25,20 50,50 T100,50"
              stroke={`url(#${gradientId})`}
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0,30 Q25,60 50,30 T100,30"
              stroke={`url(#${gradientId})`}
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0,70 Q25,40 50,70 T100,70"
              stroke={`url(#${gradientId})`}
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M0,10 Q30,50 60,10 T100,10"
              stroke={`url(#${gradientId})`}
              strokeWidth="0.8"
              fill="none"
            />
            <path
              d="M0,90 Q30,50 60,90 T100,90"
              stroke={`url(#${gradientId})`}
              strokeWidth="0.8"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

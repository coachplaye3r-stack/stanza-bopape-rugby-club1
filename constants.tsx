
import React from 'react';

export const COLORS = {
  primary: '#064e3b', // Deep green
  secondary: '#facc15', // Gold
  accent: '#ea580c', // Orange
};

export const AnimatedLogo: React.FC<{ size?: string; className?: string }> = ({ size = "w-24 h-24", className = "" }) => (
  <div className={`relative flex items-center justify-center ${size} ${className} group`}>
    {/* Background Glow */}
    <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
    
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">
      {/* Swoosh Arcs (Movement lines) */}
      <path 
        d="M10,60 Q20,30 90,40" 
        stroke="#facc15" 
        strokeWidth="2" 
        fill="none" 
        strokeDasharray="100" 
        className="animate-[dash_3s_linear_infinite] opacity-40" 
      />
      <path 
        d="M15,70 Q30,40 85,55" 
        stroke="#facc15" 
        strokeWidth="1.5" 
        fill="none" 
        strokeDasharray="100" 
        className="animate-[dash_4s_linear_infinite_reverse] opacity-60" 
      />
      <path 
        d="M5,50 Q40,20 80,30" 
        stroke="#facc15" 
        strokeWidth="1" 
        fill="none" 
        strokeDasharray="100" 
        className="animate-[dash_5s_linear_infinite] opacity-30" 
      />

      {/* The Central Star - Replicating the provided logo */}
      <path 
        d="M50 15 L58 38 L83 38 L63 53 L71 76 L50 62 L29 76 L37 53 L17 38 L42 38 Z" 
        fill="#facc15" 
        stroke="#000" 
        strokeWidth="1"
        className="animate-pulse duration-[3000ms]"
      />
      
      {/* Internal detail for the star from logo */}
      <path 
        d="M50 25 L54 38 L65 38 L56 46 L59 58 L50 51 L41 58 L44 46 L35 38 L46 38 Z" 
        fill="rgba(0,0,0,0.8)" 
      />
    </svg>

    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes dash {
        to {
          stroke-dashoffset: -200;
        }
      }
    `}} />
  </div>
);

export const ICONS = {
  Home: (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Rugby: (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10Z"/>
      <path d="M7 10.5c1.5 2.5 5.5 2.5 7 0"/>
      <path d="M10 17.5c.5-1.5.5-5.5 0-7"/>
      <path d="M14 17.5c-.5-1.5-.5-5.5 0-7"/>
    </svg>
  ),
  Dashboard: (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  ),
  Team: (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Finance: (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  Chat: (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  Calendar: (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  User: (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  LogOut: (props: any) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  ),
};

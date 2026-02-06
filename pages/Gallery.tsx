
import React from 'react';
import { User } from '../types';

const Gallery: React.FC<{ user: User }> = ({ user }) => {
  const RUGBY_IMAGES = [
    "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=800",
    "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=800",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800",
    "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800",
    "https://images.unsplash.com/photo-1512411411306-0568f180f977?q=80&w=800",
    "https://images.unsplash.com/photo-1634125816913-793574168c12?q=80&w=800",
    "https://images.unsplash.com/photo-1529761430588-421290aa7085?q=80&w=800",
    "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800"
  ];

  return (
    <div className="space-y-8 pb-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
        <div>
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Club Gallery</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-1">Reliving our best moments on the field.</p>
        </div>
        <button className="bg-emerald-950 text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-yellow-400 hover:text-black transition-all shadow-xl active:scale-95">
          Upload New Media
        </button>
      </header>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-2">
        {['All Moments', 'Match Days', 'Training', 'Community Events', 'Awards Ceremony'].map((cat, i) => (
          <button key={cat} className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 shadow-sm ${i === 0 ? 'bg-yellow-400 text-black shadow-yellow-400/20' : 'bg-white text-slate-500 border border-slate-100 hover:border-yellow-400 hover:text-emerald-900'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {RUGBY_IMAGES.map((url, i) => (
          <div key={i} className="group relative aspect-square rounded-[2rem] overflow-hidden bg-white shadow-lg cursor-pointer border border-slate-50">
             <img src={url} alt={`Gallery ${i}`} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
               <p className="text-white text-xs font-black uppercase tracking-widest mb-1 italic">SBRC Pride</p>
               <h4 className="text-white text-sm font-black uppercase tracking-tight">Match Highlight vs Eagles</h4>
               <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[8px] text-white/60 font-black uppercase tracking-widest">May 2024</span>
                  <div className="w-6 h-6 rounded-lg bg-yellow-400 flex items-center justify-center text-black">
                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
                  </div>
               </div>
             </div>
             {i % 3 === 0 && (
               <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                 <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
               </div>
             )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

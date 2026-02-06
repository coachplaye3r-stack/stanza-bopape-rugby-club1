
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';
import { ICONS, AnimatedLogo } from '../constants';

const OurStory: React.FC<{ user: User | null }> = ({ user }) => {
  return (
    <div className="bg-[#fdfcf0] min-h-screen">
      {/* Navigation Bar (Standalone for this page) */}
      <nav className="bg-emerald-950 p-6 flex justify-between items-center sticky top-0 z-50 shadow-2xl border-b border-emerald-900">
        <Link to="/" className="flex items-center gap-4 group">
          <AnimatedLogo size="w-10 h-10" className="group-hover:rotate-6 transition-transform" />
          <span className="font-black text-white text-2xl tracking-tighter uppercase">SBRC</span>
        </Link>
        <div className="flex gap-8 items-center">
          <Link to="/" className="text-white font-black uppercase text-[10px] tracking-[0.3em] hover:text-yellow-400 transition italic">Back to Home</Link>
          <Link to="/auth" className="bg-yellow-400 text-black px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-yellow-300 transition shadow-xl active:scale-95">Join Us</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center bg-black overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2070&auto=format&fit=crop" 
          alt="Grassroots Rugby" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfcf0] via-transparent to-black/60"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="bg-yellow-400 text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 inline-block shadow-2xl">EST. 2009</span>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none mb-6 drop-shadow-2xl">
            Our Story
          </h1>
          <div className="flex items-center justify-center gap-6">
            <div className="h-[2px] w-16 bg-yellow-400/40"></div>
            <p className="text-yellow-400 text-lg md:text-3xl font-black italic uppercase tracking-[0.25em] drop-shadow-lg">
              The Vision of Mr. Peter Moyo
            </p>
            <div className="h-[2px] w-16 bg-yellow-400/40"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 -mt-32 relative z-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar / Founder Spotlight */}
          <div className="lg:col-span-4 space-y-10">
            <div className="bg-white p-3 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(6,78,59,0.15)] border border-slate-50">
              <div className="aspect-[3/4] rounded-[2.8rem] overflow-hidden bg-slate-100 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop" 
                  alt="Founder Mr. Peter Moyo" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-yellow-400 font-black uppercase text-[10px] tracking-[0.3em] mb-2 italic">Founder & Club President</p>
                  <h3 className="text-white text-3xl font-black uppercase tracking-tight leading-none">Mr. Peter Moyo</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-950 text-white p-10 rounded-[2.5rem] shadow-2xl border border-emerald-900 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <h4 className="text-yellow-400 font-black uppercase text-[10px] tracking-[0.4em] mb-6 italic">"Passa Bolo"</h4>
              <p className="text-emerald-100/70 text-lg leading-relaxed italic font-medium relative z-10">
                "Rugby is more than just a game; it is a tool for social transformation. When we pass the ball, we pass opportunity, trust, and a future to our youth."
              </p>
              <div className="mt-8 pt-8 border-t border-emerald-900 flex justify-between items-end">
                <div>
                  <p className="text-3xl font-black text-white">2009</p>
                  <p className="text-[10px] uppercase font-black text-emerald-500 tracking-widest mt-1">Foundation Year</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-yellow-400">15yr+</p>
                  <p className="text-[10px] uppercase font-black text-emerald-500 tracking-widest mt-1">Enduring Pride</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
               <h4 className="text-emerald-950 font-black uppercase text-[10px] tracking-[0.3em] mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-4 bg-emerald-600 rounded-full"></div>
                  Historical Milestones
               </h4>
               <div className="space-y-6">
                  {[
                    { year: '2009', event: 'First match played on dirt pitches' },
                    { year: '2014', event: 'Regional U18 Champions' },
                    { year: '2019', event: 'Senior Women Division Launch' },
                    { year: '2023', event: '450+ Active Player Milestone' }
                  ].map((m, i) => (
                    <div key={i} className="flex gap-4 group">
                      <span className="text-xs font-black text-yellow-500 group-hover:text-emerald-600 transition-colors">{m.year}</span>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-relaxed">{m.event}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-8 space-y-16 pt-32 lg:pt-48">
            <div className="prose prose-emerald prose-xl max-w-none">
              <h2 className="text-5xl md:text-7xl font-black text-emerald-950 uppercase tracking-tighter mb-10 leading-[0.9]">
                A Legacy of <br/><span className="text-emerald-600">Community</span> <br/>& Hard Work
              </h2>
              
              <div className="space-y-8 text-slate-600 font-medium leading-relaxed text-lg md:text-xl">
                <p>
                  In the winter of 2009, <strong>Mr. Peter Moyo</strong> stood on an empty patch of ground in our community and saw something that others didn't. He didn't see dust or a lack of resources; he saw a generation of talent waiting for a whistle to blow.
                </p>
                
                <p>
                  With just a single rugby ball and a passion for youth development, Mr. Moyo founded <strong>Stanza Bopape Rugby Club (SBRC)</strong>. His mission was simple but profound: to create a safe haven where young men and women could build character, discipline, and physical excellence through the sport of rugby.
                </p>
              </div>

              <div className="bg-emerald-900 text-white p-12 md:p-16 rounded-[3.5rem] shadow-2xl my-20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-[2000ms]"></div>
                <h4 className="text-yellow-400 font-black uppercase tracking-[0.4em] text-xs mb-8 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-yellow-400/30"></span>
                  The SBRC Mission
                </h4>
                <p className="text-white italic text-2xl md:text-3xl font-black leading-snug tracking-tight mb-10">
                  "To be a beacon of hope for the Stanza Bopape community, nurturing elite athletes and responsible citizens through the values of integrity, passion, and teamwork."
                </p>
                <div className="flex gap-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/40"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/20"></div>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-emerald-950 uppercase tracking-tighter mb-8 italic">Growing the Pride</h3>
              <div className="space-y-8 text-slate-600 font-medium leading-relaxed text-lg md:text-xl mb-20">
                <p>
                  What began as a small group of U13 boys has blossomed into a full-scale regional powerhouse. Today, SBRC boasts teams for boys and girls from U13 to U18, a formidable Senior Women's side, and a Senior Men's division that competes at the highest regional levels.
                </p>
                
                <p>
                  The club's motto, <strong>"Passa Bolo"</strong>, was coined by Mr. Moyo early in the club's history. It is a call to action—encouraging players to trust their teammates and keep the momentum moving forward, both on and off the field.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl hover:translate-y-[-8px] transition-transform duration-500">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <h5 className="font-black text-emerald-950 uppercase text-sm mb-4 tracking-widest">Holistic Growth</h5>
                  <p className="text-sm text-slate-500 leading-relaxed font-bold uppercase tracking-wide opacity-80">We focus on academic support and life-skills alongside rugby training, ensuring our players win in life, not just on the scoreboard.</p>
                </div>
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl hover:translate-y-[-8px] transition-transform duration-500">
                  <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <h5 className="font-black text-emerald-950 uppercase text-sm mb-4 tracking-widest">Inclusive Future</h5>
                  <p className="text-sm text-slate-500 leading-relaxed font-bold uppercase tracking-wide opacity-80">Mr. Moyo’s vision includes a future where every child in our community has access to world-class coaching and facilities.</p>
                </div>
              </div>
            </div>

            <div className="pt-20 border-t border-emerald-950/5 flex flex-col items-center text-center">
              <h4 className="text-3xl font-black text-emerald-950 uppercase tracking-tighter mb-8 leading-none italic">Are you ready to run with the pride?</h4>
              <Link to="/auth" className="inline-flex items-center gap-6 bg-black text-white px-12 py-6 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:bg-yellow-400 hover:text-black transition-all shadow-[0_24px_48px_-12px_rgba(0,0,0,0.3)] group active:scale-95">
                Join our family today
                <span className="text-xl group-hover:translate-x-3 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Simplified for Story Page) */}
      <footer className="bg-emerald-950 text-white py-16 px-6 border-t border-emerald-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex items-center gap-4">
            <AnimatedLogo size="w-12 h-12" />
            <div>
              <span className="font-black text-2xl tracking-tighter uppercase block leading-none">SBRC</span>
              <span className="text-[9px] text-emerald-500 uppercase font-black tracking-[0.4em] mt-1 block">Est. 2009</span>
            </div>
          </div>
          <p className="text-[11px] text-emerald-200/40 uppercase font-black tracking-[0.4em] italic max-w-sm">
            Stanza Bopape Rugby Club • Respect. Passion. "Passa Bolo"
          </p>
          <div className="flex gap-8">
             <Link to="/auth" className="text-[10px] font-black uppercase tracking-widest text-yellow-400 hover:underline">Membership</Link>
             <Link to="/gallery" className="text-[10px] font-black uppercase tracking-widest text-white hover:text-yellow-400">Media</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OurStory;

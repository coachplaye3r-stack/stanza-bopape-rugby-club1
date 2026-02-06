
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { User, UserRole } from '../types';
import { MOCK_TEAMS } from '../services/mockData';
import { ICONS } from '../constants';

const TeamProfile: React.FC<{ user: User }> = ({ user }) => {
  const { teamId } = useParams<{ teamId: string }>();
  const team = MOCK_TEAMS.find(t => t.id === teamId);

  // For demonstration, if teamId is t2 (Senior Women), we use the context of the provided images
  const isSeniorWomen = teamId === 't2' || team?.name.includes('Senior Women');

  const SENIOR_WOMEN_IMAGERY = [
    { title: "Team Spirit", url: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1000", caption: "The pride of Stanza Bopape." },
    { title: "Match Day Ready", url: "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1000", caption: "Focus and determination." },
    { title: "Player Focus", url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000", caption: "Individual mastery." },
    { title: "Squad Photo", url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000", caption: "2024 Season Official Portrait." },
    { title: "Pre-Game Stretch", url: "https://images.unsplash.com/photo-1512411411306-0568f180f977?q=80&w=1000", caption: "Preparation is key." },
    { title: "Try Celebration", url: "https://images.unsplash.com/photo-1634125816913-793574168c12?q=80&w=1000", caption: "Unity in victory." }
  ];

  if (!team) return <div>Team not found</div>;

  return (
    <div className="space-y-12 pb-24">
      {/* Dynamic Hero Section */}
      <section className="relative h-[45vh] rounded-[3rem] overflow-hidden group shadow-2xl border-4 border-white">
        <img 
          src={isSeniorWomen ? "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=2070&auto=format&fit=crop" : "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=2070"} 
          alt={team.name} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/30 to-black/20"></div>
        <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row items-end justify-between gap-8">
           <div className="animate-in slide-in-from-left-8 duration-700">
              <span className="bg-yellow-400 text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4 inline-block">Division: {team.ageGroup}</span>
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-2 drop-shadow-xl">{team.name}</h1>
              <p className="text-emerald-400 text-xl font-black italic uppercase tracking-[0.2em] transform -skew-x-12">"Passa Bolo"</p>
           </div>
           <div className="flex gap-4 animate-in slide-in-from-right-8 duration-700">
              <Link to="/chat" className="bg-white/10 backdrop-blur-md text-white border border-white/20 p-5 rounded-2xl hover:bg-white/20 transition-all group">
                <ICONS.Chat className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </Link>
              <button className="bg-yellow-400 text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-yellow-300 transition-all shadow-xl active:scale-95">
                Join Squad
              </button>
           </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar: Team Stats */}
        <div className="lg:col-span-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <h3 className="font-black text-emerald-950 uppercase tracking-[0.2em] text-xs mb-8 flex items-center gap-3">
              <div className="w-1.5 h-4 bg-emerald-600 rounded-full"></div>
              Team Intel
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-slate-50 pb-4">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Head Coach</span>
                 <span className="text-sm font-black text-emerald-900 uppercase italic">Coach Thabang</span>
              </div>
              <div className="flex justify-between items-end border-b border-slate-50 pb-4">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Players</span>
                 <span className="text-sm font-black text-emerald-900">22 Registered</span>
              </div>
              <div className="flex justify-between items-end border-b border-slate-50 pb-4">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Current Rank</span>
                 <span className="text-sm font-black text-emerald-900 uppercase">2nd in Division</span>
              </div>
              <div className="flex justify-between items-end pb-4">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Training Days</span>
                 <span className="text-sm font-black text-emerald-900 uppercase tracking-tighter">Tue • Thu • Sat</span>
              </div>
            </div>
            
            <div className="mt-10 bg-emerald-950 text-white p-6 rounded-3xl shadow-lg border border-emerald-900">
               <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mb-3 italic">Next Match</p>
               <div className="flex items-center justify-between gap-4">
                  <div className="text-center">
                    <p className="text-xs font-black">SBRC</p>
                  </div>
                  <div className="px-3 py-1 bg-yellow-400 rounded-lg text-[9px] font-black text-black">VS</div>
                  <div className="text-center">
                    <p className="text-xs font-black">EAGLES</p>
                  </div>
               </div>
               <p className="text-[9px] text-emerald-500 font-bold uppercase tracking-widest text-center mt-4 italic">Saturday • 14:00 • Home</p>
            </div>
          </div>

          <div className="bg-emerald-950 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform duration-1000 group-hover:scale-125"></div>
            <h3 className="font-black uppercase tracking-[0.3em] text-[10px] text-yellow-400 mb-6 italic">The Founders Vision</h3>
            <p className="text-emerald-100/70 text-lg leading-relaxed italic font-medium relative z-10">
              "The Senior Women's team represents the pinnacle of our growth. They aren't just players; they are the sisters and mothers leading the charge for a new era of South African rugby."
            </p>
            <p className="mt-6 text-sm font-black uppercase text-white">— Mr. Peter Moyo</p>
          </div>
        </div>

        {/* Main Content: Squad Gallery */}
        <div className="lg:col-span-8 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-50 min-h-[600px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
               <div>
                  <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Squad Profile Gallery</h2>
                  <div className="h-1.5 w-16 bg-yellow-400 mt-2 rounded-full"></div>
               </div>
               <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  {['Highlights', 'Training', 'Portraits'].map((cat, i) => (
                    <button key={cat} className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${i === 0 ? 'bg-emerald-950 text-white shadow-xl shadow-emerald-900/20' : 'bg-slate-50 text-slate-400 border border-slate-100 hover:text-emerald-950'}`}>
                      {cat}
                    </button>
                  ))}
               </div>
            </div>

            {isSeniorWomen ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {SENIOR_WOMEN_IMAGERY.map((img, i) => (
                  <div key={i} className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 bg-slate-100 border-4 border-white">
                    <img 
                      src={img.url} 
                      alt={img.title} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                       <span className="text-yellow-400 text-[9px] font-black uppercase tracking-[0.3em] mb-2 italic">{img.title}</span>
                       <h4 className="text-white text-xl font-black uppercase tracking-tight leading-tight">{img.caption}</h4>
                       <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <span className="text-[8px] text-white/60 font-black uppercase tracking-widest italic">Pride of SB</span>
                          <div className="w-8 h-8 rounded-xl bg-yellow-400 flex items-center justify-center text-black">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
                          </div>
                       </div>
                    </div>
                    {/* Decorative element for specific photos to mimic the "posed" look of the provided images */}
                    <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-white/30 rounded-tl-2xl"></div>
                    <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-white/30 rounded-br-2xl"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 border-2 border-dashed border-slate-100 rounded-[2rem] bg-slate-50/50">
                <p className="text-slate-400 font-black uppercase text-xs tracking-widest italic">Gallery content loading...</p>
              </div>
            )}
          </div>

          <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-50 flex flex-col items-center text-center">
             <div className="w-20 h-20 bg-emerald-50 rounded-[2rem] flex items-center justify-center text-emerald-600 mb-8 border border-emerald-100 shadow-sm">
                <ICONS.Team className="w-10 h-10" />
             </div>
             <h3 className="text-3xl font-black text-emerald-950 uppercase tracking-tighter mb-4 italic">Ready to run with the Pride?</h3>
             <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-10 max-w-sm">We are always scouting for talent to join the Senior Women's division.</p>
             <button className="bg-emerald-950 text-white px-12 py-5 rounded-[2rem] font-black uppercase tracking-[0.3em] text-[10px] hover:bg-yellow-400 hover:text-black transition-all shadow-2xl active:scale-95">
                Apply for Scouting
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamProfile;


import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';
import { ICONS, AnimatedLogo } from '../constants';

const Home: React.FC<{ user: User | null }> = ({ user }) => {
  return (
    <div className="bg-[#fdfcf0]">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden bg-black">
        <img 
          src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=2070&auto=format&fit=crop" 
          alt="Rugby Action" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-8 flex justify-center animate-bounce duration-[5000ms]">
            <AnimatedLogo size="w-32 h-32 md:w-40 md:h-40" />
          </div>
          <div className="space-y-2">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none drop-shadow-2xl">
              Stanza Bopape
            </h1>
            <h2 className="text-3xl md:text-5xl font-outline-white text-transparent uppercase tracking-[0.2em] font-black border-white inline-block px-4 py-1" style={{ WebkitTextStroke: '2px white' }}>
              Rugby Club
            </h2>
          </div>
          <div className="mt-8 mb-12">
            <p className="text-3xl md:text-5xl font-black italic text-yellow-400 tracking-widest uppercase transform -skew-x-12 drop-shadow-lg">
              "Passa Bolo"
            </p>
            <p className="text-lg md:text-xl font-bold text-slate-200 mt-2 uppercase tracking-[0.3em]">The Pride of the Community</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {user ? (
              <Link to="/dashboard" className="bg-yellow-400 text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-yellow-300 transition shadow-2xl hover:scale-105 active:scale-95 duration-200">
                Club Dashboard
              </Link>
            ) : (
              <>
                <Link to="/auth" className="bg-yellow-400 text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-yellow-300 transition shadow-2xl hover:scale-105 active:scale-95 duration-200">
                  Join the Pride
                </Link>
                <Link to="/our-story" className="border-2 border-white/40 backdrop-blur-md px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white/20 transition shadow-2xl">
                  Our Legacy
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* About Section snippet */}
      <section id="about" className="py-24 px-4 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400 opacity-5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-400 opacity-5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-yellow-400 font-black uppercase tracking-widest mb-4 text-sm">Our Heartbeat</h3>
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter">Passa Bolo</h2>
          <p className="text-emerald-100/70 text-lg md:text-xl leading-relaxed mb-12 font-medium">
            At Stanza Bopape Rugby Club, we don't just play the game—we live it. Our motto, "Passa Bolo", reminds us that success comes from teamwork, trust, and the constant forward momentum of our community. Since our founding in 2009, we've dedicated ourselves to nurturing talent from grassroots to elite levels.
          </p>
          <Link 
            to="/our-story" 
            className="inline-flex items-center gap-3 border-2 border-yellow-400/40 text-yellow-400 px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-yellow-400 hover:text-black transition-all mb-20 group"
          >
            Meet Our Founder <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-8 border border-emerald-900 rounded-[2rem] bg-emerald-900/30 backdrop-blur-sm group hover:border-yellow-400/50 transition-colors">
              <p className="text-4xl font-black text-yellow-400 mb-1">2009</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Established</p>
            </div>
            <div className="p-8 border border-emerald-900 rounded-[2rem] bg-emerald-900/30 backdrop-blur-sm group hover:border-yellow-400/50 transition-colors">
              <p className="text-4xl font-black text-yellow-400 mb-1">15+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Coaches</p>
            </div>
            <div className="p-8 border border-emerald-900 rounded-[2rem] bg-emerald-900/30 backdrop-blur-sm group hover:border-yellow-400/50 transition-colors">
              <p className="text-4xl font-black text-yellow-400 mb-1">450+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Players</p>
            </div>
            <div className="p-8 border border-emerald-900 rounded-[2rem] bg-emerald-900/30 backdrop-blur-sm group hover:border-yellow-400/50 transition-colors">
              <p className="text-4xl font-black text-yellow-400 mb-1">100%</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Highlights */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 border-b-4 border-emerald-950/5 pb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-emerald-950 tracking-tighter">Club Updates</h2>
              <p className="text-emerald-800/50 font-black uppercase tracking-[0.3em] text-[10px] mt-2 italic">The heartbeat of Stanza Bopape</p>
            </div>
            <Link to="/gallery" className="text-emerald-800 font-black uppercase tracking-widest text-xs hover:text-yellow-500 transition-colors flex items-center gap-2 mb-2 group">
              View All News <span className="text-yellow-500 group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Pre-Season Training Intensity", img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800", date: "May 14, 2024", desc: "Our U18s and Senior Men are hitting the dirt hard this week as we prepare for the district championships." },
              { title: "Lineout Drills Focus", img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=800", date: "May 12, 2024", desc: "Technical mastery in the air. Coach Thabang leads a special session on set-piece dominance." },
              { title: "Community Field Day", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800", date: "May 10, 2024", desc: "A celebration of rugby for all ages. Join us this Saturday for a community-wide skills clinic." }
            ].map((news, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-900/10 hover:shadow-emerald-900/20 transition-all duration-500 border border-slate-50 group">
                <div className="relative h-72 overflow-hidden">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-yellow-400 text-black text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-xl">Latest News</span>
                  </div>
                </div>
                <div className="p-10">
                  <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] mb-3 block italic">{news.date}</span>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-emerald-950 leading-tight group-hover:text-emerald-700 transition-colors">{news.title}</h3>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">{news.desc}</p>
                  <button className="text-emerald-950 font-black uppercase tracking-widest text-[10px] hover:text-yellow-500 transition-colors flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-yellow-400"></span>
                    Read Full Article
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-24 bg-emerald-950 border-y border-emerald-900 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-emerald-400 uppercase tracking-[0.4em] text-[10px] font-black mb-12 italic">Stronger together with our partners</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
             {/* Text-based icons for demo purposes, would be logos in production */}
            {['Nike', 'Vodacom', 'Standard Bank', 'MTN', 'Discovery'].map(name => (
              <div key={name} className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter hover:text-yellow-400 transition-colors cursor-default">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-emerald-600 to-yellow-400 opacity-50"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <AnimatedLogo size="w-12 h-12" />
              <span className="font-black text-3xl tracking-tighter uppercase">SBRC</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-10 font-medium">
              Empowering youth and promoting rugby excellence in the heart of our community. Building leaders on and off the field.
              <br/><br/>
              <span className="text-yellow-400 font-black uppercase italic tracking-[0.3em] text-lg">"Passa Bolo"</span>
            </p>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-[0.2em] text-[10px] mb-10 text-emerald-500 border-b border-emerald-900 pb-2">Club Navigation</h4>
            <ul className="space-y-5 text-xs font-black uppercase tracking-widest text-slate-500">
              <li><Link to="/our-story" className="hover:text-yellow-400 transition-colors">Our Legacy</Link></li>
              <li><Link to="/teams" className="hover:text-yellow-400 transition-colors">Teams & Squads</Link></li>
              <li><Link to="/gallery" className="hover:text-yellow-400 transition-colors">Club Gallery</Link></li>
              <li><Link to="/auth" className="hover:text-yellow-400 transition-colors">Join The Club</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-[0.2em] text-[10px] mb-10 text-emerald-500 border-b border-emerald-900 pb-2">Connect</h4>
            <div className="grid grid-cols-2 gap-4">
              {['Facebook', 'Instagram', 'YouTube', 'WhatsApp'].map(social => (
                <div key={social} className="px-4 py-3 rounded-2xl border border-white/5 flex items-center justify-center hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 cursor-pointer font-black text-[9px] uppercase tracking-widest text-slate-500">
                  {social}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-[0.2em] text-[10px] mb-10 text-emerald-500 border-b border-emerald-900 pb-2">Stay Updated</h4>
            <div className="flex flex-col gap-6">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Subscribe to our newsletter</p>
              <div className="flex bg-white/5 p-2 rounded-2xl border border-white/10 group focus-within:border-yellow-400/50 transition-colors">
                <input type="email" placeholder="Enter your email" className="bg-transparent flex-1 px-4 py-2 text-sm outline-none placeholder:text-slate-700 font-bold" />
                <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-yellow-300 transition-all shadow-lg active:scale-95">Go</button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 text-center">
          <p className="text-[9px] text-slate-700 font-black uppercase tracking-[0.5em] mb-4">
            © 2024 Stanza Bopape Rugby Club. Built on Passion. Passa Bolo Forever.
          </p>
          <div className="flex justify-center gap-10 opacity-20">
            <div className="w-12 h-1 bg-emerald-600 rounded-full"></div>
            <div className="w-12 h-1 bg-yellow-400 rounded-full"></div>
            <div className="w-12 h-1 bg-emerald-600 rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

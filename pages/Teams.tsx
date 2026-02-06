
import React from 'react';
import { Link } from 'react-router-dom';
import { User, UserRole } from '../types';
import { MOCK_TEAMS } from '../services/mockData';

const Teams: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
        <div>
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Rugby Divisions</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-1">Managing our youth and senior powerhouses.</p>
        </div>
        {user.role === UserRole.SUPER_ADMIN && (
          <button className="bg-emerald-950 text-white px-8 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-yellow-400 hover:text-black transition-all shadow-xl">
            Create New Team
          </button>
        )}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_TEAMS.map(team => (
          <div key={team.id} className="bg-white rounded-[2.5rem] shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 group overflow-hidden flex flex-col">
            <div className="h-48 bg-emerald-900 relative overflow-hidden">
               {/* Team Specific Background Imagery */}
               <img 
                 src={team.ageGroup === 'Senior' ? "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800" : "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800"} 
                 alt={team.name}
                 className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent"></div>
               <div className="absolute bottom-6 left-8">
                  <p className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.3em] mb-1 italic">Division: {team.ageGroup}</p>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none">{team.name}</h3>
               </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-8 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-300"></div>
                   ))}
                   <div className="w-10 h-10 rounded-full border-4 border-white bg-yellow-400 text-[10px] flex items-center justify-center font-black text-black">+{team.players.length}</div>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Team Strength</p>
                  <p className="text-sm font-black text-emerald-900">Active Roster</p>
                </div>
              </div>
              
              <div className="space-y-4 mt-auto">
                <Link 
                  to={`/teams/${team.id}`}
                  className="w-full py-4 bg-emerald-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center gap-2 group/btn shadow-lg"
                >
                  View Team Profile
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
                {user.role === UserRole.COACH && user.teamId === team.id && (
                  <button className="w-full py-4 border-2 border-slate-100 text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-yellow-400 transition-all">
                    Coach Dashboard
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;

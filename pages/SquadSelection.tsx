
import React from 'react';
import { User } from '../types';

const SquadSelection: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-slate-800">Squad Selection</h1>
        <p className="text-slate-500">Pick your starting lineup for the upcoming match.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pitch View */}
        <div className="lg:col-span-2 bg-emerald-700 rounded-3xl p-8 relative min-h-[600px] border-[6px] border-white/20 shadow-2xl overflow-hidden">
           {/* Pitch Markings */}
           <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white/40"></div>
           <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/40"></div>
           <div className="absolute top-[20%] bottom-[20%] left-0 right-0 border-y-2 border-white/20"></div>

           <div className="relative z-10 grid grid-cols-3 gap-4 h-full">
              {/* Positions visualization would go here - simplified list for now */}
              {[...Array(15)].map((_, i) => (
                <div key={i} className="flex flex-col items-center justify-center space-y-2">
                   <div className="w-12 h-12 rounded-full bg-yellow-400 border-4 border-emerald-900 flex items-center justify-center font-black text-emerald-900 shadow-lg">
                     {i + 1}
                   </div>
                   <div className="bg-white/90 px-3 py-1 rounded text-[10px] font-bold shadow-sm uppercase">Empty</div>
                </div>
              ))}
           </div>
        </div>

        {/* Player List */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold mb-4">Available Players</h3>
            <div className="space-y-3">
              {[
                { name: 'Sibusiso Khumalo', pos: 'Fly-half' },
                { name: 'Thando Mokoena', pos: 'Scrum-half' },
                { name: 'Lerato Phiri', pos: 'Hooker' },
                { name: 'Vusi Zulu', pos: 'Lock' }
              ].map(p => (
                <div key={p.name} className="flex items-center justify-between p-3 border border-slate-50 rounded-xl hover:bg-slate-50 cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                    <div>
                      <p className="text-sm font-bold">{p.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">{p.pos}</p>
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-emerald-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">+</button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-400 text-emerald-950 p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold mb-2">Finalize Squad</h3>
            <p className="text-xs mb-4 font-medium opacity-80">Once finalized, the squad will be announced to all players and parents.</p>
            <button className="w-full bg-emerald-950 text-white py-3 rounded-xl font-bold hover:bg-emerald-900 transition">Confirm & Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquadSelection;


import React from 'react';
import { User, UserRole } from '../types';
import { MOCK_TEAMS } from '../services/mockData';

const Dashboard: React.FC<{ user: User }> = ({ user }) => {
  const team = MOCK_TEAMS.find(t => t.id === user.teamId);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-slate-800">Welcome back, {user.fullName}!</h1>
        <p className="text-slate-500">Here's what's happening at the club today.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Role-Specific Action Card */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Main Action Area */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-emerald-600 rounded-full"></span>
              {user.role === UserRole.COACH ? 'Team Management' : 'My Schedule'}
            </h2>
            
            {user.role === UserRole.COACH && team ? (
              <div className="space-y-4">
                <div className="p-4 bg-emerald-50 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="font-bold text-emerald-900">{team.name}</p>
                    <p className="text-sm text-emerald-700">{team.players.length} Players Registered</p>
                  </div>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-bold">Select Squad</button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 cursor-pointer">
                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">Attendance</p>
                    <p className="text-2xl font-bold">85%</p>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 cursor-pointer">
                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">New Signups</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {team?.fixtures.slice(0, 2).map(fixture => (
                  <div key={fixture.id} className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl">
                    <div className="bg-slate-100 p-3 rounded-lg text-center min-w-[60px]">
                      <span className="block text-xs font-bold text-slate-500 uppercase">May</span>
                      <span className="block text-xl font-bold">{fixture.date.split('-')[2]}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">{fixture.opponent}</p>
                      <p className="text-sm text-slate-500">{fixture.location} • {fixture.time}</p>
                    </div>
                    <button className="text-emerald-600 text-sm font-bold">RSVP</button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Activity Feed */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold mb-4">Club Announcements</h2>
            <div className="space-y-6">
              {[1, 2].map(i => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 shrink-0"></div>
                  <div>
                    <p className="text-sm font-bold">New Kit Unveiling!</p>
                    <p className="text-sm text-slate-500">The 2024 season kits have arrived. Collect yours from the clubhouse after training on Tuesday.</p>
                    <span className="text-xs text-slate-400 mt-2 block">2 hours ago</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Mini Widgets */}
        <div className="space-y-6">
          {/* Quick Access */}
          <div className="bg-emerald-900 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 bg-emerald-800 rounded-xl text-xs hover:bg-emerald-700">Medical Forms</button>
              <button className="p-3 bg-emerald-800 rounded-xl text-xs hover:bg-emerald-700">Training Drills</button>
              <button className="p-3 bg-emerald-800 rounded-xl text-xs hover:bg-emerald-700">Code of Conduct</button>
              <button className="p-3 bg-emerald-800 rounded-xl text-xs hover:bg-emerald-700">Contact Admin</button>
            </div>
          </div>

          {/* Standings Snippet */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold mb-4">League Standings</h3>
            <div className="space-y-2">
              {[
                { name: 'SB Rugby Club', p: 5, w: 4, l: 1, pts: 12 },
                { name: 'Mamelodi Eagles', p: 5, w: 3, l: 2, pts: 9 },
                { name: 'Tshwane Titans', p: 4, w: 2, l: 2, pts: 6 }
              ].map((row, i) => (
                <div key={row.name} className={`flex items-center justify-between text-sm p-2 rounded-lg ${i === 0 ? 'bg-yellow-50 font-bold' : ''}`}>
                  <span>{i + 1}. {row.name}</span>
                  <span className="text-slate-500">{row.pts} pts</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-center text-sm font-bold text-emerald-600">View Full Table</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

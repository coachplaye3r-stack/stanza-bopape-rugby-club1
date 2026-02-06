
import React, { useState } from 'react';
import { UserRole, User } from '../types';
import { MOCK_USERS } from '../services/mockData';
import { ICONS, AnimatedLogo } from '../constants';

const Auth: React.FC<{ onLogin: (u: User) => void }> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = MOCK_USERS.find(u => u.email === email) || MOCK_USERS[0];
    onLogin(user);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black">
      {/* Branding Side */}
      <div className="hidden md:flex flex-col justify-center p-20 bg-black text-white w-1/2 relative overflow-hidden">
        <AnimatedLogo size="w-32 h-32" className="mb-10" />
        <h1 className="text-7xl font-black mb-4 leading-tight uppercase tracking-tighter">Stanza <br/>Bopape</h1>
        <h2 className="text-2xl text-yellow-400 font-black italic uppercase tracking-[0.3em] mb-8">Passa Bolo</h2>
        <p className="text-xl text-slate-400 font-light leading-relaxed max-w-md">Enter the clubhouse. Access your team, stats, and contribute to the community heartbeat.</p>
        
        <div className="mt-20 flex gap-10">
           <div>
              <p className="text-4xl font-black text-white">450+</p>
              <p className="text-[10px] text-yellow-400 font-black uppercase tracking-[0.2em]">Players</p>
           </div>
           <div>
              <p className="text-4xl font-black text-white">2009</p>
              <p className="text-[10px] text-yellow-400 font-black uppercase tracking-[0.2em]">Est.</p>
           </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white md:rounded-l-[40px]">
        <div className="w-full max-w-md">
          <div className="md:hidden flex flex-col items-center mb-10 text-center">
            <AnimatedLogo size="w-20 h-20" className="mb-4" />
            <h1 className="font-black text-2xl uppercase tracking-tighter">Stanza Bopape</h1>
            <p className="text-yellow-500 font-black italic uppercase text-xs tracking-widest">Passa Bolo</p>
          </div>
          <h2 className="text-3xl font-black mb-2 uppercase tracking-tight text-slate-800">{isLogin ? 'Welcome Back' : 'Join the Pride'}</h2>
          <p className="text-slate-500 mb-8 font-medium">{isLogin ? 'Please enter your credentials to log in.' : 'Fill in the details to request access.'}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  placeholder="e.g. John Doe"
                />
              </div>
            )}
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-yellow-400 transition font-medium"
                placeholder="email@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-yellow-400 transition font-medium"
                placeholder="••••••••"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Primary Role</label>
                <select className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-yellow-400 transition font-bold text-slate-700">
                  <option value={UserRole.PLAYER}>Player</option>
                  <option value={UserRole.COACH}>Coach</option>
                  <option value={UserRole.PARENT}>Parent / Guardian</option>
                  <option value={UserRole.FAN}>Fan / Community Member</option>
                </select>
              </div>
            )}

            <button type="submit" className="w-full bg-black text-white p-5 rounded-2xl font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-xl shadow-black/10 text-xs">
              {isLogin ? 'Log In to Clubhouse' : 'Submit Registration'}
            </button>
          </form>

          <div className="mt-10 text-center text-sm">
            <span className="text-slate-500 font-medium">{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 font-black text-black hover:underline uppercase tracking-widest text-xs"
            >
              {isLogin ? 'Join Now' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

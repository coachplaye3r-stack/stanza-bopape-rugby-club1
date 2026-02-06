
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { User, UserRole } from './types';
import { MOCK_USERS } from './services/mockData';
import { ICONS, COLORS, AnimatedLogo } from './constants';

// Page Imports
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Teams from './pages/Teams';
import TeamProfile from './pages/TeamProfile';
import SquadSelection from './pages/SquadSelection';
import Finance from './pages/Finance';
import Chat from './pages/Chat';
import Gallery from './pages/Gallery';
import Profile from './pages/Profile';
import OurStory from './pages/OurStory';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('sbrc_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const handleLogin = (u: User) => {
    setUser(u);
    localStorage.setItem('sbrc_user', JSON.stringify(u));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('sbrc_user');
  };

  if (loading) return <div className="h-screen flex items-center justify-center font-black uppercase tracking-widest text-emerald-900 animate-pulse">Entering Clubhouse...</div>;

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/auth" element={user ? <Navigate to="/dashboard" /> : <Auth onLogin={handleLogin} />} />
          <Route path="/our-story" element={<OurStory user={user} />} />
          
          <Route path="/*" element={
            user ? (
              <AppShell user={user} onLogout={handleLogout}>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard user={user} />} />
                  <Route path="/teams" element={<Teams user={user} />} />
                  <Route path="/teams/:teamId" element={<TeamProfile user={user} />} />
                  <Route path="/squads" element={<SquadSelection user={user} />} />
                  <Route path="/finance" element={<Finance user={user} />} />
                  <Route path="/chat" element={<Chat user={user} />} />
                  <Route path="/gallery" element={<Gallery user={user} />} />
                  <Route path="/profile" element={<Profile user={user} />} />
                </Routes>
              </AppShell>
            ) : <Navigate to="/auth" />
          } />
        </Routes>
      </div>
    </Router>
  );
};

const AppShell: React.FC<{ user: User; onLogout: () => void; children: React.ReactNode }> = ({ user, onLogout, children }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { label: 'Public Home', path: '/', icon: ICONS.Home, roles: Object.values(UserRole) },
    { label: 'Dashboard', path: '/dashboard', icon: ICONS.Dashboard, roles: Object.values(UserRole) },
    { label: 'Teams', path: '/teams', icon: ICONS.Team, roles: Object.values(UserRole) },
    { label: 'My Profile', path: '/profile', icon: ICONS.User, roles: Object.values(UserRole) },
    { label: 'Chat', path: '/chat', icon: ICONS.Chat, roles: [UserRole.SUPER_ADMIN, UserRole.COACH, UserRole.PLAYER, UserRole.PARENT] },
    { label: 'Finance', path: '/finance', icon: ICONS.Finance, roles: [UserRole.SUPER_ADMIN, UserRole.MANAGEMENT_ADMIN] },
    { label: 'Schedule', path: '/schedule', icon: ICONS.Calendar, roles: Object.values(UserRole) },
  ];

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-black text-white">
        <div className="p-8 flex flex-col items-center gap-4 border-b border-white/10 group">
          <AnimatedLogo size="w-16 h-16" className="group-hover:scale-110 transition-transform duration-500" />
          <div className="text-center">
            <span className="font-black text-lg leading-none uppercase tracking-tighter block">STANZA BOPAPE</span>
            <span className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.3em] block mt-1 italic text-shadow">Passa Bolo</span>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-2 py-6 overflow-y-auto">
          {navItems.filter(item => item.roles.includes(user.role)).map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${location.pathname === item.path ? 'bg-yellow-400 text-black font-bold shadow-lg shadow-yellow-400/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="uppercase text-xs tracking-widest">{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-6 border-t border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold border border-white/20 overflow-hidden">
              {user.profilePhoto ? (
                <img src={user.profilePhoto} className="w-full h-full object-cover" />
              ) : user.fullName.charAt(0)}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-black truncate uppercase">{user.fullName}</p>
              <p className="text-[10px] text-yellow-400 uppercase font-bold tracking-widest">{user.role.toLowerCase().replace('_', ' ')}</p>
            </div>
          </div>
          <button onClick={onLogout} className="flex items-center gap-3 w-full p-2 text-slate-500 hover:text-white transition-colors group">
            <ICONS.LogOut className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <span className="uppercase text-[10px] font-black tracking-widest">Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Header & Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="md:hidden bg-black text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AnimatedLogo size="w-8 h-8" />
            <span className="font-black text-sm tracking-tighter uppercase">SBRC</span>
          </div>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </header>

        {/* Mobile Navigation Drawer Overlay */}
        {isSidebarOpen && (
           <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}></div>
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-black text-white">
                 <div className="p-8 border-b border-white/10 flex flex-col items-center gap-4">
                    <AnimatedLogo size="w-16 h-16" />
                    <div className="text-center">
                      <span className="font-black text-lg tracking-tighter uppercase">Stanza Bopape</span>
                      <span className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.3em] block italic">Passa Bolo</span>
                    </div>
                 </div>
                 <nav className="p-6 space-y-2 overflow-y-auto max-h-[calc(100vh-250px)]">
                    {navItems.filter(item => item.roles.includes(user.role)).map(item => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsSidebarOpen(false)}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all ${location.pathname === item.path ? 'bg-yellow-400 text-black font-bold' : 'text-slate-400 hover:bg-white/5'}`}
                      >
                        <item.icon className="w-6 h-6" />
                        <span className="uppercase text-xs tracking-widest">{item.label}</span>
                      </Link>
                    ))}
                    <button onClick={onLogout} className="flex items-center gap-4 p-4 w-full text-slate-500 mt-8">
                       <ICONS.LogOut className="w-6 h-6" />
                       <span className="uppercase text-xs tracking-widest font-black">Logout</span>
                    </button>
                 </nav>
              </div>
           </div>
        )}

        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default App;

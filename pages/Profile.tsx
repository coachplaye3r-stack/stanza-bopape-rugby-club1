
import React, { useState, useRef, useEffect } from 'react';
import { User, UserRole, PlayerProfile, GalleryItem } from '../types';
import { MOCK_TEAMS } from '../services/mockData';

const Profile: React.FC<{ user: User }> = ({ user }) => {
  // Profile State
  const [isEditMode, setIsEditMode] = useState(false);
  const [profileData, setProfileData] = useState<Partial<PlayerProfile>>({
    fullName: user.fullName,
    email: user.email,
    dob: '2006-05-15',
    gender: 'Male',
    position: 'Fly-half',
    ageGroup: 'U18',
    jerseyNumber: '10',
    height: '1.82m',
    weight: '78kg',
    achievements: ['Season MVP 2023', 'Top Try Scorer', 'Regional Finals Selection'],
    teamId: user.teamId || 't1',
    profilePhoto: user.profilePhoto || '',
  });

  // Gallery State
  const [gallery, setGallery] = useState<GalleryItem[]>([
    { id: 'g1', url: 'https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=800&auto=format&fit=crop', type: 'image', caption: 'Scoring my first try!', timestamp: '2024-04-12' },
    { id: 'g2', url: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=800&auto=format&fit=crop', type: 'image', caption: 'Post-match team photo', timestamp: '2024-04-13' },
  ]);

  const [isUploading, setIsUploading] = useState(false);
  const [uploadCaption, setUploadCaption] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadType, setUploadType] = useState<'image' | 'video'>('image');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const profilePhotoInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setUploadType(file.type.startsWith('video') ? 'video' : 'image');
    }
  };

  const handleProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfileData({ ...profileData, profilePhoto: url });
    }
  };

  const handleUpload = () => {
    if (previewUrl && uploadCaption) {
      const newItem: GalleryItem = {
        id: Math.random().toString(),
        url: previewUrl,
        type: uploadType,
        caption: uploadCaption,
        timestamp: new Date().toISOString().split('T')[0]
      };
      setGallery([newItem, ...gallery]);
      setPreviewUrl(null);
      setUploadCaption('');
      setIsUploading(false);
    }
  };

  const saveProfile = () => {
    setIsEditMode(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      {/* Header Profile Card */}
      <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden group/card">
        <div className="h-64 relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop" 
            alt="Rugby Background" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          
          <div className="absolute -bottom-16 left-8 group/photo">
            <div className="w-40 h-40 rounded-3xl bg-yellow-400 border-8 border-white flex items-center justify-center text-emerald-900 text-5xl font-black shadow-2xl uppercase overflow-hidden relative">
              {profileData.profilePhoto ? (
                <img src={profileData.profilePhoto} className="w-full h-full object-cover" alt="Profile" />
              ) : (
                profileData.fullName?.charAt(0)
              )}
              {/* Profile Photo Upload Overlay */}
              <button 
                onClick={() => profilePhotoInputRef.current?.click()}
                className="absolute inset-0 bg-emerald-950/60 flex flex-col items-center justify-center opacity-0 group-hover/photo:opacity-100 transition-all duration-300 backdrop-blur-sm"
              >
                <svg className="w-10 h-10 text-yellow-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Change Photo</span>
              </button>
              <input 
                type="file" 
                ref={profilePhotoInputRef} 
                className="hidden" 
                accept="image/*" 
                onChange={handleProfilePhotoChange} 
              />
            </div>
          </div>
        </div>
        
        <div className="pt-24 pb-10 px-10 flex flex-col md:flex-row md:items-end justify-between gap-8 bg-white">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">{profileData.fullName}</h1>
              {profileData.ageGroup && (
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-lg text-xs font-black uppercase tracking-widest">{profileData.ageGroup}</span>
              )}
            </div>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs mt-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {user.role.toLowerCase().replace('_', ' ')} • {profileData.email}
            </p>
          </div>
          <div className="flex gap-4">
            {!isEditMode ? (
              <button 
                onClick={() => setIsEditMode(true)}
                className="px-8 py-3 bg-slate-100 text-slate-800 font-black rounded-2xl hover:bg-slate-200 transition uppercase text-xs tracking-[0.15em]"
              >
                Edit Profile
              </button>
            ) : (
              <button 
                onClick={saveProfile}
                className="px-8 py-3 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 transition uppercase text-xs tracking-[0.15em] shadow-xl shadow-emerald-600/20"
              >
                Save Changes
              </button>
            )}
            {user.role === UserRole.PLAYER && (
              <button 
                onClick={() => setIsUploading(true)}
                className="px-8 py-3 bg-black text-white font-black rounded-2xl hover:bg-yellow-400 hover:text-black transition shadow-2xl shadow-black/20 uppercase text-xs tracking-[0.15em]"
              >
                Add To Gallery
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Stats & Info */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-50">
            <h3 className="font-black text-slate-900 mb-8 flex items-center gap-3 uppercase tracking-widest text-sm">
              <div className="w-2 h-5 bg-yellow-400 rounded-full"></div>
              Career Profile
            </h3>
            <div className="space-y-6">
              {/* Profile Inputs (Edit Mode) */}
              {isEditMode && (
                <div className="space-y-4">
                  <div className="group">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 group-focus-within:text-yellow-500 transition-colors">Full Name</label>
                    <input 
                      type="text" 
                      value={profileData.fullName} 
                      onChange={e => setProfileData({...profileData, fullName: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-100 p-3 rounded-xl text-sm font-bold focus:ring-2 focus:ring-yellow-400 outline-none transition"
                    />
                  </div>
                </div>
              )}

              {[
                { label: 'Date of Birth', value: profileData.dob, type: 'date', field: 'dob' },
                { label: 'Age Group', value: profileData.ageGroup, type: 'select', field: 'ageGroup', options: ['U13', 'U15', 'U18', 'Senior'] },
                { label: 'Assigned Team', value: MOCK_TEAMS.find(t => t.id === profileData.teamId)?.name || 'Independent', type: 'select', field: 'teamId', options: MOCK_TEAMS.map(t => t.name) },
                { label: 'Position', value: profileData.position, type: 'text', field: 'position' },
                { label: 'Jersey #', value: profileData.jerseyNumber, type: 'text', field: 'jerseyNumber' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col py-3 border-b border-slate-50 last:border-0">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{item.label}</span>
                  {isEditMode ? (
                    item.type === 'select' ? (
                      <select 
                        value={item.field === 'teamId' ? profileData.teamId : (profileData as any)[item.field]} 
                        onChange={(e) => {
                          const val = item.field === 'teamId' ? MOCK_TEAMS.find(t => t.name === e.target.value)?.id || 'none' : e.target.value;
                          setProfileData({...profileData, [item.field]: val});
                        }}
                        className="bg-slate-50 p-2 rounded-lg text-sm font-black w-full border border-slate-100 outline-none focus:ring-2 focus:ring-yellow-400 transition"
                      >
                        {item.field === 'teamId' ? (
                          <>
                            {MOCK_TEAMS.map(team => <option key={team.id} value={team.name}>{team.name}</option>)}
                            <option value="Independent">Independent</option>
                          </>
                        ) : (
                          item.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)
                        )}
                      </select>
                    ) : (
                      <input 
                        type={item.type} 
                        value={(profileData as any)[item.field]} 
                        onChange={e => setProfileData({...profileData, [item.field]: e.target.value})}
                        className="bg-slate-50 p-2 rounded-lg text-sm font-black w-full border border-slate-100 outline-none focus:ring-2 focus:ring-yellow-400 transition"
                      />
                    )
                  ) : (
                    <span className="text-sm font-black text-emerald-950 uppercase tracking-tight">{item.value}</span>
                  )}
                </div>
              ))}

              <div className="grid grid-cols-2 gap-6 pt-4">
                {['height', 'weight'].map((field) => (
                  <div key={field} className="flex flex-col bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{field}</span>
                    {isEditMode ? (
                      <input 
                        type="text" 
                        value={(profileData as any)[field]} 
                        onChange={e => setProfileData({...profileData, [field]: e.target.value})}
                        className="bg-transparent text-sm font-black text-emerald-900 w-full outline-none"
                      />
                    ) : (
                      <span className="text-sm font-black text-emerald-900 uppercase">{(profileData as any)[field]}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black text-white p-8 rounded-[2rem] shadow-2xl border border-slate-900 relative overflow-hidden group/achieve">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover/achieve:bg-yellow-400/20 transition-all duration-500"></div>
            <h3 className="font-black text-white mb-8 flex items-center gap-3 uppercase tracking-widest text-sm relative z-10">
               <div className="w-2 h-5 bg-emerald-500 rounded-full"></div>
               Achievements
            </h3>
            <div className="space-y-4 relative z-10">
              {isEditMode ? (
                <textarea 
                  value={profileData.achievements?.join(', ')}
                  onChange={e => setProfileData({...profileData, achievements: e.target.value.split(',').map(s => s.trim())})}
                  className="w-full p-4 bg-slate-900 border border-slate-800 rounded-2xl text-xs font-bold text-slate-300 outline-none focus:ring-2 focus:ring-yellow-400 transition h-32"
                  placeholder="Enter achievements separated by commas..."
                />
              ) : (
                profileData.achievements?.map((ach, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-2xl group/item hover:border-emerald-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 group-hover/item:bg-yellow-400 group-hover/item:text-black transition-all">
                      🏆
                    </div>
                    <span className="text-[10px] font-black text-slate-100 uppercase tracking-[0.15em]">{ach}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right: Personal Gallery */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-50 min-h-[600px]">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="font-black text-slate-900 uppercase tracking-[0.2em] text-sm">Personal Gallery</h3>
                <div className="h-1.5 w-12 bg-yellow-400 mt-2 rounded-full"></div>
              </div>
              <button 
                onClick={() => setIsUploading(true)}
                className="text-emerald-600 font-black uppercase text-[10px] tracking-widest hover:text-emerald-700 transition flex items-center gap-2 group"
              >
                Upload Media <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
            
            {gallery.length === 0 ? (
              <div className="text-center py-24 border-2 border-dashed border-slate-100 rounded-[2rem] bg-slate-50/50">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-50">
                  <svg className="w-10 h-10 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.25em]">Your story begins here</p>
                <button onClick={() => setIsUploading(true)} className="mt-6 px-8 py-3 bg-black text-white font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-yellow-400 hover:text-black transition shadow-xl">Start Gallery</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map(item => (
                  <div key={item.id} className="group relative aspect-square rounded-[2rem] overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500">
                    {item.type === 'image' ? (
                      <img src={item.url} alt={item.caption} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                    ) : (
                      <video src={item.url} className="w-full h-full object-cover" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                      <p className="text-white text-sm font-black leading-tight uppercase tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.caption}</p>
                      <div className="flex items-center justify-between mt-4 border-t border-white/20 pt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        <span className="text-[10px] text-white/60 font-black uppercase tracking-widest">{item.timestamp}</span>
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                           <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
                        </div>
                      </div>
                    </div>
                    {item.type === 'video' && (
                      <div className="absolute top-6 right-6 w-10 h-10 bg-black/30 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10">
                        <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Upload Gallery Modal */}
      {isUploading && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
          <div className="bg-white rounded-[3rem] w-full max-w-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in zoom-in slide-in-from-bottom-12 duration-500">
            <div className="p-10 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Capture a Moment</h2>
              <button onClick={() => { setIsUploading(false); setPreviewUrl(null); }} className="w-12 h-12 bg-white flex items-center justify-center rounded-2xl shadow-sm hover:bg-slate-100 transition border border-slate-100">
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="p-12 space-y-8">
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="aspect-video bg-slate-50 border-4 border-dashed border-slate-200 rounded-[2.5rem] flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 hover:border-yellow-400 transition-all relative overflow-hidden group/upload"
              >
                {previewUrl ? (
                  uploadType === 'image' ? (
                    <img src={previewUrl} className="w-full h-full object-cover" />
                  ) : (
                    <video src={previewUrl} className="w-full h-full object-cover" />
                  )
                ) : (
                  <>
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-md mb-6 group-hover/upload:scale-110 group-hover/upload:rotate-3 transition-all">
                       <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                    </div>
                    <p className="text-sm font-black text-slate-900 uppercase tracking-[0.2em]">Select Photo or Video</p>
                    <p className="text-[10px] text-slate-400 mt-2 uppercase font-black tracking-widest opacity-60">High-res rugby action preferred</p>
                  </>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*,video/*" 
                  onChange={handleFileChange} 
                />
              </div>

              <div className="group">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 group-focus-within:text-yellow-500 transition-colors">Caption the moment</label>
                <textarea 
                  value={uploadCaption}
                  onChange={e => setUploadCaption(e.target.value)}
                  className="w-full p-6 bg-slate-50 border border-slate-100 rounded-[2rem] outline-none focus:ring-4 focus:ring-yellow-400/20 transition resize-none h-32 font-bold text-slate-700 text-sm"
                  placeholder="Share the energy of this play..."
                />
              </div>

              <div className="flex gap-6 pt-4">
                <button 
                  onClick={() => { setIsUploading(false); setPreviewUrl(null); }}
                  className="flex-1 px-8 py-5 border-2 border-slate-100 rounded-[2rem] font-black text-slate-600 hover:bg-slate-50 transition uppercase text-xs tracking-widest"
                >
                  Discard
                </button>
                <button 
                  onClick={handleUpload}
                  disabled={!previewUrl || !uploadCaption}
                  className="flex-1 px-8 py-5 bg-black text-white rounded-[2rem] font-black hover:bg-yellow-400 hover:text-black transition disabled:opacity-30 uppercase text-xs tracking-widest shadow-2xl shadow-black/20"
                >
                  Post to Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

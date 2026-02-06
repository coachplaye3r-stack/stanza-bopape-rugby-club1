
import React, { useState } from 'react';
import { User, ChatMessage } from '../types';

const Chat: React.FC<{ user: User }> = ({ user }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', senderId: '2', senderName: 'Coach Thabang', text: 'Training starts at 4 PM today sharp! Don\'t forget your water bottles.', timestamp: '14:20', groupId: 'team-chat' },
    { id: '2', senderId: '3', senderName: 'Sibusiso Khumalo', text: 'Roger that, coach!', timestamp: '14:25', groupId: 'team-chat' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, {
        id: Math.random().toString(),
        senderId: user.id,
        senderName: user.fullName,
        text: input,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        groupId: 'team-chat'
      }]);
      setInput('');
    }
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Chat Header */}
      <header className="p-4 bg-emerald-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center font-bold text-yellow-400">#</div>
          <div>
            <h3 className="font-bold">Team Chat: U18 Boys</h3>
            <p className="text-xs text-emerald-300">8 members online</p>
          </div>
        </div>
        <button className="p-2 hover:bg-emerald-800 rounded-lg transition">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
        </button>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map(msg => (
          <div key={msg.id} className={`flex flex-col ${msg.senderId === user.id ? 'items-end' : 'items-start'}`}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-slate-400">{msg.senderName}</span>
              <span className="text-[10px] text-slate-300">{msg.timestamp}</span>
            </div>
            <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
              msg.senderId === user.id 
              ? 'bg-emerald-900 text-white rounded-tr-none' 
              : 'bg-slate-100 text-slate-800 rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <footer className="p-4 border-t border-slate-100 flex gap-4">
        <button className="text-slate-400 hover:text-emerald-900 transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
        </button>
        <input 
          type="text" 
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..." 
          className="flex-1 bg-slate-50 rounded-full px-6 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button 
          onClick={handleSend}
          className="bg-yellow-400 text-emerald-950 px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition"
        >
          Send
        </button>
      </footer>
    </div>
  );
};

export default Chat;

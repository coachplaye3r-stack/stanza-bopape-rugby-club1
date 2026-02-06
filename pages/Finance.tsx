
import React, { useState, useEffect } from 'react';
import { User, Transaction } from '../types';
import { MOCK_TRANSACTIONS } from '../services/mockData';
import { geminiService } from '../services/geminiService';

const Finance: React.FC<{ user: User }> = ({ user }) => {
  const [transactions, setTransactions] = useState<Transaction[]>(MOCK_TRANSACTIONS);
  const [analysis, setAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTx, setNewTx] = useState<Partial<Transaction>>({ type: 'expense', date: new Date().toISOString().split('T')[0] });

  const runAnalysis = async () => {
    setIsAnalyzing(true);
    const result = await geminiService.analyzeFinances(transactions);
    setAnalysis(result);
    setIsAnalyzing(false);
  };

  const handleAddTransaction = () => {
    if (newTx.description && newTx.amount) {
      setTransactions([...transactions, {
        id: Math.random().toString(),
        description: newTx.description,
        amount: Number(newTx.amount),
        type: newTx.type as 'income' | 'expense',
        date: newTx.date || '',
        category: newTx.category || 'General'
      }]);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Finance & AI Bookkeeping</h1>
          <p className="text-slate-500">Track club income, expenses, and AI-generated insights.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={runAnalysis} 
            disabled={isAnalyzing}
            className="bg-emerald-900 text-white px-6 py-2 rounded-lg font-bold hover:bg-emerald-800 transition disabled:opacity-50"
          >
            {isAnalyzing ? 'Analyzing...' : 'Generate AI Report'}
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-400 text-emerald-950 px-6 py-2 rounded-lg font-bold hover:bg-yellow-300 transition"
          >
            Add Entry
          </button>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Balance</p>
          <p className="text-3xl font-bold text-emerald-700">R {transactions.reduce((acc, tx) => tx.type === 'income' ? acc + tx.amount : acc - tx.amount, 0).toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Monthly Income</p>
          <p className="text-3xl font-bold text-blue-600">R {transactions.filter(t => t.type === 'income').reduce((acc, tx) => acc + tx.amount, 0).toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Monthly Expenses</p>
          <p className="text-3xl font-bold text-red-500">R {transactions.filter(t => t.type === 'expense').reduce((acc, tx) => acc + tx.amount, 0).toLocaleString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Transaction Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold">Recent Transactions</h3>
            <button className="text-sm text-emerald-600 font-bold hover:underline">Export CSV</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-xs font-bold text-slate-400 uppercase">
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {transactions.map(tx => (
                  <tr key={tx.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-500">{tx.date}</td>
                    <td className="px-6 py-4 text-sm font-medium">{tx.description}</td>
                    <td className="px-6 py-4">
                      <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">{tx.category}</span>
                    </td>
                    <td className={`px-6 py-4 text-sm font-bold text-right ${tx.type === 'income' ? 'text-emerald-600' : 'text-red-500'}`}>
                      {tx.type === 'income' ? '+' : '-'} R {tx.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI Report Card */}
        <div className="bg-emerald-950 text-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 bg-emerald-900 border-b border-emerald-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              <h3 className="font-bold">AI Financial Insight</h3>
            </div>
            <span className="text-[10px] opacity-60 uppercase font-bold tracking-widest">Powered by Gemini</span>
          </div>
          <div className="p-6 space-y-6">
            {!analysis ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 border-4 border-yellow-400/20 border-t-yellow-400 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-emerald-200 text-sm">Click 'Generate AI Report' to see financial trends and forecasts.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold text-emerald-400 uppercase mb-2">Summary</p>
                  <p className="text-sm text-emerald-100 italic">"{analysis.summary}"</p>
                </div>
                
                <div className="space-y-3">
                  <p className="text-xs font-bold text-emerald-400 uppercase">Top Categories</p>
                  {analysis.topCategories.map((cat: any) => (
                    <div key={cat.name} className="flex justify-between items-center bg-emerald-900/50 p-3 rounded-lg border border-emerald-800">
                      <span className="text-sm">{cat.name}</span>
                      <span className="text-sm font-bold text-yellow-400">R {cat.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-400 text-emerald-950 p-4 rounded-xl">
                  <p className="text-xs font-black uppercase mb-1">AI Forecast</p>
                  <p className="text-sm font-medium">{analysis.forecast}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Entry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">New Entry</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Description</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                  onChange={e => setNewTx({...newTx, description: e.target.value})}
                  placeholder="e.g. Referee Fees"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Amount (R)</label>
                  <input 
                    type="number" 
                    className="w-full p-3 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                    onChange={e => setNewTx({...newTx, amount: Number(e.target.value)})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Type</label>
                  <select 
                    className="w-full p-3 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                    onChange={e => setNewTx({...newTx, type: e.target.value as any})}
                  >
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-3 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAddTransaction}
                  className="flex-1 px-6 py-3 bg-emerald-900 text-white rounded-xl font-bold hover:bg-emerald-800 transition"
                >
                  Save Entry
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Finance;

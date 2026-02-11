import React from 'react';
import { GeneratedReport, CheckoutItem } from '../types';
import {
   Lock, ArrowRight, Download, Shield, AlertTriangle, TrendingUp, Zap,
   Activity, Megaphone, Brain, HeartPulse, Users, Clock, BarChart3
} from 'lucide-react';
import {
   Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from 'recharts';

export interface MissionBriefProps {
   report: GeneratedReport;
   onUnlock: (item: CheckoutItem) => void;
   isUnlocked: boolean;
   onStartDeepScan: () => void;
}

const MissionBrief: React.FC<MissionBriefProps> = ({ report, onUnlock, isUnlocked, onStartDeepScan }) => {

   const handleUnlockClick = () => {
      onUnlock({
         id: 'quick_scan_unlock',
         title: 'Unlock Full Quick Scan Report',
         description: `Get the complete 4-page Quick Scan with pillar breakdown, cost analysis, and priority matrix for ${report.profileContext?.businessName || 'your business'}.`,
         price: 19,
         type: 'one_time'
      });
   };

   const handleDownloadPDF = () => {
      window.print();
   };

   const getPillarIcon = (name: string) => {
      switch (name) {
         case 'Engine': return Activity;
         case 'Fuel': return Zap;
         case 'Voice': return Megaphone;
         case 'Brain': return Brain;
         case 'Pulse': return HeartPulse;
         case 'Shield': return Shield;
         case 'Tribe': return Users;
         default: return Activity;
      }
   };

   const radarData = report.pillars.map(p => ({
      subject: p.name,
      A: p.score,
      fullMark: 100
   }));

   const sortedPillars = [...report.pillars].sort((a, b) => b.riskScore - a.riskScore);

   return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-sans text-white print:bg-white print:text-black">

         {/* Sticky Header */}
         <div className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center print:hidden">
            <div>
               <h1 className="text-lg font-bold text-white">Quick Scan Report</h1>
               <p className="text-xs text-slate-400">{report.profileContext?.businessName || 'Business Assessment'} • {report.date}</p>
            </div>
            <div className="flex gap-3">
               {isUnlocked && (
                  <button
                     onClick={handleDownloadPDF}
                     className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm font-bold text-white hover:bg-white/20 transition-all"
                  >
                     <Download className="w-4 h-4" /> Download PDF
                  </button>
               )}
            </div>
         </div>

         <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">

            {/* ============================================= */}
            {/* PAGE 1: FREE — Cover + Radar + Top 3 Leaks */}
            {/* ============================================= */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">

               {/* Cover Header */}
               <div className="p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-brand-500/20 to-purple-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                  <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl -ml-24 -mb-24"></div>

                  <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                     <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/20 border border-brand-500/30 rounded-full text-brand-300 text-xs font-bold uppercase tracking-widest">
                           <Activity className="w-3.5 h-3.5" /> Quick Scan Results
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black leading-tight">
                           Business Health<br />
                           <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">Snapshot</span>
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                           We scanned {report.pillars.length} profit pillars and identified <span className="text-white font-bold">{sortedPillars.filter(p => p.riskScore > 50).length} critical leaks</span> in your business operations.
                        </p>

                        <div className="grid grid-cols-3 gap-4 pt-4">
                           <div className="bg-white/5 backdrop-blur border border-white/10 p-4 rounded-xl">
                              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Time Leak</div>
                              <div className="text-2xl font-black text-white mt-1">{report.indices?.timeLeak || 0}<span className="text-xs font-normal text-slate-500">/100</span></div>
                           </div>
                           <div className="bg-white/5 backdrop-blur border border-white/10 p-4 rounded-xl">
                              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Cash Leak</div>
                              <div className="text-2xl font-black text-white mt-1">{report.indices?.cashLeak || 0}<span className="text-xs font-normal text-slate-500">/100</span></div>
                           </div>
                           <div className="bg-white/5 backdrop-blur border border-white/10 p-4 rounded-xl">
                              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Risk Index</div>
                              <div className="text-2xl font-black text-white mt-1">{report.indices?.riskExposure || 0}<span className="text-xs font-normal text-slate-500">/100</span></div>
                           </div>
                        </div>
                     </div>

                     {/* Radar */}
                     <div className="w-72 h-72 relative flex-shrink-0">
                        <ResponsiveContainer width="100%" height="100%">
                           <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                              <PolarGrid stroke="#334155" />
                              <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 'bold' }} />
                              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                              <Radar name="Score" dataKey="A" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.25} />
                           </RadarChart>
                        </ResponsiveContainer>
                     </div>
                  </div>
               </div>

               {/* Top 3 Critical Leaks */}
               <div className="p-8 md:px-12 border-t border-white/10 bg-slate-900/50">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                     <AlertTriangle className="w-4 h-4 text-red-400" /> Top 3 Critical Leaks
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {sortedPillars.slice(0, 3).map((pillar, i) => {
                        const Icon = getPillarIcon(pillar.name);
                        return (
                           <div key={pillar.name} className={`bg-white/5 backdrop-blur border rounded-2xl p-6 transition-all hover:bg-white/8 ${pillar.riskScore > 60 ? 'border-red-500/30' : 'border-white/10'}`}>
                              <div className="flex items-center gap-3 mb-4">
                                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg ${pillar.riskScore > 60 ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}`}>
                                    {pillar.score}
                                 </div>
                                 <div>
                                    <p className="font-bold text-white">{pillar.name}</p>
                                    <p className="text-[10px] font-bold uppercase text-slate-400">{pillar.band}</p>
                                 </div>
                              </div>
                              <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                                 {pillar.quickScanAnalysis?.insight || pillar.hiddenCost}
                              </p>
                              <div className="mt-4 flex items-center gap-2 text-xs text-red-400 font-medium">
                                 <TrendingUp className="w-3.5 h-3.5" />
                                 {pillar.profitConsequence?.[0] || 'Directly impacts margin'}
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>

            {/* ============================================= */}
            {/* PAGES 2-4: LOCKED / UNLOCKED */}
            {/* ============================================= */}

            {!isUnlocked ? (
               /* --- LOCKED OVERLAY --- */
               <div className="relative">
                  {/* Blurred Preview */}
                  <div className="opacity-30 blur-sm pointer-events-none select-none space-y-8">
                     {/* Page 2 preview: All pillars */}
                     <div className="bg-white/5 rounded-3xl border border-white/10 p-8">
                        <h3 className="text-xl font-bold text-white mb-6">All {report.pillars.length} Pillar Breakdown</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {report.pillars.map(p => (
                              <div key={p.name} className="bg-white/5 p-4 rounded-xl border border-white/10">
                                 <div className="flex justify-between">
                                    <span className="font-bold">{p.name}</span>
                                    <span className="font-bold">{p.score}/100</span>
                                 </div>
                                 <div className="mt-2 w-full bg-white/10 h-2 rounded-full">
                                    <div className="bg-brand-500 h-2 rounded-full" style={{ width: `${p.score}%` }}></div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Page 3 preview: Cost breakdown */}
                     <div className="bg-white/5 rounded-3xl border border-white/10 p-8">
                        <h3 className="text-xl font-bold text-white mb-4">Estimated Leak Cost Analysis</h3>
                        <div className="h-48 bg-white/5 rounded-xl"></div>
                     </div>

                     {/* Page 4 preview: Priority matrix */}
                     <div className="bg-white/5 rounded-3xl border border-white/10 p-8">
                        <h3 className="text-xl font-bold text-white mb-4">7-Day Priority Action Matrix</h3>
                        <div className="h-48 bg-white/5 rounded-xl"></div>
                     </div>
                  </div>

                  {/* Lock Overlay CTA */}
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                     <div className="bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center max-w-lg shadow-2xl shadow-black/50">
                        <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-500/30">
                           <Lock className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-3">Unlock Full Quick Scan</h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                           Get the complete pillar breakdown, cost analysis, and 7-day priority action matrix for your business.
                        </p>
                        <ul className="text-left space-y-3 mb-8 text-sm text-slate-300">
                           <li className="flex items-center gap-3">
                              <BarChart3 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                              All {report.pillars.length} pillar scores with detailed analysis
                           </li>
                           <li className="flex items-center gap-3">
                              <TrendingUp className="w-4 h-4 text-brand-400 flex-shrink-0" />
                              Estimated revenue leak per pillar
                           </li>
                           <li className="flex items-center gap-3">
                              <Clock className="w-4 h-4 text-brand-400 flex-shrink-0" />
                              7-day priority action matrix
                           </li>
                        </ul>
                        <button
                           onClick={handleUnlockClick}
                           className="w-full bg-gradient-to-r from-brand-500 to-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-brand-400 hover:to-brand-500 transition-all shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2 group"
                        >
                           Unlock Now <span className="text-brand-200 font-normal">— $19</span>
                           <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-[11px] text-slate-500 mt-4">One-time payment • Instant access • PDF download included</p>
                     </div>
                  </div>
               </div>
            ) : (
               /* --- UNLOCKED PAGES 2-4 --- */
               <div className="space-y-8 animate-fade-in">

                  {/* PAGE 2: All Pillar Breakdown */}
                  <div className="bg-white/5 backdrop-blur rounded-3xl border border-white/10 p-8 md:p-10">
                     <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-brand-400" /> Complete Pillar Breakdown
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {report.pillars.map(pillar => {
                           const Icon = getPillarIcon(pillar.name);
                           return (
                              <div key={pillar.name} className={`bg-white/5 rounded-2xl p-6 border transition-colors ${pillar.riskScore > 60 ? 'border-red-500/30 bg-red-500/5' : pillar.riskScore > 40 ? 'border-amber-500/20' : 'border-white/10'}`}>
                                 <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                       <Icon className={`w-5 h-5 ${pillar.riskScore > 60 ? 'text-red-400' : pillar.riskScore > 40 ? 'text-amber-400' : 'text-green-400'}`} />
                                       <span className="font-bold text-white text-lg">{pillar.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                       <span className={`text-2xl font-black ${pillar.riskScore > 60 ? 'text-red-400' : pillar.riskScore > 40 ? 'text-amber-400' : 'text-green-400'}`}>
                                          {pillar.score}
                                       </span>
                                       <span className="text-xs text-slate-500">/100</span>
                                    </div>
                                 </div>

                                 {/* Progress bar */}
                                 <div className="w-full bg-white/10 h-2 rounded-full mb-4">
                                    <div
                                       className={`h-2 rounded-full transition-all duration-1000 ${pillar.riskScore > 60 ? 'bg-red-500' : pillar.riskScore > 40 ? 'bg-amber-500' : 'bg-green-500'}`}
                                       style={{ width: `${pillar.score}%` }}
                                    ></div>
                                 </div>

                                 <p className="text-sm text-slate-300 leading-relaxed mb-3">
                                    {pillar.quickScanAnalysis?.insight || pillar.hiddenCost}
                                 </p>

                                 <div className="flex items-center gap-2 text-xs font-bold">
                                    <span className={`px-2 py-0.5 rounded ${pillar.riskScore > 60 ? 'bg-red-500/20 text-red-300' : pillar.riskScore > 40 ? 'bg-amber-500/20 text-amber-300' : 'bg-green-500/20 text-green-300'}`}>
                                       {pillar.band}
                                    </span>
                                    <span className="text-slate-500">Risk: {pillar.riskScore}/100</span>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </div>

                  {/* PAGE 3: Cost Breakdown */}
                  <div className="bg-white/5 backdrop-blur rounded-3xl border border-white/10 p-8 md:p-10">
                     <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-red-400" /> Leak Cost Analysis
                     </h3>

                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/20 rounded-2xl p-6 text-center">
                           <div className="text-3xl font-black text-red-400">{report.indices?.timeLeak || 0}</div>
                           <div className="text-xs font-bold text-red-300 uppercase tracking-wider mt-1">Time Leak Index</div>
                           <p className="text-[11px] text-slate-400 mt-2">Hours lost to inefficiency per week</p>
                        </div>
                        <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 rounded-2xl p-6 text-center">
                           <div className="text-3xl font-black text-amber-400">{report.indices?.cashLeak || 0}</div>
                           <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mt-1">Cash Leak Index</div>
                           <p className="text-[11px] text-slate-400 mt-2">Revenue escaping through weak systems</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/20 rounded-2xl p-6 text-center">
                           <div className="text-3xl font-black text-purple-400">{report.indices?.riskExposure || 0}</div>
                           <div className="text-xs font-bold text-purple-300 uppercase tracking-wider mt-1">Risk Exposure</div>
                           <p className="text-[11px] text-slate-400 mt-2">Vulnerability to market disruption</p>
                        </div>
                     </div>

                     {/* Per-pillar risk bars */}
                     <div className="space-y-4">
                        {sortedPillars.map(pillar => (
                           <div key={pillar.name} className="flex items-center gap-4">
                              <div className="w-24 text-sm font-bold text-slate-300 text-right">{pillar.name}</div>
                              <div className="flex-1 bg-white/10 h-3 rounded-full overflow-hidden">
                                 <div
                                    className={`h-3 rounded-full transition-all duration-1000 ${pillar.riskScore > 60 ? 'bg-gradient-to-r from-red-600 to-red-400' : pillar.riskScore > 40 ? 'bg-gradient-to-r from-amber-600 to-amber-400' : 'bg-gradient-to-r from-green-600 to-green-400'}`}
                                    style={{ width: `${pillar.riskScore}%` }}
                                 ></div>
                              </div>
                              <div className="w-12 text-right text-sm font-bold text-slate-400">{pillar.riskScore}%</div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* PAGE 4: 7-Day Priority Matrix */}
                  <div className="bg-white/5 backdrop-blur rounded-3xl border border-white/10 p-8 md:p-10">
                     <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                        <Clock className="w-5 h-5 text-brand-400" /> 7-Day Priority Action Matrix
                     </h3>
                     <div className="space-y-4">
                        {sortedPillars.filter(p => p.riskScore > 30).map((pillar, idx) => (
                           <div key={pillar.name} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                              <div className="flex items-center gap-3 mb-4">
                                 <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm ${pillar.riskScore > 60 ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}`}>
                                    {idx + 1}
                                 </div>
                                 <span className="font-bold text-white">{pillar.name}</span>
                                 <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${pillar.riskScore > 60 ? 'bg-red-500/20 text-red-300' : 'bg-amber-500/20 text-amber-300'}`}>
                                    {pillar.band}
                                 </span>
                              </div>
                              <div className="space-y-3 ml-11">
                                 {pillar.actions.filter(a => a.type === 'today' || a.type === 'week').slice(0, 2).map((act, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                       <Zap className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                                       <div>
                                          <p className="text-sm font-medium text-slate-200">{act.text}</p>
                                          <p className="text-xs text-slate-500 mt-0.5">{act.owner} • {act.metric}</p>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Deep Scan CTA */}
                  <div className="bg-gradient-to-r from-brand-600/20 via-purple-600/20 to-brand-600/20 rounded-3xl border border-brand-500/30 p-10 text-center space-y-6">
                     <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/20 border border-brand-500/30 rounded-full text-brand-300 text-xs font-bold uppercase tracking-widest">
                        Ready for the next level?
                     </div>
                     <h3 className="text-3xl font-black text-white">Go Deeper with the Full Deep Scan</h3>
                     <p className="text-slate-300 max-w-xl mx-auto leading-relaxed">
                        Get a complete chapter-by-chapter breakdown of each pillar with theory, diagnosis, psychology insights, financial modeling, and a 90-day execution protocol.
                     </p>
                     <button
                        onClick={onStartDeepScan}
                        className="bg-gradient-to-r from-brand-500 to-purple-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-brand-400 hover:to-purple-400 transition-all shadow-lg shadow-brand-500/30 inline-flex items-center gap-3 group"
                     >
                        Start Deep Scan <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                     </button>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default MissionBrief;

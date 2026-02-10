import React, { useState } from 'react';
import { GeneratedReport, DeepScanChapter, CheckoutItem } from '../types';
import {
    Brain, Shield, Activity, Zap, Megaphone, HeartPulse, Users,
    Lock, Download, ArrowLeft, ChevronDown, ChevronUp, Sparkles, Eye, Crosshair
} from 'lucide-react';

interface DeepScanResultProps {
    report: GeneratedReport;
    deepScanChapters: Record<string, DeepScanChapter>;
    deepScanExecSummary: string;
    isUnlocked: boolean;
    onUnlock: (item: CheckoutItem) => void;
    onBack: () => void;
}

const PILLAR_COLORS: Record<string, string> = {
    Operations: 'from-blue-500 to-cyan-500',
    Money: 'from-emerald-500 to-green-400',
    Market: 'from-violet-500 to-purple-400',
    Leadership: 'from-amber-500 to-yellow-400',
    Innovation: 'from-pink-500 to-rose-400',
    Risk: 'from-red-500 to-orange-400',
    People: 'from-teal-500 to-cyan-400',
};

const getPillarIcon = (name: string) => {
    switch (name.toLowerCase()) {
        case 'operations': case 'engine': return Activity;
        case 'money': case 'fuel': return Zap;
        case 'market': case 'voice': return Megaphone;
        case 'leadership': case 'brain': return Brain;
        case 'innovation': case 'innovation & creativity': case 'pulse': return HeartPulse;
        case 'risk': case 'shield': return Shield;
        case 'people': case 'tribe': return Users;
        default: return Activity;
    }
};

const PILLAR_ALIASES: Record<string, string> = {
    'Engine': 'Operations',
    'Fuel': 'Money',
    'Voice': 'Market',
    'Brain': 'Leadership',
    'Pulse': 'Innovation',
    'Innovation & Creativity': 'Innovation',
    'Shield': 'Risk',
    'Tribe': 'People',
};

const DeepScanResult: React.FC<DeepScanResultProps> = ({ report, deepScanChapters, deepScanExecSummary, isUnlocked, onUnlock, onBack }) => {
    const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

    const sortedPillars = [...report.pillars].sort((a, b) => a.score - b.score);

    const handleUnlock = () => {
        onUnlock({
            id: 'deep_scan_unlock',
            title: 'Deep Scan Report — Full Access',
            price: 30,
            type: 'one_time',
            description: 'Unlock all 7 pillar deep-dive chapters with AI-powered personalized analysis, prescriptions, and financial impact estimates.'
        });
    };

    const handleDownloadPDF = () => {
        window.print();
    };

    // First pillar (weakest) is the free preview
    const previewPillar = sortedPillars[0];
    const lockedPillars = sortedPillars.slice(1);

    const renderChapter = (pillarName: string, chapter: DeepScanChapter, index: number) => {
        const mappedName = PILLAR_ALIASES[pillarName] || pillarName;
        const Icon = getPillarIcon(mappedName);
        const colors = PILLAR_COLORS[mappedName] || 'from-slate-500 to-slate-400';
        const pillarData = report.pillars.find(p => p.name === pillarName);
        const isExpanded = expandedPillar === pillarName;

        return (
            <div key={pillarName} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20">
                {/* Chapter Header */}
                <button
                    onClick={() => setExpandedPillar(isExpanded ? null : pillarName)}
                    className="w-full flex items-center justify-between p-6 text-left group"
                >
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${colors} rounded-xl flex items-center justify-center shadow-lg`}>
                            <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <div className="flex items-center gap-3">
                                <h3 className="text-lg font-bold text-white">{pillarName}</h3>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${(pillarData?.score || 0) < 50 ? 'bg-red-500/20 text-red-300'
                                    : (pillarData?.score || 0) < 70 ? 'bg-amber-500/20 text-amber-300'
                                        : 'bg-green-500/20 text-green-300'
                                    }`}>
                                    {pillarData?.score}/100
                                </span>
                            </div>
                            <p className="text-xs text-slate-400 mt-0.5">{pillarData?.band || 'Analysis'}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {index === 0 && (
                            <span className="text-[9px] font-bold bg-brand-500/20 text-brand-300 px-2 py-1 rounded-full">FREE PREVIEW</span>
                        )}
                        {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </div>
                </button>

                {/* Chapter Content */}
                {isExpanded && (
                    <div className="px-6 pb-6 space-y-6 border-t border-white/5 pt-6">
                        {/* Theory */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Eye className="w-4 h-4 text-blue-400" />
                                <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider">Consultant Lens</h4>
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">{chapter.theory}</p>
                        </div>

                        {/* Diagnosis */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-amber-400" />
                                <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Diagnosis</h4>
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">{chapter.diagnosis}</p>
                        </div>

                        {/* Psychology */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Brain className="w-4 h-4 text-purple-400" />
                                <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider">Leadership Pattern</h4>
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">{chapter.psychology}</p>
                        </div>

                        {/* Financials */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-emerald-400" />
                                <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Financial Impact</h4>
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">{chapter.financials}</p>
                        </div>

                        {/* Prescription */}
                        {chapter.prescription && (
                            <div className="space-y-2 bg-brand-500/5 border border-brand-500/20 rounded-xl p-5">
                                <div className="flex items-center gap-2">
                                    <Crosshair className="w-4 h-4 text-brand-400" />
                                    <h4 className="text-sm font-bold text-brand-400 uppercase tracking-wider">30-Day Remediation Prescription</h4>
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">{chapter.prescription}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-sans text-white">

            {/* Header */}
            <div className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-xl border-b border-white/10 px-6 py-4">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div>
                            <h1 className="text-lg font-bold text-white">Deep Scan Report</h1>
                            <p className="text-xs text-slate-400">{report.profileContext?.businessName || 'Business'} • Powered by Gemini 1.5 Pro</p>
                        </div>
                    </div>
                    {isUnlocked && (
                        <button
                            onClick={handleDownloadPDF}
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold text-white transition-all"
                        >
                            <Download className="w-4 h-4" /> Download PDF
                        </button>
                    )}
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">

                {/* Report Cover */}
                <div className="bg-gradient-to-br from-brand-500/20 to-purple-500/20 backdrop-blur border border-brand-500/30 rounded-3xl p-8 md:p-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-brand-500/30">
                        <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white">AI-Powered Deep Scan</h2>
                    <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
                        This report was generated by Gemini 1.5 Pro, personalized to your business profile,
                        diagnostic scores, and your deep scan assessment answers.
                    </p>
                    <div className="flex items-center justify-center gap-4 pt-2">
                        <span className="text-[10px] font-bold bg-white/10 text-white/70 px-3 py-1 rounded-full">
                            {report.pillars.length} Pillars Analyzed
                        </span>
                        <span className="text-[10px] font-bold bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full">
                            {report.profileContext?.industry || 'General'} • {report.profileContext?.subIndustry || ''}
                        </span>
                    </div>
                </div>

                {/* AI Deep Scan Executive Summary */}
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8 space-y-3">
                    <h3 className="text-sm font-bold text-brand-400 uppercase tracking-widest">Deep Scan Executive Summary</h3>
                    <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{deepScanExecSummary || report.executiveSummary}</p>
                </div>

                {/* Free Preview — First (Weakest) Pillar */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-brand-400" />
                        <h3 className="text-sm font-bold text-brand-400 uppercase tracking-widest">Free Preview Chapter</h3>
                    </div>
                    {previewPillar && deepScanChapters[previewPillar.name] && (
                        renderChapter(previewPillar.name, deepScanChapters[previewPillar.name], 0)
                    )}
                </div>

                {/* Locked Content */}
                {!isUnlocked ? (
                    <div className="relative">
                        {/* Blurred Previews */}
                        <div className="space-y-4 opacity-40 blur-[2px] pointer-events-none select-none">
                            {lockedPillars.slice(0, 3).map((p, i) => {
                                const mappedName = PILLAR_ALIASES[p.name] || p.name;
                                const Icon = getPillarIcon(mappedName);
                                const colors = PILLAR_COLORS[mappedName] || 'from-slate-500 to-slate-400';
                                return (
                                    <div key={p.name} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 bg-gradient-to-br ${colors} rounded-xl flex items-center justify-center`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white">{p.name}</h3>
                                                <p className="text-xs text-slate-400">{p.band} • {p.score}/100</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Paywall Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent rounded-3xl">
                            <div className="text-center space-y-6 max-w-md px-6">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto border border-white/20">
                                    <Lock className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white mb-2">Unlock Full Deep Scan</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Get all {lockedPillars.length} remaining pillar chapters with AI-powered diagnosis,
                                        financial impact estimates, and 30-day remediation prescriptions.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <button
                                        onClick={handleUnlock}
                                        className="w-full py-4 bg-gradient-to-r from-brand-500 to-purple-500 text-white font-bold rounded-xl hover:from-brand-400 hover:to-purple-400 transition-all shadow-lg shadow-brand-500/30 text-lg"
                                    >
                                        Unlock Now — $30
                                    </button>
                                    <div className="flex items-center justify-center gap-4 text-[10px] text-slate-500">
                                        <span>✓ All 7 chapters</span>
                                        <span>✓ Financial analysis</span>
                                        <span>✓ PDF download</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Unlocked Content — All Remaining Pillars */
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <h3 className="text-sm font-bold text-purple-400 uppercase tracking-widest">Full Deep Dive Chapters</h3>
                        </div>
                        {lockedPillars.map((p, i) => {
                            const chapter = deepScanChapters[p.name];
                            if (!chapter) return null;
                            return renderChapter(p.name, chapter, i + 1);
                        })}
                    </div>
                )}

                {/* Bottom CTA */}
                {isUnlocked && (
                    <div className="bg-gradient-to-br from-brand-500/10 to-purple-500/10 border border-brand-500/20 rounded-2xl p-8 text-center space-y-4">
                        <h3 className="text-xl font-bold text-white">Report Complete</h3>
                        <p className="text-slate-400 text-sm max-w-lg mx-auto">
                            Your Deep Scan report has been fully generated. Download the PDF to share with your team,
                            or return to your dashboard to start implementing the prescriptions.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <button
                                onClick={handleDownloadPDF}
                                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm text-white transition-all"
                            >
                                <Download className="w-4 h-4" /> Download PDF
                            </button>
                            <button
                                onClick={onBack}
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-500 to-purple-500 rounded-xl font-bold text-sm text-white hover:from-brand-400 hover:to-purple-400 transition-all"
                            >
                                Back to Dashboard
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeepScanResult;

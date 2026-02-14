import React, { useState } from 'react';
import { GeneratedReport, DeepScanChapter, CheckoutItem } from '../types';
import {
    Brain, Shield, Activity, Zap, Megaphone, HeartPulse, Users,
    Lock, Download, ArrowLeft, ChevronDown, ChevronUp, Sparkles, Eye, Crosshair
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

const getChapterByPillarName = (
    chapters: Record<string, DeepScanChapter>,
    pillarName: string
): DeepScanChapter | undefined => {
    if (!chapters || !pillarName) return undefined;
    if (chapters[pillarName]) return chapters[pillarName];

    const aliased = PILLAR_ALIASES[pillarName] || '';
    if (aliased && chapters[aliased]) return chapters[aliased];

    const reverseAlias = Object.entries(PILLAR_ALIASES).find(([, canonical]) => canonical === pillarName)?.[0];
    if (reverseAlias && chapters[reverseAlias]) return chapters[reverseAlias];

    return undefined;
};

const withChapterFallback = (
    chapter: DeepScanChapter | undefined,
    pillarName: string,
    fallbackInsight: string,
    fallbackCost: string,
    fallbackImpact: string
): DeepScanChapter => {
    return {
        theory: chapter?.theory?.trim() || fallbackInsight || `${pillarName} is a critical control pillar in your current operating model.`,
        diagnosis: chapter?.diagnosis?.trim() || fallbackCost || `Root-cause detail was limited in the deep response for ${pillarName}; use the quick-scan leak signal as the current diagnosis anchor.`,
        psychology: chapter?.psychology?.trim() || `Execution behavior and ownership discipline in ${pillarName} are currently shaping results more than isolated tactical fixes.`,
        financials: chapter?.financials?.trim() || fallbackImpact || `Financial impact is likely material where ${pillarName} score is weak. Track weekly trend and recovery delta.`,
        prescription: chapter?.prescription?.trim() || `Run a 30-day control sprint for ${pillarName} with clear owner, cadence, KPI, and closure evidence.`
    };
};

const DeepScanResult: React.FC<DeepScanResultProps> = ({ report, deepScanChapters, deepScanExecSummary, isUnlocked, onUnlock, onBack }) => {

    const reportRef = React.useRef<HTMLDivElement>(null);
    const sortedPillars = [...report.pillars].sort((a, b) => a.score - b.score);
    const emptyChapter: DeepScanChapter = {
        theory: '',
        diagnosis: '',
        psychology: '',
        financials: '',
        prescription: ''
    };

    const handleUnlock = () => {
        onUnlock({
            id: 'deep_scan_unlock',
            title: 'Deep Scan Report — Full Access',
            price: 30,
            type: 'one_time',
            description: 'Unlock all 7 pillar deep-dive chapters with AI-powered personalized analysis, prescriptions, and financial impact estimates.'
        });
    };

    const handleDownloadPDF = async () => {
        if (!reportRef.current) return;

        try {
            const canvas = await html2canvas(reportRef.current, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#020617', // slate-950
                logging: false,
                windowWidth: 1200 // Force desktop width
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            // If height exceeds A4, we might need multiple pages, but for now simple long-scroll capture
            // refined for single-page summaries or multi-page if needed. 
            // Deep Scan is long, so let's just do a simple fit-width for now.

            if (imgHeight > 297) {
                // mult-page logic or just scale down? 
                // For simplicity in this v1 fix, we'll let it span pages or just do one long page if viewer supports it, 
                // but jsPDF 'a4' is strict. Let's just output as one long canvas on one page for now 
                // OR break it up. The previous fix was simple image. Let's stick to the MissionBrief simple approach first.
                // Actually, MissionBrief logic was single page. Deep Scan is very long.
                // We will use a custom format to fit the whole image height.
                const deepPdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'mm',
                    format: [imgWidth, imgHeight]
                });
                deepPdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                deepPdf.save(`${report.profileContext?.businessName || 'Business'}_DeepScan_Report.pdf`);
            } else {
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save(`${report.profileContext?.businessName || 'Business'}_DeepScan_Report.pdf`);
            }
        } catch (err) {
            console.error("PDF Gen Error:", err);
            alert("Failed to generate PDF. Retrying...");
        }
    };

    // First pillar (weakest) is the free preview
    const previewPillar = sortedPillars[0];
    const lockedPillars = sortedPillars.slice(1);

    const renderChapter = (pillarName: string, chapter: DeepScanChapter, index: number) => {
        const mappedName = PILLAR_ALIASES[pillarName] || pillarName;
        const Icon = getPillarIcon(mappedName);
        const colors = PILLAR_COLORS[mappedName] || 'from-slate-500 to-slate-400';
        const pillarData = report.pillars.find(p => p.name === pillarName);
        const safeChapter = withChapterFallback(
            chapter,
            pillarName,
            pillarData?.quickScanAnalysis?.insight || '',
            pillarData?.hiddenCost || '',
            pillarData?.profitConsequence?.[0] || ''
        );

        // Define color styles based on score for badges
        const scoreColor = (pillarData?.score || 0) < 50 ? 'bg-red-500 text-red-100'
            : (pillarData?.score || 0) < 70 ? 'bg-amber-500 text-amber-100'
                : 'bg-green-500 text-green-100';

        return (
            <div key={pillarName} className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:border-white/20 mb-8 shadow-2xl shadow-black/20">
                {/* Chapter Header - Always Visible */}
                <div className="relative p-8 overflow-hidden">
                    {/* Background Splash */}
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${colors} opacity-10 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none`}></div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                        <div className="flex items-center gap-6">
                            <div className={`w-16 h-16 bg-gradient-to-br ${colors} rounded-2xl flex items-center justify-center shadow-lg shadow-black/20 transform rotate-3`}>
                                <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                {index === 0 && (
                                    <span className="text-[10px] font-bold bg-white/10 text-white/80 px-3 py-1 rounded-full border border-white/5 mb-2 inline-block">
                                        FREE PREVIEW
                                    </span>
                                )}
                                <h3 className="text-3xl font-black text-white tracking-tight">{pillarName}</h3>
                                <p className="text-sm text-slate-400 font-medium tracking-wide uppercase mt-1 opacity-80">{pillarData?.band || 'Analysis'}</p>
                            </div>
                        </div>

                        {/* Score Display */}
                        <div className="flex items-center gap-4 bg-black/20 rounded-2xl p-4 border border-white/5 backdrop-blur-md">
                            <div className="text-right">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pillar Score</div>
                                <div className="text-3xl font-black text-white leading-none">{pillarData?.score}<span className="text-lg text-slate-500">/100</span></div>
                            </div>
                            <div className={`w-2 h-12 rounded-full ${scoreColor.split(' ')[0]}`}></div>
                        </div>
                    </div>
                </div>

                {/* Chapter Content - Always Visible */}
                <div className="px-8 pb-8 space-y-8">

                    {/* Executive Theory */}
                    <div className="prose prose-invert max-w-none">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <Eye className="w-5 h-5 text-blue-400" />
                            </div>
                            <h4 className="text-lg font-bold text-blue-100">Consultant Lens</h4>
                        </div>
                        <p className="text-lg text-slate-300 leading-relaxed font-light">{safeChapter.theory}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Diagnosis */}
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-amber-500/10 rounded-lg">
                                    <Activity className="w-5 h-5 text-amber-400" />
                                </div>
                                <h4 className="text-base font-bold text-amber-100">Diagnosis</h4>
                            </div>
                            <p className="text-slate-400 leading-relaxed text-sm">{safeChapter.diagnosis}</p>
                        </div>

                        {/* Psychology */}
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-purple-500/10 rounded-lg">
                                    <Brain className="w-5 h-5 text-purple-400" />
                                </div>
                                <h4 className="text-base font-bold text-purple-100">Leadership Pattern</h4>
                            </div>
                            <p className="text-slate-400 leading-relaxed text-sm">{safeChapter.psychology}</p>
                        </div>
                    </div>

                    {/* Financials */}
                    <div className="bg-emerald-500/5 rounded-2xl p-6 border border-emerald-500/10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-emerald-500/10 rounded-lg">
                                <Zap className="w-5 h-5 text-emerald-400" />
                            </div>
                            <h4 className="text-base font-bold text-emerald-100">Financial Impact</h4>
                        </div>
                        <p className="text-emerald-100/80 leading-relaxed font-medium">{safeChapter.financials}</p>
                    </div>

                    {/* Prescription */}
                    {safeChapter.prescription && (
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-900 border border-brand-500/30 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                                    <div className="p-2 bg-brand-500/20 rounded-lg">
                                        <Crosshair className="w-6 h-6 text-brand-400" />
                                    </div>
                                    <h4 className="text-xl font-bold text-brand-100">30-Day Remediation Plan</h4>
                                </div>
                                <div className="text-slate-300 leading-relaxed whitespace-pre-line space-y-4 font-mono text-sm">
                                    {safeChapter.prescription}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div ref={reportRef} className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-sans text-white">

            {/* Header */}
            <div className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-xl border-b border-white/10 px-6 py-4">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div>
                            <h1 className="text-lg font-bold text-white">Deep Scan Report</h1>
                            <p className="text-xs text-slate-400">{report.profileContext?.businessName || 'Business'} • Powered by OpenAI</p>
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
                        This report was generated by OpenAI, personalized to your business profile,
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
                    {previewPillar && (
                        renderChapter(previewPillar.name, getChapterByPillarName(deepScanChapters, previewPillar.name) || emptyChapter, 0)
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
                            const chapter = getChapterByPillarName(deepScanChapters, p.name);
                            return renderChapter(p.name, chapter || emptyChapter, i + 1);
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

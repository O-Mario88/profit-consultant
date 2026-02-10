import React, { useState, useMemo } from 'react';
import { GeneratedReport, DeepScanChapter } from '../types';
import { generateDeepScanReport, DeepScanAssessmentAnswer } from '../services/gemini';
import {
    Brain, Shield, Activity, Zap, Megaphone, HeartPulse, Users,
    ArrowRight, ArrowLeft, Loader2, CheckCircle2, AlertTriangle
} from 'lucide-react';

interface DeepScanAssessmentProps {
    report: GeneratedReport;
    onComplete: (deepScanChapters: Record<string, DeepScanChapter>, executiveSummary: string) => void;
    onBack: () => void;
}

interface DeepQuestion {
    id: string;
    pillar: string;
    question: string;
    placeholder: string;
}

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

const DEEP_QUESTIONS_BANK: Record<string, DeepQuestion[]> = {
    Operations: [
        { id: 'ops_1', pillar: 'Operations', question: 'How do you currently track and measure the efficiency of your core operations?', placeholder: 'e.g. We use a spreadsheet to track daily output, but there\'s no real-time dashboard...' },
        { id: 'ops_2', pillar: 'Operations', question: 'When something goes wrong in production or delivery, what is your typical response process?', placeholder: 'e.g. Usually the manager handles it directly, there\'s no formal escalation path...' },
        { id: 'ops_3', pillar: 'Operations', question: 'What is the biggest bottleneck that slows down your daily operations?', placeholder: 'e.g. Waiting for approvals, equipment downtime, manual data entry...' },
    ],
    Money: [
        { id: 'money_1', pillar: 'Money', question: 'How quickly can you tell if a specific product, service, or client is profitable?', placeholder: 'e.g. We know overall margins, but can\'t easily see profit per product line...' },
        { id: 'money_2', pillar: 'Money', question: 'What is your current cash collection cycle, and do clients regularly pay late?', placeholder: 'e.g. Net 30 terms, but most pay in 45-60 days...' },
        { id: 'money_3', pillar: 'Money', question: 'What costs have surprised you in the last 6 months that you didn\'t see coming?', placeholder: 'e.g. Maintenance costs doubled, supplier price increases, hidden logistics fees...' },
    ],
    Market: [
        { id: 'mkt_1', pillar: 'Market', question: 'What percentage of your revenue comes from repeat customers vs. new ones?', placeholder: 'e.g. Roughly 40% repeat, 60% new, but we don\'t track it precisely...' },
        { id: 'mkt_2', pillar: 'Market', question: 'How do you currently differentiate yourself from competitors?', placeholder: 'e.g. We compete mainly on price, our quality is better but customers don\'t always see it...' },
        { id: 'mkt_3', pillar: 'Market', question: 'When you lose a customer or deal, how do you find out why?', placeholder: 'e.g. We rarely follow up, sometimes the sales team tells us informally...' },
    ],
    Leadership: [
        { id: 'lead_1', pillar: 'Leadership', question: 'How are decisions made in your organization — who decides, and how fast?', placeholder: 'e.g. Most things go through me, it can take days for anything to move...' },
        { id: 'lead_2', pillar: 'Leadership', question: 'Do you have regular team meetings? If so, do they result in clear actions?', placeholder: 'e.g. Weekly meetings, but often the same issues come up and nothing changes...' },
        { id: 'lead_3', pillar: 'Leadership', question: 'What do you spend most of YOUR time on each week as a leader?', placeholder: 'e.g. Firefighting operational issues, answering questions, managing cash flow...' },
    ],
    Innovation: [
        { id: 'inno_1', pillar: 'Innovation', question: 'When was the last time you launched a new product, service, or process improvement?', placeholder: 'e.g. About 8 months ago, we added a new product line but haven\'t measured results...' },
        { id: 'inno_2', pillar: 'Innovation', question: 'How do you test new ideas before committing resources?', placeholder: 'e.g. We usually just go with our gut and see what happens...' },
        { id: 'inno_3', pillar: 'Innovation', question: 'What is stopping you from improving faster?', placeholder: 'e.g. Too busy with daily operations, no budget for testing, fear of failure...' },
    ],
    Risk: [
        { id: 'risk_1', pillar: 'Risk', question: 'What is the single biggest risk to your business that keeps you up at night?', placeholder: 'e.g. Losing our biggest client, regulatory changes, key person leaving...' },
        { id: 'risk_2', pillar: 'Risk', question: 'How do you currently handle compliance, contracts, and documentation?', placeholder: 'e.g. Mostly informal, contracts are basic, we catch issues after they happen...' },
        { id: 'risk_3', pillar: 'Risk', question: 'If a critical team member left tomorrow, how prepared is the business?', placeholder: 'e.g. We\'d be in serious trouble, critical knowledge is in one person\'s head...' },
    ],
    People: [
        { id: 'ppl_1', pillar: 'People', question: 'How confident are you that each team member knows exactly what success looks like in their role?', placeholder: 'e.g. Some do, but most just follow instructions without understanding the bigger picture...' },
        { id: 'ppl_2', pillar: 'People', question: 'What happens when someone makes a mistake — is the response punitive or learning-oriented?', placeholder: 'e.g. It depends on who made the mistake, sometimes we shout, sometimes we fix it together...' },
        { id: 'ppl_3', pillar: 'People', question: 'How do you currently develop and retain your best people?', placeholder: 'e.g. No formal program, we give raises sometimes, training is occasional...' },
    ],
};

// Fallback for pillar names that don't exactly match
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

const DeepScanAssessment: React.FC<DeepScanAssessmentProps> = ({ report, onComplete, onBack }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isGenerating, setIsGenerating] = useState(false);
    const [generationProgress, setGenerationProgress] = useState('');

    // Generate targeted questions based on weak pillars
    const questions = useMemo(() => {
        const sortedPillars = [...report.pillars].sort((a, b) => a.score - b.score);
        const allQuestions: DeepQuestion[] = [];

        for (const pillar of sortedPillars) {
            const mappedName = PILLAR_ALIASES[pillar.name] || pillar.name;
            const bank = DEEP_QUESTIONS_BANK[mappedName];
            if (bank) {
                // For weak pillars (< 60), include all 3 questions. For stronger, include 1-2.
                const count = pillar.score < 50 ? 3 : pillar.score < 70 ? 2 : 1;
                allQuestions.push(...bank.slice(0, count));
            }
        }

        return allQuestions;
    }, [report.pillars]);

    const currentQuestion = questions[currentStep];
    const progress = ((currentStep + 1) / questions.length) * 100;
    const isLastQuestion = currentStep === questions.length - 1;

    const handleNext = async () => {
        if (isLastQuestion) {
            // Generate the deep scan report
            setIsGenerating(true);
            setGenerationProgress('Analyzing your responses...');

            try {
                const deepAnswers: DeepScanAssessmentAnswer[] = questions.map(q => ({
                    pillar: q.pillar,
                    question: q.question,
                    answer: answers[q.id] || 'No answer provided'
                }));

                setGenerationProgress('Consulting Gemini 1.5 Pro for personalized analysis...');
                const result = await generateDeepScanReport(report, deepAnswers);

                if (result) {
                    setGenerationProgress('Compiling your personalized report...');
                    await new Promise(r => setTimeout(r, 1000)); // Brief pause for UX
                    onComplete(result.chapters, result.executiveSummary);
                } else {
                    setGenerationProgress('Error generating report. Using fallback analysis...');
                    await new Promise(r => setTimeout(r, 1500));
                    // onComplete will still receive fallback from the service
                }
            } catch (err) {
                console.error('Deep scan generation failed:', err);
                setGenerationProgress('Using offline analysis...');
                // Fallback handled in gemini.ts
            }
        } else {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    if (isGenerating) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center font-sans">
                <div className="text-center space-y-8 max-w-md px-6">
                    <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-brand-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-brand-500/30 animate-pulse">
                            <Brain className="w-12 h-12 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                            <Loader2 className="w-4 h-4 text-white animate-spin" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-white mb-3">Generating Your Deep Scan</h2>
                        <p className="text-slate-400 text-sm leading-relaxed">{generationProgress}</p>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-brand-500 to-purple-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                    </div>
                    <p className="text-[11px] text-slate-500">Powered by Gemini 1.5 Pro • Personalized to your business</p>
                </div>
            </div>
        );
    }

    const Icon = currentQuestion ? getPillarIcon(currentQuestion.pillar) : Activity;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-sans text-white">

            {/* Header */}
            <div className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-xl border-b border-white/10 px-6 py-4">
                <div className="max-w-3xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div>
                            <h1 className="text-lg font-bold text-white">Deep Scan Assessment</h1>
                            <p className="text-xs text-slate-400">{report.profileContext?.businessName || 'Business'} • Question {currentStep + 1} of {questions.length}</p>
                        </div>
                    </div>
                    <div className="text-sm font-bold text-brand-400">{Math.round(progress)}%</div>
                </div>
                {/* Progress Bar */}
                <div className="max-w-3xl mx-auto mt-3">
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-brand-500 to-purple-500 h-1.5 rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* Question Card */}
            {currentQuestion && (
                <div className="max-w-3xl mx-auto px-4 py-12">
                    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-12 space-y-8 shadow-2xl">

                        {/* Pillar Badge */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-500/20 rounded-xl flex items-center justify-center">
                                <Icon className="w-5 h-5 text-brand-400" />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-brand-400 uppercase tracking-widest">{currentQuestion.pillar} Pillar</span>
                                {report.pillars.find(p => p.name === currentQuestion.pillar || PILLAR_ALIASES[p.name] === currentQuestion.pillar) && (
                                    <div className="flex items-center gap-2 mt-0.5">
                                        {(() => {
                                            const p = report.pillars.find(p => p.name === currentQuestion.pillar || PILLAR_ALIASES[p.name] === currentQuestion.pillar);
                                            if (!p) return null;
                                            return (
                                                <>
                                                    <span className="text-[10px] font-bold text-slate-500">Score: {p.score}/100</span>
                                                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${p.score < 50 ? 'bg-red-500/20 text-red-300' : p.score < 70 ? 'bg-amber-500/20 text-amber-300' : 'bg-green-500/20 text-green-300'}`}>
                                                        {p.band}
                                                    </span>
                                                </>
                                            );
                                        })()}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Question */}
                        <h2 className="text-2xl md:text-3xl font-black text-white leading-snug">
                            {currentQuestion.question}
                        </h2>

                        {/* Answer Textarea */}
                        <textarea
                            value={answers[currentQuestion.id] || ''}
                            onChange={e => setAnswers(prev => ({ ...prev, [currentQuestion.id]: e.target.value }))}
                            placeholder={currentQuestion.placeholder}
                            rows={5}
                            className="w-full bg-white/5 border border-white/20 rounded-2xl p-5 text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none text-base leading-relaxed outline-none transition-all"
                        />

                        {/* Context Hint */}
                        <div className="flex items-start gap-3 bg-brand-500/10 border border-brand-500/20 rounded-xl p-4">
                            <AlertTriangle className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                            <p className="text-xs text-slate-400 leading-relaxed">
                                The more detail you provide, the more personalized your Deep Scan report will be.
                                Gemini 1.5 Pro uses your answers to generate chapter-by-chapter analysis specific to your business.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-between items-center pt-4">
                            <button
                                onClick={handleBack}
                                disabled={currentStep === 0}
                                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all ${currentStep === 0 ? 'text-slate-600 cursor-not-allowed' : 'text-slate-300 hover:bg-white/10'}`}
                            >
                                <ArrowLeft className="w-4 h-4" /> Previous
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={!answers[currentQuestion.id]?.trim()}
                                className={`flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold transition-all group ${answers[currentQuestion.id]?.trim()
                                    ? 'bg-gradient-to-r from-brand-500 to-purple-500 text-white hover:from-brand-400 hover:to-purple-400 shadow-lg shadow-brand-500/20'
                                    : 'bg-white/10 text-slate-500 cursor-not-allowed'
                                    }`}
                            >
                                {isLastQuestion ? (
                                    <>
                                        <Brain className="w-4 h-4" /> Generate Deep Scan
                                    </>
                                ) : (
                                    <>
                                        Next <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Question Pills */}
                    <div className="flex flex-wrap gap-2 mt-8 justify-center">
                        {questions.map((q, i) => (
                            <button
                                key={q.id}
                                onClick={() => setCurrentStep(i)}
                                className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center transition-all ${i === currentStep
                                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                                    : answers[q.id]?.trim()
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                        : 'bg-white/5 text-slate-500 border border-white/10'
                                    }`}
                            >
                                {answers[q.id]?.trim() ? <CheckCircle2 className="w-3.5 h-3.5" /> : i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeepScanAssessment;

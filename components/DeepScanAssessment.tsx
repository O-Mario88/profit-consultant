import React, { useState, useMemo } from 'react';
import { GeneratedReport, DeepScanChapter } from '../types';
import { generateDeepScanReport, DeepScanAssessmentAnswer } from '../services/gemini';
import { DEEP_SCAN_DATA, DeepScanItem } from '../data/deepScanData';
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

const ADAPTIVE_PILLAR_TO_LEGACY: Record<string, string> = {
    P1: 'Risk',
    P2: 'Innovation',
    P3: 'Market',
    P4: 'Money',
    P5: 'Operations',
    P6: 'Leadership',
    P7: 'People'
};

const normalizeLegacyPillar = (value: string): DeepScanItem['pillar'] => {
    const direct = (PILLAR_ALIASES[value] || value) as DeepScanItem['pillar'];
    if (['Operations', 'Money', 'Market', 'Leadership', 'Innovation', 'Risk', 'People'].includes(direct)) {
        return direct;
    }
    return 'Operations';
};

const DeepScanAssessment: React.FC<DeepScanAssessmentProps> = ({ report, onComplete, onBack }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [isGenerating, setIsGenerating] = useState(false);
    const [generationProgress, setGenerationProgress] = useState('');

    // Generate targeted questions (NOW: All 7 Pillars for full depth)
    const questions = useMemo(() => {
        const adaptivePillars = report.profileContext?.adaptiveQuestionBank?.pillars;
        if (
            report.profileContext?.assessmentQuestionSource === 'adaptive' &&
            Array.isArray(adaptivePillars) &&
            adaptivePillars.length > 0
        ) {
            const adaptiveDeepQuestions: DeepScanItem[] = [];
            adaptivePillars.forEach((pillar) => {
                const legacyPillar = normalizeLegacyPillar(
                    pillar.legacyPillar || ADAPTIVE_PILLAR_TO_LEGACY[pillar.id] || pillar.name || 'Operations'
                );
                (pillar.deepScan || []).forEach((pair, idx) => {
                    if (!pair?.textA || !pair?.textB) return;
                    adaptiveDeepQuestions.push({
                        id: pair.id || `${pillar.id}_DS_${idx + 1}`,
                        pillar: legacyPillar,
                        a: pair.textA,
                        b: pair.textB
                    });
                });
            });

            if (adaptiveDeepQuestions.length > 0) {
                return adaptiveDeepQuestions;
            }
        }

        // We want a full 360 scan, so we take ALL pillars
        const allPillars = ['Operations', 'Money', 'Market', 'Leadership', 'Innovation', 'Risk', 'People'];
        const allQuestions: DeepScanItem[] = [];

        // 1. Filter questions for ALL pillars
        const relevantQuestions = DEEP_SCAN_DATA.filter(q =>
            allPillars.includes(q.pillar) ||
            allPillars.includes(PILLAR_ALIASES[q.pillar] || '')
        );

        // 2. Group by pillar
        const grouped: Record<string, DeepScanItem[]> = {};
        relevantQuestions.forEach(q => {
            if (!grouped[q.pillar]) grouped[q.pillar] = [];
            grouped[q.pillar].push(q);
        });

        // 3. Take up to 3 per pillar (7 * 3 = 21 questions)
        Object.values(grouped).forEach(qs => {
            allQuestions.push(...qs);
        });

        return allQuestions;
    }, [report.profileContext]);

    const currentQuestion = questions[currentStep];
    const progress = ((currentStep + 1) / questions.length) * 100;
    const isLastQuestion = currentStep === questions.length - 1;

    const handleNext = async () => {
        if (isLastQuestion) {
            // Generate the deep scan report
            setIsGenerating(true);
            setGenerationProgress('Analyzing your responses...');

            try {
                // Format answers for Gemini
                const deepAnswers: DeepScanAssessmentAnswer[] = questions.map(q => {
                    const val = answers[q.id] || 3;
                    let alignment = "Neutral";
                    if (val === 1) alignment = "Strongly aligns with Option A";
                    if (val === 2) alignment = "Leans towards Option A";
                    if (val === 3) alignment = "Neutral / Mixed";
                    if (val === 4) alignment = "Leans towards Option B";
                    if (val === 5) alignment = "Strongly aligns with Option B";

                    return {
                        pillar: q.pillar,
                        question: `Compare: [A] "${q.a}" vs [B] "${q.b}"`,
                        answer: `${alignment} (Score: ${val}/5).`
                    };
                });

                setGenerationProgress('Consulting OpenAI for personalized analysis...');
                const result = await generateDeepScanReport(report, deepAnswers);

                if (result) {
                    setGenerationProgress('Compiling your personalized report...');
                    await new Promise(r => setTimeout(r, 1000)); // Brief pause for UX
                    onComplete(result.chapters, result.executiveSummary);
                    return;
                } else {
                    setGenerationProgress('Could not complete generation. Please try again.');
                    await new Promise(r => setTimeout(r, 1200));
                    setIsGenerating(false);
                }
            } catch (err) {
                console.error('Deep scan generation failed:', err);
                setGenerationProgress('Generation failed. Returning to the assessment.');
                await new Promise(r => setTimeout(r, 1200));
                setIsGenerating(false);
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
                    <p className="text-[10px] text-slate-500">Using full backend orchestration</p>
                    <p className="text-[11px] text-slate-500">Powered by OpenAI • Personalized to your business</p>
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

                        {/* Question Type: Forced Pair Slider */}
                        <div className="space-y-8">
                            <h2 className="text-xl md:text-2xl font-bold text-white leading-snug text-center">
                                Which statement best describes your current situation?
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                {/* Option A */}
                                <div
                                    className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${(answers[currentQuestion.id] || 3) < 3
                                        ? 'bg-indigo-500/20 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                                        : 'bg-white/5 border-white/10 hover:border-white/20'
                                        }`}
                                    onClick={() => setAnswers(prev => ({ ...prev, [currentQuestion.id]: 1 }))}
                                >
                                    <div className="font-bold text-lg mb-2 text-indigo-300">Option A</div>
                                    <p className="text-white text-lg leading-relaxed">{currentQuestion.a}</p>
                                </div>

                                {/* Option B */}
                                <div
                                    className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${(answers[currentQuestion.id] || 3) > 3
                                        ? 'bg-teal-500/20 border-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.3)]'
                                        : 'bg-white/5 border-white/10 hover:border-white/20'
                                        }`}
                                    onClick={() => setAnswers(prev => ({ ...prev, [currentQuestion.id]: 5 }))}
                                >
                                    <div className="font-bold text-lg mb-2 text-teal-300">Option B</div>
                                    <p className="text-white text-lg leading-relaxed">{currentQuestion.b}</p>
                                </div>
                            </div>

                            {/* Slider Control */}
                            <div className="max-w-xl mx-auto w-full pt-8 pb-4">
                                <div className="flex justify-between text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                                    <span>Strongly A</span>
                                    <span>Neutral</span>
                                    <span>Strongly B</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="5"
                                    step="1"
                                    value={answers[currentQuestion.id] || 3}
                                    onChange={(e) => setAnswers(prev => ({ ...prev, [currentQuestion.id]: parseInt(e.target.value) }))}
                                    className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                                />
                                <div className="flex justify-between mt-2">
                                    {[1, 2, 3, 4, 5].map(val => (
                                        <div
                                            key={val}
                                            onClick={() => setAnswers(prev => ({ ...prev, [currentQuestion.id]: val }))}
                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer transition-all ${(answers[currentQuestion.id] || 3) === val
                                                ? 'bg-brand-500 text-white scale-110 shadow-lg'
                                                : 'bg-slate-800 text-slate-500 hover:bg-slate-700'
                                                }`}
                                        >
                                            {val}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-between items-center pt-8 border-t border-white/10">
                            <button
                                onClick={handleBack}
                                disabled={currentStep === 0}
                                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all ${currentStep === 0 ? 'text-slate-600 cursor-not-allowed' : 'text-slate-300 hover:bg-white/10'}`}
                            >
                                <ArrowLeft className="w-4 h-4" /> Previous
                            </button>
                            <button
                                onClick={handleNext}
                                className={`flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold transition-all group bg-gradient-to-r from-brand-500 to-purple-500 text-white hover:from-brand-400 hover:to-purple-400 shadow-lg shadow-brand-500/20`}
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
                                    : (answers[q.id]) !== undefined
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                        : 'bg-white/5 text-slate-500 border border-white/10'
                                    }`}
                            >
                                {(answers[q.id]) !== undefined ? <CheckCircle2 className="w-3.5 h-3.5" /> : i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeepScanAssessment;

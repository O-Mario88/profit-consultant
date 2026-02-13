import React, { useMemo, useState } from 'react';
import Diagnostic from './components/Diagnostic';
import MissionBrief from './components/MissionBrief';
import DeepScanAssessment from './components/DeepScanAssessment';
import DeepScanResult from './components/DeepScanResult';
import { LocalizationProvider } from './contexts/LocalizationContext';
import { Archetype, CheckoutItem, DeepScanChapter, GeneratedReport, PillarScores } from './types';

type AssessmentView = 'quick_scan' | 'quick_scan_report' | 'deep_scan_assessment' | 'deep_scan_report';

const App: React.FC = () => {
  const [view, setView] = useState<AssessmentView>('quick_scan');
  const [report, setReport] = useState<GeneratedReport | null>(null);
  const [deepScanChapters, setDeepScanChapters] = useState<Record<string, DeepScanChapter> | null>(null);
  const [deepScanExecSummary, setDeepScanExecSummary] = useState('');

  const isReportReady = useMemo(() => Boolean(report), [report]);

  const handleDiagnosticComplete = (
    _archetype: Archetype,
    _scores: PillarScores,
    _planType: 'basic' | 'premium',
    generatedReport?: GeneratedReport
  ) => {
    if (!generatedReport) {
      alert('Quick Scan finished but no report was generated. Please retry.');
      setView('quick_scan');
      return;
    }

    setReport(generatedReport);
    setDeepScanChapters(null);
    setDeepScanExecSummary('');
    setView('quick_scan_report');
  };

  const handleReset = () => {
    setReport(null);
    setDeepScanChapters(null);
    setDeepScanExecSummary('');
    setView('quick_scan');
  };

  const ignoreUnlock = (_item: CheckoutItem) => {
    // Assessment-only build: reports are always unlocked.
  };

  return (
    <LocalizationProvider>
      <div className="h-full bg-surface-container font-sans text-on-surface">
        {view !== 'quick_scan' && (
          <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur print:hidden">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Assessment Workspace</p>
                <h1 className="text-sm font-bold text-slate-900">
                  {view === 'quick_scan_report' ? 'Quick Scan Report' : view === 'deep_scan_assessment' ? 'Deep Scan Assessment' : 'Deep Scan Report'}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                {isReportReady && view !== 'quick_scan_report' && (
                  <button
                    onClick={() => setView('quick_scan_report')}
                    className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
                  >
                    Quick Scan
                  </button>
                )}
                <button
                  onClick={handleReset}
                  className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white hover:bg-slate-800"
                >
                  New Assessment
                </button>
              </div>
            </div>
          </div>
        )}

        <main className="h-full w-full overflow-y-auto">
          {view === 'quick_scan' && (
            <Diagnostic onComplete={handleDiagnosticComplete} variant="owner" />
          )}

          {view === 'quick_scan_report' && report && (
            <MissionBrief
              report={report}
              onUnlock={ignoreUnlock}
              isUnlocked={true}
              onStartDeepScan={() => setView('deep_scan_assessment')}
            />
          )}

          {view === 'deep_scan_assessment' && report && (
            <DeepScanAssessment
              report={report}
              onBack={() => setView('quick_scan_report')}
              onComplete={(chapters, execSummary) => {
                setDeepScanChapters(chapters);
                setDeepScanExecSummary(execSummary);
                setView('deep_scan_report');
              }}
            />
          )}

          {view === 'deep_scan_report' && report && deepScanChapters && (
            <DeepScanResult
              report={report}
              deepScanChapters={deepScanChapters}
              deepScanExecSummary={deepScanExecSummary}
              isUnlocked={true}
              onUnlock={ignoreUnlock}
              onBack={() => setView('quick_scan_report')}
            />
          )}

          {(view !== 'quick_scan' && !report) && (
            <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-3 px-6 text-center">
              <h2 className="text-xl font-black text-slate-900">No Assessment Loaded</h2>
              <p className="text-sm text-slate-600">Start a new Quick Scan to generate your report and unlock Deep Scan.</p>
              <button
                onClick={() => setView('quick_scan')}
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white hover:bg-slate-800"
              >
                Start Quick Scan
              </button>
            </div>
          )}
        </main>
      </div>
    </LocalizationProvider>
  );
};

export default App;

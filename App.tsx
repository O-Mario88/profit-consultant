import React, { useEffect, useMemo, useState } from 'react';
import Diagnostic from './components/Diagnostic';
import MissionBrief from './components/MissionBrief';
import DeepScanAssessment from './components/DeepScanAssessment';
import DeepScanResult from './components/DeepScanResult';
import { LocalizationProvider } from './contexts/LocalizationContext';
import { Archetype, CheckoutItem, DeepScanChapter, GeneratedReport, PillarScores } from './types';
import { ApiError, fetchBackendHealth } from './services/apiClient';

type BackendConnectionState = 'checking' | 'online' | 'offline';

type AssessmentView = 'quick_scan' | 'quick_scan_report' | 'deep_scan_assessment' | 'deep_scan_report';

const App: React.FC = () => {
  const [view, setView] = useState<AssessmentView>('quick_scan');
  const [report, setReport] = useState<GeneratedReport | null>(null);
  const [deepScanChapters, setDeepScanChapters] = useState<Record<string, DeepScanChapter> | null>(null);
  const [deepScanExecSummary, setDeepScanExecSummary] = useState('');
  const [backendState, setBackendState] = useState<BackendConnectionState>('checking');
  const [backendMessage, setBackendMessage] = useState('Connecting to backend...');

  const isReportReady = useMemo(() => Boolean(report), [report]);

  useEffect(() => {
    let alive = true;

    const refreshHealth = async () => {
      try {
        const health = await fetchBackendHealth();
        if (!alive) return;

        if (health?.ok) {
          const aiState = health.aiConfigured ? 'AI configured' : 'AI key missing on server';
          setBackendState('online');
          setBackendMessage(`Backend online • ${aiState}`);
        } else {
          setBackendState('offline');
          setBackendMessage('Backend returned an unexpected health response.');
        }
      } catch (error) {
        if (!alive) return;
        const message =
          error instanceof ApiError
            ? `${error.code}: ${error.message}`
            : error instanceof Error
              ? error.message
              : 'Unable to reach backend.';
        setBackendState('offline');
        setBackendMessage(`Backend offline • ${message}`);
      }
    };

    void refreshHealth();
    const intervalId = window.setInterval(() => {
      void refreshHealth();
    }, 25_000);

    return () => {
      alive = false;
      window.clearInterval(intervalId);
    };
  }, []);

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
        <div className="fixed bottom-4 left-4 z-50 rounded-lg border border-slate-200 bg-white/95 px-3 py-2 shadow-lg backdrop-blur">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">System Link</p>
          <p className={`text-xs font-semibold ${backendState === 'online' ? 'text-green-700' : backendState === 'checking' ? 'text-amber-700' : 'text-red-700'}`}>
            {backendState === 'online' ? 'Connected' : backendState === 'checking' ? 'Checking...' : 'Disconnected'}
          </p>
          <p className="max-w-xs text-[11px] text-slate-600">{backendMessage}</p>
        </div>

        {view !== 'quick_scan' && (
          <div className="sticky top-0 z-40 border-b border-brand-100 bg-white/90 px-4 py-3 backdrop-blur print:hidden">
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
                    className="rounded-lg border border-brand-200 px-3 py-2 text-xs font-bold text-brand-700 hover:bg-brand-50"
                  >
                    Quick Scan
                  </button>
                )}
                <button
                  onClick={handleReset}
                  className="rounded-lg bg-brand-600 px-3 py-2 text-xs font-bold text-white hover:bg-brand-700"
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
                className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-bold text-white hover:bg-brand-700"
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

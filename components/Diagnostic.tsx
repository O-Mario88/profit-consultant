
// ... existing imports ...
import React, { useState, useEffect, useRef } from 'react';
import {
   Zap, CheckCircle2, ArrowRight, ShieldAlert, Clock, User, Download, Star, Users,
   HeartPulse, Brain, Wallet, Megaphone, Shield, Crown, Gem, CloudRain, Crosshair,
   ChevronRight, X, AlertOctagon, Loader2, RefreshCw, Check, Globe, ShieldCheck,
   TrendingUp, FileText, AlertTriangle, Lock, ShoppingBag, Truck, Factory, Building,
   Briefcase, Utensils, Sprout, HardHat, Monitor, Video, Home, BookOpen, Search, ArrowLeft,
   ChevronLeft, Info, Save, Wrench, Activity, Pickaxe, Building2, Wifi, LayoutGrid
} from 'lucide-react';
import { Archetype, GeneratedReport, LeakIndices, BusinessProfile } from '../types';
import { useLocalization } from '../contexts/LocalizationContext';
import { generateStrategicReport, calculateLeakIndices, generateSignalBasedReport } from '../services/reportEngine';
import { generateAdaptiveQuestionBank, AdaptiveQuestionBankResponse } from '../services/gemini';
import { AGRO_PACK } from '../data/agro/index';
import { AGRI_PACK } from '../data/agri';
import { MINING_PACK } from '../data/mining';
import { OIL_GAS_PACK } from '../data/oilGas';
import { FNB_PACK } from '../data/fnb';
import { TEXTILE_PACK } from '../data/textile';
import { FURNITURE_PACK } from '../data/furniture';
import { METAL_PACK } from '../data/metal';
import { PLASTICS_PACK } from '../data/plastics';
import { SOAP_PACK } from '../data/soap';
import { BRICKS_PACK } from '../data/bricks';
import { WATER_PACK } from '../data/water';
import { FASHION_PACK } from '../data/fashion';
import { HARDWARE_PACK } from '../data/hardware';
import { ELECTRONICS_PACK } from '../data/electronics';
import { FMCG_PACK } from '../data/fmcg';
import { resolveIndustryPack, resolveIndustryFlags } from '../services/packResolver';
import { STATIONERY_PACK } from '../data/stationery';
import { SPARE_PARTS_PACK } from '../data/spareParts';
import { ASSEMBLY_PACK } from '../data/assembly';
import { PRODUCE_PACK } from '../data/produce';

import { CROP_FARMING_PACK } from '../data/cropFarming';
import { CATTLE_PACK } from '../data/cattle';

import { GOAT_PACK } from '../data/goat';
import { SHEEP_PACK } from '../data/sheep';
import { PIGGERY_PACK } from '../data/piggery';
import { POULTRY_PACK } from '../data/poultry';
import { DAIRY_PACK } from '../data/dairy';
import { FARM_MACHINERY_PACK } from '../data/farm_machinery';
import { INPUT_SUPPLY_PACK } from '../data/input_supply';
import { DIAGNOSTIC_DATA, DiagnosticItem } from '../data/diagnosticData';
import { INDUSTRY_LEXICONS, QUICK_SCAN_QUESTIONS, INDUSTRY_TAXONOMY, IndustryCategory, AQUACULTURE_HOOKS, AQUACULTURE_QUIZ_COPY, AGRO_PROCESSING_QUIZ_COPY, MINING_QUIZ_COPY, OIL_GAS_QUIZ_COPY, FNB_QUIZ_COPY, TEXTILE_QUIZ_COPY, FURNITURE_QUIZ_COPY, METAL_QUIZ_COPY, PLASTICS_QUIZ_COPY, SOAP_QUIZ_COPY, BRICKS_QUIZ_COPY, WATER_QUIZ_COPY, ASSEMBLY_QUIZ_COPY, FMCG_QUIZ_COPY, ELECTRONICS_QUIZ_COPY, HARDWARE_QUIZ_COPY, FASHION_QUIZ_COPY, STATIONERY_QUIZ_COPY, SPARE_PARTS_QUIZ_COPY, GOAT_QUIZ_COPY, SHEEP_QUIZ_COPY, PIGGERY_QUIZ_COPY } from '../data/industryContext';

import { UNIVERSAL_GOALS, INDUSTRY_GOALS, getGoalPillars } from '../data/goalLibrary';
import { STRENGTHS_PROXY_QUESTIONS } from '../data/strengths';

interface DiagnosticProps {
   onComplete: (archetype: Archetype, scores: any, planType: 'basic' | 'premium', report?: GeneratedReport) => void;
   variant?: 'owner' | 'employee';
}

type Step = 'setup' | 'intro' | 'strengths' | 'assessment' | 'analyzing' | 'result';

interface ActiveQuestion {
   id: string;
   pillar: string;
   a: string;
   b: string;
   isSwapped: boolean;
   isGoalRelevant: boolean;
}

const LEGACY_PILLARS = ['Operations', 'Money', 'Market', 'Leadership', 'Innovation', 'Risk', 'People'] as const;
type LegacyPillar = typeof LEGACY_PILLARS[number];
type RoleFamilyId =
   | 'executive'
   | 'finance'
   | 'hr'
   | 'operations'
   | 'quality'
   | 'supply_chain'
   | 'sales'
   | 'engineering'
   | 'pmo'
   | 'it_data';

const ADAPTIVE_PILLAR_TO_LEGACY: Record<string, typeof LEGACY_PILLARS[number]> = {
   P1: 'Risk',
   P2: 'Innovation',
   P3: 'Market',
   P4: 'Money',
   P5: 'Operations',
   P6: 'Leadership',
   P7: 'People'
};

const PILLAR_NAME_ALIASES: Record<string, typeof LEGACY_PILLARS[number]> = {
   engine: 'Operations',
   fuel: 'Money',
   voice: 'Market',
   brain: 'Leadership',
   pulse: 'Innovation',
   shield: 'Risk',
   tribe: 'People',
   operations: 'Operations',
   money: 'Money',
   market: 'Market',
   leadership: 'Leadership',
   innovation: 'Innovation',
   risk: 'Risk',
   people: 'People',
   'quality customer trust': 'Risk',
   'engineering process design change control': 'Innovation',
   'sales delivery customer experience': 'Market',
   'finance pricing margin cashflow': 'Money',
   'operations productivity flow': 'Operations',
   'supply chain inventory vendor control': 'Leadership',
   'people culture safety compliance continuous improvement': 'People'
};

const ROLE_ROUTING_RULES: Array<{ id: RoleFamilyId; titleKeywords: string[] }> = [
   {
      id: 'executive',
      titleKeywords: [
         'founder', 'co founder', 'owner', 'proprietor', 'managing director', 'ceo', 'chief executive',
         'president', 'general manager', 'gm', 'business unit head', 'managing partner', 'chief of staff'
      ]
   },
   {
      id: 'finance',
      titleKeywords: [
         'cfo', 'chief financial', 'finance director', 'vp finance', 'controller', 'accountant', 'treasurer',
         'fp a', 'financial analyst', 'credit manager', 'internal auditor', 'tax manager'
      ]
   },
   {
      id: 'hr',
      titleKeywords: [
         'chro', 'human resources', 'hr director', 'hr manager', 'head of people', 'people ops', 'talent acquisition',
         'recruiter', 'learning and development', 'l and d', 'training manager', 'organizational development', 'hris'
      ]
   },
   {
      id: 'operations',
      titleKeywords: [
         'coo', 'chief operating', 'operations director', 'head of operations', 'plant manager', 'factory manager',
         'production manager', 'production supervisor', 'shift lead', 'line leader', 'site manager'
      ]
   },
   {
      id: 'quality',
      titleKeywords: [
         'quality director', 'head of quality', 'quality manager', 'qa qc', 'quality assurance', 'quality control',
         'regulatory affairs', 'compliance manager', 'qms manager', 'gmp manager', 'ehs', 'hse', 'safety officer'
      ]
   },
   {
      id: 'supply_chain',
      titleKeywords: [
         'cpo', 'chief procurement', 'supply chain director', 'head of supply chain', 'procurement manager',
         'purchasing manager', 'buyer', 'sourcing specialist', 'supply planner', 'demand planner', 'logistics manager',
         'warehouse manager', 'distribution manager', 'inventory controller'
      ]
   },
   {
      id: 'sales',
      titleKeywords: [
         'cro', 'chief revenue', 'sales director', 'vp sales', 'commercial director', 'head of sales', 'head of growth',
         'business development', 'account manager', 'key account', 'channel manager', 'customer success', 'marketing manager'
      ]
   },
   {
      id: 'engineering',
      titleKeywords: [
         'cto', 'chief technology', 'engineering director', 'head of engineering', 'r and d', 'head of r and d',
         'product director', 'engineering manager', 'process engineer', 'design engineer', 'test engineer', 'automation engineer'
      ]
   },
   {
      id: 'pmo',
      titleKeywords: [
         'program manager', 'project manager', 'pmo manager', 'delivery manager', 'implementation manager'
      ]
   },
   {
      id: 'it_data',
      titleKeywords: [
         'cio', 'it director', 'head of it', 'it manager', 'systems administrator', 'network engineer',
         'cybersecurity', 'security analyst', 'data analyst', 'bi analyst', 'data engineer', 'erp administrator'
      ]
   }
];

const ROLE_PILLAR_WEIGHTS: Record<RoleFamilyId, Record<LegacyPillar, number>> = {
   executive: { Operations: 3, Money: 3, Market: 3, Leadership: 3, Innovation: 3, Risk: 3, People: 3 },
   finance: { Operations: 3, Money: 5, Market: 3, Leadership: 4, Innovation: 2, Risk: 2, People: 2 },
   hr: { Operations: 4, Money: 2, Market: 2, Leadership: 2, Innovation: 3, Risk: 3, People: 5 },
   operations: { Operations: 5, Money: 2, Market: 2, Leadership: 4, Innovation: 3, Risk: 4, People: 3 },
   quality: { Operations: 4, Money: 2, Market: 2, Leadership: 3, Innovation: 4, Risk: 5, People: 3 },
   supply_chain: { Operations: 3, Money: 4, Market: 2, Leadership: 5, Innovation: 2, Risk: 3, People: 2 },
   sales: { Operations: 2, Money: 4, Market: 5, Leadership: 2, Innovation: 2, Risk: 3, People: 2 },
   engineering: { Operations: 3, Money: 2, Market: 2, Leadership: 3, Innovation: 5, Risk: 4, People: 2 },
   pmo: { Operations: 4, Money: 3, Market: 4, Leadership: 3, Innovation: 3, Risk: 3, People: 3 },
   it_data: { Operations: 4, Money: 3, Market: 2, Leadership: 3, Innovation: 2, Risk: 2, People: 3 }
};

const normalizePillarKey = (value: string) =>
   value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const normalizeRoleText = (value: string) =>
   value
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

const toLegacyPillar = (value: string): typeof LEGACY_PILLARS[number] => {
   if (LEGACY_PILLARS.includes(value as any)) return value as typeof LEGACY_PILLARS[number];
   const normalized = normalizePillarKey(value);
   return PILLAR_NAME_ALIASES[normalized] || 'Operations';
};

const inferRoleFamilyFromTitle = (title: string): RoleFamilyId => {
   const normalizedTitle = ` ${normalizeRoleText(title || '')} `;
   if (!normalizedTitle.trim()) return 'executive';

   let bestMatch: { id: RoleFamilyId; score: number } = { id: 'executive', score: 0 };
   for (const family of ROLE_ROUTING_RULES) {
      let score = 0;
      for (const keyword of family.titleKeywords) {
         const token = normalizeRoleText(keyword);
         if (!token) continue;
         if (normalizedTitle.includes(` ${token} `)) score += token.length > 5 ? 3 : 2;
      }
      if (score > bestMatch.score) {
         bestMatch = { id: family.id, score };
      }
   }

   return bestMatch.score > 0 ? bestMatch.id : 'executive';
};

const sequenceQuestionsByRole = (questions: ActiveQuestion[], userTitle: string): ActiveQuestion[] => {
   const roleFamily = inferRoleFamilyFromTitle(userTitle);
   const weights = ROLE_PILLAR_WEIGHTS[roleFamily] || ROLE_PILLAR_WEIGHTS.executive;

   return questions
      .map((question, index) => {
         const mappedPillar = toLegacyPillar(question.pillar);
         const roleWeight = weights[mappedPillar] || 1;
         const goalWeight = question.isGoalRelevant ? 1 : 0;
         return { question, index, roleWeight, goalWeight };
      })
      .sort((left, right) => {
         if (right.roleWeight !== left.roleWeight) return right.roleWeight - left.roleWeight;
         if (right.goalWeight !== left.goalWeight) return right.goalWeight - left.goalWeight;
         return left.index - right.index;
      })
      .map((item) => item.question);
};

const buildAdaptiveVocabulary = (profile: BusinessProfile): string[] => {
   const tokens: string[] = [];
   const lexicon = INDUSTRY_LEXICONS[profile.industry] || INDUSTRY_LEXICONS.other;
   if (lexicon) tokens.push(...Object.values(lexicon));
   tokens.push(...(profile.subIndustry || '').split(/[^A-Za-z0-9]+/g));
   tokens.push(...(profile.products || []));
   tokens.push(...(profile.goals || []));

   const seen = new Set<string>();
   const cleaned: string[] = [];
   for (const token of tokens) {
      const trimmed = String(token || '').trim();
      if (!trimmed || trimmed.length < 2) continue;
      const key = trimmed.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      cleaned.push(trimmed);
      if (cleaned.length >= 40) break;
   }
   return cleaned;
};

const parseAdaptiveQuickScan = (
   response: AdaptiveQuestionBankResponse | null
): { questions: ActiveQuestion[]; questionBank: BusinessProfile['adaptiveQuestionBank'] } | null => {
   const pillars = response?.questionBank?.pillars;
   if (!Array.isArray(pillars) || pillars.length === 0) return null;

   const parsedPillars = pillars.map((pillar, pillarIdx) => {
      const legacyPillar = toLegacyPillar(
         pillar.legacyPillar || ADAPTIVE_PILLAR_TO_LEGACY[pillar.id] || pillar.name || 'Operations'
      );

      const qs4 = Array.isArray(pillar.qs4)
         ? pillar.qs4
            .filter((pair) => Boolean(pair?.textA) && Boolean(pair?.textB))
            .map((pair, idx) => ({
               id: pair.id || `${pillar.id}_QS_${idx + 1}`,
               textA: pair.textA,
               textB: pair.textB,
               metadataTag: pair.metadataTag
            }))
         : [];

      const deepScan = Array.isArray(pillar.deepScan)
         ? pillar.deepScan
            .filter((pair) => Boolean(pair?.textA) && Boolean(pair?.textB))
            .map((pair, idx) => ({
               id: pair.id || `${pillar.id}_DS_${idx + 1}`,
               textA: pair.textA,
               textB: pair.textB,
               metadataTag: pair.metadataTag
            }))
         : [];

      return {
         id: pillar.id || `P${pillarIdx + 1}`,
         name: pillar.name || `Pillar ${pillarIdx + 1}`,
         legacyPillar,
         whyItMatters: pillar.whyItMatters || '',
         qs4,
         deepScan
      };
   });

   const questions: ActiveQuestion[] = [];
   parsedPillars.forEach((pillar) => {
      pillar.qs4.forEach((pair, idx) => {
         questions.push({
            id: pair.id || `${pillar.id}_QS_${idx + 1}`,
            pillar: pillar.legacyPillar || 'Operations',
            a: pair.textA,
            b: pair.textB,
            isSwapped: false,
            isGoalRelevant: true
         });
      });
   });

   if (questions.length === 0) return null;
   return {
      questions,
      questionBank: { pillars: parsedPillars }
   };
};

// -- 5-Point Scale Definition --
const LEANING_SCALE = [
   { value: 1, label: "Strongly A", color: "bg-indigo-600" },
   { value: 2, label: "Lean A", color: "bg-indigo-400" },
   { value: 3, label: "Neutral", color: "bg-gray-300" },
   { value: 4, label: "Lean B", color: "bg-teal-400" },
   { value: 5, label: "Strongly B", color: "bg-teal-600" },
];

const TEAM_SIZES = [
   { id: 'solo', label: 'Solo', sub: '1' },
   { id: 'micro', label: 'Micro Team', sub: '2–5' },
   { id: 'small', label: 'Small Team', sub: '6–20' },
   { id: 'small_med', label: 'Small–Medium', sub: '21–50' },
   { id: 'medium', label: 'Medium', sub: '51–200' },
   { id: 'large', label: 'Large', sub: '201–1k' },
   { id: 'enterprise', label: 'Enterprise', sub: '1k+' },
];

import {
   FNB_SUB_INDUSTRIES,
   TEXTILE_SUB_INDUSTRIES,
   FURNITURE_SUB_INDUSTRIES,
   METAL_SUB_INDUSTRIES,
   PLASTICS_SUB_INDUSTRIES,
   SOAP_SUB_INDUSTRIES,
   BRICKS_SUB_INDUSTRIES,
   WATER_SUB_INDUSTRIES,
   ASSEMBLY_SUB_INDUSTRIES
} from '../data/manufacturingSubIndustries';
import {
   FASHION_SUB_INDUSTRIES,
   HARDWARE_SUB_INDUSTRIES,
   ELECTRONICS_SHOP_SUB_INDUSTRIES,
   FMCG_SUB_INDUSTRIES,
   STATIONERY_SUB_INDUSTRIES,
   SPARE_PARTS_SUB_INDUSTRIES
} from '../data/retailSubIndustries';

const getIcon = (name: string) => {
   const map: Record<string, any> = {
      Sprout, ShoppingBag, Factory, HardHat, Truck, Utensils,
      HeartPulse, BookOpen, Wallet, Monitor, Video, Globe,
      Wrench, Zap, Home, Building, Briefcase,
      Pickaxe, Building2, Wifi, LayoutGrid, Shield, Users
   };
   return map[name] || Building;
};

const Diagnostic: React.FC<DiagnosticProps> = ({ onComplete, variant = 'owner' }) => {
   const { t, locale } = useLocalization();
   const [step, setStep] = useState<Step>('setup');
   const stepRef = useRef<Step>('setup');

   // Assessment State
   const [questionIndex, setQuestionIndex] = useState(0);
   const [answers, setAnswers] = useState<number[]>([]);
   const [isAnimating, setIsAnimating] = useState(false);
   const [hoveredOption, setHoveredOption] = useState<number | null>(null);

   // Setup State - Now includes Step 2 (Identity) and 5 (Agro)
   const [setupPhase, setSetupPhase] = useState<1 | 2 | 3 | 4 | 5>(1);
   const [businessProfile, setBusinessProfile] = useState<BusinessProfile>({
      businessName: '',
      userName: '',
      userTitle: '',
      industry: '',
      subIndustry: '',
      country: locale.country,
      regionGroup: locale.regionGroup,
      contentRegion: locale.contentRegion,
      localeLanguage: locale.language,
      localeCurrency: locale.currency,
      model: 'both',
      size: 'solo',
      hasManagers: false,
      stage: 'growing',
      goals: [],
      pain: '',
      includesContractors: false,
      includesVolunteers: false
   });

   const [industrySearch, setIndustrySearch] = useState('');
   const [selectedCategory, setSelectedCategory] = useState<IndustryCategory | null>(null);

   // Logic Engine
   const [sessionQuestions, setSessionQuestions] = useState<ActiveQuestion[]>([]);
   const [assessmentQuestionSource, setAssessmentQuestionSource] = useState<'static' | 'adaptive'>('static');
   const [adaptiveQuestionBank, setAdaptiveQuestionBank] = useState<BusinessProfile['adaptiveQuestionBank'] | undefined>(undefined);
   const [results, setResults] = useState<{
      scores: Record<string, number>;
      archetype: Archetype;
      silentKiller: string;
      indices: LeakIndices;
   } | null>(null);
   const [generatedReport, setGeneratedReport] = useState<GeneratedReport | null>(null);
   const [isError, setIsError] = useState(false);

   // CliftonStrengths Assessment State
   const [strengthsAnswers, setStrengthsAnswers] = useState<number[]>([]);
   const [strengthsIndex, setStrengthsIndex] = useState(0);
   const [strengthsSkipped, setStrengthsSkipped] = useState(false);

   useEffect(() => {
      stepRef.current = step;
   }, [step]);

   useEffect(() => {
      setBusinessProfile(prev => {
         if (
            prev.country === locale.country &&
            prev.regionGroup === locale.regionGroup &&
            prev.contentRegion === locale.contentRegion &&
            prev.localeLanguage === locale.language &&
            prev.localeCurrency === locale.currency
         ) {
            return prev;
         }

         return {
            ...prev,
            country: locale.country,
            regionGroup: locale.regionGroup,
            contentRegion: locale.contentRegion,
            localeLanguage: locale.language,
            localeCurrency: locale.currency
         };
      });
   }, [locale.country, locale.regionGroup, locale.contentRegion, locale.language, locale.currency]);

   // -- Initialization --
   useEffect(() => {
      if (!businessProfile.industry) return;
      let cancelled = false;

      // 1. Build Quick Scan Questions
      let quickScanQs: ActiveQuestion[] = [];
      const industryId = businessProfile.industry;
      const sub = businessProfile.subIndustry;

      // --- Helper Logic for Pack Detection ---
      const isAgroProcessing = industryId === 'agriculture' && sub.startsWith('Agro-processing');

      const isAgriInput = industryId === 'agriculture' && sub.startsWith('Input supplier');
      const isProduceAggregation = industryId === 'agriculture' && (sub.startsWith('Produce aggregation') || sub.startsWith('Export / cross-border'));
      const isCropFarming = industryId === 'agriculture' && sub.startsWith('Crop farming');

      const isCattle = industryId === 'agriculture' && sub.startsWith('Cattle');
      const isGoat = industryId === 'agriculture' && sub.startsWith('Goat');
      const isSheep = industryId === 'agriculture' && sub.startsWith('Sheep');
      const isPiggery = industryId === 'agriculture' && sub.toLowerCase().includes('pig');
      const isPoultry = industryId === 'agriculture' && sub.toLowerCase().includes('poultry');
      // Note: Aquaculture currently has no specific Pack loaded in original code, it just has specific specific "Archetype" logic later.
      // But if there IS a pack, we'd add it here. For now, we assume no generic pack unless defined.
      // Wait, there IS an archetype logic for aquaculture. I will leave it as standard unless I see an AQ pack import.
      // I see logic below for determining archetype for aquaculture.

      const isMining = industryId === 'mining' && !sub.toLowerCase().includes('oil');
      const isOilGas = industryId === 'mining' && sub.toLowerCase().includes('oil'); // Oil & Gas is inside Mining category now

      const isFnbManufacturing = industryId === 'manufacturing' && sub.startsWith('Food & beverage');
      const isTextileManufacturing = industryId === 'manufacturing' && sub.startsWith('Textile');
      const isFurnitureManufacturing = industryId === 'manufacturing' && sub.startsWith('Furniture');
      const isMetalManufacturing = industryId === 'manufacturing' && sub.startsWith('Metal works');
      const isPlasticsManufacturing = industryId === 'manufacturing' && sub.startsWith('Plastics');
      const isSoapManufacturing = industryId === 'manufacturing' && sub.startsWith('Soap');
      const isBricksManufacturing = industryId === 'manufacturing' && sub.startsWith('Bricks');
      const isWaterManufacturing = industryId === 'manufacturing' && sub.startsWith('Bottled water');
      const isAssemblyManufacturing = industryId === 'manufacturing' && sub.startsWith('Assembly');

      const isFashionRetail = industryId === 'retail' && sub.startsWith('Fashion');
      const isHardwareRetail = industryId === 'retail' && sub.startsWith('Hardware');
      const isElectronicsRetail = industryId === 'retail' && sub.startsWith('Electronics');
      const isFmcgRetail = industryId === 'retail' && (sub.startsWith('Supermarket') || sub.startsWith('FMCG'));
      const isStationeryRetail = industryId === 'retail' && sub.startsWith('Stationery');
      const isSparePartsRetail = industryId === 'retail' && sub.startsWith('Spare parts');



      // Helper to filter QS only
      const toQuickScanSet = <T extends { qid: string }>(questions: T[]): T[] => {
         const quickScan = questions.filter(q => q.qid.startsWith('QS_'));
         if (quickScan.length > 0) return quickScan;
         return questions.filter(q => !q.qid.startsWith('DS_'));
      };

      if (isAgroProcessing) {
         quickScanQs = toQuickScanSet(AGRO_PACK.questions).map((q, idx) => ({
            id: q.qid,
            pillar: q.pillar,
            a: q.textA,
            b: q.textB,
            isSwapped: false, // A is Leak, B is Control
            isGoalRelevant: true
         }));
      } else if (isAgriInput) {
         quickScanQs = toQuickScanSet(INPUT_SUPPLY_PACK.questions).map((q, idx) => ({
            id: q.qid,
            pillar: q.pillar,
            a: q.textA,
            b: q.textB,
            isSwapped: false,
            isGoalRelevant: true
         }));
      } else if (isProduceAggregation) {
         // Filter questions based on line_type (sub-industry)
         // Default to 'all' + matched sub-industry
         quickScanQs = toQuickScanSet(PRODUCE_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q, idx) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));

      } else if (isCropFarming) {
         quickScanQs = toQuickScanSet(CROP_FARMING_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isCattle) {
         quickScanQs = toQuickScanSet(CATTLE_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isSheep) {
         quickScanQs = toQuickScanSet(SHEEP_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isPiggery) {
         quickScanQs = toQuickScanSet(PIGGERY_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isPoultry) {
         quickScanQs = toQuickScanSet(POULTRY_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isGoat) {
         quickScanQs = toQuickScanSet(GOAT_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));

      } else if (isGoat) {
         quickScanQs = toQuickScanSet(GOAT_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isSheep) {
         quickScanQs = toQuickScanSet(SHEEP_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isMining) {
         quickScanQs = toQuickScanSet(MINING_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isOilGas) {
         quickScanQs = toQuickScanSet(OIL_GAS_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      }
      else if (isFnbManufacturing) {
         quickScanQs = toQuickScanSet(FNB_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isTextileManufacturing) {
         quickScanQs = toQuickScanSet(TEXTILE_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isFurnitureManufacturing) {
         quickScanQs = toQuickScanSet(FURNITURE_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isMetalManufacturing) {
         quickScanQs = toQuickScanSet(METAL_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isPlasticsManufacturing) {
         quickScanQs = toQuickScanSet(PLASTICS_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isSoapManufacturing) {
         quickScanQs = toQuickScanSet(SOAP_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isBricksManufacturing) {
         quickScanQs = toQuickScanSet(BRICKS_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isWaterManufacturing) {
         quickScanQs = toQuickScanSet(WATER_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isAssemblyManufacturing) {
         quickScanQs = toQuickScanSet(ASSEMBLY_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isFashionRetail) {
         quickScanQs = toQuickScanSet(FASHION_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isHardwareRetail) {
         quickScanQs = toQuickScanSet(HARDWARE_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isElectronicsRetail) {
         quickScanQs = toQuickScanSet(ELECTRONICS_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isFmcgRetail) {
         quickScanQs = toQuickScanSet(FMCG_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isStationeryRetail) {
         quickScanQs = toQuickScanSet(STATIONERY_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else if (isSparePartsRetail) {
         quickScanQs = toQuickScanSet(SPARE_PARTS_PACK.questions)
            .filter(q => q.line_type.includes('all') || (businessProfile.subIndustry && q.line_type.includes(businessProfile.subIndustry)))
            .map((q) => ({
               id: q.qid,
               pillar: q.pillar,
               a: q.textA,
               b: q.textB,
               isSwapped: false,
               isGoalRelevant: true
            }));
      } else {
         quickScanQs = QUICK_SCAN_QUESTIONS.map((q, idx) => {
            const cat = INDUSTRY_TAXONOMY.find(c => c.id === businessProfile.industry);
            const variantKey = cat ? cat.lexiconKey : 'default';

            const variantText = q.variants[businessProfile.industry || ''] || q.variants[variantKey] || q.variants['default'];

            if (!variantText) return null;

            // Randomize A/B position to prevent bias
            const swap = Math.random() > 0.5;

            return {
               id: `QS-${q.pillar}-${idx}`,
               pillar: q.pillar as any,
               a: swap ? variantText.b : variantText.a,
               b: swap ? variantText.a : variantText.b,
               isSwapped: swap,
               isGoalRelevant: getGoalPillars(businessProfile.goals[0] || '').includes(q.pillar)
            };
         }).filter(Boolean) as ActiveQuestion[];
      }

      setAssessmentQuestionSource('static');
      setAdaptiveQuestionBank(undefined);
      setSessionQuestions(sequenceQuestionsByRole(quickScanQs, businessProfile.userTitle || ''));
      setQuestionIndex(0);
      setAnswers([]);

      const loadAdaptiveQuestions = async () => {
         if (!businessProfile.goals.length) return;

         const payload = {
            industry: businessProfile.industry,
            subIndustry: businessProfile.subIndustry,
            responderTitle: businessProfile.userTitle || 'Owner',
            department: '',
            primaryPriority: businessProfile.goals[0] || 'Increase profit margin',
            secondaryPriorities: businessProfile.goals.slice(1),
            variant: businessProfile.model || 'both',
            complianceMode: businessProfile.complianceLevel || 'none',
            size: businessProfile.size || 'unknown',
            region: [businessProfile.country, businessProfile.regionGroup].filter(Boolean).join(' / ') || 'global',
            vocabularyList: buildAdaptiveVocabulary(businessProfile)
         };

         const adaptiveResponse = await generateAdaptiveQuestionBank(payload);
         if (cancelled) return;

         const parsed = parseAdaptiveQuickScan(adaptiveResponse);
         if (!parsed) return;
         if (!['setup', 'intro'].includes(stepRef.current)) return;

         setSessionQuestions(sequenceQuestionsByRole(parsed.questions, businessProfile.userTitle || ''));
         setAssessmentQuestionSource('adaptive');
         setAdaptiveQuestionBank(parsed.questionBank);
         setQuestionIndex(0);
         setAnswers([]);
      };

      void loadAdaptiveQuestions();

      return () => {
         cancelled = true;
      };
   }, [
      businessProfile.industry,
      businessProfile.subIndustry,
      businessProfile.goals,
      businessProfile.userTitle,
      businessProfile.model,
      businessProfile.complianceLevel,
      businessProfile.size,
      businessProfile.country,
      businessProfile.regionGroup,
      businessProfile.products
   ]);

   // -- Handlers --


   const handleIndustrySelect = (catId: string, sub: string) => {
      setBusinessProfile({ ...businessProfile, industry: catId, subIndustry: sub });
      setSetupPhase(2); // Move to Identity
   };

   const handleGoalToggle = (goal: string) => {
      const current = businessProfile.goals;
      if (current.includes(goal)) {
         setBusinessProfile({ ...businessProfile, goals: current.filter(g => g !== goal) });
      } else if (current.length < 2) {
         setBusinessProfile({ ...businessProfile, goals: [...current, goal] });
      }
   };

   const handleAnswer = (val: number) => {
      if (isAnimating) return;
      setIsAnimating(true);

      const newAnswers = [...answers];
      newAnswers[questionIndex] = val;
      setAnswers(newAnswers);

      setTimeout(() => {
         if (questionIndex < sessionQuestions.length - 1) {
            setQuestionIndex(prev => prev + 1);
         } else {
            setStep('analyzing');
            calculateResults(newAnswers);
         }
         setIsAnimating(false);
      }, 400);
   };

   const calculateResults = async (finalAnswers: number[]) => {
      const scores: Record<string, number> = { Operations: 0, Money: 0, Market: 0, Leadership: 0, Innovation: 0, Risk: 0, People: 0 };
      const counts: Record<string, number> = { Operations: 0, Money: 0, Market: 0, Leadership: 0, Innovation: 0, Risk: 0, People: 0 };

      sessionQuestions.forEach((q, idx) => {
         const val = finalAnswers[idx]; // 1-5 scale
         let normalizedScore = 0;

         if (!q.isSwapped) {
            normalizedScore = (val - 1) * 25;
         } else {
            normalizedScore = 100 - ((val - 1) * 25);
         }

         if (scores[q.pillar] !== undefined) {
            scores[q.pillar] += normalizedScore;
            counts[q.pillar]++;
         }
      });

      Object.keys(scores).forEach(k => {
         if (counts[k] > 0) scores[k] = Math.round(scores[k] / counts[k]);
      });

      const heartScore = (scores['Market'] + scores['Leadership'] + scores['Innovation'] + scores['People']) / 4;
      const walletScore = (scores['Operations'] + scores['Money'] + scores['Risk']) / 3;
      const THRESHOLD = 50;

      let archetype: Archetype = 'The Hidden Gem';

      if (businessProfile.industry === 'aquaculture') {
         archetype = determineAquacultureArchetype(scores);
      } else {
         if (heartScore >= THRESHOLD && walletScore >= THRESHOLD) archetype = 'The Sovereign';
         else if (heartScore >= THRESHOLD && walletScore < THRESHOLD) archetype = 'The Uncrowned King';
         else if (heartScore < THRESHOLD && walletScore >= THRESHOLD) archetype = 'The Iron General';
         else archetype = 'The Storm Survivor';
      }

      const sortedPillars = Object.entries(scores).sort(([, a], [, b]) => a - b);
      const silentKiller = sortedPillars[0][0];

      const finalScores = {
         operations: scores['Operations'],
         money: scores['Money'],
         market: scores['Market'],
         leadership: scores['Leadership'],
         innovation: scores['Innovation'],
         risk: scores['Risk'],
         people: scores['People']
      };

      // Use AI Generator
      let report: GeneratedReport | null = null;

      const sub = businessProfile.subIndustry;
      const ind = businessProfile.industry;

      const isAgroProcessing = ind === 'agriculture' && sub.startsWith('Agro-processing');
      const isProduceAggregation = businessProfile.industry === 'agriculture' && (businessProfile.subIndustry.startsWith('Produce aggregation') || businessProfile.subIndustry.startsWith('Export / cross-border'));


      const isGoat = businessProfile.industry === 'agriculture' && businessProfile.subIndustry.startsWith('Goat');
      const isSheep = businessProfile.industry === 'agriculture' && businessProfile.subIndustry.startsWith('Sheep');
      const { isPiggery, isPoultry, isDairy, isAgriInput, isFarmMachinery, isCropFarming, isCattle } = resolveIndustryFlags(businessProfile);

      const isMining = businessProfile.industry === 'mining' && !businessProfile.subIndustry.toLowerCase().includes('oil');
      const isOilGas = ind === 'mining' && sub.toLowerCase().includes('oil');

      const isFnbManufacturing = ind === 'manufacturing' && sub.startsWith('Food & beverage');
      const isTextileManufacturing = ind === 'manufacturing' && sub.startsWith('Textile');
      const isFurnitureManufacturing = ind === 'manufacturing' && sub.startsWith('Furniture');
      const isMetalManufacturing = ind === 'manufacturing' && sub.startsWith('Metal works');
      const isPlasticsManufacturing = ind === 'manufacturing' && sub.startsWith('Plastics');
      const isSoapManufacturing = ind === 'manufacturing' && sub.startsWith('Soap');
      const isBricksManufacturing = ind === 'manufacturing' && sub.startsWith('Bricks');
      const isWaterManufacturing = ind === 'manufacturing' && sub.startsWith('Bottled water');
      const isAssemblyManufacturing = ind === 'manufacturing' && sub.startsWith('Assembly');

      const isFashionRetail = ind === 'retail' && sub.startsWith('Fashion');
      const isHardwareRetail = ind === 'retail' && sub.startsWith('Hardware');
      const isElectronicsRetail = ind === 'retail' && sub.startsWith('Electronics');
      const isFmcgRetail = ind === 'retail' && (sub.startsWith('Supermarket') || sub.startsWith('FMCG'));

      const isAdaptiveFlow = assessmentQuestionSource === 'adaptive';

      if (isAdaptiveFlow) {
         const answerMap: Record<string, string> = {};
         finalAnswers.forEach((ans, idx) => {
            const q = sessionQuestions[idx];
            const answerText = ans === 1 ? `Strongly A: ${q.a}`
               : ans === 2 ? `Leaning A: ${q.a}`
                  : ans === 3 ? `Neutral`
                     : ans === 4 ? `Leaning B: ${q.b}`
                        : `Strongly B: ${q.b}`;
            answerMap[q.pillar + " Question " + (idx + 1)] = answerText;
         });

         report = await generateStrategicReport(finalScores, archetype, businessProfile, answerMap, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isAgroProcessing) {
         const agroAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            agroAnswers[q.id] = finalAnswers[idx] - 1; // Convert 1-5 to 0-4
         });
         report = await generateSignalBasedReport(agroAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isAgriInput) {
         const agriAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            agriAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(agriAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isProduceAggregation) {
         const produceAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            produceAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(produceAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isCropFarming) {
         const cropAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            cropAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(cropAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isCattle) {
         const cattleAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            cattleAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(cattleAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isGoat) {
         const goatAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            goatAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(goatAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isSheep) {
         const sheepAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            sheepAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(sheepAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isPiggery) {
         const piggeryAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            piggeryAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(piggeryAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isPoultry) {
         const poultryAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            poultryAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(poultryAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isDairy) {
         const dairyAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            dairyAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(dairyAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isMining) {
         const miningAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            miningAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(miningAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isOilGas) {
         const oilGasAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            oilGasAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(oilGasAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isFnbManufacturing) {
         const fnbAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            fnbAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(fnbAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isTextileManufacturing) {
         const textileAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            textileAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(textileAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isFurnitureManufacturing) {
         const furnitureAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            furnitureAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(furnitureAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isMetalManufacturing) {
         const metalAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            metalAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(metalAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isPlasticsManufacturing) {
         const plasticsAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            plasticsAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(plasticsAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isSoapManufacturing) {
         const soapAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            soapAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(soapAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isBricksManufacturing) {
         const bricksAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            bricksAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(bricksAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isWaterManufacturing) {
         const waterAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            waterAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(waterAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isAssemblyManufacturing) {
         const assemblyAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            assemblyAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(assemblyAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isFashionRetail) {
         const fashionAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            fashionAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(fashionAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isHardwareRetail) {
         const hardwareAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            hardwareAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(hardwareAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isElectronicsRetail) {
         const electronicsAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            electronicsAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(electronicsAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else if (isFmcgRetail) {
         const fmcgAnswers: Record<string, number> = {};
         sessionQuestions.forEach((q, idx) => {
            fmcgAnswers[q.id] = finalAnswers[idx] - 1;
         });
         report = await generateSignalBasedReport(fmcgAnswers, businessProfile, strengthsSkipped ? undefined : strengthsAnswers);
      } else {
         // Create a readable map of Question -> Answer
         const answerMap: Record<string, string> = {};
         finalAnswers.forEach((ans, idx) => {
            const q = sessionQuestions[idx];
            const answerText = ans === 1 ? `Strongly A: ${q.a}`
               : ans === 2 ? `Leaning A: ${q.a}`
                  : ans === 3 ? `Neutral`
                     : ans === 4 ? `Leaning B: ${q.b}`
                        : `Strongly B: ${q.b}`;
            answerMap[q.pillar + " Question " + (idx + 1)] = answerText;
         });

         report = await generateStrategicReport(finalScores, archetype, businessProfile, answerMap, strengthsSkipped ? undefined : strengthsAnswers);
      }

      if (!report) {
         console.error("Report generation failed: returned null");
         setIsError(true);
         return;
      }

      if (report) {
         report.profileContext = {
            ...businessProfile,
            assessmentQuestionSource,
            adaptiveQuestionBank: assessmentQuestionSource === 'adaptive' ? adaptiveQuestionBank : undefined
         };
      }
      setGeneratedReport(report);

      setResults({
         scores: finalScores,
         archetype,
         silentKiller,
         indices: calculateLeakIndices(finalScores)
      });

      setStep('result');
   };

   // --- RENDERERS ---

   if (step === 'setup') {
      // ... (setup phase rendering remains identical)
      return (
         <div className="min-h-screen bg-[#FAFAFB] font-sans text-slate-800 flex flex-col">
            {/* Minimal Header */}
            <div className="px-8 py-6 flex justify-between items-center bg-white border-b border-gray-100 sticky top-0 z-20">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">P</div>
                  <span className="font-semibold text-lg tracking-tight">Profit DNA Profile</span>
               </div>
               <div className="text-sm font-medium text-slate-400">Step {setupPhase} of 4</div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-4xl mx-auto w-full animate-fade-in-up">

               {/* PHASE 1: INDUSTRY */}
               {setupPhase === 1 && (
                  <div className="w-full">
                     <h1 className="text-3xl font-bold text-center mb-2">What is your primary industry?</h1>
                     <p className="text-slate-500 text-center mb-10 text-lg">We use this to benchmark your profit metrics.</p>

                     <div className="relative mb-8 max-w-lg mx-auto">
                        <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                        <input
                           type="text"
                           placeholder="Search (e.g. Retail, Tech, Health)..."
                           className="w-full pl-12 py-3.5 bg-white border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
                           value={industrySearch}
                           onChange={(e) => setIndustrySearch(e.target.value)}
                        />
                     </div>

                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {INDUSTRY_TAXONOMY.filter(c => c.label.toLowerCase().includes(industrySearch.toLowerCase())).map(cat => (
                           <div key={cat.id} className="relative group">
                              <button
                                 onClick={() => setSelectedCategory(selectedCategory?.id === cat.id ? null : cat)}
                                 className={`w-full flex flex-col items-center p-6 rounded-2xl border transition-all duration-200 ${selectedCategory?.id === cat.id ? 'bg-slate-900 text-white border-slate-900 shadow-lg transform scale-[1.02]' : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-md text-slate-600'}`}
                              >
                                 {(() => { const Icon = getIcon(cat.iconName); return <Icon className="w-8 h-8 mb-3" /> })()}
                                 <span className="font-bold text-sm text-center">{cat.label}</span>
                              </button>
                           </div>
                        ))}
                     </div>

                     {selectedCategory && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm p-4 animate-in fade-in zoom-in-95">
                           <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-full max-w-lg overflow-hidden">
                              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                                 <h3 className="font-bold text-lg">Select Sub-Industry</h3>
                                 <button onClick={() => setSelectedCategory(null)}><X className="w-5 h-5 text-gray-400" /></button>
                              </div>
                              <div className="p-2 max-h-[60vh] overflow-y-auto">
                                 {selectedCategory.subIndustries.map(sub => (
                                    <button
                                       key={sub}
                                       onClick={() => handleIndustrySelect(selectedCategory.id, sub)}
                                       className="w-full text-left px-6 py-4 hover:bg-slate-50 text-slate-700 font-medium border-b border-gray-50 last:border-0 transition-colors"
                                    >
                                       {sub}
                                    </button>
                                 ))}
                              </div>
                           </div>
                        </div>
                     )}
                  </div>
               )}

               {/* PHASE 2: IDENTITY (New) */}
               {setupPhase === 2 && (
                  <div className="w-full max-w-lg">
                     <button onClick={() => setSetupPhase(1)} className="mb-8 text-sm font-bold text-slate-400 hover:text-slate-800 flex items-center gap-1">
                        <ChevronLeft className="w-4 h-4" /> Back
                     </button>
                     <h1 className="text-3xl font-bold text-center mb-2">Create Your Profile</h1>
                     <p className="text-slate-500 text-center mb-10 text-lg">Personalize your report metadata.</p>

                     <div className="space-y-6">
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-2">Business Name</label>
                           <input
                              type="text"
                              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-black focus:border-black text-lg"
                              placeholder="e.g. Acme Corp"
                              value={businessProfile.businessName}
                              onChange={e => setBusinessProfile({ ...businessProfile, businessName: e.target.value })}
                           />
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                           <input
                              type="text"
                              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-black focus:border-black text-lg"
                              placeholder="e.g. Jane Doe"
                              value={businessProfile.userName}
                              onChange={e => setBusinessProfile({ ...businessProfile, userName: e.target.value })}
                           />
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-2">Your Title</label>
                           <input
                              type="text"
                              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-black focus:border-black text-lg"
                              placeholder="e.g. Founder, CEO, Ops Manager"
                              value={businessProfile.userTitle}
                              onChange={e => setBusinessProfile({ ...businessProfile, userTitle: e.target.value })}
                           />
                        </div>
                     </div>

                     <div className="mt-10 flex justify-end">
                        <button
                           onClick={() => setSetupPhase(3)}
                           disabled={!businessProfile.businessName || !businessProfile.userName}
                           className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                        >
                           Next Step <ArrowRight className="w-5 h-5" />
                        </button>
                     </div>
                  </div>
               )}

               {/* PHASE 3: GOALS */}
               {setupPhase === 3 && (
                  <div className="w-full max-w-3xl">
                     <button onClick={() => setSetupPhase(2)} className="mb-8 text-sm font-bold text-slate-400 hover:text-slate-800 flex items-center gap-1">
                        <ChevronLeft className="w-4 h-4" /> Back
                     </button>
                     <h1 className="text-3xl font-bold text-center mb-2">What is your top priority right now?</h1>
                     <p className="text-slate-500 text-center mb-10 text-lg">Select up to 2 goals to tailor your action plan.</p>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {UNIVERSAL_GOALS.map(goal => (
                           <button
                              key={goal}
                              onClick={() => handleGoalToggle(goal)}
                              className={`p-6 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between ${businessProfile.goals.includes(goal) ? 'border-teal-500 bg-teal-50/50 text-teal-900 shadow-sm' : 'border-gray-100 bg-white text-slate-600 hover:border-gray-300'}`}
                              disabled={businessProfile.goals.length >= 2 && !businessProfile.goals.includes(goal)}
                           >
                              <span className="font-bold text-lg">{goal}</span>
                              {businessProfile.goals.includes(goal) && <CheckCircle2 className="w-6 h-6 text-teal-600" />}
                           </button>
                        ))}
                     </div>

                     <div className="mt-10 flex justify-end">
                        <button
                           onClick={() => setSetupPhase(4)}
                           disabled={businessProfile.goals.length === 0}
                           className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                        >
                           Next Step <ArrowRight className="w-5 h-5" />
                        </button>
                     </div>
                  </div>
               )}


               {/* PHASE 4: SIZE */}
               {setupPhase === 4 && (
                  <div className="w-full max-w-3xl">
                     <button onClick={() => setSetupPhase(3)} className="mb-8 text-sm font-bold text-slate-400 hover:text-slate-800 flex items-center gap-1">
                        <ChevronLeft className="w-4 h-4" /> Back
                     </button>
                     <h1 className="text-3xl font-bold text-center mb-2">How big is the team?</h1>
                     <p className="text-slate-500 text-center mb-10 text-lg">We adapt the "Tribe" questions based on your headcount.</p>

                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {TEAM_SIZES.map(s => (
                           <button
                              key={s.id}
                              onClick={() => setBusinessProfile({ ...businessProfile, size: s.id as any })}
                              className={`p-6 rounded-xl border-2 text-center transition-all duration-200 ${businessProfile.size === s.id ? 'border-slate-900 bg-slate-900 text-white shadow-lg' : 'border-gray-100 bg-white text-slate-600 hover:border-gray-300'}`}
                           >
                              <div className="text-lg font-bold mb-1">{s.label}</div>
                              <div className={`text-sm ${businessProfile.size === s.id ? 'text-slate-400' : 'text-slate-400'}`}>{s.sub}</div>
                           </button>
                        ))}
                     </div>

                     <div className="bg-white p-6 rounded-xl border border-gray-100 flex flex-col md:flex-row gap-6 items-center justify-between mb-10">
                        <div className="text-sm text-slate-600">
                           <p className="font-bold mb-1 text-slate-900">Optional Context</p>
                           Does your headcount include contractors or volunteers?
                        </div>
                        <div className="flex gap-4">
                           <label className="flex items-center gap-2 cursor-pointer bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-100">
                              <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" checked={businessProfile.includesContractors} onChange={() => setBusinessProfile({ ...businessProfile, includesContractors: !businessProfile.includesContractors })} />
                              <span className="text-sm font-medium">Contractors</span>
                           </label>
                           <label className="flex items-center gap-2 cursor-pointer bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-100">
                              <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500" checked={businessProfile.includesVolunteers} onChange={() => setBusinessProfile({ ...businessProfile, includesVolunteers: !businessProfile.includesVolunteers })} />
                              <span className="text-sm font-medium">Volunteers</span>
                           </label>
                        </div>
                     </div>

                     <div className="flex justify-end">
                        <button
                           onClick={() => {
                              if (businessProfile.industry === 'agro_processing' || businessProfile.industry === 'agri_input') {
                                 setSetupPhase(5);
                              } else {
                                 setStep('intro');
                              }
                           }}
                           className="bg-teal-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition-all flex items-center gap-2 shadow-lg shadow-teal-900/20"
                        >
                           {['agro_processing', 'agri_input'].includes(businessProfile.industry || '') ? 'Next: Operations' : 'Complete Profile'} <CheckCircle2 className="w-5 h-5" />
                        </button>
                     </div>
                  </div>
               )}

               {/* PHASE 5: AGRO DETAILS */}
               {setupPhase === 5 && (
                  <div className="w-full max-w-3xl">
                     <button onClick={() => setSetupPhase(4)} className="mb-8 text-sm font-bold text-slate-400 hover:text-slate-800 flex items-center gap-1">
                        <ChevronLeft className="w-4 h-4" /> Back
                     </button>
                     <h1 className="text-3xl font-bold text-center mb-2">
                        {businessProfile.industry === 'agri_input' ? 'Agri-Input Details' : 'Agro-Processing Deep Dive'}
                     </h1>
                     <p className="text-slate-500 text-center mb-10 text-lg">We need these details to calculate your specific efficiency indices.</p>

                     <div className="space-y-8 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">

                        {/* Sub-Sector */}
                        <div>
                           <label className="block text-sm font-bold text-gray-900 mb-3">Line Type / Sub-Sector</label>
                           <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                              {(businessProfile.industry === 'agri_input'
                                 ? ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies', 'Equipment']
                                 : ['Milling', 'Drying', 'Packaging', 'Juices', 'Oils']
                              ).map(sub => (
                                 <button
                                    key={sub}
                                    onClick={() => setBusinessProfile({ ...businessProfile, agroSubSector: sub as any })}
                                    className={`px-3 py-2 rounded-lg text-sm font-bold border transition-all ${businessProfile.agroSubSector === sub ? 'bg-slate-900 text-white border-slate-900' : 'bg-gray-50 text-slate-600 border-gray-200 hover:border-gray-300'}`}
                                 >
                                    {sub}
                                 </button>
                              ))}
                           </div>
                        </div>

                        {/* Shifts & Capacity */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div>
                              <label className="block text-sm font-bold text-gray-900 mb-3">Shifts & Days</label>
                              <div className="flex gap-4">
                                 <select
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                                    value={businessProfile.shiftsPerDay || 1}
                                    onChange={e => setBusinessProfile({ ...businessProfile, shiftsPerDay: parseInt(e.target.value) })}
                                 >
                                    <option value={1}>1 Shift / Day</option>
                                    <option value={2}>2 Shifts / Day</option>
                                    <option value={3}>3 Shifts / Day</option>
                                 </select>
                                 <select
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                                    value={businessProfile.daysPerWeek || 5}
                                    onChange={e => setBusinessProfile({ ...businessProfile, daysPerWeek: parseInt(e.target.value) })}
                                 >
                                    <option value={5}>5 Days / Week</option>
                                    <option value={6}>6 Days / Week</option>
                                    <option value={7}>7 Days / Week</option>
                                 </select>
                              </div>
                           </div>
                           <div>
                              <label className="block text-sm font-bold text-gray-900 mb-3">Rated Capacity</label>
                              <input
                                 type="text"
                                 placeholder="e.g. 5 tons/day or 10k units/week"
                                 className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                                 value={businessProfile.capacity || ''}
                                 onChange={e => setBusinessProfile({ ...businessProfile, capacity: e.target.value })}
                              />
                           </div>
                        </div>

                        {/* Compliance */}
                        <div>
                           <label className="block text-sm font-bold text-gray-900 mb-3">Compliance Level</label>
                           <div className="grid grid-cols-3 gap-3">
                              {[
                                 { val: 'informal', label: 'Informal / Basic' },
                                 { val: 'basic', label: 'Registered / Standard' },
                                 { val: 'audit-ready', label: 'Audit-Ready / Certified' }
                              ].map(opt => (
                                 <button
                                    key={opt.val}
                                    onClick={() => setBusinessProfile({ ...businessProfile, complianceLevel: opt.val as any })}
                                    className={`px-3 py-3 rounded-lg text-sm font-bold border transition-all text-center ${businessProfile.complianceLevel === opt.val ? 'bg-teal-600 text-white border-teal-600' : 'bg-gray-50 text-slate-600 border-gray-200 hover:border-gray-300'}`}
                                 >
                                    {opt.label}
                                 </button>
                              ))}
                           </div>
                        </div>

                        {/* Operating Model */}
                        <div>
                           <label className="block text-sm font-bold text-gray-900 mb-3">Operating Model</label>
                           <div className="grid grid-cols-3 gap-3">
                              {['Manual', 'Semi-Automated', 'Fully Automated'].map(model => (
                                 <button
                                    key={model}
                                    onClick={() => setBusinessProfile({ ...businessProfile, operatingModel: model as any })}
                                    className={`px-3 py-3 rounded-lg text-sm font-bold border transition-all text-center ${businessProfile.operatingModel === model ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-gray-50 text-slate-600 border-gray-200 hover:border-gray-300'}`}
                                 >
                                    {model}
                                 </button>
                              ))}
                           </div>
                        </div>

                        {/* Sales Channels */}
                        <div>
                           <label className="block text-sm font-bold text-gray-900 mb-3">Primary Sales Channels</label>
                           <div className="flex flex-wrap gap-2">
                              {['Local Market', 'Wholesale', 'Modern Retail', 'Export'].map(channel => {
                                 const isActive = businessProfile.salesChannels?.includes(channel);
                                 return (
                                    <button
                                       key={channel}
                                       onClick={() => {
                                          const current = businessProfile.salesChannels || [];
                                          const updated = isActive
                                             ? current.filter(c => c !== channel)
                                             : [...current, channel];
                                          setBusinessProfile({ ...businessProfile, salesChannels: updated });
                                       }}
                                       className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${isActive ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 border-gray-300 hover:border-gray-400'}`}
                                    >
                                       {channel}
                                    </button>
                                 );
                              })}
                           </div>
                        </div>

                        {/* Products */}
                        <div>
                           <label className="block text-sm font-bold text-gray-900 mb-3">Top Products (comma separated)</label>
                           <input
                              type="text"
                              placeholder="e.g. Maize Flour Grade 1, Bran, Fortified Mix"
                              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                              value={businessProfile.products?.join(', ') || ''}
                              onChange={e => setBusinessProfile({ ...businessProfile, products: e.target.value.split(',').map(s => s.trim()) })}
                           />
                        </div>

                     </div>

                     <div className="flex justify-end mt-10">
                        <button
                           onClick={() => setStep('intro')}
                           className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-black transition-all flex items-center gap-2 shadow-lg shadow-slate-900/20"
                        >
                           Generate Deep Scan <CheckCircle2 className="w-5 h-5" />
                        </button>
                     </div>
                  </div>
               )}
            </div>
         </div>
      );
   }

   if (step === 'intro') {
      const quickScanCount = sessionQuestions.length || 14;
      return (
         <div className="min-h-screen bg-[#FAFAFB] flex items-center justify-center p-6 font-sans">
            <div className="max-w-xl w-full bg-white p-10 rounded-3xl shadow-xl text-center border border-gray-100 animate-fade-in-up">
               <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Activity className="w-8 h-8" />
               </div>
               <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Forensic Quick Scan</h2>
               <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  You will see paired statements. Neither is "good" or "bad"—they simply reflect how your business operates today.
                  <br /><br />
                  <span className="font-bold text-slate-800">Don't overthink it. Go with your gut.</span>
               </p>

               <div className="flex flex-col gap-4 text-sm text-slate-500 bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8 text-left">
                  <div className="flex items-center gap-3">
                     <Clock className="w-5 h-5 text-slate-400" /> Takes about 2-4 minutes ({quickScanCount} questions)
                  </div>
                  <div className="flex items-center gap-3">
                     <ShieldCheck className="w-5 h-5 text-slate-400" /> Results are private to you
                  </div>
                  <div className="flex items-center gap-3">
                     <Save className="w-5 h-5 text-slate-400" /> Auto-save enabled
                  </div>
               </div>

               <button
                  onClick={() => setStep('assessment')}
                  disabled={sessionQuestions.length === 0}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-black transition-all shadow-lg hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-40"
               >
                  Start Assessment
               </button>
            </div>
         </div>
      );
   }

   // ────────── STRENGTHS ASSESSMENT STEP ──────────
   if (step === 'strengths') {
      const currentSQ = STRENGTHS_PROXY_QUESTIONS[strengthsIndex];
      const totalSQ = STRENGTHS_PROXY_QUESTIONS.length;
      const progressPct = ((strengthsIndex) / totalSQ) * 100;

      return (
         <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 60%, #0c0a1a 100%)' }}>
            <div className="max-w-2xl mx-auto px-4 py-8">
               {/* Header */}
               <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                     <Brain className="w-6 h-6 text-purple-400" />
                     <span className="text-purple-300 font-bold text-sm uppercase tracking-wider">Talent DNA Assessment</span>
                  </div>
                  <span className="text-slate-400 text-sm">{strengthsIndex + 1} / {totalSQ}</span>
               </div>

               {/* Progress Bar */}
               <div className="mb-8">
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${progressPct}%` }} />
                  </div>
               </div>

               {/* Question Card */}
               <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(124, 58, 237, 0.2)' }}>
                  <p className="text-slate-300 text-center text-sm mb-6">Which statement feels more true about how your business operates today?</p>

                  {/* Option A */}
                  <button
                     onClick={() => {
                        setStrengthsAnswers(prev => [...prev, 1]);
                        if (strengthsIndex + 1 < totalSQ) {
                           setStrengthsIndex(strengthsIndex + 1);
                        } else {
                           setStep('assessment');
                        }
                     }}
                     className="w-full text-left p-5 rounded-xl mb-4 transition-all hover:-translate-y-0.5"
                     style={{
                        background: 'rgba(124, 58, 237, 0.06)',
                        border: '1px solid rgba(124, 58, 237, 0.15)',
                        color: '#e2e8f0'
                     }}
                     onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(124, 58, 237, 0.15)';
                        e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.4)';
                     }}
                     onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(124, 58, 237, 0.06)';
                        e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.15)';
                     }}
                  >
                     <span className="text-purple-400 font-bold text-xs mr-2">A</span>
                     {currentSQ.statementA}
                  </button>

                  {/* Neutral */}
                  <button
                     onClick={() => {
                        setStrengthsAnswers(prev => [...prev, 3]);
                        if (strengthsIndex + 1 < totalSQ) {
                           setStrengthsIndex(strengthsIndex + 1);
                        } else {
                           setStep('assessment');
                        }
                     }}
                     className="w-full text-center p-3 rounded-lg mb-4 text-slate-500 text-sm hover:text-slate-300 transition-all"
                     style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                  >
                     Both equally apply
                  </button>

                  {/* Option B */}
                  <button
                     onClick={() => {
                        setStrengthsAnswers(prev => [...prev, 5]);
                        if (strengthsIndex + 1 < totalSQ) {
                           setStrengthsIndex(strengthsIndex + 1);
                        } else {
                           setStep('assessment');
                        }
                     }}
                     className="w-full text-left p-5 rounded-xl transition-all hover:-translate-y-0.5"
                     style={{
                        background: 'rgba(59, 130, 246, 0.06)',
                        border: '1px solid rgba(59, 130, 246, 0.15)',
                        color: '#e2e8f0'
                     }}
                     onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                     }}
                     onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.06)';
                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.15)';
                     }}
                  >
                     <span className="text-blue-400 font-bold text-xs mr-2">B</span>
                     {currentSQ.statementB}
                  </button>
               </div>

               {/* Skip Link */}
               <div className="mt-6 text-center">
                  <button
                     onClick={() => {
                        setStrengthsSkipped(true);
                        setStep('assessment');
                     }}
                     className="text-slate-600 text-xs hover:text-slate-400 transition-colors underline"
                  >
                     Skip Talent DNA Assessment →
                  </button>
               </div>
            </div>
         </div>
      );
   }

   // ... (Assessment step same as before) ...
   if (step === 'assessment') {
      const currentQ = sessionQuestions[questionIndex];
      const progress = ((questionIndex + 1) / sessionQuestions.length) * 100;

      return (
         <div className="min-h-screen bg-[#FAFAFB] font-sans text-slate-800 flex flex-col">
            <div className="bg-white border-b border-gray-200 sticky top-0 z-30 pt-6 pb-4 px-6 md:px-12">
               <div className="max-w-4xl mx-auto">
                  <div className="flex justify-between items-end mb-3">
                     <div>
                        <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-1 block">Pillar {['Operations', 'Money', 'Market', 'Leadership', 'Innovation', 'Risk', 'People'].indexOf(currentQ.pillar) + 1} of 7</span>
                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                           {currentQ.pillar} <span className="text-slate-300">|</span>
                           <span className="text-base font-normal text-slate-500">
                              {questionIndex % 2 === 0 ? 'Operations & Style' : 'Risk & Consistency'}
                           </span>
                        </h2>
                     </div>
                     <span className="text-sm font-bold text-slate-400">{questionIndex + 1} / {sessionQuestions.length}</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                     <div className="bg-teal-500 h-full rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
                  </div>
               </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-6 animate-fade-in relative">
               <div className={`max-w-4xl w-full transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                  <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 md:p-12">
                     <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center mb-12">
                        <div className="flex-1 text-center md:text-right">
                           <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed">"{currentQ.a}"</p>
                        </div>
                        <div className="hidden md:block w-px h-24 bg-gray-200"></div>
                        <div className="md:hidden w-24 h-px bg-gray-200"></div>
                        <div className="flex-1 text-center md:text-left">
                           <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed">"{currentQ.b}"</p>
                        </div>
                     </div>

                     <div className="max-w-2xl mx-auto">
                        <div className="flex justify-between items-center mb-4 px-2">
                           <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Strongly A</span>
                           <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Strongly B</span>
                        </div>

                        <div className="relative h-16 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-between px-2 md:px-4">
                           <div className="absolute left-8 right-8 top-1/2 h-0.5 bg-gray-200 -z-0"></div>
                           {LEANING_SCALE.map((point) => (
                              <button
                                 key={point.value}
                                 onClick={() => handleAnswer(point.value)}
                                 className="relative z-10 group focus:outline-none"
                              >
                                 <div className={`
                                   transition-all duration-300 ease-out rounded-full border-4 border-white shadow-sm flex items-center justify-center
                                   ${hoveredOption === point.value ? 'w-14 h-14 -mt-2 shadow-md' : 'w-10 h-10'}
                                   ${point.color}
                                `}
                                    onMouseEnter={() => setHoveredOption(point.value)}
                                    onMouseLeave={() => setHoveredOption(null)}
                                 >
                                    <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                                 </div>
                                 <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap text-xs font-bold text-slate-600 transition-opacity duration-200 ${hoveredOption === point.value ? 'opacity-100' : 'opacity-0'}`}>
                                    {point.label}
                                 </div>
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="text-center mt-8">
                     <p className="text-sm text-slate-400 font-medium">
                        Asking for: <span className="text-slate-600 font-bold">{businessProfile.industry} / {businessProfile.subIndustry}</span> context
                     </p>
                  </div>
               </div>
            </div>
         </div>
      );
   }

   if (isError) {
      return (
         <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white p-4">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
               <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <h2 className="text-3xl font-bold mb-2 text-center">Connection Interrupted</h2>
            <p className="text-slate-400 text-lg mb-8 text-center max-w-md">
               We couldn't generate your report due to a connection issue with our AI engine.
            </p>
            <div className="flex gap-4">
               <button
                  onClick={() => {
                     setIsError(false);
                     calculateResults(answers);
                  }}
                  className="px-8 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center gap-2"
               >
                  <RefreshCw className="w-4 h-4" /> Retry Analysis
               </button>
               <button
                  onClick={() => {
                     setIsError(false);
                     setStep('setup');
                  }}
                  className="px-8 py-3 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
               >
                  Restart
               </button>
            </div>
         </div>
      );
   }

   if (step === 'analyzing') {
      return (
         <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white">
            <div className="relative">
               <div className="w-24 h-24 border-4 border-slate-700 rounded-full"></div>
               <div className="absolute top-0 left-0 w-24 h-24 border-4 border-t-teal-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
            <h2 className="text-3xl font-bold mt-8 mb-2 animate-pulse">Triangulating Profit Leaks...</h2>
            <p className="text-slate-400 text-lg">Comparing against {businessProfile.industry || 'Global'} benchmarks.</p>
            <p className="text-slate-500 text-sm mt-4">Powered by AI Analysis Engine</p>
         </div>
      );
   }

   if (step === 'result' && results) {
      const selectedPlan = 'basic';

      const quizCopy = businessProfile.industry === 'aquaculture' ? AQUACULTURE_QUIZ_COPY
         : businessProfile.industry === 'agro_processing' ? AGRO_PROCESSING_QUIZ_COPY
            : businessProfile.industry === 'mining' ? MINING_QUIZ_COPY
               : businessProfile.industry === 'oil_gas_services' ? OIL_GAS_QUIZ_COPY
                  : businessProfile.industry === 'retail' && FASHION_SUB_INDUSTRIES.includes(businessProfile.subIndustry) ? FASHION_QUIZ_COPY
                     : businessProfile.industry === 'retail' && HARDWARE_SUB_INDUSTRIES.includes(businessProfile.subIndustry) ? HARDWARE_QUIZ_COPY
                        : businessProfile.industry === 'retail' && ELECTRONICS_SHOP_SUB_INDUSTRIES.includes(businessProfile.subIndustry) ? ELECTRONICS_QUIZ_COPY
                           : businessProfile.industry === 'retail' && FMCG_SUB_INDUSTRIES.includes(businessProfile.subIndustry) ? FMCG_QUIZ_COPY
                              : businessProfile.industry === 'retail' && STATIONERY_SUB_INDUSTRIES.includes(businessProfile.subIndustry) ? STATIONERY_QUIZ_COPY
                                 : businessProfile.industry === 'retail' && SPARE_PARTS_SUB_INDUSTRIES.includes(businessProfile.subIndustry) ? SPARE_PARTS_QUIZ_COPY
                                    : businessProfile.industry === 'manufacturing' && FNB_SUB_INDUSTRIES.includes(businessProfile.subIndustry) ? FNB_QUIZ_COPY
                                       : businessProfile.industry === 'manufacturing' && TEXTILE_SUB_INDUSTRIES.includes(businessProfile.subIndustry) ? TEXTILE_QUIZ_COPY
                                          : businessProfile.industry === 'manufacturing' && FURNITURE_SUB_INDUSTRIES.includes(businessProfile.subIndustry) ? FURNITURE_QUIZ_COPY
                                             : businessProfile.industry === 'manufacturing' && METAL_SUB_INDUSTRIES.includes(businessProfile.subIndustry) ? METAL_QUIZ_COPY
                                                : businessProfile.industry === 'manufacturing' && PLASTICS_SUB_INDUSTRIES.includes(businessProfile.subIndustry) ? PLASTICS_QUIZ_COPY
                                                   : businessProfile.industry === 'manufacturing' && SOAP_SUB_INDUSTRIES.includes(businessProfile.subIndustry) ? SOAP_QUIZ_COPY
                                                      : businessProfile.industry === 'manufacturing' && BRICKS_SUB_INDUSTRIES.includes(businessProfile.subIndustry) ? BRICKS_QUIZ_COPY
                                                         : businessProfile.industry === 'manufacturing' && WATER_SUB_INDUSTRIES.includes(businessProfile.subIndustry) ? WATER_QUIZ_COPY
                                                            : businessProfile.industry === 'manufacturing' && ASSEMBLY_SUB_INDUSTRIES.includes(businessProfile.subIndustry) ? ASSEMBLY_QUIZ_COPY
                                                               : null;

      const specificHook = quizCopy ? (quizCopy as any)[results.silentKiller] : null;

      return (
         <div className="min-h-screen bg-[#FAFAFB] p-8 flex items-center justify-center">
            <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-10 text-center animate-scale-in">
               <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 font-bold text-sm uppercase tracking-wide mb-6">
                  Analysis Complete
               </span>

               <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
                  You are "{results.archetype}"
               </h1>
               {specificHook ? (
                  <>
                     <p className="text-xl text-slate-500 mb-6 max-w-lg mx-auto">
                        Your biggest profit leak is <strong>{results.silentKiller}</strong>.
                     </p>
                     <div className="bg-slate-50 rounded-2xl p-6 mb-10 border border-slate-100 text-left">
                        <div className="flex items-start gap-4 mb-4">
                           <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                           <div>
                              <h3 className="font-bold text-slate-900 mb-1">
                                 Signal: {specificHook.detection}
                              </h3>
                              <p className="text-sm text-slate-600">
                                 Typically costs you: {specificHook.cost}
                              </p>
                           </div>
                        </div>
                        <div className="pl-10">
                           <p className="text-sm font-bold text-teal-700">
                              Solution: {specificHook.cliffhanger}
                           </p>
                        </div>
                     </div>
                  </>
               ) : (
                  <>
                     <p className="text-xl text-slate-500 mb-10 max-w-lg mx-auto">
                        Your business has strong potential, but a silent leak in your <strong>{results.silentKiller}</strong> pillar is capping your growth.
                     </p>

                     <div className="bg-slate-50 rounded-2xl p-6 mb-10 border border-slate-100 text-left">
                        <div className="flex items-center gap-4 mb-4">
                           <AlertTriangle className="w-6 h-6 text-amber-500" />
                           <h3 className="font-bold text-slate-900">Critical Risk Detected</h3>
                        </div>
                        <p className="text-slate-600 mb-2">
                           Your <strong>{results.silentKiller}</strong> score is significantly below the benchmark for {businessProfile.industry}.
                        </p>
                        <p className="text-sm font-bold text-slate-800">
                           Est. Monthly Loss: {results.indices.cashLeak > 50 ? 'High' : 'Moderate'}
                        </p>
                     </div>
                  </>
               )}

               <button
                  onClick={() => onComplete(results.archetype, results.scores, selectedPlan, generatedReport || undefined)}
                  className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
               >
                  View Mission Brief <ArrowRight className="w-5 h-5" />
               </button>
            </div>
         </div>
      );
   }

   return null;
};

export default Diagnostic;

const determineAquacultureArchetype = (scores: Record<string, number>): Archetype => {
   const get = (...keys: string[]) => {
      for (const key of keys) {
         const value = scores[key];
         if (typeof value === 'number') return value;
      }
      return 0;
   };

   const operations = get('Operations', 'Engine');
   const money = get('Money', 'Fuel');
   const market = get('Market', 'Voice');
   const leadership = get('Leadership', 'Brain');
   const innovation = get('Innovation', 'Pulse');
   const risk = get('Risk', 'Shield');

   const normalizedScores: Record<string, number> = {
      Operations: operations,
      Money: money,
      Market: market,
      Leadership: leadership,
      Innovation: innovation,
      Risk: risk,
      People: get('People', 'Tribe')
   };

   const minPillar = Object.entries(normalizedScores).sort(([, a], [, b]) => a - b)[0][0];

   // 1. Market Taker (Market low)
   if (minPillar === 'Market' || market <= 40) return 'The Market Taker';

   // 2. Fragile Winner (Risk low, Market/Money high)
   if (minPillar === 'Risk' && (market >= 60 || money >= 60)) return 'The Fragile Winner';

   // 3. Silent Leak (Money low)
   if (minPillar === 'Money' || money <= 40) return 'The Silent Leak';

   // 4. Busy Operator (Leadership low, Operations reasonable)
   if (minPillar === 'Leadership' && operations >= 50) return 'The Busy Operator';

   // 5. Growth Chaser (Innovation/Operations high, Money/Leadership low)
   if ((innovation >= 60 || operations >= 60) && (money <= 40 || leadership <= 40)) return 'The Growth Chaser';

   // 6. Control Builder (Leadership/Risk/Operations high)
   if (leadership >= 60 && risk >= 60 && operations >= 60) return 'The Control Builder';

   // Fallbacks
   if (minPillar === 'Innovation') return 'The Growth Chaser';
   if (minPillar === 'Risk') return 'The Fragile Winner';
   if (minPillar === 'Leadership') return 'The Busy Operator';

   return 'The Busy Operator';
};

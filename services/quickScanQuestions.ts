import { BusinessProfile } from '../types';
import { AGRO_PACK } from '../data/agro';
import { INPUT_SUPPLY_PACK } from '../data/input_supply';
import { PRODUCE_PACK } from '../data/produce';
import { CROP_FARMING_PACK } from '../data/cropFarming';
import { CATTLE_PACK } from '../data/cattle';
import { GOAT_PACK } from '../data/goat';
import { SHEEP_PACK } from '../data/sheep';
import { PIGGERY_PACK } from '../data/piggery';
import { POULTRY_PACK } from '../data/poultry';
import { DAIRY_PACK } from '../data/dairy';
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
import { ASSEMBLY_PACK } from '../data/assembly';
import { FASHION_PACK } from '../data/fashion';
import { HARDWARE_PACK } from '../data/hardware';
import { ELECTRONICS_PACK } from '../data/electronics';
import { FMCG_PACK } from '../data/fmcg';
import { STATIONERY_PACK } from '../data/stationery';
import { SPARE_PARTS_PACK } from '../data/spareParts';
import { getGoalPillars } from '../data/goalLibrary';
import {
  INDUSTRY_TAXONOMY,
  QUICK_SCAN_QUESTIONS
} from '../data/industryContext';

export interface QuickScanQuestion {
  id: string;
  pillar: string;
  a: string;
  b: string;
  isSwapped: boolean;
  isGoalRelevant: boolean;
}

export type QuickScanQuestionMode = 'pack' | 'generic';

interface QuickScanQuestionSelection {
  questions: QuickScanQuestion[];
  mode: QuickScanQuestionMode;
}

interface PackQuestionLike {
  qid: string;
  pillar: string;
  textA: string;
  textB: string;
  line_type?: string[];
}

const QUICK_SCAN_QID_RE = /(^QS[_-])|(_QS[_-])|(-QS[_-])/i;
const DEEP_SCAN_QID_RE = /(^DS[_-])|(_DS[_-])|(-DS[_-])/i;

const isQuickScanQid = (qid: string): boolean => QUICK_SCAN_QID_RE.test(String(qid || ''));
const isDeepScanQid = (qid: string): boolean => DEEP_SCAN_QID_RE.test(String(qid || ''));

const toQuickScanSet = <T extends { qid: string }>(questions: T[]): T[] => {
  const quickScan = questions.filter((question) => isQuickScanQid(question.qid));
  if (quickScan.length > 0) return quickScan;

  const nonDeepScan = questions.filter((question) => !isDeepScanQid(question.qid));
  if (nonDeepScan.length > 0 && nonDeepScan.length < questions.length) return nonDeepScan;

  return questions;
};

const matchesLineType = (lineType: string[] | undefined, selectedLineType: string): boolean => {
  if (!Array.isArray(lineType) || lineType.length === 0) return true;
  if (lineType.includes('all')) return true;
  if (!selectedLineType) return true;
  return lineType.includes(selectedLineType);
};

const fromPack = (
  packQuestions: PackQuestionLike[],
  selectedLineType: string,
  options: { enforceLineType?: boolean } = {}
): QuickScanQuestionSelection => {
  const enforceLineType = options.enforceLineType !== false;

  const scoped = toQuickScanSet(packQuestions)
    .filter((question) => !enforceLineType || matchesLineType(question.line_type, selectedLineType))
    .map((question) => ({
      id: question.qid,
      pillar: question.pillar,
      a: question.textA,
      b: question.textB,
      isSwapped: false,
      isGoalRelevant: true
    }));

  return {
    questions: scoped,
    mode: 'pack'
  };
};

const fromGeneric = (profile: BusinessProfile): QuickScanQuestionSelection => {
  const primaryGoal = profile.goals?.[0] || '';

  const questions = QUICK_SCAN_QUESTIONS.map((question, idx) => {
    const category = INDUSTRY_TAXONOMY.find((item) => item.id === profile.industry);
    const variantKey = category ? category.lexiconKey : 'default';

    const variantText =
      question.variants[profile.industry || ''] ||
      question.variants[variantKey] ||
      question.variants.default;

    if (!variantText) return null;

    const swap = Math.random() > 0.5;

    return {
      id: `QS-${question.pillar}-${idx}`,
      pillar: question.pillar,
      a: swap ? variantText.b : variantText.a,
      b: swap ? variantText.a : variantText.b,
      isSwapped: swap,
      isGoalRelevant: getGoalPillars(primaryGoal).includes(question.pillar)
    } as QuickScanQuestion;
  }).filter(Boolean) as QuickScanQuestion[];

  return {
    questions,
    mode: 'generic'
  };
};

export const buildStaticQuickScanQuestions = (
  profile: BusinessProfile
): QuickScanQuestionSelection => {
  const industry = profile.industry || '';
  const subIndustry = profile.subIndustry || '';
  const subIndustryLower = subIndustry.toLowerCase();

  const isAgroProcessing = industry === 'agriculture' && subIndustry.startsWith('Agro-processing');
  const isAgriInput = industry === 'agriculture' && subIndustry.startsWith('Input supplier');
  const isProduceAggregation = industry === 'agriculture' && (
    subIndustry.startsWith('Produce aggregation') ||
    subIndustry.startsWith('Export / cross-border')
  );
  const isCropFarming = industry === 'agriculture' && subIndustry.startsWith('Crop farming');
  const isCattle = industry === 'agriculture' && subIndustry.startsWith('Cattle');
  const isGoat = industry === 'agriculture' && subIndustry.startsWith('Goat');
  const isSheep = industry === 'agriculture' && subIndustry.startsWith('Sheep');
  const isPiggery = industry === 'agriculture' && subIndustryLower.includes('pig');
  const isPoultry = industry === 'agriculture' && subIndustryLower.includes('poultry');
  const isDairy = industry === 'agriculture' && (subIndustryLower.includes('dairy') || subIndustryLower.includes('milk'));

  const isMining = industry === 'mining' && !subIndustryLower.includes('oil');
  const isOilGas = industry === 'mining' && subIndustryLower.includes('oil');

  const isFnbManufacturing = industry === 'manufacturing' && subIndustry.startsWith('Food & beverage');
  const isTextileManufacturing = industry === 'manufacturing' && subIndustry.startsWith('Textile');
  const isFurnitureManufacturing = industry === 'manufacturing' && subIndustry.startsWith('Furniture');
  const isMetalManufacturing = industry === 'manufacturing' && subIndustry.startsWith('Metal works');
  const isPlasticsManufacturing = industry === 'manufacturing' && subIndustry.startsWith('Plastics');
  const isSoapManufacturing = industry === 'manufacturing' && subIndustry.startsWith('Soap');
  const isBricksManufacturing = industry === 'manufacturing' && subIndustry.startsWith('Bricks');
  const isWaterManufacturing = industry === 'manufacturing' && subIndustry.startsWith('Bottled water');
  const isAssemblyManufacturing = industry === 'manufacturing' && subIndustry.startsWith('Assembly');

  const isFashionRetail = industry === 'retail' && subIndustry.startsWith('Fashion');
  const isHardwareRetail = industry === 'retail' && subIndustry.startsWith('Hardware');
  const isElectronicsRetail = industry === 'retail' && subIndustry.startsWith('Electronics');
  const isFmcgRetail = industry === 'retail' && (
    subIndustry.startsWith('Supermarket') ||
    subIndustry.startsWith('FMCG')
  );
  const isStationeryRetail = industry === 'retail' && subIndustry.startsWith('Stationery');
  const isSparePartsRetail = industry === 'retail' && subIndustry.startsWith('Spare parts');

  if (isAgroProcessing) return fromPack(AGRO_PACK.questions, subIndustry, { enforceLineType: false });
  if (isAgriInput) return fromPack(INPUT_SUPPLY_PACK.questions, subIndustry, { enforceLineType: false });
  if (isProduceAggregation) return fromPack(PRODUCE_PACK.questions, subIndustry);
  if (isCropFarming) return fromPack(CROP_FARMING_PACK.questions, subIndustry);
  if (isCattle) return fromPack(CATTLE_PACK.questions, subIndustry);
  if (isGoat) return fromPack(GOAT_PACK.questions, subIndustry);
  if (isSheep) return fromPack(SHEEP_PACK.questions, subIndustry);
  if (isPiggery) return fromPack(PIGGERY_PACK.questions, subIndustry);
  if (isPoultry) return fromPack(POULTRY_PACK.questions, subIndustry);
  if (isDairy) return fromPack(DAIRY_PACK.questions, subIndustry);

  if (isMining) return fromPack(MINING_PACK.questions, subIndustry);
  if (isOilGas) return fromPack(OIL_GAS_PACK.questions, subIndustry);

  if (isFnbManufacturing) return fromPack(FNB_PACK.questions, subIndustry);
  if (isTextileManufacturing) return fromPack(TEXTILE_PACK.questions, subIndustry);
  if (isFurnitureManufacturing) return fromPack(FURNITURE_PACK.questions, subIndustry);
  if (isMetalManufacturing) return fromPack(METAL_PACK.questions, subIndustry);
  if (isPlasticsManufacturing) return fromPack(PLASTICS_PACK.questions, subIndustry);
  if (isSoapManufacturing) return fromPack(SOAP_PACK.questions, subIndustry);
  if (isBricksManufacturing) return fromPack(BRICKS_PACK.questions, subIndustry);
  if (isWaterManufacturing) return fromPack(WATER_PACK.questions, subIndustry);
  if (isAssemblyManufacturing) return fromPack(ASSEMBLY_PACK.questions, subIndustry);

  if (isFashionRetail) return fromPack(FASHION_PACK.questions, subIndustry);
  if (isHardwareRetail) return fromPack(HARDWARE_PACK.questions, subIndustry);
  if (isElectronicsRetail) return fromPack(ELECTRONICS_PACK.questions, subIndustry);
  if (isFmcgRetail) return fromPack(FMCG_PACK.questions, subIndustry);
  if (isStationeryRetail) return fromPack(STATIONERY_PACK.questions, subIndustry);
  if (isSparePartsRetail) return fromPack(SPARE_PARTS_PACK.questions, subIndustry);

  return fromGeneric(profile);
};

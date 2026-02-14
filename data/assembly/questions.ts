import { QuestionDefinition } from '../../types';
import { CABLE_QUESTIONS } from './variants/cable';
import { BOX_QUESTIONS } from './variants/box';
import { REPAIR_QUESTIONS } from './variants/repair';
import { ELECTROMECH_QUESTIONS } from './variants/electromech';
import { AUTOMOTIVE_QUESTIONS } from './variants/automotive';
import { MEDICAL_QUESTIONS } from './variants/medical';

// Aggregate all variant questions
// The 'line_type' field in each question ensures they are only shown for the correct sub-industry
export const QUESTIONS: QuestionDefinition[] = [
  ...CABLE_QUESTIONS,
  ...BOX_QUESTIONS,
  ...REPAIR_QUESTIONS,
  ...ELECTROMECH_QUESTIONS,
  ...AUTOMOTIVE_QUESTIONS,
  ...MEDICAL_QUESTIONS
];


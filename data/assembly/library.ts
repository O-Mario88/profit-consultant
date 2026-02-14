import { LibraryItem } from '../../types';
import { CABLE_LIBRARY } from './variants/cable';
import { BOX_LIBRARY } from './variants/box';
import { REPAIR_LIBRARY } from './variants/repair';
import { ELECTROMECH_LIBRARY } from './variants/electromech';
import { AUTOMOTIVE_LIBRARY } from './variants/automotive';
import { MEDICAL_LIBRARY } from './variants/medical';

const ASSEMBLY_LIBRARY: LibraryItem[] = [
  ...CABLE_LIBRARY,
  ...BOX_LIBRARY,
  ...REPAIR_LIBRARY,
  ...ELECTROMECH_LIBRARY,
  ...AUTOMOTIVE_LIBRARY,
  ...MEDICAL_LIBRARY
];

export const ASSEMBLY_MISSION_BRIEFS: LibraryItem[] = []; // Populate or import if defined in variants

export { ASSEMBLY_LIBRARY };


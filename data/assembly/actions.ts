import { ActionDefinition } from '../../types';
import { CABLE_ACTIONS } from './variants/cable';
import { BOX_ACTIONS } from './variants/box';
import { REPAIR_ACTIONS } from './variants/repair';
import { ELECTROMECH_ACTIONS } from './variants/electromech';
import { AUTOMOTIVE_ACTIONS } from './variants/automotive';
import { MEDICAL_ACTIONS } from './variants/medical';

// We export 'snippets' which is the ActionDefinition[] expected by the pack
export const ASSEMBLY_ACTIONS = {
  snippets: [
    ...CABLE_ACTIONS,
    ...BOX_ACTIONS,
    ...REPAIR_ACTIONS,
    ...ELECTROMECH_ACTIONS,
    ...AUTOMOTIVE_ACTIONS,
    ...MEDICAL_ACTIONS
  ],
  fixPlans7Day: [], // TODO: Add specific fix plans if defined
  fixPlans30Day: []
};



import { IndustryPack } from '../../types';
import { questions } from './questions';
import { library } from './library';
import { actions } from './actions';

export const OIL_GAS_PACK: IndustryPack = {
  id: 'oil_gas_services',
  name: 'Oil & Gas Services',
  description: 'Global-ready compliance, offer differentiation, and commercial discipline for Oil & Gas contractors.',
  questions,
  library,
  actions
};

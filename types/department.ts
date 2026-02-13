
import { PillarId } from './core';

export type DepartmentId =
    | 'operations'
    | 'supply_chain'
    | 'finance'
    | 'sales'
    | 'marketing'
    | 'hr'
    | 'it'
    | 'legal'
    | 'qa'
    | 'ehs'
    | 'r_and_d'
    | 'maintenance'
    | 'customer_success'
    | 'admin';

export interface Department {
    id: DepartmentId;
    name: string;
    subUnits?: string[];
    ownedPillars: PillarId[];
    supportingPillars?: PillarId[];
}

export interface DepartmentStack {
    core: DepartmentId[];
    specialized: DepartmentId[];
    pillarOwnership: Record<PillarId, DepartmentId[]>; // Primary owners
    subUnits: Record<DepartmentId, string[]>; // Specific sub-units enabled per department
    kpis: Record<PillarId, string[]>; // KPIs to track per pillar
    questionToggles: Record<PillarId, string[]>; // Question banks/tags to enable per pillar
}

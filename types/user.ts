import { UserRole, Archetype, PillarScores } from './core';
import { GeneratedReport, FixPlan } from './report';

export interface User {
    id: string;
    name: string;
    email?: string;
    role: UserRole;
    avatar: string;
    company?: string;
    tier?: string; // 'free' | 'pro' | 'elite'
    status?: 'pending' | 'approved' | 'rejected' | 'suspended';
    planType?: 'basic' | 'premium';
    archetype?: Archetype;
    pillarScores?: PillarScores;
    latestReport?: GeneratedReport;
    activeFixPlan?: FixPlan;
    adWalletBalance?: number;
    riskScore?: number;
    ltv?: number;
    joinedAt?: string;
    lastLoginAt?: string;
}

export interface UserAdminView {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
    joinedAt: string;
    lastLoginAt: string;
    ltv: number;
    riskScore: number;
    company?: string;
    tier?: string;
    avatar: string;
}

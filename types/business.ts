import { PillarScores } from './core';

export interface BusinessProfile {
    businessName: string;
    userName: string;
    userTitle: string;
    industry: string;
    subIndustry: string;
    reportTone?: 'consultant' | 'executive' | 'street';
    model: 'b2b' | 'b2c' | 'both';
    size: 'solo' | 'micro' | 'small' | 'small_med' | 'medium' | 'large' | 'enterprise';
    hasManagers: boolean;
    stage: string;
    goals: string[];
    pain: string;
    includesContractors: boolean;
    includesVolunteers: boolean;
    // Agro-Specific Fields
    agroSubSector?: 'Milling' | 'Drying' | 'Packaging' | 'Juices' | 'Oils' | 'Seeds' | 'Fertilizer' | 'Chemicals' | 'Vet Supplies' | 'Equipment';
    products?: string[];
    operatingModel?: 'Manual' | 'Semi-Automated' | 'Fully Automated';
    shiftsPerDay?: number;
    daysPerWeek?: number;
    capacity?: string;
    salesChannels?: string[];
    paymentTerms?: string;
    complianceLevel?: 'informal' | 'basic' | 'audit-ready';
}

export interface CompanyProfile {
    id: string;
    slug: string;
    name: string;
    logo: string;
    description: string;
    website: string;
    industry: string;
    region: string;
    verificationLevel: 'partner' | 'none';
    resources: any[];
    events: any[];
    hiringPosts: any[];
}

export interface ConsultantProfile {
    id: string;
    name: string;
    email: string;
    role: 'consultant';
    avatar: string;
    title: string;
    bio: string;
    location: { lat: number; lng: number; city: string; country: string };
    serviceRadiusKm: number;
    serviceScope: 'city' | 'country' | 'global';
    jurisdictions: string[];
    deliveryMode: 'remote' | 'hybrid' | 'in-person';
    acceptsInPerson: boolean;
    badges: string[];
    metrics: { responseTime: string; jobsCompleted: number; rating: number; cancellationRate?: string; disputeRate?: string; lastActive?: string; completionRate?: string };
    services: any[];
    specialties: string[];
    expertiseTags: string[];
    industryTags: string[];
    primaryCategories: string[];
    tier: 'free' | 'pro' | 'elite';
    status: 'approved' | 'pending';
    successScore: number;
    verifiedStatus: 'none' | 'verified' | 'verified_plus';
    whatsappNumber?: string;
    linkedinUrl?: string;
    remoteAvailable: boolean;
    creditsBalance: number;
    rankScore?: number;
}

export interface PartnerClient {
    id: string;
    name: string;
    company: string;
    industry: string;
    country: string;
    overallHealth: number;
    criticalPillar: string;
    lastAssessedDate: string;
    status: 'needs_call' | 'stable' | 'active';
    pillarScores: PillarScores;
    drivers?: Record<string, any>;
}

export interface PartnerAlert {
    id: string;
    clientId: string;
    clientName: string;
    type: string;
    severity: 'critical' | 'serious' | 'watch';
    message: string;
    action: string;
    date: string;
}

export interface AuditLogEntry {
    id: string;
    actorId: string;
    actorName: string;
    actorRole: string;
    action: string;
    targetResource: string;
    targetId: string;
    timestamp: string;
    changes: any;
    metadata?: any;
}

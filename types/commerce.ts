import { ReactNode } from 'react';

export interface Trainer {
    id: string;
    name: string;
    title: string;
    avatar: string;
    rating: number;
    reviewsCount: number;
    verified: boolean;
}

export interface Course {
    id: string;
    slug: string;
    title: string;
    shortPromise: string;
    instructor: Trainer;
    price: number;
    currency: string;
    category: string;
    thumbnail: string;
    rating: number;
    reviewsCount: number;
    level: string;
    language: string;
    duration: string;
    format: 'Live Session' | 'On-Demand' | 'Hybrid' | 'In-Person' | 'Virtual';
    outcomes: string[];
    roiStats: { value: string; label: string; desc?: string }[];
    proofOfWork: { title: string; description: string }[];
    syllabus: any[];
    resourcesIncluded: any[];
    upcomingSessions: any[];
    badges: any[];
    enterpriseEligible: boolean;
}

export interface Category {
    id: string;
    key: string;
    name: string;
    description: string;
    icon: string | ReactNode;
    roiBullets?: string[];
}

export interface CheckoutItem {
    id: string;
    title: string;
    description: string;
    price?: number;
    type: 'subscription' | 'one_time' | 'enterprise' | 'session';
    recurringInterval?: string;
}

export interface BlogPost {
    id: string;
    title: string;
    subtitle?: string;
    slug: string;
    body?: string;
    coverImage?: string;
    status: 'draft' | 'published';
    publishedAt?: string;
    views?: number;
    conversions?: number;
    tags: string[];
    allowComments?: boolean;
    allowRatings?: boolean;
    author?: { name: string; role: string; avatar: string };
    averageRating?: number;
}

export interface Transaction {
    id: string;
    studentName: string;
    sprintTitle: string;
    grossAmount: number;
    netAmount: number;
    date: string;
    status: 'released' | 'escrowed' | 'withheld';
    escrowReleaseAt?: string;
    seatsCount?: number;
    type: 'single' | 'enterprise_royalty';
}

export type SprintStatus = 'draft' | 'published' | 'archived' | 'rejected' | 'pending';
export type SprintLevel = 'beginner' | 'intermediate' | 'advanced';

export interface SprintSession {
    id: string;
    sprintId?: string;
    partNumber: number;
    title?: string;
    startsAt: string;
    endsAt: string;
    timezone: string;
    status: 'scheduled' | 'live' | 'completed' | 'canceled' | 'no_show';
    meetJoinUrl?: string;
    sessionStartedAt?: string;
    endedAt?: string;
}

export interface SprintTask {
    id: string;
    title: string;
    description: string;
    difficulty: 'easy' | 'medium' | 'hard';
    priority: 'low' | 'medium' | 'high';
    estimatedMinutes: number;
    dueDaysAfterPart2: number;
    proofType: 'text' | 'file' | 'link';
    isRequired: boolean;
    mentorReviewRequired: boolean;
}

export interface SprintCurriculumBlock {
    id: string;
    partNumber: number;
    title: string;
    durationMinutes: number;
    keyPoints: string[];
}

export interface Sprint {
    id: string;
    title: string;
    status: SprintStatus;
    reviewStatus: 'draft' | 'pending' | 'changes_requested' | 'approved';
    level: SprintLevel;
    language: string;
    shortDescription: string;
    price: number;
    currency: string;
    maxSeats: number;
    seatsSold: number;
    waitlistEnabled: boolean;
    categoryTags: string[];
    outcomes: string[];
    kpiMetrics: string[];
    sessions: SprintSession[];
    resources: any[];
    curriculum: SprintCurriculumBlock[];
    tasks: SprintTask[];
}

export interface SprintTemplate {
    id: string;
    category: string;
    title: string;
    description: string;
    tags: string[];
    outcomes: string[];
    kpiMetrics: string[];
    tasks: SprintTask[];
    resources: any[];
}

export interface ReferralCode {
    id: string;
    code: string;
    targetType: string;
    targetId: string;
    clicks: number;
    signups: number;
    earnedCredits: number;
    status: 'active' | 'inactive';
}

export interface TrainerPromotion {
    id: string;
    // ... fields for promotion
}

export interface Lead {
    id: string;
    title: string;
    role: string;
    company: string;
    sourceResource: string;
    date: string;
    status: 'new' | 'contacted' | 'in_discussion' | 'won' | 'lost' | 'hot';
    consent: boolean;
    location: string;
    consentText: string;
    weakness: string;
    criticalPillar: string;
    topWeaknessTag: string;
    leadSize: 'S' | 'M' | 'L' | 'XL';
    creditCost: number;
    urgency: string;
    matchScore: number;
    tags: string[];
    anonSummary: string;
    problem: string;
    isUnlocked?: boolean;
    industry?: string;
}

export interface PricingRule {
    id: string;
    tier: number;
    product: string;
    amount: number;
    currency: string;
    isActive: boolean;
    regionGroup: string;
}

export interface ContentSnippet {
    id: string;
    pillar: string;
    band: string;
    tilt: string;
    textKey: string;
    content: string;
    lastUpdated: string;
    constent?: string; // There was a typo in original? No, I see `content: string;` in snippet. I see `content` in 484.
}



export type AdObjective = 'clicks' | 'leads' | 'hiring' | 'bookings';

export interface AdCampaign {
    id: string;
    advertiserId: string;
    type: 'consultant_promo' | 'company_ad';
    objective: AdObjective;
    status: 'active' | 'paused' | 'pending_payment' | 'insufficient_funds' | 'in_review';
    placements: string[];
    budget: { type: 'daily_cap' | 'fixed_slot'; daily: number; total: number; spent: number; currency: string };
    targeting: { locations: string[]; tags: string[]; languages: string[]; contextualOnly: boolean };
    creative: { headline: string; body: string; imageUrl: string; ctaText: string; landingUrl: string };
    metrics: { impressions: number; clicks: number; conversions: number; ctr: number };
}

export interface BillingTransaction {
    id: string;
    date: string;
    description: string;
    amount: number;
    type: 'credit' | 'debit';
    status: 'paid' | 'pending' | 'failed';
    method: 'card' | 'wallet' | 'paypal';
}

export interface AIAsset {
    id: string;
    type: 'image' | 'video';
    url: string;
    prompt: string;
    createdAt: string;
}

import { BusinessProfile, QuestionDefinition } from "../types";
import { AGRO_PACK } from "../data/agro";
import { AGRI_PACK } from "../data/agri";
import { MINING_PACK } from "../data/mining";
import { OIL_GAS_PACK } from "../data/oilGas";
import { FNB_PACK } from "../data/fnb";
import { TEXTILE_PACK } from "../data/textile";
import { FURNITURE_PACK } from "../data/furniture";
import { METAL_PACK } from "../data/metal";
import { PLASTICS_PACK } from "../data/plastics";
import { SOAP_PACK } from "../data/soap";
import { BRICKS_PACK } from "../data/bricks";
import { WATER_PACK } from "../data/water";
import { FASHION_PACK } from "../data/fashion";
import { HARDWARE_PACK } from "../data/hardware";
import { ELECTRONICS_PACK } from "../data/electronics";
import { FMCG_PACK } from "../data/fmcg";
import { STATIONERY_PACK } from "../data/stationery";
import { SPARE_PARTS_PACK } from "../data/spareParts";
import { ASSEMBLY_PACK } from "../data/assembly";
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
    ELECTRONICS_SHOP_SUB_INDUSTRIES,
    FASHION_SUB_INDUSTRIES,
    FMCG_SUB_INDUSTRIES,
    HARDWARE_SUB_INDUSTRIES,
    SPARE_PARTS_SUB_INDUSTRIES,
    STATIONERY_SUB_INDUSTRIES
} from '../data/retailSubIndustries';

export interface IndustryFlags {
    isFnbManufacturing: boolean;
    isTextileManufacturing: boolean;
    isFurnitureManufacturing: boolean;
    isMetalManufacturing: boolean;
    isPlasticsManufacturing: boolean;
    isSoapManufacturing: boolean;
    isBricksManufacturing: boolean;
    isWaterManufacturing: boolean;
    isFashionRetail: boolean;
    isHardwareRetail: boolean;
    isElectronicsRetail: boolean;
    isFmcgRetail: boolean;
    isStationeryRetail: boolean;
    isSparePartsRetail: boolean;
    isAssemblyManufacturing: boolean;
}

export const resolveIndustryFlags = (profile: BusinessProfile): IndustryFlags => ({
    isFnbManufacturing: profile.industry === 'manufacturing' && FNB_SUB_INDUSTRIES.includes(profile.subIndustry),
    isTextileManufacturing: profile.industry === 'manufacturing' && TEXTILE_SUB_INDUSTRIES.includes(profile.subIndustry),
    isFurnitureManufacturing: profile.industry === 'manufacturing' && FURNITURE_SUB_INDUSTRIES.includes(profile.subIndustry),
    isMetalManufacturing: profile.industry === 'manufacturing' && METAL_SUB_INDUSTRIES.includes(profile.subIndustry),
    isPlasticsManufacturing: profile.industry === 'manufacturing' && PLASTICS_SUB_INDUSTRIES.includes(profile.subIndustry),
    isSoapManufacturing: profile.industry === 'manufacturing' && SOAP_SUB_INDUSTRIES.includes(profile.subIndustry),
    isBricksManufacturing: profile.industry === 'manufacturing' && BRICKS_SUB_INDUSTRIES.includes(profile.subIndustry),
    isWaterManufacturing: profile.industry === 'manufacturing' && WATER_SUB_INDUSTRIES.includes(profile.subIndustry),
    isFashionRetail: profile.industry === 'retail' && FASHION_SUB_INDUSTRIES.includes(profile.subIndustry),
    isHardwareRetail: profile.industry === 'retail' && HARDWARE_SUB_INDUSTRIES.includes(profile.subIndustry),
    isElectronicsRetail: profile.industry === 'retail' && ELECTRONICS_SHOP_SUB_INDUSTRIES.includes(profile.subIndustry),
    isFmcgRetail: profile.industry === 'retail' && FMCG_SUB_INDUSTRIES.includes(profile.subIndustry),
    isStationeryRetail: profile.industry === 'retail' && STATIONERY_SUB_INDUSTRIES.includes(profile.subIndustry),
    isSparePartsRetail: profile.industry === 'retail' && SPARE_PARTS_SUB_INDUSTRIES.includes(profile.subIndustry),
    isAssemblyManufacturing: profile.industry === 'manufacturing' && ASSEMBLY_SUB_INDUSTRIES.includes(profile.subIndustry),
});

const PACK_BY_BASE_INDUSTRY: Record<string, { questions: QuestionDefinition[]; library: any[]; actions: any[] }> = {
    agri_input: AGRI_PACK,
    agro_processing: AGRO_PACK,
    mining: MINING_PACK,
    oil_gas_services: OIL_GAS_PACK
};

export const resolveIndustryPack = (profile: BusinessProfile, flags: IndustryFlags): { questions: QuestionDefinition[]; library: any[]; actions: any[] } => {
    if (flags.isFnbManufacturing) return FNB_PACK;
    if (flags.isTextileManufacturing) return TEXTILE_PACK;
    if (flags.isFurnitureManufacturing) return FURNITURE_PACK;
    if (flags.isMetalManufacturing) return METAL_PACK;
    if (flags.isPlasticsManufacturing) return PLASTICS_PACK;
    if (flags.isSoapManufacturing) return SOAP_PACK;
    if (flags.isBricksManufacturing) return BRICKS_PACK;
    if (flags.isWaterManufacturing) return WATER_PACK;
    if (flags.isFashionRetail) return FASHION_PACK;
    if (flags.isHardwareRetail) return HARDWARE_PACK;
    if (flags.isElectronicsRetail) return ELECTRONICS_PACK;
    if (flags.isFmcgRetail) return FMCG_PACK;
    if (flags.isStationeryRetail) return STATIONERY_PACK;
    if (flags.isSparePartsRetail) return SPARE_PARTS_PACK;
    if (flags.isAssemblyManufacturing) return ASSEMBLY_PACK;
    return PACK_BY_BASE_INDUSTRY[profile.industry] || AGRO_PACK;
};

export const getWhyItMatters = (profile: BusinessProfile, flags: IndustryFlags): string => {
    if (profile.industry === 'mining')
        return 'Mining profitability is decided by recovery discipline, custody proof, and control of hidden losses.';
    if (profile.industry === 'oil_gas_services')
        return 'Oil and gas service margin is protected by execution readiness, commercial discipline, and compliance-grade proof.';
    if (flags.isFnbManufacturing)
        return 'Food and beverage margin is decided by yield control, first-pass quality, and traceable execution discipline.';
    if (flags.isTextileManufacturing)
        return 'Textile and garment margin is driven by line flow discipline, first-pass quality, and style-level costing control.';
    if (flags.isFurnitureManufacturing)
        return 'Furniture and carpentry margin depends on measurement discipline, waste control, and reliable finishing and delivery execution.';
    if (flags.isMetalManufacturing)
        return 'Metal fabrication margin is protected by drawing discipline, fit-up quality, and job-level costing control.';
    if (flags.isPlasticsManufacturing)
        return 'Plastics and packaging margin is driven by yield stability, changeover discipline, and specification-grade consistency.';
    if (flags.isSoapManufacturing)
        return 'Soap and cosmetics margin depends on batch consistency, fill-weight control, and claim-safe quality discipline.';
    if (flags.isBricksManufacturing)
        return 'Bricks and cement-product margin is protected by mix control, curing discipline, and dispatch reliability.';
    if (flags.isWaterManufacturing)
        return 'Bottled water and ice margin depends on hygiene discipline, fill and seal control, and route-level cash control.';
    if (flags.isFashionRetail)
        return 'Fashion boutique margin depends on size and SKU truth, markdown discipline, repeat-demand systems, and shrink-safe floor execution.';
    if (flags.isHardwareRetail)
        return 'Hardware and building-material margin depends on stock truth, dispatch accuracy, pricing discipline, and dispute-safe contractor service.';
    if (flags.isElectronicsRetail)
        return 'Electronics and phone-shop margin depends on stock truth, repair QC discipline, pricing control, and trust-safe after-sales execution.';
    if (flags.isFmcgRetail)
        return 'FMCG distribution margin depends on stock discipline, route reliability, credit control, and repeat-order consistency.';
    if (flags.isStationeryRetail)
        return 'Stationery and bookstore margin depends on fast-mover readiness, SKU truth, queue discipline, and retention-led repeat demand.';
    if (flags.isSparePartsRetail)
        return 'Spare-parts margin depends on fitment accuracy, fast-mover readiness, pricing discipline, and trust-safe warranty and dispute controls.';
    if (flags.isAssemblyManufacturing)
        return 'Assembly and OEM margin depends on first-pass yield discipline, traceability control, and stable cross-functional execution.';
    if (profile.industry === 'agri_input')
        return 'Agri-input businesses win when stock, advisory quality, and cash discipline are systemized.';
    return 'Agro-processing requires tight control of yield and flow.';
};

import { BusinessProfile, QuestionDefinition } from "../types";
import { AGRO_PACK } from "../data/agro";
import { AGRI_PACK } from "../data/agri";
import { MINING_PACK } from "../data/mining";
import { OIL_GAS_PACK } from "../data/oilGas";
import { ARTISANAL_MINING_PACK } from "../data/artisanal_mining";
import { MINING_SERVICES_PACK } from "../data/mining_services";
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
import { PIGGERY_PACK } from "../data/piggery";
import { POULTRY_PACK } from "../data/poultry";
import { DAIRY_PACK } from "../data/dairy";
import { FARM_MACHINERY_PACK } from '../data/farm_machinery';
import { PRODUCE_AGGREGATION_PACK } from '../data/produce_aggregation';
import { EXPORT_PRODUCE_PACK } from '../data/export_produce';
import { STORAGE_WAREHOUSING_PACK } from '../data/storage_warehousing';
import { FORESTRY_PACK } from '../data/forestry';
import { BAKERY_PACK } from "../data/bakery";
import { BEVERAGES_PACK } from "../data/beverages";
import { SNACKS_PACK } from "../data/snacks";
import { BUTCHERY_PACK } from "../data/butchery";
import { CHEMICAL_PACK } from "../data/chemical";
import { PHARMACY_PACK } from "../data/pharmacy";
import { DRUG_SHOP_PACK } from "../data/drug_shop";
import {
    FNB_SUB_INDUSTRIES,
    TEXTILE_SUB_INDUSTRIES,
    FURNITURE_SUB_INDUSTRIES,
    METAL_SUB_INDUSTRIES,
    PLASTICS_SUB_INDUSTRIES,
    SOAP_SUB_INDUSTRIES,
    BRICKS_SUB_INDUSTRIES,
    WATER_SUB_INDUSTRIES,
    CHEMICAL_SUB_INDUSTRIES,
    ASSEMBLY_SUB_INDUSTRIES
} from '../data/manufacturingSubIndustries';
import { RETAIL_PACK } from '../data/retail';
import {
    ELECTRONICS_SHOP_SUB_INDUSTRIES,
    FASHION_SUB_INDUSTRIES,
    FMCG_SUB_INDUSTRIES,
    HARDWARE_SUB_INDUSTRIES,
    PHARMACY_SUB_INDUSTRIES,
    DRUG_SHOP_SUB_INDUSTRIES,
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
    isChemicalManufacturing: boolean;
    isRetail: boolean;
    isFashionRetail: boolean;
    isHardwareRetail: boolean;
    isElectronicsRetail: boolean;
    isFmcgRetail: boolean;
    isStationeryRetail: boolean;
    isPharmacy: boolean;
    isDrugShop: boolean;
    isSparePartsRetail: boolean;
    isAssemblyManufacturing: boolean;
    isPiggery: boolean;
    isPoultry: boolean;
    isDairy: boolean;
    isAgriInput: boolean;
    isFarmMachinery: boolean;
    isCropFarming: boolean;
    isCattle: boolean;
    isProduceAggregation: boolean;
    isExportProduce: boolean;
    isStorageWarehousing: boolean;
    isForestry: boolean;
    isArtisanalMining: boolean;
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
    isChemicalManufacturing: profile.industry === 'manufacturing' && CHEMICAL_SUB_INDUSTRIES.includes(profile.subIndustry),
    isRetail: profile.industry === 'retail',
    isFashionRetail: profile.industry === 'retail' && FASHION_SUB_INDUSTRIES.includes(profile.subIndustry),
    isHardwareRetail: profile.industry === 'retail' && HARDWARE_SUB_INDUSTRIES.includes(profile.subIndustry),
    isElectronicsRetail: profile.industry === 'retail' && ELECTRONICS_SHOP_SUB_INDUSTRIES.includes(profile.subIndustry),
    isFmcgRetail: profile.industry === 'retail' && FMCG_SUB_INDUSTRIES.includes(profile.subIndustry),
    isStationeryRetail: profile.industry === 'retail' && STATIONERY_SUB_INDUSTRIES.includes(profile.subIndustry),
    isPharmacy: profile.industry === 'retail' && PHARMACY_SUB_INDUSTRIES.includes(profile.subIndustry),
    isDrugShop: profile.industry === 'retail' && DRUG_SHOP_SUB_INDUSTRIES.includes(profile.subIndustry),
    isSparePartsRetail: profile.industry === 'retail' && SPARE_PARTS_SUB_INDUSTRIES.includes(profile.subIndustry),
    isAssemblyManufacturing: profile.industry === 'manufacturing' && ASSEMBLY_SUB_INDUSTRIES.includes(profile.subIndustry),
    isAgriInput: profile.industry === 'agriculture' && profile.subIndustry.startsWith('Input supplier'),
    isFarmMachinery: profile.industry === 'agriculture' && (
        profile.subIndustry.toLowerCase().includes('machinery') ||
        profile.subIndustry.toLowerCase().includes('mechanization') ||
        profile.subIndustry.toLowerCase().includes('irrigation')
    ),
    isCropFarming: profile.industry === 'agriculture' && (
        profile.subIndustry.startsWith('Crop farming') ||
        profile.subIndustry.includes('Horticulture')
    ),
    isCattle: profile.industry === 'agriculture' && (
        profile.subIndustry.startsWith('Cattle') ||
        profile.subIndustry.startsWith('Beef') ||
        profile.subIndustry.startsWith('Livestock')
    ),
    isPiggery: profile.industry === 'agriculture' && profile.subIndustry.toLowerCase().includes('pig'),
    isPoultry: profile.industry === 'agriculture' && profile.subIndustry.toLowerCase().includes('poultry'),
    isDairy: profile.industry === 'agriculture' && (profile.subIndustry.toLowerCase().includes('dairy') || profile.subIndustry.toLowerCase().includes('milk')),
    isProduceAggregation: profile.industry === 'agriculture' &&
        profile.subIndustry === 'Produce aggregation & trading',
    isExportProduce: profile.industry === 'agriculture' &&
        profile.subIndustry === 'Export / cross-border produce trade',
    isStorageWarehousing: profile.industry === 'agriculture' &&
        profile.subIndustry.startsWith('Storage'),
    isForestry: profile.industry === 'agriculture' &&
        profile.subIndustry === 'Forestry & timber production',
    isArtisanalMining: profile.industry === 'mining' && (
        profile.subIndustry.toLowerCase().includes('artisanal') ||
        profile.subIndustry.toLowerCase().includes('asm')
    )
});

import { SMALL_RUMINANTS_PACK } from "../data/small_ruminants";

const PACK_BY_BASE_INDUSTRY: Record<string, { questions: QuestionDefinition[]; library: any[]; actions: any }> = {
    agri_input: AGRI_PACK,
    agro_processing: AGRO_PACK,
    mining: MINING_PACK,
    oil_gas_services: OIL_GAS_PACK
};

export const resolveIndustryPack = (profile: BusinessProfile, flags: IndustryFlags): { questions: QuestionDefinition[]; library: any[]; actions: any } => {
    if (flags.isAgriInput) return AGRI_PACK; // Assuming AGRI_PACK is the INPUT_SUPPLY_PACK
    if (flags.isFarmMachinery) return FARM_MACHINERY_PACK;
    if (flags.isPiggery) return PIGGERY_PACK;
    if (flags.isPoultry) return POULTRY_PACK;
    if (flags.isDairy) return DAIRY_PACK;
    if (flags.isProduceAggregation) return PRODUCE_AGGREGATION_PACK;
    if (flags.isExportProduce) return EXPORT_PRODUCE_PACK;
    if (flags.isStorageWarehousing) return STORAGE_WAREHOUSING_PACK;
    if (flags.isForestry) return FORESTRY_PACK;

    // MINING
    if (profile.industry === 'mining') {
        if (flags.isArtisanalMining) return ARTISANAL_MINING_PACK;
        const sub = profile.subIndustry.toLowerCase();
        if (sub.includes('services') || sub.includes('contract') || sub.includes('supplies') || sub.includes('drilling')) {
            return MINING_SERVICES_PACK;
        }
    }

    if (flags.isCattle) {
        // If there's a specific Cattle pack, return it. Otherwise fall through or use AGRO_PACK/generic.
        // Assuming there isn't a dedicated imported CATTLE_PACK variable in this file context yet,
        // or it needs to be imported. Existing code didn't show it imported.
        // Reviewing imports... I see no CATTLE_PACK import.
        // But the user task is for Small Ruminants.
    }
    // Check for Goat/Sheep
    if (profile.subIndustry === 'Goat farming' || profile.subIndustry === 'Sheep farming') {
        return SMALL_RUMINANTS_PACK;
    }



    if (flags.isFnbManufacturing) {
        if (profile.subIndustry === 'Bakery / Flour / Grain-based processing') return BAKERY_PACK;
        if (profile.subIndustry === 'Beverages (juice, soda, water)') return BEVERAGES_PACK;
        if (profile.subIndustry === 'Snacks & packaged foods') return SNACKS_PACK;
        if (profile.subIndustry === 'Meat processing') return BUTCHERY_PACK;
        return FNB_PACK;
    }
    if (flags.isTextileManufacturing) return TEXTILE_PACK;
    if (flags.isFurnitureManufacturing) return FURNITURE_PACK;
    if (flags.isMetalManufacturing) return METAL_PACK;
    if (flags.isPlasticsManufacturing) return PLASTICS_PACK;
    if (flags.isSoapManufacturing) return SOAP_PACK;
    if (flags.isBricksManufacturing) return BRICKS_PACK;
    if (flags.isWaterManufacturing) return WATER_PACK;
    if (flags.isChemicalManufacturing) return CHEMICAL_PACK;
    if (flags.isFashionRetail) return FASHION_PACK;
    if (flags.isHardwareRetail) return HARDWARE_PACK;
    if (flags.isElectronicsRetail) return ELECTRONICS_PACK;
    if (flags.isFmcgRetail) return FMCG_PACK;
    if (flags.isStationeryRetail) return STATIONERY_PACK;
    if (flags.isPharmacy) return PHARMACY_PACK;
    if (flags.isDrugShop) return DRUG_SHOP_PACK;
    if (flags.isSparePartsRetail) return SPARE_PARTS_PACK;
    if (flags.isAssemblyManufacturing) return ASSEMBLY_PACK;
    if (flags.isPiggery) return PIGGERY_PACK;
    if (flags.isPoultry) return POULTRY_PACK;
    if (flags.isDairy) return DAIRY_PACK;

    // RETAIL / SUPERMARKET (Catch-all for other retail or specific Supermarket)
    if (flags.isRetail) {
        const sub = profile.subIndustry?.toLowerCase() || '';
        if (sub.includes('supermarket') || sub.includes('grocery') || sub.includes('mini-mart') || sub.includes('general store')) {
            return RETAIL_PACK;
        }
    }

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
    if (flags.isPiggery)
        return 'Pig farming profitability relies on strict biosecurity, feed cost control, and consistent market grading.';
    if (flags.isPoultry)
        return 'Poultry profitability depends on low mortality, feed conversion efficiency, and biosecurity discipline.';
    if (flags.isDairy)
        return 'Dairy profitability is built on cold chain discipline, route efficiency, and strict quality control.';
    if (flags.isProduceAggregation)
        return 'Produce trading profitability is decided by shrink control, grading discipline, and smart sourcing.';
    if (flags.isExportProduce)
        return 'Export produce profit is decided by spec discipline, cold-chain control, doc accuracy, and Incoterms mastery.';
    if (flags.isStorageWarehousing)
        return 'Storage & warehousing profit is decided by condition control, traceability discipline, throughput efficiency, and cost-to-serve pricing.';
    if (flags.isForestry)
        return 'Forestry profitability is decided by harvest planning discipline, recovery control, and market-aligned sorting.';
    if (flags.isChemicalManufacturing)
        return 'Chemical margin is protected by formula discipline, regulatory compliance speed, and yield-safe filling control.';
    if (flags.isRetail) {
        if (flags.isPharmacy) return "Pharmacy profit is protected by clinical trust, inventory discipline, and claim accuracy.";
        if (flags.isDrugShop) return "Drug shop profitability relies on safe advice, trusted sourcing, and strict expiry control.";
        return 'Retail profitability is decided by availability, shelf-price integrity, and disciplined cash and stock control.';
    }
    return 'Agro-processing requires tight control of yield and flow.';
};

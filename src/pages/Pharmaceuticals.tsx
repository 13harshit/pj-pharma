import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// --- Data Definitions ---

const cardioData = [
    { id: 1, name: 'Enoxaparin Soduum', strength: '20mg, 40mg, 60mg, 80mg', packing: 'PFS' },
    { id: 2, name: 'Tigecycline(LYO)', strength: '50mg', packing: 'VIAL+TRAY' },
    { id: 3, name: 'Teicoplanin(LYO)', strength: '200mg, 400mg', packing: 'VIAL+TRAY' },
    { id: 4, name: 'Rabeprazole(LYO)', strength: '20mg', packing: 'VIAL' },
    { id: 5, name: 'Esomeprazole(LYO)', strength: '40mg', packing: 'VIAL' },
    { id: 6, name: 'Dobutamine(LYO)', strength: '250mg', packing: 'VIAL' },
    { id: 7, name: 'Voriconazoleg', strength: '200mg', packing: 'VIAL' },
    { id: 8, name: 'Vecuronium Bromide', strength: '4mg, 10mg', packing: 'VIAL' },
    { id: 9, name: 'Caspofungin', strength: '50mg, 70mg', packing: 'VIAL' },
    { id: 10, name: 'Streptokinase', strength: '1500000 IU, 750000 IU', packing: 'VIAL' },
    { id: 11, name: 'Vancomycin', strength: '500mg, 1gm', packing: 'VIAL' },
    { id: 12, name: 'Amphotericin B', strength: '50mg', packing: 'VIAL' },
    { id: 13, name: 'Hyaluronidase', strength: '1500 IU', packing: 'VIAL' },
    { id: 14, name: 'Bivalirudine', strength: '250mg', packing: 'VIAL' },
];

const injectionData = [
    { id: 1, name: 'Alpha Beta Arteether injection 1ml', packing: '3×1 ml', qty: '100,000 amps' },
    { id: 2, name: 'Alpha Beta Arteether injection 2 ml', packing: '3 x2 ml', qty: '100,000 amps' },
    { id: 3, name: 'Amikacin 250 mg', packing: '1 x 2 ml vial', qty: '50,000 vials' },
    { id: 4, name: 'Amikacin 500 mg', packing: '1 x 2 ml vial', qty: '50,000 vials' },
    { id: 5, name: 'Amikacin 100 mg', packing: '1 x 2 ml vial', qty: '50,000 vials' },
    { id: 6, name: 'Amoxycilline+ Pot. Clavulanate 1.2 gm', packing: '20 ml vial', qty: '50,000 vials' },
    { id: 7, name: 'Artesunate injection 60 mg', packing: '7.5 ml vial combi', qty: '50,000 vials' },
    { id: 8, name: 'Aceclofenac injection', packing: '10 x 1 ml Tray Pack', qty: '100,000 amps' },
    { id: 9, name: 'Atropine sulphate injection', packing: '10 x 1 ml', qty: '100,000 amps' },
    { id: 10, name: 'Adrenaline injection', packing: '1 ml', qty: '100,000 amps' },
    { id: 11, name: 'Aceclovir injection', packing: 'vial', qty: '50,000 vials' },
    { id: 12, name: 'Ampicillin 500 mg injection', packing: '7.5 ml Vial', qty: '50,000 vials' },
    { id: 13, name: 'Ceftriaxone 250 mg', packing: '7.5 ml Vial', qty: '50,000 vials' },
    { id: 14, name: 'Ceftriaxone 500 mg', packing: '7.5 ml Vial', qty: '50,000 vials' },
    { id: 15, name: 'Ceftriaxone 1 gm', packing: '10 ml vial', qty: '50,000 vials' },
    { id: 16, name: 'Ceftriaxone 1000 mg + Sulbactam 500 mg', packing: '20 ml vial', qty: '50,000 vials' },
    { id: 17, name: 'Ceftriaxone 500mg + Sulbactam 250 mg', packing: '10 ml vial', qty: '50,000 vials' },
    { id: 18, name: 'Ceftriaxone 250 mg + Sulbactam 125 mg', packing: '7.5 ml vial', qty: '50,000 vials' },
    { id: 19, name: 'Ceftriaxone 125 mg + Sulbactam 62.5mg', packing: '7.5 ml Vial', qty: '50,000 vials' },
    { id: 20, name: 'Ceftriaxone 1 gm + Tazobactam 125 mg mg', packing: '20 ml vial', qty: '50,000 vials' },
];

const softGelData = [
    { id: 1, name: 'Vitamin A Capsules 1,00,000 I.U.', packing: '10 x 10' },
    { id: 2, name: 'Vitamin A Capsules 2,00,000 I.U.', packing: '10 x 10' },
    { id: 3, name: 'Multivitamin & Mineral Capsules', packing: '2 x15' },
    { id: 4, name: 'Vitamin A Capsules 25000 I.U.', packing: '10 x 10' },
    { id: 5, name: 'Vitamin A Capsules 50,000 I.U.', packing: '10 x 10' },
    { id: 6, name: 'Vitamin A 4000 I.U. & Vitamin D 3 400 I.U.', packing: '2 x 15' },
    { id: 7, name: 'Vitamin A 6000 I.U. & Vitamin D 3 1000 I.U.', packing: '5 x 10' },
    { id: 8, name: 'Multivitamin, Mineral & Ginseng Capsules', packing: '1 x 10' },
    { id: 9, name: 'Paracetamol Capsules U.S.P. 1000 MG.', packing: '2 x 6' },
    { id: 10, name: 'Paracetamol& Caffeine Capsules U.S.P. ( 1000 + 30 )', packing: '2 x 6' },
    { id: 11, name: 'Paracetamol& Caffeine Capsules U.S.P. ( 500 + 30 )', packing: '2 x 10' },
    { id: 12, name: 'Ibuprofen, Paracetamol& Caffeine Capsules ( 400 + 325 + 40 )', packing: '2 x 10' },
    { id: 13, name: 'Multivitamin, Mineral Capsules', packing: '60 caps' },
    { id: 14, name: 'Multivitamin, Mineral Capsules', packing: '2 x 15' },
    { id: 15, name: 'Cetrizine Capsules 10 MG.', packing: '10 x 10' },
    { id: 16, name: 'Calcitriol Capsules 0.25 MCG', packing: '3 x 10' },
    { id: 17, name: 'Calcitriol& Calcium Carbonate Capsules ( 0.25 MCG + 625 MG )', packing: '3 x 10' },
    { id: 18, name: 'Calcitriol& Calcium Carbonate Capsules with Zinc', packing: '3 x 10' },
    { id: 19, name: 'Coenzyme Q 10 Capsules 10 MG', packing: '1 x 10' },
    { id: 20, name: 'Coenzyme Q 10 & Vitamin E Capsules ( 10 + 12.5 )', packing: '1 x 10' },
];

const suppositoryData = [
    { id: 1, name: 'Glycerin Suppositories U.S.P. Adult : 3.0 gm, Child: 1.0 gm', packing: 'Adult Bottle (10s) / Strip (5s) Child Bottle (20s or 30s)' },
    { id: 2, name: 'Bisacodyl Suppositories 5 mg', packing: 'Bottle (20s or 30s) / Strip (5s)' },
    { id: 3, name: 'Bisacodyl Suppositories 10 mg', packing: 'Bottle (20s or 30s) / Strip (5s)' },
    { id: 4, name: 'Metronidazole Suppositories 50 mg', packing: 'Bottle (20s or 30s) / Strip (5s)' },
    { id: 5, name: 'Metronidazole Suppositories 500 mg', packing: 'Bottle (10s) / Strip (5s)' },
    { id: 6, name: 'Metronidazole Suppositories 1000 mg', packing: 'Bottle (10s) / Strip (5s)' },
    { id: 7, name: 'Bismuth Subgallate Suppositories B.P.C.', packing: 'Bottle (10s) / Strip (5s)' },
    { id: 8, name: 'Indomethacin Suppositories B.P.', packing: 'Bottle (20s or 30s) / Strip (5s)' },
    { id: 9, name: 'Metoclopramide Suppositories 20 mg', packing: 'Bottle (20s or 30s) / Strip (5s)' },
    { id: 10, name: 'Metoclopramide Suppositories 10 mg', packing: 'Bottle (20s or 30s) / Strip (5s)' },
    { id: 11, name: 'Haemorrhoidal Suppositories', packing: 'Bottle (10s) / Strip (5s)' },
    { id: 12, name: 'Compound Bismuth Subgallate Suppositories B.P.C.', packing: 'Bottle (10s) / Strip (5s)' },
    { id: 13, name: 'Haemorrhoidal Suppositories', packing: 'Bottle (10s) / Strip (5s)' },
    { id: 14, name: 'Aminophylline Suppositories 75 mg', packing: 'Bottle (20s or 30s) / Strip (5s)' },
    { id: 15, name: 'Aminophylline Suppositories 150 mg', packing: 'Bottle (20s or 30s) / Strip (5s)' },
    { id: 16, name: 'Aminophylline Suppositories 300 mg', packing: 'Bottle (10s) / Strip (5s)' },
    { id: 17, name: 'Aminophylline Suppositories 350 mg', packing: 'Bottle (10s) / Strip (5s)' },
    { id: 18, name: 'Aminophylline Suppositories 360 mg', packing: 'Bottle (10s) / Strip (5s)' },
    { id: 19, name: 'Aminophylline Suppositories 400 mg', packing: 'Bottle (10s) / Strip (5s)' },
    { id: 20, name: 'ClotrimazolePessaries B.P. 100mg', packing: 'Strip (6s)' },
];

const ivFluidData = [
    { id: 1, name: 'Glucose Intravenous Infusion 5% BP', packing: '500ml' },
    { id: 2, name: '0.9%Sodium.Chloride.& 5% Glucose Intravenous Inf BP', packing: '500ml' },
    { id: 3, name: '0.9%Sodium.Chloride Intravenous Infusion BP', packing: '500ml' },
    { id: 4, name: 'Compound Sodium .Lact..(RingerLactate) Intr.Infu. BP', packing: '500ml' },
    { id: 5, name: 'Glucose Intravenous Infusion 10% BP', packing: '500ml' },
    { id: 6, name: 'Sodium.Chloride 0.45% Intravenous Infusion BP', packing: '500ml' },
    { id: 7, name: '1.6% Sodium Chloride Intravenous Infusin BP', packing: '500ml' },
    { id: 8, name: 'Sodium.Chl. 0.11% & Glu.5% Intravenous Infusion BP', packing: '500ml' },
    { id: 9, name: 'Sodium.Chl. 0.2% & Glu.5% Intravenous Infusion BP', packing: '500ml' },
    { id: 10, name: 'Sodium.Chl. 0.33% & Glu.5% Intravenous Infusion BP', packing: '500ml' },
    { id: 11, name: 'Sodium.Chl. 0.45% & Glu.5% Intravenous Infusion BP', packing: '500ml' },
    { id: 12, name: 'Sodium Lacatate Intravenous Infusion 1.85% BP', packing: '500ml' },
    { id: 13, name: 'Glucose Intravenous Infusion 5% BP', packing: '1000ml' },
    { id: 14, name: '0.9%Sodium.Chloride.& 5% Glucose Intravenous Inf BP', packing: '1000ml' },
    { id: 15, name: '0.9%Sodium.Chloride Intravenous Infusion BP', packing: '1000ml' },
    { id: 16, name: 'Compound Sodium .Lact..(RingerLactate) Intr.Infu. BP', packing: '1000ml' },
    { id: 17, name: 'Ciprofloxacin Intravenous Infusion 200mg 100ml BP', packing: '100ml' },
    { id: 18, name: 'Metronidazole Intravenous Infusion 500mg/100ml BP', packing: '100ml' },
    { id: 19, name: 'Ofloxacin Intravenous Infusion 200mg/100ml BP', packing: '100ml' },
    { id: 20, name: 'Glucose 25% Intravenous Infusion', packing: '100ml' },
];

const anticancerData = [
    { id: 1, name: 'Inj. Doxorubicin HCL', type: 'Injectable', strength: '10mg, 50mg', packing: 'Single Vial (Lyophilised)' },
    { id: 2, name: 'Inj. Amifostine', type: 'Injectable', strength: '300mg, 500mg', packing: 'Single Vial (Lyophilised)' },
    { id: 3, name: 'Inj. Bleomycin Sulphate', type: 'Injectable', strength: '15 Units', packing: 'Single Vial (Lyophilised)' },
    { id: 4, name: 'Inj. Carboplatin', type: 'Injectable', strength: '150mg/15ml, 450mg/45ml', packing: 'Single Vial' },
    { id: 5, name: 'Inj. Cisplatin', type: 'Injectable', strength: '10mg/10ml, 50mg/50ml', packing: 'Single Vial' },
    { id: 6, name: 'Inj. Cytarabine “Preservative Free”', type: 'Injectable', strength: '100mg/ml, 500mg/5ml, 1g/10ml', packing: 'Single Vial' },
    { id: 7, name: 'Inj. Cyclophosphamide', type: 'Injectable', strength: '200mg, 500mg, 1g', packing: 'Single Vial' },
    { id: 8, name: 'Inj. Zolendronic Acid', type: 'Injectable', strength: '4mg', packing: 'Single Vial (Lyophilised) +Diluent' },
    { id: 9, name: 'Inj Dacarbazine HCL', type: 'Injectable', strength: '100mg, 200mg, 500mg', packing: 'Single Vial' },
    { id: 10, name: 'Inj. Dactinomycin', type: 'Injectable', strength: '0.5mg', packing: 'Single Vial' },
    { id: 11, name: 'Inj. Daunorubicin HCL', type: 'Injectable', strength: '20mg', packing: 'Single Vial' },
    { id: 12, name: 'Inj. Docetaxl', type: 'Injectable', strength: '20mg/0.5ml, 80mg/2ml,120mg/3ml', packing: 'Single Vial + Solvent' },
    { id: 13, name: 'Inj. Epirubicin', type: 'Injectable', strength: '10mg, 50mg', packing: 'Single Vial (Lyophilised)' },
    { id: 14, name: 'Inj. Etoposide', type: 'Injectable', strength: '100mg/5ml', packing: 'Single Vial' },
    { id: 15, name: 'Cap. Etoposide', type: 'Capsules', strength: '50mg', packing: 'Pack of 8 Caps.' },
    { id: 16, name: 'Inj. 5-Fluorouracil', type: 'Injectable', strength: '250mg/5ml, 500mg/10ml', packing: '10 Amps. ' },
    { id: 17, name: 'Inj. Gemcitabine', type: 'Injectable', strength: '200mg, 1g', packing: 'Single Vial (Lyophilised)' },
    { id: 18, name: 'Tab. Methotrexate', type: 'Tablets', strength: '2.5mg', packing: '10 Strips x 10 Tabs.' },
    { id: 19, name: 'Inj. Methotrexate “Preservative Free”', type: 'Injectable', strength: '15mg/3ml, 50mg/2ml, 500mg/5ml', packing: 'Single Vial' },
    { id: 20, name: 'Inj. Irinotecan HCL', type: 'Injectable', strength: '40mg/2ml, 100mg/5ml', packing: 'Single Vial' },
];

const tabletSyrupData = [
    { category: 'ANTIVIRAL', name: 'Aciclovir Cream BP', strength: '2.0%', packing: '5gm' },
    { category: 'ANTIVIRAL', name: 'Aciclovir Cream BP', strength: '5.0%', packing: '5gm' },
    { category: 'ANTIVIRAL', name: 'Aciclovir Oral Suspension', strength: '400mg / 5ml', packing: '100mI' },
    { category: 'ANTIVIRAL', name: 'Aciclovir Tablets', strength: '400mg / 5ml', packing: '10 X 10 Tablets' },
    { category: 'ANTIVIRAL', name: 'Aciclovir Tablets', strength: '400mg', packing: '10 X 10 Tablets' },
    { category: 'ANTIVIRAL', name: 'Aciclovir Tablets', strength: '800mg', packing: '10 X 10 Tablets' },
    { category: 'ANTIHYPERTENSIVE', name: 'Amiodarone HCI Tablets', strength: '100mg', packing: '10 X 10 Tablets, Strip' },
    { category: 'ANTIHYPERTENSIVE', name: 'Amiodarone HCI Tablets', strength: '200mg', packing: '10 X 10 Tablets,Strip' },
    { category: 'ANTIHYPERTENSIVE', name: 'Cefaclor Dispersible', strength: 'Tablets250mg', packing: '10 X 10 Tablets, Blister' },
    { category: 'ANTIHYPERTENSIVE', name: 'Amlodipine Besilate Tablets', strength: '5mg', packing: '10 X 14 Tablets, Blister' },
    { category: 'ANTIHYPERTENSIVE', name: 'Amlodipine Besilate Tablets', strength: '10mg', packing: '10 X 14 Tablets, Blister' },
    { category: 'ANTIHYPERTENSIVE', name: 'Atenolol Tablets', strength: '50mg', packing: '10 X 14 Tablets, Blister' },
    { category: 'ANTIHYPERTENSIVE', name: 'Atenolol Tablets', strength: '100 mg', packing: '10 X 14 Tablets, Blister' },
    { category: 'ANTIHYPERTENSIVE', name: 'Captopril Tablets', strength: '25mg', packing: '10 X 14 Tablets, Blister' },
    { category: 'ANTIHYPERTENSIVE', name: 'Captopril Tablets', strength: '50mg', packing: '10 X 14 Tablets, Blister' },
    { category: 'ANTIHYPERTENSIVE', name: 'Carvedilol Tablets', strength: '6.25mg', packing: '-' },
    { category: 'ANTIHYPERTENSIVE', name: 'Carvedilol Tablets', strength: '12.5mg', packing: '10 X 10 Tablets, Alu-Alu' },
    { category: 'ANTIHYPERTENSIVE', name: 'Carvedilol Tablets', strength: '25mg', packing: '10 X 10 Tablets,Alu-Alu' },
    { category: 'ANTIHYPERTENSIVE', name: 'Carvedilol Tablets', strength: '25mg', packing: '10 X 10 Tablets, Alu-Alu' },
];

const diagnosticData = [
    { code: 'PSC', name: '-SCAN® hCG CARD TEST [ URINE]', packing: '50 TESTS' },
    { code: 'PSCs', name: 'PREGNY-SCAN® hCG CARD TEST [ URINEor SERUM]', packing: '50 TESTS' },
    { code: 'PSM', name: 'PREGNY-SCAN® hCG URINE MIDSTREAM CARD TEST [ URINE]', packing: '1 TESTS' },
    { code: 'BLC', name: 'BHAT BIO-SCAN® LH ( OVULATION) CARD TEST [ URINE]', packing: '10 TESTS' },
    { code: 'HBC', name: 'HEPA-SCAN® HBsAg RAPID CARD TEST [SERUM or PLASMA]', packing: '50 TESTS' },
    { code: 'HBCwb', name: 'HEPA-SCAN® HBsAg RAPID CARD TEST [SERUM or PLASMA or WHOLE BLOOD]', packing: '50 TESTS' },
    { code: 'HCC', name: 'HEPA-SCAN® HCV CARD TEST [SERUM or PLASMA]', packing: '50 TESTS' },
    { code: 'HCCwb', name: 'HEPA-SCAN® HCV CARD TEST [SERUM or PLASMA or WHOLE BLOOD]', packing: '50 TESTS' },
    { code: 'ATS', name: 'AIDSCAN® HIV-1/2 TRISPOT TEST KIT [PLASMA or SERUM]', packing: '50 TESTS' },
    { code: 'PRT', name: 'PAREEKSHAK® HIV-1/2 RAPID SPOT TEST KIT [SERUM or PLASMA]', packing: '50 TESTS' },
    { code: 'PTC', name: 'PAREEKSHAK® HIV-1/2 TRILINE CARD TEST [SERUM or PLASMA ]', packing: '50 TESTS' },
    { code: 'PTCwb', name: 'PAREEKSHAK® HIV-1/2 TRILINE CARD TEST[SERUM or PLASMA or WHOLE BLOOD]', packing: '50 TESTS' },
    { code: 'MAL', name: 'MALERISCAN® MALARIA P.f/P.v 3 LINE ANTIBODY CARD TEST [PLASMA or SERUM]', packing: '50 TESTS' },
    { code: 'MAT', name: 'MALERISCAN® MALARIA P.f/P.v 3 LINE ANTIGEN CARD TEST [WHOLE BLOOD]', packing: '50 TESTS' },
    { code: 'MPfPAN', name: 'MALERISCAN® MALARIA P.f/PAN 3 LINE ANTIGEN CARD TEST [ WHOLE BLOOD]', packing: '50 TESTS' },
    { code: 'MPf', name: 'MALERISCAN® MALARIA P.f ANTIGEN CARD TEST [WHOLE BLOOD]', packing: '50 TESTS' },
    { code: 'BSC', name: 'BHAT BIO-SCAN® SYPHILIS CARD TEST [ PLASMA or SERUM]', packing: '50 TESTS' },
    { code: 'BSCwb', name: 'BHAT BIO-SCAN® SYPHILIS CARD TEST [ PLASMA or SERUM or WHOLE BLOOD]', packing: '50 TESTS' },
    { code: 'BDC', name: 'BHAT BIO-SCAN® DENGUE IgG/IgM CARD TEST [ SERUM or PLASMA ]', packing: '10 TESTS' },
    { code: 'BDCwb', name: 'BHAT BIO-SCAN® DENGUE IgG/IgM CARD TEST [ SERUM or PLASMA or WHOLE BLOOD ]', packing: '10 TESTS' },
    { code: 'BNS1', name: 'BHAT BI-SCAN® DENGUE NS1 CARD TEST [ PLASMA or SERUM]', packing: '10 TESTS' },
    { code: 'BNS1wb', name: 'BHAT BI-SCAN® DENGUE NS1 CARD TEST [ PLASMA or SERUM or WHOLE BLOOD]', packing: '10 TESTS' },
    { code: 'BDgmNS1', name: 'BHAT BIO-SCAN® DENGUE NS1+IgG/Igm CARD TEST [ PLASMA or SERUM ]', packing: '10 TESTS' },
    { code: 'BDgmNS1wb', name: 'BHAT BIO-SCAN® DENGUE NS1+IgG/Igm CARD TEST [ PLASMA or SERUM or WHOLE BLOOD]', packing: '10 TESTS' },
    { code: 'BCSm', name: 'BHAT BIO-SCAN® CHIKUNGUNYA IgM SPOT TEST [ PLASMA or SERUM]', packing: '10 TESTS' },
    { code: 'BCSg', name: 'BHAT BIO-SCAN® CHIKUNGUNYA IgG SPOT TEST [ PLASMA or SERUM]', packing: '10 TESTS' },
    { code: 'HTC', name: 'BHAT BIO-SCAN® TROPONIN-I CARD TEST [ PLASMA or SERUM]', packing: '10 TESTS' },
    { code: 'HTCwb', name: 'BHAT BIO-SCAN® TROPONIN-I CARD TEST [ PLASMA or SERUM or WHOLE BLOOD]', packing: '10 TESTS' },
];

const Pharmaceuticals = () => {
    const [activeTab, setActiveTab] = useState('soft-gel');

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Banner Section */}
            <div className="relative w-full h-[400px] overflow-hidden">
                <img
                    src="/Pharmaceutical-Products.jpg"
                    alt="Pharmaceutical Products"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Pharmaceutical Products</h1>
                    <p className="max-w-4xl text-center text-lg md:text-xl leading-relaxed">
                        Welcome to the heart of our commitment to health and well-being. At GJ Pharmaceuticals LLP, we take pride in offering a diverse range of Pharmaceutical Products crafted with precision, innovation, and a dedication to improving lives. Explore a world of healthcare solutions where quality meets efficacy, and patient well-being is at the forefront of our mission.
                    </p>
                </div>
            </div>

            {/* Tabs and Content Section */}
            <section className="container-custom py-12">
                <Tabs defaultValue="soft-gel" value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="flex flex-wrap h-auto justify-center gap-2 bg-transparent mb-8">
                        {[
                            { value: 'cardio', label: 'CARDIO CARE' },
                            { value: 'injections', label: 'INJECTIONS' },
                            { value: 'soft-gel', label: 'SOFT GEL CAPSULES' },
                            { value: 'suppository', label: 'SUPPOSITORY' },
                            { value: 'iv-fluids', label: 'IV FLUIDS' },
                            { value: 'anticancer', label: 'ANTICANCER DRUGS' },
                            { value: 'tablets', label: 'TABLETS, CAPSULES, SYRUP' },
                            { value: 'diagnostics', label: 'DIAGNOSTICS KITS' }
                        ].map(tab => (
                            <TabsTrigger
                                key={tab.value}
                                value={tab.value}
                                className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent px-4 py-2 uppercase text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                            >
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <TabsContent value="cardio" className="m-0">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50 hover:bg-gray-50">
                                        <TableHead className="w-[100px]">S No.</TableHead>
                                        <TableHead>Product Name</TableHead>
                                        <TableHead>Strength</TableHead>
                                        <TableHead>Packing</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {cardioData.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell className="font-medium">{item.id}</TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.strength}</TableCell>
                                            <TableCell>{item.packing}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TabsContent>

                        <TabsContent value="injections" className="m-0">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50 hover:bg-gray-50">
                                        <TableHead className="w-[100px]">S No.</TableHead>
                                        <TableHead>Product Name</TableHead>
                                        <TableHead>Packing</TableHead>
                                        <TableHead>Quantity/Capacity</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {injectionData.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell className="font-medium">{item.id}</TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.packing}</TableCell>
                                            <TableCell>{item.qty}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TabsContent>

                        <TabsContent value="soft-gel" className="m-0">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50 hover:bg-gray-50">
                                        <TableHead className="w-[100px]">S No.</TableHead>
                                        <TableHead>Product Name</TableHead>
                                        <TableHead className="text-right">Packing</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {softGelData.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell className="font-medium">{item.id}</TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell className="text-right">{item.packing}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TabsContent>

                        <TabsContent value="suppository" className="m-0">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50 hover:bg-gray-50">
                                        <TableHead className="w-[100px]">S No.</TableHead>
                                        <TableHead>Product Name</TableHead>
                                        <TableHead>Packing</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {suppositoryData.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell className="font-medium">{item.id}</TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.packing}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TabsContent>

                        <TabsContent value="iv-fluids" className="m-0">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50 hover:bg-gray-50">
                                        <TableHead className="w-[100px]">S No.</TableHead>
                                        <TableHead>Product Name</TableHead>
                                        <TableHead>Packing</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {ivFluidData.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell className="font-medium">{item.id}</TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.packing}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TabsContent>

                        <TabsContent value="anticancer" className="m-0">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50 hover:bg-gray-50">
                                        <TableHead className="w-[100px]">S No.</TableHead>
                                        <TableHead>Product Name</TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Strength</TableHead>
                                        <TableHead>Packing</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {anticancerData.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell className="font-medium">{item.id}</TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.type}</TableCell>
                                            <TableCell>{item.strength}</TableCell>
                                            <TableCell>{item.packing}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TabsContent>

                        <TabsContent value="tablets" className="m-0">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50 hover:bg-gray-50">
                                        <TableHead className="w-[150px]">Category</TableHead>
                                        <TableHead>Product Name</TableHead>
                                        <TableHead>Strength</TableHead>
                                        <TableHead>Packing</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {tabletSyrupData.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{item.category}</TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.strength}</TableCell>
                                            <TableCell>{item.packing}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TabsContent>

                        <TabsContent value="diagnostics" className="m-0">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50 hover:bg-gray-50">
                                        <TableHead className="w-[100px]">Code</TableHead>
                                        <TableHead>Product Name</TableHead>
                                        <TableHead>Packing</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {diagnosticData.map((item) => (
                                        <TableRow key={item.code}>
                                            <TableCell className="font-medium">{item.code}</TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.packing}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TabsContent>
                    </div>
                </Tabs>
            </section>

            {/* Additional Content Section with Images and Text */}
            <section className="container-custom py-16 bg-white">
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                        <img src="/products-info-1.png" alt="Products Overview" className="w-full h-auto object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                        <img src="/products-info-2.png" alt="Products Detail" className="w-full h-auto object-cover" />
                    </div>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Commitment Section */}
                    <div className="bg-secondary/5 rounded-3xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-8 text-primary">Our Pharmaceutical Commitment</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-foreground">Precision Formulations:</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our pharmaceutical products are meticulously formulated to address diverse healthcare needs. From essential medications to specialized formulations, each product is crafted with precision and adheres to the highest quality standards.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-foreground">Efficacy & Safety:</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Patient safety is paramount. Our pharmaceuticals undergo rigorous testing to ensure efficacy, safety, and reliability. We take pride in delivering products that healthcare professionals trust and patients rely on for their well-being.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-foreground">Innovation in Healthcare:</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We believe in the power of innovation to transform healthcare. Our commitment to Research and Development ensures that we stay at the forefront of medical advancements, continually introducing innovative pharmaceutical solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Diverse Solutions Section */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-primary">Diverse Healthcare Solutions</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-card p-6 rounded-xl border hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-semibold mb-3 text-foreground">Therapeutic Diversity</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our pharmaceutical range encompasses a broad spectrum of therapeutic areas. From cardiovascular health to pain management, infectious diseases to mental health, we cater to diverse medical needs with a comprehensive portfolio of medications.
                                </p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-semibold mb-3 text-foreground">Patient-Centric Approach</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Understanding the unique needs of patients is fundamental to our approach. We actively engage with healthcare professionals and patients to develop pharmaceutical solutions that prioritize ease of use, compliance, and positive health outcomes.
                                </p>
                            </div>
                            <div className="bg-card p-6 rounded-xl border hover:shadow-md transition-shadow md:col-span-2">
                                <h3 className="text-xl font-semibold mb-3 text-foreground">Global Quality Standards</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our pharmaceutical manufacturing facilities adhere to global quality standards. Certifications and regulatory approvals affirm our commitment to delivering pharmaceuticals that meet international benchmarks, ensuring the highest level of quality.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us Section */}
                    <div className="bg-primary/5 rounded-3xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-8 text-primary">Why Choose GJ Pharmaceuticals LLP?</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg text-foreground inline">Research-Driven Innovation: </h3>
                                    <p className="text-muted-foreground inline">Our dedication to research and development ensures that we bring cutting-edge pharmaceutical solutions to the market, addressing evolving healthcare challenges.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg text-foreground inline">Quality Assurance: </h3>
                                    <p className="text-muted-foreground inline">Stringent quality control processes guarantee the consistency and reliability of our pharmaceutical products, instilling confidence in healthcare professionals and patients alike.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg text-foreground inline">Global Impact: </h3>
                                    <p className="text-muted-foreground inline">Our pharmaceuticals reach patients around the world, making a positive impact on health and well-being globally.</p>
                                </div>
                            </div>

                            <p className="text-lg font-medium text-primary pt-6 italic border-t border-primary/20 mt-6">
                                Experience the difference that commitment to quality, innovation, and patient well-being can make in healthcare. Choose GJ Pharmaceuticals LLP for pharmaceutical products that prioritize health and elevate the standard of care.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Pharmaceuticals;

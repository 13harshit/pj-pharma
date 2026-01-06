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

const nutraData = {
    'skin-glow': {
        label: 'Skin Glow',
        columns: ['Sr No', 'Content', 'Strength (Mg)'],
        data: [
            { id: 1, content: 'L glutaithion', strength: '1000' },
            { id: 2, content: 'Alpha lepoic acid', strength: '100' },
            { id: 3, content: 'Grape seed extract', strength: '50' },
            { id: 4, content: 'Bio piperin', strength: '5' },
        ]
    },
    'hair-loss': {
        label: 'Hair Loss',
        columns: ['Sr No', 'Content', 'Strength (Mg/Mcg)'],
        data: [
            { id: 1, content: 'soya protein hydrolysate', strength: '330 Mg' },
            { id: 2, content: 'Vitamin C', strength: '40 Mg' },
            { id: 3, content: 'B3', strength: '15 Mg' },
            { id: 4, content: 'Biotin', strength: '10 Mg' },
            { id: 5, content: 'E', strength: '5 Mg' },
            { id: 6, content: 'B5', strength: '5 Mg' },
            { id: 7, content: 'Folic acid', strength: '1 Mg' },
            { id: 8, content: 'calcium', strength: '100 Mg' },
            { id: 9, content: 'Magnesium', strength: '50 Mg' },
            { id: 10, content: 'Iron', strength: '14 Mg' },
            { id: 11, content: 'Zinc', strength: '10 Mg' },
            { id: 12, content: 'Manganese', strength: '5 Mg' },
            { id: 13, content: 'Copper', strength: '1.7 Mg' },
            { id: 14, content: 'Selenium', strength: '40 Mcg' },
            { id: 15, content: 'soyA isoflavones', strength: '20 Mg' },
            { id: 16, content: 'Grape seed extract', strength: '100 Mg' },
        ]
    },
    'skin-cancer': {
        label: 'Skin Cancer',
        columns: ['Sr No', 'Content', 'Strength (Mg)'],
        data: [
            { id: 1, content: 'cucrumin 95%', strength: '500' },
            { id: 2, content: 'piperin', strength: '20' },
            { id: 3, content: 'l selenomethionine', strength: '5' },
            { id: 4, content: 'lycopene', strength: '5' },
            { id: 5, content: 'Vitamin C (China)', strength: '40' },
        ]
    },
    'dietary-supplement': {
        label: 'Dietary Supplement',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'Grape seed extract', strength: '50 mg' },
            { id: 2, content: 'Ginseng extract powder', strength: '21.25 mg' },
            { id: 3, content: 'Ginko biloba extract', strength: '20 mg' },
            { id: 4, content: 'Green tea extract', strength: '10 mg' },
            { id: 5, content: 'Citrus bioflavanoids', strength: '12.5 mg' },
            { id: 6, content: 'garlic powder', strength: '2 mg' },
            { id: 7, content: 'Lycopene', strength: '2000 mcg' },
            { id: 8, content: 'Methionine', strength: '22 mg' },
            { id: 9, content: 'Glutamic acid', strength: '20 mg' },
            { id: 10, content: 'L-lysine', strength: '10 mg' },
            { id: 11, content: 'L-Carnitine L-Tratrate', strength: '2.5 mg' },
            { id: 12, content: 'L-Cysteine', strength: '2.5 mg' },
            { id: 13, content: 'Niacinamide', strength: '15 mg' },
            { id: 14, content: 'Vitamin C', strength: '100 mg' },
            { id: 15, content: 'Vitamin E', strength: '10 mg' },
            { id: 16, content: 'Vitamin B1', strength: '1 mg' },
            { id: 17, content: 'Vitamin B2', strength: '1 mg' },
            { id: 18, content: 'Vitamin A', strength: '5000 IU' },
            { id: 19, content: 'Vitamin B6', strength: '0.5 mg' },
            { id: 20, content: 'Vitamin K3', strength: '80 mcg' },
            { id: 21, content: 'Vitamin D3', strength: '5 mcg' },
            { id: 22, content: 'Vitamin B12', strength: '0.5 mcg' },
            { id: 23, content: 'Choline nitrate', strength: '10 mg' },
            { id: 24, content: 'Calcium Pentothenate', strength: '5 mg' },
            { id: 25, content: 'Biotin', strength: '30 mcg' },
            { id: 26, content: 'Iron', strength: '12 mg' },
            { id: 27, content: 'Zinc', strength: '22.5 mg' },
            { id: 28, content: 'Potassium', strength: '10 mg' },
            { id: 29, content: 'Chloride', strength: '9.07 mg' },
            { id: 30, content: 'Manganese', strength: '4 mg' },
            { id: 31, content: 'Calcium', strength: '5 mg' },
            { id: 32, content: 'Phosphorus', strength: '3.66 mg' },
            { id: 33, content: 'Silicon', strength: '2 mg' },
            { id: 34, content: 'Copper', strength: '1.7 mg' },
            { id: 35, content: 'Boron', strength: '1 mg' },
            { id: 36, content: 'Nickel', strength: '130 mcg' },
            { id: 37, content: 'Iodine', strength: '50 mcg' },
            { id: 38, content: 'Selenium', strength: '35 mcg' },
            { id: 39, content: 'Vanadium', strength: '10 mcg' },
            { id: 40, content: 'Tin', strength: '2 mcg' },
            { id: 41, content: 'flavour', strength: '50 mg' },
        ]
    },
    'anaemia': {
        label: 'Anaemia',
        columns: ['Content', 'Strength'],
        data: [
            { id: 1, content: 'Ferrous Suphate', strength: '200 mg' },
            { id: 2, content: 'Folic Acid', strength: '0.4 mg' },
        ]
    },
    'bone': {
        label: 'Bone',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'L-Glutathione', strength: '100 mg' },
            { id: 2, content: 'Alpha Lipolic Acid', strength: '100 mg' },
            { id: 3, content: 'Vitamin C', strength: '100 mg' },
            { id: 4, content: 'Pine Bark Extract', strength: '75 mg' },
        ]
    },
    'anti-oxidant': {
        label: 'Anti Oxidant',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'Alpha Lipolic Acid', strength: '100mg' },
            { id: 2, content: 'L-Methyl Folate', strength: '1mg' },
            { id: 3, content: 'Vitamin B12', strength: '1mcg' },
            { id: 4, content: 'Pyridoxal-5-Phosphate', strength: '0.5mg' },
            { id: 5, content: 'Vitamin D3', strength: '200I.U' },
        ]
    },
    'expectorant': {
        label: 'Expectorant',
        columns: ['Sr No', 'Content', 'Strength (mg)'],
        data: [
            { id: 1, content: 'Adulsa Leavse Extract', strength: '100' },
            { id: 2, content: 'Dry jinger', strength: '10' },
            { id: 3, content: 'Turmeric 95%', strength: '10' },
            { id: 4, content: 'Amal', strength: '250' },
            { id: 5, content: 'Mulethi', strength: '40' },
            { id: 6, content: 'Kulinjan', strength: '50' },
            { id: 7, content: 'Tulsi', strength: '25' },
            { id: 8, content: 'Black paper', strength: '90' },
            { id: 9, content: 'Bharangi', strength: '50' },
            { id: 10, content: 'Shankhpuspi', strength: '70' },
            { id: 11, content: 'kalemegh', strength: '90' },
            { id: 12, content: 'Echinacea extract', strength: '25' },
            { id: 13, content: 'Coriander extract', strength: '100' },
            { id: 14, content: 'Ashwagandha extract', strength: '100' },
            { id: 15, content: 'Giloy extract', strength: '20' },
        ]
    },
    'male-infertility': {
        label: 'Male Infertility',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'Ascorbic Acid', strength: '250 mg' },
            { id: 2, content: 'Lepidium Meyenii (Maca Root)', strength: '100 mg' },
            { id: 3, content: 'Co-Q10', strength: '100 mg' },
            { id: 4, content: 'Zinc Amino Acid Chelate', strength: '75 mg' },
            { id: 5, content: 'D-Alpha-Tocopheryl Acetate', strength: '73.5 mg' },
            { id: 6, content: 'Acetyl-L-Carnitine', strength: '50 mg' },
            { id: 7, content: 'L-Methylfolate Calcium', strength: '0.5 mg' },
            { id: 8, content: 'Cyanocobaalamin (Vit-B12)', strength: '33 mcg' },
        ]
    },
    'gout': {
        label: 'Gout',
        columns: ['Formula', 'Sr No', 'Content', 'Strength'],
        data: [
            { formula: 'Formula 1', id: 1, content: 'Glucosamine', strength: '500 mg' },
            { formula: 'Formula 1', id: 2, content: 'Methylsufonyl Metahane (MSM)', strength: '200 mg' },
            { formula: 'Formula 1', id: 3, content: 'Chondroitin', strength: '100 mg' },
            { formula: 'Formula 2', id: 1, content: 'Glucosamine', strength: '500 mg' },
            { formula: 'Formula 2', id: 2, content: 'Chondroitin', strength: '400 mg' },
            { formula: 'Formula 2', id: 3, content: 'Methylsufonyl Metahane (MSM)', strength: '250 mg' },
            { formula: 'Formula 2', id: 4, content: 'Vitamin C', strength: '20 mg' },
            { formula: 'Formula 2', id: 5, content: 'Sulfate de cuivre', strength: '0.5 mg' },
            { formula: 'Formula 2', id: 6, content: 'Silicium', strength: '150 mcg' },
            { formula: 'Formula 2', id: 7, content: 'Bore', strength: '150 mcg' },
            { formula: 'Formula 2', id: 8, content: 'Selenium', strength: '150 mcg' },
            { formula: 'Formula 2', id: 9, content: 'Picolinate de chrome', strength: '100 mcg' },
            { formula: 'Formula 2', id: 10, content: 'Zinc', strength: '4 mg' },
            { formula: 'Formula 2', id: 11, content: 'Magnesium', strength: '2 mg' },
        ]
    },
    'blood-pressure': {
        label: 'Regulating Blood Pressure',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'L-Glutathione Complex', strength: '600 mg' },
            { id: 2, content: 'N-Acetyl Cysteine', strength: '200 mg' },
            { id: 3, content: 'Astaxanthin (Natural)', strength: '4 mg' },
            { id: 4, content: 'Grape Seed Extract', strength: '100 mg' },
            { id: 5, content: 'Licorice Extract', strength: '50 mg' },
            { id: 6, content: 'Vitamin C', strength: '20 mg' },
            { id: 7, content: 'Vitamin E', strength: '20 mg' },
            { id: 8, content: 'Zinc', strength: '10 mg' },
        ]
    },
    'growth-body': {
        label: 'Growth of Body',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'Denatured Collagen Peptide Type II', strength: '40 mg' },
            { id: 2, content: 'Rosehip Extract', strength: '750 mg' },
            { id: 3, content: 'Sodium Hyaluronate', strength: '30 mg' },
            { id: 4, content: 'Vitamin C', strength: '35 mg' },
        ]
    },
    'weight-loss': {
        label: 'Reduce of Body Weight',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'Spharranthus Indicus', strength: '300 mg' },
            { id: 2, content: 'Garcinia Mangostana', strength: '100 mg' },
            { id: 3, content: 'Green Coffee Extract', strength: '100 mg' },
            { id: 4, content: 'L-Theanine', strength: '100 mg' },
            { id: 5, content: 'Glucomanon', strength: '500 mg' },
        ]
    },
    'protect-skin': {
        label: 'Protect Skin',
        columns: ['Sr No', 'Content', 'Strength (Mg)'],
        data: [
            { id: 1, content: 'Polypodium leucotomos extract', strength: '480' },
            { id: 2, content: 'Co-Enzyme Q 10', strength: '300' },
            { id: 3, content: 'Methylcobalamin', strength: '1500 Mcg' },
            { id: 4, content: 'Vitamin E', strength: '15' },
            { id: 5, content: 'Astaxanthin', strength: '15' },
            { id: 6, content: 'Curcum', strength: '50' },
            { id: 7, content: 'omega 3 fatty acid', strength: '150' },
            { id: 8, content: 'Bio piperin', strength: '5' },
        ]
    },
    'ostio-arthristis': {
        label: 'Ostio Arthristis',
        columns: ['Sr No', 'Content', 'Strength (Mg)'],
        data: [
            { id: 1, content: 'glucosamine HCL', strength: '500' },
            { id: 2, content: 'chodroitin Sulphate', strength: '400' },
            { id: 3, content: 'MSM', strength: '200' },
            { id: 4, content: 'Collagen peptide tyep 2', strength: '40' },
            { id: 5, content: 'Hyluronic acid', strength: '3.3' },
        ]
    },
    'kidney-supplement': {
        label: 'Kidney Supplement',
        columns: ['Sr No', 'Content', 'Strength (Mg)'],
        data: [
            { id: 1, content: 'Calcium -3 Methyl-2 Oxovalerate', strength: '67' },
            { id: 2, content: 'Calcium -4 Methyl-2 Oxovalerate', strength: '101' },
            { id: 3, content: 'Calcium -2 Oxe-3-Phenylpropionate', strength: '68' },
            { id: 4, content: 'Calcium -3 Methyl-2 Oxobutyrate', strength: '86' },
            { id: 5, content: 'Calcium-2 Hydroxy-4(methylthio)', strength: '59' },
            { id: 6, content: 'Lysine', strength: '105' },
            { id: 7, content: 'L-Tryptophan', strength: '23' },
            { id: 8, content: 'L-Histidine', strength: '35' },
            { id: 9, content: 'L-Tyrosine', strength: '30' },
            { id: 10, content: 'L-Threonine', strength: '53' },
        ]
    },
    'skin-care-glow': {
        label: 'Skin Care and Glow',
        columns: ['Sr No', 'Content', 'Strength (Mg)'],
        data: [
            { id: 1, content: 'L-Glutathione', strength: '600' },
            { id: 2, content: 'n acetyl cystene', strength: '200' },
            { id: 3, content: 'Astaxanthin', strength: '4' },
            { id: 4, content: 'Grape Seed Ext', strength: '100' },
            { id: 5, content: 'Licorice Ext (Mulethi)', strength: '50' },
            { id: 6, content: 'Vitamin C', strength: '40' },
            { id: 7, content: 'Vitamin E', strength: '40' },
            { id: 8, content: 'Zinc Oxide', strength: '20' },
        ]
    },
    'hair-loss-2': {
        label: 'Hair Loss (Advanced)',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'Biotin', strength: '20 Mg' },
            { id: 2, content: 'Gamma Linolenic acid (from borage oil)', strength: '100 Mg' },
            { id: 3, content: 'Iron', strength: '21 Mg' },
            { id: 4, content: 'Green Tea Extract', strength: '100 Mg' },
            { id: 5, content: 'Grape Sheed Ext', strength: '100 Mg' },
            { id: 6, content: 'Copper', strength: '3 Mg' },
            { id: 7, content: 'Zinc Oxide', strength: '22.5 Mg' },
            { id: 8, content: 'Selenium Dioxide', strength: '70 Mcg' },
            { id: 9, content: 'Calcium Pantothenate', strength: '100 Mg' },
            { id: 10, content: 'Protein Hydrolysate', strength: '360 Mg' },
        ]
    },
    'antiarthritic': {
        label: 'Antiarthritic',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'Calcium Citrate Malate', strength: '1000 mg' },
            { id: 2, content: 'Vitamin D3', strength: '200 IU' },
            { id: 3, content: 'Zinc Sulphate', strength: '7.5 mg' },
            { id: 4, content: 'Magnesium', strength: '50 mg' },
        ]
    },
    'heart-attack': {
        label: 'Prevent Heart Attack/Stroke',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'Omega 3 Fatty Acid', strength: '250 mg' },
            { id: 2, content: 'Zinc', strength: '61.8 mg' },
            { id: 3, content: 'Nicotinamide', strength: '50 mg' },
            { id: 4, content: 'Pyridoxine (Vit-B6)', strength: '3 mg' },
            { id: 5, content: 'L Methyl Folate', strength: '1 mg' },
            { id: 6, content: 'Chromiun', strength: '50 mcg' },
            { id: 7, content: 'Vitamin B12', strength: '1 mcg' },
        ]
    },
    'bone-formation': {
        label: 'Bone Formation',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'Coral Calcium', strength: '500 mg' },
            { id: 2, content: 'Magnesium', strength: '100 mg' },
            { id: 3, content: 'Zinc', strength: '15 mg' },
            { id: 4, content: 'Folic Acid', strength: '5 mg' },
            { id: 5, content: 'Vitamin D3', strength: '200 IU' },
        ]
    },
    'amino-acid': {
        label: 'Amino Acid',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'Myo Inositol', strength: '550 mg' },
            { id: 2, content: 'Berberine Hydrochloride', strength: '500 mg' },
            { id: 3, content: 'D-Chiro Inositol', strength: '13.8 mg' },
            { id: 4, content: 'Melatoin', strength: '2 mg' },
            { id: 5, content: 'L-Methylfolate Calcium', strength: '0.05 mg' },
            { id: 6, content: 'Chromium', strength: '200 mcg' },
            { id: 7, content: 'Vitamin D3', strength: '200 IU' },
        ]
    },
    'bone-formation-2': {
        label: 'Bone Formation (Formulations)',
        columns: ['Formula', 'Sr No', 'Content', 'Strength'],
        data: [
            { formula: 'Formula 1', id: 1, content: 'Calcium Citrate Malate', strength: '1150 mg' },
            { formula: 'Formula 1', id: 2, content: 'Elemental Calcium', strength: '250 mg' },
            { formula: 'Formula 1', id: 3, content: 'Vitamin D3', strength: '200 IU' },
            { formula: 'Formula 1', id: 4, content: 'Folic Acid', strength: '5 mg' },
            { formula: 'Formula 2', id: 1, content: 'L-Carnitine L-Tartrate', strength: '500 mg' },
            { formula: 'Formula 2', id: 2, content: 'Co-Q10', strength: '200 mg' },
            { formula: 'Formula 2', id: 3, content: 'Astaxanthin (10%)', strength: '16 mg' },
            { formula: 'Formula 2', id: 4, content: 'Zinc Sulphate', strength: '12 mg' },
            { formula: 'Formula 2', id: 5, content: 'Lycopene (10%)', strength: '5000 mcg' },
            { formula: 'Formula 2', id: 6, content: 'Sodium Selenate', strength: '40 mcg' },
        ]
    },
    'antidote': {
        label: 'Antidote',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'Activated Charcoal', strength: '125 mg' },
        ]
    },
    'energy-formation': {
        label: 'Energy Production',
        columns: ['Formula', 'Sr No', 'Content', 'Strength'],
        data: [
            { formula: 'Formula 1', id: 1, content: 'Glucosamine', strength: '500 mg' },
            { formula: 'Formula 1', id: 2, content: 'Calcium', strength: '102 mg' },
            { formula: 'Formula 1', id: 3, content: 'Chondroitin', strength: '100 mg' },
            { formula: 'Formula 1', id: 4, content: 'Potassium', strength: '80 mg' },
            { formula: 'Formula 1', id: 5, content: 'Selenium', strength: '50 mg' },
            { formula: 'Formula 1', id: 6, content: 'Iron', strength: '2.1 mg' },
            { formula: 'Formula 1', id: 7, content: 'Methylsulfonyl Methane (MSM)', strength: '20 mg' },
            { formula: 'Formula 2', id: 1, content: 'Co-Enzyme Q-10', strength: '100 mg' },
            { formula: 'Formula 2', id: 2, content: 'Omega 3 Fatty Acid', strength: '150 mg' },
            { formula: 'Formula 2', id: 3, content: 'L-Arginine', strength: '100 mg' },
            { formula: 'Formula 2', id: 4, content: 'L-Carnitine L-Tartrate', strength: '50 mg' },
            { formula: 'Formula 2', id: 5, content: 'Wheat Germ Oil', strength: '25 mg' },
            { formula: 'Formula 2', id: 6, content: 'Lycopene 6%', strength: '5000 mcg' },
        ]
    },
    'malnutrition': {
        label: 'Fight Malnutrition',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'Moringa Oleifera Leaves', strength: '500 mg' },
        ]
    },
    'amino-antioxidant': {
        label: 'Aminoacids and Anti-oxidant',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'Saw Palmetto', strength: '200 mg' },
            { id: 2, content: 'Beta-Siti sterol', strength: '50 mg' },
            { id: 3, content: 'Inositol', strength: '10 mg' },
            { id: 4, content: 'L-Arginine', strength: '50 mg' },
            { id: 5, content: 'Niacinamide', strength: '20 mg' },
            { id: 6, content: 'Iron', strength: '10 mg' },
            { id: 7, content: 'Slenium', strength: '50 mcg' },
            { id: 8, content: 'Folic Acid', strength: '1.5 mg' },
            { id: 9, content: 'Biotin', strength: '30 mcg' },
            { id: 10, content: 'L-Cysteine', strength: '100 mg' },
            { id: 11, content: 'L-Methionine', strength: '40 mg' },
            { id: 12, content: 'Vitamin B3', strength: '10 mg' },
            { id: 13, content: 'Calcium pantothenate', strength: '50 mg' },
            { id: 14, content: 'Vitamin B5', strength: '5 mg' },
            { id: 15, content: 'Vitamin B6', strength: '20 mg' },
            { id: 16, content: 'Zinc Sulphate', strength: '5 mg' },
            { id: 17, content: 'Magnesium Chloride', strength: '2 mg' },
            { id: 18, content: 'Copper gluconate', strength: '0.9 mg' },
        ]
    },
    'female-infertility': {
        label: 'Female Infertility',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'Acorbic Acid', strength: '200 mg' },
            { id: 2, content: 'Magnesium Oxide', strength: '175 mg' },
            { id: 3, content: 'D-Alpha-Tocopheryl Acetate', strength: '147 mg' },
            { id: 4, content: 'Reduced Co-encyme Q10', strength: '60 mg' },
            { id: 5, content: 'Zinc Sulphate Monohydrate', strength: '41.6 mg' },
            { id: 6, content: 'Nicotinamide', strength: '20 mg' },
            { id: 7, content: 'Ferrous Fumarate', strength: '18.85 mg' },
            { id: 8, content: 'Mangenese Sulphate', strength: '15.4 mg' },
            { id: 9, content: 'Calcium Ascobate', strength: '10 mg' },
            { id: 10, content: 'Calcium D-Pantothenate', strength: '4.6 mg' },
            { id: 11, content: 'Copper Sulphate', strength: '3.3 mg' },
            { id: 12, content: 'Riboflavin', strength: '1.5 mg' },
            { id: 13, content: 'Thiamine Mononitrate', strength: '1.5 mg' },
            { id: 14, content: 'Beta Carotene', strength: '1.5 mg' },
            { id: 15, content: 'L-Methylfolate Calcium', strength: '1 mg' },
            { id: 16, content: 'Pyridoxal-5-Phosphate', strength: '0.5 mg' },
            { id: 17, content: 'Potassium Iodide', strength: '197 mcg' },
            { id: 18, content: 'Biotin', strength: '30 mcg' },
            { id: 19, content: 'Cyanocobalamin (Vit-B12)', strength: '50 mcg' },
        ]
    },
    'antioxidant-ed': {
        label: 'Antioxidant, Erectile Dysfunction',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'Soy Isoflavones', strength: '100 mg' },
            { id: 2, content: 'Vit-K2-7', strength: '45 mcg' },
            { id: 3, content: 'Calcitriol', strength: '0.25 mcg' },
            { id: 4, content: 'Calcium Citrate Malate', strength: '500 mg' },
            { id: 5, content: 'Magnesium', strength: '100 mg' },
            { id: 6, content: 'Alpha Lipolic Acid', strength: '50 mg' },
            { id: 7, content: 'Tocotrienols-50% (Vitamin E)', strength: '30 mg' },
            { id: 8, content: 'Vitamin C', strength: '75 mg' },
            { id: 9, content: 'Vitamin B6', strength: '20 mg' },
            { id: 10, content: 'Vitamin B1', strength: '15 mg' },
            { id: 11, content: 'Vitamin B2', strength: '5 mg' },
            { id: 12, content: 'Cynocobalamin (Vit-B12)', strength: '1 mcg' },
            { id: 13, content: 'Vitamin A', strength: '2200 IU' },
            { id: 14, content: 'Vitamin D3', strength: '200 IU' },
            { id: 15, content: 'P.A.B.A', strength: '25 mg' },
            { id: 16, content: 'Nicotinamide', strength: '20 mg' },
            { id: 17, content: 'Calcium Pantothenate', strength: '20 mg' },
            { id: 18, content: 'Iron', strength: '20 mg' },
            { id: 19, content: 'Zinc', strength: '15 mg' },
            { id: 20, content: 'Astaxenthene', strength: '8 mg' },
            { id: 21, content: 'Manganese', strength: '2 mg' },
            { id: 22, content: 'Boron', strength: '1 mg' },
            { id: 23, content: 'Copper', strength: '1 mg' },
            { id: 24, content: 'Lycopene', strength: '1250 mcg' },
            { id: 25, content: 'Folic Acid', strength: '500 mcg' },
            { id: 26, content: 'Iodine', strength: '225 mcg' },
            { id: 27, content: 'Selenium', strength: '100 mcg' },
            { id: 28, content: 'Chromium', strength: '80 mcg' },
            { id: 29, content: 'Biotin', strength: '30 mcg' },
        ]
    },
    'erectile-dysfunction': {
        label: 'Erectile Dysfunction',
        columns: ['Sr No', 'Content', 'Strength'],
        data: [
            { id: 1, content: 'palmitoylethanolamide', strength: '300 Mg' },
            { id: 2, content: 'Alpha Lipoic Acid', strength: '200 Mg' },
            { id: 3, content: 'Vitamin B5', strength: '10 Mg' },
            { id: 4, content: 'Vitamin B3', strength: '20 Mg' },
            { id: 5, content: 'Vitamin B2', strength: '1.8 Mg' },
            { id: 6, content: 'Vitamin B6', strength: '1.6 Mg' },
            { id: 7, content: 'Vitamin B1', strength: '5 Mg' },
            { id: 8, content: 'FOLIC ACID', strength: '5 Mg' },
            { id: 9, content: 'Vitamin B12', strength: '1500 Mcg' },
            { id: 10, content: 'Bio Piperine', strength: '5 Mg' },
        ]
    }
};

const Nutraceuticals = () => {
    const [activeTab, setActiveTab] = useState('skin-glow');

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Banner Section */}
            <div className="relative w-full h-[400px] overflow-hidden">
                <img
                    src="/nutraceuticals-hero.png"
                    alt="Nutraceuticals and Food Supplements"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white p-8">
                    <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-sm font-medium mb-4 text-cyan-400">
                        Nutraceuticals and Food Supplements
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center max-w-4xl leading-tight">
                        Welcome to the world of Nutraceuticals and Food Supplements at GJ Pharmaceuticals LLP, where science and nature converge to support your well-being.
                    </h1>
                    <p className="max-w-3xl text-center text-lg text-gray-200 leading-relaxed">
                        Our range of premium nutraceuticals and food supplements is crafted with precision, backed by scientific research, and designed to enhance the vitality of individuals seeking a holistic approach to health.
                    </p>
                </div>
            </div>

            {/* Tabs and Content Section */}
            <section className="container-custom py-12">
                <Tabs defaultValue="skin-glow" value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <div className=" overflow-x-auto pb-4 mb-8">
                        <TabsList className="flex flex-wrap h-auto justify-start md:justify-center gap-2 bg-transparent w-max md:w-full mx-auto">
                            {Object.entries(nutraData).map(([key, value]) => (
                                <TabsTrigger
                                    key={key}
                                    value={key}
                                    className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs md:text-sm font-medium text-gray-600 hover:text-primary transition-all whitespace-nowrap"
                                >
                                    {value.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden min-h-[400px]">
                        {Object.entries(nutraData).map(([key, value]) => (
                            <TabsContent key={key} value={key} className="m-0 animate-in fade-in-50 duration-300">
                                <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                                    <h2 className="text-xl font-semibold text-gray-800">{value.label} Products List</h2>
                                </div>
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-gray-50 hover:bg-gray-50">
                                            {value.columns.map((col, idx) => (
                                                <TableHead key={idx} className={idx === 0 ? "w-[100px]" : ""}>{col}</TableHead>
                                            ))}
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {value.data.map((item: any, idx) => (
                                            <TableRow key={idx}>
                                                {value.columns.includes('Formula') && <TableCell className="font-semibold text-primary">{item.formula || '-'}</TableCell>}
                                                <TableCell className="font-medium text-gray-600">{item.id}</TableCell>
                                                <TableCell className="text-gray-900 font-medium">{item.content}</TableCell>
                                                <TableCell>{item.strength}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </section>

            <section className="container-custom py-16 bg-white">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="bg-secondary/5 rounded-3xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-6 text-primary">Our Nutraceutical Commitment:</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold mb-2 text-foreground">Science-Backed Formulations:</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Harnessing the power of scientific research, our nutraceuticals are formulated with a commitment to providing you with targeted and effective solutions. Each product is backed by rigorous research, ensuring the highest standards of quality and efficacy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Nutraceuticals;

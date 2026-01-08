import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Pill } from 'lucide-react';
import { useState } from 'react';

const GeneralProducts = () => {
    const [activeTab, setActiveTab] = useState('antiviral');

    const antiviralProducts = [
        { name: "Aciclovir Cream BP", strength: "2.0%", packing: "5gm" },
        { name: "Aciclovir Cream BP", strength: "5.0%", packing: "5gm" },
        { name: "Aciclovir Oral Suspension", strength: "400mg / 5ml", packing: "100ml" },
        { name: "Aciclovir Tablets", strength: "400mg", packing: "10 X 10 Tablets" },
        { name: "Aciclovir Tablets", strength: "800mg", packing: "10 X 10 Tablets" }
    ];

    const antihypertensiveProducts = [
        { name: "Amiodarone HCI Tablets", strength: "100mg", packing: "10 X 10 Tablets, Strip" },
        { name: "Amiodarone HCI Tablets", strength: "200mg", packing: "10 X 10 Tablets,Strip" },
        { name: "Cefaclor Dispersible Tablets", strength: "250mg", packing: "10 X 10 Tablets, Blister" },
        { name: "Amlodipine Besilate Tablets", strength: "5mg", packing: "10 X 14 Tablets, Blister" },
        { name: "Amlodipine Besilate Tablets", strength: "10mg", packing: "10 X 14 Tablets, Blister" },
        { name: "Atenolol Tablets", strength: "50mg", packing: "10 X 14 Tablets, Blister" },
        { name: "Atenolol Tablets", strength: "100 mg", packing: "10 X 14 Tablets, Blister" },
        { name: "Captopril Tablets", strength: "25mg", packing: "10 X 14 Tablets, Blister" },
        { name: "Captopril Tablets", strength: "50mg", packing: "10 X 14 Tablets, Blister" },
        { name: "Carvedilol Tablets", strength: "6.25mg", packing: "10 X 10 Tablets, Alu-Alu" },
        { name: "Carvedilol Tablets", strength: "12.5mg", packing: "10 X 10 Tablets, Alu-Alu" },
        { name: "Carvedilol Tablets", strength: "25mg", packing: "10 X 10 Tablets, Alu-Alu" }
    ];

    const tabs = [
        { id: 'antiviral', label: 'ANTIVIRAL', products: antiviralProducts },
        { id: 'antihypertensive', label: 'ANTIHYPERTENSIVE', products: antihypertensiveProducts }
    ];

    const activeProducts = tabs.find(tab => tab.id === activeTab)?.products || [];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                                <Pill className="w-4 h-4" />
                                <span className="text-sm font-semibold">General Pharmaceutical Products</span>
                            </div>
                            <h1 className="text-5xl font-bold text-slate-900 mb-6">Tablets, Capsules & Syrups</h1>
                            <p className="text-xl text-slate-600 leading-relaxed">Comprehensive range of oral dosage forms for various therapeutic applications.</p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            {/* Tabs */}
                            <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-6 py-3 font-semibold text-sm transition-all ${activeTab === tab.id
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-slate-600 hover:text-blue-600'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Product Table */}
                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
                                    <h2 className="text-2xl font-bold text-white">{tabs.find(t => t.id === activeTab)?.label} Products</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-slate-50 border-b-2 border-slate-200">
                                            <tr>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">S.No.</th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Product Name</th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Strength</th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Packing</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {activeProducts.map((product, index) => (
                                                <motion.tr
                                                    key={index}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.02 }}
                                                    className="hover:bg-blue-50 transition-colors"
                                                >
                                                    <td className="px-6 py-4 text-sm text-slate-600">{index + 1}</td>
                                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{product.name}</td>
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.strength}</td>
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.packing}</td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                                <p className="text-sm text-slate-700">
                                    <span className="font-semibold text-blue-700">Note:</span> All products are manufactured under WHO-GMP certified facilities with stringent quality control measures.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Featured Product Section */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                            <div className="flex flex-col md:flex-row items-center">
                                {/* Product Image */}
                                <div className="md:w-1/2 p-8 md:p-12 bg-slate-50 flex items-center justify-center border-r border-slate-100">
                                    <div className="relative w-full max-w-2xl">
                                        <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 transform scale-110"></div>
                                        <img
                                            src="/medicine/tablet-sample.png"
                                            alt="Kalcigen SG Product"
                                            className="relative z-10 w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="mb-8">
                                        <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-4">
                                            <span className="text-blue-600 font-bold tracking-wider text-xs uppercase">Featured Product</span>
                                        </div>
                                        <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">Kalcigen SG</h3>
                                        <p className="text-lg text-blue-600 font-medium">Calcitriol, Calcium Carbonate & Zinc Sulphate Softgel Capsules</p>
                                    </div>

                                    <div className="space-y-6 mb-10 text-slate-600 leading-relaxed text-lg">
                                        <p>
                                            Kalcigen SG is a premium softgel capsule formulation combining the benefits of Calcium Carbonate, Calcitriol, and Zinc. Designed to support bone health and treat conditions related to low calcium levels.
                                        </p>
                                        <p>
                                            Ideal for patients with calcium deficiency, osteoporosis, or similar conditions. The softgel form makes it easier to swallow and digest compared to traditional tablets.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                                        <div className="flex flex-col">
                                            <span className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">Category</span>
                                            <span className="text-slate-900 font-semibold">Pharma Products</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">Form</span>
                                            <span className="text-slate-900 font-semibold">Softgel Capsules</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">Packing</span>
                                            <span className="text-slate-900 font-semibold">10x10 Softgels</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div >
    );
};

export default GeneralProducts;

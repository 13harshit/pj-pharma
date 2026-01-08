import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Droplet } from 'lucide-react';

const IVFluids = () => {
    const products = [
        { sno: 1, name: "Glucose Intravenous Infusion 5% BP", volume: "500ml" },
        { sno: 2, name: "0.9%Sodium.Chloride.& 5% Glucose Intravenous Inf BP", volume: "500ml" },
        { sno: 3, name: "0.9%Sodium.Chloride Intravenous Infusion BP", volume: "500ml" },
        { sno: 4, name: "Compound Sodium .Lact..(RingerLactate) Intr.Infu. BP", volume: "500ml" },
        { sno: 5, name: "Glucose Intravenous Infusion 10% BP", volume: "500ml" },
        { sno: 6, name: "Sodium.Chloride 0.45% Intravenous Infusion BP", volume: "500ml" },
        { sno: 7, name: "1.6% Sodium Chloride Intravenous Infusin BP", volume: "500ml" },
        { sno: 8, name: "Sodium.Chl. 0.11% & Glu.5% Intravenous Infusion BP", volume: "500ml" },
        { sno: 9, name: "Sodium.Chl. 0.2% & Glu.5% Intravenous Infusion BP", volume: "500ml" },
        { sno: 10, name: "Sodium.Chl. 0.33% & Glu.5% Intravenous Infusion BP", volume: "500ml" },
        { sno: 11, name: "Sodium.Chl. 0.45% & Glu.5% Intravenous Infusion BP", volume: "500ml" },
        { sno: 12, name: "Sodium Lacatate Intravenous Infusion 1.85% BP", volume: "500ml" },
        { sno: 13, name: "Glucose Intravenous Infusion 5% BP", volume: "1000ml" },
        { sno: 14, name: "0.9%Sodium.Chloride.& 5% Glucose Intravenous Inf BP", volume: "1000ml" },
        { sno: 15, name: "0.9%Sodium.Chloride Intravenous Infusion BP", volume: "1000ml" },
        { sno: 16, name: "Compound Sodium .Lact..(RingerLactate) Intr.Infu. BP", volume: "1000ml" },
        { sno: 17, name: "Ciprofloxacin Intravenous Infusion 200mg 100ml BP", volume: "100ml" },
        { sno: 18, name: "Metronidazole Intravenous Infusion 500mg/100ml BP", volume: "100ml" },
        { sno: 19, name: "Ofloxacin Intravenous Infusion 200mg/100ml BP", volume: "100ml" },
        { sno: 20, name: "Glucose 25% Intravenous Infusion", volume: "100ml" }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                                <Droplet className="w-4 h-4" />
                                <span className="text-sm font-semibold">Intravenous Solutions</span>
                            </div>
                            <h1 className="text-5xl font-bold text-slate-900 mb-6">IV Fluids & Solutions</h1>
                            <p className="text-xl text-slate-600 leading-relaxed">Sterile intravenous solutions for fluid replacement, electrolyte balance, and medication delivery.</p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-6">
                                    <h2 className="text-2xl font-bold text-white">IV Fluids Product List</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-slate-50 border-b-2 border-slate-200">
                                            <tr>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">S.No.</th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Product Name</th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Volume</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {products.map((product, index) => (
                                                <motion.tr key={product.sno} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.02 }} className="hover:bg-blue-50 transition-colors">
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.sno}</td>
                                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{product.name}</td>
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.volume}</td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
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
                                    <div className="relative w-full max-w-lg">
                                        <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 transform scale-110"></div>
                                        <img
                                            src="/medicine/ChatGPT Image Jan 6, 2026, 02_26_12 PM.png"
                                            alt="Premium IV Infusion"
                                            className="relative z-10 w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 rounded-xl"
                                        />
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="mb-6">
                                        <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-4">
                                            <span className="text-blue-600 font-bold tracking-wider text-xs uppercase">Featured Product</span>
                                        </div>
                                        <h3 className="text-4xl font-bold text-slate-900 mb-2">IV Infusions</h3>
                                        <p className="text-slate-500 font-medium text-lg">Sterile Intravenous Solutions</p>
                                    </div>

                                    <div className="space-y-6 mb-8 text-slate-600 leading-relaxed">
                                        <p>
                                            Our range of Intravenous Fluids includes high-quality solutions for hydration, electrolyte replenishment, and parenteral nutrition. Manufactured in state-of-the-art sterile facilities using Blow-Fill-Seal (BFS) technology to ensure zero contamination and patient safety.
                                        </p>
                                        <p>
                                            These sterile solutions are essential for restoring fluid balance, delivering medications, and providing nutrients to patients in critical care, surgery, and general hospital settings.
                                        </p>

                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 mb-3">Key Features:</h4>
                                            <ul className="space-y-2">
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                                                    <span>Advanced BFS (Blow-Fill-Seal) Technology bottles</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                                                    <span>Pyrogen-free and sterile formulations</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                                                    <span>Leak-proof and collapse-resistant containers</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                                                    <span>Clearly labeled with graduation marks for accuracy</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="border-t border-slate-100 pt-6 space-y-3">
                                        <div className="flex">
                                            <span className="w-32 text-slate-900 font-bold shrink-0">Standards:</span>
                                            <span className="text-slate-600">BP / USP / IP</span>
                                        </div>
                                        <div className="flex">
                                            <span className="w-32 text-slate-900 font-bold shrink-0">Packaging:</span>
                                            <span className="text-slate-600">BFS Technology (Bottles)</span>
                                        </div>
                                        <div className="flex">
                                            <span className="w-32 text-slate-900 font-bold shrink-0">Sterility:</span>
                                            <span className="text-slate-600">Pyrogen-free & Sterile</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default IVFluids;

import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Pill } from 'lucide-react';

const Suppository = () => {
    const products = [
        { sno: 1, name: "Glycerin Suppositories U.S.P. Adult : 3.0 gm, Child: 1.0 gm", packing: "Adult Bottle (10s) / Strip (5s) Child Bottle (20s or 30s)" },
        { sno: 2, name: "Bisacodyl Suppositories 5 mg", packing: "Bottle (20s or 30s) / Strip (5s)" },
        { sno: 3, name: "Bisacodyl Suppositories 10 mg", packing: "Bottle (20s or 30s) / Strip (5s)" },
        { sno: 4, name: "Metronidazole Suppositories 50 mg", packing: "Bottle (20s or 30s) / Strip (5s)" },
        { sno: 5, name: "Metronidazole Suppositories 500 mg", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 6, name: "Metronidazole Suppositories 1000 mg", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 7, name: "Bismuth Subgallate Suppositories B.P.C.", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 8, name: "Indomethacin Suppositories B.P.", packing: "Bottle (20s or 30s) / Strip (5s)" },
        { sno: 9, name: "Metoclopramide Suppositories 20 mg", packing: "Bottle (20s or 30s) / Strip (5s)" },
        { sno: 10, name: "Metoclopramide Suppositories 10 mg", packing: "Bottle (20s or 30s) / Strip (5s)" },
        { sno: 11, name: "Haemorrhoidal Suppositories", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 12, name: "Compound Bismuth Subgallate Suppositories B.P.C.", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 13, name: "Haemorrhoidal Suppositories", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 14, name: "Aminophylline Suppositories 75 mg", packing: "Bottle (20s or 30s) / Strip (5s)" },
        { sno: 15, name: "Aminophylline Suppositories 150 mg", packing: "Bottle (20s or 30s) / Strip (5s)" },
        { sno: 16, name: "Aminophylline Suppositories 300 mg", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 17, name: "Aminophylline Suppositories 350 mg", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 18, name: "Aminophylline Suppositories 360 mg", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 19, name: "Aminophylline Suppositories 400 mg", packing: "Bottle (10s) / Strip (5s)" },
        { sno: 20, name: "Clotrimazole Pessaries B.P. 100mg", packing: "Strip (6s)" }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
                                <Pill className="w-4 h-4" />
                                <span className="text-sm font-semibold">Alternative Dosage Form</span>
                            </div>
                            <h1 className="text-5xl font-bold text-slate-900 mb-6">Suppository Products</h1>
                            <p className="text-xl text-slate-600 leading-relaxed">Specialized solid dosage forms for rectal and vaginal administration.</p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                                <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6">
                                    <h2 className="text-2xl font-bold text-white">Suppository Product List</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-slate-50 border-b-2 border-slate-200">
                                            <tr>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">S.No.</th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Product Name</th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Packing</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {products.map((product, index) => (
                                                <motion.tr key={product.sno} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.02 }} className="hover:bg-purple-50 transition-colors">
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.sno}</td>
                                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{product.name}</td>
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.packing}</td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
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

export default Suppository;

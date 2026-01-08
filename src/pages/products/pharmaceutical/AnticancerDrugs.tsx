import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FlaskConical } from 'lucide-react';

const AnticancerDrugs = () => {
    const products = [
        { sno: 1, name: "Inj. Doxorubicin HCL", type: "Injectable", strength: "10mg, 50mg", packing: "Single Vial (Lyophilised)" },
        { sno: 2, name: "Inj. Amifostine", type: "Injectable", strength: "300mg, 500mg", packing: "Single Vial (Lyophilised)" },
        { sno: 3, name: "Inj. Bleomycin Sulphate", type: "Injectable", strength: "15 Units", packing: "Single Vial (Lyophilised)" },
        { sno: 4, name: "Inj. Carboplatin", type: "Injectable", strength: "150mg/15ml, 450mg/45ml", packing: "Single Vial" },
        { sno: 5, name: "Inj. Cisplatin", type: "Injectable", strength: "10mg/10ml, 50mg/50ml", packing: "Single Vial" },
        { sno: 6, name: "Inj. Cytarabine \"Preservative Free\"", type: "Injectable", strength: "100mg/ml, 500mg/5ml, 1g/10ml", packing: "Single Vial" },
        { sno: 7, name: "Inj. Cyclophosphamide", type: "Injectable", strength: "200mg, 500mg, 1g", packing: "Single Vial" },
        { sno: 8, name: "Inj. Zolendronic Acid", type: "Injectable", strength: "4mg", packing: "Single Vial (Lyophilised) +Diluent" },
        { sno: 9, name: "Inj Dacarbazine HCL", type: "Injectable", strength: "100mg, 200mg, 500mg", packing: "Single Vial" },
        { sno: 10, name: "Inj. Dactinomycin", type: "Injectable", strength: "0.5mg", packing: "Single Vial" },
        { sno: 11, name: "Inj. Daunorubicin HCL", type: "Injectable", strength: "20mg", packing: "Single Vial" },
        { sno: 12, name: "Inj. Docetaxl", type: "Injectable", strength: "20mg/0.5ml, 80mg/2ml,120mg/3ml", packing: "Single Vial + Solvent" },
        { sno: 13, name: "Inj. Epirubicin", type: "Injectable", strength: "10mg, 50mg", packing: "Single Vial (Lyophilised)" },
        { sno: 14, name: "Inj. Etoposide", type: "Injectable", strength: "100mg/5ml", packing: "Single Vial" },
        { sno: 15, name: "Cap. Etoposide", type: "Capsules", strength: "50mg", packing: "Pack of 8 Caps." },
        { sno: 16, name: "Inj. 5-Fluorouracil", type: "Injectable", strength: "250mg/5ml, 500mg/10ml", packing: "10 Amps." },
        { sno: 17, name: "Inj. Gemcitabine", type: "Injectable", strength: "200mg, 1g", packing: "Single Vial (Lyophilised)" },
        { sno: 18, name: "Tab. Methotrexate", type: "Tablets", strength: "2.5mg", packing: "10 Strips x 10 Tabs." },
        { sno: 19, name: "Inj. Methotrexate \"Preservative Free\"", type: "Injectable", strength: "15mg/3ml, 50mg/2ml, 500mg/5ml", packing: "Single Vial" },
        { sno: 20, name: "Inj. Irinotecan HCL", type: "Injectable", strength: "40mg/2ml, 100mg/5ml", packing: "Single Vial" }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6">
                                <FlaskConical className="w-4 h-4" />
                                <span className="text-sm font-semibold">Oncology Pharmaceuticals</span>
                            </div>
                            <h1 className="text-5xl font-bold text-slate-900 mb-6">Anticancer Drugs</h1>
                            <p className="text-xl text-slate-600 leading-relaxed">Advanced oncology medications for cancer treatment and supportive care.</p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
                                    <h2 className="text-2xl font-bold text-white">Anticancer Drug Product List</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-slate-50 border-b-2 border-slate-200">
                                            <tr>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">S.No.</th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Product Name</th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Type</th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Strength</th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Packing</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {products.map((product, index) => (
                                                <motion.tr key={product.sno} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.02 }} className="hover:bg-indigo-50 transition-colors">
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.sno}</td>
                                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{product.name}</td>
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.type}</td>
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.strength}</td>
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

                {/* Featured Product Section */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 p-8 md:p-12 bg-slate-50 flex items-center justify-center border-r border-slate-100 h-full">
                                    <div className="relative w-full max-w-lg">
                                        <div className="absolute inset-0 bg-indigo-200 rounded-full blur-3xl opacity-30 transform scale-110"></div>
                                        <img
                                            src="/medicine/ChatGPT Image Jan 6, 2026, 02_23_44 PM.png"
                                            alt="Peg L Asparaginase Injection"
                                            className="relative z-10 w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 rounded-xl"
                                        />
                                    </div>
                                </div>
                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="mb-6">
                                        <div className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full mb-4">
                                            <span className="text-indigo-600 font-bold tracking-wider text-xs uppercase">Featured Product</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-2">Peg L Asparaginase Injection</h3>
                                        <p className="text-indigo-600 font-medium text-lg">Advanced Oncology Treatment</p>
                                    </div>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Harnessing the power of pegylated L-asparaginase, this potent formulation targets cancer at its core. By depleting the levels of asparagine, an essential nutrient for cancer cell survival, it inhibits their growth and propagation.
                                    </p>

                                    <h4 className="text-lg font-bold text-slate-900 mb-3">Key Benefits:</h4>
                                    <ul className="space-y-3 mb-8 text-slate-600">
                                        <li className="flex items-start">
                                            <span className="mr-2 text-indigo-500 font-bold">•</span>
                                            <span><strong className="text-slate-800">Efficiency:</strong> Engineered to maximize anti-cancer impact and curtail malignant cell proliferation.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-indigo-500 font-bold">•</span>
                                            <span><strong className="text-slate-800">Reduced Toxicity:</strong> Pegylated variant significantly reduces toxicity levels compared to conventional formulations.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-indigo-500 font-bold">•</span>
                                            <span><strong className="text-slate-800">Extended Effectiveness:</strong> Sustained-release formulation ensures prolonged therapeutic effect.</span>
                                        </li>
                                    </ul>

                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8 border-t border-slate-100 pt-6">
                                        <div>
                                            <span className="block text-sm font-bold text-slate-900">Treatment</span>
                                            <span className="text-slate-600 text-sm">Acute Lymphocytic Leukemia</span>
                                        </div>
                                        <div>
                                            <span className="block text-sm font-bold text-slate-900">Dosage Form</span>
                                            <span className="text-slate-600 text-sm">Injection (IV/IM)</span>
                                        </div>
                                        <div>
                                            <span className="block text-sm font-bold text-slate-900">Packing</span>
                                            <span className="text-slate-600 text-sm">Box</span>
                                        </div>
                                        <div>
                                            <span className="block text-sm font-bold text-slate-900">Manufacturer</span>
                                            <span className="text-slate-600 text-sm">TG Pharmz</span>
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

export default AnticancerDrugs;

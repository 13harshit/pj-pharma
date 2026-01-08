import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Syringe } from 'lucide-react';

const Injections = () => {
    const products = [
        { sno: 1, name: "Alpha Beta Arteether injection 1ml", packing: "3×1 ml", quantity: "100,000 amps" },
        { sno: 2, name: "Alpha Beta Arteether injection 2 ml", packing: "3 x2 ml", quantity: "100,000 amps" },
        { sno: 3, name: "Amikacin 250 mg", packing: "1 x 2 ml vial", quantity: "50,000 vials" },
        { sno: 4, name: "Amikacin 500 mg", packing: "1 x 2 ml vial", quantity: "50,000 vials" },
        { sno: 5, name: "Amikacin 100 mg", packing: "1 x 2 ml vial", quantity: "50,000 vials" },
        { sno: 6, name: "Amoxycilline+ Pot. Clavulanate 1.2 gm", packing: "20 ml vial", quantity: "50,000 vials" },
        { sno: 7, name: "Artesunate injection 60 mg", packing: "7.5 ml vial combi", quantity: "50,000 vials" },
        { sno: 8, name: "Aceclofenac injection", packing: "10 x 1 ml Tray Pack", quantity: "100,000 amps" },
        { sno: 9, name: "Atropine sulphate injection", packing: "10 x 1 ml", quantity: "100,000 amps" },
        { sno: 10, name: "Adrenaline injection", packing: "1 ml", quantity: "100,000 amps" },
        { sno: 11, name: "Aceclovir injection", packing: "vial", quantity: "50,000 vials" },
        { sno: 12, name: "Ampicillin 500 mg injection", packing: "7.5 ml Vial", quantity: "50,000 vials" },
        { sno: 13, name: "Ceftriaxone 250 mg", packing: "7.5 ml Vial", quantity: "50,000 vials" },
        { sno: 14, name: "Ceftriaxone 500 mg", packing: "7.5 ml Vial", quantity: "50,000 vials" },
        { sno: 15, name: "Ceftriaxone 1 gm", packing: "10 ml vial", quantity: "50,000 vials" },
        { sno: 16, name: "Ceftriaxone 1000 mg + Sulbactam 500 mg", packing: "20 ml vial", quantity: "50,000 vials" },
        { sno: 17, name: "Ceftriaxone 500mg + Sulbactam 250 mg", packing: "10 ml vial", quantity: "50,000 vials" },
        { sno: 18, name: "Ceftriaxone 250 mg + Sulbactam 125 mg", packing: "7.5 ml vial", quantity: "50,000 vials" },
        { sno: 19, name: "Ceftriaxone 125 mg + Sulbactam 62.5mg", packing: "7.5 ml Vial", quantity: "50,000 vials" },
        { sno: 20, name: "Ceftriaxone 1 gm + Tazobactam 125 mg", packing: "20 ml vial", quantity: "50,000 vials" }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full mb-6">
                                <Syringe className="w-4 h-4" />
                                <span className="text-sm font-semibold">Injectable Pharmaceuticals</span>
                            </div>

                            <h1 className="text-5xl font-bold text-slate-900 mb-6">
                                Injectable Products
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed">
                                Sterile injectable formulations manufactured under aseptic conditions for rapid therapeutic action.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Product Table Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                                {/* Table Header */}
                                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-6">
                                    <h2 className="text-2xl font-bold text-white">Injectable Product List</h2>
                                </div>

                                {/* Table */}
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-slate-50 border-b-2 border-slate-200">
                                            <tr>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">S.No.</th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Product Name</th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Packing</th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {products.map((product, index) => (
                                                <motion.tr
                                                    key={product.sno}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.02 }}
                                                    className="hover:bg-cyan-50 transition-colors"
                                                >
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.sno}</td>
                                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{product.name}</td>
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.packing}</td>
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.quantity}</td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Quality Note */}
                            <div className="mt-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
                                <p className="text-sm text-slate-700">
                                    <span className="font-semibold text-cyan-700">Note:</span> All injectable products are manufactured in state-of-the-art aseptic facilities with Class 100 cleanroom standards, ensuring sterility and patient safety.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Products Section */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                        {/* Product 1: Emstron */}
                        <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 p-8 md:p-12 bg-slate-50 flex items-center justify-center border-r border-slate-100 h-full">
                                    <div className="relative w-full max-w-lg">
                                        <div className="absolute inset-0 bg-cyan-200 rounded-full blur-3xl opacity-30 transform scale-110"></div>
                                        <img
                                            src="/medicine/ChatGPT Image Jan 6, 2026, 02_18_33 PM.png"
                                            alt="Emstron – Ondansetron Injection USP"
                                            className="relative z-10 w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 rounded-xl"
                                        />
                                    </div>
                                </div>
                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="mb-6">
                                        <h3 className="text-3xl font-bold text-slate-900 mb-2">Emstron – Ondansetron Injection USP</h3>
                                        <p className="text-cyan-600 font-medium text-lg">Relief from Nausea and Vomiting</p>
                                    </div>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Emstron contains ondansetron, a selective serotonin 5-HT3 receptor antagonist. It specifically targets and blocks serotonin to prevent nausea and vomiting caused by chemotherapy, radiation therapy, or surgery.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 mb-6 border-t border-slate-100 pt-6">
                                        <div>
                                            <span className="block text-sm font-bold text-slate-900">Category</span>
                                            <span className="text-slate-600">Injections</span>
                                        </div>
                                        <div>
                                            <span className="block text-sm font-bold text-slate-900">Administration</span>
                                            <span className="text-slate-600">Healthcare Professional</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-500 italic mt-auto">
                                        Note: Should be prescribed by a qualified healthcare provider.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Product 2: Lidocaine */}
                        <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 p-8 md:p-12 bg-slate-50 flex items-center justify-center border-r border-slate-100 h-full">
                                    <div className="relative w-full max-w-lg">
                                        <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 transform scale-110"></div>
                                        <img
                                            src="/medicine/ChatGPT Image Jan 6, 2026, 02_20_40 PM.png"
                                            alt="Lidocaine and Adrenaline B.P Injection"
                                            className="relative z-10 w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 rounded-xl"
                                        />
                                    </div>
                                </div>
                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="mb-6">
                                        <h3 className="text-3xl font-bold text-slate-900 mb-2">Lidocaine and Adrenaline B.P Injection</h3>
                                        <p className="text-cyan-600 font-medium text-lg">Dental Anesthesia (1.8ml Cartridge)</p>
                                    </div>
                                    <ul className="space-y-3 mb-8 text-slate-600">
                                        <li className="flex items-start">
                                            <span className="mr-2 text-cyan-500">•</span>
                                            Gold Standard in dental anaesthesia
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-cyan-500">•</span>
                                            2% lidocaine with 1:80,000 epinephrine
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-cyan-500">•</span>
                                            Terminal sterilization for safe use
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-cyan-500">•</span>
                                            100% latex-free & Blister packed
                                        </li>
                                    </ul>
                                    <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                                        <div>
                                            <span className="block text-sm font-bold text-slate-900">Composition</span>
                                            <span className="text-slate-600">Lidocaine + Adrenaline</span>
                                        </div>
                                        <div>
                                            <span className="block text-sm font-bold text-slate-900">Form</span>
                                            <span className="text-slate-600">Injection</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product 3: Peg L Asparaginase */}
                        <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 p-8 md:p-12 bg-slate-50 flex items-center justify-center border-r border-slate-100 h-full">
                                    <div className="relative w-full max-w-lg">
                                        <div className="absolute inset-0 bg-green-200 rounded-full blur-3xl opacity-30 transform scale-110"></div>
                                        <img
                                            src="/medicine/ChatGPT Image Jan 6, 2026, 02_23_44 PM.png"
                                            alt="Peg L Asparaginase Injection"
                                            className="relative z-10 w-full drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 rounded-xl"
                                        />
                                    </div>
                                </div>
                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="mb-6">
                                        <h3 className="text-3xl font-bold text-slate-900 mb-2">Peg L Asparaginase Injection</h3>
                                        <p className="text-cyan-600 font-medium text-lg">Advanced Oncology Treatment</p>
                                    </div>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Harnessing the power of pegylated L-asparaginase, this potent formulation targets cancer at its core. By depleting the levels of asparagine, an essential nutrient for cancer cell survival, it inhibits their growth and propagation.
                                    </p>

                                    <h4 className="text-lg font-bold text-slate-900 mb-3">Key Benefits:</h4>
                                    <ul className="space-y-3 mb-8 text-slate-600">
                                        <li className="flex items-start">
                                            <span className="mr-2 text-cyan-500 font-bold">•</span>
                                            <span><strong className="text-slate-800">Efficiency:</strong> Engineered to maximize anti-cancer impact and curtail malignant cell proliferation.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-cyan-500 font-bold">•</span>
                                            <span><strong className="text-slate-800">Reduced Toxicity:</strong> Pegylated variant significantly reduces toxicity levels compared to conventional formulations.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-cyan-500 font-bold">•</span>
                                            <span><strong className="text-slate-800">Extended Effectiveness:</strong> Sustained-release formulation ensures prolonged therapeutic effect.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-cyan-500 font-bold">•</span>
                                            <span><strong className="text-slate-800">Improved Outcomes:</strong> Contributes to better response rates and increased survival rates.</span>
                                        </li>
                                    </ul>

                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-6 border-t border-slate-100 pt-6">
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


                {/* Products List for Injections Section */}
                <section className="py-20 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto space-y-16">

                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-slate-900">Products List for Injections</h2>
                                <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
                            </div>

                            <div className="space-y-12">
                                {/* Item 1: Iron Sucrose */}
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Iron Sucrose 2.5 ml</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        Discover the power of Pharmaceutical Injections: Iron Sucrose 2.5 ml by TG Pharmz, we are dedicated to delivering top-quality pharmaceutical injections that meet global standards of excellence. With a commitment to innovation, quality, and customer satisfaction, we strive to be your trusted partner in healthcare. Product Name: Iron Sucrose 2.5 ml
                                    </p>
                                    <Link to="/products/pharmaceutical/injections/iron-sucrose" className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition-colors group">
                                        Read More
                                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>

                                {/* Item 2: Gentamicin */}
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Gentamicin 30 ml injection</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        Discover the power of Pharmaceutical Injections: Gentamicin 30 ml injection by TG Pharmz, we are dedicated to delivering top-quality pharmaceutical injections that meet global standards of excellence. With a commitment to innovation, quality, and customer satisfaction, we strive to be your trusted partner in healthcare. Product Name: Gentamicin 30 ml injection
                                    </p>
                                    <Link to="/products/pharmaceutical/injections/gentamicin" className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition-colors group">
                                        Read More
                                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
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

export default Injections;

import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Pill } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftGelCapsules = () => {
    const products = [
        { sno: 1, name: "Vitamin A Capsules 1,00,000 I.U.", packing: "10 x 10" },
        { sno: 2, name: "Vitamin A Capsules 2,00,000 I.U.", packing: "10 x 10" },
        { sno: 3, name: "Multivitamin & Mineral Capsules", packing: "2 x15" },
        { sno: 4, name: "Vitamin A Capsules 25000 I.U.", packing: "10 x 10" },
        { sno: 5, name: "Vitamin A Capsules 50,000 I.U.", packing: "10 x 10" },
        { sno: 6, name: "Vitamin A 4000 I.U. & Vitamin D 3 400 I.U.", packing: "2 x 15" },
        { sno: 7, name: "Vitamin A 6000 I.U. & Vitamin D 3 1000 I.U.", packing: "5 x 10" },
        { sno: 8, name: "Multivitamin, Mineral & Ginseng Capsules", packing: "1 x 10" },
        { sno: 9, name: "Paracetamol Capsules U.S.P. 1000 MG.", packing: "2 x 6" },
        { sno: 10, name: "Paracetamol& Caffeine Capsules U.S.P. ( 1000 + 30 )", packing: "2 x 6" },
        { sno: 11, name: "Paracetamol& Caffeine Capsules U.S.P. ( 500 + 30 )", packing: "2 x 10" },
        { sno: 12, name: "Ibuprofen, Paracetamol& Caffeine Capsules ( 400 + 325 + 40 )", packing: "2 x 10" },
        { sno: 13, name: "Multivitamin, Mineral Capsules", packing: "60 caps" },
        { sno: 14, name: "Multivitamin, Mineral Capsules", packing: "2 x 15" },
        { sno: 15, name: "Cetrizine Capsules 10 MG.", packing: "10 x 10" },
        { sno: 16, name: "Calcitriol Capsules 0.25 MCG", packing: "3 x 10" },
        { sno: 17, name: "Calcitriol& Calcium Carbonate Capsules ( 0.25 MCG + 625 MG )", packing: "3 x 10" },
        { sno: 18, name: "Calcitriol& Calcium Carbonate Capsules with Zinc", packing: "3 x 10" },
        { sno: 19, name: "Coenzyme Q 10 Capsules 10 MG", packing: "1 x 10" },
        { sno: 20, name: "Coenzyme Q 10 & Vitamin E Capsules ( 10 + 12.5 )", packing: "1 x 10" }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6">
                                <Pill className="w-4 h-4" />
                                <span className="text-sm font-semibold">Advanced Delivery System</span>
                            </div>
                            <h1 className="text-5xl font-bold text-slate-900 mb-6">Soft Gel Capsules</h1>
                            <p className="text-xl text-slate-600 leading-relaxed">Premium soft gelatin capsules offering superior bioavailability and patient compliance.</p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                                <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-6">
                                    <h2 className="text-2xl font-bold text-white">Soft Gel Capsules Product List</h2>
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
                                                <motion.tr key={product.sno} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.02 }} className="hover:bg-amber-50 transition-colors">
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.sno}</td>
                                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{product.name}</td>
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.packing}</td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="mt-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
                                <p className="text-sm text-slate-700">
                                    <span className="font-semibold text-amber-700">Note:</span> All soft gel capsules are manufactured using advanced rotary die encapsulation technology with precision fill weight control.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Soft Gel Featured Products List */}
                <section className="py-20 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto space-y-16">

                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-slate-900">Featured Soft Gel Products</h2>
                                <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
                            </div>

                            <div className="space-y-12">
                                {/* Item 1: Vitamin A 200k */}
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Vitamin A Capsules 2,00,000 I.U.</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        Soft gel capsules, Vitamin A Capsules 2,00,000 I.U. also known as softgels, are a popular form of oral dosage for medications, supplements, and vitamins. Product Name: Vitamin A Capsules 2,00,000 I.U.
                                    </p>
                                    <Link to="/products/pharmaceutical/softgel/vitamin-a-200k" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group">
                                        Read More
                                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>

                                {/* Item 2: Vitamin A 100k */}
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Vitamin A Capsules 1,00,000 I.U.</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        Soft gel capsules, Vitamin A Capsules 1,00,000 I.U. also known as softgels, are a popular form of oral dosage for medications, supplements, and vitamins. Product Name: Vitamin A Capsules 1,00,000 I.U.
                                    </p>
                                    <Link to="/products/pharmaceutical/softgel/vitamin-a-100k" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group">
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

export default SoftGelCapsules;

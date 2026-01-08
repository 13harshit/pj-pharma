import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BriefcaseMedical } from 'lucide-react';

const DiagnosticsKits = () => {
    const products = [
        { code: "PSC", name: "-SCAN® hCG CARD TEST [ URINE]", tests: "50 TESTS" },
        { code: "PSCs", name: "PREGNY-SCAN® hCG CARD TEST [ URINEor SERUM]", tests: "50 TESTS" },
        { code: "PSM", name: "PREGNY-SCAN® hCG URINE MIDSTREAM CARD TEST [ URINE]", tests: "1 TESTS" },
        { code: "BLC", name: "BHAT BIO-SCAN® LH ( OVULATION) CARD TEST [ URINE]", tests: "10 TESTS" },
        { code: "HBC", name: "HEPA-SCAN® HBsAg RAPID CARD TEST [SERUM or PLASMA]", tests: "50 TESTS" },
        { code: "HBCwb", name: "HEPA-SCAN® HBsAg RAPID CARD TEST [SERUM or PLASMA or WHOLE BLOOD]", tests: "50 TESTS" },
        { code: "HCC", name: "HEPA-SCAN® HCV CARD TEST [SERUM or PLASMA]", tests: "50 TESTS" },
        { code: "HCCwb", name: "HEPA-SCAN® HCV CARD TEST [SERUM or PLASMA or WHOLE BLOOD]", tests: "50 TESTS" },
        { code: "ATS", name: "AIDSCAN® HIV-1/2 TRISPOT TEST KIT [PLASMA or SERUM]", tests: "50 TESTS" },
        { code: "PRT", name: "PAREEKSHAK® HIV-1/2 RAPID SPOT TEST KIT [SERUM or PLASMA]", tests: "50 TESTS" },
        { code: "PTC", name: "PAREEKSHAK® HIV-1/2 TRILINE CARD TEST [SERUM or PLASMA ]", tests: "50 TESTS" },
        { code: "PTCwb", name: "PAREEKSHAK® HIV-1/2 TRILINE CARD TEST[SERUM or PLASMA or WHOLE BLOOD]", tests: "50 TESTS" },
        { code: "MAL", name: "MALERISCAN® MALARIA P.f/P.v 3 LINE ANTIBODY CARD TEST [PLASMA or SERUM]", tests: "50 TESTS" },
        { code: "MAT", name: "MALERISCAN® MALARIA P.f/P.v 3 LINE ANTIGEN CARD TEST [WHOLE BLOOD]", tests: "50 TESTS" },
        { code: "MPfPAN", name: "MALERISCAN® MALARIA P.f/PAN 3 LINE ANTIGEN CARD TEST [ WHOLE BLOOD]", tests: "50 TESTS" },
        { code: "MPf", name: "MALERISCAN® MALARIA P.f ANTIGEN CARD TEST [WHOLE BLOOD]", tests: "50 TESTS" },
        { code: "BSC", name: "BHAT BIO-SCAN® SYPHILIS CARD TEST [ PLASMA or SERUM]", tests: "50 TESTS" },
        { code: "BSCwb", name: "BHAT BIO-SCAN® SYPHILIS CARD TEST [ PLASMA or SERUM or WHOLE BLOOD]", tests: "50 TESTS" },
        { code: "BDC", name: "BHAT BIO-SCAN® DENGUE IgG/IgM CARD TEST [ SERUM or PLASMA ]", tests: "10 TESTS" },
        { code: "BDCwb", name: "BHAT BIO-SCAN® DENGUE IgG/IgM CARD TEST [ SERUM or PLASMA or WHOLE BLOOD ]", tests: "10 TESTS" },
        { code: "BNS1", name: "BHAT BI-SCAN® DENGUE NS1 CARD TEST [ PLASMA or SERUM]", tests: "10 TESTS" },
        { code: "BNS1wb", name: "BHAT BI-SCAN® DENGUE NS1 CARD TEST [ PLASMA or SERUM or WHOLE BLOOD]", tests: "10 TESTS" },
        { code: "BDgmNS1", name: "BHAT BIO-SCAN® DENGUE NS1+IgG/Igm CARD TEST [ PLASMA or SERUM ]", tests: "10 TESTS" },
        { code: "BDgmNS1wb", name: "BHAT BIO-SCAN® DENGUE NS1+IgG/Igm CARD TEST [ PLASMA or SERUM or WHOLE BLOOD]", tests: "10 TESTS" },
        { code: "BCSm", name: "BHAT BIO-SCAN® CHIKUNGUNYA IgM SPOT TEST [ PLASMA or SERUM]", tests: "10 TESTS" },
        { code: "BCSg", name: "BHAT BIO-SCAN® CHIKUNGUNYA IgG SPOT TEST [ PLASMA or SERUM]", tests: "10 TESTS" },
        { code: "HTC", name: "BHAT BIO-SCAN® TROPONIN-I CARD TEST [ PLASMA or SERUM]", tests: "10 TESTS" },
        { code: "HTCwb", name: "BHAT BIO-SCAN® TROPONIN-I CARD TEST [ PLASMA or SERUM or WHOLE BLOOD]", tests: "10 TESTS" }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-6">
                                <BriefcaseMedical className="w-4 h-4" />
                                <span className="text-sm font-semibold">Medical Diagnostics</span>
                            </div>
                            <h1 className="text-5xl font-bold text-slate-900 mb-6">Diagnostic Kits</h1>
                            <p className="text-xl text-slate-600 leading-relaxed">Comprehensive range of rapid diagnostic testing kits for accurate disease detection.</p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-8 py-6">
                                    <h2 className="text-2xl font-bold text-white">Rapid Diagnostic Kits</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-slate-50 border-b-2 border-slate-200">
                                            <tr>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Code</th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Product Name</th>
                                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Pack Size</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {products.map((product, index) => (
                                                <motion.tr key={product.code} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.01 }} className="hover:bg-teal-50 transition-colors">
                                                    <td className="px-6 py-4 text-sm font-medium text-teal-700">{product.code}</td>
                                                    <td className="px-6 py-4 text-sm text-slate-900">{product.name}</td>
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.tests}</td>
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

export default DiagnosticsKits;

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const IronSucrose = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb / Back Link */}
                    <div className="mb-8">
                        <Link to="/products/pharmaceutical/injections" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Injections
                        </Link>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                        {/* Header Section */}
                        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-8 md:p-12 text-center text-white">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">Iron Sucrose 2.5 ml</h1>
                            <p className="text-lg text-cyan-50 max-w-3xl mx-auto">
                                Discover the power of Pharmaceutical Injections. Dedicated to delivering top-quality pharmaceutical injections that meet global standards of excellence.
                            </p>
                        </div>

                        <div className="p-8 md:p-12 space-y-12">
                            {/* Product Introduction */}
                            <div>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Discover the power of Pharmaceutical Injections: <strong>Iron Sucrose 2.5 ml</strong> by TG Pharmz. We are dedicated to delivering top-quality pharmaceutical injections that meet global standards of excellence. With a commitment to innovation, quality, and customer satisfaction, we strive to be your trusted partner in healthcare.
                                </p>
                            </div>

                            {/* Product Specifications Table */}
                            <div className="overflow-hidden border border-slate-200 rounded-xl">
                                <table className="w-full text-left border-collapse">
                                    <tbody>
                                        <tr className="border-b border-slate-100">
                                            <th className="p-4 bg-slate-50 font-semibold text-slate-700 w-1/3">Product Name</th>
                                            <td className="p-4 text-slate-600">Iron Sucrose 2.5 ml</td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <th className="p-4 bg-slate-50 font-semibold text-slate-700">Product Quantity</th>
                                            <td className="p-4 text-slate-600">100,000 amps</td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <th className="p-4 bg-slate-50 font-semibold text-slate-700">Product Packaging</th>
                                            <td className="p-4 text-slate-600">5 x 2.5 ml</td>
                                        </tr>
                                        <tr>
                                            <th className="p-4 bg-slate-50 font-semibold text-slate-700">Manufacturer</th>
                                            <td className="p-4 text-slate-600">TG Pharmz</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-cyan-50 border border-cyan-100 p-4 rounded-lg text-cyan-800 text-sm font-medium">
                                Packaging: Iron Sucrose 2.5 ml Packaging size is available 5 x 2.5 ml
                            </div>

                            {/* Benefits Section */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                                    <CheckCircle2 className="w-6 h-6 text-cyan-600 mr-2" />
                                    Benefits: Iron Sucrose 2.5 ml
                                </h2>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Supports heart health and function",
                                        "Promotes healthy blood circulation",
                                        "Helps maintain optimal cholesterol levels",
                                        "Supports overall cardiovascular well-being"
                                    ].map((benefit, index) => (
                                        <li key={index} className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                                            <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="text-slate-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Safety Information */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                                    <ShieldCheck className="w-6 h-6 text-rose-500 mr-2" />
                                    Safety Information: Iron Sucrose 2.5 ml
                                </h2>
                                <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
                                    <ul className="space-y-3">
                                        {[
                                            "Consult a healthcare professional before use, especially if pregnant, nursing, or taking medication.",
                                            "Keep out of reach of children.",
                                            "Store in a cool, dry place away from direct sunlight."
                                        ].map((info, index) => (
                                            <li key={index} className="flex items-start text-slate-700">
                                                <span className="mr-2 text-rose-500 font-bold">•</span>
                                                {info}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Quality Assurance */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Quality Assurance:</h3>
                                <p className="text-slate-600 leading-relaxed border-l-4 border-cyan-500 pl-4 py-2 bg-slate-50 rounded-r-lg">
                                    TG Pharmz follows strict quality control measures to ensure that <strong>Iron Sucrose 2.5 ml</strong> meets the highest standards of safety, purity, and efficacy. Our manufacturing facilities adhere to Good Manufacturing Practices (GMP) guidelines, and each batch undergoes rigorous testing for quality and consistency.
                                </p>
                            </div>

                            {/* Export Information */}
                            <div className="bg-slate-900 text-white p-8 rounded-2xl">
                                <div className="flex items-start gap-4">
                                    <Truck className="w-8 h-8 text-cyan-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-cyan-400">Export Information:</h3>
                                        <p className="text-slate-300 leading-relaxed">
                                            <strong>Iron Sucrose 2.5 ml</strong> is available for export outside of India. For inquiries regarding bulk orders, pricing, and shipping arrangements, please contact our export department at <Link to="/contact" className="underline text-white hover:text-cyan-300 transition-colors">Contact Us</Link>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default IronSucrose;

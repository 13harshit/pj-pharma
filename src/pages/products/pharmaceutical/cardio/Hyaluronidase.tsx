import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hyaluronidase = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb / Back Link */}
                    <div className="mb-8">
                        <Link to="/products/pharmaceutical/cardio" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Cardio Care
                        </Link>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                        {/* Header Section */}
                        <div className="bg-gradient-to-r from-red-600 to-pink-600 p-8 md:p-12 text-center text-white">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">Hyaluronidase</h1>
                            <p className="text-lg text-red-50 max-w-3xl mx-auto">
                                Discover the power of Cardio Care: Hyaluronidase by TG Pharmz. Our Comprehensive Cardiovascular health supplement is expertly formulated to support heart function and overall cardiovascular well-being. Packed with natural ingredients and backed by science, Cardio Care promotes healthy blood circulation, maintains optimal cholesterol levels, and supports heart muscle function. Enhance your heart health today with Cardio Care.
                            </p>
                        </div>

                        <div className="p-8 md:p-12 space-y-12">
                            {/* Product Introduction */}
                            <div>
                                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                    Discover the power of Cardio Care: <strong>Hyaluronidase</strong> by TG Pharmz. Our Comprehensive Cardiovascular health supplement is expertly formulated to support heart function and overall cardiovascular well-being. Packed with natural ingredients and backed by science, Cardio Care promotes healthy blood circulation, maintains optimal cholesterol levels, and supports heart muscle function. Enhance your heart health today with Cardio Care.
                                </p>
                            </div>

                            {/* Product Specifications Table */}
                            <div className="overflow-hidden border border-slate-200 rounded-xl">
                                <table className="w-full text-left border-collapse">
                                    <tbody>
                                        <tr className="border-b border-slate-100">
                                            <th className="p-4 bg-slate-50 font-semibold text-slate-700 w-1/3">Product Name</th>
                                            <td className="p-4 text-slate-600">Hyaluronidase</td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <th className="p-4 bg-slate-50 font-semibold text-slate-700">Product Strength</th>
                                            <td className="p-4 text-slate-600">1500 IU</td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <th className="p-4 bg-slate-50 font-semibold text-slate-700">Product Packaging</th>
                                            <td className="p-4 text-slate-600">VIAL</td>
                                        </tr>
                                        <tr>
                                            <th className="p-4 bg-slate-50 font-semibold text-slate-700">Manufacturer</th>
                                            <td className="p-4 text-slate-600">TG Pharmz</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-red-50 border border-red-100 p-4 rounded-lg text-red-800 text-sm font-medium">
                                Packaging: Hyaluronidase Packaging size is available VIAL
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Hyaluronidase is available in bottles containing 60 softgel capsules, providing a convenient supply for one month’s use. Each bottle is securely sealed to maintain product freshness and potency.
                                </p>
                            </div>

                            {/* Key Ingredients */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Ingredients:</h3>
                                <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {[
                                        "Hyaluronidase",
                                        "Omega-3 fatty acids (from fish oil)",
                                        "Coenzyme Q10",
                                        "Magnesium",
                                        "Vitamin D",
                                        "Folic acid",
                                        "Garlic extract",
                                        "Hawthorn extract",
                                        "Grape seed extract"
                                    ].map((ingredient, index) => (
                                        <li key={index} className="bg-white border border-slate-200 p-3 rounded-lg text-center text-slate-700 text-sm font-medium shadow-sm">
                                            {ingredient}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Benefits Section */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-2" />
                                    Benefits: Hyaluronidase
                                </h2>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Supports heart health and function",
                                        "Promotes healthy blood circulation",
                                        "Helps maintain optimal cholesterol levels",
                                        "Supports overall cardiovascular well-being"
                                    ].map((benefit, index) => (
                                        <li key={index} className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="text-slate-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Usage Directions */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                                    <Activity className="w-6 h-6 text-red-600 mr-2" />
                                    Usage Directions: Hyaluronidase
                                </h2>
                                <p className="text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    For optimal results, take 2 softgel capsules of CARDIO CARE daily with meals, or as directed by a healthcare professional.
                                </p>
                            </div>

                            {/* Safety Information */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                                    <ShieldCheck className="w-6 h-6 text-rose-500 mr-2" />
                                    Safety Information: Hyaluronidase
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
                                <p className="text-slate-600 leading-relaxed border-l-4 border-red-500 pl-4 py-2 bg-slate-50 rounded-r-lg">
                                    TG Pharmz follows strict quality control measures to ensure that <strong>Hyaluronidase</strong> meets the highest standards of safety, purity, and efficacy. Our manufacturing facilities adhere to Good Manufacturing Practices (GMP) guidelines, and each batch undergoes rigorous testing for quality and consistency.
                                </p>
                            </div>

                            {/* Export Information */}
                            <div className="bg-slate-900 text-white p-8 rounded-2xl">
                                <div className="flex items-start gap-4">
                                    <Truck className="w-8 h-8 text-red-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-red-400">Export Information:</h3>
                                        <p className="text-slate-300 leading-relaxed">
                                            <strong>Hyaluronidase</strong> is available for export outside of India. For inquiries regarding bulk orders, pricing, and shipping arrangements, please contact our export department at <Link to="/contact" className="underline text-white hover:text-red-300 transition-colors">Contact Us</Link>.
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

export default Hyaluronidase;

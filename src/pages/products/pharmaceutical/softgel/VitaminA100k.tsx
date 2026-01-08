import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const VitaminA100k = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb / Back Link */}
                    <div className="mb-8">
                        <Link to="/products/pharmaceutical/softgel" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Soft Gel Capsules
                        </Link>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                        {/* Header Section */}
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 md:p-12 text-center text-white">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">Vitamin A Capsules 1,00,000 I.U.</h1>
                            <p className="text-lg text-amber-50 max-w-3xl mx-auto">
                                Soft gel capsules, also known as softgels, are a popular form of oral dosage for medications, supplements, and vitamins.
                            </p>
                        </div>

                        <div className="p-8 md:p-12 space-y-12">
                            {/* Product Introduction */}
                            <div>
                                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                    Soft gel capsules, <strong>Vitamin A Capsules 1,00,000 I.U.</strong> also known as softgels, are a popular form of oral dosage for medications, supplements, and vitamins. These capsules are made from a gelatin-based shell that contains a liquid or semi-solid fill material. Soft gel capsules offer several advantages over other forms of oral medication delivery.
                                </p>
                                <p className="text-lg text-red-50 max-w-3xl mx-auto">
                                    Discover the power of Soft Gel Capsules: Vitamin A 100000 IU by TG Pharmz. Our Comprehensive Soft Gel Capsules health supplement is expertly formulated to support heart function and overall cardiovascular well-being. Packed with natural ingredients and backed by science, Soft Gel Capsules promotes healthy blood circulation, maintains optimal cholesterol levels, and supports heart muscle function. Enhance your heart health today with Soft Gel Capsules.
                                </p>
                            </div>

                            {/* Product Specifications Table */}
                            <div className="overflow-hidden border border-slate-200 rounded-xl">
                                <table className="w-full text-left border-collapse">
                                    <tbody>
                                        <tr className="border-b border-slate-100">
                                            <th className="p-4 bg-slate-50 font-semibold text-slate-700 w-1/3">Product Name</th>
                                            <td className="p-4 text-slate-600">Vitamin A Capsules 1,00,000 I.U.</td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <th className="p-4 bg-slate-50 font-semibold text-slate-700">Product Quantity</th>
                                            <td className="p-4 text-slate-600">As Per Requirements</td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <th className="p-4 bg-slate-50 font-semibold text-slate-700">Product Packaging</th>
                                            <td className="p-4 text-slate-600">10 x 10</td>
                                        </tr>
                                        <tr>
                                            <th className="p-4 bg-slate-50 font-semibold text-slate-700">Manufacturer</th>
                                            <td className="p-4 text-slate-600">TG Pharmz</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg text-amber-800 text-sm font-medium">
                                Packaging: 10 x 10 Packaging size is available 10 x 10
                            </div>

                            {/* Advantages Section */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Advantages of Soft Gel Capsules:</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xs mt-1">1</div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">Enhanced Bioavailability</h4>
                                            <p className="text-slate-600 text-sm">Soft gel capsules often provide better absorption of the active ingredients compared to tablets or traditional capsules. This is because the liquid or semi-solid fill material is readily absorbed by the body.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xs mt-1">2</div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">Easy to Swallow</h4>
                                            <p className="text-slate-600 text-sm">The smooth, gelatin-based shell of soft gel capsules makes them easy to swallow, especially for individuals who have difficulty swallowing tablets or capsules.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xs mt-1">3</div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">Masking Unpleasant Tastes or Odors</h4>
                                            <p className="text-slate-600 text-sm">The fill material can be formulated to mask the taste or odor of the active ingredients, making them more palatable.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xs mt-1">4</div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">Versatility</h4>
                                            <p className="text-slate-600 text-sm">Can accommodate a wide range of formulations including oils, suspensions, and solutions.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xs mt-1">5</div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">Tamper Resistance</h4>
                                            <p className="text-slate-600 text-sm">Sealed with heat or ultrasonic welding, providing tamper resistance and ensuring product integrity.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Benefits Section */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                                    <CheckCircle2 className="w-6 h-6 text-amber-600 mr-2" />
                                    Benefits: Vitamin A Capsules 1,00,000 I.U.
                                </h2>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Supports heart health and function",
                                        "Promotes healthy blood circulation",
                                        "Helps maintain optimal cholesterol levels",
                                        "Supports overall cardiovascular well-being"
                                    ].map((benefit, index) => (
                                        <li key={index} className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                                            <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="text-slate-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Safety Information */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                                    <ShieldCheck className="w-6 h-6 text-rose-500 mr-2" />
                                    Safety Information: Vitamin A Capsules 1,00,000 I.U.
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

                            {/* Additional Information */}
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Soft gel capsules are commonly used for delivering vitamins, minerals, omega-3 fatty acids, herbal supplements, and prescription medications. However, it’s important to note that soft gel capsules may not be suitable for all medications or individuals, and it’s essential to consult with a healthcare professional before using any new medication or supplement.
                                </p>
                            </div>

                            {/* Quality Assurance */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Quality Assurance:</h3>
                                <p className="text-slate-600 leading-relaxed border-l-4 border-amber-500 pl-4 py-2 bg-slate-50 rounded-r-lg">
                                    TG Pharmz follows strict quality control measures to ensure that <strong>Vitamin A 100000 IU</strong> meets the highest standards of safety, purity, and efficacy. Our manufacturing facilities adhere to Good Manufacturing Practices (GMP) guidelines, and each batch undergoes rigorous testing for quality and consistency.
                                </p>
                            </div>

                            {/* Export Information */}
                            <div className="bg-slate-900 text-white p-8 rounded-2xl">
                                <div className="flex items-start gap-4">
                                    <Truck className="w-8 h-8 text-amber-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-amber-400">Export Information:</h3>
                                        <p className="text-slate-300 leading-relaxed">
                                            <strong>Vitamin A Capsules 1,00,000 I.U.</strong> is available for export outside of India. For inquiries regarding bulk orders, pricing, and shipping arrangements, please contact our export department at <Link to="/contact" className="underline text-white hover:text-amber-300 transition-colors">Contact Us</Link>.
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

export default VitaminA100k;

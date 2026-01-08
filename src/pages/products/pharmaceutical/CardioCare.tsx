import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeartPulse, ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CardioCare = () => {
    const products = [
        { sno: 1, name: "Enoxaparin Sodium", strength: "20mg, 40mg, 60mg, 80mg", packing: "PFS" },
        { sno: 2, name: "Tigecycline(LYO)", strength: "50mg", packing: "VIAL+TRAY" },
        { sno: 3, name: "Teicoplanin(LYO)", strength: "200mg, 400mg", packing: "VIAL+TRAY" },
        { sno: 4, name: "Rabeprazole(LYO)", strength: "20mg", packing: "VIAL" },
        { sno: 5, name: "Esomeprazole(LYO)", strength: "40mg", packing: "VIAL" },
        { sno: 6, name: "Dobutamine(LYO)", strength: "250mg", packing: "VIAL" },
        { sno: 7, name: "Voriconazole", strength: "200mg", packing: "VIAL" },
        { sno: 8, name: "Vecuronium Bromide", strength: "4mg, 10mg", packing: "VIAL" },
        { sno: 9, name: "Caspofungin", strength: "50mg, 70mg", packing: "VIAL" },
        { sno: 10, name: "Streptokinase", strength: "1500000 IU, 750000 IU", packing: "VIAL" },
        { sno: 11, name: "Vancomycin", strength: "500mg, 1gm", packing: "VIAL" },
        { sno: 12, name: "Amphotericin B", strength: "50mg", packing: "VIAL" },
        { sno: 13, name: "Hyaluronidase", strength: "1500 IU", packing: "VIAL" },
        { sno: 14, name: "Bivalirudine", strength: "250mg", packing: "VIAL" }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-50 via-white to-pink-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6">
                                <HeartPulse className="w-4 h-4" />
                                <span className="text-sm font-semibold">Cardiovascular Care</span>
                            </div>

                            <h1 className="text-5xl font-bold text-slate-900 mb-6">
                                Cardio Care Products
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed">
                                Comprehensive cardiovascular pharmaceutical solutions for heart health, blood pressure management, and circulatory system support.
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
                                <div className="bg-gradient-to-r from-red-600 to-pink-600 px-8 py-6">
                                    <h2 className="text-2xl font-bold text-white">Cardio Care Product List</h2>
                                </div>

                                {/* Table */}
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
                                            {products.map((product, index) => (
                                                <motion.tr
                                                    key={product.sno}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.02 }}
                                                    className="hover:bg-red-50 transition-colors"
                                                >
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.sno}</td>
                                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{product.name}</td>
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.strength}</td>
                                                    <td className="px-6 py-4 text-sm text-slate-600">{product.packing}</td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Quality Note */}
                            <div className="mt-8 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                                <p className="text-sm text-slate-700">
                                    <span className="font-semibold text-red-700">Note:</span> All products are manufactured under WHO-GMP certified facilities with stringent quality control measures to ensure patient safety and therapeutic efficacy.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Cardio Products Section */}
                <FeaturedProducts />

            </main>

            <Footer />
        </div >
    );
};


const FeaturedProducts = () => {
    const [visibleCount, setVisibleCount] = useState(2);

    const products = [
        {
            name: "Bivalirudine",
            description: "Discover the power of Cardio Care: Bivalirudine by TG Pharmz. Our Comprehensive Cardiovascular health supplement is expertly formulated to support heart function and overall cardiovascular well-being. Packed with natural ingredients and backed by science, Cardio Care promotes healthy blood circulation, maintains optimal cholesterol levels, and supports heart muscle function. Enhance your heart health today with Cardio Care.",
            link: "/products/pharmaceutical/cardio/bivalirudine"
        },
        {
            name: "Hyaluronidase",
            description: "Discover the power of Cardio Care: Hyaluronidase by TG Pharmz. Our Comprehensive Cardiovascular health supplement is expertly formulated to support heart function and overall cardiovascular well-being. Packed with natural ingredients and backed by science, Cardio Care promotes healthy blood circulation, maintains optimal cholesterol levels, and supports heart muscle function. Enhance your heart health today with Cardio Care.",
            link: "/products/pharmaceutical/cardio/hyaluronidase"
        },
        {
            name: "Amphotericin B",
            description: "Discover the power of Cardio Care: Amphotericin B by TG Pharmz. Our Comprehensive Cardiovascular health supplement is expertly formulated to support heart function and overall cardiovascular well-being. Packed with natural ingredients and backed by science, Cardio Care promotes healthy blood circulation, maintains optimal cholesterol levels, and supports heart muscle function. Enhance your heart health today with Cardio Care.",
            link: "/products/pharmaceutical/cardio/amphotericin-b"
        },
        {
            name: "Vancomycin",
            description: "Discover the power of Cardio Care: Vancomycin by TG Pharmz. Our Comprehensive Cardiovascular health supplement is expertly formulated to support heart function and overall cardiovascular well-being. Packed with natural ingredients and backed by science, Cardio Care promotes healthy blood circulation, maintains optimal cholesterol levels, and supports heart muscle function. Enhance your heart health today with Cardio Care.",
            link: "/products/pharmaceutical/cardio/vancomycin"
        },
        {
            name: "Streptokinase",
            description: "Discover the power of Cardio Care: Streptokinase by TG Pharmz. Our Comprehensive Cardiovascular health supplement is expertly formulated to support heart function and overall cardiovascular well-being. Packed with natural ingredients and backed by science, Cardio Care promotes healthy blood circulation, maintains optimal cholesterol levels, and supports heart muscle function. Enhance your heart health today with Cardio Care.",
            link: "/products/pharmaceutical/cardio/streptokinase"
        },
        {
            name: "Caspofungin",
            description: "Discover the power of Cardio Care: Caspofungin by TG Pharmz. Our Comprehensive Cardiovascular health supplement is expertly formulated to support heart function and overall cardiovascular well-being. Packed with natural ingredients and backed by science, Cardio Care promotes healthy blood circulation, maintains optimal cholesterol levels, and supports heart muscle function. Enhance your heart health today with Cardio Care.",
            link: "/products/pharmaceutical/cardio/caspofungin"
        }
    ];

    const showMore = () => {
        setVisibleCount((prev) => prev + 2);
    };

    const handleLoadMore = () => {
        setVisibleCount(products.length);
    };

    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-4">
                            <Activity className="w-6 h-6 text-red-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Featured Cardio Care Products</h2>
                        <div className="w-20 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="space-y-6">
                        {products.slice(0, visibleCount).map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all group"
                            >
                                <div className="flex flex-col gap-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {product.description}
                                        </p>
                                    </div>
                                    <div className="flex justify-start">
                                        <Link
                                            to={product.link}
                                            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-red-50 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 whitespace-nowrap"
                                        >
                                            Read More
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {visibleCount < products.length && (
                        <div className="text-center mt-12">
                            <button
                                onClick={handleLoadMore}
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-red-200 hover:scale-105 transition-all duration-300"
                            >
                                Load More Products
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CardioCare;

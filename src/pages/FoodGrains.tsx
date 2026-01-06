import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const FoodGrains = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <img
                    src="/food-grains-hero.png"
                    alt="Food Grains, Oils & Spices"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay Block */}
                <div className="relative z-10 container-custom px-4 md:px-6">
                    <div className="max-w-2xl bg-black/70 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
                        <div className="inline-block px-4 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full mb-6">
                            <span className="text-sm font-semibold text-green-300 tracking-wide uppercase">
                                Food Grains, Oils & Spices
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Embark on a culinary journey of flavor, richness, and quality.
                        </h1>
                        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                            Our commitment to excellence extends to your kitchen, where we bring you the finest ingredients to enhance your culinary creations. From premium grains to aromatic spices and nourishing oils, savor the difference that quality makes.
                        </p>
                        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full transition-all shadow-lg hover:shadow-green-500/25">
                            Get Quote
                        </Button>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="container-custom py-20">
                <div className="max-w-5xl mx-auto space-y-20">

                    {/* Premium Food Grains */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px bg-gray-200 flex-1"></div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 border-2 border-gray-100 px-6 py-2 rounded-lg shadow-sm bg-white">
                                Premium Food Grains
                            </h2>
                            <div className="h-px bg-gray-200 flex-1"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Farm to Table Freshness:</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our food grains are sourced from the finest farms, ensuring a direct path from the fields to your table. Experience the freshness and nutritional richness of grains that are carefully selected for their quality and taste.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Variety & Versatility:</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Diversify your culinary adventures with our extensive range of food grains. From quinoa to basmati rice, we offer a variety that caters to diverse cuisines and dietary preferences, empowering you to create wholesome and delicious meals.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Quality You Can Trust:</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Quality is the cornerstone of our food grains collection. Rigorous quality control processes guarantee that every grain meets the highest standards, ensuring nutritional value and taste in every serving.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Aromatic Oils & Spices */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px bg-gray-200 flex-1"></div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 border-2 border-gray-100 px-6 py-2 rounded-lg shadow-sm bg-white">
                                Aromatic Oils & Spices
                            </h2>
                            <div className="h-px bg-gray-200 flex-1"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Pure, Aromatic Oils:</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Elevate your cooking with our premium oils. From the nutty richness of almond oil to the robust flavor of olive oil, our collection is designed to add depth and nuance to your culinary creations. Experience pure, aromatic oils that are a testament to quality.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Exquisite Spice Blends:</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Unleash the power of flavors with our handcrafted spice blends. Our spices are sourced from the best regions, ensuring authenticity and potency. From traditional blends to unique infusions, our spice collection offers an array of choices for every palate.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Freshness Sealed:</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our commitment to freshness is reflected in our packaging. Our oils and spices are sealed to preserve their aroma and flavor, ensuring that every dish you create is infused with the authentic taste of premium ingredients.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 border border-gray-200">
                        <h2 className="text-3xl font-bold mb-8 text-primary border-b border-gray-200 pb-4 inline-block">Why Choose GJ Pharmaceuticals LLP?</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg text-foreground inline">Quality Assurance: </h3>
                                    <p className="text-muted-foreground inline">We uphold stringent quality standards, ensuring that every product in our Food Grains, Oils & Spices range meets and exceeds industry benchmarks.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg text-foreground inline">Sustainable Sourcing: </h3>
                                    <p className="text-muted-foreground inline">We are dedicated to sustainable and ethical sourcing practices, supporting both environmental health and local communities.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg text-foreground inline">Culinary Innovation: </h3>
                                    <p className="text-muted-foreground inline">Our collection is designed to inspire culinary innovation. Explore new flavors, experiment with diverse cuisines, and enjoy the art of cooking with our premium ingredients.</p>
                                </div>
                            </div>

                            <p className="text-lg font-medium text-primary pt-6 italic border-t border-primary/10 mt-6">
                                Indulge in the culinary excellence of GJ Pharmaceuticals LLP. Elevate your dishes with the finest Food Grains, Oils & Spices that redefine gourmet cooking and bring the essence of quality to your kitchen.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FoodGrains;

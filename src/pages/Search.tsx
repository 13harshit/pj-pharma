import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Search as SearchIcon, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import Seo from '@/components/Seo';
import PageWrapper from '@/components/PageWrapper';

// Searchable content index
const searchIndex = [
    // Main Pages
    { title: "Home", path: "/", category: "Page", description: "Welcome to TG PHARMZ - Leading Pharmaceutical Manufacturer" },
    { title: "About Us", path: "/about", category: "Company", description: "Learn about our history, mission, and values." },
    { title: "Contact Us", path: "/contact", category: "Company", description: "Get in touch with us for inquiries and support." },
    { title: "Research & Development", path: "/research", category: "Innovation", description: "Our state-of-the-art R&D facilities and commitment to innovation." },

    // Facilities
    { title: "Manufacturing Facilities", path: "/facilities/manufacturing", category: "Facilities", description: "World-class manufacturing units adhering to GMP standards." },
    { title: "Export Operations", path: "/facilities/export", category: "Facilities", description: "Global export network serving over 50 countries." },
    { title: "Contract Manufacturing", path: "/facilities/contract", category: "Services", description: "Third-party manufacturing services for pharmaceutical companies." },

    // Products Categories
    { title: "Pharmaceutical Products", path: "/products/pharmaceutical", category: "Products", description: "Wide range of pharmaceutical formulations including tablets, injections, and more." },
    { title: "Nutraceuticals", path: "/products/nutraceutical", category: "Products", description: "Dietary supplements and functional foods for health and wellness." },
    { title: "Herbal & Cosmetics", path: "/herbal-and-cosmetics", category: "Products", description: "Natural herbal products and cosmetic formulations." },
    { title: "Food Grains & Spices", path: "/products/food-grains", category: "Products", description: "Premium quality food grains and authentic spices." },
    { title: "Chemicals", path: "/products/chemicals", category: "Products", description: "Industrial and fine chemicals for various applications." },

    // Specific Product Lines (from Navbar)
    { title: "Tablets, Capsules, Syrup", path: "/products/pharmaceutical/general", category: "Pharmaceuticals", description: "Oral solid and liquid dosage forms." },
    { title: "Injections", path: "/products/pharmaceutical/injections", category: "Pharmaceuticals", description: "Sterile injectable formulations." },
    { title: "IV Fluids", path: "/products/pharmaceutical/iv-fluids", category: "Pharmaceuticals", description: "Intravenous fluids and electrolytes." },
    { title: "Anticancer Drugs", path: "/products/pharmaceutical/anticancer", category: "Pharmaceuticals", description: "Oncology medications and therapies." },
    { title: "Cardio Care", path: "/products/pharmaceutical/cardio", category: "Pharmaceuticals", description: "Medications for cardiovascular health." },
    { title: "Soft Gel Capsules", path: "/products/pharmaceutical/softgel", category: "Pharmaceuticals", description: "Soft gelatin capsules for better bioavailability." },
    { title: "Suppositories", path: "/products/pharmaceutical/suppository", category: "Pharmaceuticals", description: "Rectal and vaginal suppositories." },
    { title: "Diagnostics Kits", path: "/products/pharmaceutical/diagnostics", category: "Pharmaceuticals", description: "Rapid diagnostic test kits." }
];

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState<typeof searchIndex>([]);
    const { t } = useLanguage();

    useEffect(() => {
        if (query.trim()) {
            const lowerQuery = query.toLowerCase();
            const filtered = searchIndex.filter(item =>
                item.title.toLowerCase().includes(lowerQuery) ||
                item.description.toLowerCase().includes(lowerQuery) ||
                item.category.toLowerCase().includes(lowerQuery)
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    }, [query]);

    return (
        <PageWrapper className="bg-slate-50">
            <Seo
                title={`Search Results for "${query}"`}
                description="Search results for TG PHARMZ website."
                keywords={`search, ${query}, pharma products`}
            />
            <Navbar />

            <main className="flex-grow pt-28 pb-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl font-bold text-slate-900 mb-4">Search Results</h1>
                        <p className="text-slate-600">
                            Showing results for "<span className="font-semibold text-primary">{query}</span>"
                        </p>
                    </div>

                    {results.length > 0 ? (
                        <div className="space-y-4">
                            {results.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Link to={item.path} className="block bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-md transition-all group">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">{item.category}</span>
                                                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                                <p className="text-slate-600 text-sm">{item.description}</p>
                                            </div>
                                            <ArrowRight className="text-slate-300 group-hover:text-primary transition-colors" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 border-dashed">
                            <SearchIcon className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                            <h3 className="text-xl font-medium text-slate-900 mb-2">No results found</h3>
                            <p className="text-slate-500">We couldn't find any matches for "{query}". Try checking for typos or using different keywords.</p>
                            <div className="mt-8">
                                <Link to="/" className="text-primary font-medium hover:underline">Return to Home</Link>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </PageWrapper>
    );
};

export default Search;

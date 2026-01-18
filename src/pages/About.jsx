import { FaUtensils, FaLeaf, FaUsers } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <PageTransition>
            <div className="w-full pt-20">
                {/* Header */}
                {/* Header */}
                <section className="bg-white py-20 px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-[#2d1810] mb-6">Our Heritage</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            A journey from a small home kitchen to your favorite neighborhood bakery.
                        </p>
                    </motion.div>
                </section>

                {/* Story & Philosophy */}
                <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-white shadow-md rounded-full text-[#0077B6]">
                                <FaUtensils size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-[#2d1810]">Our Story</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Founded in 2018, Bakery Name started with a simple passion: to bring the authentic taste of artisan bread to our community. What began as a weekend project in a small home quickly grew as the aroma of fresh sourdough drew neighbors in. Today, we still bake with the same dedication to craft and quality.
                        </p>

                        <div className="flex items-center gap-4 mb-4 pt-8">
                            <div className="p-3 bg-white shadow-md rounded-full text-[#0077B6]">
                                <FaLeaf size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-[#2d1810]">Our Philosophy</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            We believe in slow food. Our breads undergo a long fermentation process to unlock deep flavors and improve digestibility. We source organic flour, free-range eggs, and local dairy because great bread starts with great ingredients. No preservatives, no shortcuts.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {/* Placeholder images */}
                        <div className="h-64 bg-gray-200 rounded-2xl"></div>
                        <div className="h-64 bg-gray-300 rounded-2xl mt-12"></div>
                    </motion.div>
                </section>

                {/* Team */}
                <section className="py-20 px-6 bg-[#023E8A] text-white">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl font-bold mb-4">Meet the Bakers</h2>
                            <p className="text-white/60">The hands behind the flour.</p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[1, 2, 3].map((i, index) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="text-center group"
                                >
                                    <div className="w-48 h-48 mx-auto bg-gray-500 rounded-full mb-6 border-4 border-[#0077B6] overflow-hidden">
                                        {/* Placeholder team photo */}
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">Baker Name</h3>
                                    <p className="text-[#48CAE4] text-sm uppercase tracking-widest font-bold">Head Baker</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery */}
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#2d1810]">Behind the Scenes</h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96"
                    >
                        <div className="bg-gray-200 rounded-2xl col-span-2 row-span-2"></div>
                        <div className="bg-gray-300 rounded-2xl"></div>
                        <div className="bg-gray-400 rounded-2xl"></div>
                        <div className="bg-gray-300 rounded-2xl"></div>
                        <div className="bg-gray-200 rounded-2xl"></div>
                    </motion.div>
                </section>
            </div>
        </PageTransition>
    );
}

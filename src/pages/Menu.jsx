import { useState } from 'react';
import { menuData } from '../data/menuData';
import PageTransition from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState("All");

    // Get unique categories from data + add "All"
    const categories = ["All", ...new Set(menuData.map(item => item.category))];

    // Filter items based on active state
    const filteredItems = activeCategory === "All"
        ? menuData
        : menuData.filter(item => item.category === activeCategory);

    return (
        <PageTransition>
            {/* Added pt-32 to account for the fixed Navbar defined in Layout */}
            <div className="menu-container">
                <h1>Our Daily Menu</h1>

                {/* Category Filter Buttons */}
                <div className="filter-bar">
                    {categories.map((cat, index) => (
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            key={cat}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={activeCategory === cat ? 'active-btn' : ''}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>

                {/* Menu Grid */}
                <motion.div layout className="menu-grid">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={item.id}
                                className={`menu-card ${item.soldOut ? 'sold-out' : ''}`}
                            >
                                {item.soldOut && <span className="badge">Sold Out</span>}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    loading="lazy"
                                    decoding="async"
                                    width="600"
                                    height="400"
                                />

                                <div className="info">
                                    <h3>{item.name}</h3>
                                    <p className="price">{item.price}</p>
                                    <p className="desc">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </PageTransition>
    );
}

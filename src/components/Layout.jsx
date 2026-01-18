import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaTimes } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

export default function Layout() {
    const [showBanner, setShowBanner] = useState(true);
    const location = useLocation();

    return (
        <div className="relative font-inter text-[#2d1810] overflow-hidden min-h-screen">
            {/* Animated Gradient Background (Clean White/Sky) */}
            <div
                className="fixed inset-0 z-[-1] animate-gradient-x"
                style={{
                    background: 'linear-gradient(-45deg, #FFFFFF, #F8FAFC, #F0F9FF, #E0F2FE)'
                }}
            />

            {/* Announcement Popup */}
            <AnimatePresence>
                {showBanner && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full relative border-2 border-[#0077B6] text-center transform animate-fade-in-up">
                            <button
                                onClick={() => setShowBanner(false)}
                                className="absolute top-3 right-3 text-[#2d1810] hover:text-[#0077B6] transition-colors p-1"
                            >
                                <FaTimes size={20} />
                            </button>

                            <div className="text-4xl mb-4">🎄</div>
                            <h3 className="text-2xl font-bold text-[#2d1810] mb-2 font-serif uppercase tracking-widest">Holiday Update</h3>
                            <div className="w-16 h-1 bg-[#0077B6] mx-auto mb-4"></div>
                            <p className="text-lg text-gray-700 font-medium">
                                We will be closed on <br />
                                <span className="text-[#0077B6] font-bold">December 25th</span>
                            </p>
                            <p className="mt-4 text-sm text-gray-500 italic">Wishing you a sweet holiday season!</p>

                            <button
                                onClick={() => setShowBanner(false)}
                                className="mt-6 bg-[#0077B6] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-[#023E8A] transition-colors shadow-lg"
                            >
                                Got it
                            </button>
                        </div>
                    </div>
                )}
            </AnimatePresence>

            <Navbar />
            <main className="w-full min-h-screen">
                <AnimatePresence mode="wait">
                    {/* We must wrap Outlet in a div with a unique key for Framer Motion to detect route changes */}
                    <div key={location.pathname} className="w-full">
                        <Outlet />
                    </div>
                </AnimatePresence>
            </main>
            {location.pathname !== '/' && <Footer />}
        </div>
    );
}

import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Pages that have a dark background at the top (Home, Location)
    // and need white text when transparent.
    // Other pages (Menu, About) have light backgrounds and need dark text.
    const isDarkHeader = ['/', '/location'].includes(location.pathname);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'Heritage' },
        { to: '/menu', label: 'Menu' },
        { to: '/location', label: 'Visit' },
    ];

    return (
        <>
            <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#023E8A]/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
                    {/* Logo (Kept on Left) */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white text-[#2d1810] rounded-lg flex items-center justify-center border border-[#48CAE4]/30">
                            <span className="font-bold text-xl font-serif">B</span>
                        </div>
                        <span className={`font-serif font-bold tracking-wider uppercase text-lg ${!scrolled && !isDarkHeader ? 'text-[#2d1810]' : 'text-white'}`}>
                            Bakers
                        </span>
                    </div>

                    {/* Desktop Menu - Centered Absolute */}
                    <nav className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `relative text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 pb-1 
                                    ${isActive
                                        ? (scrolled || isDarkHeader ? 'text-[#48CAE4]' : 'text-[#0077B6]')
                                        : !scrolled && !isDarkHeader ? 'text-[#2d1810] hover:text-[#0077B6]' : 'text-white hover:text-[#48CAE4]'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.label}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d97706] rounded-full"></span>
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle (Right) */}
                    <button
                        className={`md:hidden text-2xl ml-auto ${!scrolled && !isDarkHeader ? 'text-[#2d1810]' : 'text-white'}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-[#475569] flex flex-col items-center justify-center space-y-8 md:hidden">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            onClick={() => setMobileMenuOpen(false)}
                            className={({ isActive }) =>
                                `text-2xl font-serif font-bold tracking-widest uppercase transition-colors 
                                ${isActive ? 'text-[#4B6584]' : 'text-white'}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </>
    );
}

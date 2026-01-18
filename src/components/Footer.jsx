import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#023E8A] text-white pt-16 pb-8 border-t border-[#48CAE4]/20">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Brand */}
                <div className="md:col-span-1 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white text-[#475569] rounded flex items-center justify-center font-bold font-serif">B</div>
                        <span className="font-serif font-bold text-xl tracking-wide">BAKERS</span>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                        Handcrafted with passion, baked with love, served with joy in the heart of the city.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-[#48CAE4] uppercase tracking-widest text-xs mb-6">Explore</h3>
                    <ul className="space-y-3 text-sm text-[#f3e9dc]/80">
                        <li><a href="/menu" className="hover:text-white transition-colors">Our Menu</a></li>
                        <li><a href="/about" className="hover:text-white transition-colors">Heritage</a></li>
                        <li><a href="/location" className="hover:text-white transition-colors">Locations</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-bold text-[#48CAE4] uppercase tracking-widest text-xs mb-6">Contact</h3>
                    <ul className="space-y-3 text-sm text-white/80">
                        <li>123 Baker Street</li>
                        <li>Food City, FC 90210</li>
                        <li className="pt-2">(555) 123-4567</li>
                        <li>hello@bakeryname.com</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-bold text-[#48CAE4] uppercase tracking-widest text-xs mb-6">Newsletter</h3>
                    <p className="text-xs text-white/60 mb-4">Subscribe for seasonal updates and offers.</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-white/5 border border-white/10 rounded-l px-4 py-2 text-sm w-full focus:outline-none focus:border-[#48CAE4] transition-colors"
                        />
                        <button className="bg-[#48CAE4] text-[#023E8A] px-4 py-2 rounded-r hover:bg-[#90E0EF] transition-colors font-bold text-sm">OK</button>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#f3e9dc]/40">
                <p>&copy; 2025 Artisan Bakers. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors"><FaInstagram size={18} /></a>
                    <a href="#" className="hover:text-white transition-colors"><FaTwitter size={18} /></a>
                    <a href="#" className="hover:text-white transition-colors"><FaFacebook size={18} /></a>
                </div>
            </div>
        </footer>
    );
}

import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '../data/menuData';
import { reviews } from '../data/reviews';
import { instagramPosts } from '../data/instagram';
import { FaStar, FaInstagram, FaHeart, FaPlus, FaFire, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import { motion, useSpring, useMotionValue, useTransform, useVelocity } from 'framer-motion';
import Footer from '../components/Footer';

export default function Home() {
    // Duplicate data to create a seamless loop
    const sliderItems = [...menuData, ...menuData, ...menuData, ...menuData];

    // Testimonials Data extension
    const collageReviews = [
        {
            id: 1, name: "Sarah L.", rating: 5,
            text: "The best almond croissant I've ever had! Perfectly flaky and not too sweet. It reminds me of my trip to Paris last summer.",
            classes: "md:col-span-2 md:row-span-2 bg-white/10"
        },
        {
            id: 2, name: "James R.", rating: 5,
            text: "I come here every Sunday for the Sourdough. Unlike other places, their crust is actually crispy.",
            classes: "md:col-span-1 md:row-span-1 bg-white/5"
        },
        {
            id: 3, name: "Elena M.", rating: 4,
            text: "Lovely atmosphere and the coffee is top-notch. Highly recommend the berry tart! The staff is always smiling.",
            classes: "md:col-span-1 md:row-span-2 bg-white/5"
        },
        {
            id: 4, name: "Michael B.", rating: 5,
            text: "Ordered a birthday cake last minute and they saved the day. It was moist, rich, and beautifully decorated.",
            classes: "md:col-span-1 md:row-span-1 bg-white/5"
        },
        {
            id: 5, name: "Jessica T.", rating: 5,
            text: "The gluten-free options are actually edible! I'm so happy I found this place.",
            classes: "md:col-span-1 md:row-span-1 bg-white/5"
        },
        {
            id: 6, name: "David K.", rating: 5,
            text: "A hidden gem in the neighborhood. The smell of fresh bread alone is worth the visit.",
            classes: "md:col-span-2 md:row-span-1 bg-white/10"
        },
        {
            id: 7, name: "Priya S.", rating: 4,
            text: "Love the seasonal specials. The pumpkin spice cronut was divine.",
            classes: "md:col-span-1 md:row-span-1 bg-white/5"
        }
    ];

    const containerRef = useRef(null);
    const snapTimeoutRef = useRef(null);

    // Smooth Scroll Logic
    const x = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 40, damping: 25, mass: 1 });
    const [containerWidth, setContainerWidth] = useState(0);

    // Motion Blur Logic
    const xVelocity = useVelocity(springX);
    const blurValue = useTransform(xVelocity, [-2000, 0, 2000], [5, 0, 5]);
    const blurFilter = useTransform(blurValue, (v) => `blur(${v}px)`);

    // Parallax Transforms
    const heroBgX = useTransform(springX, (value) => value * 0.5);
    const heroTextX = useTransform(springX, (value) => value * 0.2);

    useEffect(() => {
        const calculateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.scrollWidth - window.innerWidth);
            }
        };

        calculateWidth();
        window.addEventListener('resize', calculateWidth);
        setTimeout(calculateWidth, 500);

        return () => window.removeEventListener('resize', calculateWidth);
    }, []);

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();
            if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);

            const currentX = x.get();
            let scrollDelta = e.deltaY * 2.5;
            if (e.deltaX) scrollDelta = e.deltaX * 2.5;

            let newX = currentX - scrollDelta;
            if (newX > 0) newX = 0;
            if (newX < -containerWidth) newX = -containerWidth;
            x.set(newX);

            snapTimeoutRef.current = setTimeout(() => {
                const viewWidth = window.innerWidth;
                const currentPos = x.get();
                const slideIndex = Math.round(Math.abs(currentPos) / viewWidth);
                let snapTarget = -(slideIndex * viewWidth);
                if (snapTarget > 0) snapTarget = 0;
                if (snapTarget < -containerWidth) snapTarget = -containerWidth;
                x.set(snapTarget);
            }, 200);
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        // Add marquee animation styles dynamically
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 40s linear infinite;
            }
            .pause-on-hover:hover {
                animation-play-state: paused;
            }
        `;
        document.head.appendChild(style);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
            document.head.removeChild(style);
        };
    }, [containerWidth, x]);

    return (
        <PageTransition>
            <div className="h-screen w-screen overflow-hidden bg-neutral-900 fixed inset-0">
                <motion.div
                    ref={containerRef}
                    style={{ x: springX, filter: blurFilter }}
                    className="flex h-full w-max will-change-transform"
                >
                    {/* Section 1: Hero */}
                    <section className="relative h-screen w-screen flex-shrink-0 bg-gradient-to-br from-[#2d1810] to-[#5d4037] flex items-center justify-center text-center px-4 overflow-hidden">
                        <motion.div style={{ x: heroBgX }} className="absolute inset-0 bg-[url('/images/hero/home-hero.png')] bg-cover bg-center opacity-40 mix-blend-overlay scale-110"></motion.div>
                        <motion.div style={{ x: heroTextX }} className="relative z-10 max-w-4xl mx-auto space-y-6 select-none">
                            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="text-5xl md:text-8xl font-bold text-white leading-tight drop-shadow-md">
                                Baked with Love, <br /> Served with Joy.
                            </motion.h1>
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-xl md:text-3xl text-white/90 font-light max-w-2xl mx-auto">
                                Artisan breads and delicate pastries made fresh every morning.
                            </motion.p>
                            <div className="pt-8">
                                <Link to="/menu">
                                    <button className="inline-block px-10 py-4 bg-[#2d1810] text-white text-lg font-bold uppercase tracking-wider rounded-full hover:bg-[#0077B6] hover:scale-105 transition-all duration-500 shadow-2xl border border-white/20">
                                        View Today's Menu
                                    </button>
                                </Link>
                            </div>
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm font-light uppercase tracking-widest opacity-60">Use Mouse Wheel to Scroll</div>
                        </motion.div>
                    </section>

                    {/* Section 2: Best Sellers - SLIDER & PATTERN */}
                    <section className="h-screen w-screen flex-shrink-0 bg-[#2d1810] flex items-center justify-center relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[url('/images/bg/pattern.png')] bg-repeat opacity-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2d1810] via-transparent to-[#2d1810] opacity-80"></div>

                        <div className="w-full relative z-10 flex flex-col h-full justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-center mb-12 select-none"
                            >
                                <h2 className="text-5xl font-bold text-white mb-3 drop-shadow-lg">Our Best Sellers</h2>
                                <div className="w-20 h-1 bg-[#0077B6] mx-auto rounded-full"></div>
                            </motion.div>

                            {/* Auto Slider Container - WITH FADE MASK */}
                            <div
                                className="w-full overflow-hidden"
                                style={{
                                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                                }}
                            >
                                <div className="flex gap-8 px-8 animate-marquee pause-on-hover w-max">
                                    {sliderItems.map((item, i) => (
                                        <div
                                            key={`${item.id}-${i}`}
                                            className="bg-white rounded-[2rem] shadow-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 border border-white/10 relative w-[350px] flex-shrink-0"
                                        >
                                            <div className="h-72 bg-gray-200 relative overflow-hidden">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#2d1810] px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                                                    <FaFire className="text-[#0077B6]" /> Best Seller
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                                                    <button className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 bg-white text-[#2d1810] hover:bg-[#0077B6] hover:text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2">
                                                        <FaPlus size={12} /> Quick Add
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="p-6 relative">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <h3 className="text-lg font-bold text-[#2d1810] group-hover:text-[#0077B6] transition-colors">{item.name}</h3>
                                                        <div className="flex items-center gap-1 text-amber-400 text-xs mt-1">
                                                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar className="text-amber-400/50" />
                                                            <span className="text-gray-400 ml-1 font-medium">(120+)</span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[#0077B6] font-bold text-lg">{item.price}</span>
                                                </div>
                                                <p className="text-gray-500 text-xs mt-3 line-clamp-2 leading-relaxed font-light">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Testimonials - COLLAGE & PATTERN */}
                    <section className="h-screen w-screen flex-shrink-0 bg-[#023E8A] flex items-center justify-center text-white relative overflow-hidden p-8">
                        {/* Background Pattern - Blue Version */}
                        <div className="absolute inset-0 bg-[url('/images/bg/pattern-blue.png')] bg-repeat bg-contain opacity-10 mix-blend-soft-light"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#023E8A] via-transparent to-[#023E8A] opacity-60"></div>

                        <div className="max-w-[1400px] w-full relative z-10 flex flex-col h-full justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="text-center mb-10 select-none"
                            >
                                <h2 className="text-5xl font-bold mb-4 drop-shadow-md">What Our Customers Say</h2>
                                <div className="w-20 h-1 bg-[#48CAE4] mx-auto rounded-full"></div>
                            </motion.div>

                            {/* Masonry Grid Container */}
                            <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[240px] gap-6 w-full h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                                {collageReviews.map((review, i) => (
                                    <motion.div
                                        key={review.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.6 }}
                                        className={`backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:border-white/30 transition-all duration-500 group flex flex-col justify-between ${review.classes}`}
                                    >
                                        <div>
                                            <div className="flex mb-4 text-[#48CAE4] space-x-1">
                                                {[...Array(review.rating)].map((_, r) => <FaStar key={r} size={14} />)}
                                            </div>
                                            <p className="text-lg italic font-light leading-relaxed text-white/90 group-hover:text-white transition-colors">"{review.text}"</p>
                                        </div>
                                        <div className="flex items-center gap-3 mt-6">
                                            <div className="w-10 h-10 rounded-full bg-[#48CAE4]/20 flex items-center justify-center text-[#48CAE4] font-bold text-sm border border-[#48CAE4]/30">
                                                {review.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold uppercase tracking-wider text-xs text-[#48CAE4]">{review.name}</p>
                                                <p className="text-[10px] text-white/40 font-medium tracking-wide">Verified</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Social Community Hub */}
                    <section className="h-screen w-screen flex-shrink-0 bg-[#1a100c] flex items-center justify-center p-6 relative overflow-hidden">
                        {/* Pattern Background */}
                        <div className="absolute inset-0 bg-[url('/images/bg/pattern.png')] bg-repeat opacity-[0.03] invert"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a100c] via-transparent to-[#1a100c] opacity-80"></div>

                        <div className="max-w-[1400px] w-full relative z-10 flex flex-col h-full justify-center pt-24">
                            <div className="text-center mb-6 select-none">
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-5xl font-bold text-white mb-6"
                                >
                                    <br />
                                    Join Our Community
                                </motion.h2>
                                <p className="text-white/60 text-lg mb-6 max-w-2xl mx-auto font-light">
                                    Follow us for daily baking inspiration, behind-the-scenes stories, and exclusive offers.
                                </p>

                                {/* Social Icons */}
                                <div className="flex justify-center gap-6 mb-8">
                                    <a href="#" className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-2xl text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-300 transform hover:scale-110 shadow-lg group">
                                        <FaInstagram />
                                    </a>
                                    <a href="#" className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-2xl text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 transform hover:scale-110 shadow-lg group">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#" className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-2xl text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 transform hover:scale-110 shadow-lg group">
                                        <FaWhatsapp />
                                    </a>
                                </div>
                            </div>

                            {/* Social Feed Collage - FIXED SIZE NO SCROLL */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full h-auto auto-rows-[160px]">
                                {[
                                    { id: 1, img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000", likes: 245, span: "md:col-span-2 md:row-span-2" }, // Hero Croissant
                                    { id: 2, img: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?q=80&w=1000", likes: 189, span: "md:row-span-2" }, // Laptop/Lifestyle
                                    { id: 3, img: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1000", likes: 312, span: "" }, // Cupcakes
                                    { id: 4, img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000", likes: 156, span: "" }, // Cake Slice
                                    { id: 5, img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1000", likes: 420, span: "" }, // Baker Hands
                                    { id: 6, img: "https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&w=1000", likes: 210, span: "" }, // Bread Rack
                                    { id: 7, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000", likes: 178, span: "md:col-span-2" }, // Wide Sourdough spread
                                    // { id: 8, img: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1000", likes: 299, span: "" } // Coffee & Pastry
                                ].map((post, i) => (
                                    <motion.div
                                        key={post.id}
                                        className={`relative group overflow-hidden rounded-2xl cursor-pointer ${post.span}`}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <img src={post.img} alt="Social" className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="text-white font-bold flex items-center gap-2 text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <FaHeart /> {post.likes}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Footer */}
                    <section className="h-screen w-screen flex-shrink-0 flex items-center justify-center bg-[#023E8A]">
                        <div className="w-full h-full flex items-center">
                            <motion.div className="w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}><Footer /></motion.div>
                        </div>
                    </section>
                </motion.div>
            </div>
        </PageTransition>
    );
}

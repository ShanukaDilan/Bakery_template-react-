import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

export default function Location() {
    return (
        <PageTransition>
            <div className="w-full pt-20">
                {/* Header */}
                <section className="bg-[#2d1810] py-20 px-6 text-center text-[#f3e9dc]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Us</h1>
                        <p className="text-xl text-[#f3e9dc]/80 max-w-2xl mx-auto">
                            Follow the smell of fresh bread.
                        </p>
                    </motion.div>
                </section>

                <div className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info & Hours */}
                    <div className="space-y-12">
                        {/* Info Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                        >
                            <h2 className="text-2xl font-bold text-[#2d1810] mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <FaMapMarkerAlt className="text-[#0077B6] text-xl mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-800">Address</h3>
                                        <p className="text-gray-600">123 Baker Street<br />Food City, FC 90210</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaPhone className="text-[#0077B6] text-xl" />
                                    <div>
                                        <h3 className="font-bold text-gray-800">Phone</h3>
                                        <p className="text-gray-600">(555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaEnvelope className="text-[#0077B6] text-xl" />
                                    <div>
                                        <h3 className="font-bold text-gray-800">Email</h3>
                                        <p className="text-gray-600">hello@bakeryname.com</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Hours Table */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg"
                        >
                            <h2 className="text-2xl font-bold text-[#2d1810] mb-6">Opening Hours</h2>
                            <table className="w-full text-left">
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="flex justify-between py-3">
                                        <td className="font-medium text-gray-700">Monday - Friday</td>
                                        <td className="text-gray-600">7:00 AM - 6:00 PM</td>
                                    </tr>
                                    <tr className="flex justify-between py-3">
                                        <td className="font-medium text-gray-700">Saturday</td>
                                        <td className="text-gray-600">8:00 AM - 5:00 PM</td>
                                    </tr>
                                    <tr className="flex justify-between py-3">
                                        <td className="font-medium text-gray-700">Sunday</td>
                                        <td className="text-[#0077B6] font-bold">Closed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </motion.div>
                    </div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133446824!2d-73.98773128459411!3d40.74844057932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629734189399!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Bakery Location"
                        ></iframe>
                    </motion.div>
                </div>

                {/* Wholesale Form */}
                <section className="bg-white py-20 px-6">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-[#2d1810]">Wholesale & Catering</h2>
                            <p className="text-gray-600 mt-2">Interested in serving our pastries at your cafe or event?</p>
                        </div>

                        <motion.form
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0077B6] focus:ring-1 focus:ring-[#0077B6] outline-none transition-colors" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0077B6] focus:ring-1 focus:ring-[#0077B6] outline-none transition-colors" placeholder="you@company.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0077B6] focus:ring-1 focus:ring-[#0077B6] outline-none transition-colors h-32" placeholder="Tell us about your needs..."></textarea>
                            </div>
                            <button type="button" className="w-full bg-[#0077B6] text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-[#023E8A] transition-colors shadow-lg">
                                Send Inquiry
                            </button>
                        </motion.form>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}

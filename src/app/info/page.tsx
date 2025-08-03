"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Map, Bed, Calendar, HandHeart } from 'lucide-react';

const TravelInfoPage = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const services = [
        {
            icon: <Map className="w-8 h-8" />,
            title: "Find your perfect getaway.",
            description: "Thousands of the best destinations are ready to spoil your eyes.",
            color: "from-orange-400 to-orange-600"
        },
        {
            icon: <Bed className="w-8 h-8" />,
            title: "Stay Your Way",
            description: "Hotels, resorts, homestays & more.\n" +
                "We partner with over 10,000 accommodations nationwide so you can find the right place at the right price.",
            color: "from-red-400 to-red-600"
        },
        {
            icon: <Calendar className="w-8 h-8" />,
            title: "Simple & Smart Booking",
            description: "No hassle. Just tap and go.\n" +
                "Plan, book, and pay — all in a few taps. Our intuitive interface makes travel planning effortless.",
            color: "from-teal-400 to-teal-600"
        },
        {
            icon: <HandHeart className="w-8 h-8" />,
            title: "Trusted & Secure\n",
            description: "Your safety is our priority.\n" +
                "Every booking is protected with secure payment and verified partners — so you can travel with peace of mind.",
            color: "from-pink-400 to-pink-600"
        }
    ];

    const contactInfo = [
        {
            icon: <Mail className="w-12 h-12" />,
            title: "Email",
            subtitle: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
            contact: "trip@tiewnext.com",
            action: "mailto:trip@tiewnext.com"
        },
        {
            icon: <Phone className="w-12 h-12" />,
            title: "Phone",
            subtitle: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
            contact: "(66) 075-673000",
            action: "tel:+6675673000"
        },
        {
            icon: <MapPin className="w-12 h-12" />,
            title: "Location",
            subtitle: "",
            contact: "Walailak University, 222 Thaiburi, Thasala District, Nakhon Si Thammarat, Thailand.",
            action: "https://maps.app.goo.gl/SzNUbZajqSQKAFAo7?g_st=ipc\n",
            actionText: "View on Google Map"
        }
    ];

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <motion.section
                className="relative overflow-hidden bg-gradient-to-br from-[#DF3C38] via-[#D32A25] to-[#B91C1C] text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative container mx-auto px-6 py-20 text-center">
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
                        {...fadeInUp}
                    >
                        Provide The Best Travel
                        <br />
                        Experience For You
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-100"
                        {...fadeInUp}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        We understand that every journey has unique needs. Therefore, we offer customized travel
                        packages designed according to your preferences and budget.
                    </motion.p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            </motion.section>

            {/* Vision & Mission Section */}
            <motion.section
                className="py-20 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-6">
                    <motion.div
                        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-3xl shadow-lg border border-teal-100"
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                                <MapPin className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Vision</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our vision is to become a leading travel agency company that provides high-quality services and inspiration for our customer.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-lg border border-blue-100"
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                                <HandHeart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our vision is to become a leading travel agency company that provides high-quality services and inspiration for our customer.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Services Section */}
            <motion.section
                className="py-20 bg-gradient-to-br from-[#DF3C38] via-[#D32A25] to-[#B91C1C] text-white relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Finding Your Next
                                <br />
                                Adventure Is Our
                                <br />
                                Mission
                            </h2>
                            <p className="text-xl text-gray-100 leading-relaxed">
                                With a wide selection of destinations ranging from breathtaking natural escapes to bustling cities and hidden local gems, TiewNext helps you explore Thailand like never before. Whether you're planning a spontaneous weekend trip or a long-awaited holiday, we make your travel dreams easier and more rewarding.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-gray-800 hover:transform hover:scale-105 transition-all duration-300"
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
                className="py-20 bg-gradient-to-br from-gray-50 to-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-6">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        Get In Touch
                    </motion.h2>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-20 h-20 bg-gradient-to-r from-[#DF3C38] to-[#D32A25] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                                    {info.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">{info.title}</h3>
                                {info.subtitle && (
                                    <p className="text-gray-600 mb-6 leading-relaxed">{info.subtitle}</p>
                                )}
                                <div className="space-y-2">
                                    {info.title === "Location" ? (
                                        <>
                                            <p className="text-gray-800 font-medium">{info.contact}</p>
                                            <a
                                                href={info.action}
                                                className="inline-block text-[#DF3C38] hover:text-[#D32A25] font-medium transition-colors duration-300"
                                            >
                                                {info.actionText}
                                            </a>
                                        </>
                                    ) : (
                                        <a
                                            href={info.action}
                                            className="text-[#DF3C38] hover:text-[#D32A25] font-medium transition-colors duration-300 block"
                                        >
                                            {info.contact}
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

        </div>
    );
};

export default TravelInfoPage;
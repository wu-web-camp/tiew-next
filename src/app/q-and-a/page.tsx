"use client";
import React, { useState } from 'react';
import {ChevronDown, Search, HelpCircle, MessageSquare, Lightbulb, TimerIcon} from 'lucide-react';

type QuestionItem = {
    id: number;
    question: string;
    answer: string;
    category: string;
}

const QAPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    const qaData = [
        {
            id: 1,
            question: "What makes your product different from competitors?",
            answer: "Our product stands out through innovative design, superior performance, and exceptional customer support. We focus on user experience and continuous improvement based on customer feedback.",
            category: "Product"
        },
        {
            id: 2,
            question: "How do I get started with your platform?",
            answer: "Getting started is simple! Sign up for a free account, complete the onboarding process, and you'll have access to our intuitive dashboard. Our team is available 24/7 to help you along the way.",
            category: "Getting Started"
        },
        {
            id: 3,
            question: "What are your pricing plans?",
            answer: "We offer flexible pricing plans to suit different needs: Starter ($9/month), Professional ($29/month), and Enterprise (custom pricing). All plans include core features with varying limits and premium support options.",
            category: "Pricing"
        },
        {
            id: 4,
            question: "Is my data secure with your service?",
            answer: "Absolutely! We use enterprise-grade encryption, regular security audits, and comply with industry standards like SOC 2 and GDPR. Your data is stored in secure, geographically distributed data centers.",
            category: "Security"
        },
        {
            id: 5,
            question: "Do you offer customer support?",
            answer: "Yes! We provide 24/7 customer support through live chat, email, and phone. Our premium plans also include dedicated account managers and priority support queues.",
            category: "Support"
        },
        {
            id: 6,
            question: "Can I integrate with other tools?",
            answer: "Our platform offers extensive integration capabilities with over 100+ popular tools including Slack, Salesforce, Google Workspace, and more. We also provide REST APIs for custom integrations.",
            category: "Integrations"
        }
    ];

    const categories = ["All", ...new Set(qaData.map(item => item.category))];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredQuestions = qaData.filter(item => {
        const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const toggleQuestion = (id: QuestionItem['id']) => {
        setActiveQuestion(activeQuestion === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <section
                className="relative overflow-hidden animate-fadeIn"
                style={{ background: 'linear-gradient(135deg, #DF3C38 0%, #D32A25 100%)' }}
            >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8 backdrop-blur-sm">
                        <HelpCircle className="w-10 h-10 text-white" />
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Frequently Asked Questions
                    </h1>

                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
                        Find answers to common questions about our platform, features, and services
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search for answers..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-6 py-4 text-black text-lg border-0 rounded-2xl bg-white/95 backdrop-blur-sm shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                        />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 mb-12 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                                selectedCategory === category
                                    ? 'text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                            }`}
                            style={selectedCategory === category ?
                                { background: 'linear-gradient(135deg, #DF3C38 0%, #D32A25 100%)' } :
                                {}
                            }
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        { icon: MessageSquare, number: "500+", label: "Questions Answered" },
                        { icon: TimerIcon, number: "24/7", label: "Support Available/Support All Time" },
                        { icon: Lightbulb, number: "99%", label: "Problem Resolution" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl hover:scale-102 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div
                                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                                style={{ background: 'linear-gradient(135deg, #DF3C38 0%, #D32A25 100%)' }}
                            >
                                <stat.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Q&A Section */}
                <div className="space-y-6">
                    {filteredQuestions.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleQuestion(item.id)}
                                className="w-full p-8 text-left flex items-center justify-between group hover:bg-red-50/30 transition-colors duration-300"
                            >
                                <div className="flex items-start space-x-4 flex-1">
                                    <div
                                        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                                        style={{ background: 'linear-gradient(135deg, #DF3C38 0%, #D32A25 100%)' }}
                                    >
                                        <span className="text-white font-bold">Q</span>
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-sm font-medium text-gray-500 mb-2 block">
                                            {item.category}
                                        </span>
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#DF3C38] transition-colors">
                                            {item.question}
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 ml-4">
                                    <ChevronDown
                                        className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                                            activeQuestion === item.id ? 'rotate-180' : ''
                                        }`}
                                    />
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    activeQuestion === item.id
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-8 pb-8">
                                    <div className="flex items-start space-x-4">
                                        <div
                                            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                                            style={{ background: 'linear-gradient(135deg, #DF3C38 0%, #D32A25 100%)' }}
                                        >
                                            <span className="text-white font-bold">A</span>
                                        </div>
                                        <div className="flex-1 text-gray-700 leading-relaxed text-lg">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {filteredQuestions.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-gray-400 mb-4">
                                <Search className="w-16 h-16 mx-auto" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No results found</h3>
                            <p className="text-gray-500">Try adjusting your search terms or category filter</p>
                        </div>
                    )}
                </div>

                {/* Contact Section */}
                <div className="mt-20 text-center">
                    <div className="bg-white rounded-3xl p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Still have questions?</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Can't find what you're looking for? Our support team is here to help you 24/7.
                        </p>
                        <button
                            className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                            style={{ background: 'linear-gradient(135deg, #DF3C38 0%, #D32A25 100%)' }}
                        >
                            <MessageSquare className="w-5 h-5 mr-2" />
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QAPage;
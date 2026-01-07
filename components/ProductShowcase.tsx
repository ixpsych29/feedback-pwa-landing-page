'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Award, BarChart2 } from 'lucide-react';

export const ProductShowcase = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Builder', 'Generation', 'Intelligence'];

    return (
        <section
            id='showcase'
            className='py-32 bg-[#080808] border-t border-white/5'
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 items-center'>
                    <div className='lg:col-span-4'>
                        <h2 className='text-3xl font-light text-white mb-8'>
                            Seamless <br /> <span className='font-bold'>Workflow</span>
                        </h2>
                        <div className='space-y-2'>
                            {tabs.map((tab, idx) => (
                                <div
                                    key={tab}
                                    onClick={() => setActiveTab(idx)}
                                    className={`cursor-pointer p-6 border-l-2 transition-all duration-500 ${activeTab === idx
                                            ? 'border-[#F59E0B] bg-white/[0.02]'
                                            : 'border-white/10 hover:border-white/30'
                                        }`}
                                >
                                    <h3
                                        className={`text-lg font-medium mb-2 transition-colors ${activeTab === idx ? 'text-white' : 'text-gray-500'
                                            }`}
                                    >
                                        {tab}
                                    </h3>
                                    <p
                                        className={`text-sm leading-relaxed transition-all duration-500 ${activeTab === idx
                                                ? 'text-gray-400 max-h-20 opacity-100'
                                                : 'text-gray-600 max-h-0 opacity-0 overflow-hidden'
                                            }`}
                                    >
                                        {idx === 0 &&
                                            'Drag-and-drop simplicity meets enterprise power. Create complex logic flows without writing a single line of code.'}
                                        {idx === 1 &&
                                            'Deliver credentials that matter. Vector-based PDF generation ensures certificates look crisp on any screen.'}
                                        {idx === 2 &&
                                            'Turn qualitative feedback into quantitative data. Sentiment analysis happens automatically in the background.'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='lg:col-span-8'>
                        <div className='relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]'>
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className='absolute inset-0 bg-gradient-to-br from-[#111] to-[#050505] flex items-center justify-center'
                                >
                                    <div className='text-center'>
                                        <div className='w-20 h-20 mx-auto bg-gradient-to-tr from-[#003366] to-[#00ACC1] rounded-2xl blur-[40px] opacity-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
                                        <div className='relative z-10'>
                                            {activeTab === 0 ? (
                                                <FileText
                                                    size={64}
                                                    className='text-gray-200 mx-auto mb-6 opacity-80'
                                                    strokeWidth={1}
                                                />
                                            ) : activeTab === 1 ? (
                                                <Award
                                                    size={64}
                                                    className='text-gray-200 mx-auto mb-6 opacity-80'
                                                    strokeWidth={1}
                                                />
                                            ) : (
                                                <BarChart2
                                                    size={64}
                                                    className='text-gray-200 mx-auto mb-6 opacity-80'
                                                    strokeWidth={1}
                                                />
                                            )}
                                            <p className='text-gray-500 font-mono text-xs uppercase tracking-[0.3em]'>
                                                Module Preview
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* UI Decor */}
                            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#003366] via-[#00ACC1] to-[#003366] opacity-50'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

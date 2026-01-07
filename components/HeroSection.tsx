'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className='relative min-h-screen flex items-center justify-center pt-32 overflow-hidden bg-[#050505]'>
            {/* Premium Background Textures */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

            {/* Ambient Glows */}
            <motion.div
                style={{ y: y1 }}
                className='absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#003366]/30 rounded-full blur-[120px] pointer-events-none'
            />
            <motion.div
                style={{ y: y2 }}
                className='absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#00ACC1]/10 rounded-full blur-[100px] pointer-events-none'
            />
            <div className='absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-[#F59E0B]/5 rounded-full blur-[80px] pointer-events-none animate-pulse' />

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    {/* <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 'auto', opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className='inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/5 backdrop-blur-md overflow-hidden'
                    >
                        <Sparkles size={14} className='text-[#F59E0B]' />
                        <span className='text-[#F59E0B] text-xs font-bold tracking-[0.2em] uppercase'>
                            Premium Access Available
                        </span>
                    </motion.div> */}

                    <h1 className='text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]'>
                        Feedback Transformed <br />
                        <span className='relative whitespace-nowrap'>
                            <span className='relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40'>
                                Into Excellence
                            </span>
                            <span className='absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ACC1] to-transparent'></span>
                        </span>
                    </h1>

                    <p className='mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide'>
                        The enterprise-grade standard for workshop management. Automate
                        certificates and gather insights with{' '}
                        <span className='text-white font-medium'>
                            uncompromising elegance
                        </span>
                        .
                    </p>

                    <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
                        <button className='group relative px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]'>
                            <span className='relative z-10 flex items-center gap-2'>
                                Start Free Trial
                                <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
                            </span>
                        </button>
                        <button
                            onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                            className='px-8 py-4 rounded-full border border-white/10 text-white font-medium text-lg hover:bg-white/5 transition-all flex items-center gap-2'
                        >
                            View Showcase
                        </button>
                    </div>
                </motion.div>

                {/* Ultra-Premium Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotateX: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ delay: 0.4, duration: 1.2, ease: 'easeOut' }}
                    className='mt-24 relative mx-auto max-w-6xl z-20 perspective-1000'
                >
                    {/* Glass Pane Container */}
                    <div className='rounded-2xl border border-white/10 bg-[#0F1216]/60 backdrop-blur-2xl shadow-2xl overflow-hidden ring-1 ring-white/5'>
                        {/* Window Controls */}
                        <div className='h-12 bg-white/[0.03] border-b border-white/5 flex items-center px-6 justify-between'>
                            <div className='flex space-x-2'>
                                <div className='w-3 h-3 rounded-full bg-[#2a2a2a]' />
                                <div className='w-3 h-3 rounded-full bg-[#2a2a2a]' />
                                <div className='w-3 h-3 rounded-full bg-[#2a2a2a]' />
                            </div>
                            <div className='text-[10px] uppercase tracking-widest text-gray-600 font-bold'>
                                Analytics_View_01
                            </div>
                        </div>

                        <div className='p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 text-left'>
                            {/* Main Metric Card */}
                            <div className='md:col-span-8 space-y-8'>
                                <div className='relative h-[300px] rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-8 overflow-hidden'>
                                    <div className='flex justify-between items-start mb-8'>
                                        <div>
                                            <p className='text-gray-400 text-sm font-medium tracking-wide'>
                                                NET PROMOTER SCORE
                                            </p>
                                            <h3 className='text-5xl font-light text-white mt-2'>
                                                72<span className='text-2xl text-gray-500'>/100</span>
                                            </h3>
                                        </div>
                                        <div className='px-3 py-1 rounded-full bg-[#00ACC1]/10 border border-[#00ACC1]/20 text-[#00ACC1] text-xs font-bold'>
                                            +4.2%
                                        </div>
                                    </div>

                                    {/* Premium Chart Line */}
                                    <div className='absolute bottom-0 left-0 right-0 h-32 flex items-end px-8 pb-8 gap-2'>
                                        {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90, 85, 100].map(
                                            (h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: `${h}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 1.5,
                                                        delay: i * 0.05,
                                                        ease: 'circOut',
                                                    }}
                                                    className='flex-1 bg-white'
                                                    style={{ opacity: 0.1 + i * 0.05 }}
                                                />
                                            )
                                        )}
                                    </div>
                                </div>

                                <div className='grid grid-cols-2 gap-8'>
                                    {[
                                        {
                                            label: 'Total Certificates',
                                            val: '2,845',
                                            color: 'text-[#F59E0B]',
                                        },
                                        {
                                            label: 'Active Workshops',
                                            val: '14',
                                            color: 'text-[#00ACC1]',
                                        },
                                    ].map((stat, i) => (
                                        <div
                                            key={i}
                                            className='h-32 rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors'
                                        >
                                            <p className='text-gray-500 text-xs font-bold tracking-widest uppercase mb-4'>
                                                {stat.label}
                                            </p>
                                            <p className={`text-3xl font-light ${stat.color}`}>
                                                {stat.val}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sidebar List */}
                            <div className='md:col-span-4 rounded-xl border border-white/5 bg-white/[0.02] p-6'>
                                <p className='text-gray-500 text-xs font-bold tracking-widest uppercase mb-6'>
                                    Recent Activity
                                </p>
                                <div className='space-y-6'>
                                    {[1, 2, 3, 4].map((item) => (
                                        <div
                                            key={item}
                                            className='flex items-center gap-4 group cursor-pointer'
                                        >
                                            <div className='w-10 h-10 rounded-full bg-gradient-to-tr from-[#222] to-[#333] border border-white/10 flex items-center justify-center text-xs text-gray-400 group-hover:border-[#F59E0B]/50 transition-colors'>
                                                UD
                                            </div>
                                            <div>
                                                <div className='text-sm text-gray-300 font-medium group-hover:text-white transition-colors'>
                                                    UX Workshop
                                                </div>
                                                <div className='text-xs text-gray-600'>
                                                    2 minutes ago
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Reflection overlay */}
                    <div className='absolute inset-0 bg-gradient-to-tr from-white/[0.05] via-transparent to-transparent pointer-events-none rounded-2xl' />
                </motion.div>
            </div>
        </section>
    );
};

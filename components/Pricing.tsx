'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';

export const Pricing = () => {
    return (
        <section
            id='pricing'
            className='py-32 bg-[#050505] relative overflow-hidden'
        >
            {/* Background radial gradient */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none'></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='text-center mb-20'>
                    <h2 className='text-4xl font-light text-white mb-6'>Investment</h2>
                    <p className='text-gray-400 font-light text-lg'>
                        Transparent pricing for organizations of every scale.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center'>
                    {/* Free Tier */}
                    <div className='p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors'>
                        <h3 className='text-lg font-medium text-gray-300'>Starter</h3>
                        <div className='my-6'>
                            <span className='text-4xl font-bold text-white'>$0</span>
                        </div>
                        <ul className='space-y-4 mb-10'>
                            {['5 events/mo', 'Standard Templates', 'Email Support'].map(
                                (feat, i) => (
                                    <li
                                        key={i}
                                        className='flex items-center text-gray-500 text-sm'
                                    >
                                        <CheckCircle2 size={16} className='text-gray-700 mr-3' />{' '}
                                        {feat}
                                    </li>
                                )
                            )}
                        </ul>
                        <button className='w-full py-4 rounded-xl border border-white/10 text-white text-sm font-bold tracking-wide hover:bg-white/5 transition-colors'>
                            START FREE
                        </button>
                    </div>

                    {/* Pro Tier - The "Black Card" Look */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className='relative p-10 rounded-3xl border border-[#F59E0B]/30 bg-gradient-to-b from-[#0F1216] to-[#000] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] z-10 overflow-hidden group'
                    >
                        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-50'></div>
                        <div className='absolute top-0 right-0 p-4'>
                            <Star className='text-[#F59E0B] fill-[#F59E0B]' size={20} />
                        </div>

                        <h3 className='text-lg font-medium text-white'>Professional</h3>
                        <div className='my-6'>
                            <span className='text-5xl font-bold text-white tracking-tight'>
                                $49
                            </span>
                            <span className='text-gray-500 text-sm ml-2'>/ month</span>
                        </div>
                        <p className='text-sm text-[#F59E0B]/80 mb-8 font-medium'>
                            Unlocked potential.
                        </p>
                        <ul className='space-y-5 mb-10'>
                            {[
                                'Unlimited Events',
                                'Logic Jumping',
                                'Vector Certs',
                                'Deep Analytics',
                                'Priority Support',
                            ].map((feat, i) => (
                                <li
                                    key={i}
                                    className='flex items-center text-gray-300 text-sm font-light'
                                >
                                    <CheckCircle2 size={16} className='text-[#F59E0B] mr-3' />{' '}
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <button className='w-full py-4 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#b47d1f] text-black text-sm font-bold tracking-wide hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all'>
                            GET ACCESS
                        </button>
                    </motion.div>

                    {/* Enterprise Tier */}
                    <div className='p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors'>
                        <h3 className='text-lg font-medium text-gray-300'>Enterprise</h3>
                        <div className='my-6'>
                            <span className='text-4xl font-bold text-white'>Custom</span>
                        </div>
                        <ul className='space-y-4 mb-10'>
                            {[
                                'SSO & SLA',
                                'Dedicated Success Mgr',
                                'Custom Integration',
                                'Audit Logs',
                            ].map((feat, i) => (
                                <li key={i} className='flex items-center text-gray-500 text-sm'>
                                    <CheckCircle2 size={16} className='text-gray-700 mr-3' />{' '}
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <button className='w-full py-4 rounded-xl border border-white/10 text-white text-sm font-bold tracking-wide hover:bg-white/5 transition-colors'>
                            CONTACT US
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

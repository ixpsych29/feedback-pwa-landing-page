'use client';

import React from 'react';

export const CTA = () => {
    return (
        <section className='py-32 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-b from-[#050505] to-[#0a0a0a]' />
            <div className='absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-30'></div>
            <div className='max-w-4xl mx-auto px-4 text-center relative z-10'>
                <h2 className='text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter'>
                    Ready to <br />
                    Ascend?
                </h2>
                <p className='text-xl text-gray-400 mb-12 font-light'>
                    Join the elite organizations transforming their educational impact.
                </p>
                <button className='px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_50px_rgba(255,255,255,0.2)]'>
                    Begin Complimentary Trial
                </button>
            </div>
        </section>
    );
};

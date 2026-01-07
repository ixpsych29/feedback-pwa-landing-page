'use client';

import React from 'react';

export const LogosStrip = () => {
    return (
        <div className='w-full py-10 bg-[#050505] border-y border-white/5'>
            <div className='max-w-7xl mx-auto px-4 flex justify-between items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700'>
                {['MICROSOFT', 'GOOGLE', 'HARVARD', 'STANFORD', 'MIT'].map(
                    (logo, i) => (
                        <span
                            key={i}
                            className='text-lg font-bold text-white tracking-widest cursor-default hidden md:block'
                        >
                            {logo}
                        </span>
                    )
                )}
                {/* Mobile simplified view */}
                <span className='md:hidden text-xs text-center w-full tracking-widest text-gray-500'>
                    TRUSTED BY INDUSTRY LEADERS
                </span>
            </div>
        </div>
    );
};

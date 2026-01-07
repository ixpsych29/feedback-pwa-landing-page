'use client';

import React from 'react';

export const Footer = () => {
    return (
        <footer className='bg-[#020202] border-t border-white/5 pt-20 pb-10'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row justify-between items-start mb-16'>
                    <div className='mb-10 md:mb-0'>
                        <span className='text-2xl font-bold text-white tracking-tighter'>
                            SAPP
                        </span>
                        <p className='text-gray-500 mt-4 max-w-xs font-light'>
                            Setting the standard for educational event intelligence and
                            credentialing.
                        </p>
                    </div>
                    <div className='flex gap-16 flex-wrap'>
                        <div>
                            <h4 className='text-white font-bold mb-6 text-xs uppercase tracking-widest'>
                                Platform
                            </h4>
                            <ul className='space-y-3 text-sm text-gray-500 font-light'>
                                {['Features', 'Pricing', 'API', 'Status'].map((l) => (
                                    <li key={l}>
                                        <a
                                            href={`#${l.toLowerCase()}`}
                                            onClick={(e) => {
                                                const id = l.toLowerCase();
                                                const element = document.getElementById(id);
                                                if (element) {
                                                    e.preventDefault();
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }}
                                            className='hover:text-white transition-colors'
                                        >
                                            {l}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className='text-white font-bold mb-6 text-xs uppercase tracking-widest'>
                                Company
                            </h4>
                            <ul className='space-y-3 text-sm text-gray-500 font-light'>
                                {['About', 'Manifesto', 'Careers', 'Contact'].map((l) => (
                                    <li key={l}>
                                        <a href='#' className='hover:text-white transition-colors'>
                                            {l}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className='text-white font-bold mb-6 text-xs uppercase tracking-widest'>
                                Legal
                            </h4>
                            <ul className='space-y-3 text-sm text-gray-500 font-light'>
                                {['Privacy', 'Terms', 'Security'].map((l) => (
                                    <li key={l}>
                                        <a href='#' className='hover:text-white transition-colors'>
                                            {l}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center'>
                    <p className='text-gray-600 text-xs font-mono'>
                        © 2025 SAPP INC. ALL RIGHTS RESERVED.
                    </p>
                    <div className='flex space-x-6 mt-4 md:mt-0'>
                        {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                            <a
                                key={social}
                                href='#'
                                className='text-gray-600 hover:text-white transition-colors text-xs uppercase tracking-wider'
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

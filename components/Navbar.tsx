'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled
                ? 'bg-[#050505]/80 border-white/10 backdrop-blur-xl py-3'
                : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center'>
                    <div
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className='flex-shrink-0 flex items-center gap-3 cursor-pointer group'
                    >
                        <div className='relative w-10 h-10 flex items-center justify-center'>
                            <div className='absolute inset-0 bg-gradient-to-tr from-[#003366] to-[#00ACC1] rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-80 blur-[2px]'></div>
                            <div className='absolute inset-0 bg-[#0a0a0a] border border-white/20 rounded-xl flex items-center justify-center z-10'>
                                <span className='font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00ACC1]'>
                                    S
                                </span>
                            </div>
                        </div>
                        <span className='text-xl font-bold tracking-tight text-white group-hover:tracking-wide transition-all duration-500'>
                            SAPP
                        </span>
                    </div>
                    <div className='hidden md:flex space-x-10 items-center'>
                        {['Features', 'Showcase', 'Pricing', 'Testimonials'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                                className='text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide'
                            >
                                {item}
                            </a>
                        ))}
                        <button className='relative px-6 py-2.5 overflow-hidden rounded-full group bg-white/5 border border-white/10 hover:border-[#F59E0B]/50 transition-colors'>
                            <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-[#00ACC1]/20 to-[#003366]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></span>
                            <span className='relative text-sm font-medium text-white group-hover:text-[#F59E0B] transition-colors'>
                                Get Started
                            </span>
                        </button>
                    </div>
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-white p-2'
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className='md:hidden bg-[#050505] border-b border-white/10 overflow-hidden backdrop-blur-xl'
                    >
                        <div className='px-4 pt-4 pb-8 space-y-2'>
                            {['Features', 'Showcase', 'Pricing', 'Testimonials'].map(
                                (item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={(e) => {
                                            setIsOpen(false);
                                            scrollToSection(e, item.toLowerCase());
                                        }}
                                        className='block px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/5 rounded-lg hover:text-white transition-colors'
                                    >
                                        {item}
                                    </a>
                                )
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

'use client';

import React from 'react';
import {
    CalendarCheck,
    FileText,
    Award,
    Users,
    BarChart2,
    ShieldCheck
} from 'lucide-react';
import { CardSpotlight } from './CardSpotlight';

export const FeaturesGrid = () => {
    const features = [
        {
            icon: <CalendarCheck />,
            title: 'Event Precision',
            desc: 'Manage capacity with atomic precision.',
        },
        {
            icon: <FileText />,
            title: 'Logic Surveys',
            desc: 'Adaptive forms that respond to user input.',
        },
        {
            icon: <Award />,
            title: 'Smart Certs',
            desc: 'Vector-quality PDF generation engine.',
        },
        {
            icon: <Users />,
            title: 'Staff Control',
            desc: 'Granular permissioning for instructors.',
        },
        {
            icon: <BarChart2 />,
            title: 'Deep Analytics',
            desc: 'Cohort analysis and sentiment tracking.',
        },
        {
            icon: <ShieldCheck />,
            title: 'Enterprise Security',
            desc: 'SOC2 compliant infrastructure.',
        },
    ];

    return (
        <section
            id='features'
            className='py-32 relative bg-[#050505] overflow-hidden'
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-10'>
                    <div className='max-w-2xl'>
                        <h2 className='text-4xl font-light text-white mb-4'>
                            Engineered for{' '}
                            <span className='text-[#00ACC1] font-normal'>Impact</span>
                        </h2>
                        <p className='text-gray-400 text-lg font-light'>
                            A suite of tools designed not just to function, but to perform.
                        </p>
                    </div>
                    <div className='hidden md:block'>
                        <button className='text-white text-sm border-b border-[#F59E0B] pb-1 hover:opacity-80 transition-opacity'>
                            View Full Feature List
                        </button>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {features.map((f, i) => (
                        <CardSpotlight
                            key={i}
                            className='rounded-2xl p-8 hover:border-white/20 transition-colors'
                        >
                            <div className='w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-white group-hover:bg-[#00ACC1] group-hover:border-[#00ACC1] transition-all duration-500'>
                                {React.isValidElement(f.icon) && React.cloneElement(f.icon as React.ReactElement<{ size?: number; strokeWidth?: number }>, { size: 24, strokeWidth: 1.5 })}
                            </div>
                            <h3 className='text-xl font-medium text-white mb-4'>{f.title}</h3>
                            <p className='text-gray-500 font-light leading-relaxed group-hover:text-gray-300 transition-colors'>
                                {f.desc}
                            </p>
                        </CardSpotlight>
                    ))}
                </div>
            </div>
        </section>
    );
};

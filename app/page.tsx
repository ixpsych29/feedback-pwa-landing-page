import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';
import {
  CalendarCheck,
  FileText,
  Award,
  Users,
  BarChart2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Star,
  Sparkles,
} from 'lucide-react';

// --- Premium Utils ---
// A spotlight effect for cards to give that premium "hover light" feel
function CardSpotlight({ children, className = '' }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-white/10 bg-white/[0.02] overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100'
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 172, 193, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className='relative h-full'>{children}</div>
    </div>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-[#050505]/80 border-white/10 backdrop-blur-xl py-3'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          <div className='flex-shrink-0 flex items-center gap-3 cursor-pointer group'>
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
                    onClick={() => setIsOpen(false)}
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

const HeroSection = () => {
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
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#F59E0B]/20 bg-[#F59E0B]/5 backdrop-blur-md overflow-hidden'
          >
            <Sparkles size={14} className='text-[#F59E0B]' />
            <span className='text-[#F59E0B] text-xs font-bold tracking-[0.2em] uppercase'>
              Premium Access Available
            </span>
          </motion.div>

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
            <button className='px-8 py-4 rounded-full border border-white/10 text-white font-medium text-lg hover:bg-white/5 transition-all flex items-center gap-2'>
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

const FeaturesGrid = () => {
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
                {React.cloneElement(f.icon, { size: 24, strokeWidth: 1.5 })}
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

const ProductShowcase = () => {
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
                  className={`cursor-pointer p-6 border-l-2 transition-all duration-500 ${
                    activeTab === idx
                      ? 'border-[#F59E0B] bg-white/[0.02]'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <h3
                    className={`text-lg font-medium mb-2 transition-colors ${
                      activeTab === idx ? 'text-white' : 'text-gray-500'
                    }`}
                  >
                    {tab}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-all duration-500 ${
                      activeTab === idx
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

const Pricing = () => {
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

const Footer = () => {
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
                    <a href='#' className='hover:text-white transition-colors'>
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
            © 2024 SAPP INC. ALL RIGHTS RESERVED.
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

const App = () => {
  return (
    <div className='font-sans text-gray-200 antialiased bg-[#050505] selection:bg-[#F59E0B]/30 selection:text-[#F59E0B]'>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600&display=swap');
        
        :root {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        
        /* Custom Scrollbar for Chrome/Safari/Webkit */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #050505;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        
        .perspective-1000 {
           perspective: 1000px;
        }
      `}</style>

      <Navbar />
      <HeroSection />

      {/* Logos Strip - Monochromatic Premium */}
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

      <FeaturesGrid />
      <ProductShowcase />
      <Pricing />

      {/* Premium CTA */}
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

      <Footer />
    </div>
  );
};

export default App;

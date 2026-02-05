import { motion } from 'framer-motion';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
      style={{ backgroundColor: '#0c1018' }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: 'var(--page-padding-y)', paddingBottom: 'var(--page-padding-y)', maxWidth: '1100px' }}>
        <motion.h1
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{ color: '#f1f5f9', marginBottom: 'var(--space-8)', fontSize: '2.5rem', lineHeight: '1.2', letterSpacing: '0.015em', fontWeight: '600' }}
        >
          Experience
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1"
          style={{ gap: 'var(--space-6)' }}
        >
          {/* IIT Bhubaneswar Internship */}
          <motion.div
            variants={itemVariants}
            className="rounded-xl backdrop-blur-md transition-all duration-300 flex flex-col"
            style={{
              background: 'linear-gradient(135deg, rgba(21, 29, 40, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              minHeight: 'fit-content',
              padding: 'var(--card-padding)',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12)';
            }}
          >
            {/* Header Section with Role and Certificate */}
            <div className="flex items-start justify-between" style={{ marginBottom: 'var(--space-4)', gap: 'var(--space-4)' }}>
              <div className="flex-1">
                <h2 className="text-lg" style={{ color: '#f1f5f9', fontWeight: '600', letterSpacing: '0.005em' }}>Research Intern</h2>
              </div>
              <a
                href="https://drive.google.com/file/d/1joadeLi-tVXpoTjeRHSkZkLolU0QCwmE/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-xs rounded-lg font-medium transition-all flex items-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', color: '#94a3b8', border: '1px solid rgba(255, 255, 255, 0.1)', textDecoration: 'none', gap: '0.375rem' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#cbd5e1';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.color = '#94a3b8';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
                Certificate
              </a>
            </div>

            {/* Metadata Section */}
            <div className="rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)', padding: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>
              <div className="flex flex-col" style={{ gap: 'var(--space-2)' }}>
                <div className="flex items-center" style={{ gap: 'var(--space-2)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9,22 9,12 15,12 15,22"/>
                  </svg>
                  <p className="text-sm" style={{ color: '#e2e8f0', fontWeight: '500' }}>IIT Bhubaneswar</p>
                </div>
                <div className="flex items-center" style={{ gap: 'var(--space-2)', paddingLeft: 'calc(14px + var(--space-2))' }}>
                  <p className="text-xs" style={{ color: '#94a3b8', fontWeight: '400' }}>School of Electrical and Computer Sciences</p>
                </div>
                <div className="h-px" style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', margin: 'var(--space-1) 0' }} />
                <div className="flex items-center" style={{ gap: 'var(--space-2)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <p className="text-xs" style={{ color: '#94a3b8', fontWeight: '400' }}>Aug 2025 – Oct 2025</p>
                  <span style={{ color: 'rgba(148, 163, 184, 0.4)' }}>•</span>
                  <p className="text-xs" style={{ color: '#94a3b8', fontWeight: '400' }}>REMOTE</p>
                </div>
              </div>
            </div>

            {/* Contributions Section */}
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <h3 className="text-xs uppercase" style={{ color: '#7dd3fc', fontWeight: '600', letterSpacing: '0.08em', marginBottom: 'var(--space-3)' }}>Key Contributions</h3>
              <ul className="space-y-3 text-sm" style={{ color: '#cbd5e1', lineHeight: '1.8', fontWeight: '300', paddingLeft: '1.25rem' }}>
                <li className="relative" style={{ paddingLeft: '0.75rem' }}>
                  <span className="absolute" style={{ left: '-0.25rem', top: '0.5em', width: '0.375rem', height: '0.375rem', backgroundColor: '#3b82f6', borderRadius: '50%' }}></span>
                  Designed and implemented a weak-attention preserving activation mechanism for Transformer-based vision tasks.
                </li>
                <li className="relative" style={{ paddingLeft: '0.75rem' }}>
                  <span className="absolute" style={{ left: '-0.25rem', top: '0.5em', width: '0.375rem', height: '0.375rem', backgroundColor: '#3b82f6', borderRadius: '50%' }}></span>
                  Achieved state-of-the-art image restoration performance with a peak PSNR of 25.46 and an SSIM of 0.841.
                </li>
                <li className="relative" style={{ paddingLeft: '0.75rem' }}>
                  <span className="absolute" style={{ left: '-0.25rem', top: '0.5em', width: '0.375rem', height: '0.375rem', backgroundColor: '#3b82f6', borderRadius: '50%' }}></span>
                  Co-authored a research paper submitted at a reputed venue.
                </li>
                <li className="relative" style={{ paddingLeft: '0.75rem' }}>
                  <span className="absolute" style={{ left: '-0.25rem', top: '0.5em', width: '0.375rem', height: '0.375rem', backgroundColor: '#3b82f6', borderRadius: '50%' }}></span>
                  Conducted extensive experiments to evaluate architectural and loss-function variations.
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xs uppercase" style={{ color: '#7dd3fc', fontWeight: '600', letterSpacing: '0.08em', marginBottom: 'var(--space-3)' }}>Technologies</h3>
              <div className="flex flex-wrap" style={{ gap: 'var(--tag-gap)' }}>
                <span className="px-3 py-1.5 text-xs rounded-lg font-semibold" style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#93c5fd', border: '1px solid rgba(59, 130, 246, 0.3)', letterSpacing: '0.01em' }}>Vision Transformers</span>
                <span className="px-3 py-1.5 text-xs rounded-lg font-semibold" style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#93c5fd', border: '1px solid rgba(59, 130, 246, 0.3)', letterSpacing: '0.01em' }}>Deep Learning</span>
                <span className="px-3 py-1.5 text-xs rounded-lg font-semibold" style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#93c5fd', border: '1px solid rgba(59, 130, 246, 0.3)', letterSpacing: '0.01em' }}>Image Restoration</span>
              </div>
            </div>
          </motion.div>

          {/* IIT Jodhpur Internship */}
          <motion.div
            variants={itemVariants}
            className="rounded-xl backdrop-blur-md transition-all duration-300 flex flex-col"
            style={{
              background: 'linear-gradient(135deg, rgba(21, 29, 40, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              minHeight: 'fit-content',
              padding: 'var(--card-padding)',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12)';
            }}
          >
            {/* Header Section with Role and Certificate */}
            <div className="flex items-start justify-between" style={{ marginBottom: 'var(--space-4)', gap: 'var(--space-4)' }}>
              <div className="flex-1">
                <h2 className="text-lg" style={{ color: '#f1f5f9', fontWeight: '600', letterSpacing: '0.005em' }}>Summer Intern</h2>
              </div>
              <a
                href="https://drive.google.com/file/d/1ktksBAkSEqKrFvnP_MZCuhyVN65peWEV/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-xs rounded-lg font-medium transition-all flex items-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', color: '#94a3b8', border: '1px solid rgba(255, 255, 255, 0.1)', textDecoration: 'none', gap: '0.375rem' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#cbd5e1';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.color = '#94a3b8';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
                Certificate
              </a>
            </div>

            {/* Metadata Section */}
            <div className="rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)', padding: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>
              <div className="flex flex-col" style={{ gap: 'var(--space-2)' }}>
                <div className="flex items-center" style={{ gap: 'var(--space-2)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9,22 9,12 15,12 15,22"/>
                  </svg>
                  <p className="text-sm" style={{ color: '#e2e8f0', fontWeight: '500' }}>IIT Jodhpur</p>
                </div>
                <div className="flex items-center" style={{ gap: 'var(--space-2)', paddingLeft: 'calc(14px + var(--space-2))' }}>
                  <p className="text-xs" style={{ color: '#94a3b8', fontWeight: '400' }}>School of Artificial Intelligence and Data Science (SAIDE)</p>
                </div>
                <div className="h-px" style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', margin: 'var(--space-1) 0' }} />
                <div className="flex items-center" style={{ gap: 'var(--space-2)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <p className="text-xs" style={{ color: '#94a3b8', fontWeight: '400' }}>June 2025 – July 2025</p>
                  <span style={{ color: 'rgba(148, 163, 184, 0.4)' }}>•</span>
                  <p className="text-xs" style={{ color: '#94a3b8', fontWeight: '400' }}>ONSITE</p>
                </div>
              </div>
            </div>

            {/* Contributions Section */}
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <h3 className="text-xs uppercase" style={{ color: '#7dd3fc', fontWeight: '600', letterSpacing: '0.08em', marginBottom: 'var(--space-3)' }}>Key Contributions</h3>
              <ul className="space-y-3 text-sm" style={{ color: '#cbd5e1', lineHeight: '1.8', fontWeight: '300', paddingLeft: '1.25rem' }}>
                <li className="relative" style={{ paddingLeft: '0.75rem' }}>
                  <span className="absolute" style={{ left: '-0.25rem', top: '0.5em', width: '0.375rem', height: '0.375rem', backgroundColor: '#3b82f6', borderRadius: '50%' }}></span>
                  Developed and evaluated Vision Transformer-based models for single-image de-raining and restoration.
                </li>
                <li className="relative" style={{ paddingLeft: '0.75rem' }}>
                  <span className="absolute" style={{ left: '-0.25rem', top: '0.5em', width: '0.375rem', height: '0.375rem', backgroundColor: '#3b82f6', borderRadius: '50%' }}></span>
                  Executed 20+ controlled experiments across multiple transformer backbones and loss configurations.
                </li>
                <li className="relative" style={{ paddingLeft: '0.75rem' }}>
                  <span className="absolute" style={{ left: '-0.25rem', top: '0.5em', width: '0.375rem', height: '0.375rem', backgroundColor: '#3b82f6', borderRadius: '50%' }}></span>
                  Gained hands-on experience in training, evaluation, and benchmarking of deep learning models.
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xs uppercase" style={{ color: '#7dd3fc', fontWeight: '600', letterSpacing: '0.08em', marginBottom: 'var(--space-3)' }}>Technologies</h3>
              <div className="flex flex-wrap" style={{ gap: 'var(--tag-gap)' }}>
                <span className="px-3 py-1.5 text-xs rounded-lg font-semibold" style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#93c5fd', border: '1px solid rgba(59, 130, 246, 0.3)', letterSpacing: '0.01em' }}>Computer Vision</span>
                <span className="px-3 py-1.5 text-xs rounded-lg font-semibold" style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#93c5fd', border: '1px solid rgba(59, 130, 246, 0.3)', letterSpacing: '0.01em' }}>PyTorch</span>
                <span className="px-3 py-1.5 text-xs rounded-lg font-semibold" style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#93c5fd', border: '1px solid rgba(59, 130, 246, 0.3)', letterSpacing: '0.01em' }}>Research</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;

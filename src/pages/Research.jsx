import { motion } from 'framer-motion';

const Research = () => {
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
          Research
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1"
          style={{ gap: 'var(--space-6)' }}
        >
          {/* CVPR Publication */}
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
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12)';
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between" style={{ marginBottom: 'var(--space-4)', gap: 'var(--space-4)' }}>
              <div className="flex items-center" style={{ gap: 'var(--space-2)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" style={{ stroke: '#7dd3fc' }}/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" style={{ stroke: '#7dd3fc' }}/>
                </svg>
                <h2 className="text-sm uppercase" style={{ color: '#7dd3fc', fontWeight: '600', letterSpacing: '0.08em' }}>CVPR 2025 Workshop</h2>
              </div>
              <div className="flex items-center" style={{ gap: '0.375rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" style={{ fill: '#10b981' }}/>
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <a
                  href="https://openaccess.thecvf.com/content/CVPR2025W/NTIRE/html/Li_NTIRE_2025_Challenge_on_Day_and_Night_Raindrop_Removal_for_CVPRW_2025_paper.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs rounded-md font-semibold transition-all"
                  style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.35)', textDecoration: 'none', letterSpacing: '0.02em' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.2)';
                    e.currentTarget.style.color = '#6ee7b7';
                    e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.45)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.15)';
                    e.currentTarget.style.color = '#34d399';
                    e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.35)';
                  }}
                >
                  PUBLISHED
                </a>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-base" style={{ color: '#f8fafc', fontWeight: '600', lineHeight: '1.4', marginBottom: 'var(--space-3)', letterSpacing: '0.005em' }}>
              NTIRE 2025 Challenge on Day and Night Raindrop Removal for Dual-Focused Images: Methods and Results
            </h3>

            {/* Venue */}
            <p className="text-xs" style={{ color: '#94a3b8', lineHeight: '1.6', fontWeight: '400', marginBottom: 'var(--space-4)' }}>
              IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2025)
            </p>

            {/* Achievement Callout */}
            <div className="rounded-lg" style={{ 
              backgroundColor: 'rgba(125, 211, 252, 0.05)', 
              border: '1px solid rgba(125, 211, 252, 0.2)',
              padding: 'var(--space-4)',
              borderLeft: '3px solid #7dd3fc'
            }}>
              <div className="flex items-start" style={{ gap: 'var(--space-3)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" style={{ stroke: '#7dd3fc', fill: 'rgba(125, 211, 252, 0.1)' }}/>
                </svg>
                <div>
                  <p className="text-xs uppercase" style={{ color: '#7dd3fc', fontWeight: '600', letterSpacing: '0.08em', marginBottom: 'var(--space-2)' }}>Achievement</p>
                  <p className="text-sm" style={{ color: '#e2e8f0', lineHeight: '1.6', fontWeight: '400' }}>
                    Selected as <span style={{ fontWeight: '600', color: '#f8fafc' }}>Top 32 team</span> out of <span style={{ fontWeight: '600', color: '#f8fafc' }}>361+ participants</span>. Achieved state-of-the-art results on the Raindrop Clarity dataset.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* VSIP Recognition */}
          <motion.div
            variants={itemVariants}
            className="rounded-xl backdrop-blur-md transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(21, 29, 40, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
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
            {/* Header */}
            <div className="flex items-start justify-between" style={{ marginBottom: 'var(--space-4)', gap: 'var(--space-4)' }}>
              <h2 className="leading-tight flex-1" style={{ color: '#f8fafc', fontSize: '1.25rem', letterSpacing: '0.005em', fontWeight: '600', lineHeight: '1.3' }}>VSIP Team Recognition</h2>
              <a
                href="https://drive.google.com/file/d/1t5l-jrJvaBEO1-B9tc28fzZg9tLuAzLv/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-1.5 text-xs rounded-md font-semibold transition-all flex-shrink-0"
                style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#7dd3fc', textDecoration: 'none', border: '1px solid rgba(59, 130, 246, 0.3)', gap: '0.375rem', letterSpacing: '0.02em' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
                  e.currentTarget.style.color = '#93c5fd';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.15)';
                  e.currentTarget.style.color = '#7dd3fc';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
                CERTIFICATE
              </a>
            </div>

            {/* Description */}
            <p className="text-sm" style={{ color: '#cbd5e1', lineHeight: '1.7', fontWeight: '400', maxWidth: '42rem' }}>
              Formally recognized as a valued member for innovative contribution to the project <span style={{ fontWeight: '600', color: '#e2e8f0' }}>“Designing of the Generalizable Vision Transformers”</span> with officially commended technical acumen.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Research;

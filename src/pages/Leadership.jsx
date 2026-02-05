import { motion } from 'framer-motion';

const Leadership = () => {
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
          Leadership
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1"
          style={{ gap: 'var(--space-6)' }}
        >
          {/* Single Unified Card */}
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
            {/* Role Section */}
            <div style={{ marginBottom: 'var(--space-5)', paddingBottom: 'var(--space-5)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div className="flex items-start justify-between" style={{ marginBottom: 'var(--space-3)', gap: 'var(--space-4)' }}>
                <h2 className="leading-tight" style={{ color: '#f8fafc', fontSize: '1.5rem', letterSpacing: '0.005em', fontWeight: '600', lineHeight: '1.3' }}>VSIP Coordinator</h2>
                <div className="flex items-center px-3 py-1.5 rounded-md flex-shrink-0" style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.35)', gap: '0.5rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#34d399', boxShadow: '0 0 6px rgba(52, 211, 153, 0.5)' }}></div>
                  <span className="text-xs font-semibold uppercase" style={{ color: '#34d399', letterSpacing: '0.05em' }}>Active</span>
                </div>
              </div>

              <p className="text-sm" style={{ color: '#cbd5e1', lineHeight: '1.7', fontWeight: '400', maxWidth: '42rem' }}>
                Coordinated project activities and contributed to the VSIP (Visual and Signal Information Processing) group, focusing on Vision Transformer-based research and computer vision systems.
              </p>
            </div>

            {/* Recognition Section */}
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <h3 className="text-xs uppercase" style={{ color: '#7dd3fc', fontWeight: '600', letterSpacing: '0.08em', marginBottom: 'var(--space-3)' }}>Recognition</h3>
              <div className="rounded-lg" style={{ backgroundColor: 'rgba(125, 211, 252, 0.04)', border: '1px solid rgba(125, 211, 252, 0.15)', padding: 'var(--space-4)', borderLeft: '3px solid #7dd3fc' }}>
                <p className="text-sm" style={{ color: '#e2e8f0', lineHeight: '1.6', fontWeight: '400' }}>
                  Formally recognized for <span style={{ fontWeight: '600', color: '#f8fafc' }}>innovative technical contributions</span> and <span style={{ fontWeight: '600', color: '#f8fafc' }}>effective project coordination</span> in advancing Vision Transformer research.
                </p>
              </div>
            </div>

            {/* Areas of Focus */}
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <h3 className="text-xs uppercase" style={{ color: '#7dd3fc', fontWeight: '600', letterSpacing: '0.08em', marginBottom: 'var(--space-3)' }}>Areas of Focus</h3>
              <div className="flex flex-wrap" style={{ gap: 'calc(var(--tag-gap) + 2px)' }}>
                <span className="px-3 py-1.5 text-xs rounded-lg font-semibold" style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#93c5fd', border: '1px solid rgba(59, 130, 246, 0.3)', letterSpacing: '0.01em' }}>Project Coordination</span>
                <span className="px-3 py-1.5 text-xs rounded-lg font-semibold" style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#93c5fd', border: '1px solid rgba(59, 130, 246, 0.3)', letterSpacing: '0.01em' }}>Vision Transformers</span>
                <span className="px-3 py-1.5 text-xs rounded-lg font-semibold" style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#93c5fd', border: '1px solid rgba(59, 130, 246, 0.3)', letterSpacing: '0.01em' }}>Research</span>
              </div>
            </div>

            {/* Impact Section */}
            <div style={{ marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-6)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <h3 className="text-xs uppercase" style={{ color: '#7dd3fc', fontWeight: '600', letterSpacing: '0.08em', marginBottom: 'var(--space-4)' }}>Leadership Impact</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div className="flex items-start" style={{ gap: 'var(--space-3)' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#7dd3fc', marginTop: '0.5rem', flexShrink: 0 }}></div>
                  <p className="text-sm" style={{ color: '#e2e8f0', lineHeight: '1.7', fontWeight: '400', flex: 1 }}>
                    <span style={{ fontWeight: '600', color: '#f8fafc' }}>Bridged academic research with practical implementation</span> through coordination, mentorship, and technical collaboration.
                  </p>
                </div>
                <div className="flex items-start" style={{ gap: 'var(--space-3)' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#7dd3fc', marginTop: '0.5rem', flexShrink: 0 }}></div>
                  <p className="text-sm" style={{ color: '#e2e8f0', lineHeight: '1.7', fontWeight: '400', flex: 1 }}>
                    <span style={{ fontWeight: '600', color: '#f8fafc' }}>Advanced Vision Transformer-based research</span> while supporting peer learning and project execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications & Recognition */}
            <div>
              <h3 className="text-xs uppercase" style={{ color: '#7dd3fc', fontWeight: '600', letterSpacing: '0.08em', marginBottom: 'var(--space-4)' }}>Certifications & Recognition</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                
              {/* VSIP Technical Contribution Certificate */}
              <a
                href="https://drive.google.com/file/d/1LNjAH7_9yTXGi2NOHNJNgjT6W0KMN-qu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                style={{ textDecoration: 'none' }}
              >
                <div 
                  className="cert-card flex items-start justify-between transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '0.5rem',
                    padding: 'var(--space-4)',
                    gap: 'var(--space-3)'
                  }}
                >
                  <div className="flex items-start" style={{ gap: 'var(--space-3)', flex: 1 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" style={{ stroke: '#7dd3fc' }}/>
                      <polyline points="14,2 14,8 20,8" style={{ stroke: '#7dd3fc' }}/>
                      <line x1="16" y1="13" x2="8" y2="13" style={{ stroke: '#7dd3fc' }}/>
                      <line x1="16" y1="17" x2="8" y2="17" style={{ stroke: '#7dd3fc' }}/>
                      <polyline points="10,9 9,9 8,9" style={{ stroke: '#7dd3fc' }}/>
                    </svg>
                    <div className="flex-1">
                      <h4 className="text-sm" style={{ color: '#f8fafc', fontWeight: '600', lineHeight: '1.4', marginBottom: '0.25rem' }}>
                        Academic Event Coordination
                      </h4>
                      <p className="text-xs" style={{ color: '#94a3b8', lineHeight: '1.5', fontWeight: '400' }}>
                        Visual and Signal Information Processing (VSIP) Group · 2025
                      </p>
                    </div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-200 group-hover:translate-x-1" style={{ color: '#7dd3fc', flexShrink: 0, opacity: 0.5 }}>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </a>

              {/* VSIP Coordinator Appointment Letter */}
              <a
                href="https://drive.google.com/file/d/1t5l-jrJvaBEO1-B9tc28fzZg9tLuAzLv/view"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                style={{ textDecoration: 'none' }}
              >
                <div 
                  className="cert-card flex items-start justify-between transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '0.5rem',
                    padding: 'var(--space-4)',
                    gap: 'var(--space-3)'
                  }}
                >
                  <div className="flex items-start" style={{ gap: 'var(--space-3)', flex: 1 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" style={{ stroke: '#7dd3fc' }}/>
                      <polyline points="14,2 14,8 20,8" style={{ stroke: '#7dd3fc' }}/>
                      <line x1="16" y1="13" x2="8" y2="13" style={{ stroke: '#7dd3fc' }}/>
                      <line x1="16" y1="17" x2="8" y2="17" style={{ stroke: '#7dd3fc' }}/>
                      <polyline points="10,9 9,9 8,9" style={{ stroke: '#7dd3fc' }}/>
                    </svg>
                    <div className="flex-1">
                      <h4 className="text-sm" style={{ color: '#f8fafc', fontWeight: '600', lineHeight: '1.4', marginBottom: '0.25rem' }}>
                        VSIP Certificate of Appreciation
                      </h4>
                      <p className="text-xs" style={{ color: '#94a3b8', lineHeight: '1.5', fontWeight: '400' }}>
                        VSIP Program Committee · 2025
                      </p>
                    </div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-200 group-hover:translate-x-1" style={{ color: '#7dd3fc', flexShrink: 0, opacity: 0.5 }}>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Leadership;

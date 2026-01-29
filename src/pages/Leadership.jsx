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
    <>
      <style>{`
        .cert-card:hover {
          border-color: rgba(148, 163, 184, 0.3) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen"
        style={{ backgroundColor: '#0c1018' }}
      >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-lg font-bold tracking-tight" style={{ color: '#f1f5f9' }}>
              Leadership
            </h1>
            <div style={{ height: '0.5rem', width: '2.5rem', backgroundColor: '#3b82f6' }}></div>
          </div>
          <p className="text-xs" style={{ color: '#94a3b8' }}>Coordination and team contributions</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Single Unified Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg p-4"
            style={{
              backgroundColor: '#151d28',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.25)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
          >
            {/* VSIP Coordinator Header with Active Badge */}
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-base font-bold" style={{ color: '#f1f5f9' }}>VSIP Coordinator</h2>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                <span className="text-xs font-semibold" style={{ color: '#10b981' }}>Active</span>
              </div>
            </div>

            <p className="mb-4 text-xs" style={{ color: '#cbd5e1', lineHeight: '1.5' }}>
              Coordinated project activities and contributed to the VSIP (Visual and Signal Information Processing) group, focusing on Vision Transformer-based research and computer vision systems.
            </p>

            <div className="rounded p-2.5 mb-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
              <p className="text-xs font-semibold mb-1" style={{ color: '#f1f5f9' }}>Recognition:</p>
              <p className="text-xs" style={{ color: '#94a3b8', lineHeight: '1.4' }}>
                Formally recognized for innovative technical contributions and effective project coordination.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-6">
              <span className="px-2 py-0.5 text-xs rounded font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.12)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.25)' }}>Project Coordination</span>
              <span className="px-2 py-0.5 text-xs rounded font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.12)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.25)' }}>Vision Transformers</span>
              <span className="px-2 py-0.5 text-xs rounded font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.12)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.25)' }}>Research</span>
            </div>

            {/* Divider */}
            <div className="my-5" style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}></div>

            {/* Impact Section */}
            <div className="mb-6">
              <h3 className="text-sm font-bold mb-2" style={{ color: '#f1f5f9' }}>Impact</h3>
              <div className="space-y-1.5 text-xs" style={{ color: '#cbd5e1', lineHeight: '1.5' }}>
                <p>
                  Focused on bridging academic research with practical implementation through coordination, mentorship, and technical collaboration.
                </p>
                <p>
                  Contributed to advancing Vision Transformer–based research while supporting peer learning and project execution.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-5" style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}></div>

            {/* Certifications & Recognition */}
            <div>
              <h3 className="text-sm font-bold mb-3" style={{ color: '#f1f5f9' }}>Certifications & Recognition</h3>
              <div className="space-y-3">
                
              {/* VSIP Technical Contribution Certificate */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                style={{ textDecoration: 'none' }}
              >
                <div 
                  className="cert-card flex items-start justify-between gap-3 p-3 rounded transition-all duration-200"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold mb-1" style={{ color: '#f1f5f9' }}>
                      VSIP Technical Contribution Certificate
                    </h3>
                    <p className="text-xs" style={{ color: '#94a3b8', lineHeight: '1.4' }}>
                      Vision Science and Image Processing (VSIP) Group · 2024
                    </p>
                  </div>
                  <div className="flex-shrink-0 transition-all duration-200 group-hover:opacity-100" style={{ opacity: 0.4 }}>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" style={{ color: '#3b82f6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* VSIP Coordinator Appointment Letter */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                style={{ textDecoration: 'none' }}
              >
                <div 
                  className="cert-card flex items-start justify-between gap-3 p-3 rounded transition-all duration-200"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold mb-1" style={{ color: '#f1f5f9' }}>
                      VSIP Coordinator Appointment Letter
                    </h3>
                    <p className="text-xs" style={{ color: '#94a3b8', lineHeight: '1.4' }}>
                      VSIP Program Committee · 2024
                    </p>
                  </div>
                  <div className="flex-shrink-0 transition-all duration-200 group-hover:opacity-100" style={{ opacity: 0.4 }}>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" style={{ color: '#3b82f6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
};

export default Leadership;

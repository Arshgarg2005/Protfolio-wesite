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
        style={{ backgroundColor: '#0f172a' }}
      >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold mb-4"
          style={{ color: '#f1f5f9' }}
        >
          Leadership
        </motion.h1>

        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm"
          style={{
            backgroundColor: 'rgba(30, 41, 59, 0.6)',
            border: '1px solid rgba(148, 163, 184, 0.3)',
          }}
        >
          <span className="text-sm font-semibold" style={{ color: '#10b981' }}>Active</span>
          <span style={{ color: '#64748b' }}>·</span>
          <span className="text-sm font-medium" style={{ color: '#cbd5e1' }}>Technical Leadership</span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >

          {/* Complete Leadership Section */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-8 backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* VSIP Coordinator */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold" style={{ color: '#f1f5f9' }}>VSIP Coordinator</h2>
                <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Active</span>
              </div>
              <p className="mb-4" style={{ color: '#94a3b8' }}>
                Coordinated project activities and contributed to the VSIP (Visual and Signal Information Processing) group, focusing on Vision Transformer-based research and computer vision systems.
              </p>
              <div className="rounded-lg p-4 mb-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <p className="text-sm mb-2" style={{ color: '#94a3b8' }}>
                  <span className="font-semibold" style={{ color: '#f1f5f9' }}>Recognition:</span>
                </p>
                <p className="text-sm" style={{ color: '#94a3b8' }}>
                  Formally recognized for innovative technical contributions and effective project coordination.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Project Coordination</span>
                <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Vision Transformers</span>
                <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Research</span>
              </div>
            </div>

            {/* Divider */}
            <div className="mb-8" style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>

            {/* Impact Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#f1f5f9' }}>Impact</h2>
              <div className="space-y-3" style={{ color: '#94a3b8' }}>
                <p>
                  Focused on bridging academic research with practical implementation through coordination, mentorship, and technical collaboration.
                </p>
                <p>
                  Contributed to advancing Vision Transformer–based research while supporting peer learning and project execution.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="mb-8" style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>

            {/* Certifications & Recognition */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#f1f5f9' }}>Certifications & Recognition</h2>
              <div className="space-y-6">
                
                {/* VSIP Technical Contribution Certificate */}
                <a
                  href="#"
                  // href="YOUR_CERTIFICATE_URL_HERE"  // ← Replace this
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  style={{ textDecoration: 'none' }}
                >
                  <div 
                    className="cert-card flex items-start justify-between gap-4 p-4 rounded-lg transition-all duration-300 group-hover:-translate-y-1"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 transition-colors" style={{ color: '#f1f5f9' }}>
                        VSIP Technical Contribution Certificate
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                        Issued by Vision Science and Image Processing (VSIP) Group · 2024
                      </p>
                    </div>
                    <div className="flex-shrink-0 p-2 rounded-lg transition-all duration-300 group-hover:opacity-100" style={{ opacity: 0.5 }}>
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" style={{ color: '#94a3b8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </a>

                {/* VSIP Coordinator Appointment Letter */}
                <a
                  href="#"
                  // href="YOUR_CERTIFICATE_URL_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  style={{ textDecoration: 'none' }}
                >
                  <div 
                    className="cert-card flex items-start justify-between gap-4 p-4 rounded-lg transition-all duration-300 group-hover:-translate-y-1"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 transition-colors" style={{ color: '#f1f5f9' }}>
                        VSIP Coordinator Appointment Letter
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                        Issued by VSIP Program Committee · 2024
                      </p>
                    </div>
                    <div className="flex-shrink-0 p-2 rounded-lg transition-all duration-300 group-hover:opacity-100" style={{ opacity: 0.5 }}>
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" style={{ color: '#94a3b8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

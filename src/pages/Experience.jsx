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
            <div className="flex items-start justify-between mb-4 gap-4">
              <div className="flex-1">
                <h2 className="text-base" style={{ color: '#f1f5f9', fontWeight: '600', marginBottom: 'var(--tag-gap)' }}>Research Intern</h2>
                <p className="text-sm" style={{ color: '#cbd5e1', marginBottom: 'var(--space-1)' }}>IIT Bhubaneswar</p>
                <p className="text-xs" style={{ color: '#94a3b8' }}>School of Electrical and Computer Sciences</p>
                <p className="text-sm" style={{ color: '#64748b', marginTop: 'var(--tag-gap)' }}>Aug 2025 – Oct 2025 • REMOTE</p>
              </div>
              <a
                href="https://drive.google.com/file/d/1joadeLi-tVXpoTjeRHSkZkLolU0QCwmE/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-xs rounded-lg font-medium transition-all"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', color: '#94a3b8', border: '1px solid rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}
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
                Certificate
              </a>
            </div>
            <div className="space-y-2 text-xs" style={{ color: '#cbd5e1', lineHeight: '1.7', fontWeight: '300', marginTop: 'var(--space-3)' }}>
              <p>• Designed and implemented a weak-attention preserving activation mechanism for Transformer-based vision tasks.</p>
              <p>• Achieved state-of-the-art image restoration performance with a peak PSNR of 25.46 and an SSIM of 0.841.</p>
              <p>• Co-authored a research paper submitted at a reputed venue.</p>
              <p>• Conducted extensive experiments to evaluate architectural and loss-function variations.</p>
            </div>
            <div className="flex flex-wrap" style={{ gap: 'var(--tag-gap)', marginTop: 'var(--space-4)' }}>
              <span className="px-3 py-1.5 text-xs rounded-lg font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.12)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.25)' }}>Vision Transformers</span>
              <span className="px-3 py-1.5 text-xs rounded-lg font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.12)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.25)' }}>Deep Learning</span>
              <span className="px-3 py-1.5 text-xs rounded-lg font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.12)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.25)' }}>Image Restoration</span>
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
            <div className="flex items-start justify-between mb-4 gap-4">
              <div className="flex-1">
                <h2 className="text-base" style={{ color: '#f1f5f9', fontWeight: '600', marginBottom: 'var(--tag-gap)' }}>Summer Intern</h2>
                <p className="text-sm" style={{ color: '#cbd5e1', marginBottom: 'var(--space-1)' }}>IIT Jodhpur</p>
                <p className="text-xs" style={{ color: '#94a3b8' }}>School of Artificial Intelligence and Data Science (SAIDE)</p>
                <p className="text-sm mt-2" style={{ color: '#64748b' }}>June 2025 – July 2025 • ONSITE</p>
              </div>
              <a
                href="https://drive.google.com/file/d/1ktksBAkSEqKrFvnP_MZCuhyVN65peWEV/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-xs rounded-lg font-medium transition-all"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', color: '#94a3b8', border: '1px solid rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}
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
                Certificate
              </a>
            </div>
            <div className="space-y-2 text-xs" style={{ color: '#cbd5e1', lineHeight: '1.7', fontWeight: '300', marginTop: 'var(--space-3)' }}>
              <p>• Developed and evaluated Vision Transformer-based models for single-image de-raining and restoration.</p>
              <p>• Executed 20+ controlled experiments across multiple transformer backbones and loss configurations.</p>
              <p>• Gained hands-on experience in training, evaluation, and benchmarking of deep learning models.</p>
            </div>
            <div className="flex flex-wrap" style={{ gap: 'var(--tag-gap)', marginTop: 'var(--space-4)' }}>
              <span className="px-3 py-1.5 text-xs rounded-lg font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.12)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.25)' }}>Computer Vision</span>
              <span className="px-3 py-1.5 text-xs rounded-lg font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.12)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.25)' }}>PyTorch</span>
              <span className="px-3 py-1.5 text-xs rounded-lg font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.12)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.25)' }}>Research</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;

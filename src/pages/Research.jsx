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
          className="font-bold"
          style={{ color: '#f1f5f9', marginBottom: 'var(--space-8)', fontSize: '2.5rem', lineHeight: '1.2', letterSpacing: '-0.02em' }}
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
            <div className="flex items-start justify-between mb-4 gap-4">
              <h2 className="text-base" style={{ color: '#f1f5f9', fontWeight: '600' }}>CVPR 2025 Workshop Publication</h2>
              <a
                href="https://openaccess.thecvf.com/content/CVPR2025W/NTIRE/html/Li_NTIRE_2025_Challenge_on_Day_and_Night_Raindrop_Removal_for_CVPRW_2025_paper.html"
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
                Published
              </a>
            </div>
            <h3 className="text-sm" style={{ color: '#f1f5f9', fontWeight: '600', marginBottom: 'var(--tag-gap)' }}>
              NTIRE 2025 Challenge on Day and Night Raindrop Removal for Dual-Focused Images: Methods and Results
            </h3>
            <p className="text-xs" style={{ color: '#94a3b8', lineHeight: '1.7', fontWeight: '300', marginBottom: 'var(--space-3)' }}>
              Published in the CVPR 2025 Workshop, part of the IEEE/CVF conference on Computer Vision and Pattern Recognition (CVPR 2025).
            </p>
            <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
              <p className="text-sm" style={{ color: '#94a3b8' }}>
                <span className="font-semibold" style={{ color: '#f1f5f9' }}>Achievement:</span> Selected as one of the Top 32 teams out of 361+ participants. 
                Achieved state-of-the-art results on the Raindrop Clarity dataset.
              </p>
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
            <h2 className="leading-tight" style={{ color: '#f1f5f9', fontSize: '1.375rem', letterSpacing: '0.005em', fontWeight: '600', marginBottom: 'var(--space-3)' }}>VSIP Team Recognition</h2>
            <p className="text-sm" style={{ color: '#cbd5e1', lineHeight: '1.75', fontWeight: '300', maxWidth: '46rem', marginBottom: 'var(--space-4)' }}>
              Formally recognized as a valued member for innovative contribution to the project "Designing of the Generalizable Vision Transformers" with officially commended technical acumen.
            </p>
            <a
              href="https://drive.google.com/file/d/1t5l-jrJvaBEO1-B9tc28fzZg9tLuAzLv/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-1.5 text-xs rounded-lg font-medium transition-all hover:scale-105 hover:opacity-80"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', color: '#94a3b8', textDecoration: 'none', border: '1px solid rgba(255, 255, 255, 0.06)' }}
            >
              Certificate
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Research;

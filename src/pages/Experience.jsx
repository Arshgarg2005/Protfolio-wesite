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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold mb-8"
          style={{ color: '#f1f5f9' }}
        >
          Experience
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* IIT Bhubaneswar Internship */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-6 backdrop-blur-md transition-all duration-200"
            style={{
              backgroundColor: '#151d28',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-base font-bold mb-2" style={{ color: '#f1f5f9' }}>Research Intern</h2>
                <p className="text-sm mb-1" style={{ color: '#cbd5e1' }}>IIT Bhubaneswar</p>
                <p className="text-xs" style={{ color: '#94a3b8' }}>School of Electrical and Computer Sciences</p>
                <p className="text-sm mt-2" style={{ color: '#64748b' }}>Aug 2025 – Oct 2025 • REMOTE</p>
              </div>
              <a
                href="https://drive.google.com/file/d/1joadeLi-tVXpoTjeRHSkZkLolU0QCwmE/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-xs rounded-full font-medium transition-all hover:scale-105 hover:opacity-80"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8', textDecoration: 'none' }}
              >
                Certificate
              </a>
            </div>
            <div className="space-y-2 mt-3 text-xs" style={{ color: '#cbd5e1', lineHeight: '1.5' }}>
              <p>• Designed and implemented a weak-attention preserving activation mechanism for Transformer-based vision tasks.</p>
              <p>• Achieved state-of-the-art image restoration performance with a peak PSNR of 25.46 and an SSIM of 0.841.</p>
              <p>• Co-authored a research paper accepted at the CVPR 2025 Workshop (NTIRE Challenge).</p>
              <p>• Conducted extensive experiments to evaluate architectural and loss-function variations.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Vision Transformers</span>
              <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Deep Learning</span>
              <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Image Restoration</span>
            </div>
          </motion.div>

          {/* IIT Jodhpur Internship */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-6 backdrop-blur-md transition-all duration-200"
            style={{
              backgroundColor: '#151d28',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-base font-bold mb-2" style={{ color: '#f1f5f9' }}>Summer Intern</h2>
                <p className="text-sm mb-1" style={{ color: '#cbd5e1' }}>IIT Jodhpur</p>
                <p className="text-xs" style={{ color: '#94a3b8' }}>School of Artificial Intelligence and Data Science (SAIDE)</p>
                <p className="text-sm mt-2" style={{ color: '#64748b' }}>June 2025 – July 2025 • ONSITE</p>
              </div>
              <a
                href="https://drive.google.com/file/d/1ktksBAkSEqKrFvnP_MZCuhyVN65peWEV/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-xs rounded-full font-medium transition-all hover:scale-105 hover:opacity-80"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8', textDecoration: 'none' }}
              >
                Certificate
              </a>
            </div>
            <div className="space-y-2 mt-3 text-xs" style={{ color: '#cbd5e1', lineHeight: '1.5' }}>
              <p>• Developed and evaluated Vision Transformer-based models for single-image de-raining and restoration.</p>
              <p>• Executed 20+ controlled experiments across multiple transformer backbones and loss configurations.</p>
              <p>• Gained hands-on experience in training, evaluation, and benchmarking of deep learning models.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Computer Vision</span>
              <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>PyTorch</span>
              <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Research</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;

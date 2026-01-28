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
      style={{ backgroundColor: '#0f172a' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold mb-8"
          style={{ color: '#f1f5f9' }}
        >
          Research
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* CVPR Publication */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-6 backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold" style={{ color: '#f1f5f9' }}>CVPR 2025 Workshop Publication</h2>
              <a
                href="https://openaccess.thecvf.com/content/CVPR2025W/NTIRE/html/Li_NTIRE_2025_Challenge_on_Day_and_Night_Raindrop_Removal_for_CVPRW_2025_paper.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-xs rounded-full font-medium transition-all hover:scale-105 hover:opacity-80"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8', textDecoration: 'none' }}
              >
                Published
              </a>
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ color: '#f1f5f9' }}>
              NTIRE 2025 Challenge on Day and Night Raindrop Removal for Dual-Focused Images: Methods and Results
            </h3>
            <p className="mb-4" style={{ color: '#94a3b8' }}>
              Published in the CVPR 2025 Workshop, part of the IEEE/CVF conference on Computer Vision and Pattern Recognition (CVPR 2025).
            </p>
            <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              <p className="text-sm" style={{ color: '#94a3b8' }}>
                <span className="font-semibold" style={{ color: '#f1f5f9' }}>Achievement:</span> Selected as one of the Top 32 teams out of 361+ participants. 
                Achieved state-of-the-art results on the Raindrop Clarity dataset.
              </p>
            </div>
          </motion.div>

          {/* IIT Bhubaneswar Internship */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-6 backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold" style={{ color: '#f1f5f9' }}>Research Intern</h2>
                <p style={{ color: '#94a3b8' }}>IIT Bhubaneswar, School of Electrical and Computer Sciences</p>
                <p className="text-sm" style={{ color: '#94a3b8' }}>Aug 2025 – Oct 2025 • REMOTE</p>
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
            <div className="space-y-3" style={{ color: '#94a3b8' }}>
              <p>• Developed a novel weak-attention preserving activation mechanism for Transformer-based application.</p>
              <p>• Achieved state-of-the-art performance in restoration using the proposed mechanism, achieving a peak PSNR of 25.46 and an SSIM of 0.841.</p>
              <p>• Co-authored and communicated a research paper titled "Weak Attention Preservation Block in Vision Transformer for Single Image De-raining" to a reputed venue.</p>
            </div>
          </motion.div>

          {/* IIT Jodhpur Internship */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-6 backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold" style={{ color: '#f1f5f9' }}>Summer Intern</h2>
                <p style={{ color: '#94a3b8' }}>IIT Jodhpur, School of Artificial Intelligence and Data Science (SAIDE)</p>
                <p className="text-sm" style={{ color: '#94a3b8' }}>June 2025 – July 2025 • ONSITE</p>
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
            <div className="space-y-3" style={{ color: '#94a3b8' }}>
              <p>• Developed and evaluated deep learning models for image restoration (de-raining), using Vision Transformer architectures to enhance image quality.</p>
              <p>• Gained hands-on experience in building and evaluating AI models, contributing to impactful research results.</p>
              <p>• Executed 20+ experiments with varied transformer backbones and loss functions, optimizing model performance for raindrop removal.</p>
            </div>
          </motion.div>

          {/* VSIP Recognition */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-6 backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#f1f5f9' }}>VSIP Team Recognition</h2>
            <p className="mb-2" style={{ color: '#94a3b8' }}>
              Formally recognized as a valued member for innovative contribution to the project "Designing of the Generalizable Vision Transformers" with officially commended technical acumen.
            </p>
            <a
              href="https://drive.google.com/file/d/1t5l-jrJvaBEO1-B9tc28fzZg9tLuAzLv/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-1 text-xs rounded-full font-medium transition-all hover:scale-105 hover:opacity-80"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8', textDecoration: 'none' }}
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

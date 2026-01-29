import { motion } from 'framer-motion';

const Projects = () => {
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
          Projects
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Malicious PDF Detector */}
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
              <h2 className="text-base font-bold" style={{ color: '#f1f5f9' }}>Malicious PDF Detector</h2>
              <a 
                href="https://github.com/Arshgarg2005/Malacious_PDF_Detector" 
                className="transition-colors text-xs font-medium"
                style={{ color: '#94a3b8' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            </div>
            <p className="mb-3 text-xs" style={{ color: '#cbd5e1', lineHeight: '1.5' }}>
              Built an end-to-end machine learning pipeline to detect malicious PDF files using structural features. Applied LDA for dimensionality reduction and trained a Random Forest classifier, achieving 92% accuracy and a 0.93 F1-score on benchmark datasets. Developed a web interface for real-time PDF classification.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Machine Learning</span>
              <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>LDA</span>
              <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Random Forest</span>
              <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Python</span>
            </div>
            <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              <p className="text-sm mb-2" style={{ color: '#94a3b8' }}>
                <span className="font-semibold" style={{ color: '#f1f5f9' }}>Results:</span>
              </p>
              <ul className="text-sm space-y-1" style={{ color: '#94a3b8' }}>
                <li>• Accuracy: 92%</li>
                <li>• F1-Score: 0.93</li>
                <li>• ROC AUC: 0.96</li>
              </ul>
            </div>
          </motion.div>

          {/* Election Voting System */}
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
              <h2 className="text-base font-bold" style={{ color: '#f1f5f9' }}>Election Voting System</h2>
              <a 
                href="https://github.com/Arshgarg2005/Election_voting_system" 
                className="transition-colors text-xs font-medium"
                style={{ color: '#94a3b8' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            </div>
            <p className="mb-3 text-xs" style={{ color: '#cbd5e1', lineHeight: '1.5' }}>
              Designed and implemented a secure, database-backed voting system using SQL. Ensured data integrity for voters, candidates, and election results through efficient schema design and optimized queries.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>SQL</span>
              <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Database Design</span>
              <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Query Optimization</span>
            </div>
          </motion.div>

          {/* Register and Login System */}
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
              <h2 className="text-base font-bold" style={{ color: '#f1f5f9' }}>Food App</h2>
              <a 
                href="https://arshgarg-foodapp.vercel.app/" 
                className="transition-colors text-xs font-medium"
                style={{ color: '#94a3b8' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo →
              </a>
            </div>
            <p className="mb-3 text-xs" style={{ color: '#cbd5e1', lineHeight: '1.5' }}>
              Developed a full-stack food ordering application featuring user authentication, dynamic cart management, and integrated payment processing. Built with React frontend for scalable performance.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>React</span>
              <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Node.js</span>
              <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>MongoDB</span>
              <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Full-Stack</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;

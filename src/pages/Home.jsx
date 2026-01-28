import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 text-center"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <h1 className="text-6xl font-bold mb-4" style={{ color: '#f1f5f9' }}>
              Arsh Garg
            </h1>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl mb-2 font-medium"
            style={{ color: '#94a3b8' }}
          >
            Computer Engineering Student | CGPA:{' '}
            <span className="inline-flex items-center px-2 py-1 rounded-md text-sm font-semibold" style={{ backgroundColor: '#7dd3fc', color: '#0f172a' }}>
              9.45
            </span>
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg"
            style={{ color: '#94a3b8' }}
          >
            Thapar Institute of Engineering and Technology, Patiala
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 mt-6"
          >
            <a href="https://github.com/Arshgarg2005" className="transition-colors font-medium" style={{ color: '#94a3b8' }}>
              GitHub
            </a>
            <span style={{ color: '#94a3b8' }}>•</span>
            <a href="https://www.linkedin.com/in/arshgarg/" className="transition-colors font-medium" style={{ color: '#94a3b8' }}>
              LinkedIn
            </a>
            <span style={{ color: '#94a3b8' }}>•</span>
            <a href="mailto:agarg14_be23@thapar.edu" className="transition-colors font-medium" style={{ color: '#94a3b8' }}>
              Email
            </a>
          </motion.div>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Research Card */}
          <motion.div variants={cardVariants}>
            <Link
              to="/research"
              className="block group relative rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold" style={{ color: '#f1f5f9' }}>Research</h2>
                <span className="text-2xl transition-all duration-300 group-hover:translate-x-1" style={{ color: '#94a3b8' }}>→</span>
              </div>
              <p className="mb-4" style={{ color: '#94a3b8' }}>
              Research internships at IIT Jodhpur and IIT Bhubaneswar, with a CVPR 2025 Workshop paper on Transformers and image restoration techniques.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Transformers</span>
                <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Image Restoration</span>
                <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>CVPR 2025</span>
              </div>
            </Link>
          </motion.div>

          {/* Projects Card */}
          <motion.div variants={cardVariants}>
            <Link
              to="/projects"
              className="block group relative rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold" style={{ color: '#f1f5f9' }}>Projects</h2>
                <span className="text-2xl transition-all duration-300 group-hover:translate-x-1" style={{ color: '#94a3b8' }}>→</span>
              </div>
              <p className="mb-4" style={{ color: '#94a3b8' }}>
                End-to-end deep learning and machine learning pipelines, relational database systems, and full-stack web applications with a focus on scalability and clean architecture.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Machine Learning</span>
                <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>Deep Learning</span>
                <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>SQL</span>
                <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>React</span>
              </div>
            </Link>
          </motion.div>

          {/* Leadership Card */}
          <motion.div variants={cardVariants}>
            <Link
              to="/leadership"
              className="block group relative rounded-2xl p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold" style={{ color: '#f1f5f9' }}>Leadership</h2>
                <span className="text-2xl transition-all duration-300 group-hover:translate-x-1" style={{ color: '#94a3b8' }}>→</span>
              </div>
              <p className="mb-4" style={{ color: '#94a3b8' }}>
                Leadership roles in VSIP, contributing to coordination and technical initiatives.
              </p>
              <div className="flex flex-wrap gap-2">
                {/* <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>CCS Society</span> */}
                <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>VSIP</span>
              </div>
            </Link>
          </motion.div>

          {/* Skills Card - Spans 2 columns */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 relative rounded-2xl p-6 backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#f1f5f9' }}>Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <h3 className="font-semibold mb-2" style={{ color: '#f1f5f9' }}>Languages</h3>
                <p className="text-sm" style={{ color: '#94a3b8' }}>C, C++, Python, SQL, HTML, CSS, React.js</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <h3 className="font-semibold mb-2" style={{ color: '#f1f5f9' }}>Frameworks</h3>
                <p className="text-sm" style={{ color: '#94a3b8' }}>React, Node.js, REST APIs</p>
              </div>
              <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <h3 className="font-semibold mb-2" style={{ color: '#f1f5f9' }}>Libraries</h3>
                <p className="text-sm" style={{ color: '#94a3b8' }}>TensorFlow, OpenCV, NumPy, Pandas, Matplotlib</p>
              </div>
              <div className="md:col-span-3 p-3 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <h3 className="font-semibold mb-2" style={{ color: '#f1f5f9' }}>Concepts</h3>
                <p className="text-sm" style={{ color: '#94a3b8' }}>Data Structures & Algorithms, Artificial Intelligence, Machine Learning, Deep Learning</p>
              </div>
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            variants={cardVariants}
            className="relative rounded-2xl p-6 backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#f1f5f9' }}>Achievements</h2>
            <ul className="space-y-3 text-sm" style={{ color: '#94a3b8' }}>
              <li className="flex items-start p-2 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <span className="mr-2 font-bold" style={{ color: '#7dd3fc' }}>•</span>
                <span>Intern at IIT Jodhpur and IIT Bhubaneswar.</span>
              </li>
              <li className="flex items-start p-2 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <span className="mr-2 font-bold" style={{ color: '#7dd3fc' }}>•</span>
                <span>Top 32 teams (out of 360+) in NTIRE 2025 Challenge.</span>
              </li>
              <li className="flex items-start p-2 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <span className="mr-2 font-bold" style={{ color: '#7dd3fc' }}>•</span>
                <span>Merit Scholarship recipient (Top 10% of the branch)</span>
              </li>
              <li className="flex items-start p-2 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <span className="mr-2 font-bold" style={{ color: '#7dd3fc' }}>•</span>
                <span>National Semi-Finalist, Flipkart GRiD 4.0 (2025).</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;

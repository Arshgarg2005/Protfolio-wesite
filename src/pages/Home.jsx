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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="lg:col-span-7 order-2 lg:order-1 max-w-xl">
              <motion.div variants={itemVariants}>
                <h1 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold mb-6" style={{ color: '#f1f5f9', lineHeight: '1.1' }}>
                  Computer Engineering Undergraduate<br />
                  Aspiring Software Engineer with ML Experience
                </h1>
              </motion.div>
              
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg mb-10 font-normal"
                style={{ color: '#cbd5e1', lineHeight: '1.6' }}
              >
                My work focuses on building scalable ML pipelines and Transformer-based deep learning models. I am actively seeking internship opportunities in software engineering roles.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 mb-8"
              >
                <a
                  href="https://drive.google.com/file/d/1C5_ldePWbIWwgqkfDcCqReU6G4a6rFvY/view?usp=sharing"
                  download
                  className="px-5 py-2 rounded-lg font-medium text-sm transition-all hover:brightness-110"
                  style={{
                    backgroundColor: '#3b82f6',
                    color: '#ffffff',
                  }}
                >
                  Download Resume (PDF)
                </a>
                <Link
                  to="/projects"
                  className="px-5 py-2 rounded-lg font-medium text-sm transition-all hover:brightness-110"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#f1f5f9',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  View Projects
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-4 border-t"
                style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <a href="https://github.com/Arshgarg2005" target="_blank" rel="noopener noreferrer" className="transition-colors font-medium hover:opacity-80" style={{ color: '#94a3b8' }}>
                  GitHub
                </a>
                <span style={{ color: '#64748b' }}>•</span>
                <a href="https://www.linkedin.com/in/arshgarg/" target="_blank" rel="noopener noreferrer" className="transition-colors font-medium hover:opacity-80" style={{ color: '#94a3b8' }}>
                  LinkedIn
                </a>
                <span style={{ color: '#64748b' }}>•</span>
                <a href="mailto:agarg14_be23@thapar.edu" className="transition-colors font-medium hover:opacity-80" style={{ color: '#94a3b8' }}>
                  Email
                </a>
              </motion.div>
            </div>

            {/* Right Column - Profile Photo */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex items-center justify-center lg:justify-end">
              <motion.div 
                variants={itemVariants}
                className="relative"
              >
                <div className="relative w-72 h-72 md:w-[21.5rem] md:h-[21.5rem]">
                  {/* Blue accent ring */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                      padding: '4px',
                    }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
                      <img 
                        src="/profile.jpg" 
                        alt="Arsh Garg - Portfolio" 
                        className="w-full h-full object-cover"
                        style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
                      />
                    </div>
                  </div>
                  {/* Soft shadow */}
                  <div 
                    className="absolute inset-0 rounded-full -z-10"
                    style={{
                      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                      filter: 'blur(20px)',
                      transform: 'scale(1.1)',
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 max-w-3xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="rounded-xl p-5 transition-all duration-200"
            style={{
              backgroundColor: '#1e293b',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            }}
          >
            <div className="mb-5">
              <h2 className="text-xl font-semibold tracking-wide mb-3" style={{ color: '#f1f5f9' }}>About</h2>
              <div className="h-0.5 w-12" style={{ backgroundColor: '#3b82f6' }} />
            </div>
            <div className="space-y-4 text-sm" style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
              <p>
                I am a Computer Engineering undergraduate with a strong foundation in full-stack development and applied machine learning. My work focuses on building scalable web systems and developing deep learning models for real-world computer vision problems.
              </p>
              <p>
                I have research experience working with Vision Transformer architectures for image restoration, co-authoring a paper published at the CVPR 2025 Workshop. Through internships at IIT Bhubaneswar and IIT Jodhpur, I have gained hands-on experience designing and evaluating AI models at scale.
              </p>
              <p>
                I am currently seeking internship or early-career opportunities where I can contribute to impactful projects in software engineering, machine learning, or applied AI.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Projects Card */}
          <motion.div variants={cardVariants}>
            <Link
              to="/projects"
              className="block group relative rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: '#1e293b',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
            >
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-bold tracking-tight" style={{ color: '#f1f5f9' }}>Projects</h2>
                  <span className="text-lg transition-all duration-300 group-hover:translate-x-1" style={{ color: '#94a3b8' }}>→</span>
                </div>
                <div className="h-0.5 w-10" style={{ backgroundColor: '#3b82f6' }} />
              </div>
              <p className="mb-3 text-xs leading-relaxed" style={{ color: '#94a3b8' }}>
                End-to-end deep learning and machine learning pipelines, relational database systems, and full-stack web applications with a focus on scalability and clean architecture.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 text-xs rounded-md font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.2)' }}>Machine Learning</span>
                <span className="px-2.5 py-1 text-xs rounded-md font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.2)' }}>Deep Learning</span>
                <span className="px-2.5 py-1 text-xs rounded-md font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.2)' }}>SQL</span>
                <span className="px-2.5 py-1 text-xs rounded-md font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.2)' }}>React</span>
              </div>
            </Link>
          </motion.div>

          {/* Experience Card */}
          <motion.div variants={cardVariants}>
            <Link
              to="/experience"
              className="block group relative rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: '#1e293b',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
            >
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-bold tracking-tight" style={{ color: '#f1f5f9' }}>Experience</h2>
                  <span className="text-lg transition-all duration-300 group-hover:translate-x-1" style={{ color: '#94a3b8' }}>→</span>
                </div>
                <div className="h-0.5 w-10" style={{ backgroundColor: '#3b82f6' }} />
              </div>
              <p className="mb-3 text-xs leading-relaxed" style={{ color: '#94a3b8' }}>
                Research internships at premier institutions, working on Vision Transformer architectures and deep learning systems.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 text-xs rounded-md font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.2)' }}>IIT Bhubaneswar</span>
                <span className="px-2.5 py-1 text-xs rounded-md font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.2)' }}>IIT Jodhpur</span>
              </div>
            </Link>
          </motion.div>

          {/* Research & Publications Card */}
          <motion.div variants={cardVariants} className="md:col-span-2">
            <Link
              to="/research"
              className="block group relative rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: '#1e293b',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
            >
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold tracking-wide" style={{ color: '#f1f5f9' }}>Research & Publications</h2>
                  <span className="text-xl transition-all duration-300 group-hover:translate-x-1" style={{ color: '#94a3b8' }}>→</span>
                </div>
                <div className="h-0.5 w-10" style={{ backgroundColor: '#3b82f6' }} />
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                  <h3 className="font-semibold mb-1.5 text-sm" style={{ color: '#f1f5f9' }}>CVPR 2025 Workshop</h3>
                  <p className="text-xs leading-snug" style={{ color: '#cbd5e1' }}>
                    Co-author of a paper published at the CVPR 2025 Workshop as part of the NTIRE Challenge on Day and Night Raindrop Removal. Contributed to the design and evaluation of Transformer-based image restoration models, achieving top-tier performance among international teams.
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Leadership Card */}
          <motion.div variants={cardVariants}>
            <Link
              to="/leadership"
              className="block group relative rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: '#1e293b',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
            >
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold tracking-wide" style={{ color: '#f1f5f9' }}>Leadership</h2>
                  <span className="text-xl transition-all duration-300 group-hover:translate-x-1" style={{ color: '#94a3b8' }}>→</span>
                </div>
                <div className="h-0.5 w-10" style={{ backgroundColor: '#3b82f6' }} />
              </div>
              <p className="mb-3 text-sm leading-snug" style={{ color: '#94a3b8' }}>
                Leadership roles in VSIP, contributing to coordination and technical initiatives.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>VSIP</span>
              </div>
            </Link>
          </motion.div>

          {/* Skills Card - Spans full width */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-3 relative rounded-lg p-4 transition-all duration-200"
            style={{
              backgroundColor: '#1e293b',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            }}
          >
            <div className="mb-3">
              <h2 className="text-lg font-bold tracking-tight mb-2" style={{ color: '#f1f5f9' }}>Skills</h2>
              <div className="h-0.5 w-10" style={{ backgroundColor: '#3b82f6' }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
              
              <div>
                <h3 className="font-semibold mb-1 text-xs uppercase tracking-wide" style={{ color: '#94a3b8' }}>Languages</h3>
                <div className="flex flex-wrap gap-1">
                  {['C', 'C++', 'Python', 'SQL', 'JavaScript', 'HTML', 'CSS'].map(skill => (
                    <span key={skill} className="px-1.5 py-0.5 text-xs rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', color: '#cbd5e1' }}>{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-1 text-xs uppercase tracking-wide" style={{ color: '#94a3b8' }}>Frontend</h3>
                <div className="flex flex-wrap gap-1">
                  {['React', 'Tailwind CSS'].map(skill => (
                    <span key={skill} className="px-1.5 py-0.5 text-xs rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', color: '#cbd5e1' }}>{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-1 text-xs uppercase tracking-wide" style={{ color: '#94a3b8' }}>Backend & DB</h3>
                <div className="flex flex-wrap gap-1">
                  {['Node.js', 'MySQL'].map(skill => (
                    <span key={skill} className="px-1.5 py-0.5 text-xs rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', color: '#cbd5e1' }}>{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-1 text-xs uppercase tracking-wide" style={{ color: '#94a3b8' }}>ML & DL</h3>
                <div className="flex flex-wrap gap-1">
                  {['Machine Learning', 'Deep Learning', 'Vision Transformers', 'Image Restoration'].map(skill => (
                    <span key={skill} className="px-1.5 py-0.5 text-xs rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', color: '#cbd5e1' }}>{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-1 text-xs uppercase tracking-wide" style={{ color: '#94a3b8' }}>Libraries</h3>
                <div className="flex flex-wrap gap-1">
                  {['NumPy', 'Pandas', 'OpenCV', 'Matplotlib'].map(skill => (
                    <span key={skill} className="px-1.5 py-0.5 text-xs rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', color: '#cbd5e1' }}>{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-1 text-xs uppercase tracking-wide" style={{ color: '#94a3b8' }}>Tools</h3>
                <div className="flex flex-wrap gap-1">
                  {['Git/GitHub', 'Linux', 'Google Colab', 'Anaconda', 'VS Code', 'MATLAB', 'RStudio'].map(skill => (
                    <span key={skill} className="px-1.5 py-0.5 text-xs rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', color: '#cbd5e1' }}>{skill}</span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 relative rounded-lg p-4"
            style={{
              backgroundColor: '#1e293b',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div className="mb-3">
              <h2 className="text-lg font-bold tracking-tight mb-2" style={{ color: '#f1f5f9' }}>Achievements</h2>
              <div className="h-0.5 w-10" style={{ backgroundColor: '#3b82f6' }} />
            </div>
            <ul className="space-y-1.5 text-xs" style={{ color: '#cbd5e1' }}>
              <li className="flex items-start py-1">
                <span className="mr-2 text-xs" style={{ color: '#3b82f6' }}>•</span>
                <span>Selected among the <span style={{ color: '#3b82f6', fontWeight: '600' }}>Top 32</span> teams out of <span style={{ color: '#3b82f6', fontWeight: '600' }}>361+</span> participants in the <span style={{ color: '#3b82f6', fontWeight: '600' }}>CVPR NTIRE 2025</span> Challenge.</span>
              </li>
              <li className="flex items-start py-1">
                <span className="mr-2 text-xs" style={{ color: '#3b82f6' }}>•</span>
                <span>Co-author of a paper published at the <span style={{ color: '#3b82f6', fontWeight: '600' }}>CVPR 2025 Workshop</span>.</span>
              </li>
              <li className="flex items-start py-1">
                <span className="mr-2 text-xs" style={{ color: '#3b82f6' }}>•</span>
                <span>Recognized as a National Semi-Finalist in <span style={{ color: '#3b82f6', fontWeight: '600' }}>Flipkart GRiD 4.0</span> (2025).</span>
              </li>
              <li className="flex items-start py-1">
                <span className="mr-2 text-xs" style={{ color: '#3b82f6' }}>•</span>
                <span>Awarded merit-based scholarship at Thapar Institute of Engineering and Technology for academic excellence.</span>
              </li>
              <li className="flex items-start p-2 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <span className="mr-2 font-bold" style={{ color: '#7dd3fc' }}>•</span>
                <span>Formally recognized for technical contributions to Vision Science and Image Processing (VSIP) initiatives.</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12"
        >
          <motion.div
            variants={itemVariants}
            className="rounded-xl p-6 text-center"
            style={{
              backgroundColor: '#1e293b',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div className="mb-5">
              <h2 className="text-xl font-semibold tracking-wide mb-3" style={{ color: '#f1f5f9' }}>Get In Touch</h2>
              <div className="h-0.5 w-12 mx-auto" style={{ backgroundColor: '#3b82f6' }} />
            </div>
            <p className="text-sm mb-2 leading-snug" style={{ color: '#cbd5e1' }}>
              Interested in collaborating or discussing opportunities?
            </p>
            <p className="text-sm mb-5 leading-snug" style={{ color: '#cbd5e1' }}>
              Feel free to reach out via email or connect with me on LinkedIn and GitHub.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="mailto:agarg14_be23@thapar.edu"
                className="px-5 py-2 rounded-lg font-medium text-sm transition-all hover:brightness-110"
                style={{
                  backgroundColor: '#3b82f6',
                  color: '#ffffff',
                }}
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/arshgarg/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg font-medium text-sm transition-all hover:brightness-110"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#f1f5f9',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Arshgarg2005"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg font-medium text-sm transition-all hover:brightness-110"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#f1f5f9',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;

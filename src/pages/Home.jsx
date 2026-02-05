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
      style={{ 
        backgroundColor: '#0d1117',
        backgroundImage: `
          radial-gradient(ellipse 100% 60% at 50% -10%, rgba(20, 28, 40, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(15, 23, 35, 0.3) 0%, transparent 40%),
          url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.015'/%3E%3C/svg%3E")
        `,
        position: 'relative'
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: 'var(--page-padding-y)', paddingBottom: 'var(--page-padding-y)', maxWidth: '1100px', position: 'relative', zIndex: 1 }}>
        {/* Hero Section - Immersive */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            marginBottom: 'calc(var(--section-spacing) * 0.6)',
            padding: 'clamp(2rem, 5vw, 3.5rem) 0',
            position: 'relative'
          }}
        >
          {/* Soft inner glow effect */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            height: '120%',
            background: 'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(59, 130, 246, 0.12) 0%, transparent 60%)',
            pointerEvents: 'none',
            zIndex: -1
          }} />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center" style={{ gap: 'var(--space-8)' }}>
            {/* Left Column - Content */}
            <div className="lg:col-span-7 order-2 lg:order-1 max-w-xl">
              <motion.div variants={itemVariants}>
                <h1 className="text-2xl md:text-3xl lg:text-[2.5rem]" style={{ color: '#e2e8f0', lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.025em', marginBottom: 'var(--space-6)' }}>
                  Computer Engineering Undergraduate<br />
                  Aspiring Software Engineer with ML Experience
                </h1>
              </motion.div>
              
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg"
                style={{ color: '#94a3b8', lineHeight: '1.8', fontWeight: '400', maxWidth: '36rem', marginBottom: 'var(--space-10)' }}
              >
                My work focuses on building scalable ML pipelines and Transformer-based deep learning models. I am actively seeking internship opportunities in software engineering roles.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap"
                style={{ gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}
              >
                <a
                  href="https://drive.google.com/file/d/1C5_ldePWbIWwgqkfDcCqReU6G4a6rFvY/view?usp=sharing"
                  download
                  className="px-6 py-2.5 rounded-md font-medium text-sm transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    color: '#ffffff',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(59, 130, 246, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Download Resume (PDF)
                </a>
                <Link
                  to="/projects"
                  className="px-6 py-2.5 rounded-md font-medium text-sm transition-all"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: '#e2e8f0',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  View Projects
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap border-t"
                style={{ gap: 'var(--space-4)', paddingTop: 'var(--space-4)', borderColor: 'rgba(255, 255, 255, 0.06)' }}
              >
                <a href="https://github.com/Arshgarg2005" target="_blank" rel="noopener noreferrer" className="transition-colors font-medium hover:opacity-80 flex items-center" style={{ color: '#94a3b8', gap: '0.5rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <span style={{ color: '#64748b' }}>•</span>
                <a href="https://www.linkedin.com/in/arshgarg/" target="_blank" rel="noopener noreferrer" className="transition-colors font-medium hover:opacity-80 flex items-center" style={{ color: '#94a3b8', gap: '0.5rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <span style={{ color: '#64748b' }}>•</span>
                <a href="mailto:agarg14_be23@thapar.edu" rel="noopener noreferrer" className="transition-colors font-medium hover:opacity-80 flex items-center" style={{ color: '#94a3b8', gap: '0.5rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
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
                {/* Soft radial backdrop - integrated into hero */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(30, 41, 59, 0.6) 0%, rgba(59, 130, 246, 0.08) 40%, transparent 70%)',
                    filter: 'blur(40px)',
                    transform: 'scale(1.4)',
                    zIndex: -1
                  }}
                />
                
                <div className="relative w-72 h-72 md:w-[21.5rem] md:h-[21.5rem]">
                  {/* Subtle inner gradient overlay on image */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.06) 0%, transparent 50%)',
                      pointerEvents: 'none',
                      zIndex: 2
                    }}
                  />
                  
                  <div className="w-full h-full rounded-full overflow-hidden relative" style={{ 
                    backgroundColor: '#0f172a',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                  }}>
                    <img 
                      src="/profile.jpg" 
                      alt="Arsh Garg - Portfolio" 
                      className="w-full h-full object-cover"
                      style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
                    />
                  </div>
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
          className="max-w-3xl mx-auto"
          style={{ marginBottom: 'var(--section-spacing)' }}
        >
          <motion.div
            variants={itemVariants}
            className="rounded-lg transition-all duration-300"
            style={{
              background: 'rgba(25, 35, 48, 0.6)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              padding: 'var(--card-padding)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
            }}
          >
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <h2 style={{ fontSize: '1.5rem', color: '#e2e8f0', letterSpacing: '0.015em', marginBottom: 'var(--space-3)', fontWeight: '600' }}>About</h2>
              <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.5) 0%, transparent 100%)' }} />
            </div>
            <div className="space-y-5 text-sm" style={{ color: '#94a3b8', lineHeight: '1.85', fontWeight: '300', maxWidth: '42rem' }}>
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
          className="grid grid-cols-1 md:grid-cols-6"
          style={{ gap: 'var(--card-gap)' }}
        >
          {/* Projects Card */}
          <motion.div variants={cardVariants} className="md:col-span-3">
            <Link
              to="/projects"
              className="block group relative rounded-lg transition-all duration-300 flex flex-col h-full"
              style={{
                background: 'rgba(25, 35, 48, 0.5)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                minHeight: '220px',
                padding: 'var(--card-padding)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
              }}
            >
              <div style={{ marginBottom: 'var(--space-4)' }}>
                <div className="flex items-center justify-between" style={{ marginBottom: 'var(--space-3)' }}>
                  <h2 style={{ fontSize: '1.375rem', color: '#e2e8f0', letterSpacing: '0.01em', fontWeight: '600' }}>Projects</h2>
                  <span className="text-xl transition-all duration-300 group-hover:translate-x-1" style={{ color: '#94a3b8' }}>→</span>
                </div>
                <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.5) 0%, transparent 100%)' }} />
              </div>
              <p className="text-sm flex-1" style={{ color: '#94a3b8', lineHeight: '1.8', fontWeight: '300', marginBottom: 'var(--space-4)' }}>
                End-to-end deep learning and machine learning pipelines, relational database systems, and full-stack web applications with a focus on scalability and clean architecture.
              </p>
              <div className="flex flex-wrap" style={{ gap: 'calc(var(--tag-gap) + 2px)' }}>
                <span className="px-3 py-1.5 text-xs rounded-md font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.08)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.15)', letterSpacing: '0.01em' }}>Machine Learning</span>
                <span className="px-3 py-1.5 text-xs rounded-md font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.08)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.15)', letterSpacing: '0.01em' }}>Deep Learning</span>
                <span className="px-3 py-1.5 text-xs rounded-md font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.08)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.15)', letterSpacing: '0.01em' }}>SQL</span>
                <span className="px-3 py-1.5 text-xs rounded-md font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.08)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.15)', letterSpacing: '0.01em' }}>React</span>
              </div>
            </Link>
          </motion.div>

          {/* Experience Card */}
          <motion.div variants={cardVariants} className="md:col-span-3">
            <Link
              to="/experience"
              className="block group relative rounded-lg transition-all duration-300 flex flex-col h-full"
              style={{
                background: 'rgba(25, 35, 48, 0.5)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                minHeight: '220px',
                padding: 'var(--card-padding)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
              }}
            >
              <div style={{ marginBottom: 'var(--space-4)' }}>
                <div className="flex items-center justify-between" style={{ marginBottom: 'var(--space-3)' }}>
                  <h2 style={{ fontSize: '1.375rem', color: '#e2e8f0', letterSpacing: '0.01em', fontWeight: '600' }}>Experience</h2>
                  <span className="text-xl transition-all duration-300 group-hover:translate-x-1" style={{ color: '#94a3b8' }}>→</span>
                </div>
                <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.5) 0%, transparent 100%)' }} />
              </div>
              <p className="text-sm flex-1" style={{ color: '#94a3b8', lineHeight: '1.8', fontWeight: '300', marginBottom: 'var(--space-4)' }}>
                Research internships at premier institutions, working on Vision Transformer architectures and deep learning systems.
              </p>
              <div className="flex flex-wrap" style={{ gap: 'calc(var(--tag-gap) + 2px)' }}>
                <span className="px-3 py-1.5 text-xs rounded-md font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.08)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.15)', letterSpacing: '0.01em' }}>IIT Bhubaneswar</span>
                <span className="px-3 py-1.5 text-xs rounded-md font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.08)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.15)', letterSpacing: '0.01em' }}>IIT Jodhpur</span>
              </div>
            </Link>
          </motion.div>

          {/* Research & Publications Card */}
          <motion.div variants={cardVariants} className="md:col-span-4">
            <Link
              to="/research"
              className="block group relative rounded-lg transition-all duration-300 flex flex-col h-full"
              style={{
                background: 'rgba(25, 35, 48, 0.5)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                minHeight: '220px',
                padding: 'var(--card-padding)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
              }}
            >
              <div style={{ marginBottom: 'var(--space-4)' }}>
                <div className="flex items-center justify-between\" style={{ marginBottom: 'var(--space-3)' }}>
                  <h2 style={{ fontSize: '1.375rem', color: '#e2e8f0', letterSpacing: '0.01em', fontWeight: '600' }}>Research & Publications</h2>
                  <span className="text-xl transition-all duration-300 group-hover:translate-x-1" style={{ color: '#94a3b8' }}>→</span>
                </div>
                <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.5) 0%, transparent 100%)' }} />
              </div>
              <div className="flex-1">
                <div className="rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: 'var(--space-4)' }}>
                  <h3 className="text-sm" style={{ color: '#e2e8f0', fontWeight: '600', marginBottom: 'var(--tag-gap)' }}>CVPR 2025 Workshop</h3>
                  <p className="text-sm" style={{ color: '#94a3b8', lineHeight: '1.8', fontWeight: '300' }}>
                    Co-author of a paper published at the CVPR 2025 Workshop as part of the NTIRE Challenge on Day and Night Raindrop Removal. Contributed to the design and evaluation of Transformer-based image restoration models, achieving top-tier performance among international teams.
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Leadership Card */}
          <motion.div variants={cardVariants} className="md:col-span-2">
            <Link
              to="/leadership"
              className="block group relative rounded-lg transition-all duration-300 flex flex-col h-full"
              style={{
                background: 'rgba(25, 35, 48, 0.5)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                minHeight: '220px',
                padding: 'var(--card-padding)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
              }}
            >
              <div style={{ marginBottom: 'var(--space-4)' }}>
                <div className="flex items-center justify-between" style={{ marginBottom: 'var(--space-3)' }}>
                  <h2 style={{ fontSize: '1.375rem', color: '#e2e8f0', letterSpacing: '0.01em', fontWeight: '600' }}>Leadership</h2>
                  <span className="text-xl transition-all duration-300 group-hover:translate-x-1" style={{ color: '#94a3b8' }}>→</span>
                </div>
                <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.5) 0%, transparent 100%)' }} />
              </div>
              <p className="text-sm flex-1" style={{ color: '#94a3b8', lineHeight: '1.8', fontWeight: '300', marginBottom: 'var(--space-4)' }}>
                Leadership roles in VSIP, contributing to coordination and technical initiatives.
              </p>
              <div className="flex flex-wrap" style={{ gap: 'calc(var(--tag-gap) + 2px)' }}>
                <span className="px-3 py-1.5 text-xs rounded-md font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.08)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.15)', letterSpacing: '0.01em' }}>VSIP</span>
              </div>
            </Link>
          </motion.div>

          {/* Skills Card - Spans full width */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-6 relative rounded-xl transition-all duration-300"
            style={{
              background: 'rgba(25, 35, 48, 0.5)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: 'var(--card-padding)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)';
            }}
          >
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <h2 style={{ fontSize: '1.5rem', color: '#e2e8f0', letterSpacing: '0.015em', marginBottom: 'var(--space-3)', fontWeight: '600' }}>Technical Skills</h2>
              <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.5) 0%, transparent 100%)' }} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--space-5)' }}>
              
              {/* Languages Sub-Card */}
              <div 
                className="rounded-lg transition-all duration-200 flex flex-col"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: 'var(--space-5)',
                  minHeight: '180px',
                  height: '100%',
                }}
              >
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <h3 className="font-semibold text-xs uppercase" style={{ 
                    color: '#7dd3fc', 
                    letterSpacing: '0.08em',
                  }}>
                    Languages
                  </h3>
                  <div className="h-px mt-2" style={{ 
                    background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.4) 0%, transparent 100%)',
                    width: '60%'
                  }} />
                </div>
                <div className="flex flex-wrap flex-1" style={{ gap: 'var(--space-2)', alignContent: 'flex-start' }}>
                  {['C', 'C++', 'Python', 'SQL', 'React.js', 'HTML', 'CSS'].map(skill => (
                    <span 
                      key={skill} 
                      className="text-xs rounded-md transition-all duration-200 hover:scale-105 cursor-default whitespace-nowrap"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                        color: '#e2e8f0', 
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '7px 14px',
                        fontWeight: '500',
                        height: 'fit-content',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend Sub-Card */}
              <div 
                className="rounded-lg transition-all duration-200 flex flex-col"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: 'var(--space-5)',
                  minHeight: '180px',
                  height: '100%',
                }}
              >
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <h3 className="font-semibold text-xs uppercase" style={{ 
                    color: '#7dd3fc', 
                    letterSpacing: '0.08em',
                  }}>
                    Frontend
                  </h3>
                  <div className="h-px mt-2" style={{ 
                    background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.4) 0%, transparent 100%)',
                    width: '60%'
                  }} />
                </div>
                <div className="flex flex-wrap flex-1" style={{ gap: 'var(--space-2)', alignContent: 'flex-start' }}>
                  {['React', 'Tailwind CSS'].map(skill => (
                    <span 
                      key={skill} 
                      className="text-xs rounded-md transition-all duration-200 hover:scale-105 cursor-default whitespace-nowrap"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                        color: '#e2e8f0', 
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '7px 14px',
                        fontWeight: '500',
                        height: 'fit-content',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend & DB Sub-Card */}
              <div 
                className="rounded-lg transition-all duration-200 flex flex-col"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: 'var(--space-5)',
                  minHeight: '180px',
                  height: '100%',
                }}
              >
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <h3 className="font-semibold text-xs uppercase" style={{ 
                    color: '#7dd3fc', 
                    letterSpacing: '0.08em',
                  }}>
                    Backend & DB
                  </h3>
                  <div className="h-px mt-2" style={{ 
                    background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.4) 0%, transparent 100%)',
                    width: '60%'
                  }} />
                </div>
                <div className="flex flex-wrap flex-1" style={{ gap: 'var(--space-2)', alignContent: 'flex-start' }}>
                  {['Node.js', 'MySQL'].map(skill => (
                    <span 
                      key={skill} 
                      className="text-xs rounded-md transition-all duration-200 hover:scale-105 cursor-default whitespace-nowrap"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                        color: '#e2e8f0', 
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '7px 14px',
                        fontWeight: '500',
                        height: 'fit-content',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* ML & DL Sub-Card */}
              <div 
                className="rounded-lg transition-all duration-200 flex flex-col"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: 'var(--space-5)',
                  minHeight: '180px',
                  height: '100%',
                }}
              >
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <h3 className="font-semibold text-xs uppercase" style={{ 
                    color: '#7dd3fc', 
                    letterSpacing: '0.08em',
                  }}>
                    ML & DL
                  </h3>
                  <div className="h-px mt-2" style={{ 
                    background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.4) 0%, transparent 100%)',
                    width: '60%'
                  }} />
                </div>
                <div className="flex flex-wrap flex-1" style={{ gap: 'var(--space-2)', alignContent: 'flex-start' }}>
                  {['Machine Learning', 'Deep Learning', 'Transformers', 'Image Restoration'].map(skill => (
                    <span 
                      key={skill} 
                      className="text-xs rounded-md transition-all duration-200 hover:scale-105 cursor-default whitespace-nowrap"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                        color: '#e2e8f0', 
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '7px 14px',
                        fontWeight: '500',
                        height: 'fit-content',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Libraries Sub-Card */}
              <div 
                className="rounded-lg transition-all duration-200 flex flex-col"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: 'var(--space-5)',
                  minHeight: '180px',
                  height: '100%',
                }}
              >
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <h3 className="font-semibold text-xs uppercase" style={{ 
                    color: '#7dd3fc', 
                    letterSpacing: '0.08em',
                  }}>
                    Libraries
                  </h3>
                  <div className="h-px mt-2" style={{ 
                    background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.4) 0%, transparent 100%)',
                    width: '60%'
                  }} />
                </div>
                <div className="flex flex-wrap flex-1" style={{ gap: 'var(--space-2)', alignContent: 'flex-start' }}>
                  {['NumPy', 'Pandas', 'OpenCV', 'Matplotlib', 'Tensorflow'].map(skill => (
                    <span 
                      key={skill} 
                      className="text-xs rounded-md transition-all duration-200 hover:scale-105 cursor-default whitespace-nowrap"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                        color: '#e2e8f0', 
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '7px 14px',
                        fontWeight: '500',
                        height: 'fit-content',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools Sub-Card */}
              <div 
                className="rounded-lg transition-all duration-200 flex flex-col"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: 'var(--space-5)',
                  minHeight: '180px',
                  height: '100%',
                }}
              >
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <h3 className="font-semibold text-xs uppercase" style={{ 
                    color: '#7dd3fc', 
                    letterSpacing: '0.08em',
                  }}>
                    Tools
                  </h3>
                  <div className="h-px mt-2" style={{ 
                    background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.4) 0%, transparent 100%)',
                    width: '60%'
                  }} />
                </div>
                <div className="flex flex-wrap flex-1" style={{ gap: 'var(--space-2)', alignContent: 'flex-start' }}>
                  {['Git/GitHub', 'Linux', 'Google Colab', 'Anaconda', 'VS Code', 'MATLAB', 'RStudio'].map(skill => (
                    <span 
                      key={skill} 
                      className="text-xs rounded-md transition-all duration-200 hover:scale-105 cursor-default whitespace-nowrap"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                        color: '#e2e8f0', 
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '7px 14px',
                        fontWeight: '500',
                        height: 'fit-content',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-6 relative rounded-xl transition-all duration-300"
            style={{
              background: 'rgba(25, 35, 48, 0.5)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: 'var(--card-padding)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)';
            }}
          >
            <div style={{ marginBottom: 'var(--space-5)' }}>
              <h2 style={{ fontSize: '1.375rem', color: '#e2e8f0', letterSpacing: '0.005em', marginBottom: 'var(--space-3)', fontWeight: '600' }}>Achievements</h2>
              <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.5) 0%, transparent 100%)' }} />
            </div>
            <ul className="space-y-2 text-sm" style={{ color: '#94a3b8', lineHeight: '1.8', fontWeight: '300', maxWidth: '42rem' }}>
              <li className="flex items-start py-1.5">
                <span className="mr-2 text-sm" style={{ color: '#3b82f6' }}>•</span>
                <span>Selected among the <span style={{ color: '#3b82f6', fontWeight: '600' }}>Top 32</span> teams out of <span style={{ color: '#3b82f6', fontWeight: '600' }}>361+</span> participants in the <span style={{ color: '#3b82f6', fontWeight: '600' }}>CVPR NTIRE 2025</span> Challenge.</span>
              </li>
              <li className="flex items-start py-1.5">
                <span className="mr-2 text-sm" style={{ color: '#3b82f6' }}>•</span>
                <span>Co-author of a paper published at the <span style={{ color: '#3b82f6', fontWeight: '600' }}>CVPR 2025 Workshop</span>.</span>
              </li>
              <li className="flex items-start py-1.5">
                <span className="mr-2 text-sm" style={{ color: '#3b82f6' }}>•</span>
                <span>Recognized as a National Semi-Finalist in <span style={{ color: '#3b82f6', fontWeight: '600' }}>Flipkart GRiD 4.0</span> (2025).</span>
              </li>
              <li className="flex items-start py-1.5">
                <span className="mr-2 text-sm" style={{ color: '#3b82f6' }}>•</span>
                <span>Awarded merit-based scholarship at Thapar Institute of Engineering and Technology for academic excellence.</span>
              </li>
              <li className="flex items-start p-3 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                <span className="mr-2 font-bold text-sm" style={{ color: '#7dd3fc' }}>•</span>

                <span>Formally recognized for technical contributions to Visual and Signal Information Processing (VSIP) initiatives.</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ marginTop: 'var(--section-spacing)' }}
        >
          <motion.div
            variants={itemVariants}
            className="rounded-lg text-center transition-all duration-300"
            style={{
              background: 'rgba(25, 35, 48, 0.5)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              padding: 'var(--card-padding)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
            }}
          >
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <h2 style={{ fontSize: '1.5rem', color: '#e2e8f0', letterSpacing: '0.015em', marginBottom: 'var(--space-3)', fontWeight: '600' }}>Get In Touch</h2>
              <div className="h-0.5 w-12 mx-auto" style={{ backgroundColor: '#3b82f6' }} />
            </div>
            <p className="text-sm" style={{ color: '#94a3b8', lineHeight: '1.8', fontWeight: '300', marginBottom: 'var(--tag-gap)' }}>
              Interested in collaborating or discussing opportunities?
            </p>
            <p className="text-sm" style={{ color: '#94a3b8', lineHeight: '1.8', fontWeight: '300', maxWidth: '34rem', margin: '0 auto', marginBottom: 'var(--space-5)' }}>
              Feel free to reach out via email or connect with me on LinkedIn and GitHub.
            </p>
            <div className="flex flex-wrap justify-center" style={{ gap: 'var(--space-3)' }}>
              <a
                href="mailto:agarg14_be23@thapar.edu"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg font-medium text-sm transition-all flex items-center"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  color: '#ffffff',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
                  gap: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/arshgarg/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg font-medium text-sm transition-all flex items-center"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: '#e2e8f0',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  gap: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/Arshgarg2005"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg font-medium text-sm transition-all flex items-center"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: '#e2e8f0',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  gap: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
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

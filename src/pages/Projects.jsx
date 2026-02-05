import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Agentic AI Driven Automated Customer Support System',
      status: 'Ongoing',
      description: 'An agentic AI-based customer support system in which autonomous agents perform intent analysis, decision-making, and workflow execution to resolve user queries. Designed to automate multi-step support actions while minimizing response latency and manual intervention.',
      techStack: ['Python', 'OpenAI API (LLMs)', 'Machine Learning', 'Agentic AI Architecture'],
      link: 'https://github.com/Arshgarg2005/Automated_Customer_Support',
      linkText: 'GitHub →'
    },
    {
      id: 2,
      title: 'Malicious PDF Detector',
      status: 'Completed',
      description: 'Built an end-to-end machine learning pipeline to detect malicious PDF files using structural features. Applied LDA for dimensionality reduction and trained a Random Forest classifier, achieving 92% accuracy and a 0.93 F1-score on benchmark datasets. Developed a web interface for real-time PDF classification.',
      techStack: ['Machine Learning', 'LDA', 'Random Forest', 'Python'],
      link: 'https://github.com/Arshgarg2005/Malacious_PDF_Detector',
      linkText: 'GitHub →',
      results: [
        '• Accuracy: 92%',
        '• F1-Score: 0.93',
        '• ROC AUC: 0.96'
      ]
    },
    {
      id: 3,
      title: 'Election Voting System',
      status: 'Completed',
      description: 'Designed and implemented a secure, database-backed voting system using SQL. Ensured data integrity for voters, candidates, and election results through efficient schema design and optimized queries.',
      techStack: ['SQL', 'Database Design', 'Query Optimization'],
      link: 'https://github.com/Arshgarg2005/Election_voting_system',
      linkText: 'GitHub →'
    },
    {
      id: 4,
      title: 'Food App',
      status: 'Completed',
      description: 'Developed a full-stack food ordering application featuring user authentication, dynamic cart management, and integrated payment processing. Built with React frontend for scalable performance.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Full-Stack'],
      link: 'https://arshgarg-foodapp.vercel.app/',
      linkText: 'Live Demo →'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.status === filter);

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
          Projects
        </motion.h1>

        {/* Filter Buttons */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex"
          style={{ gap: 'var(--tag-gap)', marginBottom: 'var(--space-6)' }}
        >
          {['All', 'Completed', 'Ongoing'].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className="px-5 py-2 text-sm rounded-lg font-medium transition-all duration-200"
              style={{
                backgroundColor: filter === filterOption ? 'rgba(59, 130, 246, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                color: filter === filterOption ? '#7dd3fc' : '#94a3b8',
                border: filter === filterOption ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
              }}
              onMouseEnter={(e) => {
                if (filter !== filterOption) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== filterOption) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }
              }}
            >
              {filterOption}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1"
          style={{ gap: 'var(--space-6)' }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
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
              <div className="flex items-start justify-between" style={{ marginBottom: 'var(--space-3)', gap: 'var(--space-4)' }}>
                <h2 className="leading-tight flex-1" style={{ color: '#f1f5f9', fontSize: '1.375rem', letterSpacing: '0.005em', fontWeight: '600' }}>{project.title}</h2>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="relative group">
                    <span 
                      className="px-2 py-0.5 text-xs rounded font-medium" 
                      style={{ 
                        backgroundColor: project.status === 'Completed' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(251, 146, 60, 0.12)', 
                        color: project.status === 'Completed' ? '#10b981' : '#fb923c', 
                        border: project.status === 'Completed' ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid rgba(251, 146, 60, 0.25)' 
                      }}
                    >
                      {project.status}
                    </span>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-xs rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-10"
                      style={{
                        background: 'linear-gradient(135deg, rgba(21, 29, 40, 0.98) 0%, rgba(15, 23, 42, 1) 100%)',
                        color: '#cbd5e1',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      {project.status === 'Completed' 
                        ? 'Project is fully implemented and stable'
                        : 'Project is under active development'
                      }
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"
                        style={{
                          borderLeft: '4px solid transparent',
                          borderRight: '4px solid transparent',
                          borderTop: '4px solid rgba(15, 23, 42, 1)',
                        }}
                      />
                    </div>
                  </div>
                  <a 
                    href={project.link}
                    className="transition-colors text-xs font-medium"
                    style={{ color: '#94a3b8' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkText}
                  </a>
                </div>
              </div>
              <p className="text-sm" style={{ color: '#cbd5e1', lineHeight: '1.75', fontWeight: '300', maxWidth: '48rem', marginBottom: 'var(--space-4)' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap mt-auto" style={{ gap: 'var(--tag-gap)', marginBottom: 'var(--space-4)' }}>
                {project.techStack.map((tech, index) => (
                  <span key={index} className="px-3 py-1.5 text-xs rounded-lg font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.12)', color: '#7dd3fc', border: '1px solid rgba(59, 130, 246, 0.25)' }}>
                    {tech}
                  </span>
                ))}
              </div>
              {project.results && (
                <div className="rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: 'var(--space-4)', marginTop: 'var(--tag-gap)' }}>
                  <p className="text-sm" style={{ color: '#f1f5f9', fontWeight: '600', marginBottom: 'var(--tag-gap)' }}>Results</p>
                  <ul className="text-sm space-y-1.5" style={{ color: '#cbd5e1', lineHeight: '1.5' }}>
                    {project.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;

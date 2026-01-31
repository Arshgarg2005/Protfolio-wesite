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

        {/* Filter Buttons */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-2 mb-6"
        >
          {['All', 'Completed', 'Ongoing'].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className="px-4 py-1.5 text-xs rounded-lg font-medium transition-all duration-200"
              style={{
                backgroundColor: filter === filterOption ? '#151d28' : 'transparent',
                color: filter === filterOption ? '#f1f5f9' : '#94a3b8',
                border: filter === filterOption ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(255, 255, 255, 0.08)',
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
          className="space-y-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
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
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-base font-bold" style={{ color: '#f1f5f9' }}>{project.title}</h2>
                <div className="flex items-center gap-2">
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
                        backgroundColor: '#151d28',
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
                          borderTop: '4px solid #151d28',
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
              <p className="mb-4 mt-2 text-xs" style={{ color: '#cbd5e1', lineHeight: '1.5' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="px-3 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#94a3b8' }}>
                    {tech}
                  </span>
                ))}
              </div>
              {project.results && (
                <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                  <p className="text-sm mb-2" style={{ color: '#94a3b8' }}>
                    <span className="font-semibold" style={{ color: '#f1f5f9' }}>Results:</span>
                  </p>
                  <ul className="text-sm space-y-1" style={{ color: '#94a3b8' }}>
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

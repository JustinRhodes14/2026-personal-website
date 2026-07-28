import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionWrapper from './ui/SectionWrapper'
import { PROJECTS } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gray-100/80 dark:bg-gray-900/40">
      <div className="max-w-6xl mx-auto">
        <SectionWrapper>
          <p className="text-purple-600 dark:text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">
            04. Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Things I've Built</h2>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <SectionWrapper key={project.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full flex flex-col p-6 rounded-xl border border-gray-200 bg-white hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 dark:border-gray-800 dark:bg-gray-900/60 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <svg
                      className="w-5 h-5 text-purple-600 dark:text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono text-purple-600/80 dark:text-purple-400/80">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import SectionWrapper from './ui/SectionWrapper'
import { SOCIAL_LINKS } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="section-padding max-w-4xl mx-auto text-center">
      <SectionWrapper>
        <p className="text-purple-600 dark:text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">
          05. Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto mb-12">
          Whether you have a project in mind, want to collaborate, or just want to say hi,
          my inbox is always open.
        </p>
      </SectionWrapper>

      <SectionWrapper delay={0.15}>
        <motion.a
          href={`mailto:${SOCIAL_LINKS.email}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg text-lg transition-all duration-200 hover:shadow-xl hover:shadow-purple-500/30 mb-12"
        >
          Say Hello
        </motion.a>

        <div className="flex items-center justify-center gap-8 mt-4">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
            <span className="text-sm font-mono">GitHub</span>
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="text-sm font-mono">LinkedIn</span>
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="group flex items-center gap-2 text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <FaEnvelope className="w-5 h-5" />
            <span className="text-sm font-mono">Email</span>
          </a>
        </div>
      </SectionWrapper>
    </section>
  )
}

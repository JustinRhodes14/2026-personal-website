import { motion } from 'framer-motion'
import SectionWrapper from './ui/SectionWrapper'
import { SKILLS } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gray-100/80 dark:bg-gray-900/40">
      <div className="max-w-6xl mx-auto">
        <SectionWrapper>
          <p className="text-purple-600 dark:text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">
            02. Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What I Work With</h2>
        </SectionWrapper>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group, gi) => (
            <SectionWrapper key={group.category} delay={gi * 0.07}>
              <div className="p-6 rounded-xl border border-gray-200 bg-white hover:border-purple-500/30 dark:border-gray-800 dark:bg-gray-900/60 transition-colors group">
                <h3 className="text-sm font-mono text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-sm bg-gray-100 hover:bg-purple-500/15 text-gray-700 hover:text-purple-700 border border-gray-300 hover:border-purple-500/30 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-purple-300 dark:border-gray-700 transition-all cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

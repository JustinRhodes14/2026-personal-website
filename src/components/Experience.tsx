import { motion } from 'framer-motion'
import SectionWrapper from './ui/SectionWrapper'
import { EXPERIENCE } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section-padding max-w-6xl mx-auto">
      <SectionWrapper>
        <p className="text-purple-600 dark:text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">
          03. Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Where I've Worked</h2>
      </SectionWrapper>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/60 via-purple-500/20 to-transparent" />

        <div className="space-y-12">
          {EXPERIENCE.map((job, i) => (
            <SectionWrapper key={`${job.company}-${i}`} delay={i * 0.1}>
              <div className="relative pl-12 md:pl-20">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute left-0 md:left-4 top-1 w-8 h-8 rounded-full bg-white dark:bg-gray-900 border-2 border-purple-500 flex items-center justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                </motion.div>

                <div className="p-6 rounded-xl border border-gray-200 bg-white hover:border-purple-500/20 dark:border-gray-800 dark:bg-gray-900/60 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{job.role}</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-mono text-gray-600 dark:text-gray-400">{job.period}</p>
                      <p className="text-sm text-gray-500">{job.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{job.description}</p>

                  <ul className="space-y-1">
                    {job.highlights.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-purple-500 mt-0.5 shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

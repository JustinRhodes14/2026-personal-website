import SectionWrapper from './ui/SectionWrapper'
import PFP from '../assets/pfp.jpg'

export default function About() {
  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      <SectionWrapper>
        <p className="text-purple-600 dark:text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">
          01. About Me
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Who I Am</h2>
      </SectionWrapper>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <SectionWrapper delay={0.1}>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I'm a Senior Application Developer at <span className="text-purple-600 dark:text-purple-400 font-medium">ADP</span>,
              where I work full-stack on projects for the WorkForce Now product, a payroll and HR
              platform used by millions of people worldwide. On the backend, my work spans building
              tools for fast data analysis, equipping QA teams with the data and setup they need to
              triage client issues, managing DevOps for our internal projects and scheduled jobs,
              and revamping our database deployments with Liquibase. I've also built the UI for
              these services, including implementing our login flow with Azure for backend
              authentication.
            </p>
            <p>
              I also provide production support for database issues and recently led the
              first-ever initiative to rotate application-facing schema passwords for WorkForce
              Now databases all the way through production, across both on-prem and AWS
              environments. On the side, I build internal libraries that help my team move faster
              by cutting out duplicate code across our microservices.
            </p>
            <p>
              Born and raised in Sparta, NJ, I now live in Roselle Park, NJ with my partner.
              Growing up, I was always enamored with technology and computers; any time I ran
              into an issue, I'd go down a rabbit hole to figure it out. From setting up Minecraft
              servers, building my own computers, learning how to code, to working toward building
              my own home network, I've never stopped learning about technology and how it works
              under the hood. I love to learn, and I love to teach, and I hope to continue to do
              both for the rest of my life.
            </p>
            <p>
              Outside of work, I enjoy playing video games, reading, and spending time with my partner
              and friends. Some of my favorite games include Street Fighter, Slay the Spire, and Hollow Knight.
              I love to read fiction, fantasy, and philosophy. I'm also a huge Pokemon fan and an avid trading
              card game player; currently, my latest obsession has been Riftbound.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Open to new opportunities', 'Senior Application Developer', 'Full-Stack & Databases', 'NJ & NY / Remote'].map(tag => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono text-purple-600 dark:text-purple-400 border border-purple-500/30 rounded-full bg-purple-500/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper delay={0.2}>
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/30 to-purple-900/10 border border-purple-500/20" />
            <div className="absolute inset-3 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <img
                src={PFP}
                alt="Justin Rhodes"
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            {/* Decorative corner accent */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-purple-500/40 rounded-br-2xl" />
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-purple-500/40 rounded-tl-2xl" />
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}

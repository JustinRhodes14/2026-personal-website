export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL', 'C', 'Assembly', 'Lua'],
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML/CSS', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Spring Boot', 'REST APIs', 'GraphQL', 'Microservices'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Ansible', 'HashiCorp Vault', 'Virtual Machines'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'Oracle', 'Liquibase'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Jira', 'Confluence', 'Postman', 'Delphix'],
  },
]

export const EXPERIENCE = [
  {
    company: 'ADP',
    role: 'Senior Software Engineer',
    period: '2022 – Present',
    location: 'Remote',
    description:
      'Building internal tools and infrastructure for ADP\'s WorkForce Now payroll and HR platform. Developing shared Python libraries, internal tooling, and infrastructure used across teams and repositories to support engineering and QA workflows.',
    highlights: [
      'Built a database query aggregation tool that executes queries across 100+ Oracle databases simultaneously and consolidates results for QA and sales workflows',
      'Developed a data masking and copying tool using Delphix to safely replicate production data to lower environments while protecting sensitive information',
      'Authored shared Python libraries and REST API integrations used across multiple team repositories, standardizing database connectivity via oracledb and hashicorp-vault APIs, and providing a unified interface for internal tooling',
      'Architected WorkForce Now\'s first centralized secrets management system in HashiCorp Vault across 100+ on-prem and AWS databases, enabling the first full password rotation in company history as part of a security initiative',
      'Designed Vault auth strategies including userpass service accounts, AppRole for applications, and Kubernetes auth for containerized resources; scoped secret paths so external teams consume only the credentials they need',
      'Integrated Liquibase into our CI/CD deployment pipelines, replacing manual database change scripts with version-controlled, automated schema migrations',
    ],
  },
  {
    company: 'Rutgers University–New Brunswick',
    role: 'B.S. in Computer Science, Minor in Mathematics',
    period: '2018 – 2022',
    location: 'New Brunswick, NJ',
    description: 'Graduated Cum Laude with a 3.54 GPA.',
    highlights: [],
  },
]

export const PROJECTS = [
    {
    title: 'Enterprise Secrets Management & Password Rotation',
    description:
      'Architected WorkForce Now\'s first centralized secrets management system using HashiCorp Vault, covering 100+ on-prem and AWS databases. Designed the vault structure with scoped secret paths so external teams can consume only the credentials they need. Implemented userpass service accounts for human access, AppRole authentication for applications, and Kubernetes auth for containerized workloads. Wrote a Python automation script that tracks database credentials in a central store and syncs the latest passwords to Vault, enabling the first full password rotation across all databases in ADP history.',
    tech: ['HashiCorp Vault', 'Python', 'Kubernetes', 'AWS', 'Oracle', 'PostgreSQL'],
    github: '',
    live: '',
  },
  {
    title: 'Multi-Database Query Tool',
    description:
      'A full-stack tool that fans out SQL queries across 100+ Oracle databases in parallel and aggregates the results into a single unified dataset, backed by a Python service and a React UI that lets QA and sales teams run and review queries without touching a terminal. Built to replace workflows that previously required manual, per-database execution.',
    tech: ['Python', 'React', 'Oracle', 'oracledb', 'SQL'],
    github: '',
    live: '',
  },
  {
    title: 'Data Masking & Environment Copy Tool',
    description:
      'A full-stack internal tool that leverages Delphix to mask sensitive production data and copy it safely to lower environments, paired with a React front end so developers and QA can kick off and monitor copies themselves. Eliminates manual data provisioning and ensures compliance by preventing real PII from reaching dev and QA systems.',
    tech: ['Python', 'React', 'Delphix', 'Oracle', 'REST APIs'],
    github: '',
    live: '',
  },
  {
    title: 'Liquibase Deployment Pipeline',
    description:
      'Designed and managed a database deployment pipeline in Harness, then rebuilt it as custom in-house tooling to cut licensing costs. Powered by Python and Liquibase, it gives QA and developers a clean, one-click interface for running deployments, complete with built-in auditing and S3-archived logs for easy troubleshooting.',
    tech: ['Python', 'Liquibase', 'AWS S3', 'CI/CD'],
    github: '',
    live: '',
  },
]

export const SOCIAL_LINKS = {
  github: 'https://github.com/JustinRhodes14',
  linkedin: 'https://linkedin.com/in/justinr14/',
  email: 'rhodesju21@gmail.com',
}

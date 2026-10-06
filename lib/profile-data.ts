export const profile = {
  name: 'Jonathan A. Reyes',
  initials: 'JR',
  title: 'Chief Technology Officer & Principal Software Architect',
  location: 'San Francisco, California',
  availability: 'Open to board, advisory & executive roles',
  bio: 'Technology executive with over two decades of experience building resilient platforms, scaling engineering organizations from 12 to 600+, and translating complex business strategy into systems that serve millions of people every day.',
  email: 'jonathan@reyes.dev',
  phone: '+1 (415) 555-0142',
  website: 'reyes.dev',
  linkedin: 'linkedin.com/in/jonathanreyes',
  github: 'github.com/jreyes',
  stats: [
    { value: '22+', label: 'Years of experience' },
    { value: '600+', label: 'Engineers led' },
    { value: '45', label: 'Products shipped' },
    { value: '$1.2B', label: 'Revenue enabled' },
  ],
}

export const about = {
  paragraphs: [
    'I am a hands-on technology leader who believes the best architecture is the one your team can understand, operate, and evolve. Across fintech, healthcare, and enterprise SaaS, I have led platform modernizations, cloud migrations, and the creation of engineering cultures that consistently ship with quality.',
    'My work sits at the intersection of strategy and execution. I partner closely with CEOs and boards to define technology roadmaps, while staying close enough to the code to review architecture decisions, mentor principal engineers, and remain accountable for outcomes.',
  ],
  principles: [
    {
      title: 'Clarity over cleverness',
      description: 'Simple, well-documented systems outlast brilliant but brittle ones.',
    },
    {
      title: 'People build platforms',
      description: 'Invest in leaders, and the technology follows. Hiring is the highest-leverage work I do.',
    },
    {
      title: 'Measure what matters',
      description: 'Reliability, delivery speed, and customer impact — tracked openly and reviewed often.',
    },
  ],
}

export const story = [
  {
    period: '2019 — Present',
    role: 'Chief Technology Officer',
    company: 'Meridian Financial Group',
    description:
      'Lead a 600-person global engineering, data, and security organization. Directed the migration of a 20-year-old core banking platform to a cloud-native architecture with zero customer-facing downtime, cutting infrastructure costs by 38%.',
  },
  {
    period: '2013 — 2019',
    role: 'VP of Engineering',
    company: 'Northwind Health Systems',
    description:
      'Built the engineering function from 40 to 220 people. Delivered a HIPAA-compliant interoperability platform now used by 1,400 hospitals, and established the company’s first SRE and platform engineering practices.',
  },
  {
    period: '2008 — 2013',
    role: 'Director of Software Architecture',
    company: 'Atlas Commerce',
    description:
      'Owned the technical architecture for a marketplace processing $3B in annual transactions. Led the transition from a monolith to service-oriented design and scaled peak throughput 15x through two record holiday seasons.',
  },
  {
    period: '2004 — 2008',
    role: 'Senior Software Engineer',
    company: 'Brightline Labs',
    description:
      'Early engineer at a logistics startup acquired by a Fortune 100 company. Designed the routing engine and real-time tracking services that became the foundation of the acquiring company’s fleet platform.',
  },
]

export const skillGroups = [
  {
    category: 'Leadership & Strategy',
    skills: [
      'Technology Strategy',
      'Org Design & Scaling',
      'Board Reporting',
      'M&A Due Diligence',
      'Budget Ownership',
      'Executive Hiring',
    ],
  },
  {
    category: 'Architecture',
    skills: [
      'Distributed Systems',
      'Event-Driven Design',
      'Domain-Driven Design',
      'Microservices',
      'API Platforms',
      'Security by Design',
    ],
  },
  {
    category: 'Languages & Frameworks',
    skills: ['TypeScript', 'Go', 'Java', 'Python', 'Rust', 'React', 'Next.js', 'Spring Boot'],
  },
  {
    category: 'Cloud & Data',
    skills: [
      'AWS',
      'Google Cloud',
      'Kubernetes',
      'Terraform',
      'PostgreSQL',
      'Kafka',
      'Snowflake',
      'ML Platforms',
    ],
  },
]

export const expertise = [
  { name: 'Platform Architecture', level: 98 },
  { name: 'Engineering Leadership', level: 96 },
  { name: 'Cloud Infrastructure', level: 92 },
  { name: 'Data & AI Strategy', level: 88 },
  { name: 'Security & Compliance', level: 85 },
]

export const projects = [
  {
    title: 'Core Banking Modernization',
    organization: 'Meridian Financial Group',
    year: '2020 — 2023',
    description:
      'Re-architected a legacy mainframe ledger into event-sourced services on Kubernetes, serving 9 million accounts with 99.995% availability.',
    impact: '38% lower infrastructure cost',
    tags: ['Go', 'Kafka', 'Kubernetes', 'PostgreSQL'],
  },
  {
    title: 'Clinical Interoperability Platform',
    organization: 'Northwind Health Systems',
    year: '2015 — 2018',
    description:
      'FHIR-based data exchange network connecting hospitals, labs, and insurers, processing 200M+ clinical messages per month.',
    impact: 'Adopted by 1,400 hospitals',
    tags: ['Java', 'FHIR', 'AWS', 'HL7'],
  },
  {
    title: 'Real-Time Fraud Detection',
    organization: 'Meridian Financial Group',
    year: '2021 — 2022',
    description:
      'Streaming ML pipeline scoring every transaction in under 40ms, combining rules, graph features, and gradient-boosted models.',
    impact: '$84M in prevented losses annually',
    tags: ['Python', 'Flink', 'Feature Store', 'MLOps'],
  },
  {
    title: 'Global Marketplace Checkout',
    organization: 'Atlas Commerce',
    year: '2010 — 2012',
    description:
      'Multi-currency, multi-region checkout and payments orchestration supporting 34 payment providers across 60 countries.',
    impact: '15x peak throughput',
    tags: ['Java', 'Redis', 'Payments', 'SOA'],
  },
]

export const education = [
  {
    degree: 'Executive Program in Strategic Leadership',
    school: 'Stanford Graduate School of Business',
    period: '2017',
    note: 'Focus on scaling organizations and technology governance.',
  },
  {
    degree: 'M.S. Computer Science',
    school: 'Carnegie Mellon University',
    period: '2002 — 2004',
    note: 'Specialization in distributed systems. Thesis on fault-tolerant consensus protocols.',
  },
  {
    degree: 'B.S. Computer Engineering',
    school: 'University of California, Berkeley',
    period: '1998 — 2002',
    note: 'Graduated with Highest Honors. Dean’s List all semesters.',
  },
]

export const certifications = [
  { name: 'AWS Certified Solutions Architect — Professional', issuer: 'Amazon Web Services', year: '2023' },
  { name: 'Google Cloud Professional Cloud Architect', issuer: 'Google Cloud', year: '2022' },
  { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'Cloud Native Computing Foundation', year: '2021' },
  { name: 'CISSP — Certified Information Systems Security Professional', issuer: 'ISC2', year: '2019' },
  { name: 'TOGAF 9 Certified Enterprise Architect', issuer: 'The Open Group', year: '2016' },
]

export const awards = [
  {
    title: 'CTO of the Year — Financial Services',
    issuer: 'Global Technology Leadership Awards',
    year: '2024',
  },
  {
    title: 'Top 50 Technology Executives',
    issuer: 'Forbes Technology Council',
    year: '2022',
  },
  {
    title: 'Innovation in Healthcare IT',
    issuer: 'HIMSS Excellence Awards',
    year: '2018',
  },
  {
    title: 'Distinguished Alumni Award',
    issuer: 'Carnegie Mellon School of Computer Science',
    year: '2016',
  },
]

export const recommendations = [
  {
    quote:
      'Jonathan is the rare technology leader who can hold a room of board members and, an hour later, whiteboard a consensus algorithm with our principal engineers. He transformed how we build software.',
    name: 'Margaret Chen',
    role: 'Chief Executive Officer, Meridian Financial Group',
    relationship: 'Reported directly to Margaret',
  },
  {
    quote:
      'Under Jonathan’s leadership our engineering organization quadrupled in size while our delivery velocity and quality both improved. His calm under pressure is legendary.',
    name: 'David Okafor',
    role: 'Former President, Northwind Health Systems',
    relationship: 'Worked together for 6 years',
  },
  {
    quote:
      'He hired me as a junior engineer and mentored me all the way to VP. Jonathan invests in people with a generosity I try to emulate every day.',
    name: 'Priya Raman',
    role: 'VP of Platform Engineering, Atlas Commerce',
    relationship: 'Mentee and direct report',
  },
]

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#story', label: 'Story' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#recommendations', label: 'Recommendations' },
  { href: '#contact', label: 'Contact' },
]

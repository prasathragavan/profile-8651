const portfolioBase = 'https://prasathragavan.github.io/projects/'
const portfolioFile = (file: string) => `${portfolioBase}${encodeURIComponent(file)}`

export const profile = {
  name: 'Guru Prasath Ragavendran',
  initials: 'GR',
  title: 'Product Manager & UX / Front-End Technology Leader',
  location: 'Chennai, Tamil Nadu, India',
  availability: 'Open to product leadership & consulting engagements',
  bio: 'Product-minded technology leader with over two decades of hands-on experience across eCommerce and online payments — from re-designing PayPal.com to leading digital banking products at BNP Paribas. Passionate about iterating on the best ideas to build engaging products.',
  email: 'rguruprasath@gmail.com',
  phone: '+91 98407 44159',
  website: 'prasathragavan.github.io',
  linkedin: 'linkedin.com/in/prasathragavan',
  github: 'github.com/prasathragavan',
  stats: [
    { value: '24+', label: 'Years of experience' },
    { value: '9', label: 'Organizations' },
    { value: '6,000+', label: 'PayPal pages optimized' },
    { value: '20%', label: 'Revenue uplift delivered' },
  ],
}

export const about = {
  paragraphs: [
    'In addition to strong management skills, I bring more than two decades of hands-on experience across a wide range of environments, with deep working knowledge of eCommerce and online payments. I have spent much of my career at the intersection of product, design, and engineering — at PayPal, Verizon, BNP Paribas and as an independent consultant.',
    'I am a strong believer in innovation and a conscientious person who pays attention to detail. I completed the Product Management certification program from Duke CE / UpGrad, and today I help clients go from a raw idea to a researched, prototyped, and shipped product.',
  ],
  principles: [
    {
      title: 'Innovation first',
      description: 'Question the default. The best products come from a willingness to try something new.',
    },
    {
      title: 'Details make the experience',
      description: 'Performance, accessibility, and consistency are the small things users feel the most.',
    },
    {
      title: 'Iterate toward engagement',
      description: 'Research, prototype, measure, and refine — feedback prioritized by business and customer impact.',
    },
  ],
}

export const story = [
  {
    period: 'Jun 2016 — Present',
    role: 'Independent IT Specialist / Consultant',
    company: 'Self-employed',
    description:
      'Design and development of web applications based on industry best practices. Conduct UX research and wireframing, shape new feature ideas and validate feasibility, analyze user paths and business events, and lead projects end-to-end across cross-functional teams.',
  },
  {
    period: 'Oct 2014 — May 2016',
    role: 'Project Lead',
    company: 'BNP Paribas India Solutions, Chennai',
    description:
      'Led a product team of nine to define and track release sprints. Drove multiple internet-facing applications with high-impact features that increased revenue by 20%, and led a multi-platform hybrid app for iOS and Android on IBM MobileFirst.',
  },
  {
    period: 'May 2013 — Aug 2014',
    role: 'Technical Manager',
    company: 'Tech Mahindra (Client: Verizon Data Services India), Hyderabad',
    description:
      'Managed a team of 10 building on Ruby on Rails, Python, jQuery and Bootstrap. Led the integration of over-the-air device data into a web-based medical platform connecting physicians with patients, and defined UI development standards.',
  },
  {
    period: 'Jul 2009 — Nov 2012',
    role: 'User Interface Engineer / Technical Lead',
    company: 'PayPal India, Chennai',
    description:
      'Led the SiteSpeed optimization of 35+ PayPal homepages with Akamai, built an internal tool to monitor web performance geographically, launched tech-talk programs averaging 100+ developers, and helped define web standards and accessibility guidelines.',
  },
  {
    period: 'Aug 2008 — Jun 2009',
    role: 'Associate Projects / Technical Lead',
    company: 'Computer Sciences Corporation, Chennai',
    description:
      'Improved response time by 40% and UI consistency across 6,000+ pages of paypal.com. Refactored 500+ CSS and 200+ JS files and owned offshore delivery from kick-off to Go-Live.',
  },
  {
    period: 'Jul 2006 — Aug 2008',
    role: 'Associate Projects / Web Developer',
    company: 'Covansys India, Chennai',
    description:
      'Led the site-wide re-design of PayPal with a new data-driven approach that drove more sign-ups, and led a team of 12 web developers focused on consumer experiences and products.',
  },
  {
    period: 'Aug 2005 — Jun 2006',
    role: 'Web Developer',
    company: 'Xerago E-Biz India, Chennai',
    description:
      'Led a team of four building table-less HTML/CSS layouts and drove product templates and digital assets for clients including Citibank and Globus.',
  },
  {
    period: 'Aug 2004 — Jul 2005',
    role: 'Web Developer',
    company: 'Protechsoft Systems, Chennai',
    description:
      'Lead developer for the US Child Support System and CMS-based sites; designed templates, brochures and Flash product demos.',
  },
  {
    period: 'Aug 2002 — Feb 2004',
    role: 'Web Designer / Developer',
    company: 'Sify India, Chennai',
    description:
      'Built dynamic pages for e-Market services (Seekandsource.com, SatyamPlastics.com, Apnawebsite.com) and produced weekly MIS and site-activity reports.',
  },
]

export const skillGroups = [
  {
    category: 'Product Management',
    skills: [
      'Product Strategy',
      'Market Research',
      'Competitive Analysis',
      'Epics & User Stories',
      'Product Analytics',
      'Agile / Scrum',
      'Jira',
    ],
  },
  {
    category: 'UX & Design',
    skills: [
      'User Experience',
      'UX Research',
      'Journey Mapping',
      'Wireframing',
      'Prototyping',
      'Sketch',
      'Accessibility',
    ],
  },
  {
    category: 'Engineering',
    skills: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'jQuery',
      'Bootstrap',
      'Ruby on Rails',
      'Python',
      'IBM MobileFirst',
      'Hybrid Mobile Apps',
    ],
  },
  {
    category: 'Growth & Performance',
    skills: ['SEO', 'Omniture Analytics', 'Digital Marketing', 'Web Performance', 'Akamai', 'Gomez', 'Keynote'],
  },
]

export const expertise = [
  { name: 'Front-End Engineering', level: 95 },
  { name: 'User Experience', level: 92 },
  { name: 'Web Performance', level: 90 },
  { name: 'Team Leadership', level: 90 },
  { name: 'Product Management', level: 85 },
]

export const projects = [
  {
    title: 'PayPal Homepage SiteSpeed Program',
    organization: 'PayPal India',
    year: '2009 — 2012',
    description:
      'Led a massive effort to revamp 35+ PayPal homepages for speed, working with vendors including Akamai to improve user experience and revenue while reducing server costs.',
    impact: '35+ homepages optimized',
    tags: ['Web Performance', 'Akamai', 'JavaScript', 'CSS'],
  },
  {
    title: 'Hybrid Digital Banking App',
    organization: 'BNP Paribas',
    year: '2014 — 2016',
    description:
      'Internet-facing applications and a multi-platform hybrid app for iOS and Android that delighted high-value customers with a more sophisticated digital experience.',
    impact: '20% increase in revenue',
    tags: ['IBM MobileFirst', 'iOS', 'Android', 'Jira'],
  },
  {
    title: 'paypal.com UI Consistency & Speed',
    organization: 'Computer Sciences Corporation',
    year: '2008 — 2009',
    description:
      'Improved response time and usability across 6,000+ pages of paypal.com, including refactoring 500+ CSS and 200+ JavaScript files.',
    impact: '40% faster response time',
    tags: ['CSS', 'JavaScript', 'Usability', 'Refactoring'],
  },
  {
    title: 'Connected Medical Platform',
    organization: 'Tech Mahindra · Verizon',
    year: '2013 — 2014',
    description:
      'Integrated data from over-the-air devices into a web-based medical platform connecting physicians with patients; built the initial prototype and UI standards.',
    impact: 'Cross-functional team of 10 led',
    tags: ['Ruby on Rails', 'Python', 'jQuery', 'Bootstrap'],
  },
]

export const caseStudies = [
  { title: 'Market Research & Competitive Analysis', summary: 'Meru Cabs', href: portfolioFile('ca.pdf') },
  { title: 'Conducting Survey', summary: 'Furniture rental space', href: portfolioFile('Survey_submission_file.docx-2.pdf') },
  { title: 'Product Artifacts', summary: 'Co-Living case study', href: portfolioFile('Case+Study+Submission+-+Co-Living+(1).pdf') },
  { title: 'Design Fundamentals', summary: 'User journey map & UX improvement', href: portfolioFile('UX Assignment.pdf') },
  { title: 'Wireframe & Prototype', summary: 'To-do list app', href: portfolioFile('Wireframe_Prototype_Guru_prasath.pdf') },
  { title: 'Sketch', summary: 'To-do list sketch & user feedback', href: portfolioFile('Sketch_template_Guru_Prasath.pdf') },
  { title: 'Industry Project — Part 1', summary: 'Zivame', href: portfolioFile('Industry+Case+Study+-+Zivame.pdf') },
  { title: 'Industry Project — Part 2', summary: 'Zivame', href: portfolioFile('Industry+project+-+Part+2.pdf') },
  { title: 'Metrics', summary: 'SaaS startup metrics tracking', href: portfolioFile('PM_Product_Analytics_Metrics_GuruPrasath_Ragavendran.pdf') },
  { title: 'Analytics Case Study', summary: 'RedBus', href: portfolioFile('Analytics_Case_Study_submission_Guru_Prasath_Ragavendran.pdf') },
  { title: 'Agile Approach', summary: 'Zomato', href: 'https://medium.com/@prasathraghavendran/zomato-agile-approach-891d55f367b1' },
  { title: 'Epics & User Stories', summary: 'Netflix', href: portfolioFile('Userstory_Acceptance_Criteria_Guru_Prasath.xlsx') },
  {
    title: 'Product Adoption Lifecycle',
    summary: 'Music streaming services in India',
    href: 'https://medium.com/@prasathraghavendran/product-adoption-lifecycle-for-music-streaming-services-in-india-447100c1c231',
  },
]

export const education = [
  {
    degree: 'Product Management Certification Program',
    school: 'Duke CE / UpGrad India',
    period: 'Nov 2019 — May 2020',
    note: 'Completed with 89%. Market research, UX, analytics, agile delivery and industry case studies.',
  },
  {
    degree: 'Bachelor of Electronic Science (B.E.S)',
    school: 'University of Madras',
    period: '1999 — 2002',
    note: 'Undergraduate degree in electronic science.',
  },
  {
    degree: 'Higher Secondary Education (H.S.C)',
    school: 'New Prince Matriculation Higher Secondary School',
    period: '1998 — 1999',
    note: 'Higher secondary certificate.',
  },
  {
    degree: 'Secondary School Leaving Certificate (S.S.L.C)',
    school: 'Bharathi Matriculation Higher Secondary School',
    period: '1996 — 1997',
    note: 'Secondary school certificate.',
  },
]

export const certifications = [
  { name: 'Product Management Certification (89%)', issuer: 'Duke Corporate Education / UpGrad', year: '2020' },
]

export const awards = [
  {
    title: 'Technology Leader Award',
    issuer: 'PayPal India — one of 12 technology leaders of the year',
    year: '2009',
  },
  {
    title: 'Super Star Award',
    issuer: 'Covansys India — for the site-wide PayPal redesign',
    year: '2008',
  },
]

export const recommendations: { quote: string; name: string; role: string; relationship: string }[] = []

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#story', label: 'Story' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

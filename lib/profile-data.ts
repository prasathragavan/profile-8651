export const profile = {
  name: "Guru Prasath Ragavendran",
  title: "AI & Technology Consultant",
  tagline: "Agentic AI Specialist · Fractional CTO · Digital Transformation Advisor",
  location: "Chennai, India",
  openTo: "Open to remote engagements & relocation",
  email: "rguruprasath@gmail.com",
  phone: "+91 98407 44159",
  linkedin: "https://www.linkedin.com/in/prasathragavan/",
  github: "https://github.com/prasathragavan",
  twitter: "https://twitter.com/prasath",
  portfolio: "https://prasathragavan.github.io",
  summary:
    "Independent technology consultant with 22+ years of hands-on delivery experience, specialising in Agentic AI implementation, LLM-powered product development, and digital transformation advisory. Certified in Agentic AI & Applications (IITM Pravartak — IIT Madras, 2026). Proven track record designing and shipping production AI systems using OpenAI, LangChain, LangGraph, and Cloudflare Workers. Combines deep technical execution with business-outcome thinking — advising clients from requirements to live deployment. Previously led high-impact engineering initiatives at PayPal, BNP Paribas, and Verizon.",
};

export const skills = [
  {
    category: "Agentic AI & LLMs",
    items: ["OpenAI", "LangChain", "LangGraph", "RAG pipelines", "Prompt engineering", "Evaluation frameworks", "Helicone", "TogetherAI"],
  },
  {
    category: "AI Product Development",
    items: ["End-to-end SaaS delivery", "Conversational design", "LLM observability", "ChatPress.ai"],
  },
  {
    category: "Frontend & Web",
    items: ["React", "TypeScript", "Next.js", "WordPress", "WCAG 2.0/2.1 Accessibility", "Web Performance (YSlow, WebPageTest, Browser APIs)"],
  },
  {
    category: "Infrastructure & Platform",
    items: ["Cloudflare Workers", "Supabase", "Vercel", "AWS (EC2, S3)", "CI/CD", "Figma"],
  },
  {
    category: "Analytics & Automation",
    items: ["Looker Studio", "Google Analytics", "GTM", "Selenium", "Helicone AI observability"],
  },
  {
    category: "Client Advisory",
    items: ["Requirements discovery", "Solution architecture", "CXO stakeholder management", "Technical due diligence", "Go/no-go recommendations"],
  },
];

export const experience = [
  {
    title: "Senior Technical Consultant",
    company: "118Group",
    companyUrl: "",
    period: "2017 – Present",
    location: "Remote (Chennai-based) · UK-based digital agency",
    type: "consulting",
    summary:
      "Sole technical advisor on a long-term retained basis for a UK digital agency. Dual mandate: technical strategy for an AI SaaS product and operational governance across a 100+ site WordPress portfolio. Functions as Fractional CTO without permanent headcount.",
    highlights: [
      "Led technical due diligence and architecture evaluation for the acquisition of ChatPress.ai — go/no-go recommendation directly informed the company's acquisition decision.",
      "Sole engineer on ChatPress.ai since acquisition: built and shipped ~25–30% of the remaining product using React, Cloudflare Workers, and Helicone for LLM observability; continue to own the live, revenue-generating product.",
      "Sole technical lead managing infrastructure (servers, hosting, DNS, security) for 100+ client WordPress websites, down from a peak of 210 sites.",
      "Used Browser Performance API to profile and diagnose latency in ChatPress.ai's chat interaction flow alongside Cloudflare and Helicone observability tooling.",
      "Designed and delivered a real-time Excel-to-WordPress data sync solution (Google Sheets + JSON feed integration) that became the company's primary ongoing client engagement.",
      "Use Figma extensively for design collaboration across ChatPress.ai and client WordPress projects; deliver using both Agile (Scrum) and Waterfall depending on client needs.",
    ],
  },
  {
    title: "Project Lead",
    company: "BNP Paribas India Solutions",
    companyUrl: "https://www.bnpparibas.co.in/",
    period: "Oct 2014 – May 2016",
    location: "Chennai",
    type: "fulltime",
    summary:
      "Led a 9-person engineering sub-team delivering a multi-platform wealth management application for high-net-worth clients in a regulated banking environment.",
    highlights: [
      "Built on IBM MobileFirst and AngularJS; delivered for iOS, Android, iPad, and Desktop.",
      "Grew the Chennai wealth management team from 22 to 80 through direct, hands-on technical hiring.",
      "Delivered 5 successive product releases; coordinated cross-geography with Singapore-based leadership.",
      "Balanced compliance constraints with delivery speed in a regulated banking environment.",
    ],
  },
  {
    title: "Technical Manager",
    company: "Tech Mahindra (Verizon account)",
    companyUrl: "https://www.techmahindra.com/",
    period: "May 2013 – Aug 2014",
    location: "Hyderabad",
    type: "fulltime",
    summary:
      "Led a 10-person cross-functional team delivering a confidential healthcare IoT platform, including continuous glucose monitoring (CGM) device integration.",
    highlights: [
      "Team composition: Python/Django, Ruby on Rails, QA, and UI engineers.",
      "Coordinated delivery between the onsite India team and US-based design/product teams.",
      "Led UI delivery for a Magento e-commerce platform launch, reporting directly to the client VP.",
    ],
  },
  {
    title: "User Interface Engineer (Full-Time)",
    company: "PayPal India",
    companyUrl: "https://www.paypal.com/",
    period: "Jul 2009 – Nov 2012",
    location: "Chennai",
    type: "fulltime",
    summary:
      "Member of PayPal's core UI Accessibility team. Built reusable WCAG-compliant component library adopted org-wide. Co-defined architectural migration from legacy XPT framework to Java ('Project Sparta').",
    highlights: [
      "Built a reusable WCAG 2.0/2.1-compliant UI component library adopted org-wide — an early design-system initiative.",
      "Co-defined the architectural migration path from PayPal's legacy XML-based (XPT) framework to Java ('Project Sparta'); trained the broader UI developer organisation on the migration approach.",
      "Adopted native Browser Performance APIs post-2010 to drive granular front-end optimisation.",
      "Converted from contractor to full-time employee via a Build-Operate-Transfer agreement.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Covansys → CSC (PayPal Program)",
    companyUrl: "",
    period: "Jun 2006 – Jun 2009",
    location: "Chennai",
    type: "fulltime",
    summary:
      "Sole technical code reviewer for a 130-developer India development centre. Directly hired ~80% of the team's growth from 40 to 130 engineers. Led a company-wide multilingual site redesign across every page of PayPal.com.",
    highlights: [
      "Reduced PayPal homepage load time from 11 seconds to 3.5 seconds using YSlow, WebPageTest, and custom JavaScript timing instrumentation.",
      "Built performance-monitoring infrastructure across international offices; trained 150–200 developers on web performance best practices.",
      "Directly hired ~80% of the India team's growth from 40 to 130 engineers; conducted 800–900 candidate interviews as final technical decision-maker.",
      "Awarded the company's 'Superstar Award' for successful completion of the site-wide redesign project.",
      "Represented the UI organisation on PayPal's monthly cross-functional Architecture Council.",
    ],
  },
  {
    title: "Web Designer / Developer",
    company: "Xerago",
    companyUrl: "https://www.xerago.com/",
    period: "Jul 2005 – Jun 2006",
    location: "Chennai",
    type: "fulltime",
    summary: "Delivered HTML prototyping and creative design for Citibank and Tibco. Built an interactive Flash/XML-based community platform for Globus retail group.",
    highlights: [
      "Clients included CitiBank (card, loan, banking pages) and Tibco (newsletters, campaigns).",
      "Built early Web 2.0 front-end interaction patterns (AJAX, dynamic forms) for enterprise banking clients.",
    ],
  },
  {
    title: "Web Developer",
    company: "ProTechSoft / Sify Ltd.",
    companyUrl: "",
    period: "Aug 2002 – Jul 2005",
    location: "Chennai",
    type: "fulltime",
    summary: "Early career roles covering HTML/CSS prototyping, Flash animation, and high-volume B2B website delivery.",
    highlights: [
      "Delivered Photoshop-to-HTML/CSS prototyping and Flash animation for a U.S. government (Child Support) website.",
      "Produced 30–60 templated business website builds per day for a pan-India B2B hosting platform at Sify.",
    ],
  },
];

export const certifications = [
  {
    title: "Professional Certificate Programme in Agentic AI and Applications",
    issuer: "IITM Pravartak (IIT Madras)",
    period: "Sep 2025 – May 2026",
    highlight: true,
    description: "Agentic systems, multi-agent orchestration, LangGraph, production LLM deployment",
  },
  {
    title: "Product Management Certification",
    issuer: "UpGrad in partnership with Duke University",
    period: "Sep 2019 – Jul 2020",
    highlight: false,
    description: "Product strategy, roadmapping, go-to-market, user research",
  },
];

export const education = [
  {
    degree: "Bachelor of Electronic Science (B.E.S.)",
    institution: "University of Madras",
    year: "2002",
  },
];

export const awards = [
  {
    title: "Technology Leader Award",
    org: "PayPal India",
    year: "2009",
    description: "One of 12 technology leaders recognised for the year.",
  },
  {
    title: "Superstar Award",
    org: "Covansys India",
    year: "2008",
    description: "For successful completion of the PayPal site-wide redesign project.",
  },
];

export const projects = [
  {
    name: "ChatPress.ai",
    description:
      "AI chatbot SaaS for WordPress — built and shipped as the sole engineer post-acquisition. Production LLM pipelines using OpenAI + Cloudflare Workers, with Helicone for AI observability. Live, revenue-generating product.",
    tags: ["React", "OpenAI", "Cloudflare Workers", "Helicone", "LLM", "SaaS"],
    url: "https://chatpress.ai",
    type: "consulting",
  },
  {
    name: "PayPal SiteSpeed Initiative",
    description:
      "Led the global effort to optimise PayPal homepages — reduced load time from 11 seconds to 3.5 seconds across 35+ international homepage flows. Built performance-monitoring infrastructure adopted by 150–200 developers.",
    tags: ["Web Performance", "YSlow", "WebPageTest", "JavaScript", "Akamai"],
    url: "",
    type: "enterprise",
  },
  {
    name: "Excel-to-WordPress Data Sync",
    description:
      "Designed and delivered a real-time Google Sheets + JSON feed integration that syncs spreadsheet data directly into WordPress. Became the agency's flagship client solution and primary ongoing engagement.",
    tags: ["WordPress", "Google Sheets", "JSON", "API Integration"],
    url: "",
    type: "consulting",
  },
  {
    name: "PayPal WCAG Component Library",
    description:
      "Built a reusable, WCAG 2.0/2.1-compliant UI component library adopted org-wide at PayPal — one of the company's early design-system initiatives predating the modern design-system era.",
    tags: ["Accessibility", "WCAG 2.0/2.1", "Design System", "JavaScript"],
    url: "",
    type: "enterprise",
  },
];

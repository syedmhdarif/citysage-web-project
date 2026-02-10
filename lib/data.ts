export interface AIWorker {
  slug: string;
  name: string;
  role: string;
  summary: string;
  image: string;
  capabilities: string[];
  useCases: string[];
  interactions: { question: string; answer: string }[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
  client: string;
}

// ─── AI Workers ───────────────────────────────────────────────
export const aiWorkers: AIWorker[] = [
  {
    slug: "c-rose",
    name: "C-Rose",
    role: "Geospatial AI Agent",
    summary:
      "C-Rose specialises in optimising location-based data — from satellite imagery analysis to spatial pattern recognition — delivering precision geospatial intelligence for urban planning and land management.",
    image: "https://citysage.my/wp-content/uploads/2025/01/C-Rose-Video-ezgif.com-optimize.gif",
    capabilities: [
      "Satellite imagery analysis",
      "Spatial pattern recognition",
      "Location-based data optimisation",
      "Geospatial trend forecasting",
    ],
    useCases: [
      "Land-use change detection",
      "Geospatial risk assessment",
      "Location intelligence for development",
    ],
    interactions: [
      {
        question: "Can you identify underutilised land parcels in the Klang Valley corridor?",
        answer:
          "I've analysed 3,200 parcels using satellite imagery and zoning overlays. 47 parcels across Petaling and Hulu Langat show less than 15% utilisation against approved density. I recommend prioritising the 12 parcels within 500m of existing MRT stations for transit-oriented development.",
      },
    ],
  },
  {
    slug: "c-siti",
    name: "C-Siti",
    role: "Urban Planner Agent",
    summary:
      "C-Siti optimises zoning and urban planning decisions by analysing population density, traffic patterns, and land-use data to generate actionable recommendations for municipalities and developers.",
    image: "https://citysage.my/wp-content/uploads/2025/01/preview_video_target1-ezgif.com-crop.gif",
    capabilities: [
      "Urban land-use analysis",
      "Zoning optimisation & compliance",
      "Population growth forecasting",
      "Transit-oriented development planning",
    ],
    useCases: [
      "Municipal master-plan reviews",
      "Zoning regulation analysis",
      "Green corridor planning",
    ],
    interactions: [
      {
        question: "What's the optimal zone for a new transit hub in Zone 4?",
        answer:
          "Based on population density heat-maps and existing transit coverage, I recommend the intersection of Jalan Ampang and Jalan Tun Razak. Pedestrian footfall data supports a 32% increase in ridership within 18 months.",
      },
    ],
  },
  {
    slug: "c-kimi",
    name: "C-Kimi",
    role: "Data Governance Agent",
    summary:
      "C-Kimi ensures data quality and governance integrity across urban data ecosystems — validating datasets, enforcing compliance standards, and maintaining audit trails for transparent city operations.",
    image: "https://citysage.my/wp-content/uploads/2025/01/C-Kimi-GIF-ezgif.com-optimize.gif",
    capabilities: [
      "Data quality validation",
      "Governance policy enforcement",
      "Compliance audit trails",
      "Cross-system data integrity checks",
    ],
    useCases: [
      "Municipal data standardisation",
      "Open data compliance auditing",
      "Cross-agency data quality assurance",
    ],
    interactions: [
      {
        question: "How clean is our urban mobility dataset for Q4 reporting?",
        answer:
          "I've audited 2.4M records across 6 transit agencies. Data completeness is at 94.2%, but I flagged 12,800 duplicate entries and 3,100 records with inconsistent timestamp formats. I've prepared a remediation report — once applied, compliance score rises to 99.1%.",
      },
    ],
  },
  {
    slug: "c-ruma",
    name: "C-Ruma",
    role: "Housing & Community Strategist",
    summary:
      "C-Ruma specialises in housing development and sustainable urban living — analysing affordability trends, community needs, and environmental factors to shape liveable neighbourhoods.",
    image: "https://citysage.my/wp-content/uploads/2025/03/C-Ruma-Video-ezgif.com-optimize.gif",
    capabilities: [
      "Housing affordability analysis",
      "Community needs assessment",
      "Sustainable development planning",
      "Neighbourhood liveability scoring",
    ],
    useCases: [
      "Affordable housing site selection",
      "Community amenity gap analysis",
      "Sustainable neighbourhood design",
    ],
    interactions: [
      {
        question: "Where should we prioritise new affordable housing in Selangor?",
        answer:
          "Based on median income data, commute patterns, and land availability, I've identified 8 high-priority zones. Shah Alam Section 25 and Subang Bestari score highest — both offer proximity to public transit, existing amenities, and developable land at 40% below market average.",
      },
    ],
  },
];

// ─── Services ─────────────────────────────────────────────────
export const services: Service[] = [
  {
    title: "Smart City Consulting",
    description:
      "End-to-end advisory for municipalities transitioning to data-driven urban management, from strategy to deployment.",
    icon: "🏙️",
  },
  {
    title: "AI Worker Deployment",
    description:
      "Deploy domain-specific AI agents that automate urban analysis, planning, and monitoring workflows.",
    icon: "🤖",
  },
  {
    title: "Data Analytics Platform",
    description:
      "Unified dashboards that bring together transport, environment, and infrastructure data for real-time decision-making.",
    icon: "📊",
  },
  {
    title: "Urban IoT Integration",
    description:
      "Connect sensors, cameras, and edge devices into a cohesive network that feeds actionable intelligence to city operators.",
    icon: "📡",
  },
  {
    title: "Capacity Building & Training",
    description:
      "Upskill city teams through hands-on workshops, certification programmes, and the CitySage Academy curriculum.",
    icon: "🎓",
  },
  {
    title: "Research & Innovation",
    description:
      "Collaborative R&D with universities and government labs to pilot emerging urban-tech solutions.",
    icon: "🔬",
  },
];

// ─── Projects ─────────────────────────────────────────────────
export const projects: Project[] = [
  {
    title: "MD Analytics AI Copilot",
    description:
      "CitySage enhanced MD Analytics 2.0 with the CitySage AI Copilot, a bilingual conversational agent built with LLMs, RAG, and hybrid connectors. It delivers fast, natural Q&A over KPIs, dashboards, and maps across eight urban use cases, significantly accelerating time-to-insight for city councils.",
    category: "Agentic AI Module",
    image: "https://citysage.my/wp-content/uploads/2025/12/1.png",
    client: "Map2U",
  },
  {
    title: "KLUO RoadSense",
    description:
      "CitySage collaborated with Map2U to advance an Urban Observatory for a Klang Valley city council. Two AI solutions were delivered: a 3D AI Digital Twin for city planning and analytics, and a Road Asset AI Model for automated road asset detection and defect classification such as potholes.",
    category: "Consultation & AI Module Development",
    image: "https://citysage.my/wp-content/uploads/2025/12/2.png",
    client: "City Council",
  },
  {
    title: "MUO — NSCP 2.0 Smart City Platform",
    description:
      "As Map2U's strategic AI partner, CitySage is building the Agentic AI layer for MUO/NSCP 2.0, Malaysia's national smart city data backbone. Digital workers automate key workflows including Smart City ratings and reporting, supporting ministries, state agencies, and local authorities with scalable, intelligent operations.",
    category: "Agentic AI & Workflow Automation",
    image: "https://citysage.my/wp-content/uploads/2025/12/3.png",
    client: "Map2U",
  },
  {
    title: "JUPEM — MyCartoGo Enhancements",
    description:
      "CitySage is developing next-generation AI capabilities for MyCartoGo's Tourism, Activity, and Topography modules. The scope includes multilingual travel copilots, AR-assisted guidance, smart activity insights, and predictive route planning, elevating user experience for tourists, residents, and outdoor communities.",
    category: "Consultation, AI & Advanced Analytics",
    image: "https://citysage.my/wp-content/uploads/2025/12/4.png",
    client: "Map2U",
  },
  {
    title: "SCOUT — JCorp Supply Chain Control Tower",
    description:
      "SCOUT (Supply Chain Optimization & Unified Tech) is an Agentic AI-powered logistics control tower designed for Johor Corporation's diverse business verticals. CitySage delivered the consulting and operational mockup showcasing real-time visibility, exception management, and unified supply chain optimization across Agribusiness, Healthcare, F&B, and Real Estate domains.",
    category: "AI-Driven Supply Chain Transformation",
    image: "https://citysage.my/wp-content/uploads/2025/12/5.png",
    client: "Johor Corporation",
  },
];

// ─── Navigation ───────────────────────────────────────────────
export interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services & Solutions", href: "/services" },
  { label: "Academy", href: "/academy" },
  { label: "Project", href: "/project" },
  {
    label: "Ecosystem",
    children: [
      { label: "Technology", href: "/ecosystem/technology" },
      { label: "Events", href: "/ecosystem/events" },
      { label: "Research", href: "/ecosystem/research" },
    ],
  },
];

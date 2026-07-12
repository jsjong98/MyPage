export type TimelineEntry = {
  period: string;
  company: string;
  location: string;
  role: string;
  badge?: string;
  points: string[];
};

export const experience: TimelineEntry[] = [
  {
    period: 'Jul 2026 – Present',
    company: 'Enhans',
    location: 'Seoul, Korea',
    role: 'AI Engineer',
    badge: 'Current',
    points: [
      'Driving PoC projects that embed Agentic AI into real-world operations across the insurance and petrochemical domains',
      'Formulated petrochemical production planning & scheduling as a mathematical optimization problem, designing and developing an optimization model built on the HiGHS solver',
      'Integrating LLM agent architectures with the optimization engine to validate real-world business impact and production readiness',
    ],
  },
  {
    period: 'Feb 2026 – Jun 2026',
    company: 'PwC Strategy&',
    location: 'Seoul, Korea',
    role: 'Research Assistant',
    points: [
      'Led end-to-end HR AI Transformation (AX) engagement for a large conglomerate, conducting As-Is diagnostics across 6 HR domains and designing To-Be workflows via benchmarking and pain point analysis',
      'Developed and deployed full-stack AX platform supporting AI feasibility assessment and automated consulting deliverable generation',
    ],
  },
  {
    period: 'Dec 2025 – Jan 2026',
    company: 'Boston Consulting Group',
    location: 'Seoul, Korea',
    role: 'Research Analyst',
    points: [
      'Designed and implemented production planning optimization framework using heuristic/CP-SAT for flexible manufacturing operations across 1,000+ product families',
      'Achieved an average 20% reduction in annual job changeover downtime, improving overall operational efficiency',
    ],
  },
  {
    period: 'Aug 2025 – Sep 2025',
    company: 'PwC Strategy&',
    location: 'Seoul, Korea',
    role: 'Research Assistant',
    points: [
      'Built multi-agent AI system using 5 specialized AI techniques to predict employee turnover risk — integrating LLM/NLP, LSTM/Attention, XGBoost, Graph algorithm (Neo4j), and SHAP (XAI)',
      'Created automated AI dashboard that generates predictions and actionable recommendations for HR teams',
    ],
  },
];

export const research: TimelineEntry[] = [
  {
    period: 'Jul 2024 – Jun 2025',
    company: 'Petrochemical Company L',
    location: 'Korea · Industry Collaboration',
    role: 'AI Research Engineer',
    badge: 'Industry',
    points: [
      'Built naphtha price forecasting platform using time-series forecasting models to predict commodity prices',
      'Implemented cost optimization strategy demonstrating average 0.42% cost savings (~$2.4M annually) through AI-driven procurement timing decisions',
    ],
  },
  {
    period: 'Mar 2023 – Dec 2024',
    company: 'KEIT',
    location: 'Korea · Government R&D',
    role: 'AI Research Engineer',
    badge: 'Gov R&D',
    points: [
      'Developed AI document classification system that automatically categorizes safety design rules using NLP models',
      'Built knowledge graph-based AI chatbot using RAG and LLM-Cypher for automated safety reasoning and validation — later filed as Korean Patent',
    ],
  },
];

export type Project = {
  name: string;
  context: string;
  description: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    name: 'Agentic AI System',
    context: 'Agentic AI · Multi-Agent System',
    description:
      'A production-grade multi-agent AI system integrating 5 specialized techniques — LLM/NLP, LSTM/Attention, XGBoost, Graph algorithms (Neo4j), and SHAP — to predict employee turnover risk and generate automated HR recommendations.',
    tags: ['LangGraph', 'LLM', 'LSTM', 'XGBoost', 'Neo4j', 'SHAP'],
    href: 'https://github.com/jsjong98/Agentic_AI_system',
  },
  {
    name: 'AX Lens System',
    context: 'Explainable AI · Transparency',
    description:
      'An AI explainability platform (AX Lens) designed to make black-box AI decisions transparent and interpretable for enterprise stakeholders — enabling trustworthy AI adoption through visual explanations and uncertainty quantification.',
    tags: ['XAI', 'SHAP', 'Trustworthy AI', 'Python', 'Visualization'],
    href: 'https://github.com/jsjong98/ax-lens-system',
  },
  {
    name: 'Naphtha Price Forecasting Platform',
    context: 'Time-Series · Commodity Forecasting',
    description:
      'End-to-end naphtha commodity price forecasting system leveraging advanced time-series models. Achieved ~0.42% cost savings (~$2.4M/yr) through AI-driven procurement timing decisions for a major petrochemical firm.',
    tags: ['Time-Series', 'Forecasting', 'PyTorch', 'Optimization'],
    href: 'https://github.com/jsjong98/Mopj-project',
  },
  {
    name: 'Safety Knowledge Graph Chatbot',
    context: 'NLP · Knowledge Graph · RAG',
    description:
      'AI-powered safety engineering assistant combining RAG with LLM-Cypher queries over a knowledge graph (Neo4j) for automated safety design rule classification, reasoning, and validation. Filed as Korean Patent.',
    tags: ['RAG', 'LangChain', 'Neo4j', 'NLP', 'LLM-Cypher'],
  },
  {
    name: 'Production Planning Optimizer',
    context: 'Operations Research · BCG',
    description:
      'Designed and deployed a production planning optimization framework using heuristic algorithms and CP-SAT solvers for flexible manufacturing across 1,000+ product families. Achieved 20% reduction in annual changeover downtime.',
    tags: ['CP-SAT', 'Heuristics', 'OR-Tools', 'Manufacturing'],
  },
  {
    name: 'HR AI Transformation Platform',
    context: 'HR Analytics · Full-Stack · PwC',
    description:
      'Full-stack AX (AI Transformation) platform for HR consulting engagements. Supports AI feasibility assessment across 6 HR domains, automated deliverable generation, and To-Be workflow design through benchmarking analysis.',
    tags: ['Full-Stack', 'LLM', 'HR Analytics', 'Automation'],
  },
];

export type SkillGroup = {
  label: string;
  color: 'cyan' | 'purple' | 'blue' | 'gray';
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'AI Domains',
    color: 'cyan',
    items: [
      'eXplainable AI (XAI)',
      'Agentic AI (Multi-Agent)',
      'RAG',
      'Trustworthy AI',
      'NLP',
      'Time-Series Forecasting',
      'Operations Research',
    ],
  },
  {
    label: 'Models & Algorithms',
    color: 'purple',
    items: [
      'XGBoost',
      'SHAP / LIME',
      'LLM Integration (GPT-4o/5)',
      'GRU + CNN + Attention',
      'LSTM / Attention',
      'PyTorch',
      'TensorFlow',
      'HiGHS / CP-SAT',
    ],
  },
  {
    label: 'Frameworks & Orchestration',
    color: 'blue',
    items: ['Python', 'LangGraph', 'LangChain', 'FastAPI', 'React / Next.js', 'TypeScript'],
  },
  {
    label: 'Data & Infrastructure',
    color: 'gray',
    items: ['Neo4j (Graph DB)', 'NumPy / Pandas', 'Docker / Compose', 'Git', 'Railway (Cloud Deploy)'],
  },
];

export const languages = [
  {
    name: 'Korean',
    level: 'Native',
    description: 'Mother tongue — full professional and academic fluency',
  },
  {
    name: 'English',
    level: 'Fluent',
    description:
      'Business & academic English — consulting deliverables, research papers, international collaboration',
  },
];

export const patent = {
  number: 'Korean Patent · 10-2025-0006400 · Jan 2025',
  title:
    'Chemical Safety Guidelines Question Answering Based on Knowledge Graph–Retrieval Augmented Generation (RAG) Service System and Its Operation Method',
  description:
    'A novel system combining knowledge graph technology with retrieval-augmented generation (RAG) to enable accurate, automated question-answering over chemical safety design guidelines. Leverages LLM-Cypher querying for structured reasoning and validation over safety engineering knowledge bases.',
};

export type Repo = {
  name: string;
  description: string;
  meta: string[];
  href: string;
};

export const repos: Repo[] = [
  {
    name: 'Agentic_AI_system',
    description:
      'Supervisor + 5 specialized worker agents (Structura, Cognita, Chronos, Sentio, Agora) for HR attrition prediction. Full-stack with React + ReactFlow dashboard.',
    meta: ['Python 42.9%', 'JS/HTML 56%'],
    href: 'https://github.com/jsjong98/Agentic_AI_system',
  },
  {
    name: 'ax-lens-system',
    description:
      'Full-stack HR task AI/human classification system. FastAPI backend + Next.js 15 frontend with 3-stage knock-out LLM classification logic.',
    meta: ['TypeScript 48.1%', 'Python 44.1%'],
    href: 'https://github.com/jsjong98/ax-lens-system',
  },
  {
    name: 'Mopj-project',
    description:
      'Time-series commodity price forecasting for naphtha procurement optimization in petrochemicals.',
    meta: ['Python', 'Forecasting'],
    href: 'https://github.com/jsjong98/Mopj-project',
  },
];

export const education = [
  {
    period: 'Mar 2023 – Present',
    degree: 'M.S / Ph.D in Chemical Engineering',
    school: 'Sungkyunkwan University — Suwon, Korea',
    detail: 'GPA: 4.1 / 4.5 · Research focus: AI for process safety & industrial optimization',
  },
  {
    period: 'Mar 2017 – Feb 2023',
    degree: 'Bachelor of Applied Chemical Engineering',
    school: 'Chungnam National University — Daejeon, Korea',
    detail: 'Applied Chemical Engineering · Foundation in process systems & chemistry',
  },
];

export const contact = {
  linkedin: 'https://linkedin.com/in/jonghwan-oh/',
  github: 'https://github.com/jsjong98',
  location: 'Seongnam-si, Gyeonggi-do, South Korea',
};

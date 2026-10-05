import {Text} from '@astryxdesign/core/Text';

import type {Content} from './types';

export const en: Content = {
  locale: 'EN',
  name: 'Jonghwan Oh',
  nav: {
    label: 'Main navigation',
    experience: 'Experience',
    projects: 'Projects',
    publications: 'Publications',
    skills: 'Skills',
    github: 'GitHub',
    contact: 'Contact',
    languageSwitch: 'Language',
  },
  hero: {
    status: 'Available for opportunities',
    role: 'AI Researcher & Engineer',
    intro: (
      <>
        AI engineer with a chemical-engineering research background, focused on making AI outputs usable for real
        decisions — <Text weight="semibold">Agentic AI</Text> verified by{' '}
        <Text weight="semibold">mathematical optimization</Text>, <Text weight="semibold">knowledge-graph RAG</Text>{' '}
        that cites its sources, and forecasts turned into procurement and production plans across refining,
        petrochemicals, manufacturing and consulting.
      </>
    ),
    contactCta: 'Get in touch',
    projectsCta: 'View projects',
  },
  sections: {
    experience: {
      title: 'Work Experience',
      subtitle: 'From research labs to top-tier consulting firms — driving AI transformation across industries.',
    },
    research: {
      title: 'Research & Activities',
      subtitle:
        'Graduate research with industry partners and government R&D — turning predictions, models and guidelines into decisions engineers can act on.',
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Selected work spanning agentic AI, optimization, knowledge graphs, and decision support.',
    },
    publications: {
      title: 'Publications & Presentations',
      subtitle: 'Peer-reviewed journal work and conference presentations from graduate research.',
    },
    skills: {title: 'Technical Skills', subtitle: 'Organized by domain, implementation, and tooling.'},
    languages: {title: 'Languages'},
    patents: {title: 'Patents', subtitle: 'Patent application at the intersection of AI and safety engineering.'},
    github: {title: 'GitHub Contributions', subtitle: 'Select public repositories demonstrating applied AI research.'},
    education: {title: 'Education'},
  },
  github: {
    loadError: 'Could not load contribution data.',
    loading: 'Loading contributions…',
    caption: 'github.com/jsjong98 — contribution activity',
    total: count => `${count.toLocaleString()} contributions in the last year`,
    cellTitle: (count, date) => `${count} contribution${count !== 1 ? 's' : ''} on ${date}`,
    calendarLabel: 'GitHub contribution calendar for the last year',
    less: 'Less',
    more: 'More',
  },
  projectLinkLabel: 'View on GitHub',
  contactCopy: {
    heading: 'Let\u2019s build something remarkable.',
    body: 'Open to research collaborations, consulting roles, and full-time AI engineering or product positions. Based in Korea, available globally.',
    locationLabel: 'Location',
  },
  footer: {
    copyright: '© 2026 Jonghwan Oh — AI Researcher & Engineer',
    region: 'Korea',
  },
  experience: [
    {
      period: 'Jul 2026 – Present',
      company: 'Enhans',
      location: 'Seoul, Korea',
      role: 'AI Engineer',
      badge: {label: 'Current', variant: 'info'},
      points: [
        'Refinery Company — production re-planning PoC (3-person team): owned the end-to-end pipeline design, the shortfall LP model, and the site-constraint checker — event interpretation → impact assessment → shortfall calculation → re-planning → downstream validation → comparison report',
        'Extracted constraints from the client’s two planning-system model files (crude blending & downstream operations), merged them with unwritten site rules, and codified 20 feasibility rules that screen AI-proposed adjustments before the HiGHS-based LP recomputes crude-group shortfalls',
        'Fed rejection reasons back into the agent’s next attempt and attached attempt history and margin impact to each candidate plan; the team produced a zero-shortfall adjustment for the representative scenario, shared at the client’s interim review',
        'Refinery Company — equipment ontology project (ongoing): gathering requirements through interviews with mechanical, instrumentation, electrical and equipment engineering teams, defining scope, and designing an ontology that links equipment data and maintenance history for a troubleshooting assistant (ontology design in progress; chatbot development not yet started)',
      ],
    },
    {
      period: 'Feb 2026 – Jun 2026',
      company: 'PwC Strategy&',
      location: 'Seoul, Korea',
      role: 'Research Assistant',
      points: [
        'Drafted the decision criteria and built an AI classifier to assess AI applicability for ~4,000 HR tasks across 6 group affiliates — a staged check of legal/regulatory constraints, decision & approval accountability, and need for human interaction, with later stages skipped once a task is judged human-owned',
        'Reviewed classifications at the sub-task level with the team, e.g. splitting affiliate opinion-gathering into AI-sent requests and human analysis',
        'Contributed to evaluating and sequencing 67 priority initiatives into a phased roadmap; proposed data-readiness as a sequencing criterion, build-vs-buy comparison, and pilot-team roles, KPIs and review checkpoints',
      ],
    },
    {
      period: 'Dec 2025 – Jan 2026',
      company: 'Boston Consulting Group',
      location: 'Seoul, Korea',
      role: 'Research Analyst',
      points: [
        'Built a production-planning optimization model for 1,000+ electronic-materials product families with a team of 3 consultants — owning data preparation, model design & implementation, and scenario analysis',
        'Prepared and joined production/sales interviews, then encoded customer due dates as hard constraints (0-day delay for priority customers, ≤7 days for others) and changeover downtime as the objective, including inter-plant volume reallocation',
        'Ran constraint scenarios for joint production–sales reviews; the model produced a plan with 20% less changeover downtime than the existing plan, which became the baseline for the joint review',
      ],
    },
    {
      period: 'Aug 2025 – Sep 2025',
      company: 'PwC Strategy&',
      location: 'Seoul, Korea',
      role: 'Research Assistant',
      points: [
        'Designed the analysis architecture, built models, and integrated results for an internal employee-attrition prediction project using synthetic employee data built on the IBM HR dataset (1,470 employees)',
        'Split the problem into 5 analysis modules — HR records (XGBoost + SHAP), behavioral change (Transformer autoencoder anomaly score), organizational relationships, sentiment/burnout text signals, and external labor market',
        'Implemented the integration logic combining expert AHP weights and Bayesian-optimized weights 50/50 into Low / Potential / High risk tiers; the team placed 4th of 76 teams in the firm’s internal AI competition',
      ],
    },
  ],
  research: [
    {
      period: 'Jul 2024 – Jun 2025',
      company: 'Petrochemical Company L',
      location: 'Korea · Industry Collaboration',
      role: 'AI-based Petrochemical Plant Decision-Making Platform',
      badge: {label: 'Industry', variant: 'neutral'},
      points: [
        'Selected variables from ~80 time series (crude, product prices, FX, …) by grouping correlated variables and picking the most naphtha-correlated one from each group, for short- and long-term price forecasting',
        'Designed the purchase-window scoring method: each daily forecast awards 3/2/1 points to the cheapest candidate windows, accumulated across updates, and surfaced with price trends and key drivers in the decision tool',
        'A back-test over 21 half-month purchase periods showed an average 0.42% potential saving versus actual purchase prices (premium excluded)',
      ],
    },
    {
      period: 'Mar 2023 – Dec 2024',
      company: 'KEIT',
      location: 'Korea · Government R&D',
      role: 'Data-driven Engineering Rule Library for Automated Design-Error Verification',
      badge: {label: 'Gov R&D', variant: 'neutral'},
      points: [
        'Structured 242 safety guidelines (238 KOSHA, 4 OSHA) into a hierarchical knowledge base and implemented it as a Neo4j knowledge graph that preserves each clause’s parent context',
        'Designed the KG-RAG Q&A flow — LLM-generated Cypher queries with direct and multi-hop retrieval — reaching 95% average accuracy across the 242 guidelines; filed as a Korean patent',
        'Also worked on upgrading the guideline classification model and a life-cycle environmental-impact calculation engine',
      ],
    },
    {
      period: 'May 2023 – Oct 2023',
      company: 'SKKU Startup Support Foundation',
      location: 'Suwon, Korea · Lab Startup Club',
      role: 'President & Development Lead — ADSP',
      badge: {label: 'Award', variant: 'neutral'},
      points: [
        'Interviewed process engineers from industry to turn repetitive manual design work into requirements: automated condition input, automated economic evaluation, and environmental assessment',
        'Built the ADSP MVP: explores design alternatives from feed conditions and target product, with Pareto optimization of economics vs. CO₂ emissions and life-cycle assessment',
        'Received the Excellent Club Award',
      ],
    },
  ],
  projects: [
    {
      name: 'Refinery Re-planning Agent PoC',
      context: 'Agentic AI · Optimization · Refinery Company',
      description:
        'An AI agent proposes production-plan adjustments when crude cargoes are delayed; 20 codified site rules screen each proposal and a HiGHS-based LP verifies that crude-group shortfalls are resolved. Rejection reasons feed the next attempt, and every candidate carries its attempt history and margin impact.',
      tags: ['LLM Agent', 'Linear Programming', 'HiGHS', 'Python'],
    },
    {
      name: 'Agentic AI System',
      context: 'Multi-Module Attrition Prediction · PwC',
      description:
        'Five analysis modules — HR records (XGBoost + SHAP), behavioral anomalies (Transformer autoencoder), relationships, text sentiment, and external market — combined with AHP + Bayesian-optimized weights into three risk tiers. Placed 4th of 76 teams in an internal AI competition.',
      tags: ['LangGraph', 'XGBoost', 'SHAP', 'Transformer', 'Neo4j', 'React'],
      href: 'https://github.com/jsjong98/Agentic_AI_system',
    },
    {
      name: 'AX Lens System',
      context: 'HR Task Classification · PwC',
      description:
        'Classifies ~4,000 HR tasks across 6 affiliates as AI- or human-owned with a 3-stage knock-out LLM logic (regulation → accountability → human interaction), keeping the reasoning for each decision reviewable by consultants.',
      tags: ['LLM', 'FastAPI', 'Next.js', 'TypeScript'],
      href: 'https://github.com/jsjong98/ax-lens-system',
    },
    {
      name: 'Production Planning Optimizer',
      context: 'Operations Research · BCG',
      description:
        'Planning model for 1,000+ product families that minimizes changeover downtime while holding customer due dates as constraints (0 days for priority customers, ≤7 days otherwise) and allowing inter-plant reallocation. 20% less changeover downtime than the existing plan.',
      tags: ['CP-SAT', 'Mixed-Integer Modeling', 'OR-Tools', 'Manufacturing'],
    },
    {
      name: 'Naphtha Price Forecasting Platform',
      context: 'Time-Series · Procurement Decisions',
      description:
        'Short- and long-term naphtha price forecasts from ~80 variables, turned into a cumulative 3/2/1 score for candidate purchase windows. A 21-period back-test showed an average 0.42% potential saving.',
      tags: ['Time-Series', 'Forecasting', 'Feature Selection', 'Decision Support'],
      href: 'https://github.com/jsjong98/Mopj-project',
    },
    {
      name: 'Safety Knowledge Graph Chatbot',
      context: 'Knowledge Graph · RAG · Patent Filed',
      description:
        'KG-RAG assistant over 242 KOSHA/OSHA safety guidelines. LLM-generated Cypher retrieves clauses across up to five hierarchy levels — e.g. finding a minimum-flow-line exception a baseline LLM missed — with 95% average accuracy.',
      tags: ['RAG', 'Neo4j', 'LLM-Cypher', 'NLP'],
    },
  ],
  skillGroups: [
    {
      label: 'AI Domains',
      color: 'cyan',
      items: [
        'Agentic AI (Multi-Agent)',
        'Knowledge Graph · RAG',
        'eXplainable AI (XAI)',
        'Time-Series Forecasting',
        'Mathematical Optimization (LP / MIP)',
        'Uncertainty Quantification',
        'NLP',
      ],
    },
    {
      label: 'Models & Algorithms',
      color: 'purple',
      items: [
        'XGBoost',
        'SHAP / LIME',
        'LLM Integration (GPT-4o/5)',
        'Transformer Autoencoder',
        'GRU / LSTM / Attention',
        'DNN Surrogate Models',
        'PyTorch',
        'HiGHS / CP-SAT',
      ],
    },
    {
      label: 'Frameworks & Orchestration',
      color: 'blue',
      items: ['Python', 'LangGraph', 'LangChain', 'FastAPI', 'React / Next.js', 'TypeScript'],
    },
    {
      label: 'Data, Process & Infrastructure',
      color: 'gray',
      items: [
        'Neo4j (Graph DB)',
        'NumPy / Pandas',
        'Aspen Plus',
        'MATLAB',
        'Docker / Compose',
        'Git',
        'Railway (Cloud Deploy)',
      ],
    },
  ],
  languages: [
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
  ],
  patent: {
    number: 'Korean Patent Application · 10-2025-0006400 · Filed Jan 15, 2025 · Co-inventor',
    title:
      'Chemical Safety Guideline Question-Answering AI Service System Based on Knowledge Graph–Retrieval Augmented Generation, and Its Operating Method',
    description:
      'Preserves the hierarchy of safety guidelines (title, scope, body, sub-clauses) as a Neo4j knowledge graph; an LLM turns questions into Cypher queries that retrieve directly and multi-hop connected clauses, so answers cite the exact conditions and exceptions engineers need.',
  },
  publications: [
    {
      kind: 'Journal',
      title:
        'Sustainable hydrogen production from biogas under operational variability: Feed forecasting with a rolling horizon scheduling strategy',
      venue: 'Journal of Cleaner Production (Elsevier, SCIE) · Vol. 554, 148139',
      date: 'Apr 2026',
      authorship: 'Co-author (3 / 4)',
      href: 'https://doi.org/10.1016/j.jclepro.2026.148139',
    },
    {
      kind: 'Conference',
      title: 'Extrapolation Error Quantification for the Discovery of Optimal Experimental Conditions',
      venue: '2024 AIChE Annual Meeting · Poster',
      date: 'Oct 2024',
      authorship: 'First author (1 / 7)',
    },
    {
      kind: 'Conference',
      title: 'Investment risk management of hydrogen production process design via parameter uncertainty quantification',
      venue: 'ASCON-IEEChE 2023 · Oral',
      date: 'Nov 2023',
      authorship: 'First author',
      award: 'Best Paper Award',
    },
  ],
  repos: [
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
  ],
  education: [
    {
      period: 'Since Mar 2023',
      degree: 'Integrated M.S./Ph.D. Program in Chemical Engineering (Coursework Completed)',
      school: 'Sungkyunkwan University — Suwon, Korea',
      detail: 'GPA: 4.1 / 4.5 · Intelligent Process Systems Lab · AI for process safety & industrial optimization',
    },
    {
      period: 'Mar 2017 – Feb 2023',
      degree: 'Bachelor of Applied Chemical Engineering',
      school: 'Chungnam National University — Daejeon, Korea',
      detail: 'Applied Chemical Engineering · Foundation in process systems & chemistry',
    },
  ],
  contact: {
    linkedin: 'https://linkedin.com/in/jonghwan-oh/',
    github: 'https://github.com/jsjong98',
    location: 'Seongnam-si, Gyeonggi-do, South Korea',
  },
};

export interface Project {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  year: string;
  status: 'live' | 'idle' | 'offline' | 'wip';
  tags: string[];
  liveUrl?: string;
  notesUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'alcyone',
    number: '01',
    title: 'Alcyone — Crypto Trading Bot',
    tagline: '24/7 ML-driven trading on a Raspberry Pi',
    description:
      '9-layer signal engine, 46 ML features, CNN-LSTM + stacked ensemble, regime detection. CPCV validation, Boruta feature selection. Runs 24/7 on Pi 5 with $100 testnet balance.',
    longDescription:
      'A scientific trading bot built on first principles: 9 weighted signal layers (trend, momentum, volatility, volume, sentiment, ML, Ichimoku, candlestick patterns, statistical models). 46 features pass through Boruta selection and CPCV validation before the stacked ensemble (LightGBM + XGBoost + RF + ExtraTrees → RidgeClassifier meta-learner) makes a call. Hosted live on a Pi 5, with a TradingView-style dashboard accessible via Cloudflare Tunnel. Anti-fabrication built in — every metric must trace back to verified data.',
    year: '2026',
    status: 'live',
    tags: ['python', 'pytorch', 'binance api', 'pi 5', 'cnn-lstm'],
    liveUrl: 'https://trading.msbel.com',
    notesUrl: '/projects/alcyone',
    repoUrl: 'https://github.com/msbel5/alcyone-trading-bot',
    featured: true,
  },
  {
    slug: 'pegasus',
    number: '02',
    title: 'Pegasus — AI Test Generation Agent',
    tagline: 'E2E tests authored by an LLM that watches the screen',
    description:
      'Production-ready Selenium/Gauge specs generated from a 28-locator JSON in 2 hours. Snapshot-based discovery, locator auto-extraction, and a step catalog DSL that any QA engineer can extend.',
    longDescription:
      'Demonstrated against the Pegasus Airlines booking flow on webct.flypgs.com — full happy path from search to /payment with PNR, in 1 minute 41 seconds. Locator JSON drives 14+ derived test cases. The agent operates in three loops: discover (snapshot the page, extract elements), compose (build a Gauge spec from the step catalog), and verify (run, check, iterate). No fragile XPaths — only data-testid and id selectors.',
    year: '2026',
    status: 'wip',
    tags: ['selenium', 'gauge', 'java', 'claude api', 'qa automation'],
    liveUrl: 'https://qa.msbel.com',
    notesUrl: '/projects/pegasus',
    featured: true,
  },
  {
    slug: 'ember',
    number: '03',
    title: 'Ember — AAA RPG in Unity',
    tagline: 'Morrowind-inspired open world, hand-crafted',
    description:
      'After AI-assisted prototypes proved unplayable, this is the deliberate version: written from scratch in Unity, top-down perspective, deep simulation in the spirit of Dwarf Fortress and RimWorld. A long-game labour of love.',
    longDescription:
      'The lesson from the AI-generated prototype was clear: large language models can scaffold a codebase in a day, but they cannot author game feel. Ember is the answer — built by hand, system by system, with each mechanic earned. Top-down perspective for clarity, deep RPG systems in the Morrowind tradition, faction simulation in the Dwarf Fortress / RimWorld vein. Slow, intentional, designed to be played.',
    year: '2026',
    status: 'wip',
    tags: ['unity', 'c#', 'game design', 'rpg', 'simulation'],
    notesUrl: '/projects/ember',
    repoUrl: 'https://github.com/msbel5/ember-rpg',
    featured: true,
  },
  {
    slug: 'health-monitor',
    number: '04',
    title: 'HealthMonitor — Personal Health Dashboard',
    tagline: 'Self-hosted health tracking, no SaaS subscription',
    description:
      '.NET 8 backend, web dashboard, sleep + steps + heart rate aggregation. The "$5/month app you don\'t need to pay for" thesis, applied to personal health.',
    year: '2025',
    status: 'idle',
    tags: ['.net 8', 'c#', 'sqlite', 'self-hosted'],
    liveUrl: 'https://health.msbel.com',
    notesUrl: '/projects/health-monitor',
    repoUrl: 'https://github.com/msbel5/HealthMonitorApp',
  },
  {
    slug: 'pi-tablet-bridge',
    number: '05',
    title: 'Pi-Tablet Bridge',
    tagline: 'Raspberry Pi as a peripheral I/O bus for Android',
    description:
      'Java daemon on Pi exposes GPIO, serial, and sensor data over a local socket. Android tablet becomes the display + control surface. Used during the Alcyone build for live monitoring.',
    year: '2025',
    status: 'idle',
    tags: ['java', 'android', 'raspberry pi', 'gpio'],
    repoUrl: 'https://github.com/msbel5/pi-tablet-bridge',
  },
  {
    slug: 'dnd-ai',
    number: '06',
    title: 'DnD AI — Telegram Dungeon Master',
    tagline: 'Local LLM + Claude orchestration, playable D&D',
    description:
      'Telegram bot interface, mixed local model (Ollama qwen3) + cloud LLM orchestration. Designed as a research-grade testbed for multi-agent dialog systems before Ember.',
    year: '2026',
    status: 'wip',
    tags: ['telegram bot', 'ollama', 'claude api', 'multi-agent'],
    liveUrl: 'https://dnd.msbel.com',
    notesUrl: '/projects/dnd-ai',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

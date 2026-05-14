export interface Project {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  heroImage?: string;
  heroImageAlt?: string;
  year: string;
  status: 'live' | 'idle' | 'offline' | 'wip' | 'archived';
  tags: string[];
  liveUrl?: string;
  notesUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  // ─── 2026 - current fleet ───────────────────────────────────────

  {
    slug: 'alcyone',
    number: '01',
    title: 'Alcyone - Crypto Trading Bot',
    tagline: '24/7 ML-driven trading on a Raspberry Pi 5',
    description:
      '9-layer signal engine. 46 ML features. CNN-LSTM + a stacked ensemble (LightGBM + XGBoost + RF + ExtraTrees → RidgeClassifier meta). CPCV validation, Boruta feature selection, regime detection. Lives on a Pi 5 with $100 testnet balance, 24/7.',
    longDescription:
      'A scientific trading bot built on first principles. Nine weighted signal layers (trend, momentum, volatility, volume, sentiment, ML, Ichimoku, candlestick patterns, statistical models). Forty-six features pass through Boruta selection and CPCV validation before the stacked ensemble makes a call. The Pi 5 hosts the live dashboard via Cloudflare Tunnel - TradingView-style candle chart, regime indicator, real-time per-coin signal breakdown. Anti-fabrication built in: every metric on the dashboard must trace back to verified data, or it gets a " - ".',
    year: '2026',
    status: 'live',
    tags: ['python', 'pytorch', 'binance api', 'pi 5', 'cnn-lstm', 'ml-ops'],
    notesUrl: '/projects/alcyone',
    repoUrl: 'https://github.com/msbel5/alcyone-trading-bot',
    featured: true,
  },
  {
    slug: 'thalamus',
    number: '02',
    title: 'Thalamus - OpenClaw Packet Handoff',
    tagline: 'Context routing for multi-agent crews on a Raspberry Pi 5',
    description:
      'Community plugin for OpenClaw. Replaces full transcript handoff with a compact packet reference that resolves only the atoms a sub-agent needs. Runs with a local vector store, Qwen3-Embedding-0.6B on Pi CPU, and a FAISS RaBitQ codebook.',
    longDescription:
      'Thalamus is the routing layer for agent crews that should not keep re-pasting whole transcripts. Captain emits a packet_id, resolver_key, and inline_vector; the receiver resolves relevant atoms from local storage. The honest measured number is a 19.1 percent reduction on sampled Captain spawn context. Larger earlier figures are treated as direction signals, not claims.',
    heroImage: '/thalamus-diagram.svg',
    heroImageAlt:
      'Thalamus packet handoff diagram showing Captain, packet reference, vector store, and sub-agent resolution.',
    year: '2026',
    status: 'live',
    tags: ['openclaw', 'mcp', 'plugin', 'rag', 'faiss', 'qwen3', 'pi 5'],
    notesUrl: '/projects/thalamus',
    repoUrl: 'https://github.com/msbel5/openclaw-thalamus',
    featured: true,
  },
  {
    slug: 'pegasus',
    number: '03',
    title: 'Pegasus - AI Test Generation Agent',
    tagline: 'E2E tests authored by an LLM that watches the screen',
    description:
      'Production-ready Selenium/Gauge specs generated from a 28-locator JSON in two hours. Snapshot-based discovery, locator auto-extraction, a step catalog DSL any QA engineer can extend. Demonstrated against a major airline\'s booking flow - reached /payment with a real reservation number in 1m41s.',
    longDescription:
      'The agent operates in three loops. <em>Discover</em>: snapshot the page, extract elements, deduplicate. <em>Compose</em>: build a Gauge spec from the step catalog ("Click X", "Enter Y into Z", "Dump page snapshot to W"). <em>Verify</em>: run, check, iterate. No fragile XPaths - only data-testid and id selectors. The airline demo produced a happy path that runs in 1 minute 41 seconds, with 7 step snapshots as audit trail. Same locator JSON yields 14+ derived test cases.',
    year: '2026',
    status: 'wip',
    tags: ['selenium', 'gauge', 'java', 'claude api', 'qa automation'],
    notesUrl: '/projects/pegasus',
    featured: true,
  },
  {
    slug: 'ember',
    number: '04',
    title: 'Ember - RPG, by hand',
    tagline: 'Morrowind in spirit, RimWorld in scope, hand-crafted in Unity',
    description:
      'After AI-assisted prototypes proved unplayable, this is the deliberate version. Top-down perspective, deep RPG simulation, written from scratch in Unity. A long-game labour of love.',
    longDescription:
      'The lesson from the AI-generated prototype was clear: large language models can scaffold a codebase in a day, but they cannot author <em>game feel</em>. Ember is the answer - built by hand, system by system, with each mechanic earned. Top-down perspective for clarity, deep RPG systems in the Morrowind tradition, faction simulation in the Dwarf Fortress / RimWorld vein. Slow, intentional, designed to be played.',
    year: '2026',
    status: 'wip',
    tags: ['unity', 'c#', 'game design', 'rpg', 'simulation'],
    notesUrl: '/projects/ember',
    repoUrl: 'https://github.com/msbel5/ember-crpg-unity',
    featured: true,
  },
  {
    slug: 'pixel-agents',
    number: '05',
    title: 'Pixel Agents',
    tagline: 'A pixel-art office full of AI agents',
    description:
      'A whimsical TypeScript prototype: agents as pixel sprites moving around a virtual office, each role embodied. Started as a visualisation experiment for multi-agent dialog systems before the Ember pivot.',
    year: '2026',
    status: 'idle',
    tags: ['typescript', 'pixel art', 'multi-agent', 'visualisation'],
    repoUrl: 'https://github.com/msbel5/pixel-agents-claude',
  },

  // ─── 2026 - infra ─────────────────────────────────────────────

  {
    slug: 'pi-tablet-bridge',
    number: '06',
    title: 'Pi-Tablet Bridge',
    tagline: 'Raspberry Pi as an input/output peripheral for an Android tablet',
    description:
      'Java daemon on the Pi exposes GPIO, serial, and sensor data over a local socket. The tablet becomes the display + control surface. Used during the Alcyone build for live monitoring without a monitor.',
    year: '2026',
    status: 'idle',
    tags: ['java', 'android', 'raspberry pi', 'gpio'],
    repoUrl: 'https://github.com/msbel5/pi-tablet-bridge',
  },
  {
    slug: 'dnd-ai',
    number: '07',
    title: 'DnD AI - Telegram Dungeon Master',
    tagline: 'Local LLM + Claude orchestration, playable D&D',
    description:
      'Telegram bot interface, mixed local model (Ollama qwen3) plus cloud LLM orchestration. Designed as a research-grade testbed for multi-agent dialog systems before Ember.',
    year: '2026',
    status: 'wip',
    tags: ['telegram bot', 'ollama', 'claude api', 'multi-agent'],
    notesUrl: '/projects/dnd-ai',
  },

  // ─── 2025 - automation work ───────────────────────────────────

  {
    slug: 'master-automation',
    number: '08',
    title: 'masterAutomation',
    tagline: 'A unified Selenium / Appium harness for web, Android, iOS',
    description:
      'Single Java project, three runtime profiles. Locator JSON + step catalog pattern that became the blueprint for Pegasus a year later.',
    year: '2025',
    status: 'idle',
    tags: ['java', 'selenium', 'appium', 'cross-platform'],
    repoUrl: 'https://github.com/msbel5/masterAutomation',
  },

  // ─── 2024 - agentic + crypto ──────────────────────────────────

  {
    slug: 'dailog',
    number: '09',
    title: 'dAIlog - Multi-agent framework, Jan 2024',
    tagline: 'A seven-agent GPT-3.5 / GPT-4 system from January 2024, before agentic coding became mainstream.',
    description:
      'A C# / Python hybrid: ASP.NET API on top of an AutoGen-based Python service running seven agents - Coder, Data_analyst, Engineer, Scientist, Planner, Critic, Executor - coordinated by a ModifiedUserProxyAgent. Built and posted publicly in January 2024, when the word "agentic" was still mostly papers.',
    longDescription:
      'The Python service spun up a real GroupChat: a user prompt would trigger Planner → Engineer (writes code) → Scientist (no code, classifies/reads) → Critic (doublechecks claims and source URLs) → Executor (runs the code) → loop until termination. Each agent had a real system prompt; the whole thing ran on gpt-3.5-turbo and gpt-4 with autogen.config_list_from_json. The C# layer handled auth, history persistence, and the chat UI. The internal product proposal went nowhere. Six months later the same primitive was the entire industry.',
    year: '2024',
    status: 'archived',
    tags: ['c#', 'python', 'autogen', 'multi-agent', 'gpt-3.5', 'gpt-4', 'asp.net'],
    repoUrl: 'https://github.com/msbel5/dAIlog',
  },
  {
    slug: 'quantum-trader',
    number: '10',
    title: 'QuantumTrader',
    tagline: 'C# trading sandbox - predecessor to Alcyone',
    description:
      'A WPF/.NET trading simulator. Backtested simple strategies on historical data and plotted PnL curves. Early work that clarified why indicator-only retail bots usually lose money.',
    year: '2024',
    status: 'archived',
    tags: ['c#', 'wpf', 'backtesting', '.net'],
    repoUrl: 'https://github.com/msbel5/QuantumTrader',
  },
  {
    slug: 'traderboy',
    number: '11',
    title: 'traderBoy',
    tagline: 'Python TA-Lib indicator playground',
    description:
      'Flask front-end over a TA-Lib indicator engine. A workbench for testing technical indicators side-by-side. The codebase later seeded the Alcyone signal layer architecture.',
    year: '2024',
    status: 'archived',
    tags: ['python', 'flask', 'ta-lib', 'technical analysis'],
    repoUrl: 'https://github.com/msbel5/traderBoy',
  },
  {
    slug: 'curl-generator',
    number: '12',
    title: 'curlgenerator',
    tagline: 'Generate cURL requests from OpenAPI / Swagger specs',
    description:
      'Small C# utility - drop in a Swagger JSON, get a runnable cURL command per endpoint. Useful for QA test bootstrapping and API smoke tests. Built into HealthMonitor.',
    year: '2024',
    status: 'idle',
    tags: ['c#', 'openapi', 'swagger', 'qa tooling'],
    repoUrl: 'https://github.com/msbel5/curlgenerator',
  },

  // ─── 2023 - health monitor + QA tools ─────────────────────────

  {
    slug: 'health-monitor',
    number: '13',
    title: 'HealthMonitor',
    tagline: 'API health dashboard - upload OpenAPI, get continuous monitoring',
    description:
      '.NET 8 backend, web dashboard. Upload OpenAPI documents, generate cURL commands, run automated health checks, custom assertions, notifications. Self-hosted alternative to several SaaS offerings. The "$5/month app you don\'t need to pay for" thesis applied to API monitoring.',
    year: '2023',
    status: 'idle',
    tags: ['.net 8', 'c#', 'sqlite', 'self-hosted', 'qa'],
    notesUrl: '/projects/health-monitor',
    repoUrl: 'https://github.com/msbel5/HealthMonitorApp',
  },
  {
    slug: 'dungeons-and-you',
    number: '14',
    title: 'DungeonsAndYou',
    tagline: 'AI-powered tabletop RPG, OGL-compliant - the Ember ancestor',
    description:
      'A C# / .NET 8 backend for an AI-driven tabletop simulator that respected the Open Game License framework. Three-tier architecture (Data / Services / API), JWT auth, AI-generated storylines via HttpClient. The first serious attempt at the RPG idea Ember now carries.',
    year: '2023',
    status: 'archived',
    tags: ['c#', '.net 8', 'rpg', 'ai-driven', 'jwt'],
    repoUrl: 'https://github.com/msbel5/DungeonsAndYou',
  },
  {
    slug: 'selenium-example-v2',
    number: '15',
    title: 'seleniumExampleV2',
    tagline: 'Selenium harness against a real e-commerce site - second iteration',
    description:
      'A more disciplined take on the discovery / locator / test pattern, using a major Turkish e-commerce site as a real-world target. Surfaced the locator-JSON approach that became standard in later automation work.',
    year: '2023',
    status: 'archived',
    tags: ['java', 'selenium', 'qa'],
    repoUrl: 'https://github.com/msbel5/seleniumExamplev2',
  },

  // ─── 2019 - first RPG attempt ─────────────────────────────────

  {
    slug: 'mve',
    number: '16',
    title: 'MvE - Mahzenler ve Evrenler',
    tagline: 'A direct Turkish translation of "Dungeons and Dragons". 2019. Six years before the movie.',
    description:
      '"Mahzenler ve Evrenler" is the most literal Turkish translation of "Dungeons & Dragons" you can write. A multi-project C# solution (BLL, DAL, UI, UnitTests, Tester). The architecture is naive in retrospect, but the ambition is the same one Ember now carries - a real RPG, faithful to the source, built in Turkish first. Every later RPG attempt answers a question this codebase asked. The opportunity for a faithful Turkish-language D&D project was already visible in 2019. Lesson logged.',
    year: '2019',
    status: 'archived',
    tags: ['c#', 'rpg', 'd&d', 'first attempt', 'turkish'],
    repoUrl: 'https://github.com/msbel5/MvE',
  },

  // ─── 2020 - academic ML projects (M.Sc.) ──────────────────────

  {
    slug: 'image-processing-defect-detection',
    number: '17',
    title: 'Defect Detection by Image Processing',
    tagline: 'CNN + VGG16 transfer learning, 40,000 images, 98.3% test accuracy',
    description:
      '"Detection of Defects Occurred in Assembly Line by Image Processing" - a parallel master\'s project alongside the predictive-maintenance thesis. Trained on a balanced dataset of 40,000 cement-surface images, 80/20 train/test split, transfer-learning from open-source VGG16, sweeps over learning rate / node count / dataset size. Final test accuracy 98.3%. The framing: prognostics for cement-based household goods - catch surface cracks before they become field failures. An intellectual bridge between mechanical engineering training and QA engineering practice.',
    year: '2020',
    status: 'archived',
    tags: ['cnn', 'vgg16', 'transfer learning', 'image processing', 'msc', 'defect detection'],
  },

  // ─── 2026-04 - last week's QA work ───────────────────────────

  {
    slug: 'example-bank-test-automation',
    number: '18',
    title: 'ExampleBank Test Automation',
    tagline: 'AI Snapshot + Locator/Test Autogen - direct Pegasus ancestor',
    description:
      'Gauge-based test automation for an "Example Bank" web app, with the same AI Snapshot + Locator/Test Autogen flow that Pegasus now uses. README contains a full Step Catalog auto-generated from @Step annotations, and "golden rules" for the autogen pipeline (locator JSONs, double-quoted parameters, no improvised steps). Last week\'s private repo - the bridge between masterAutomation and Pegasus.',
    year: '2026',
    status: 'archived',
    tags: ['java', 'gauge', 'ai-autogen', 'qa', 'private'],
  },

  // ─── 2023-10 - the CodeBERT month ──────────────────────────────

  {
    slug: 'code-glimmer',
    number: '19',
    title: 'CodeGlimmer',
    tagline: 'AI-powered code description generator - GPT-3 + CodeBERT, Oct 2023',
    description:
      'A Java app that parses code (classes, methods, fields, annotations) and generates human-readable descriptions using OpenAI GPT-3 and HuggingFace CodeBERT. Customizable description templates, integrates with Java codebases. The first serious CodeBERT integration in the archive, plus a useful lesson: a GPT2-style chatbot fed through CodeBERT\'s tokenizer without fine-tuning will repeat apology loops forever.',
    year: '2023',
    status: 'archived',
    tags: ['java', 'codebert', 'openai', 'huggingface', 'documentation'],
    repoUrl: 'https://github.com/msbel5/CodeGlimmer',
  },

  // ─── 2018 - first deployed app ───────────────────────────────

  {
    slug: 'koexamapp',
    number: '20',
    title: 'KOExamApp',
    tagline: 'First publicly deployed app: an interactive quiz built on Wired.com RSS',
    description:
      'Hosted at koexamapp.msbel.com (msbel.com was already live in 2018, this used a subdomain). Teachers create quizzes from articles auto-fetched via Wired.com RSS, or write their own. Students take exams on a single page; jQuery dynamically updates the page after submission to show correct/incorrect answers in colour - no full reload, an SPA five years before Astro existed. Built as a job interview project. BLL/DAL/UI architecture, rich text editor, full auth.',
    year: '2018',
    status: 'archived',
    tags: ['c#', 'asp.net', 'jquery', 'spa', 'rss', 'first deployed'],
    repoUrl: 'https://github.com/msbel5/KOExamApp',
  },

  // ─── 2022 - internal QA tooling ──────────────────────────────

  {
    slug: 'parser-test',
    number: '21',
    title: 'parserTest - UI-driven log parser',
    tagline: 'Turn unstructured logs into structured ones, by people who hate regex',
    description:
      'First real internal project at a previous employer - a UI-driven log extraction tool. Engineers needed to pull specific fields from messy log streams, but most QA folks will not write regex from scratch. parserTest exposes a UI for building extraction rules: point at the parts that matter, name them, choose the format, and the tool generates the regex behind the scenes. The output is a clean, queryable structured log. Years before "log analysis SaaS" had a name, this was already running for the team.',
    year: '2022',
    status: 'archived',
    tags: ['java', 'log parsing', 'regex', 'ui', 'qa tooling'],
    repoUrl: 'https://github.com/msbel5/parserTest',
  },
  {
    slug: 'viewer-test',
    number: '22',
    title: 'viewerTest - mobile UI automation, pre-Appium',
    tagline: 'Mobile UI test automation before Appium was the answer',
    description:
      'A mobile UI test automation framework built years before Appium became the standard answer. UI element discovery, gesture replay, assertion DSL - all custom. The code was later tidied and pushed to GitHub as an artefact, but it had already been running in production tests before mobile QA tooling consolidated around the current stack.',
    year: '2022',
    status: 'archived',
    tags: ['java', 'mobile automation', 'pre-appium', 'qa'],
    repoUrl: 'https://github.com/msbel5/viewerTest',
  },

  // ─── 2017 - the burst ─────────────────────────────────────────

  {
    slug: 'html-javascript-example',
    number: '23',
    title: 'HtmlJavascriptExample',
    tagline: 'A pre-React, pre-Vue, pre-Astro single-page site. October 2017.',
    description:
      'A single HTML page that serves multiple "pages" via JavaScript and AJAX - no framework, no build step. README from the time: "expandable so data can be fetched with ajax methods. Simple solution for serverless static pages." Nine years later, this site follows the same idea with more discipline.',
    year: '2017',
    status: 'archived',
    tags: ['html', 'javascript', 'ajax', 'spa', 'no-framework'],
    repoUrl: 'https://github.com/msbel5/HtmlJavascriptExample',
  },
  {
    slug: 'first-mvc-blog',
    number: '24',
    title: 'FirstMVCBlog',
    tagline: 'First ASP.NET MVC project - September 2017',
    description:
      'A blog engine written while learning MVC. Crude, earnest, working. Followed by a burst - nine repos in a single day on October 27, 2017, including TruvaTour, TourAutomation, EntityFrameworkExampleApp, UtilityBillsApplication, CSharpDesignPatternExample. The shape of someone teaching himself to ship.',
    year: '2017',
    status: 'archived',
    tags: ['c#', 'asp.net mvc', 'first repo', 'archive'],
    repoUrl: 'https://github.com/msbel5/FirstMVCBlog',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// Returns projects grouped by year, newest first.
export function projectsByYear(): Record<string, Project[]> {
  return projects.reduce<Record<string, Project[]>>((acc, p) => {
    acc[p.year] = acc[p.year] || [];
    acc[p.year].push(p);
    return acc;
  }, {});
}

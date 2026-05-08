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
  // ─── 2026 — current bench ───────────────────────────────────────

  {
    slug: 'alcyone',
    number: '01',
    title: 'Alcyone',
    tagline: 'A self-hosted AI that lives on a Raspberry Pi 5',
    description:
      'A persistent AI built on top of OpenClaw. Lives on the Pi, runs around the clock, picks up threads I have forgotten, drafts replies before I open the laptop. Telegram in and out. A paid model when it is awake on a real task; local Qwen on Ollama for the heartbeat. The Thalamus plugin (next entry) is the routing layer that keeps the context budget under control.',
    longDescription:
      'Five collaborating roles for orchestration, building, review, conversation, and memory. The interesting part of running an LLM continuously instead of on demand is what shows up between explicit requests: the agent reads its own past sessions, follows up on dangling threads, and pings me when a PR review lands at 4am. Source repos for the agent, the plugin set, and the heartbeat scripts are private until each piece is stable enough to publish.',
    heroImage: '/alcyone-diagram.svg',
    heroImageAlt: 'Alcyone five-role hub around an OpenClaw gateway on a Pi 5, with Telegram I/O and a 30-minute local-Qwen heartbeat.',
    year: '2026',
    status: 'live',
    tags: ['openclaw', 'multi-agent', 'pi 5', 'ollama', 'telegram'],
    notesUrl: '/projects/alcyone',
    featured: true,
  },
  {
    slug: 'thalamus',
    number: '02',
    title: 'Thalamus',
    tagline: 'Packet-handoff layer for multi-agent crews',
    description:
      'A community plugin for OpenClaw. Replaces "paste the whole transcript when you spawn a sub-agent" with a 3-field reference: packet_id, resolver_key, inline_vector. The receiver resolves only the atoms it needs from a local vector store. Qwen3-Embedding-0.6B runs on Pi 5 CPU via llama.cpp. A FAISS RaBitQ codebook compresses 1024-dim vectors to 128 bytes. MIT licensed. Distributed on ClawHub and npm.',
    longDescription:
      'The honest measurements come from live telemetry on the Pi. The protocol-level token compression cuts spawn context from 68 tokens to 55 across the sample runs in run_telemetry.jsonl, a 19.1 percent reduction directly visible in the data. Higher combined figures appear in earlier drafts of the README; those compare against a hypothetical naive transcript paste baseline I did not run side by side, so I treat them as a single-machine direction signal, not a benchmark. Hailo HEFs are wired for the Whisper and CLIP encoders on the AI HAT; Qwen3 stays on CPU because LLM and embedding GGUFs do not run on Hailo10H.',
    heroImage: '/thalamus-diagram.svg',
    heroImageAlt: 'Thalamus packet handoff: Captain emits a 3-field reference (packet_id, resolver_key, inline_vector) which the receiver resolves against a 9-namespace local vector store backed by Qwen3-0.6B on CPU and a FAISS RaBitQ codebook.',
    year: '2026',
    status: 'live',
    tags: ['openclaw', 'mcp', 'plugin', 'rag', 'faiss', 'qwen3', 'pi 5'],
    notesUrl: '/projects/thalamus',
    repoUrl: 'https://github.com/msbel5/openclaw-thalamus',
    featured: true,
  },
  {
    slug: 'trading-bot',
    number: '03',
    title: 'Trading Bot',
    tagline: '24/7 testnet trading on a Raspberry Pi 5',
    description:
      'A 9-layer signal engine: trend, momentum, volatility, volume, sentiment, an ML ensemble, Ichimoku, candlestick patterns, and statistical models. Forty-six features pass through Boruta selection and CPCV validation before the stacked ensemble (LightGBM, XGBoost, RF, ExtraTrees with a Ridge meta) makes a call. $100 simulated balance on Binance Testnet. Never connected to real money.',
    longDescription:
      'The dashboard runs on the Pi: candle chart, regime indicator, per-coin signal breakdown. Every metric on the dashboard traces back to a verified data source, or it gets a "—". Daily CPCV retrain at 03:00 with a PBO gate; the new model deploys only if PBO drops under 0.5. The repo is named alcyone-trading-bot because the bot was the first thing I shipped to the Pi I had named Alcyone; the AI on the Pi is the project listed above.',
    heroImage: '/trading-bot-diagram.svg',
    heroImageAlt: 'Nine-layer signal stack with regime detection bands and a daily CPCV retrain gated by PBO under 0.5.',
    year: '2026',
    status: 'live',
    tags: ['python', 'pytorch', 'binance api', 'pi 5', 'cnn-lstm', 'ml-ops'],
    notesUrl: '/projects/trading-bot',
    repoUrl: 'https://github.com/msbel5/alcyone-trading-bot',
    featured: true,
  },
  {
    slug: 'qa-automation',
    number: '04',
    title: 'QA Automation',
    tagline: 'AI test generation for Selenium and Gauge',
    description:
      'Production-ready Selenium and Gauge specs generated from a small locator JSON. Snapshot-based discovery, locator auto-extraction, a step catalog DSL any QA engineer can extend. Tested against a real consumer-facing booking flow; the happy path runs end to end in under two minutes, with full step snapshots as an audit trail.',
    longDescription:
      'Three loops. Discover snapshots the page, extracts elements, deduplicates. Compose builds a Gauge spec from the step catalog ("Click X", "Enter Y into Z", "Dump page snapshot"). Verify runs the spec, checks the result, iterates. Locator strategy is data-testid and id only; no fragile XPaths. The locator JSON is the single source of truth, and the same JSON yields more than a dozen derived test cases without manual scripting.',
    heroImage: '/qa-automation-diagram.svg',
    heroImageAlt: 'Three loops Discover, Compose, Verify, all anchored to a single locator JSON source of truth.',
    year: '2026',
    status: 'wip',
    tags: ['selenium', 'gauge', 'java', 'claude api', 'qa automation'],
    notesUrl: '/projects/qa-automation',
    featured: true,
  },
  {
    slug: 'ember',
    number: '05',
    title: 'Ember — RPG, by hand',
    tagline: 'Morrowind in spirit, RimWorld in scope, hand-crafted in Unity',
    description:
      'After AI-assisted prototypes proved unplayable, this is the deliberate version. Top-down perspective, deep RPG simulation, written from scratch in Unity. A long-game labour of love.',
    longDescription:
      'The first prototype was AI-scaffolded and unplayable. This one is built by hand, system by system, with each mechanic earned. Top-down perspective for clarity, deep RPG systems in the Morrowind tradition, faction simulation in the Dwarf Fortress and RimWorld vein. Slow and intentional.',
    heroImage: '/ember-diagram.svg',
    heroImageAlt: 'Top-down 12 by 8 grid with three NPC pawns from two factions plus a neutral, alongside a faction-relations triangle.',
    year: '2026',
    status: 'wip',
    tags: ['unity', 'c#', 'game design', 'rpg', 'simulation'],
    notesUrl: '/projects/ember',
    repoUrl: 'https://github.com/msbel5/ember-crpg-unity',
    featured: true,
  },
  {
    slug: 'pixel-agents',
    number: '06',
    title: 'Pixel Agents',
    tagline: 'A pixel-art office full of AI agents',
    description:
      'A whimsical TypeScript prototype: agents as pixel sprites moving around a virtual office, each role embodied. Started as a visualisation experiment for multi-agent dialog systems before the Ember pivot.',
    year: '2026',
    status: 'idle',
    tags: ['typescript', 'pixel art', 'multi-agent', 'visualisation'],
    repoUrl: 'https://github.com/msbel5/pixel-agents-claude',
  },

  // ─── 2026 — infra ─────────────────────────────────────────────

  {
    slug: 'pi-tablet-bridge',
    number: '07',
    title: 'Pi-Tablet Bridge',
    tagline: 'Raspberry Pi as an I/O peripheral for an Android tablet',
    description:
      'Java daemon on the Pi exposes GPIO, serial, and sensor data over a local socket. The tablet becomes the display + control surface. Used during the Alcyone build for live monitoring without a monitor.',
    year: '2026',
    status: 'idle',
    tags: ['java', 'android', 'raspberry pi', 'gpio'],
    repoUrl: 'https://github.com/msbel5/pi-tablet-bridge',
  },
  {
    slug: 'dnd-ai',
    number: '08',
    title: 'DnD AI — Telegram Dungeon Master',
    tagline: 'Local LLM + Claude orchestration, playable D&D',
    description:
      'Telegram bot interface, mixed local model (Ollama qwen3) plus cloud LLM orchestration. Designed as a research-grade testbed for multi-agent dialog systems before Ember.',
    year: '2026',
    status: 'wip',
    tags: ['telegram bot', 'ollama', 'claude api', 'multi-agent'],
    notesUrl: '/projects/dnd-ai',
  },

  // ─── 2025 — automation work ───────────────────────────────────

  {
    slug: 'master-automation',
    number: '09',
    title: 'masterAutomation',
    tagline: 'A unified Selenium / Appium harness for web, Android, iOS',
    description:
      'Single Java project, three runtime profiles. Locator JSON + step catalog pattern that became the blueprint for Pegasus a year later.',
    year: '2025',
    status: 'idle',
    tags: ['java', 'selenium', 'appium', 'cross-platform'],
    repoUrl: 'https://github.com/msbel5/masterAutomation',
  },

  // ─── 2024 — agentic + crypto ──────────────────────────────────

  {
    slug: 'dailog',
    number: '10',
    title: 'dAIlog — Multi-agent framework, Jan 2024',
    tagline: 'GPT-3.5 was new. Claude Code did not exist. OpenClaw did not exist. I had seven agents talking to each other.',
    description:
      'A C# / Python hybrid: ASP.NET API on top of an AutoGen-based Python service running seven agents — Coder, Data_analyst, Engineer, Scientist, Planner, Critic, Executor — coordinated by a ModifiedUserProxyAgent. Built and posted publicly in January 2024, when the word "agentic" was still mostly papers.',
    longDescription:
      'The Python service spun up a real GroupChat: a user prompt would trigger Planner → Engineer (writes code) → Scientist (no code, classifies/reads) → Critic (doublechecks claims and source URLs) → Executor (runs the code) → loop until termination. Each agent had a real system prompt; the whole thing ran on gpt-3.5-turbo and gpt-4 with autogen.config_list_from_json. The C# layer handled auth, history persistence, and the chat UI. I proposed it as an internal product. It went nowhere internally. Six months later the same primitive was everywhere.',
    year: '2024',
    status: 'archived',
    tags: ['c#', 'python', 'autogen', 'multi-agent', 'gpt-3.5', 'gpt-4', 'asp.net'],
    repoUrl: 'https://github.com/msbel5/dAIlog',
  },
  {
    slug: 'quantum-trader',
    number: '09',
    title: 'QuantumTrader',
    tagline: 'C# trading sandbox — predecessor to Alcyone',
    description:
      'A WPF/.NET trading simulator. Backtested simple strategies on historical data, plotted PnL curves. The first time I sat with the trading problem long enough to understand why most retail bots lose money.',
    year: '2024',
    status: 'archived',
    tags: ['c#', 'wpf', 'backtesting', '.net'],
    repoUrl: 'https://github.com/msbel5/QuantumTrader',
  },
  {
    slug: 'traderboy',
    number: '10',
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
    number: '11',
    title: 'curlgenerator',
    tagline: 'Generate cURL requests from OpenAPI / Swagger specs',
    description:
      'Small C# utility — drop in a Swagger JSON, get a runnable cURL command per endpoint. Useful for QA test bootstrapping and API smoke tests. Built into HealthMonitor.',
    year: '2024',
    status: 'idle',
    tags: ['c#', 'openapi', 'swagger', 'qa tooling'],
    repoUrl: 'https://github.com/msbel5/curlgenerator',
  },

  // ─── 2023 — health monitor + QA tools ─────────────────────────

  {
    slug: 'health-monitor',
    number: '12',
    title: 'HealthMonitor',
    tagline: 'API health dashboard — upload OpenAPI, get continuous monitoring',
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
    number: '13',
    title: 'DungeonsAndYou',
    tagline: 'AI-powered tabletop RPG, OGL-compliant — the Ember ancestor',
    description:
      'A C# / .NET 8 backend for an AI-driven tabletop simulator that respected the Open Game License framework. Three-tier architecture (Data / Services / API), JWT auth, AI-generated storylines via HttpClient. The first serious attempt at the RPG idea Ember now carries.',
    year: '2023',
    status: 'archived',
    tags: ['c#', '.net 8', 'rpg', 'ai-driven', 'jwt'],
    repoUrl: 'https://github.com/msbel5/DungeonsAndYou',
  },
  {
    slug: 'selenium-example-v2',
    number: '14',
    title: 'seleniumExampleV2',
    tagline: 'Selenium harness against a real e-commerce site — second iteration',
    description:
      'A more disciplined take on the discovery / locator / test pattern, using a major Turkish e-commerce site as a real-world target. Surfaced the locator-JSON approach that became standard in everything I built after.',
    year: '2023',
    status: 'archived',
    tags: ['java', 'selenium', 'qa'],
    repoUrl: 'https://github.com/msbel5/seleniumExamplev2',
  },

  // ─── 2019 — first RPG attempt ─────────────────────────────────

  {
    slug: 'mve',
    number: '15',
    title: 'MvE — Mahzenler ve Evrenler',
    tagline: 'A direct Turkish translation of "Dungeons and Dragons". 2019. Six years before the movie.',
    description:
      '"Mahzenler ve Evrenler" is the most literal Turkish translation of "Dungeons & Dragons" you can write. A multi-project C# solution (BLL, DAL, UI, UnitTests, Tester). The architecture is naive in retrospect, but the ambition is the same one Ember now carries: a real RPG, faithful to the source, built in Turkish first. Every RPG I have tried to build since has been an answer to a question this codebase asked. Six years later they made the movie. I had not figured out how to ship things widely yet.',
    year: '2019',
    status: 'archived',
    tags: ['c#', 'rpg', 'd&d', 'first attempt', 'turkish'],
    repoUrl: 'https://github.com/msbel5/MvE',
  },

  // ─── 2020 — academic ML projects (M.Sc.) ──────────────────────

  {
    slug: 'image-processing-defect-detection',
    number: '23',
    title: 'Defect Detection by Image Processing',
    tagline: 'CNN + VGG16 transfer learning, 40,000 images, 98.3% test accuracy',
    description:
      '"Detection of Defects Occurred in Assembly Line by Image Processing" — a parallel master\'s project alongside the predictive-maintenance thesis. Trained on a balanced dataset of 40,000 cement-surface images, 80/20 train/test split, transfer-learning from open-source VGG16, sweeps over learning rate / node count / dataset size. Final test accuracy 98.3%. The framing: prognostics for cement-based household goods — catch surface cracks before they become field failures. The intellectual bridge between the mechanical engineer I trained as and the QA engineer I became.',
    year: '2020',
    status: 'archived',
    tags: ['cnn', 'vgg16', 'transfer learning', 'image processing', 'msc', 'defect detection'],
  },

  // ─── 2026-04 — last week's QA work ───────────────────────────

  {
    slug: 'example-bank-test-automation',
    number: '16',
    title: 'ExampleBank Test Automation',
    tagline: 'AI Snapshot + Locator/Test Autogen — direct Pegasus ancestor',
    description:
      'Gauge-based test automation for an "Example Bank" web app, with the same AI Snapshot + Locator/Test Autogen flow that Pegasus now uses. README contains a full Step Catalog auto-generated from @Step annotations, and "golden rules" for the autogen pipeline (locator JSONs, double-quoted parameters, no improvised steps). Last week\'s private repo — the bridge between masterAutomation and Pegasus.',
    year: '2026',
    status: 'archived',
    tags: ['java', 'gauge', 'ai-autogen', 'qa', 'private'],
  },

  // ─── 2023-10 — the CodeBERT month ──────────────────────────────

  {
    slug: 'code-glimmer',
    number: '17',
    title: 'CodeGlimmer',
    tagline: 'AI-powered code description generator — GPT-3 + CodeBERT, Oct 2023',
    description:
      'A Java app that parses code (classes, methods, fields, annotations) and generates human-readable descriptions using OpenAI GPT-3 and HuggingFace CodeBERT. Customizable description templates, integrates with Java codebases. The first repo where I integrated CodeBERT seriously — and the project that produced the famous "I\'m so sorry! I\'m so sorry!" infinite-loop screenshot a friend turned into an Instagram story. (A GPT2-style chatbot fed through CodeBERT\'s tokenizer without fine-tuning will, in fact, just say "I\'m so sorry" forever.)',
    year: '2023',
    status: 'archived',
    tags: ['java', 'codebert', 'openai', 'huggingface', 'documentation'],
    repoUrl: 'https://github.com/msbel5/CodeGlimmer',
  },

  // ─── 2018 — first deployed app ───────────────────────────────

  {
    slug: 'koexamapp',
    number: '18',
    title: 'KOExamApp',
    tagline: 'My first publicly-deployed app: an interactive quiz built on Wired.com RSS',
    description:
      'Hosted at koexamapp.msbel.com (msbel.com was already live in 2018, this used a subdomain). Teachers create quizzes from articles auto-fetched via Wired.com RSS, or write their own. Students take exams on a single page; jQuery dynamically updates the page after submission to show correct/incorrect answers in colour — no full reload, an SPA five years before Astro existed. Built as a job interview project. BLL/DAL/UI architecture, rich text editor, full auth.',
    year: '2018',
    status: 'archived',
    tags: ['c#', 'asp.net', 'jquery', 'spa', 'rss', 'first deployed'],
    repoUrl: 'https://github.com/msbel5/KOExamApp',
  },

  // ─── 2022 — internal QA tooling ──────────────────────────────

  {
    slug: 'parser-test',
    number: '21',
    title: 'parserTest — UI-driven log parser',
    tagline: 'Turn unstructured logs into structured ones, by people who hate regex',
    description:
      'My first real internal project at a previous employer — a UI-driven log extraction tool. Engineers needed to pull specific fields from messy log streams, but most QA folks will not write regex from scratch. parserTest exposes a UI for building extraction rules: you point at the parts you want, name them, choose the format, and the tool generates the regex behind the scenes. The output is a clean, queryable structured log. Years before "log analysis SaaS" had a name, this was already running for the team.',
    year: '2022',
    status: 'archived',
    tags: ['java', 'log parsing', 'regex', 'ui', 'qa tooling'],
    repoUrl: 'https://github.com/msbel5/parserTest',
  },
  {
    slug: 'viewer-test',
    number: '22',
    title: 'viewerTest — mobile UI automation, pre-Appium',
    tagline: 'Mobile UI test automation before Appium was the answer',
    description:
      'A mobile UI test automation framework I built years before Appium was the standard answer to anything. UI element discovery, gesture replay, assertion DSL — all custom. I tidied the project up and pushed it to GitHub years later as an artefact, but the code itself was running in production tests well before mobile QA tooling consolidated around the current stack.',
    year: '2022',
    status: 'archived',
    tags: ['java', 'mobile automation', 'pre-appium', 'qa'],
    repoUrl: 'https://github.com/msbel5/viewerTest',
  },

  // ─── 2017 — the burst ─────────────────────────────────────────

  {
    slug: 'html-javascript-example',
    number: '19',
    title: 'HtmlJavascriptExample',
    tagline: 'A pre-React, pre-Vue, pre-Astro single-page site. October 2017.',
    description:
      'A single HTML page that serves multiple "pages" via JavaScript and AJAX — no framework, no build step. README from the time: "expandable so data can be fetched with ajax methods. Simple solution for serverless static pages." Nine years later, this site you\'re reading is the same idea, just with more discipline.',
    year: '2017',
    status: 'archived',
    tags: ['html', 'javascript', 'ajax', 'spa', 'no-framework'],
    repoUrl: 'https://github.com/msbel5/HtmlJavascriptExample',
  },
  {
    slug: 'first-mvc-blog',
    number: '20',
    title: 'FirstMVCBlog',
    tagline: 'My first ASP.NET MVC project — September 2017',
    description:
      'A blog engine written while learning MVC. Crude, earnest, working. Followed by a burst — nine repos in a single day on October 27, 2017, including TruvaTour, TourAutomation, EntityFrameworkExampleApp, UtilityBillsApplication, CSharpDesignPatternExample. The shape of someone teaching himself to ship.',
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

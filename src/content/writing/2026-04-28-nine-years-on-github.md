---
title: 'Nine years on GitHub, in one afternoon'
description: 'I cloned every repo I have ever pushed and looked at them in chronological order. The shape of a self-taught engineer learning to ship, in 42 commits-per-month bursts.'
pubDate: '2026-04-28'
tags: ['notes', 'meta', 'archive']
---

I cloned every repo on `github.com/msbel5` to a single archive directory
this afternoon — 42 of them, public and private, going back to 2017 —
and read them in order. It was the kind of thing you do when someone
politely points out that your About page is too thin and you start
thinking, *all right, what's actually in the record?*

Here is the record.

## 2017 — the burst

The first repo is `FirstMVCBlog`, September 2017. A blog engine written
while learning ASP.NET MVC. Crude, earnest, working.

Then on **October 27, 2017**, I pushed *nine repos in a single day*:
`VeganCounter`, `TruvaTour`, `TourAutomation`, `LinqJsonExampleApp`,
`EntityFrameworkExampleAPP`, `UtilityBillsApplication`,
`HtmlJavascriptExample`, plus `CSharpDesignPatternExample` and
`AdoNetExample` the day after. This is the shape of someone teaching
himself to ship — not waiting for a perfect repo, just pushing the
artefact and moving on.

`HtmlJavascriptExample` deserves a footnote: it's a single-page HTML
serving multiple pages without frameworks, just JavaScript and AJAX. I
described it in the README as "expandable so data can be fetched with
ajax methods. Simple solution for serverless static pages." That
instinct — *static can do more than people think* — has resurfaced in
every site I've built since, including this one.

## 2019 — Mahzenler ve Evrenler

`MvE`, "Dungeons and Universes", is the earliest sign of the RPG
obsession that would surface every two years for the rest of my career.
A multi-project C# solution: BLL, DAL, UI, Tests, Tester. Naive
architecture. Right ambition. Every attempt I've made since —
`DungeonsAndYou` in 2023, `ember-rpg` in 2026, `ember-crpg-unity` last
month — has been an answer to questions this codebase asked.

## 2022-2023 — pivot to QA, pivot to scale

`parking-lot` and `viewerTest` (Java, 2022) mark the transition into
serious test automation. Then 2023 is a flood of QA tooling:
`seleniumExample`, `apiExample`, `seleniumExamplev2` (a major Turkish
e-commerce site used as the test target), `PostmanToCurl`,
`KarateToCurl`, `CodeGlimmer`, `HealthMonitorApp`,
`JavaFileConcatenator`. Each one a small problem solved by writing the
tool I needed.

`HealthMonitorApp` (October 2023) is the first thing I built that I
still use. .NET 8 dashboard, OpenAPI ingestion, automated cURL
generation, custom assertions. The "$5/month app you don't need to
pay for" thesis, in code form.

## 2024-01 — the agentic moment that didn't land

This is the one that hurts a little.

In January 2024, I built `dAIlog` — a multi-agent ChatGPT framework on
top of AutoGen. C# / ASP.NET on top of a Python AutoGen service. A
single user prompt would spin up a multi-agent conversation. Agents
debated, decomposed, wrote code. It worked.

I proposed it as an internal product. It went nowhere internally.

Six months later "agentic" was the word everyone was using. Devin
launched. Cursor exploded. Claude Code shipped. I had a working version
of the same primitive sitting in a private repo from January.

I am not going to claim I was first. Plenty of people had similar things
running at the same time; AutoGen itself was published. But I had it
running — and I had the proposal rejected. The lesson was about
distribution, not invention. The thing you build matters less than
where you stand when you finish it.

## 2024-02 — `traderBoy`, and trading became a real interest

Flask front-end over a TA-Lib indicator engine. Side-by-side comparisons
of MACD, RSI, EMA crossovers. The first time I sat with the trading
problem long enough to understand why most retail bots lose money:
*indicators are not signals, they are descriptions.* This thread runs
straight through `QuantumTrader` (March 2024, C# WPF backtester) into
the current `alcyone-trading-bot` and its 9-layer signal stack.

## 2024-2025 — the private automation work

Six private repos in this period: `a101ikwebautomation`,
`OrderAutomation`, `ozlukWebAutomation`, `hadiAutomation`,
`comisAutomation`, `Nop.Plugin.Payments.Iyzico`. Client work,
e-commerce flows, payment integration. The discipline of writing test
automation that has to *actually run* against real e-commerce sites,
day after day, did more to sharpen my instincts than any amount of
clean greenfield code.

## 2025-06 — `masterAutomation`

A unified Selenium / Appium harness for web, Android, and iOS — single
Java project, three runtime profiles. The locator JSON + step catalog
pattern that became the blueprint for **Pegasus** a year later.

## 2026 — the fleet

`ember-rpg`, `alcyone-trading-bot`, `pixel-agents-claude`,
`pi-tablet-bridge`, `ember-crpg-unity`, `ExampleBank_Test_Automation`,
and finally `msbel.com` — this site, the umbrella. Six months. Seven
projects. The pattern is consistent:

- **A real problem** I had myself
- **Built in public** when possible (some things are still private)
- **Self-hosted** when the SaaS alternative wanted rent
- **Released even when half-done**, then iterated

## Looking at the timeline

Reading nine years in one afternoon, the things that surprised me:

1. **The continuity is hidden.** Every project from 2017 onwards
   contains the seed of something I'd build seriously six years later.
   The HTML/JS single-page experiment in 2017 is the philosophy of
   this Astro site. The 2019 RPG is the heart of Ember. The 2023
   `seleniumExamplev2` is the pattern Pegasus uses.

2. **The "agentic moment" was 2024-01, not 2024-09.** I had a working
   multi-agent system before most of the discourse caught up. The
   lesson: have the demo *and* the distribution channel ready, or you
   are just an internal proposal.

3. **The private repos are the most honest education.** Public
   repositories perform; private client work *teaches*. Five years of
   shipping automation against e-commerce sites, payment flows, and
   real legacy systems is what makes Pegasus possible at all.

4. **No commits between archived projects.** The dead repos haven't
   been touched. That's actually a good sign — I'm not fake-committing
   to make graphs look green. If a repo is archived, it's archived
   honestly.

The fleet sails on.

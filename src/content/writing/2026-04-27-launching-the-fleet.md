---
title: 'Launching the fleet'
description: 'Why msbel.com exists, and how a senior test automation engineer ended up running a Pi 5 in his apartment around the clock.'
pubDate: '2026-04-27'
tags: ['notes', 'meta']
---

Welcome to msbel.com.

This site is the umbrella for a few things I am building outside
of my day job. The current bench:

- **Alcyone** — a self-hosted AI on a Raspberry Pi 5. Telegram in
  and out, a paid model when it is awake on a real task, local
  Qwen on Ollama for the heartbeat. The interesting part is what
  it does between explicit requests.
- **Thalamus** — a community plugin for OpenClaw that swaps
  transcript-paste handoffs for a 3-field reference resolved
  against a local vector store. MIT, on ClawHub and npm.
- **Trading bot** — 24/7 on Binance Testnet with a $100 simulated
  balance, never connected to real money. Nine signal layers, 46
  ML features, daily CPCV retrain with a PBO gate.
- **QA Automation** — an AI agent that authors Selenium and Gauge
  specs from screen snapshots. The locator JSON is the single
  source of truth.
- **Ember** — an RPG written by hand in Unity after the
  AI-scaffolded prototype proved unplayable.

The Pi runs Debian 13, hosts the trading bot, the agent stack,
and the encoder daemon. It restarts itself when load gets bad.
It is named Alcyone because that was the name I gave the AI
first; the box took the name later.

I will write here about what I learn from running this
continuously. The pieces I expect to publish first:

- **Why AI-generated games can't be played**, and what Ember
  will do differently
- **What testnet ML trading actually taught me**, the honest
  version, including the parts where the model added no signal
- **The 9-layer signal stack**, with the reasoning behind why
  each layer earned its weight
- **Setting up a Pi 5 home server** that can host a small SaaS,
  with Cloudflare Tunnel, Caddy, and zero domain DNS pain

If anything resonates, drop me a line. I am easy to find:
[github / msbel5](https://github.com/msbel5) or
[msbel5@gmail.com](mailto:msbel5@gmail.com).

Istanbul, April 2026.

---
title: 'Launching the fleet'
description: 'Why msbel.com exists, what the Bluebird is, and how a senior test automation engineer ended up running a Pi 5 trading bot at 4am.'
pubDate: '2026-04-27'
tags: ['notes', 'meta', 'alcyone']
---

Welcome to msbel.com.

This site is the umbrella for a small fleet of projects I'm building
outside of my day job — a 9-layer crypto trading bot called *Alcyone*, a
QA automation agent called *Pegasus*, an RPG written by hand in Unity
called *Ember*, a self-hosted health dashboard, and a few smaller crafts
docked alongside.

There's a Charles Bukowski poem called "Bluebird" that has lived in my
head for decades. *There's a bluebird in my heart that wants to get out.*
The bird, in my version, is also a starship — the Bluebird, captained
from Istanbul, with an AI on board named Alcyone after the brightest
star in the Pleiades. *Halcyon* is the English word for a kingfisher —
a blue bird — and also for a calm and peaceful time. The same image,
three names, all blue.

The fleet runs on a Raspberry Pi 5 in my apartment. The Pi is named
Alcyone too. It's hosting the trading bot live, with Cloudflare Tunnel
exposing the dashboard at `trading.msbel.com`. The next subdomains —
`qa`, `dnd`, `health`, `ember` — will follow as each project earns its
keep.

I'll write here about what I learn building these. The pieces I expect
to publish first:

- **Why AI-generated games can't be played**, and what *Ember* will do
  differently
- **What 6 months of testnet ML trading actually taught me** — the
  honest version, including the parts where the model added no signal
- **The 9-layer signal stack**, with the Bayesian reasoning behind why
  each layer earned its weight
- **Setting up a Pi 5 home server** that can host a small SaaS, with
  Cloudflare Tunnel, Caddy, and zero domain DNS pain

If anything resonates — especially the last one — drop me a line.
I'm easy to find: [github / msbel5](https://github.com/msbel5) or
[msbel5@gmail.com](mailto:msbel5@gmail.com).

—
Istanbul, April 2026

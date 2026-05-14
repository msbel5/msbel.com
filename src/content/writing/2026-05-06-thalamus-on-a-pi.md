---
title: 'Thalamus on a Pi: a packet-handoff layer for multi-agent crews'
description: 'Built Thalamus to stop multi-agent crews from re-pasting full transcripts every time one agent spawns another. Single-machine numbers from a Raspberry Pi 5, honestly labelled.'
pubDate: '2026-05-06'
tags: ['notes', 'thalamus', 'openclaw', 'multi-agent', 'raspberry-pi', 'release']
---

**Thalamus** shipped last week as a community plugin for OpenClaw. It
swaps the usual "paste the whole transcript when a sub-agent spawns"
pattern for a 3-field reference (`packet_id`, `resolver_key`,
`inline_vector`). The receiver resolves only the atoms it needs from a
local vector store. That is the whole idea.

This post exists because the numbers need to be labelled honestly.
Single-developer numbers are not enough to claim anything portable, and
the early framing of this work was overstated. Correcting that early is
better than discovering six months later that the only person it ever
worked for was me.

## What it is

Three plugins, all MIT licensed:

1. **openclaw-thalamus**. Packet store with content-hash resolver keys,
   vector store with 9 namespaces, an encoder daemon, a FAISS RaBitQ
   codebook, and an MCP server with six tools.
2. **openclaw-aegis-signer**. Ed25519-signed, SHA-256-chained tool-call
   audit log. The chain is tamper-evident: modifying any past entry
   breaks every signature after it.
3. **openclaw-sga-mcts-atoms**. Plan-time atom retrieval. After
   Inspector approves a session, reusable atoms are extracted into local
   SQLite storage and queried during decomposition.

Install:

```bash
openclaw plugins install clawhub:openclaw-thalamus
openclaw plugins install clawhub:openclaw-aegis-signer --dangerously-force-unsafe-install
openclaw plugins install clawhub:openclaw-sga-mcts-atoms --dangerously-force-unsafe-install
```

The last two need the unsafe-install flag because their current Node shim
spawns Python via `child_process` for the signer and the retriever. That
is correctly flagged by the dangerous-code scanner. The refactor target
is native `crypto.sign('ed25519')` and `better-sqlite3`.

## What is honestly measured

Directly measured on the live Pi 5:

- Qwen3-Embedding-0.6B Q4_0 GGUF cold load: 1.7 to 1.8 seconds.
- Qwen3 warm embed: about 167 milliseconds p50 on Pi 5 CPU via
  `llama-cpp-python`.
- BBQ codebook on 99,823 vectors with 10 percent holdout: mean cosine
  0.978, p10 0.985, p50 0.999.
- Protocol-level at-code compression: 19.1 percent token reduction on
  Captain spawn context. Telemetry rows in
  `~/.openclaw/thalamus/state/run_telemetry.jsonl` show
  `spawn_context_tokens=68` cut to `compact_context_tokens=55` in the
  sampled runs.

Estimated, not directly benchmarked:

- The "95.84 percent combined token reduction" in earlier README drafts
  combines the at-code layer with a packet-handoff layer measured against
  a hypothetical naive transcript paste baseline. I did not run the
  naive paste version side by side. The 19.1 percent figure is the
  only end-to-end number with a real before-and-after on the same
  workload.

## What is not Hailo

Hailo HEFs are wired into the encoder daemon for Whisper-encoder,
CLIP-text, and CLIP-image. The Hailo10H is detected on the Pi and the
HEFs are on disk. **The Qwen3 text embedding does not run on Hailo.**
LLM and embedding GGUFs cannot run on Hailo10H; the device is for the
audio and image encoders.

## What it runs on

- Raspberry Pi 5 4GB, Debian 13 Trixie.
- Hailo10H AI HAT for the audio and image encoder paths.
- Desktop with RTX 3070 used once for codebook training after the Pi
  could not stay up under FAISS load.
- Single solo developer. The technical claims are checked against live
  Pi state.

## Why publish it now

The project needs real users and hostile review:

1. Real-world OpenClaw crews that can compare their own before-and-after
   numbers.
2. Code review on the signer and retriever shells.
3. Adoption feedback from people who run enough agent workflows to know
   whether packet handoff is worth standardizing.

Links:

- GitHub: [github.com/msbel5/openclaw-thalamus](https://github.com/msbel5/openclaw-thalamus)
- npm: [npmjs.com/package/openclaw-thalamus](https://www.npmjs.com/package/openclaw-thalamus)
- ClawHub: `clawhub package inspect openclaw-thalamus`

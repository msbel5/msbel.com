---
title: 'Thalamus on a Pi: a packet-handoff layer for multi-agent crews'
description: 'Built Thalamus to stop multi-agent crews from re-pasting full transcripts every time one agent spawns another. Single-machine numbers from a Raspberry Pi 5, honestly labelled. MIT, on ClawHub and npm.'
pubDate: '2026-05-06'
tags: ['notes', 'thalamus', 'openclaw', 'multi-agent', 'raspberry-pi', 'release']
---

I shipped a thing called **Thalamus** last week. It is a community plugin
for OpenClaw that swaps the usual "paste the whole transcript when you
spawn a sub-agent" pattern for a 3-field reference (`packet_id`,
`resolver_key`, `inline_vector`). The receiver resolves only the atoms it
needs from a local vector store. That is the whole idea.

I am writing this post because I want people to try it, find what is
wrong, and tell me. Single-developer numbers are not enough to claim
anything portable, and the early framing of this work was overstated. I
would rather correct that early than discover six months later that the
only person it ever worked for was me.

## What it is

Three plugins, all MIT licensed, all on ClawHub:

1. **openclaw-thalamus**. The cognitive routing layer. Packet store with
   content-hash resolver keys, vector store with 9 namespaces (code,
   audit, plan, memory, audio.raw, audio.text, image.raw, image.text,
   crossmodal), an encoder daemon, a FAISS BBQ codebook, and an MCP
   server with six tools.
2. **openclaw-aegis-signer**. Ed25519-signed, SHA-256-chained tool-call
   audit log. Hooks `after_tool_call`, writes one signed JSON line per
   call to `~/.openclaw/audit-log.jsonl`. The chain is tamper-evident:
   modifying any past entry breaks every signature after it. Inspector
   replays this during audit.
3. **openclaw-sga-mcts-atoms**. Plan-time atom retrieval. After
   Inspector approves a session, the plugin extracts reusable atoms
   into a local SQLite database. Captain queries them via
   `retrieve_atoms` during decomposition.

Install:

```
openclaw plugins install clawhub:openclaw-thalamus
openclaw plugins install clawhub:openclaw-aegis-signer    --dangerously-force-unsafe-install
openclaw plugins install clawhub:openclaw-sga-mcts-atoms  --dangerously-force-unsafe-install
```

The last two need the unsafe-install flag because their current Node
shim spawns Python via `child_process` for the signer and the retriever.
That is correctly flagged by the dangerous-code scanner. I plan to
refactor to native `crypto.sign('ed25519')` and `better-sqlite3` so the
flag is no longer needed. That refactor is on the queue.

## What is honestly measured

This is the section I most want you to read.

**Directly measured on the live Pi 5:**

* Qwen3-Embedding-0.6B Q4_0 GGUF cold load: 1.7 to 1.8 seconds. Encoder
  log shows multiple loads at this latency.
* Qwen3 warm embed: about 167 milliseconds p50 on Pi 5 CPU via
  `llama-cpp-python`.
* BBQ codebook on 99,823 vectors with 10 percent holdout: mean cosine
  0.978, p10 0.985, p50 0.999. Chosen over PQ (0.92 mean, failed p10
  gate) and OPQ+PQ (0.97 mean) because BBQ beat both on mean and on p10.
  Trained in 17.6 minutes on a desktop with an RTX 3070 after the Pi
  rebooted three times under codebook training load.
* Protocol-level @-code compression: 19.1 percent token reduction on
  Captain spawn context. Telemetry rows in
  `~/.openclaw/thalamus/state/run_telemetry.jsonl` show
  `spawn_context_tokens=68` cut to `compact_context_tokens=55` in the
  three runs sampled.

**Estimated, not directly benchmarked:**

* The "95.84 percent combined token reduction" you may see in earlier
  drafts of the README is the @-code layer plus a packet-handoff layer
  measured against a *hypothetical* naive transcript paste baseline. I
  did not run the naive paste version side by side. Take the combined
  number as a single-machine direction signal, not a comparative
  benchmark. The 19.1 percent figure is the only end-to-end number that
  has a real before-and-after on the same workload.

The raw paste-ins for all of the above live in `BENCHMARKS.md` on the
GitHub repo, including the codebook metadata JSON.

## What is not Hailo

Hailo HEFs are wired into the encoder daemon for Whisper-encoder,
CLIP-text, and CLIP-image. The Hailo10H is detected on the Pi and the
HEFs are on disk. **The Qwen3 text embedding does NOT run on Hailo.**
LLM and embedding GGUFs cannot run on Hailo10H; the device is for the
audio and image encoders. Anyone reading the README and assuming the
1024-dimensional text encoder is NPU-accelerated is wrong, and that is
my fault for not making this clear earlier.

## What I built it on

* Raspberry Pi 5 4GB, Debian 13 Trixie. Pi 5 is the production target.
* Hailo10H AI HAT for the audio and image encoder paths.
* Desktop with RTX 3070 used once, for codebook training, after the Pi
  could not stay up under FAISS load.
* Single solo developer. I am a senior test automation specialist by
  day, not a researcher. I used an AI assistant for English grammar
  passes on this post and the README; the technical claims are mine
  and they are checked against the live state of my Pi.

## Why I am writing this now

I would like:

1. **Real-world testing.** Especially OpenClaw users running their own
   crews who can compare their own before-and-after numbers and tell me
   if the protocol-level compression generalises. Especially if you can
   tell me it does NOT.
2. **Code review.** The signer and retriever shells are the easiest
   target. Read `index.js` in each plugin and tell me what looks wrong.
3. **Adoption thoughts.** I opened a community issue at
   [openclaw/openclaw#78116](https://github.com/openclaw/openclaw/issues/78116)
   asking the maintainers whether anything close to this is interesting
   enough to bundle by default. If you have an opinion either way,
   please drop it on that issue.

The fleet sails on, and I would like a few more eyes on the rigging.

* GitHub: [github.com/msbel5/openclaw-thalamus](https://github.com/msbel5/openclaw-thalamus)
* npm: [npmjs.com/package/openclaw-thalamus](https://www.npmjs.com/package/openclaw-thalamus)
* ClawHub: `clawhub package inspect openclaw-thalamus`

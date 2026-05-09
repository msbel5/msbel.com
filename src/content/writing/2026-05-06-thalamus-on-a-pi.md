---
title: 'Thalamus on a Pi'
description: 'A small OpenClaw community plugin that swaps "paste the whole transcript when you spawn a sub-agent" for a 3-field packet reference resolved against a local vector store. Pi 5, MIT, on ClawHub and npm.'
pubDate: '2026-05-06'
tags: ['notes', 'thalamus', 'openclaw', 'multi-agent', 'release']
heroImage: '/banner-thalamus-on-a-pi.svg'
---

I shipped a thing called **Thalamus** last week. It is a community plugin for OpenClaw multi-agent crews. Instead of pasting the whole transcript when one agent spawns another, the spawning agent emits a 3-field reference and the receiver resolves the relevant atoms from a local vector store.

```
{
  packet_id:     pkt_2026...e7
  resolver_key:  sha256:c1d2...
  inline_vector: [1024d Qwen3-Embedding-0.6B, BBQ-128B compressed]
}
```

The MCP server lives in the upstream `openclaw-thalamus` npm package. The OpenClaw plugin shim that wires it up lives in `openclaw-thalamus-plugin` on ClawHub. Both are MIT.

## What is in it

- Packet store with content-hash resolver keys
- Vector store with 9 namespaces (atoms.code, atoms.audit, atoms.plan, atoms.memory, atoms.audio.raw/text, atoms.image.raw/text, atoms.crossmodal)
- Encoder daemon: Qwen3-Embedding-0.6B Q4_0 GGUF on Pi 5 CPU via llama.cpp
- FAISS RaBitQ codebook compressing 1024-dim vectors to 128 bytes
- MCP server with six tools: `thalamus_route`, `thalamus_resolve`, `thalamus_search`, `thalamus_search_with_vector`, `thalamus_promote_packet`, `thalamus_telemetry`
- Optional Hailo HEFs for Whisper and CLIP encoders on the AI HAT

## What is honestly measured

Direct measurements from the live Pi 5, paste-in verbatim from `~/.openclaw/thalamus/state/run_telemetry.jsonl`:

- **Protocol-level token compression**: 19.1 percent reduction on Captain spawn context (`spawn_context_tokens` 68 to `compact_context_tokens` 55) across the three sample runs the file currently holds.
- **Qwen3 warm encode**: about 167 ms p50 on Pi 5 CPU.
- **BBQ codebook on 99,823 vectors** (10 percent holdout): mean cosine 0.978, p10 0.985, p50 0.999. Trained in 17.6 minutes on a desktop with an RTX 3070; the Pi rebooted three times during the first attempt.

The combined "packet handoff plus protocol" figure that appears in earlier README drafts compares against a hypothetical naive transcript paste baseline I did not run side by side, so I treat it as a single-machine direction signal, not a benchmark. The 19.1 percent figure is the only end-to-end number with a real before-and-after on the same workload.

The raw paste-ins live in `BENCHMARKS.md` on the [openclaw-thalamus](https://github.com/msbel5/openclaw-thalamus) repo.

## What is not Hailo

Hailo HEFs are wired for Whisper-encoder, CLIP-text, CLIP-image. The Hailo10H is detected and the HEFs are on disk. **The Qwen3 text embedding does not run on Hailo.** LLM and embedding GGUFs cannot run on Hailo10H; the device is for the audio and image encoders. The text encoder stays on CPU via llama.cpp.

## Install

```bash
openclaw plugins install clawhub:openclaw-thalamus-plugin
```

The shim auto-installs the upstream `openclaw-thalamus` npm package as a dependency. No `--dangerously-force-unsafe-install` flag needed.

After install, wire the MCP server in `~/.openclaw/openclaw.json`:

```json
{
  "mcpServers": [
    { "name": "thalamus", "command": "openclaw-thalamus-mcp" }
  ]
}
```

Restart the gateway: `systemctl --user restart openclaw-gateway`. The MCP tools should appear in the OpenClaw tool registry.

## Asking for help

Single-developer numbers are not enough to claim anything portable. If anyone runs this on their own crew, I would like to see your before-and-after spawn-context counts. Especially if the protocol-level compression does not generalise, I want to know early.

## Links

- GitHub: [github.com/msbel5/openclaw-thalamus](https://github.com/msbel5/openclaw-thalamus)
- Plugin shim: `openclaw-thalamus-plugin` on ClawHub
- npm: [npmjs.com/package/openclaw-thalamus](https://www.npmjs.com/package/openclaw-thalamus)

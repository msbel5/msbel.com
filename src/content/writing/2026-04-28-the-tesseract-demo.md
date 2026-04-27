---
title: 'The tesseract demo'
description: 'A fifteen-second screen recording from January 2024, when the word "agentic" was still mostly papers, of a side project I built and proposed and watched go nowhere.'
pubDate: '2026-04-28'
tags: ['notes', 'agents', 'archive']
heroImage: '/gifs/tesseract_landscape.gif'
---

In January 2024 I built a side project called **dAIlog**. It was a
multi-agent framework on top of AutoGen — a C# / ASP.NET front end
talking to a Python service that ran seven agents in a GroupChat: a
Planner, an Engineer who wrote Python, a Scientist who didn't, a
Coder, a Data analyst, a Critic who checked the others, and an
Executor that ran the code.

A single user prompt would walk all the way through the loop and
produce an artefact. I shot a fifteen-second screen recording to
prove to myself it was real.

The prompt was *"animate a realistic tesseract."* The video looks
like this — silenced and laid sideways from the original phone
recording:

<figure class="post-figure">
  <img src="/gifs/tesseract_landscape.gif" alt="dAIlog multi-agent system, January 2024 — a single prompt to draw a tesseract, the agent loop running, a 4D matplotlib projection at the end." />
  <figcaption>dAIlog, January 2024. Left: the agent loop running on a Python service. Right: the dAIlog chat UI talking to GPT-3.5 through the system. The matplotlib window at the end is the agent's output — a tesseract, 4D projected into 3D.</figcaption>
</figure>

What happens in the recording, in order:

1. The chat UI on the right shows the prompt going in.
2. The IDE on the left shows the agent loop firing —
   `agentchat.contrib.gpt_assistant_agent: Matching assistant found,
   using the first matching assistant.`
3. Some seconds pass. SpongeBob's narrator appeared in the original —
   *"two very boring minutes later"* — though I have stripped him
   out of this version.
4. A matplotlib window opens. Blue lines, cube-within-a-cube, the
   diagonal connections that make a four-dimensional hypercube
   legible when you flatten it into three.
5. The Python file the system wrote is still on disk in the repo:
   `dAIlog/dAiLogPythonService/paper/draw_line.py`. It has not been
   touched since.

A few things worth saying about this, almost two years later.

**One** — this is what most people now call *agentic coding* and what
the tooling industry has spent the last year of its life
re-implementing. dAIlog was not unique; AutoGen itself was a
published Microsoft project and plenty of people had similar things
running. But I had it running, and I had built a proper UI in front
of it, and I had cleaned the loop up to the point where the demo
could be a single sentence.

**Two** — I proposed it as an internal product in early 2024. The
proposal went nowhere, for the usual mix of reasons that proposals
go nowhere inside a services company. Six months later Devin was
funded, Cursor was on every developer's machine, and Claude Code
shipped. The lesson there is not really about being early; plenty of
people were early. The lesson is about distribution. The thing you
build matters less than the channel you stand on when you finish it.

**Three** — the point of keeping a fifteen-second video on your
phone is not for anybody else. It is for the version of you who, two
years from now, will need a reminder that the date on the file in
the corner of the screen is real.

The Python file is still on disk. The agent loop, ported and
modernised, became the bones of the
[Pegasus](/projects/pegasus) QA agent. The repo is at
[github.com/msbel5/dAIlog](https://github.com/msbel5/dAIlog) for
anyone who wants to look. SpongeBob has been retired with honour.

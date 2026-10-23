---
title: 'Why I call myself a product engineer now'
description: 'Agentic workflows moved the bottleneck from typing code to making decisions. That lets one engineer own a product end to end instead of a slice of it.'
pubDate: 2026-10-23
tags: ['agents', 'career', 'product']
---

For most of my career my title said "software engineer", and that was accurate. I owned a slice of a product. Someone else wrote the spec, I built the backend, someone else built the UI. Another person ran the migration, and a ticket went to QA. Each of us owned our part well, and nobody owned the whole thing.

That split made sense. The slowest part of building software used to be the building itself. There are only so many hours in a day to write handlers, migrations, tests, infrastructure and frontend code. When implementation is the scarce resource, you divide it up and specialise.

Agentic workflows changed that, and that's why my homepage now says **product engineer**.

## The bottleneck moved

With agents in the loop, writing the code is no longer the slow part. The slow parts now are the ones that were always the hard parts:

- **Deciding what to build.** Understanding the operational problem and who has it, and what "done" means for them.
- **Specifying it well.** A PRD and a technical design that hold up when they meet the edge cases.
- **Reviewing it properly.** Reading every change as if I'd written it, because I'm the one who'll be paged for it.
- **Running it in production.** Rollout, monitoring, and being the person who knows why it behaves the way it does.

None of that got faster. All the work *between* those steps did. Once implementation stops being the constraint, the reason to split a product across five people mostly disappears. What's left is judgment, and judgment works better when it isn't spread across five handoffs.

## What owning it end to end looks like

On FINN's Move team I own the platform behind capacity planning, moves between sites, relocations and driver coordination. Day to day, owning it fully means:

1. **I start with the problem, not the ticket.** I talk to the ops people who'll use the thing and work out what's actually slowing them down.
2. **I write the plan.** Agents help me draft PRDs and specs. I refine them, challenge them and sign them off before any code exists.
3. **I orchestrate the build.** Backend, data model, frontend, infrastructure and tests are one piece of work with one owner. Agents run in parallel through a graph of dependent tasks, and I direct them.
4. **I review everything.** Nothing merges that I haven't read and understood. If it isn't production-ready, it doesn't ship. Agents raised the amount of code that reaches review. They didn't lower the bar.
5. **I own it after launch.** When something breaks, agents dig through logs and trace the cause quickly, and I decide on the fix. That's a big part of how we halved the time to resolve critical incidents.

The same goes for the unglamorous work. Moving core ops data off a no-code platform onto Postgres while live operations kept running is the kind of project that used to need a team and a lot of coordination. Now one engineer can plan it, build it and carry it through, provided that engineer holds the whole picture.

## What it isn't

It isn't "the AI builds the product". Agents are very good at implementation and at digging through things. They aren't accountable for anything. The decisions are mine: what we build, whether a design survives contact with reality, whether a change is safe to ship. So is the outcome.

It also isn't doing everything badly. Owning more means review becomes the core of the job. You have to read code across the stack critically, and you have to know when something needs a specialist's eye. Breadth only works with rigour behind it.

And it isn't a rejection of product managers or designers. It means fewer handoffs, not fewer perspectives. The conversations still happen. They just happen with the person who builds the thing, not three steps removed from them.

## Why the title matters

"Software engineer" describes what I do at the keyboard. "Product engineer" describes what I'm responsible for: the product working, for the people who use it, in production.

Before agentic workflows I owned part of the product, and the title fit. Now I own all of it, so the title should say that.

If you think about this differently, I'd like to hear it. My email is at the bottom of the page.

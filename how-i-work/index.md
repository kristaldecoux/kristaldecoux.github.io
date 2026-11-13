# How I Build Experimentation Programs | Kristal DeCoux

> The testing cycle, hypothesis method, documentation and cross-functional process Kristal DeCoux used to build and scale programs at Ancestry, AWS and Elastic.

Source: https://kristaldecoux.vercel.app/how-i-work/

# A repeatable way to find what’s not working, and fix it

The method, documentation and habits I’ve used to build testing and optimization programs at Ancestry, AWS and Elastic, and how I lead the people who run them.

![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIwIDAgMzIwIDMwMCIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJBIGN5Y2xlIG9mIHNpeCBzdGVwczogc2V0IGdvYWxzLCBhbmFseXplIHRoZSBkYXRhLCBmaW5kIG9wcG9ydHVuaXRpZXMsIHByaW9yaXRpemUgaHlwb3RoZXNlcywgdGVzdCwgYW5kIGFuYWx5emUgcmVzdWx0cywgd2hpY2ggbGVhZHMgYmFjayB0byBzZXR0aW5nIGdvYWxzLiBFdmVyeSByZXN1bHQgaXMgdGhlIG5leHQgaW5zaWdodC4iIGZvY3VzYWJsZT0iZmFsc2UiPjxkZWZzPjxtYXJrZXIgaWQ9ImFoIiB2aWV3Ym94PSIwIDAgMTAgMTAiIHJlZng9IjgiIHJlZnk9IjUiIG1hcmtlcndpZHRoPSI3IiBtYXJrZXJoZWlnaHQ9IjciIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj48cGF0aCBkPSJNMCwwIEwxMCw1IEwwLDEwIHoiIGNsYXNzPSJodi1hcnJvd2hlYWQiPjwvcGF0aD48L21hcmtlcj48L2RlZnM+PGRlZnM+PG1hcmtlciBpZD0iYWgtaG90IiB2aWV3Ym94PSIwIDAgMTAgMTAiIHJlZng9IjgiIHJlZnk9IjUiIG1hcmtlcndpZHRoPSI3IiBtYXJrZXJoZWlnaHQ9IjciIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj48cGF0aCBkPSJNMCwwIEwxMCw1IEwwLDEwIHoiIGNsYXNzPSJodi1hcnJvd2hlYWQtaG90Ij48L3BhdGg+PC9tYXJrZXI+PC9kZWZzPjxjaXJjbGUgY3g9IjE2MCIgY3k9IjE1MCIgcj0iMTA4IiBjbGFzcz0iaHYtcmluZyI+PC9jaXJjbGU+PHBhdGggZD0iTTE5MS42LDQ2LjcgQTEwOCwxMDggMCAwIDEgMjMzLjcsNzEuMCIgY2xhc3M9Imh2LWFyYyIgbWFya2VyLWVuZD0idXJsKCNhaCkiPjwvcGF0aD48cGF0aCBkPSJNMjY1LjIsMTI1LjcgQTEwOCwxMDggMCAwIDEgMjY1LjIsMTc0LjMiIGNsYXNzPSJodi1hcmMiIG1hcmtlci1lbmQ9InVybCgjYWgpIj48L3BhdGg+PHBhdGggZD0iTTIzMy43LDIyOS4wIEExMDgsMTA4IDAgMCAxIDE5MS42LDI1My4zIiBjbGFzcz0iaHYtYXJjIiBtYXJrZXItZW5kPSJ1cmwoI2FoKSI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjguNCwyNTMuMyBBMTA4LDEwOCAwIDAgMSA4Ni4zLDIyOS4wIiBjbGFzcz0iaHYtYXJjIiBtYXJrZXItZW5kPSJ1cmwoI2FoKSI+PC9wYXRoPjxwYXRoIGQ9Ik01NC44LDE3NC4zIEExMDgsMTA4IDAgMCAxIDU0LjgsMTI1LjciIGNsYXNzPSJodi1hcmMiIG1hcmtlci1lbmQ9InVybCgjYWgpIj48L3BhdGg+PHBhdGggZD0iTTg2LjMsNzEuMCBBMTA4LDEwOCAwIDAgMSAxMjguNCw0Ni43IiBjbGFzcz0iaHYtYXJjLWhvdCIgbWFya2VyLWVuZD0idXJsKCNhaC1ob3QpIj48L3BhdGg+PHJlY3QgY2xhc3M9IndmLWhvdCIgeD0iMTIzLjUiIHk9IjI5LjAiIHdpZHRoPSI3Mi45IiBoZWlnaHQ9IjI2IiByeD0iMTMuMCI+PC9yZWN0Pjx0ZXh0IGNsYXNzPSJ3Zi1ob3QtdGV4dCIgeD0iMTYwLjAiIHk9IjQ2LjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNldCBnb2FsczwvdGV4dD48cmVjdCBjbGFzcz0id2YtYm94IiB4PSIxOTUuNyIgeT0iODMuMCIgd2lkdGg9IjExNS42IiBoZWlnaHQ9IjI2IiByeD0iMTMuMCI+PC9yZWN0Pjx0ZXh0IGNsYXNzPSJ3Zi1ob3QtdGV4dCIgeD0iMjUzLjUiIHk9IjEwMC4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BbmFseXplIHRoZSBkYXRhPC90ZXh0PjxyZWN0IGNsYXNzPSJ3Zi1ib3giIHg9IjE4OS42IiB5PSIxOTEuMCIgd2lkdGg9IjEyNy44IiBoZWlnaHQ9IjI2IiByeD0iMTMuMCI+PC9yZWN0Pjx0ZXh0IGNsYXNzPSJ3Zi1ob3QtdGV4dCIgeD0iMjUzLjUiIHk9IjIwOC4wIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5GaW5kIG9wcG9ydHVuaXRpZXM8L3RleHQ+PHJlY3QgY2xhc3M9IndmLWJveCIgeD0iODcuMCIgeT0iMjQ1LjAiIHdpZHRoPSIxNDYuMSIgaGVpZ2h0PSIyNiIgcng9IjEzLjAiPjwvcmVjdD48dGV4dCBjbGFzcz0id2YtaG90LXRleHQiIHg9IjE2MC4wIiB5PSIyNjIuMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UHJpb3JpdGl6ZSBoeXBvdGhlc2VzPC90ZXh0PjxyZWN0IGNsYXNzPSJ3Zi1ib3giIHg9IjM0LjUiIHk9IjE5MS4wIiB3aWR0aD0iNjQiIGhlaWdodD0iMjYiIHJ4PSIxMy4wIj48L3JlY3Q+PHRleHQgY2xhc3M9IndmLWhvdC10ZXh0IiB4PSI2Ni41IiB5PSIyMDguMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VGVzdDwvdGV4dD48cmVjdCBjbGFzcz0id2YtYm94IiB4PSIxMS43IiB5PSI4My4wIiB3aWR0aD0iMTA5LjUiIGhlaWdodD0iMjYiIHJ4PSIxMy4wIj48L3JlY3Q+PHRleHQgY2xhc3M9IndmLWhvdC10ZXh0IiB4PSI2Ni41IiB5PSIxMDAuMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QW5hbHl6ZSByZXN1bHRzPC90ZXh0Pjx0ZXh0IGNsYXNzPSJodi1jZW50ZXIiIHg9IjE2MCIgeT0iMTQ2Ij5FdmVyeSByZXN1bHQ8L3RleHQ+PHRleHQgY2xhc3M9Imh2LWNlbnRlciIgeD0iMTYwIiB5PSIxNjIiPmlzIHRoZSBuZXh0IGluc2lnaHQ8L3RleHQ+PC9zdmc+)

## A cycle, not a checklist

Every program I’ve built runs on the same loop. A test doesn’t have to win, but every test should produce an insight, and every insight should lead to the next test.

1.  ### Set goals and measure

    Agree on what success looks like, tie it to signups, leads or revenue, and track performance against it before changing anything.

2.  ### Analyze the data for insights

    Find where the experience falls short of the goal, using every kind of data available (below).

3.  ### Identify the opportunities

    Sort each finding into the right next step and rate how much it matters.

4.  ### Develop and prioritize hypotheses

    Turn opportunities into hypotheses and rank them into a roadmap.

5.  ### Test

    Sized up front for sample and duration, built and QA’d across devices, with nothing else launching on the page mid-test.

6.  ### Analyze the results

    Significance on primary and secondary metrics, then lifetime value to size the gain. The result becomes the next insight.

For the math in steps 1, 5 and 6, I built [my own A/B test calculator](/calculator/): it scopes what a win is worth over a year, sizes the test, shows the smallest lift a 6- to 8-week test can detect, and analyzes the results.

## Where insights come from

Many stakeholders don’t know what data exists or where to find it, so I document the sources that feed a hypothesis:

| Source               | What it shows                                                                            |
|----------------------|------------------------------------------------------------------------------------------|
| Heuristic analysis   | Relevance, clarity, customer value, and elements that cause friction or distraction      |
| User testing         | Usability issues and the exact points where people get stuck                             |
| Qualitative research | Customer surveys, interviews, focus groups and chat logs                                 |
| Technical analysis   | Cross-browser and cross-device testing, conversion by device and browser, and page speed |
| Web analytics        | Performance against goals, traffic volume and sources, and engagement                    |
| Mouse tracking       | Heatmaps, click maps, scroll maps and session replays                                    |

## Deciding what to test

Not every finding needs a test. Each one goes into one of five buckets:

Test it  
A clear opportunity to improve behavior and conversion, with a good idea of how.

Instrument it  
A tracking gap or something broken. Fix it first.

Hypothesize  
A page or module that isn’t working, but the fix isn’t obvious yet.

Just do it  
An obvious fix that doesn’t need a test.

Investigate  
Dig deeper to find the root cause before deciding what to do.

Then each issue gets a severity score from 1 to 5. A 5 is a critical usability or conversion issue that most visitors see, with high potential revenue impact. A 1 is a minor issue with low impact.

### Writing a strong hypothesis

A hypothesis starts from an insight and states what will change, what we expect to happen, and why: if we make this change, we’ll see this result, because of this reason. It also becomes the definition of success for the test.

- **Weak:** “If we make the button orange, more people will click it because it’s more eye-catching.” Nothing in the data supports it.
- **Strong:** “If we add a primary call to action to the hero, signups will increase, because visitors will better understand how to start.”

Hypotheses are then ranked into a roadmap:

RICE = Reach × Impact × Confidence ÷ Effort

Each factor is scored 1 to 5 against defined scales, so a stakeholder’s favorite idea and a data-backed one are compared on the same terms.

## Documenting every test

Consistent documentation turns individual tests into a program people can learn from. It started at Ancestry, where our first test plans were Word documents that grew to 10 or 15 pages and few people read all the way through. We switched to slide decks: a screenshot of every experience, labels showing the team how to set up primary and secondary metrics and tag each element, and the results added to the same deck when the test ended. Every program since has used four templates:

| Template             | What it standardizes                                                                                                                                  |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Test plan            | Background, hypothesis, estimated business impact, primary and secondary metrics, sample size, audience, devices, and screenshots of each experience. |
| Tracking conventions | Click names that include the test ID and a unique UTM for every call to action, so every click ties to signups and CRM records.                       |
| Results readout      | Date range and data caveats, results with significance, a full funnel for each experience, and numbered recommendations.                              |
| Process checklist    | Pre-launch, post-launch and end-of-test tasks, from QA and heatmaps to launch emails, a CRM check and the archive.                                    |

Every plan and result goes into one archive anyone can search, so the next person can see what was tried, how, and whether it’s worth revisiting. Ancestry’s Trustpilot tests are a good example: it took several placements and formats before reviews worked, and the archive kept us from repeating the misses.

Today, an AI tool I built drafts the test plan, brief and tracking issue from a single request. [See how it works](/ai/).

## Sharing what we learn

A testing program scales only when the rest of the organization brings ideas, so I make the work visible and easy to join.

- **A monthly experimentation review** open to anyone in marketing or product: recent results, tests running now and what’s launching next. At AWS it opened with a “Which test won?” vote. We walked through a recent test’s hypothesis and both experiences, everyone voted, then we revealed the winner. People paid attention, and they learned something every time.
- **Launch and results emails** to an opt-in distribution list, so the people who cared got every update and no one else got spam.
- **A searchable archive** of every test plan and result, first on SharePoint, later on Confluence and wiki pages.
- **A guide to A/B testing for marketers** that walks through the cycle above, the data sources, the five buckets and how to write a hypothesis, so partners arrive with stronger ideas.
- **Brainstorm workshops** that end with a prioritized list of ideas, run for the AWS homepage and Elastic’s security journey, plus office hours and leadership reviews.

## Programs I’ve built

### Ancestry, 2011–2016: where the model started

I moved onto Ancestry’s analytics team as a project manager just as it was launching an experimentation function. The test plan decks, the archive, the monthly review and the opt-in launch and results emails all started there, and they built real curiosity about testing across the company. I went on to design and analyze tests as a conversion analyst and then led conversion optimization.

**25 → 300+**tests a year, from year one to year four

### AWS, 2020–2021: a program from scratch

When AWS asked me to launch a testing program for its marketing website, I brought the Ancestry model and added to it: templates for every plan and result from day one, a test archive anyone at AWS could open, the monthly review with its “Which test won?” vote, and an in-depth guide that taught marketers the testing cycle. A shared-responsibility model with teams across marketing, weekly office hours and quarterly business reviews kept it running. I later led a team of five analysts and testing specialists supporting the global site.

**50**tests in the first 8 months

**46%**win rate in year one

**+400%**test volume year over year

### Elastic, 2021–now

I relaunched and matured Elastic’s testing program with the same cycle, templates and archive, and optimized first-time visitor and trial signup flows with product and UX teams. [Read the trial flow case study](/work/#trial-flow).

## Running cross-functional projects

Big web projects touch SEO, localization, UX, visual design, engineering, content operations, QA and optimization. I wrote a shared process so every team knows what it needs to start and what it owes the team after it. To build it, I asked each team the same question: what’s the minimum you need before you can start?

1.  ### Intake and triage

    Every request starts with a project brief. The web team triages weekly and holds office hours to help requesters find the data that makes their case.

2.  ### Size, prioritize and plan capacity

    The team scopes larger projects together. Marketing leadership ranks them monthly, and team leads match the priorities to real capacity.

3.  ### Kickoff and requirements

    A kickoff turns the brief into a requirements doc: goals, decision makers, review rounds and what “done” means.

4.  ### Strategy and design, in order

    SEO research, then global localization strategy, then wireframes, then visual design. Each one is reviewed with the stakeholder before the next team starts, with no more than two review rounds.

5.  ### Handoff and build

    Designs go to engineering with annotated specs and a handoff checklist covering states, breakpoints, assets, accessibility and localization. Engineers get two days to review before the handoff meeting. Content is written while engineering builds.

6.  ### Stage, translate, QA and launch

    Final copy is staged for approval, sent for translation and checked in QA before publishing.

7.  ### Retrospective

    After launch, the team reviews what worked in communication, documentation and process, and updates the playbook.

### Making the case for a project

Every request starts with a brief built around four questions: who it’s for, how they’ll find it, what outcome we expect, and which business metric it moves. The answers set an effort tier from extra small to extra large; large projects get a program manager and a requirements doc, and go to leadership to be ranked. A companion guide shows what a specific answer looks like and where to find the evidence, so requests arrive ready to size.

### Rules that keep projects moving

- **Scope locks at engineering handoff.** Later changes are checked for feasibility, logged in a decision log with the date and who approved them, and approved by leadership if they move scope or timeline.
- **The Figma freeze.** After handoff, any design change is announced to engineering with what changed and why, so no one builds against a moving target without knowing it moved.
- **Work in the open.** Each project gets a public Slack channel, recorded meetings with summarized notes, and one project doc holding the requirements, technical design and change log.
- **Launch readiness when it matters.** Changes with production risk get an operational readiness review covering monitoring, rollback and ownership. A copy change doesn’t.

## How I lead

I lead people the way I approach visitors: by understanding them first.

- **Empathy first.** I learn what each person needs before I ask for anything.
- **Psychological safety.** Half-formed ideas and losing tests are welcome, because that’s where the learning is. I protect a sustainable pace so people can do their best work for the long run.
- **Coaching to your goals.** Growth plans are built around each person’s career goals and passions, not just the team’s needs.
- **Authenticity.** I say what I think, admit what I don’t know and give credit to the people who did the work.

## Want to see a real test plan or readout?

[Schedule a 30-minute call (opens cal.com in a new tab)](https://cal.com/kristal-decoux-i6xkri/30min)

`kmdecoux@gmail.com`

[linkedin.com/in/kristal-decoux-6514219](https://www.linkedin.com/in/kristal-decoux-6514219/)

---

More: [Site map](https://kristaldecoux.vercel.app/sitemap.xml) · [llms.txt](https://kristaldecoux.vercel.app/llms.txt)

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS with no framework (user's choice, 3 Nov 2026). It replaced the Create React App developerFolio template on 3 Nov 2026. `npm run build` must keep writing the finished site to `build/`. Production serves a copy of that folder from a Caddy file server, and each release is built locally and copied up by hand. Vercel and Netlify also build it, but only for pull-request previews, and neither serves the domain. The privacy notice at `/privacy` (`public/privacy/index.html`) is linked from sales emails and keeps its URL and content.

## Users

Potential clients deciding whether to hire Trond for AI work. There are two audiences, weighted equally (user-confirmed):

- Software companies, from startups to scale-ups and often outside Norway, that want AI features, agents or integrations built.
- Norwegian businesses that want AI in their products or workflows.

The site is in English.

## Product Purpose

rensel.dev is Trond Rensel's personal developer portfolio. It is not a company landing page. Its job is to bring in client work. A visitor should come away believing Trond can build the AI system they need, and should find it easy to get in touch. Success means more inquiries from the right clients.

## Positioning

Trond is first of all an AI engineer (the user asked to lead with that). He has shipped production software since November 2018, and has been an AI engineer at Tripletex since March 2024. He covers the whole stack around AI features: retrieval and assistants, the integrations that connect them to real systems, and the product built around them. MCP servers and product films are two of the things he does. They are not the headline.

## Operating Context

Visitors reach the site from LinkedIn, GitHub, referrals and emails sent from trond@rensel.dev. Links to it get shared in Slack and email, where previews come from the page's meta tags. Crawlers and AI assistants read the page as raw HTML without running JavaScript.

## Capabilities and Constraints

What Trond offers (from the previous site and the privacy notice):

- AI assistants and RAG chatbots that answer from a company's own knowledge, using vector databases.
- Connecting AI assistants to business systems and APIs through tools and MCP servers.
- Full-stack applications, from architecture and design through development.
- Short films of software products, rendered in code.

Stack he lists: Python, TypeScript, JavaScript, React, Node.js, C#/.NET, PostgreSQL, SQL, Elasticsearch, Docker, Kubernetes, Google Cloud, AWS, Git, machine learning and prompt engineering.

Work history:

- AI Engineer, Tripletex, March 2024 to present. Cloud accounting software for small businesses in Norway.
- Software Developer at Bluetree, Upstacked project, November 2018 to February 2024. An all-in-one operations SaaS. Work covered full-stack development, DevOps and data science: React/Redux; Python/Django with Postgres, MySQL and Elasticsearch; anomaly detection for cybersecurity with scikit-learn and Apache Spark; GCP, Kubernetes, Docker, microservices and GitLab CI/CD.
- Software Developer at Bluetree, Statens vegvesen project (Norwegian road authority), June 2021 to August 2023. A new solution for monitoring infrastructure and applications, built with React/TypeScript, .NET/C#, VMware, Docker, Python/Bash and Kubernetes/Tomcat.

Education: MSc in Systems Engineering with Embedded Systems, University of South-Eastern Norway (2017–2019). Bachelor in Electronics, Western Norway University of Applied Sciences (2014–2017), with an exchange semester at Auckland University of Technology (2016).

Location: Oslo, Norway (user-confirmed).

Working languages: English and Norwegian (user-confirmed).

Contact: trond@rensel.dev, linkedin.com/in/trond-rensel-618232137, github.com/renzel.

Still open: engagement format (hourly or fixed scope), availability, prices and a booking link. The user confirmed again on 3 Nov 2026 that none of these is decided. Leave them out until the user supplies them.

## Brand Commitments

- This is a personal developer portfolio, not a company landing page (user, 3 Nov 2026).
- It leads with "I'm an AI engineer."
- It covers his AI engineering broadly, not only MCP servers and films.
- No company legal block (Rensel Holding AS, org. no., address) on the portfolio. That stays on `/privacy` only (user decision).
- Name: Trond Rensel. Short handle: "Rensel". Domain: rensel.dev.
- Avoid AI-hype visuals (glowing gradients, robots, neural-network imagery) and long text. The user said both would feel wrong.

## Evidence on Hand

- **Tripletex role:** may be described in general terms only (user-confirmed). No internal details, metrics or screenshots.
- **Product film: Planloom.** Planloom is a project-management app that Trond made up to show off the film technique (user-confirmed, 3 Nov 2026). It is a demo, not client work, and copy must never present it as a client's product. Still open: who designed its screens. Until that is confirmed, credit Trond with the film only. The site serves `public/assets/planloom-1080.mp4` (about 11 MB) with the poster `public/assets/planloom-poster.webp`. The source is `~/random/vid-product-film/live/out/planloom.mp4` (1920×1080, 40 s, h264/AAC, about 30 MB), with stills in `~/random/vid-product-film/live/out/f-*.png`. Approved for public display.
- **Public repo: [renzel/trmnl-api-mcp](https://github.com/renzel/trmnl-api-mcp).** An unofficial MCP server for the TRMNL API, built with the official MCP TypeScript SDK on Node.js over stdio. It has eight tools (three reads, five playlist writes), strict input validation, a fixed set of allowed endpoints, and tests.
- **Public repo: [renzel/svg-product-film](https://github.com/renzel/svg-product-film).** An agent skill that turns SVG design exports into a product film with sound. Every frame is drawn in a headless browser and encoded with ffmpeg, and the score is synthesised in code. MIT-licensed. Early (20 Oct 2026).
- **Headshot:** `public/assets/trond-rensel-480.webp`, `-800.webp` and `-1200.webp`, resized from the original `me.png` (1514×1364). That PNG was deleted with `src/` in the static rebuild and is still in git history (`src/assets/images/me.png` at `c1b5096`).
- **Employer and school logos:** `tt.png`, `upstacked.png`, `svv.png`, `usn.png`, `hvl.png` and `aut.png` were deleted with `src/` in the static rebuild, and the page does not use them. They can be recovered from git history (`src/assets/images/` at `c1b5096`).
- **Absent, never fabricate:** client testimonials, client logos, results metrics, prices, booking link.

## Product Principles

1. Lead with the role. The visitor should know within seconds that Trond is an AI engineer they can hire.
2. Show real work. Every capability on the page points to a role, a repo or a film that exists, and a demo is called a demo, never client work.
3. Keep it short. Visitors scan, so make each line earn its place.
4. Be readable everywhere. The page should carry its content in plain HTML for crawlers, link previews and AI assistants.
5. Personal, not corporate. One engineer speaking in the first person, not an agency.

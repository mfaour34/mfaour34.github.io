# mfaour34.github.io

Personal website of Mohammed Faour: **https://mfaour.is-a.dev** (also reachable at mfaour34.github.io)

Built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Writing a blog post

```sh
npm run new "My post title"   # creates src/content/blog/my-post-title.md as a draft
```

Write the post in Markdown, remove `draft: true` (or set it to `false`), then commit and push. It's live in about a minute and appears on `/blog`, on the homepage, in the terminal (`blog`) and in `/rss.xml`.

Frontmatter fields: `title`, `description`, `pubDate`, optional `updatedDate`, `tags`, `draft`.

## Local development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
```

## Where things live

| What | File |
| --- | --- |
| Hero + hype slider | `src/components/HypeHero.astro` |
| Agent swarm canvas | `src/components/Swarm.astro` |
| Dispatch game | `src/components/Dispatch.astro` |
| Terminal (press `` ` ``) | `src/components/Terminal.astro` |
| Experience, skills, projects | `src/pages/index.astro` |
| Theme colours and fonts | `src/styles/global.css` |
| Name, links, career start | `src/consts.ts` |

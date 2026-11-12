# kristaldecoux.github.io

Personal site for Kristal DeCoux, hosted on Vercel at https://kristaldecoux.vercel.app.
The GitHub Pages copy (kristaldecoux.github.io) forwards every page to the Vercel site.

```
index.html               → homepage
work/                    → case studies
experiments/             → testing portfolio (/portfolio/ redirects here)
how-i-work/              → method, programs, leadership
ai/                      → Claude skills, described
search/                  → SEO, AEO and GEO approach
about/                   → bio
resume.pdf               → resume
assets/site.css          → shared styles (experiments/ keeps its own)
```

Draft notes (`<p class="draft">`) are hidden by `.draft{display:none}` in `assets/site.css`.
Remove `display:none` to show them while editing.


## Updating

Edit a page and commit to `main`. GitHub Pages republishes in a minute or two.

## Search visibility

Every page has `<meta name="robots" content="noindex">`. Remove it from each page when you want the site to appear in Google.

# kristaldecoux.github.io

Personal site. The portfolio lives at `/portfolio/`.

```
index.html             → redirects the root URL to /portfolio/
portfolio/index.html   → the testing portfolio page
portfolio/deck.pdf     → (optional) drop your exported deck here
```

## Publish (one time, ~10 minutes)

1. On a **personal** GitHub account (not a work org), create a public repo named
   exactly `<your-username>.github.io`. If your username is `kristaldecoux`,
   the repo is `kristaldecoux.github.io`.
2. Upload these files (Add file → Upload files → drag the whole folder in) and commit.
3. Settings → Pages → Source: "Deploy from a branch" → `main` / `(root)` → Save.
4. In a minute or two the page is live at
   `https://<your-username>.github.io/portfolio/`.

## Add a custom domain (optional, ~$10–15/yr)

1. Buy `kristaldecoux.com` (Cloudflare Registrar, Porkbun or Namecheap).
2. Settings → Pages → Custom domain → enter `kristaldecoux.com` → Save.
   (GitHub creates a `CNAME` file in the repo for you.)
3. At your registrar, add DNS records:
   - Four `A` records for `@`: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` → `<your-username>.github.io`
4. Once DNS resolves, tick **Enforce HTTPS**.
   The link to share becomes `https://kristaldecoux.com/portfolio/`.

## Updating

Edit `portfolio/index.html` (or replace it) and commit. The live page updates in about a minute.

## Search visibility

The portfolio page has `<meta name="robots" content="noindex">`, so it works for anyone
with the link but stays out of Google. Delete that line if you want it discoverable.

## Linking the deck

Export the deck to PDF, save it as `portfolio/deck.pdf`, and add a link in the contact
section of `portfolio/index.html`, for example:

```html
<div class="line"><a href="deck.pdf">Download the testing deck (PDF)</a></div>
```

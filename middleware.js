// Vercel Routing Middleware: serves Markdown to agents that ask for it.
// Browsers never send Accept: text/markdown, so regular visits pass straight through.
export const config = { matcher: '/((?!assets/|_vercel/).*)' };

const PAGES = {
  '/': '/index.md', '/work/': '/work/index.md', '/experiments/': '/experiments/index.md',
  '/how-i-work/': '/how-i-work/index.md', '/ai/': '/ai/index.md', '/search/': '/search/index.md',
  '/about/': '/about/index.md', '/contact/': '/contact/index.md', '/privacy/': '/privacy/index.md',
};
const KNOWN_FILES = /^\/(robots\.txt|sitemap\.xml|llms\.txt|resume\.pdf|404\.md|.*index\.(md|html))$/;

export default async function middleware(request) {
  const accept = request.headers.get('accept') || '';
  if (!accept.includes('text/markdown')) return;
  try {
    const url = new URL(request.url);
    let path = url.pathname;
    if (!path.endsWith('/') && !path.includes('.')) path += '/';
    const headers = { 'content-type': 'text/markdown; charset=utf-8', 'vary': 'Accept' };
    const md = PAGES[path];
    if (md) {
      const res = await fetch(new URL(md, url.origin));
      if (res.ok) return new Response(await res.text(), { status: 200, headers });
      return;
    }
    if (KNOWN_FILES.test(path) || path === '/portfolio/') return;
    const nf = await fetch(new URL('/404.md', url.origin));
    return new Response(nf.ok ? await nf.text() : '# Page not found\n\nSee /llms.txt\n', { status: 404, headers });
  } catch (e) {
    return;
  }
}

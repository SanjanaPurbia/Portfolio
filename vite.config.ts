import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type HtmlTagDescriptor, type Plugin } from 'vite'

// Production origin, e.g. SITE_URL=https://sanjanapurbia.dev npm run build. Social scrapers need
// absolute URLs, so canonical, og:url and an absolute og:image are only emitted when it is set.
const SITE_URL = process.env.SITE_URL?.replace(/\/+$/, '')

function headTags(): Plugin {
  return {
    name: 'head-tags',
    apply: 'build',
    transformIndexHtml(_html, ctx) {
      // Preload the Latin variable fonts the first screen renders with (Geist, plus JetBrains Mono for the labels), so they arrive with the CSS.
      const fonts = Object.keys(ctx.bundle ?? {}).filter((f) => /(geist|jetbrains-mono)-latin-wght-normal-.*\.woff2$/.test(f))
      const tags: HtmlTagDescriptor[] = fonts.map((f) => ({
        tag: 'link',
        attrs: { rel: 'preload', href: `/${f}`, as: 'font', type: 'font/woff2', crossorigin: '' },
        injectTo: 'head',
      }))
      const image = `${SITE_URL ?? ''}/og-image.png`
      tags.push(
        { tag: 'meta', attrs: { property: 'og:image', content: image }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'twitter:image', content: image }, injectTo: 'head' },
      )
      if (SITE_URL)
        tags.push(
          { tag: 'link', attrs: { rel: 'canonical', href: `${SITE_URL}/` }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: `${SITE_URL}/` }, injectTo: 'head' },
        )
      return tags
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), headTags()],
})

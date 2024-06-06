// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Website metadata
export const SITE_URL: string = 'https://example.com'
export const SITE_TITLE: string = 'my website!'
export const SITE_DESCRIPTION: string = 'Welcome to my website!'
export const pagination = {
  postsPerPage: 12,
}
// SEO metadata
export const TWITTER_CREATOR: string = '@devopsick'

// Navigation
type Page = {
  title: string
  href: string
  children?: Page[]
}

export const PAGES: Page[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'About',
    href: '/about',
  },
]

// i18n
export const DEFAULT_LOCALE = 'en'
export const LOCALES = {
  en: 'en',
  it: 'it',
}

import animate from 'tailwindcss-animate'

export const content = [
  './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  './node_modules/preline/preline.js',
]
export const plugins = [require('preline/plugin'), animate]

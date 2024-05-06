// import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    fontFamily: {
      'brush': ['"Caveat Brush"'],
      'caveat': ['"Caveat Variable"'],
      'montserrat': ['"Montserrat Alternates"'],
    },
		extend: {},
	},
	plugins: [],
}

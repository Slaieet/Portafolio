/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				main: '#11071f',
				cage: '#1b1531'
			},
			textColor: {
				main: '#fafafa',
			}
		},
	},
	plugins: [],
}

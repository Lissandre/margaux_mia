/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				lighter: 'rgba(255, 255, 255, 0.2)',
			},
			scale: {
				25: '.25',
			},
			blur: {
				'none': '0px',
				sm: '6px',
			}
		}
	},
	plugins: [],
}

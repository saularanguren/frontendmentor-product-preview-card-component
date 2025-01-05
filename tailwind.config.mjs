/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				pure_white: '#FFFFFF',
				cream_bg: '#F2EAE2',
				aurometal_saurus: '#6C7289',
				deep_aquamarine: '#3D8168',
				deep_aquamarine_hover: '#1A4032',
				gunmetal: '#1C232B',
			},
			fontFamily: {
				montserrat: ['"Montserrat"', 'serif'],
				fraunces: ['"Fraunces"', 'serif'],
			},
		},
	},
	plugins: [],
}
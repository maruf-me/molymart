import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					'100': '#CEE34C',
					'10': 'F1F4F0',
				},
				dark: {
					'100': '#0D0D0D',
					'90': '#3A3A3A',
					'80': '#7A7A7A',
					'60': '#B5B5B5',
					'40': '#DFDFDF',
					'20': '#F3F3F3',
				},
				error: { '100': '#FF0000' },
				success: { '100': '#00FF00' },
				warning: { '100': '#FFA500' },
			},
			screens: {
				'xxl': '1320px',
				// => @media (min-width: 1320px) { ... }
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;

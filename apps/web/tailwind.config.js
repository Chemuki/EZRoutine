/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#F99941",
				secondary: "#FFC76E",
				tertiary: "#F2F2EF",
				light: "#FDFDFD",
				dark: "#171717",
				success: "#7DA030",
				danger: "#9E3432",
				warning: "#FDE10D",
				info: "#21A9E4",
			},
		},
	},
	plugins: [],
};

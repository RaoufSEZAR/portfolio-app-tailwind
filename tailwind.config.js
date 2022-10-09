/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./*.html"],
	theme: {
		extend: {
			spacing: {
				big: "48rem",
			},
			// colors: {
			// 	dim: {
			// 50: "#5F99F7",
			// 100: "#5F99F7",
			// 200: "#38444d",
			// 300: "#202e3a",
			// 400: "#253341",
			// 500: "#5F99F7",
			// 600: "#5F99F7",
			// 700: "#192734",
			// 800: "#162d40",
			// 900: "#15202b",
			// 	},
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		fontFamily: {
			nunito: ["Nunito", "sans-serif"],
		},
	},
	animation: {
		"spin-fast": "spin 0.5s linear infinite",
	},

	plugins: [],
};

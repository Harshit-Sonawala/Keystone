/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				background: "#000000",
				card: "#0E0D12",
				surface: "#1A1825",
				border: "#2A2838",
				foreground: "#F1F0F5",
				"foreground-muted": "#9896A4",
				"foreground-faint": "#5C5A68",
				work: {
					DEFAULT: "#0EA5E9",
					dark: "#0369A1",
				},
				expenses: {
					DEFAULT: "#10B981",
					dark: "#047857",
				},
				sleep: {
					DEFAULT: "#6366F1",
					dark: "#4338CA",
				},
				habits: {
					DEFAULT: "#84CC16",
					dark: "#4D7C0F",
				},
			},
			fontFamily: {
				"outfit-thin": ["Outfit_100Thin"],
				"outfit-light": ["Outfit_300Light"],
				"outfit-regular": ["Outfit_400Regular"],
				"outfit-medium": ["Outfit_500Medium"],
				"outfit-semibold": ["Outfit_600SemiBold"],
				"outfit-bold": ["Outfit_700Bold"],
				"outfit-extrabold": ["Outfit_800ExtraBold"],
				"inter-regular": ["Inter_400Regular"],
				"inter-medium": ["Inter_500Medium"],
				"inter-semibold": ["Inter_600SemiBold"],
				"inter-bold": ["Inter_700Bold"],
			},
		},
	},
	plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        card: '#0E0D12',
        work: {
          primary: '#0EA5E9',
          dark: '#0369A1',
        },
        expense: {
          primary: '#10B981',
          dark: '#047857',
        },
        sleep: {
          primary: '#6366F1',
          dark: '#4338CA',
        },
        habit: {
          primary: '#84CC16',
          dark: '#4D7C0F',
        },
      },
    },
  },
  plugins: [],
}

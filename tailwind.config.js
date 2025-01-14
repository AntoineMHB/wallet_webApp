/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        "purple": "#5A57FF",
        "light-white": "rgba(255,255,255,0.17)",
        customGray: '#C2C0FF',
        customWhite: '#FFFFFF',
        customHover: '#4A47E0',
        customBlack: '#353535',
        customDarkGray: '#CCCCCC',
        sortGray: '#D9D9D9',
        notificationPink: '#FF5787',
        backgroundColor:'#FAF9FF',
        expenseRedColor: '#f70a0a',
        buttonColor: '#e8e8e8'
      }
    },
  },
  plugins: [],
}


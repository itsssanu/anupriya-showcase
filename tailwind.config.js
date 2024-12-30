/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins','serif'],
      },
      spacing: {
        '3px': '60px',
        '4px': '80px',
        '5px': '100px',
      },
      fontSize: {
        'text-xs': '12px',
        'text-sm': '14px',
        'text-base': '15px',
        'text-lg': '18px',
        'text-xl': '22px',
        'text-2xl': '24px',
        'text-3xl': '30px',
        'text-4xl': '32px',
      },
      colors: {
        Purple: '#714DA3',
        Black: '#111111',
        DarkPurple: '#2F004B',
        White: '#FEF8FF',
        Red: '#FF0101',
        Green: '#5DCF06',
        dots_light:'url(/dots-light.svg)',
        dots_dark:'url(/dots-dark.svg)',
        primary: "var(--primary-color)",  
        secondary: "var(--secondary-color)",
        textColor:"var(--text-color)",
        primary400: "color-mix(in srgb, var(--primary-color), white 30%)",
        secondary400: "color-mix(in srgb, var(--secondary-color), white 30%)"
      },
    },
  },
  plugins: [],
}


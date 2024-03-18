/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/screens/**/*.{js,jsx,ts,tsx}',
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    textColor: {
      primary: {
        light: 'rgba(255,255,255,1)',
        dark: 'rgba(235,235,245,0.7)',
        green: 'rgba(52,199,89,1)',
      },
    }
    ,
    extend: {

      backgroundImage: {
        'gradient': "url('./src/assets/background-gradient.png')",
        'start': "url('./src/assets/background-start.png')",
      },
      colors: {
        background: '#211134',
        background3: '#5d457a',
        button: '#97a9f6',
        'neu_button': '#32d74b',
        shadow: '#452a7c',
        shadow_dark: '#000000',
        shadow_light: '#ffffff',
        gray_light: 'rgba(235, 235, 245, 0.6)',
        start_button: 'rgba(151, 169, 246, 0.5)'
      },
      borderColor: {
        card: 'rgba(255,255,255,0.3)',
      },
      borderRadius: {
        'sm': '8px',
        'lg': '28px'
      },
      padding: {
        'sm': '8px',
        'md': '16px',
        'lg': '28px'
      },
      margin: {
        'sm': '8px',
        'md': '16px',
        'lg': '28px'
      },
      flex: {
        '5': '0 0 5%',
        '10': '0 0 10%',
        '15': '0 0 15%',
        '20': '0 0 20%',
        '30': '0 0 30%',
        '40': '0 0 40%',
        '50': '0 0 50%',
        '60': '0 0 60%',
        '70': '0 0 70%',
        '80': '0 0 80%',
        '90': '0 0 90%',
      }
    },
  },
  plugins: [],
}


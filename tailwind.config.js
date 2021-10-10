module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "mainBlue":"#0D1321",
        "mainOrange":"#F24C00",
      },
      backgroundClip:{
        custom:'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
      }
     
    },
    boxShadow:{
        custom:'0 4px 4px rgba(0,0,0,.1)',
      }
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["*"],
  theme: {
    extend: {
      colors:{
        primaryColor: "#F5E5E5",
        primaryColorlight: "#ffffff",
        secondaryColor: '#F44335',
        paragraphColor:"#DDDDDD",
        textColor: "#2D3142",
        darkColor:'#17202a',
        darkColorlight:'#171717'
      },
    },
    container:{
      center: true,
      padding:{
        DEFAULT:'1rem',
        sm:'1.5rem'
      }
    },
    fontFamily:{
      plus: ["Plus Jakarta Sans", 'sans-serif'],
    }
  },
  plugins: [],
}


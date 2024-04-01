/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#223F76',
        secondary: '#C8272E',
        gradient1: 'rgb(255, 230, 230)',
        gradient2: 'rgba(217, 217, 217, 0)',
      },
      dropShadow: {
        '3xl': '4px 4px 4px rgb(245, 245, 245)',
        '4xl': '0px 4px 4px rgb(0 0 0 / 0.25)',
      },
      boxShadow: {
        '3xl': '4px 4px 4px 1px #F5F5F5',
        '4xl': '0px 4px 4px 1px #F5F5F5',
        '5xl': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        mukta: ['Mukta Vaani', 'sans-serif'],
        Montagu: ['Montagu Slab', 'serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      transitionDuration: {
        0.3: '0.3s',
      },
      backgroundImage: {
        mobile: "url('./login-mobile.png')",
        web: "url('./login-web.png')",
      },
    },
    screens: {
      xs: '428px',
      s: '640px',
      sm: '768px',
      ml: '992px',
      lg: '1220px',
      mxl: '1440px',
      xl: '2000px',
    },
    container: {
      center: true,
      padding: '25px',
    },
  },
  plugins: [],
};

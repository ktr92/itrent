module.exports = {
  // mode: 'jit',
  purge: {
    // enabled: process.env.NODE_ENV === 'production',
    enabled: false,
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: 'Open Sans, sans-serif'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px'
    },
    container: {
      center: true
    },
    extend: {
      fontSize: {
        extra: '.625rem', // 10px
        '2xs': '0.8125rem', // 13px
        '2sm': '.9375rem' // 15px
      },
      colors: {
        elm: '#1F867E',
        'tahiti-gold': '#D48806',
        'sunset-orange': '#FF4D4F',
        'lavender-blush': '#FFF2F4',
        'catskill-white': '#F5F7FA',
        graybg: '#EBEBED',
        cyan: '#1F867E',
        link: '#1890FF'
      },
      opacity: {
        15: '0.15',
        45: '0.45',
        65: '0.65',
        85: '0.85'
      },
      maxWidth: {
        '2sm': '26.25rem'
      },
      borderWidth: {
        3: '3px'
      },
      boxShadow: {
        '3xl': '0px 2px 3px rgba(0, 0, 0, 0.12), 0px 3px 11px 1px rgba(0, 0, 0, 0.08)',
        '1xs': '0px -4px 5px rgba(0, 0, 0, 0.06)'
      },
      width: {
        '20xs': '20px'
      },
      height: {
        '20xs': '20px'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'even'],
      margin: ['last'],
      padding: ['last'],
      borderWidth: ['last']
    }
  },
  plugins: []
}

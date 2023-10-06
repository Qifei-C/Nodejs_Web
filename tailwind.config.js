module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,ttf}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      fontFamily: {
        primary: 'CentraNo2-Bold',
        secondary: 'CentraNo2-Medium',
        tertiary: 'CentraNo2-Book',
      },
      colors: {
        primary: '#0a0a0a',
        accent: '#84faeb',
      },
      backgroundImage: {
        site: "url('./assets/123 Night Sky.png')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const spacing = [...[...Array(201).keys()], 208, 248, 300, 400, 810];

const convertSpacing = spacing =>
  [...new Set(spacing)].reduce((res, space) => {
    res[space] = `${space}px`;
    return res;
  }, {});
const convertSpacingWithoutPx = spacing =>
  [...new Set(spacing)].reduce((res, space) => {
    res[space] = `${space}`;
    return res;
  }, {});

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '0px',
      md: '848px',
      lg: '1280px',
    },

    extend: {
      colors: {
        ...defaultTheme.colors,

        black: '#14151A',
        white: '#FFFFFF',

        gray7: '#1E2026',
        gray6: '#333D4B',
        gray5: '#515A68',
        gray4: '#6D7684',
        gray3: '#ADB3BE',
        gray2: '#E5E7EC',
        gray1: '#F3F4F5',

        green: '#51BCB9',
        red: '#FA7A84',
      },

      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        ...convertSpacing([...Array(101).keys()]),
      },

      fontWeight: {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },

      spacing: {
        ...defaultTheme.spacing,
        ...convertSpacing(spacing),
      },

      width: theme => ({ ...defaultTheme.width, ...theme('spacing') }),
      height: theme => ({ ...defaultTheme.height, ...theme('spacing') }),

      minWidth: theme => ({ ...defaultTheme.minWidth, ...theme('spacing') }),
      maxWidth: theme => ({ ...defaultTheme.maxWidth, ...theme('spacing') }),

      minHeight: theme => ({ ...defaultTheme.minHeight, ...theme('spacing') }),
      maxHeight: theme => ({ ...defaultTheme.maxHeight, ...theme('spacing') }),

      lineHeight: theme => ({
        ...defaultTheme.lineHeight,
        ...convertSpacing([...Array(101).keys()]),
      }),
      letterSpacing: theme => ({
        ...defaultTheme.letterSpacing,
      }),

      borderRadius: theme => ({
        ...defaultTheme.lineHeight,
        ...convertSpacing([...Array(101).keys()]),
      }),
      borderWidth: theme => ({
        ...defaultTheme.borderWidth,
        ...convertSpacing([...Array(21).keys()]),
      }),

      animation: theme => ({
        ...defaultTheme.animation,
      }),
      keyframes: theme => ({
        ...defaultTheme.keyframes,
      }),

      boxShadow: theme => ({
        ...defaultTheme.boxShadow,
      }),

      zIndex: theme => ({
        ...defaultTheme.zIndex,
        ...convertSpacingWithoutPx([...Array(101).keys()]),
        995: 995,
        996: 996,
        997: 997,
        998: 998,
        999: 999,
        1000: 1000,
        1001: 1001,
        1002: 1002,
        1003: 1003,
        1004: 1004,
        1005: 1005,
      }),
    },
  },
  truncate: {
    lines: { 2: '2', 3: '3', 4: '4' },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled', 'active'],
      borderColor: ['disabled', 'active'],
      textColor: ['disabled', 'active'],
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({});
      addComponents({
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.absolute-center': {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.absolute-center-x': {
          left: '50%',
          transform: 'translateX(-50%)',
        },
        '.absolute-center-y': {
          top: '50%',
          transform: 'translateY(-50%)',
        },

        '.clickable': {
          cursor: 'pointer',
        },
        '.non-clickable': {
          cursor: 'not-allowed',
          userSelect: 'none',
        },

        '.transition-color': {
          transitionProperty: 'background-color,border-color,color,fill,stroke',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '150ms',
        },

        '.font-l-11': { fontSize: '11px', lineHeight: '18px', fontWeight: 300 },
        '.font-l-12': { fontSize: '12px', lineHeight: '20px', fontWeight: 300 },
        '.font-l-14': { fontSize: '14px', lineHeight: '22px', fontWeight: 300 },
        '.font-l-16': { fontSize: '16px', lineHeight: '26px', fontWeight: 300 },
        '.font-l-18': { fontSize: '18px', lineHeight: '28px', fontWeight: 300 },

        '.font-r-11': { fontSize: '11px', lineHeight: '18px', fontWeight: 400 },
        '.font-r-12': { fontSize: '12px', lineHeight: '20px', fontWeight: 400 },
        '.font-r-14': { fontSize: '14px', lineHeight: '22px', fontWeight: 400 },
        '.font-r-16': { fontSize: '16px', lineHeight: '26px', fontWeight: 400 },
        '.font-r-18': { fontSize: '18px', lineHeight: '28px', fontWeight: 400 },
        '.font-r-20': { fontSize: '20px', lineHeight: '30px', fontWeight: 400 },
        '.font-r-24': { fontSize: '24px', lineHeight: '32px', fontWeight: 400 },

        '.font-sb-12': { fontSize: '12px', lineHeight: '20px', fontWeight: 600 },
        '.font-sb-14': { fontSize: '14px', lineHeight: '22px', fontWeight: 600 },
        '.font-sb-16': { fontSize: '16px', lineHeight: '26px', fontWeight: 600 },
        '.font-sb-18': { fontSize: '18px', lineHeight: '28px', fontWeight: 600 },
        '.font-sb-20': { fontSize: '20px', lineHeight: '30px', fontWeight: 600 },
        '.font-sb-24': { fontSize: '24px', lineHeight: '32px', fontWeight: 600 },
        '.font-sb-28': { fontSize: '28px', lineHeight: '38px', fontWeight: 600 },
      });
      addUtilities({});
    }),
  ],
};

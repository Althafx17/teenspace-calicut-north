/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Resend Design System */
        'void':       '#000000',
        'graphite':   '#292d30',
        'bone':       '#f0f0f0',
        'ash':        '#a1a4a5',
        'smoke':      '#abafb4',
        'iron':       '#6e727a',
        'charcoal':   '#464a4d',
        'violet':     '#9281f7',
        'violet-glow':'#baa7ff',
        'signal':     '#3b9eff',
        'sky':        '#70b8ff',
        'pulse':      '#3ad389',
        'alarm':      '#ff9592',
        'crimson':    '#ff6465',
        'amber-tone': '#ffca16',
        'lift':       '#0b0e14',
        'surface':    '#111316',
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono:  ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'caption':    ['12px', { lineHeight: '1.33' }],
        'body-sm':    ['14px', { lineHeight: '1.43' }],
        'body':       ['16px', { lineHeight: '1.5'  }],
        'subhead':    ['20px', { lineHeight: '1'    }],
        'head-sm':    ['24px', { lineHeight: '1.5'  }],
        'head':       ['56px', { lineHeight: '1.2', letterSpacing: '-2.8px' }],
        'head-lg':    ['77px', { lineHeight: '1',   letterSpacing: '-0.77px' }],
        'display':    ['clamp(52px,9vw,96px)', { lineHeight: '1', letterSpacing: '-0.96px' }],
      },
      borderColor: {
        DEFAULT: '#292d30',
      },
      borderRadius: {
        'sm':   '6px',
        'md':   '10px',
        'card': '16px',
        '2xl':  '16px',
        '3xl':  '24px',
      },
      spacing: {
        '18': '72px',
        '96': '384px',
        '104': '416px',
        '144': '576px',
      },
    },
  },
  plugins: [],
}

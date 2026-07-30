/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* White/Light Design System with Pink & Blue Accents */
        'void':       '#ffffff',
        'graphite':   '#e2e8f0',
        'bone':       '#0f172a',
        'ash':        '#475569',
        'smoke':      '#64748b',
        'iron':       '#94a3b8',
        'charcoal':   '#cbd5e1',
        'violet':     '#FF3E8A',
        'violet-glow':'#FF3E8A',
        'signal':     '#4DA8FF',
        'sky':        '#4DA8FF',
        'pulse':      '#3ad389',
        'alarm':      '#ff9592',
        'crimson':    '#ff6465',
        'amber-tone': '#ffb829',
        'lift':       '#f8fafc',
        'surface':    '#ffffff',
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

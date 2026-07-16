/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        salmon: {
          DEFAULT: '#fa8072',
          dark: '#e66767',
          light: '#ffdcd4',
          extra: '#fff5f3',
        },
        studio: {
          text: '#4a3a38',
          muted: '#6b5a57',
          footer: '#a0807a'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'shine': 'shine 3s ease-in-out infinite',
        'slide': 'slide 9s infinite ease-in-out',
        'dot-pulse': 'dotPulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '0%, 100%': { transform: 'translateX(-30%)' },
          '50%': { transform: 'translateX(30%)' },
        },
        slide: {
          '0%, 33%': { transform: 'translateX(0)' },
          '34%, 66%': { transform: 'translateX(-100%)' },
          '67%, 100%': { transform: 'translateX(-200%)' },
        },
        dotPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        }
      }
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        main: 'var(--Primary-Accent-Color)',
        secondary: 'var(--Secondary-Accent-Color)',
        mainBackground: 'var(--Main-Background)',
        sectionBackground: 'var(--Section-Backgrounds)',
        mainText: 'var(--Main-Text)',
        secondaryText: 'var(--Secondary-Text)',
        successMessages: 'var(--Success-Messages)',
        errorMessages: 'var(--Error-Messages)'
      },
    },
  },
  plugins: [],
}


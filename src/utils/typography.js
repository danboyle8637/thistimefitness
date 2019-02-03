import Typography from 'typography'

const fonts = new Typography({
  headerFontFamily: ['Montserrat'],
  bodyFontFamily: ['Quickstand', 'Muli', 'sans-serif'],
  baseFontSize: '16px',
  baseLineHeight: 1.8,
  headerLineHeight: 1.2,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400', '500', '700'],
    },
    {
      name: 'Quicksand',
      styles: ['500'],
    },
    {
      name: 'Muli',
      styles: ['400'],
    },
  ],
  headerWeight: 700,
  bodyWeight: 500,
})

export default fonts

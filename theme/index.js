import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

export const themeColors = {
   bg: '#877dfa',
   text: '#4E493D',
   
}   

export const theme={
   bgWhite: opacity =>`rgba(255,255,255, ${opacity})`,
   bgBlack: opacity =>`rgba(0,0,0,1 , ${opacity})`
}

export const themeBgColors = {
   // bgColor: opacity=> `rgba(145, 73, 0, ${opacity})`,
   // bgColor: opacity=> `rgba(65, 2, 0, ${opacity})`,
   bgColor: opacity=> `rgba(112, 66, 20, ${opacity})`,
   bgLight: '#d4a574',
   bgDark: '#8c5319',
   text: '#3C2A21'
   
}   

export const COLORS = {
   primary: '#242760',
   secondary: '#544C4C',
   white: '#FFFFFF',
   black: '#000000',
   gray: 'rgba(36, 39, 96, 0.05)',
   secondaryGray: 'rgba(84, 76, 76, 0.14)'
}
export const SIZES = {
   // global SIZES
   base: 8,
   font: 14,
   radius: 30,
   padding: 10,
   padding2: 12,
   padding3: 16,

   // font sizes
   largeTitle: 50,
   h1: 30,
   h2: 20,
   h3: 18,
   h4: 16,
   body1: 30,
   body2: 20,
   body3: 18,
   body4: 14,
   body5: 12,

   // app dimensions
   width,
   height,
}

export const FONTS = {
   largeTitle: {
       fontFamily: 'black',
       fontSize: SIZES.largeTitle,
       lineHeight: 55,
   },
   h1: { fontFamily: 'bold', fontSize: SIZES.h1, lineHeight: 36 },
   h2: { fontFamily: 'bold', fontSize: SIZES.h2, lineHeight: 30 },
   h3: { fontFamily: 'bold', fontSize: SIZES.h3, lineHeight: 22 },
   h4: { fontFamily: 'bold', fontSize: SIZES.h4, lineHeight: 20 },
   body1: { fontFamily: 'regular', fontSize: SIZES.body1, lineHeight: 36 },
   body2: { fontFamily: 'regular', fontSize: SIZES.body2, lineHeight: 30 },
   body3: { fontFamily: 'regular', fontSize: SIZES.body3, lineHeight: 22 },
   body4: { fontFamily: 'regular', fontSize: SIZES.body4, lineHeight: 20 },
}

const appTheme = { COLORS, SIZES, FONTS }
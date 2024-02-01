import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

/* fonts */
export const FontFamily = {
  altis: 'Altis-regular',
  sFPro: 'SF Pro',
  atithibold: 'Athiti-Bold',
  BLACK: 'Athiti-Black',
  BLACK_ITALIC: 'Athiti-BlackItalic',
  BOLD: 'Athiti-Bold',
  BOLD_LIGHT: 'Athiti-Light',
  BOLD_ITALIC: 'Athiti-BoldItalic',
  MEDIUM: 'Athiti-Medium',
  REGULAR: 'Athiti-Regular',
  SEMI_BOLD: 'Athiti-SemiBold',
  THIN: 'Athiti-Thin',
};
/* font sizes */

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 350;

export function normalize(size: any) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const FontSize = {
  /** h1 = 28 */
  h1: normalize(28),
  /** h2 = 24 */
  h2: normalize(24),
  /** h3 = 22 */
  h3: normalize(22),
  /** h4 = 20 */
  h4: normalize(20),
  /** h5 = 18 */
  h5: normalize(18),
  /** h6 = 16 */
  h6: normalize(16),
  /** t1 = 14 */
  t1: normalize(14),
  /** t2 = 12 */
  t2: normalize(12),
  /** t3 = 10 */
  t3: normalize(10),
  /** t4 = 8 */
  t4: normalize(8),

  large: normalize(36),

  h7: normalize(32),

  h8: normalize(26),
};
/* Colors */
export const Color = {
  colorWhite: '#fff',
  primaryBlue: '#078cfe',
  calmBlack: '#31373a',
  black: '#000',
  backgroundColor: '#FEFEFE',
  darkBlue: '#0F2C4C',
  lightRed: '#FF5C5C',
  lightBlue: '#9CD1FF',
  lightBlue2: '#e0effc'
};
/* border radiuses */
export const Border = {
  br_3xs: 10,
};

export const Isios = Platform.OS === 'ios'

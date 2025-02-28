import {moderateScale} from 'react-native-size-matters';
import colors from '../constants/colors';
import {MetricsMod} from './Matrics';

const fontSet = {
  xxxlarge: moderateScale(50),
  xxlarge: moderateScale(40),
  xmlarge: moderateScale(35),
  xlarge: moderateScale(30),
  xXlarge: moderateScale(32),
  largeIII: moderateScale(28),
  largeII: moderateScale(26),
  large: moderateScale(25),
  largeI: moderateScale(24),
  middleIII: moderateScale(23),
  middleII: moderateScale(22),
  middleI: moderateScale(21),
  middle: moderateScale(20),
  xmiddle: moderateScale(18),
  xmiddleI: moderateScale(19),
  normalI: moderateScale(17),
  normal: moderateScale(16),
  mediumI: moderateScale(15),
  medium: moderateScale(14),
  smallI: moderateScale(13.5),
  small: moderateScale(13),
  tiny: moderateScale(13),
  smaller: moderateScale(12),
  xsmall: moderateScale(11),
  xsmallII: moderateScale(10),
  xxsmallI: moderateScale(9),
  xxsmall: moderateScale(8),
  xxxsmall: moderateScale(5),
  title: moderateScale(30),
  content: moderateScale(20),
};

const fontFamily = {
 ArimoRegular: 'Arimo-Regular',
 ArimoBold: 'Arimo-Bold',
 ArimoMedium: 'Arimo-Medium',
 ArimoLight: 'Arimo-Light',
};

const StyleDict = {
  colors,
  fontSet,
  fontFamily,
};

export default StyleDict;

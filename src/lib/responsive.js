import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const sdwidth = 411.42857142857144;
const sdheight = 683.4285714285714;

exports.wp = (w) => {
  const dai = (w / sdwidth) * width;
  return dai;
};

exports.hp = (h) => {
  const rong = (h / sdheight) * height;
  return rong;
};

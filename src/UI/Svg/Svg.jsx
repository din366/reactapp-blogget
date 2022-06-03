import PropTypes from 'prop-types';
import {ReactComponent as TestSvg}
  from '../../components/Main/List/Post/img/down.svg';

const iconList = {
  TestSvg,
};

export const Svg = (prop) => {
  const {
    icon,
    width,
    height,
    fill,
  } = prop;
  const Icon = iconList[icon];

  return <Icon width={width} height={height} fill={fill}></Icon>;
};

Svg.propTypes = {
  icon: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

// ! for test <Svg icon='TestSvg' width={20} height={20} fill='red'></Svg>

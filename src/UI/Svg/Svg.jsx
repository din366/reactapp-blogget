/* import classNames from 'classnames';
import style from './Text.module.css'; */
import PropTypes from 'prop-types';
import React from 'react';

export const Svg = (prop) => {
  const {
    href,
  } = prop;

  React.createElement('svg');
  /* const classes = classNames(
    className,
    style[`fs${size}`],
    style[color],
    {[style.medium]: medium},
    {[style.bold]: bold},
    {[style.center]: center},
    {[style[`fs${size}`]]: size},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fsd${dsize}`]]: dsize},
  ); */

  return <img href={href}></img>;
};

Text.propTypes = {
  href: PropTypes.string,
};


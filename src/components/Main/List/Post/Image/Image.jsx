import style from './Image.module.css';
import PropTypes from 'prop-types';
import notphoto from '../img/notphoto.jpg';

export const Image = (props) => (
  <img
    className={style.img}
    src={props.src === 'self' ? notphoto : props.src}
    alt={props.title}
  />
);

export default Image;

Image.propTypes = {
  title: PropTypes.string,
  ariaLabel: PropTypes.string,
  thumbnail: PropTypes.string,
  src: PropTypes.string,
};

import {CircleLoader} from 'react-spinners';
import PropTypes from 'prop-types';

export const AuthLoader = ({size = 25}) => (
  <CircleLoader color='#cc6633' css={{display: 'block'}} size={size} />
);

AuthLoader.propTypes = {
  size: PropTypes.number,
};

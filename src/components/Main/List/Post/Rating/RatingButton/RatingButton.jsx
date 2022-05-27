import PropTypes from 'prop-types';

const RatingButton = (props) => (
  <button className={props.styleButton} aria-label={props.ariaLabel} />
);

RatingButton.propTypes = {
  styleButton: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default RatingButton;

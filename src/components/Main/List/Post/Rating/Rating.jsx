import style from './Rating.module.css';
import RatingButton from './RatingButton';
import PropTypes from 'prop-types';

const Rating = (props) => (
  <div className={style.rating}>
    <RatingButton ariaLabel='Повысить рейтинг' styleButton={style.up} />
    <p className={style.ups}>{props.ups}</p>
    <RatingButton ariaLabel='Понизить рейтинг' styleButton={style.down} />
  </div>
);

Rating.propTypes = {
  ups: PropTypes.number,
};

export default Rating;

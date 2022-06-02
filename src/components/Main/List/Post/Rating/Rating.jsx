import style from './Rating.module.css';
import RatingButton from './RatingButton';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

const Rating = (props) => (
  <div className={style.rating}>
    <RatingButton ariaLabel='Повысить рейтинг' styleButton={style.up} />
    <Text As='p' className={style.ups}>{props.ups}</Text>
    <RatingButton ariaLabel='Понизить рейтинг' styleButton={style.down} />
  </div>
);

Rating.propTypes = {
  ups: PropTypes.number,
};

export default Rating;

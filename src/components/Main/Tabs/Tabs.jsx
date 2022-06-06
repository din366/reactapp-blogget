import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import {assignId} from '../../../utils/generateRandomId';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as EyeIcon} from './img/eye.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {debounceRaf} from '../../../utils/debounce';
import {Text} from '../../../UI/Text';

import {postsContext} from '../../../context/postsContext';
import {useContext} from 'react';

const LIST = [
  {value: 'Главная', Icon: EyeIcon, handing: 'hot'},
  {value: 'Топ', Icon: TopIcon, handing: 'top'},
  {value: 'Лучшие', Icon: BestIcon, handing: 'best'},
  {value: 'Горячие', Icon: HotIcon, handing: 'hot'},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState('Главная');

  const {setPostCategory} = useContext(postsContext);

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {currentMenuItem}
            <ArrowIcon width={15} height={15}/>
          </button>
        </div>
      )}

      {/* Если dropdown true - откроется меню */}
      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({value, id, Icon, handing}) => (
            <Text as="li" medium className={style.item} key={id}>
              <button className={style.btn} onClick={() => {
                setCurrentMenuItem(value);
                setPostCategory(handing);
              }}>
                {value}
                {Icon && <Icon width={25} height={25}/>}
              </button>
            </Text>
          ))}
        </ul>)}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};

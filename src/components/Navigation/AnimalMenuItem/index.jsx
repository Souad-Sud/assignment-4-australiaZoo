import styles from '../navigation.module.css';
import { NavLink } from 'react-router-dom';

const AnimalMenuItem = ({ pageItem }) => {
  const path = pageItem.toLowerCase() === 'home' ? '/' : `/${pageItem.toLowerCase()}`;

  return (
    <NavLink
      to={path}
      end={pageItem.toLowerCase() === 'home'}
      className={({ isActive }) =>
        isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem
      }
    
    >
      {pageItem}
    </NavLink>
  );
};

export default AnimalMenuItem;
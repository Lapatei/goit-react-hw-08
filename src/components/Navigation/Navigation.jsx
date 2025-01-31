import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css'

const Navigation = () => (
  <nav className={styles.navigation}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/contacts">Contacts</NavLink>
  </nav>
);

export default Navigation;

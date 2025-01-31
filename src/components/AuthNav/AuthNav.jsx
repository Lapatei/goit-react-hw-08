import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css'

const AuthNav = () => (
  <nav className={styles.navigation}>
    <NavLink to="/register">Register</NavLink>
    <NavLink to="/login">Login</NavLink>
  </nav>
);

export default AuthNav;

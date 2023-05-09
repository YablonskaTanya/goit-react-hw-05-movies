import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Nav = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <ul className={css.list}>
          <NavLink className={css.item} to="/">
            <li className={css.active}>Home</li>
          </NavLink>
          <NavLink className={css.item} to="/movies">
            <li className={css.active}>Movies</li>
          </NavLink>
        </ul>
      </header>
    </div>
  );
};

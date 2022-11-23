import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import styles from './Navbar.module.scss';

interface NavbarProps {
  type?: string;
}

const Navbar = ({ type }: NavbarProps) => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogout = () => {
    dispatch && dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className={styles['navbar']}>
      <div className={styles['navbar__container']}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className={styles['navbar__container__logo']}>
            Zuong Booking
          </span>
        </Link>
        {user ? (
          <div className={styles['navbar__container__items']}>
            {user.username}
            <button
              className={styles['navbar__container__items__btn']}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className={styles['navbar__container__items']}>
            {type !== 'login' && (
              <>
                <button
                  className={styles['navbar__container__items__btn']}
                  onClick={handleRegister}
                >
                  Register
                </button>
                <button
                  className={styles['navbar__container__items__btn']}
                  onClick={handleLogin}
                >
                  Sign in
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

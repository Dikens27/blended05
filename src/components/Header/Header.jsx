import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdCurrencyExchange } from 'react-icons/md';

import styles from './Header.module.css';
import { getBaseCurrency } from 'reduxState/currency/slise';

export const Header = () => {
  const currency = useSelector(getBaseCurrency);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <MdCurrencyExchange className={styles.logo} />
          <nav>
            <ul className={styles.nav}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rates"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Rates
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {currency && <p> Your base currency: {currency}</p>}
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

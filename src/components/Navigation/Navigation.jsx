import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';
import { UserMenu } from 'components/UserMenu';

export const Navigation = () => {
  const { isLoggedIn } = useSelector(getUser);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/registration">Register</NavLink>
        </li>
        {!isLoggedIn ? (
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        ) : (
          <div></div>
        )}
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

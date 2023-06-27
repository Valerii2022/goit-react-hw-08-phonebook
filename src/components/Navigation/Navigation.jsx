import { useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';
import { UserMenu } from 'components/UserMenu';
import { List, Link, Container } from './styled';

export const Navigation = () => {
  const { isLoggedIn } = useSelector(getUser);
  return (
    <Container>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* {!isLoggedIn && ( */}
        <li>
          <Link to="/registration">Register</Link>
        </li>
        {/* // )} */}
        {isLoggedIn && (
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        )}
      </List>
      <List>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <li>
            <Link to="/login">Log In</Link>
          </li>
        )}
      </List>
    </Container>
  );
};

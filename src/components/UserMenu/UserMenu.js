import { useSelector, useDispatch } from 'react-redux';
import { userLogOut } from 'redux/operations';
import { getUser } from 'redux/selectors';
import { Container, Text } from './styled';
import { Button } from 'pages/styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  console.log(user.user.name);

  return (
    <>
      {user && (
        <Container>
          <Text>Welcome, {user.user.name}</Text>
          <Button
            onClick={() => {
              dispatch(userLogOut());
            }}
          >
            Logout
          </Button>
        </Container>
      )}
    </>
  );
};

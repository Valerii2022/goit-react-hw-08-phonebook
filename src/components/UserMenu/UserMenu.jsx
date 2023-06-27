import { useDispatch } from 'react-redux';
import { userLogOut } from 'redux/operations';
import { Container, Text } from './styled';
import { Button } from 'pages/styled';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useAuth();

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

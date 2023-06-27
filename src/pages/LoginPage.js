import { useDispatch } from 'react-redux';
import { userLogIn } from 'redux/operations';
import { Button, Form, FormInput } from './styled';

export const Login = () => {
  const dispatch = useDispatch();
  const user = { email: '', password: null };
  const handleLoginSubmit = e => {
    e.preventDefault();
    user.email = e.target[0].value;
    user.password = e.target[1].value;

    dispatch(userLogIn(user));
  };

  return (
    <div>
      <h1>Login page</h1>
      <Form onSubmit={handleLoginSubmit}>
        <FormInput type="email" name="email" required placeholder="Email" />
        <FormInput
          type="password"
          name="password"
          required
          placeholder="Password"
        />
        <Button>Log In</Button>
      </Form>
    </div>
  );
};

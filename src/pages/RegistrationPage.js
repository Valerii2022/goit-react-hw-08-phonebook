import { useDispatch } from 'react-redux';
import { userRegistrations } from 'redux/operations';
import { Button, Form, FormInput } from './styled';

const Registration = () => {
  const dispatch = useDispatch();
  const user = { name: '', email: '', password: null };

  const handleRegistrationsSubmit = e => {
    e.preventDefault();
    user.name = e.target[0].value;
    user.email = e.target[1].value;
    user.password = e.target[2].value;

    dispatch(userRegistrations(user));
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <Form onSubmit={handleRegistrationsSubmit}>
        <FormInput type="text" name="name" required placeholder="Name" />
        <FormInput type="email" name="email" required placeholder="Email" />
        <FormInput
          type="password"
          name="password"
          required
          placeholder="Password"
        />
        <Button>Register</Button>
      </Form>
    </div>
  );
};

export default Registration;

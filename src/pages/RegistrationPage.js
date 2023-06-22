import { useDispatch } from 'react-redux';
import { userRegistrations } from 'redux/operations';

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
      <form onSubmit={handleRegistrationsSubmit}>
        <input type="text" name="name" required placeholder="Name" />
        <input type="email" name="email" required placeholder="Email" />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Registration;

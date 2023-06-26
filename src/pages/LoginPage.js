import { useDispatch } from 'react-redux';
import { userLogIn } from 'redux/operations';

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
      <div>
        <h1>Login page</h1>
        <form onSubmit={handleLoginSubmit}>
          <input type="email" name="email" required placeholder="Email" />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

import { useDispatch } from 'react-redux';
// import { UserMenu } from 'components/UserMenu';
import { userLogIn } from 'redux/operations';
// import { getUser } from 'redux/selectors';

export const Login = () => {
  const dispatch = useDispatch();
  const user = { email: '', password: null };
  // const { isLoggedIn } = useSelector(getUser);
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

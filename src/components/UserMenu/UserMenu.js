import { useSelector, useDispatch } from 'react-redux';
import { userLogOut } from 'redux/operations';
import { getUser } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  return (
    <div>
      <p>Welcome, {user.user.name}</p>
      <button
        onClick={() => {
          dispatch(userLogOut());
        }}
      >
        Logout
      </button>
    </div>
  );
};

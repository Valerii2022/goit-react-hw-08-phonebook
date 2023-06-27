import { useSelector } from 'react-redux';
import { getUser } from 'redux/selectors';

export const useAuth = () => {
  const { user, isLoggedIn, isRefreshing } = useSelector(getUser);

  return {
    isLoggedIn,
    user,
    isRefreshing,
  };
};

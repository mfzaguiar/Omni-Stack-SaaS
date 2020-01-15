import { useSelector } from 'react-redux';

export default function Can({ children, checkPermission, checkRole }) {
  const auth = useSelector(state => state.auth);

  function checkAuth({ roles, permissions }, checkPermission, checkRole) {
    if (checkRole && !roles.includes(checkRole)) {
      return false;
    }
    if (checkPermission && !permissions.includes('invites_create')) {
      return false;
    }

    return true;
  }

  return typeof children === 'function'
    ? children(checkAuth(auth, checkPermission, checkRole))
    : children;
}

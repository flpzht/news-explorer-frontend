import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { CurrentUserContext } from '@/contexts/CurrentUserContext';

function ProtectedRoute({ isCheckingAuth, onUnauthorized, children }) {
  const currentUser = useContext(CurrentUserContext);
  const isUnauthorized = !isCheckingAuth && !currentUser;

  useEffect(() => {
    if (isUnauthorized) onUnauthorized();
  }, [isUnauthorized, onUnauthorized]);

  if (isCheckingAuth) return null;
  if (isUnauthorized) return <Navigate to="/" replace />;

  return children;
}

export default ProtectedRoute;
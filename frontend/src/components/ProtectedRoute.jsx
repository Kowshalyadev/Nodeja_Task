import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { app } from '../fbconfig';

function ProtectedRoute({ children }) {
  const auth = getAuth(app);
  const user = auth.currentUser;

  return user ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;

// components/PrivateRoute.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth'; // Use your authentication context or library

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth(); // Replace with your authentication logic

  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirect to the login page if the user is not authenticated
    }
  }, []);

  return children;
};

export default PrivateRoute;

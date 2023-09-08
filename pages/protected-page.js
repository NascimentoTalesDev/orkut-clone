// pages/protected-page.js
import PrivateRoute from '../components/PrivateRoute';

const ProtectedPage = () => {
  return (
    <PrivateRoute>
      <div>
        This is a protected page.
      </div>
    </PrivateRoute>
  );
};

export default ProtectedPage;

// useAuth.js
import { useState, useEffect, useContext } from 'react';
import { verify } from 'jsonwebtoken';
import { AuthContext } from '@/context/authContext';

const useAuth =  ()  => {
    const { user, setUser } = useContext(AuthContext)

        useEffect(() => {
            const token = await localStorage.getItem('token');
            console.log("Este é o token", token);

        if (token) {

            try {
                console.log("Este é o token aqui também", token);
                const decodedUser = verify(token);

                console.log("Verificado", decodedUser);
                setUser(decodedUser);

            } catch (error) {
                console.log("TOKEN INVALIDO");
                // Invalid or expired token
                localStorage.removeItem('token');
                setUser(null);
            }

        } else {
          setUser(null);
        }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return { user, handleLogout };
};

export default useAuth;

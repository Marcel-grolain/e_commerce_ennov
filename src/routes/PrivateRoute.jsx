import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


const PrivateRoute = (props) => {
    const { isLoggedIn } = useAuth();
    const Component = props.Component;

    return isLoggedIn ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;

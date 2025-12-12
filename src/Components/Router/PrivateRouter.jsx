import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';


const PrivateRouter = ({children}) => {
    const { user, loading } = use(AuthContext);

    const location = useLocation()
    console.log(location)

    if (loading) {
        return <span className="loading loading-spinner loading-xl mx-auto"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location?.pathname} to={"/login"}></Navigate>
};

export default PrivateRouter;
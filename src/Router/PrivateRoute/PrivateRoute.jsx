// import React, { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider.jsx';

// const PrivateRoute = ({children}) => {
//     const {user, loading}= useContext(AuthContext)
//     const location = useLocation();
    
    // if(loading){
    //     return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    // }
//     if(!user){
//         return children
//     }
//     return (
//         <Navigate state={{from: location }} replace></Navigate>
//     );
// };

// export default PrivateRoute;
import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext);
    const location = useLocation()


    if(loading){
        return <h1>loading</h1>
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace ></Navigate>
    }
    return children ;
    
};

export default PrivateRoute;
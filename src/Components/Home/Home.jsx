import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const Home = () => {
    const authInfo = use(AuthContext)
    console.log(authInfo);
    
    return (
        <div>
            <h2>this is home</h2>
        </div>
    );
};

export default Home;
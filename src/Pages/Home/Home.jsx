import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import Bannar from './Bannar';

const Home = () => {
    return (
        <div>
                <Bannar/>
                <Services/>
                <div className=' text-center py-6'>
                    <Link to='services'><button className="btn btn-primary">Sell All</button></Link>
                </div>
        </div>
    );
};

export default Home;
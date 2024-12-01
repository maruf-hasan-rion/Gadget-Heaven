// import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (

        <div className='container mx-auto'>
            <Toaster></Toaster>
            <div className='p-6'>
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-232px)] container mx-auto px-4 py-4">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
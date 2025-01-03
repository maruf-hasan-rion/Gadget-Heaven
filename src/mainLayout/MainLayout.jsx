// import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import Navbar2 from "../components/NavBar2";

const MainLayout = () => {
  const location = useLocation();

  // Determine the background color based on the current route
  const isHomePage = location.pathname === "/";
  return (
    <div className="container mx-auto">
      <Toaster></Toaster>
      <div className="p-6">
        {isHomePage?<div className="relative top-32 w-11/12 mx-auto">
          <Navbar2></Navbar2>
        </div>:<Navbar></Navbar>}
      </div>
      <div className="min-h-[calc(100vh-232px)] container mx-auto px-4 py-4">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      {/* className="relative lg:-top-64 -top-32 w-11/12" */}
       
    </div>
  );
};

export default MainLayout;

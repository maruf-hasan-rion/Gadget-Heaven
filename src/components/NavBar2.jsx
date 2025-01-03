import { Link, NavLink} from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";


const Navbar2 = () => {
    
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        <Link  className="font-semibold text-white underline" to='/'>Home
                        </Link>
                        <NavLink
                            className="font-semibold text-white"
                            to='/statistics'>Statistics
                        </NavLink>
                        <NavLink
                            className="font-semibold text-white"
                            to='/dashboard'
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            className="font-semibold text-white"
                            to='/aboutUs'
                        >
                            About Us
                        </NavLink>
                    </ul>
                </div>
                <Link to='/' className='text-xl font-extrabold text-white'>Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link className="font-semibold px-4 text-white underline" to='/'>Home
                    </Link>
                    <NavLink
                        className="font-semibold px-4 text-white"
                        to='/statistics'>Statistics
                    </NavLink>
                    <NavLink
                        className="font-semibold px-4 text-white"
                        to='/dashboard'
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                            className="font-semibold text-white"
                            to='/aboutUs'
                        >
                            About Us
                        </NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <button className="btn btn-ghost btn-circle text-xl border-2 border-[#0B0B0B1A] bg-white text-black">
                    <IoCartOutline></IoCartOutline>
                </button>
                <button className="btn btn-ghost btn-circle border-2 border-[#0B0B0B1A] bg-white text-black">
                    <div className="indicator text-xl">
                        <MdFavoriteBorder></MdFavoriteBorder>
                        {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar2;
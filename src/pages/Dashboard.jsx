
import { NavLink, Outlet } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';


const Dashboard = () => {
    return (
        <div>
            <div className="hero bg-[#9538E2] min-h-[250px] text-white">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-4xl font-bold">Dashboard</h1>
                        <p className="py-6 text-sm">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                        </p>
                        <div className="flex gap-10 justify-center">
                            <NavLink

                                to='/dashboard/cart'>
                                <button className="btn w-32 rounded-full">Cart</button>
                            </NavLink>
                            <NavLink

                                to='/dashboard/wishList'>
                                <button className="btn w-32 rounded-full bg-transparent border-1 text-white ">Wishlist</button>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </div>

    );
};

export default Dashboard;
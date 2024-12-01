// import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
// import Carts from '../components/Carts';
// import { getAllCarts } from '../utility';
// import Card from '../components/Card';

const Dashboard = () => {
    // const [cart, setCart] = useState([]);
    // // const [sort, setSort] = useState('');
    // const allCarts = useLoaderData();
    // // ideally we will directly get the read book list from the database

    // useEffect(() => {
    //     const storedCart = getAllCarts();
    //     const storedCartInt = storedCart.map(product_id => (product_id));
    //     // worst way
    //     console.log(storedCart, storedCartInt, allCarts);

    //     // 
    //     const addCarts = allCarts.filter(cart => storedCart.includes(cart.product_id));

    //     setCart(addCarts);

    // }, []);
    return (
        <div>
            <div className="hero bg-[#9538E2] min-h-[250px] text-white">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-4xl font-bold">DashBoard</h1>
                        <p className="py-6 text-sm">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                        </p>
                        <div className="flex gap-16 justify-center">
                            <NavLink

                                to='dashboard/cart'>
                                <button className="btn w-32 rounded-full">Cart</button>
                            </NavLink>
                            <NavLink

                                to='dashboard/wishList'>
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
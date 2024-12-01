import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getAllCarts } from '../utility';
// import Card from '../components/Card';

const Dashboard = () => {
    const [cart, setCart] = useState([]);
    // const [sort, setSort] = useState('');
    const allCarts = useLoaderData();
    // ideally we will directly get the read book list from the database

    useEffect(() => {
        const storedCart = getAllCarts();
        const storedCartInt = storedCart.map(product_id => (product_id));
        // worst way
        console.log(storedCart, storedCartInt, allCarts);

        // 
        const addCarts = allCarts.filter(cart => storedCart.includes(cart.product_id));

        setCart(addCarts);

    }, []);
    return (
        <div className="hero bg-[#9538E2] min-h-[350px] text-white">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-4xl font-extrabold">DashBoard</h1>
                    <p className="py-6 text-sm">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                    </p>
                    {/* <div className="flex gap-16 justify-center">
                        <button className="btn w-32 rounded-full">Cart</button>
                        <button className="btn w-32 rounded-full bg-transparent border-1 text-white ">Wishlist</button>
                    </div> */}
                    <Tabs>
                        <TabList>
                            <Tab>Cart</Tab>
                            <Tab>Wishlist</Tab>
                        </TabList>

                        <TabPanel>
                            <h2 className='text-2xl'>Gadgets added: {cart.length}</h2>
                            {/* {
                                cart.map(cart => <Card key={cart.product_id} cart={cart}></Card>)
                            } */}
                        </TabPanel>
                        <TabPanel>
                            <h2>wishlist</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            {/* <div>
                <Outlet></Outlet>
            </div> */}
        </div>
    );
};

export default Dashboard;
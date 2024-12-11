
// import Navbar from "../components/Navbar";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import banner from "../assets/banner.jpg";
import Categories from "../components/Categories";

const Home = () => {
    const categories = useLoaderData()
    // console.log(categories)
    return (
        <div >
            <div className="hero bg-[#9538E2] text-white rounded-3xl min-h-screen">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-extrabold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                        <p className="py-6 text-sm">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                        </p>
                        <Link to="/dashboard"><button className="btn text-[#9538E2] rounded-full">Shop Now</button></Link>
                    </div>
                </div>
            </div>
            <div className="relative -top-36 left-56">
                <img className="rounded-3xl w-3/5 h-96" src={banner} alt="" />
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-extrabold my-4">Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className="grid grid-cols-3">
                {/* Categories tab section */}
               <div className="">
               <Categories categories={categories}></Categories>
               </div>
                {/* Dynamic Nested Component */}
               <div className="col-span-2">
               <Outlet></Outlet>
               </div>
            </div>

        </div>

    );
};

export default Home;
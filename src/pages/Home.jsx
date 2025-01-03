import { Link, Outlet, useLoaderData } from "react-router-dom";
import banner from "../assets/banner.jpg";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet-async";
// import Navbar from "../components/Navbar";
// import Navbar2 from "../components/NavBar2";

const Home = () => {
  const categories = useLoaderData();

  // console.log(categories)
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="hero bg-[#9538E2] text-white rounded-3xl min-h-screen">
        {/* <div className="relative lg:-top-64 -top-32 w-11/12">
          <Navbar2></Navbar2>
        </div> */}
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-extrabold">
              Upgrade Your Tech Accessorize with <br /> Gadget Heaven
              Accessories
            </h1>
            <p className="py-6 text-sm">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br /> the coolest accessories,
              we have it all!
            </p>
            <Link to="/dashboard">
              <button className="btn text-[#9538E2] rounded-full">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative -top-36 left-56">
        {/* <div className="rounded-3xl w-3/5 h-96 bg-slate-300"> */}

        {/* </div> */}
        <div className="rounded-3xl w-3/5 h-96 border backdrop-blur-3xl ">
          <img
            className="p-4 rounded-3xl w-full h-[400px]"
            src={banner}
            alt=""
          />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Explore Cutting-Edge Gadgets
        </h1>
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

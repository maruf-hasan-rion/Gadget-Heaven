import { Link } from "react-router-dom";
import about from "../assets/about1.png"
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
    return (
        <div>
            <Helmet>
<title>About Us</title>
</Helmet>
            <div className="flex my-10 gap-10">
                <div className="flex-1 flex flex-col gap-4">
                    <h3 className="text-sky-700 font-bold text-xl">ABOUT US</h3>
                    <h1 className="text-5xl font-extrabold mb-4">Who We Are?</h1>
                    <p>Welcome to GadgetHaven, your ultimate destination for the latest and most innovative gadgets on the market!</p>
                    <p>
At GadgetHaven, we’re passionate about connecting tech enthusiasts with cutting-edge products that enhance everyday life. From sleek smartphones to state-of-the-art wearables and must-have accessories, we offer a curated selection designed to meet the needs of every tech lover.</p>
<Link to={"/"}><button className="bg-violet-500 px-12 py-4 rounded-full font-bold mt-4 text-white">Back to Home</button></Link>
                </div>
                <div className="flex-1">
                    <img src={about} alt="" />
                </div>
                
            </div>
            

            
        </div>
    );
};

export default AboutUs;
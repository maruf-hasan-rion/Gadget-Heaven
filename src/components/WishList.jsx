import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAllWishList, removeWishList } from "../utility/index";
import remove from '../assets/Delete.png'


const WishList = () => {
    const [wishList, setWishList] = useState([]);
    const allWishList = useLoaderData();

    useEffect(() => {
        const storedWishList = getAllWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        console.log(storedWishList, storedWishListInt, allWishList);

        const wishList = allWishList.filter(gadget => storedWishListInt.includes(gadget.product_id));
        setWishList(wishList);
    }, []);

    const handleDeleteWishList = (id) => {
        const updateWishlist = wishList.filter((p) => p.product_id != id)
        setWishList(updateWishlist);
    }
    const handleRemoveWishList = (id) => {
        removeWishList(id);
    }
    return (
        <div >
            <div className='w-11/12 mx-auto py-6'>
                <h1 className='text-xl font-bold'>WishList</h1>
            </div>
            {
                wishList.map((gadget) => (
                    <div key={gadget.product_id} className='w-11/12 mx-auto'>
                        <div className="border-2 p-6 flex justify-between items-center m-4 rounded-lg">
                            <div className='flex'>
                                <img className='size-40 mr-4 rounded-xl' src={gadget.product_image} alt="image" />
                                <div>
                                    <p className='text-2xl font-bold'>{gadget.product_title}</p>
                                    <p className='text-lg text-[#13131399] py-2'><span className="font-bold text-lg text-[#09080F]">Description: </span>{gadget.description}</p>
                                    <p className='text-lg font-bold text-[#09080FCC] pb-2'>Price: $ {gadget.price}</p>
                                    <button className="btn w-32 rounded-full text-white bg-[#9538E2]">Add to Cart</button>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => { handleDeleteWishList(gadget.product_id); handleRemoveWishList(gadget.product_id) }} className='text-end'><img src={remove} alt="" /></button>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default WishList;
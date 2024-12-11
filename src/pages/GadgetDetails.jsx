import { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { addCart, addWishList, getAllWishList } from '../utility'
import { MdFavoriteBorder } from 'react-icons/md'
import ReactStars from "react-rating-stars-component";
import { IoCartOutline } from 'react-icons/io5';

const GadgetDetails = () => {
    const data = useLoaderData()
    const { product_id } = useParams()
    const [gadget, setGadget] = useState(false)
    // const [isCart, setIsCart] = useState(false)
    const [isFav, setIsFav] = useState(false)
    useEffect(() => {
        const singleData = data.find(gadget => gadget.product_id == product_id)
        setGadget(singleData)
        // const carts = getAllCarts()
        // const isExist = carts.find(item => item.product_id == singleData.product_id)
        // if (isExist) {
        //     setIsCart(true)
        // }
        const fav = getAllWishList()
        const isExist = fav.find(item => item.product_id == singleData.product_id)
        if (isExist) {
            setIsFav(true)
        }
    }, [data, product_id])
if(!gadget){
    return "loading"

}
    const {
        // product_id,
        product_title,
        product_image,
        price,
        description,
        specification,
        rating
    } = gadget

    const firstExample = {
        size: 30,
        // value: 2,
        edit: false
      };
    const handleAddCart = (id) => {
        addCart(id);
             
    }
    const handleAddWishList = (id) => {
        addWishList(id);
        setIsFav(true)
    }
    return (

        <div>
            <div className="bg-[#9538E2] text-white pb-32 text-center">
                <h2 className="text-3xl font-bold pt-8">Product Details</h2>
                <p className="text-sm py-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className="relative -top-28 left-40">
                <div className="card card-side bg-base-100 shadow-xl w-3/4 ">
                    <figure className='w-96 object-cover'>
                        <img className='object-cover'

                            src={product_image}
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h1 className='card-title'>{product_title}</h1>
                        <p className='font-medium'>Price: $ {price}</p>
                        <p className='text-[#09080F99] text-sm'>{description}</p>
                        <h1 className='text-sm font-bold '>Specification:</h1>
                        <ol className='text-sm ml-8'>
                            {specification &&
                                Object.keys(specification).map((n, i) => (
                                    <li className='list-decimal' key={i}>
                                        {n}: {specification[n]}
                                    </li>
                                ))}
                        </ol>
                        <h1 className='text-sm font-bold '>Rating:</h1>

                        <ReactStars {...firstExample}value={rating} />


                        <div className='flex items-center gap-8'>
                            <button onClick={() => handleAddCart(product_id)}
                                className='btn bg-[#9538E2] rounded-full text-white'>Add To Carts<IoCartOutline></IoCartOutline>
                            </button>
                            <button disabled={isFav} className="btn btn-ghost btn-circle border-2 border-[#0B0B0B1A]">
                                <div className="indicator text-xl" onClick={() => handleAddWishList(product_id)}>
                                    <MdFavoriteBorder></MdFavoriteBorder>
                                    {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GadgetDetails

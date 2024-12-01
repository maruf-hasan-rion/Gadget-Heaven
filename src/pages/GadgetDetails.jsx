import { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { addCart, getAllCarts } from '../utility'
import { MdFavoriteBorder } from 'react-icons/md'

const GadgetDetails = () => {
    const data = useLoaderData()
    const { product_id } = useParams()
    const [gadget, setGadget] = useState({})
    const [isCart, setIsCart] = useState(false)
    useEffect(() => {
        const singleData = data.find(gadget => gadget.product_id == product_id)
        setGadget(singleData)
        const carts = getAllCarts()
        const isExist = carts.find(item => item.product_id == singleData.product_id)
        if (isExist) {
            setIsCart(true)
        }
    }, [data, product_id])

    const {
        // product_id,
        product_title,
        product_image,
        price,
        description,
        specification
    } = gadget

    // //   Handle cart btn click
    // const handleAddCart = gadget => {
    //     addCart(gadget)
    //     setIsCart(true)
    // }
    const handleAddCart = (id) => {
        addCart(id);
    }
    return (

        <div>
            <div className="bg-[#9538E2] text-white rounded-3xl pb-32 text-center">
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
                        <p className='font-medium'>Price:${price}</p>
                        <p>{description}</p>
                        <h1 className='text-sm font-bold'>Specification:</h1>
                        <ol className='text-sm ml-8'>
                            {specification &&
                                Object.keys(specification).map((n, i) => (
                                    <li className='list-decimal' key={i}>
                                        {n}: {specification[n]}
                                    </li>
                                ))}
                        </ol>
                        <div className='flex items-center gap-8'>
                            <button disabled={isCart} onClick={() => handleAddCart(product_id)}
                                className='btn btn-warning'>Add To Carts
                            </button>
                            <button className="btn btn-ghost btn-circle ">
                                <div className="indicator text-xl" /*onClick={() => handleAddWishList(gadget)}*/ >
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

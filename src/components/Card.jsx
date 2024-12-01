import { Link } from 'react-router-dom'
// import { FaTrashAlt } from 'react-icons/fa'
/* eslint-disable react/prop-types */
const Card = ({ gadget }) => {
    // const { pathname } = useLocation()
    const { product_title, product_image, product_id, price } =
        gadget || {}

    return (
        <div className='flex relative'>
            <div

                className='transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden'
            >
                <figure className='w-full overflow-hidden'>
                    <img className='' src={product_image} alt='' />
                </figure>
                <div className='p-4'>
                    <h1 className='text-xl'>{product_title}</h1>
                    <p>Price:{price}k</p>
                    <Link to={`/gadget/${product_id}`}> <button className='btn'>View Details</button></Link>
                </div>
            </div>
            {/* {pathname === '/dashboard' && (
                <div
                    onClick={() => handleRemove(product_id)}
                    className='absolute p-3 rounded-full cursor-pointer bg-warning -top-5 -right-5'
                >
                    <FaTrashAlt size={20} />
                </div>
            )} */}
        </div>
    )
}

export default Card

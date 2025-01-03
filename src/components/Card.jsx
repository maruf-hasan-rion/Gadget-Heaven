import { Link } from 'react-router-dom'
/* eslint-disable react/prop-types */
const Card = ({ gadget }) => {
    // const { pathname } = useLocation()
    const { product_title, product_image, product_id, price } =
        gadget || {}

    return (
        <div className='flex relative'>
            <div className='transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden'>
                <figure className='w-full overflow-hidden'>
                    <img className='h-44' src={product_image} alt='' />
                </figure>
                <div className='p-4 flex flex-col gap-2'>
                    <h1 className='text-lg font-semibold'>{product_title}</h1>
                    <p>Price: {price}k</p>
                    <Link to={`/gadget/${product_id}`}> <button className='btn text-[#9538E2] border border-[#9538E2] rounded-full'>View Details</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Card

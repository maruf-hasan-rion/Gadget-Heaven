/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";



const Categories = ({ categories }) => {
    return (
        <div role='tablist' className='tabs tabs-lifted flex flex-col items-center gap-4 shadow-2xl w-56 ml-28 p-4 mt-10 rounded-lg'>
            {categories.map(category => (
                <NavLink
                    key={category.category}
                    to={`/category/${category.category}`}
                    role='tab'
                    className={({ isActive }) =>
                        `text-sm font-medium rounded-full w-40 text-center py-4 bg-[#09080F0D] ${isActive ? 'active' : ''}`
                    }
                >
                    {category.category}
                </NavLink>
            ))}
        </div>
    );
};

export default Categories;
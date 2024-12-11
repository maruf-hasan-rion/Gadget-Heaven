/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";



const Categories = ({ categories }) => {
    return (
        <div role='tablist' className='tabs tabs-lifted flex flex-col items-center gap-4 bg-slate-100 w-56 ml-28 mt-10 rounded-lg'>
            {categories.map(category => (
                <NavLink
                    key={category.category}
                    to={`/category/${category.category}`}
                    role='tab'
                    className={({ isActive }) =>
                        `text-sm font-medium rounded-full px-10 py-4  ${isActive ? 'active2' : ''}`
                    }
                >
                    {category.category}
                </NavLink>
            ))}
        </div>
    );
};

export default Categories;
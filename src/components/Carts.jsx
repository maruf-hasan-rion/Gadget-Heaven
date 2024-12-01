import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAllCarts } from '../utility/index';
import remove from '../assets/Delete.png'

const Carts = () => {
    const [gadgetList, setGadgetList] = useState([]);
    // const [sort, setSort] = useState('');
    const allGadgets = useLoaderData();
    // ideally we will directly get the read book list from the database

    useEffect(() => {
        const storedGadgetsList = getAllCarts();
        const storedGadgetsListInt = storedGadgetsList.map(id => parseInt(id));
        // worst way
        console.log(storedGadgetsList, storedGadgetsListInt, allGadgets);

        // 
        const gadgetList = allGadgets.filter(gadget => storedGadgetsListInt.includes(gadget.product_id));

        setGadgetList(gadgetList);

    }, []);

    // const handleDelete = (id) => {
    //     const updatePlayer = gadgetList.filter((p) => p.product_id != id)
    //     setGadgetList(updatePlayer);
    // }
    return (
        <div >
            <div className='flex gap-96 items-center w-11/12 mx-auto py-6'>
                <div>
                    <h1 className='text-xl font-bold'>Carts</h1>

                </div>
                <div className='flex justify-between items-center gap-2'>
                    <h1 className='text-xl font-bold'>Total Price: <span>price</span></h1>
                    <button className='btn'>Sort by Price</button>
                    <button className='btn'>Purchase</button>
                </div>

            </div>
            {/* <h2 className='text-2xl'>Books I read: {gadgetList.length}</h2> */}
            {
                // gadgetList.map(gadget => <Card key={gadget.product_id} gadget={gadget}></Card>)
                gadgetList.map((gadget) => (
                    <div key={gadget.product_id} className='w-11/12 mx-auto'>
                        <div className="border-2 p-6 flex justify-between items-center m-4 rounded-lg">
                            <div className='flex'>
                                <img className='size-24 mr-4 rounded-xl' src={gadget.product_image} alt="image" />
                                <div>
                                    <p className='text-xl font-bold'>{gadget.product_title}</p>
                                    <p className='text-sm text-[#13131399] py-2'>{gadget.description}</p>
                                    <p className='text-lg font-bold text-[#09080FCC] pt-2'>Price:$ {gadget.price}</p>
                                </div>

                            </div>
                            <div>
                                <button /*</div>onClick={() => handleDelete(gadget.product_id)}*/ className='text-end'><img src={remove} alt="" /></button>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default Carts; 
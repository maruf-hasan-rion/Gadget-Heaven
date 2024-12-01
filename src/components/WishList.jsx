

const WishList = () => {
    return (
        <div>
            wishlist
            {/* {
            selected.map((player) => (
                <div key={player.playerId} className='w-11/12 mx-auto'>
                    <div className="border-2 p-6 flex justify-between items-center m-4 rounded-lg">
                        <div className='flex'>
                            <img className='size-24 mr-4 rounded-xl' src={player.image} alt="image" />
                            <div>
                                <p className='text-2xl font-bold'>{player.name}</p>
                                <p className='text-[#13131399]'>{player.role}</p>
                                <p className='text-[#13131399] pt-2'> ${player.biddingPrice}</p>
                            </div>

                        </div>
                        <div>
                            <button onClick={() => handleDelete(player.playerId)} className='text-end'><img src="./images/Frame.png" alt="" /></button>
                        </div>
                    </div>
                </div>
            ))
        }
        <div className='w-11/12 mx-auto my-8'>
            <button onClick={() => handleIsActiveState("available")} className='btn bg-yellow-400 '>Add More Player</button>
        </div> */}

        </div>
    );
};

export default WishList;
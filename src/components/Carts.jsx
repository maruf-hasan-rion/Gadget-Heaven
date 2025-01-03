import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAllCarts, removeCart } from "../utility/index";
import remove from "../assets/Delete.png";
import sort from "../assets/Frame.png";
import Modal from "./Modal";

const Carts = () => {
  const [gadgetList, setGadgetList] = useState([]);
  const [purchase, setPurchase] = useState(false);
  const allGadgets = useLoaderData();

  useEffect(() => {
    const storedGadgetsList = getAllCarts();
    const storedGadgetsListInt = storedGadgetsList.map((id) => parseInt(id));
    // console.log(storedGadgetsList, storedGadgetsListInt, allGadgets);
    const gadgetList = allGadgets.filter((gadget) =>
      storedGadgetsListInt.includes(gadget.product_id)
    );
    setGadgetList(gadgetList);
    console.log(gadgetList.length);

    const exsit = gadgetList.length<=0;
    // console.log(typeof exsit,exsit);
    if (exsit) {
    //   console.log(exsit);
      setPurchase(true);
    }
  }, [allGadgets]);

  const handleDelete = (id) => {
    const updateGadget = gadgetList.filter((p) => p.product_id != id);
    setGadgetList(updateGadget);
  };
  const handleRemove = (id) => {
    // console.log(id);
    removeCart(id);
  };
  const handleSort = (sortBy) => {
    if (sortBy == "price") {
      const sorted = [...gadgetList].sort((a, b) => b.price - a.price);
      setGadgetList(sorted);
    }
  };

  const totalPrice = gadgetList
    ?.reduce((acc, item) => acc + item.price, 0)
    ?.toFixed(2);
  // console.log(totalPrice);

  const handlePurchase = () => {
    const all = localStorage.removeItem("carts");
    console.log(all);
    document.getElementById("my_modal_5").showModal();
    setGadgetList([]);
  };
  //    const fav = getAllWishList();
  //     const isExist = fav.find(
  //       (item) => item.product_id == singleData.product_id
  //     );

  return (
    <div>
      <div className="flex gap-96 items-center w-11/12 mx-auto py-6">
        <div>
          <h1 className="text-xl font-bold">Carts</h1>
        </div>
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-xl font-bold">
            Total Price: <span>{totalPrice}</span>
          </h1>

          <button
            className="px-4 py-1 text-sm text-[#9538E2] border-2 border-[#9538E2] rounded-full font-semibold"
            onClick={() => handleSort("price")}
          >
            Sort by Price <img className="inline-flex" src={sort} alt="" />
          </button>

          <button
            className="btn bg-gradient-to-r from-[#a044ff] to-[#6a11cb] text-white rounded-full px-6 py-2 text-sm"
            onClick={() => handlePurchase()}
            disabled={purchase}
          >
            Purchase
          </button>
        </div>
      </div>
      {gadgetList.map((gadget) => (
        <div key={gadget.product_id} className="w-11/12 mx-auto">
          <div className="border-2 p-6 flex justify-between items-center m-4 rounded-lg">
            <div className="flex">
              <img
                className="size-24 mr-4 rounded-xl"
                src={gadget.product_image}
                alt="image"
              />
              <div>
                <p className="text-xl font-bold">{gadget.product_title}</p>
                <p className="text-sm text-[#13131399] py-2">
                  {gadget.description}
                </p>
                <p className="text-lg font-bold text-[#09080FCC] pt-2">
                  Price: $ {gadget.price}
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  handleDelete(gadget.product_id);
                  handleRemove(gadget.product_id);
                }}
                className="text-end"
              >
                <img src={remove} alt="" />
              </button>
            </div>
          </div>
        </div>
      ))}

      <Modal gadgetList={gadgetList} setPurchase={setPurchase} totalPrice={totalPrice}></Modal>
    </div>
  );
};

export default Carts;

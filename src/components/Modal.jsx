/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import modalImg from "../assets/Group.png";

const Modal = ({ gadgetList, setPurchase, totalPrice }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    const exsit = gadgetList.length <= 0;
    if (exsit) {
      setPurchase(true);
    }
    navigate("/");
  };
  console.log(totalPrice);
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col items-center justify-center">
          <img src={modalImg} alt="" />
          <h3 className="font-bold text-2xl my-6">Payment Successfully</h3>
          <hr className="w-full" />
          <p className="py-4">Thanks for purchasing. <br /> Total: {totalPrice}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn py-0 w-96" onClick={() => handleNavigate()}>
                Close{" "}
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;

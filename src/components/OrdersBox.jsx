import Image from "next/image";
import Order from "./Order";
import { setToTrue, setToFalse } from "@/redux/features/editOrderWindow";
import {
  setDetailsWindowToTrue,
  setDetailsWindowToFalse,
} from "@/redux/features/orderDetailsWindow";
import { useDispatch, useSelector } from "react-redux";
import PopupForm from "./PopupFrom";

export default function OrdersBox({ isAdmin, title, type }) {
  const dispatch = useDispatch();
  const isEditOrderWindowOpen = useSelector(
    (state) => state.editOrderWindow.value
  );
  const isOrderDetailsWindowOpen = useSelector(
    (state) => state.orderDetailsWindow.value
  );

  const setIsEditOrderWindowOpen = (state) => {
    if (state) {
      dispatch(setToTrue());
    } else {
      dispatch(setToFalse());
    }
  };

  const setIsDetailsWindowOpen = (state) => {
    if (state) {
      dispatch(setDetailsWindowToTrue());
    } else {
      dispatch(setDetailsWindowToFalse());
    }
  };

  return (
    <>
      <div className="h-96 w-full py-5 px-7 bg-[#337856a2] rounded-[10px]">
        {isAdmin && (
          <div className="mb-5 w-full flex justify-between items-center">
            <h3 className="text-white">{title}</h3>
            <div className="pl-2 flex gap-1 items-center rounded-[10px] bg-[#fafafa] border border-[#584a4a40]">
              <Image
                src="/images/search.png"
                alt="Logo"
                width={15}
                height={5}
                priority
              />
              <input
                type="number"
                className="pr-3 pl-1 py-1 rounded-[5px] bg-[#fafafa] border-none"
                placeholder="Search by Number"
              />
            </div>
          </div>
        )}
        <div className="max-h-[90%] overflow-y-scroll">
          <Order isAdmin={isAdmin} type={type} />
          <Order isAdmin={isAdmin} type={type} />
        </div>
      </div>

      {isEditOrderWindowOpen &&
      <div
        className="h-screen w-full fixed top-0 left-0 bg-[#0000004d] flex justify-center items-center z-20"
        onClick={() => setIsEditOrderWindowOpen(false)}
      >
        <div className="w-[30%] relative" onClick={(e) => e.stopPropagation()}>
          <Image
            src="/images/close.png"
            alt="Close Form Icon"
            width={20}
            height={20}
            className="absolute left-1/2 transform -translate-x-1/2 -top-10 cursor-pointer"
            onClick={() => setIsEditOrderWindowOpen(false)}
          />
          <PopupForm window="editOrder" />
        </div>
      </div>
      }
      
      {isOrderDetailsWindowOpen && 
      <div
        className="h-screen w-full fixed top-0 left-0 bg-[#0000004d] flex justify-center items-center z-20"
        onClick={() => setIsDetailsWindowOpen(false)}
      >
        <div className="w-[30%] relative" onClick={(e) => e.stopPropagation()}>
          <Image
            src="/images/close.png"
            alt="Close Form Icon"
            width={20}
            height={20}
            className="absolute left-1/2 transform -translate-x-1/2 -top-10 cursor-pointer"
            onClick={() => setIsDetailsWindowOpen(false)}
          />
          <PopupForm window="orderDetails" />
        </div>
      </div>
      }
    </>
  );
}

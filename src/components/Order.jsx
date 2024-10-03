"use client";
import { useDispatch } from "react-redux";
import { setToTrue, setToFalse } from "@/redux/features/editOrderWindow";
import { setDetailsWindowToTrue, setDetailsWindowToFalse } from "@/redux/features/orderDetailsWindow";
import { useEffect } from "react";

export default function Order({ isAdmin, type, order }) {
  const dispatch = useDispatch();

  const userNumber = String(order.number);
  const dbOrderDate = new Date(order.createdAt);
  const orderDate = `${String(dbOrderDate.getDate()).padStart(2, '0')}-${String(dbOrderDate.getMonth() + 1).padStart(2, '0')}-${dbOrderDate.getFullYear()}`;

  const setIsEditOrderWindowOpen = (state) => {
    if (state) {
      dispatch(setToTrue());
    } else {
      dispatch(setToFalse());
    }
  };

  const setIsOrderDetailWindowOpen = (state) => {
    if (state) {
      dispatch(setDetailsWindowToTrue());
    } else {
      dispatch(setDetailsWindowToFalse());
    }
  };

  const setIsWindowOpen = (state) => {
    if (type === "editable") {
      setIsEditOrderWindowOpen(state);
    }else{
      setIsOrderDetailWindowOpen(state)
    }
  };

  useEffect(()=>{
    
  }, [])

  return (
    <div
      className="mb-3 min-h-20 w-full py-5 px-7 bg-[#fafafa9f] rounded-[10px] shadow flex justify-between items-center cursor-pointer duration-300 hover:bg-[#fafafad7]"
      onClick={() => setIsWindowOpen(true)}
    >
      {isAdmin ? (
        <>
          <div className="flex justifiy-between items-center gap-3">
            <div>
              <h4 className="font-semibold">Mobile Num:</h4>
              <p>{userNumber.slice(3,11)}</p>
            </div>
            <div>
              <h4 className="font-semibold">Type:</h4>
              <p>{order.type}</p>
            </div>
            <div>
              <h4 className="font-semibold">Date of Order:</h4>
              <p>{orderDate}</p>
            </div>
            <div>
              <h4 className="font-semibold">Ready Date</h4>
              <p>{order.readyDate ? order.readyDate : "-"}</p>
            </div>
            <div>
              <h4 className="font-semibold">Payment Status:</h4>
              <p>{order.payment ? "Paid" : "Unpaid"}</p>
            </div>
            <div>
              <h4 className="font-semibold">Order Status:</h4>
              <div className="flex gap-1 items-center">
                <div className="h-4 w-4 rounded-full bg-orange border border-pText"></div>
                <p>{order.status}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justifiy-between items-center gap-5">
            <div>
              <h4 className="font-semibold">Type:</h4>
              <p>Clothing</p>
            </div>
            <div>
              <h4 className="font-semibold">Date of Orders:</h4>
              <p>12-03-2023</p>
            </div>
            <div>
              <h4 className="font-semibold">Ready Date</h4>
              <p>13-03-2023</p>
            </div>
            <div>
              <h4 className="font-semibold">Payment Status:</h4>
              <p>Unpaid</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Order Status:</h4>
            <div className="flex gap-1 items-center">
              <div className="h-4 w-4 rounded-full bg-orange border border-pText"></div>
              <p>In Progress</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

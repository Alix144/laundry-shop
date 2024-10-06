"use client";
import { useDispatch, useSelector } from "react-redux";
import { setToTrue, setToFalse } from "@/redux/features/editOrderWindow";
import {
  setDetailsWindowToTrue,
  setDetailsWindowToFalse,
} from "@/redux/features/orderDetailsWindow";
import { useEffect } from "react";
import PopupForm from "./PopupFrom";
import Image from "next/image";

export default function Order({ isAdmin, type, order }) {
  const dispatch = useDispatch();
  const isEditOrderWindowOpen = useSelector(
    (state) => state.editOrderWindow.value
  );

  const userNumber = String(order.phoneNumber);
  const dbOrderDate = new Date(order.createdAt);
  const orderDate = `${String(dbOrderDate.getDate()).padStart(2, "0")}-${String(
    dbOrderDate.getMonth() + 1
  ).padStart(2, "0")}-${dbOrderDate.getFullYear()}`;

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
    } else {
      setIsOrderDetailWindowOpen(state);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <div
        className="mb-3 min-h-20 w-full py-5 px-7 bg-[#fafafa9f] rounded-[10px] shadow flex justify-between items-center cursor-pointer duration-300 hover:bg-[#fafafad7]"
        onClick={() => setIsWindowOpen(true)}
      >
        {isAdmin ? (
          <>
            <div className="flex justifiy-between items-center gap-3">
              <div>
                <h4 className="font-semibold">Mobile Num:</h4>
                <p>{userNumber.slice(3, 11)}</p>
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
                <p>{order.type}</p>
              </div>
              <div>
                <h4 className="font-semibold">Date of Orders:</h4>
                <p>{orderDate}</p>
              </div>
              <div>
                <h4 className="font-semibold">Ready Date</h4>
                <p>13-03-2023</p>
              </div>
              <div>
                <h4 className="font-semibold">Payment Status:</h4>
                <p>{order.payment}</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Order Status:</h4>
              <div className="flex gap-1 items-center">
                <div className="h-4 w-4 rounded-full bg-orange border border-pText"></div>
                <p>{order.status}</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* popup windows */}
      {/* {isEditOrderWindowOpen && (
        <div
          className="h-screen w-full fixed top-0 left-0 bg-[#0000004d] flex justify-center items-center z-20"
          onClick={() => setIsEditOrderWindowOpen(false)}
        >
          <div
            className="w-[30%] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/close.png"
              alt="Close Form Icon"
              width={20}
              height={20}
              className="absolute left-1/2 transform -translate-x-1/2 -top-10 cursor-pointer"
              onClick={() => setIsEditOrderWindowOpen(false)}
            />

            <PopupForm
              window="editOrder"
              order={order}
              number={userNumber.slice(3, 11)}
            />
          </div>
        </div>
      )} */}
    </>
  );
}

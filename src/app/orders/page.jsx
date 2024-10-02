"use client";
import UserInfoCard from "@/components/UserInfoCard";
import OrdersBox from "@/components/OrdersBox";
import PopupForm from "@/components/PopupFrom";
import { useEffect, useState } from "react";
import Image from "next/image";

import { setToTrue, setToFalse } from "@/redux/features/addOrderWindow";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Orders() {
  const dispatch = useDispatch();
  const isAdmin = true;
  
  const isAddOrderWindowOpen = useSelector(
    (state) => state.addOrderWindow.value
  );

  const setIsAddOrderWindowOpen = (state) => {
    if (state) {
      dispatch(setToTrue());
    } else {
      dispatch(setToFalse());
    }
  };

  useEffect(()=>{
    console.log(isAddOrderWindowOpen)
  },[])

  return (
    <main className="w-screen relative">
      <section className="pt-28 content bg-background">
        <h1 className="mb-8 text-center">{isAdmin ? "Admin Panel" : "My Orders"}</h1>
        <div className="mb-10 flex gap-5 items-start justify-center">
          <UserInfoCard isAdmin={isAdmin} />
          <div className="w-[75%] flex flex-col gap-5">
            {isAdmin ? (
              <>
                <button  className="py-2 w-[60%] mx-auto bg-darkGreen rounded-[10px] text-white"  onClick={() => setIsAddOrderWindowOpen(true)}>Add Order</button>
                <OrdersBox isAdmin={isAdmin} title={"Active Orders"} type={"editable"}/>
                <OrdersBox isAdmin={isAdmin} title={"Previous Orders"} type={"uneditable"}/>
              </>
            ) : (
              <OrdersBox isAdmin={isAdmin} type={"uneditable"}/>
            )}
          </div>
        </div>
      </section>

      {isAddOrderWindowOpen && (
        <div
          className="h-screen w-full fixed top-0 left-0 bg-[#0000004d] flex justify-center items-center z-20"
          onClick={() => setIsAddOrderWindowOpen(false)}
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
              onClick={() => setIsAddOrderWindowOpen(false)}
            />
            <PopupForm window={"addOrder"}/>
          </div>
        </div>
      )}
    </main>
  );
}

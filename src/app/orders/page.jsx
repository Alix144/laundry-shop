"use client";
import UserInfoCard from "@/components/UserInfoCard";
import OrdersBox from "@/components/OrdersBox";
import PopupForm from "@/components/PopupFrom";
import { useEffect, useState } from "react";
import Image from "next/image";

import { setToTrue, setToFalse } from "@/redux/features/addOrderWindow";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import LoadingIcon from "@/components/LoadingIcon";

export default function Orders() {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [type, setType] = useState("");
  const [readyDate, setReadyDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [newOrders, setNewOrders] = useState([])

  const today = new Date();

  const handleAddOrder = async(e) => {
    e.preventDefault()
    const number = "965" + phoneNumber
    setLoading(true)
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: number, type, readyDate }),
      });
      const newOrder = {phoneNumber: number, type, createdAt: today, readyDate}
      setNewOrders((prevOrders) => [...prevOrders, newOrder]);
      dispatch(setToFalse())
      setLoading(false)
    } catch (error) {
      console.log(error)
    }

  }
  
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

  useEffect(() => {
    console.log(isAddOrderWindowOpen);
  }, []);

  return (
    <main className="w-screen relative">
      <section className="pt-28 content bg-background">
        <h1 className="mb-8 text-center">
          {isAdmin ? "Admin Panel" : "My Orders"}
        </h1>
        <div className="mb-10 flex gap-5 items-start justify-center">
          <UserInfoCard isAdmin={isAdmin} />
          <div className="w-[75%] flex flex-col gap-5">
            {isAdmin ? (
              <>
                <button
                  className="py-2 w-[60%] mx-auto bg-darkGreen duration-300 hover:shadow hover:bg-[#337856a2] rounded-[10px] text-white"
                  onClick={() => setIsAddOrderWindowOpen(true)}
                >
                  Add Order
                </button>
                <OrdersBox
                  isAdmin={isAdmin}
                  title={"Active Orders"}
                  type={"editable"}
                  newOrders={newOrders}
                />
                <OrdersBox
                  isAdmin={isAdmin}
                  title={"Previous Orders"}
                  type={"uneditable"}
                  newOrders={newOrders}
                />
              </>
            ) : (
              <OrdersBox isAdmin={isAdmin} type={"uneditable"} newOrders={newOrders} />
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
            {/* ********** */}
            <div
              action=""
              className="w-full px-14 py-10 bg-bodyBackground rounded-[10px] relative"
            >
              <div className="mb-5">
                <h3 className="text-center text-pText text-xl">Add Order</h3>
              </div>

              <form className="mb-10 flex flex-col">
                <label htmlFor="phoneNumber" className="text-pText text-sm">
                  Phone Number*
                </label>
                <input
                  id="phoneNumber"
                  className="mb-10 px-3 py-2 rounded-[10px] border border-[#00000040] "
                  type="tel"
                  required
                  placeholder="1234 5678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <label htmlFor="type" className="text-pText text-sm">
                  Type*
                </label>
                <select
                  name="type"
                  id="type"
                  className="mb-2 px-3 py-2 rounded-[10px] border border-[#00000040]"
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="" disabled selected>
                    Type
                  </option>
                  <option value="Clothing">Clothing</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Household">Household</option>
                  <option value="Other">Other</option>
                </select>

                <label htmlFor="readyDate" className="text-pText text-sm">
                  Ready Date
                </label>
                <input
                  id="readyDate"
                  className="px-3 py-2 rounded-[10px] border border-[#00000040]"
                  type="date"
                />
              </form>

              <button
                className="w-full px-3 py-2 text-white bg-darkGreen rounded-[10px] hover:shadow hover:bg-[#337856a2] duration-300"
                onClick={(e) => handleAddOrder(e)}
              >
                {loading ? <LoadingIcon /> : "Add"}
              </button>

            </div>
            {/* *********** */}
          </div>
        </div>
      )}
    </main>
  );
}

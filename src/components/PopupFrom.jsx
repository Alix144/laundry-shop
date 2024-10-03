"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setToFalse } from "@/redux/features/addOrderWindow";
import LoadingIcon from "./LoadingIcon";

export default function PopupForm({ window }) {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [type, setType] = useState("");
  const [readyDate, setReadyDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddOrder = async(e) => {
    e.preventDefault()
    const number = "965" + phoneNumber
    setLoading(true)
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber: number, type, readyDate }),
    });
    dispatch(setToFalse())
  }

  return window === "addOrder" ? (
    <div
      action=""
      className="w-full px-14 py-10 bg-bodyBackground rounded-[10px] relative"
    >
      <div className="mb-5">
        <h3 className="text-center text-pText text-xl">Add Order</h3>
      </div>

      <form className="mb-10 flex flex-col">
        <label htmlFor="phoneNumber" className="text-pText text-sm">Phone Number*</label>
        <input
          id="phoneNumber"
          className="mb-10 px-3 py-2 rounded-[10px] border border-[#00000040] "
          type="tel"
          required
          placeholder="1234 5678"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label htmlFor="type" className="text-pText text-sm">Type*</label>
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

      <button className="w-full px-3 py-2 text-white bg-darkGreen rounded-[10px] hover:shadow hover:bg-[#337856a2] duration-300" onClick={(e) =>handleAddOrder(e)}>
        {loading ? <LoadingIcon/>: "Add"}
      </button>
    </div>
  ) : window === "editOrder" ? (
    <div
      action=""
      className="w-full px-14 py-10 bg-bodyBackground rounded-[10px] relative"
    >
      <div className="mb-5">
        <h3 className="text-center text-pText text-xl">Edit Order</h3>
      </div>

      <form className="mb-10 flex flex-col">
        <input
          className="mb-10 px-3 py-2 rounded-[10px] border border-[#00000040] bg-[#EDEDED]"
          type="text"
          placeholder="Mobile Number"
          disabled
        />
        <select
          name=""
          id=""
          className="mb-2 px-3 py-2 rounded-[10px] border border-[#00000040]"
        >
          <option value="">Clothing</option>
          <option value="">Accessories</option>
          <option value="">Household</option>
          <option value="">Other</option>
        </select>
        <input
          className="mb-2 px-3 py-2 rounded-[10px] border border-[#00000040]"
          type="date"
          placeholder="Ready Date"
        />

        <select
          name=""
          id=""
          className="mb-2 px-3 py-2 rounded-[10px] border border-[#00000040]"
          placeholder="Order State"
        >
          <option value="">In Progress</option>
          <option value="">Ready for Pickup</option>
          <option value="">Completed</option>
        </select>
      </form>

      <div className="w-full flex justify-between">
        <button className="w-[35%] px-3 py-2 text-white bg-red rounded-[10px] hover:shadow hover:bg-[#ff3030] duration-300">
          Delete
        </button>
        <button className="w-[35%] px-3 py-2 text-white bg-darkGreen hover:bg-[#337856a2] rounded-[10px] hover:shadow duration-300">
          Edit
        </button>
      </div>
    </div>
  ) : (
    <div
      action=""
      className="w-full px-14 py-10 bg-bodyBackground rounded-[10px] relative"
    >
      <div className="mb-5">
        <h3 className="text-center text-pText text-xl">Order Details</h3>
      </div>

      <form className="mb-10 flex flex-col">
        <input
          className="mb-10 px-3 py-2 rounded-[10px] border border-[#00000040] bg-[#EDEDED]"
          type="text"
          placeholder="Mobile Number"
          disabled
        />
        <select
          name=""
          id=""
          className="mb-2 px-3 py-2 rounded-[10px] border border-[#00000040] bg-[#EDEDED]"
          disabled
        >
          <option value="">Clothing</option>
          <option value="">Accessories</option>
          <option value="">Household</option>
          <option value="">Other</option>
        </select>
        <input
          className="mb-2 px-3 py-2 rounded-[10px] border border-[#00000040] bg-[#EDEDED]"
          type="date"
          placeholder="Ready Date"
          disabled
        />

        <select
          name=""
          id=""
          className="mb-2 px-3 py-2 rounded-[10px] border border-[#00000040] bg-[#EDEDED]"
          placeholder="Order State"
          disabled
        >
          <option value="">In Progress</option>
          <option value="">Ready for Pickup</option>
          <option value="">Completed</option>
        </select>
      </form>
    </div>
  );
}

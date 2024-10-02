export default function PopupForm({ window }) {

  return window === "addOrder" ? (
    <div
      action=""
      className="w-full px-14 py-10 bg-bodyBackground rounded-[10px] relative"
    >
      <div className="mb-5">
        <h3 className="text-center text-pText text-xl">Add Order</h3>
      </div>

      <form className="mb-10 flex flex-col">
        <input
          className="mb-10 px-3 py-2 rounded-[10px] border border-[#00000040] "
          type="text"
          placeholder="Mobile Number"
        />
        <select
          name=""
          id=""
          className="mb-2 px-3 py-2 rounded-[10px] border border-[#00000040]"
        >
          <option value="" disabled selected>
            Type
          </option>
          <option value="">Clothing</option>
          <option value="">Accessories</option>
          <option value="">Household</option>
          <option value="">Other</option>
        </select>
        <input
          className="px-3 py-2 rounded-[10px] border border-[#00000040]"
          type="date"
          placeholder="Ready Date"
        />
      </form>

      <button
        className="w-full px-3 py-2 bg-lightGreen rounded-[10px] hover:shadow hover:bg-[#11ff8c] duration-300"
        onClick={(e) => handle(e)}
      >
        Add
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
        <button className="w-[35%] px-3 py-2 bg-red rounded-[10px] hover:shadow hover:bg-[#ff3030] duration-300">Delete</button>
        <button className="w-[35%] px-3 py-2 bg-lightGreen rounded-[10px] hover:shadow hover:bg-[#11ff8c] duration-300">Edit</button>
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

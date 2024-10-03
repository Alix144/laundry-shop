import mongoose, { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
  {
    phoneNumber: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "In Progress",
    },
    payment: {
      type: Boolean,
      default: false,
    },
    readyDate: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;

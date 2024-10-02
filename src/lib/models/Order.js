import mongoose, { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
  {
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
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;

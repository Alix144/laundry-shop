import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;

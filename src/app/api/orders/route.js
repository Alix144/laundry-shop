import Order from "@/lib/models/Order";
import connectToDb from "@/lib/dbConnection";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDb();
    const orders = await Order.find().populate("user");
    return new NextResponse(JSON.stringify(orders), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "could not find orders " + error.message }),
      { status: 500 }
    );
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();

    await connectToDb();
    const newOrder = new Order(body);
    await newOrder.save();
    return new NextResponse(
      JSON.stringify({ message: "Order created", order: newOrder }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "error creating OPOPOPOP " + error.message }),
      { status: 500 }
    );
  }
};
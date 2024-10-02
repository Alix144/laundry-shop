import User from "@/lib/models/User";
import connectToDb from "@/lib/dbConnection";
import { NextResponse } from "next/server";

// export const POST = async (request) => {
//   try {
//     const body = await request.json();
//     await connectToDb();
//     const newOrder = new Order(body);
//     await newOrder.save();
//     return new NextResponse(
//       JSON.stringify({ message: "Order created", order: newOrder }),
//       { status: 200 }
//     );
//   } catch (error) {
//     return new NextResponse(
//       JSON.stringify({ message: "error creating OPOPOPOP " + error.message }),
//       { status: 500 }
//     );
//   }
// };

export const POST = async (request) => {
  try {
    const body = await request.json();
    await connectToDb();

    const existingUser = await User.findOne({
      number: body.number,
    });

    if (!existingUser) {
      const newUser = await new User({
        number: body.number,
      });
      await newUser.save();
    }

    return new NextResponse(
      JSON.stringify({ message: "user created" }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "error creating OPOPOPOP " + error.message }),
      { status: 500 }
    );
  }
};

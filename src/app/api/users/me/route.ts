import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextResponse, NextRequest } from "next/server";

import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
  try {
    const userID = await getDataFromToken(request);

    const user = await User.findOne({ _id: userID }).select("-password");

    console.log(user);
    return NextResponse.json({ message: "User found", data: user });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

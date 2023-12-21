import { NextResponse } from "next/server";
import { connectDB } from "../utils/mongo";
import Task from "@/models/Task";

export async function GET(request, { params }) {
  try {
    connectDB();
    const taskFount = await Task.findById(params.id);
    if (!taskFount)
      return NextResponse.json(
        {
          message: "task not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(taskFount);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
export async function DELETE(request, { params }) {
  try {
    const taskDelete = await Task.findByIdAndDelete(params.id);
    if (!taskDelete)
      return NextResponse.json(
        {
          message: "Task no found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(taskDelete);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
export async function PUT(request, { params }) {
  try {
    const data = await request.json();

    const taskUpdated = await Task.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return NextResponse.json(taskUpdated);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

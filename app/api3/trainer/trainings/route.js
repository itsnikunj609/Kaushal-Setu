import clientPromise from "@/lib/mongo";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET() {

    const cookiestore = await cookies();
    const token = cookiestore.get("accesstoken");

    if (!token) {
        return Response.json(
            { message: "Unauthorized" },
            { status: 401 }
        );
    }

    const decoded = jwt.verify(
        token.value,
        process.env.ACCESS_TOKEN_SECRET
    );

    const trainerId = decoded.sub;
    console.log("TRAINER ID:", trainerId);

    const client = await clientPromise;
    const db = client.db("capusers");

    const collection = db.collection("training");

    const trainings = await collection.find({
        trainerid: trainerId
    }).toArray();
    console.log(trainings)

    return Response.json(trainings);
}
export async function POST(request) {

    const cookiestore = await cookies();
    const token = cookiestore.get("accesstoken");

    if (!token) {
        return Response.json(
            { message: "Unauthorized" },
            { status: 401 }
        );
    }

    const decoded = jwt.verify(
        token.value,
        process.env.ACCESS_TOKEN_SECRET
    );

    const trainerId = decoded.sub;

    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("capusers");
    const collection = db.collection("training");

    const training = {
        title: body.title,
        description: body.description,
        category: body.category,
        level: body.level,
        duration: body.duration,
        skills: body.skills,
        trainerid: trainerId,
        status: "active"
    };

    const result = await collection.insertOne(training);

    return Response.json({
        message: "Training created successfully",
        trainingId: result.insertedId
    });
}
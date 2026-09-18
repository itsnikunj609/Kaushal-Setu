import clientPromise from "@/lib/mongo";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";
export async function POST(request) {
    const body = await request.json();

    const cookiestore = await cookies()
    const token = cookiestore.get("accesstoken")

    if (!token) {
        return Response.json(
            { message: "Unauthorized" },
            { status: 401 }
        )
    }
    const decoded = jwt.verify(token.value, process.env.ACCESS_TOKEN_SECRET)

    const id = decoded.sub

    const client = await clientPromise;
    const db = await client.db("capusers")
    const collection = await db.collection("enrollment")

    const existingenrolled = await collection.findOne({ traineeid: id, trainingid: body.trainingid })
    if (existingenrolled){
        return Response.json({message:"you have already enrolled in this course" })
    }

        const user = await collection.insertOne({
            trainingid: body.trainingid,
            traineeid: id,
            username:decoded.username,
            email:decoded.email
        })

    return Response.json({ message: "enrollment successfull" })


}
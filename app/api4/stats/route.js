import { cookies } from "next/headers";
import jwt from "jsonwebtoken"
import clientPromise from "@/lib/mongo";

export async function GET(request){
    const cookiestore=await cookies();
    const token =await cookiestore.get("accesstoken")

    const decoded=await jwt.verify(token.value,process.env.ACCESS_TOKEN_SECRET);
    const trainerid=decoded.sub
    const client=await clientPromise;
    const db=await client.db("capusers")
    const collection=await db.collection("training")

    const trainings=await collection.find({trainerid:trainerid}).toArray()
    const trainingid= trainings.map((training)=>{
        training._id.toString()
    })
    //total trainees

    const enrollmentcollection=await db.collection("enrollment");
    const enrollment=await enrollmentcollection.find({trainingid:trainingid}).toArray()
    return Response.json({totaltrainings:trainings.length,totaltrainees:enrollment.length})

    
}
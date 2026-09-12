import clientPromise from "@/lib/mongo";
import { ObjectId } from "mongodb";

export async function GET(request,{params}){

    const{id}=await params;

      const client = await clientPromise;

    const db = client.db("capusers");

    const collection = db.collection("training");

    const training=await collection.findOne({_id:new ObjectId(id)})

    return Response.json(training)

}
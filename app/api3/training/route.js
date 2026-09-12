import clientPromise from "@/lib/mongo";

export async function GET(request){
    let client=await clientPromise;
    let db=await client.db("capusers");
    let collection=await db.collection("training")

    const trainings= await collection.find({}).toArray()

    return Response.json(trainings);


}
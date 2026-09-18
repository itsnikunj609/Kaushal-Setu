import clientPromise from "@/lib/mongo";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function POST(request) {
    const body = await request.json()
    let client = await clientPromise;
    let db = await client.db("capusers");
    let collection = await db.collection("info");

    const user = await collection.findOne({ email: body.email });
    if (!user) {

        return Response.json({ message: "Admin not registered" })
    }
    const ispasswordcorrect = await bcrypt.compare(body.password, user.password)

    if (ispasswordcorrect) {

        const accesstokensecret = process.env.ACCESS_TOKEN_SECRET
        if (!accesstokensecret) {
            return Response.json({ message: "token not getting" })
        }


        const payload = {
            sub: user._id.toString(),
            type: "access",
            username:user.fullname,
            email:user.email
        }
        const options = {
            expiresIn: "40m"
        }
        const accesstoken = jwt.sign(
            payload,
            accesstokensecret,
            options
        )

        const refreshtokensecret = process.env.REFRESH_TOKEN_SECRET
        if (!refreshtokensecret) {
            return Response.json({ message: "token not getting" })
        }
        const payloads = {
            sub: user._id.toString(),
            type: "access",
             username:user.fullname,
            email:user.email
        }
        const option = {
            expiresIn: "15d"
        }
        const refreshtoken = jwt.sign(
            payloads,
            refreshtokensecret,
            option
        )
        const response = NextResponse.json({ message: "cookies sent",success:true,role:user.role })
        response.cookies.set("accesstoken", accesstoken, {
            httpOnly: true,
            secure: true
        })
        response.cookies.set("refreshtoken", refreshtoken, {
            httpOnly: true,
            secure: true
        })

        return response

    }

    return Response.json({ message: "email or password is incorrect" })

}    
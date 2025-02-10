import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore";

export async function POST(req: NextRequest) {
    const { name, company, email, telefono, score, talkToAnalyst } = await req.json();

    try {
        const docRef = await addDoc(collection(db, "users"), {
            name,
            company,
            email,
            telefono,
            score,
            talkToAnalyst,
        });

        console.log("Document written with ID: ", docRef.id);
        return NextResponse.json({ message: "User created" });

    } catch (e) {
        console.error("Error adding document: ", e);
        return NextResponse.json({ error: "Error adding document", details: e }, { status: 500 });
    }
}
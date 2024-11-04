import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
    
    const body = await req.json();
    const { nombre } = body;

    return NextResponse.json({ message: "Hola mundo", nombre },{status: 200});
}
export {
  POST
}
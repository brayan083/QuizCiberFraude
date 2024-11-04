// import type { NextApiRequest, NextApiResponse } from 'next'
// import { NextResponse } from 'next/server'
 
// type ResponseData = {
//   message: string
// }
 
// export function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
//   return NextResponse.json({ message: 'Mensaje heloo' }, { status: 200 });
// }

import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
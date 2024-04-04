import {NextRequest} from 'next/server'

export async function POST(request: NextRequest) {
    const requestBody = await request.json();
    await delay(500);
    try {
        const success = (requestBody.email === 'mauricio.goncalves@gmail.com');
        return Response.json({status: "ok", success: success})
    } catch (e) {
        console.log(e);
        return new Response(null, {status: 400, statusText: "Bad Request"});
    }
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
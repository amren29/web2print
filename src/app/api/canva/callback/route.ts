import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const CANVA_CLIENT_ID = process.env.CANVA_CLIENT_ID;
const CANVA_CLIENT_SECRET = process.env.CANVA_CLIENT_SECRET;
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://127.0.0.1:3000";
const REDIRECT_URI = `${APP_URL}/api/canva/callback`;

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const cookieStore = await cookies();
    const codeVerifier = cookieStore.get('canva_code_verifier')?.value;

    if (!code || !codeVerifier) {
        return NextResponse.redirect(new URL("/create-design?error=invalid_auth_state", request.url));
    }

    try {
        console.log("Exchanging Canva Code for Token...");

        // Exchange Code for Access Token
        const tokenResponse = await fetch("https://api.canva.com/rest/v1/oauth/token", {
            method: "POST",
            headers: {
                "Authorization": "Basic " + Buffer.from(CANVA_CLIENT_ID + ":" + CANVA_CLIENT_SECRET).toString("base64"),
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "authorization_code",
                code: code,
                code_verifier: codeVerifier,
                redirect_uri: REDIRECT_URI,
            }),
        });

        if (!tokenResponse.ok) {
            const errorText = await tokenResponse.text();
            console.error("Canva Token Error:", errorText);
            throw new Error(`Token exchange failed: ${tokenResponse.status}`);
        }

        const tokens = await tokenResponse.json();
        console.log("Canva Connected Successfully!", tokens);

        // Cleanup cookie
        cookieStore.delete('canva_code_verifier');

        // Redirect back to frontend with a success flag
        return NextResponse.redirect(new URL("/create-design?status=success&design_id=real_design_123", request.url));

    } catch (error) {
        console.error("Canva Auth Error:", error);
        return NextResponse.redirect(new URL("/create-design?error=auth_failed", request.url));
    }
}

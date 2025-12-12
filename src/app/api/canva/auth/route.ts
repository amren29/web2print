import { NextResponse } from "next/server";
import crypto from "crypto";
import { cookies } from "next/headers";

const CANVA_CLIENT_ID = process.env.CANVA_CLIENT_ID;
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://127.0.0.1:3000";
const REDIRECT_URI = `${APP_URL}/api/canva/callback`;
const CANVA_AUTH_URL = "https://www.canva.com/api/oauth/authorize";

// Helper to generate code_verifier
function generateCodeVerifier() {
    return crypto.randomBytes(32).toString('base64url');
}

// Helper to generate code_challenge (S256)
function generateCodeChallenge(verifier: string) {
    return crypto.createHash('sha256').update(verifier).digest('base64url');
}

export async function GET() {
    if (!CANVA_CLIENT_ID) {
        return NextResponse.json({ error: "Missing Canva Configuration" }, { status: 500 });
    }

    const codeVerifier = generateCodeVerifier();
    const codeChallenge = generateCodeChallenge(codeVerifier);

    // Store verifier in cookie for the callback
    const cookieStore = await cookies();
    cookieStore.set('canva_code_verifier', codeVerifier, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 3600 // 1 hour
    });

    const scopes = [
        "design:permission:read", "design:permission:write",
        "asset:read", "asset:write",
        "brandtemplate:content:read", "brandtemplate:meta:read",
        "folder:read", "folder:write", "folder:permission:read", "folder:permission:write",
        "app:read", "app:write",
        "profile:read",
        "design:content:read", "design:content:write",
        "comment:read", "comment:write"
    ].join(" ");

    const params = new URLSearchParams({
        response_type: "code",
        client_id: CANVA_CLIENT_ID!,
        redirect_uri: REDIRECT_URI,
        scope: scopes,
        state: crypto.randomBytes(16).toString('hex'),
        code_challenge: codeChallenge,
        code_challenge_method: "S256"
    });

    return NextResponse.redirect(`${CANVA_AUTH_URL}?${params.toString()}`);
}

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest, response: NextResponse) {
    // get pathname 
    console.log(request.url);
    if (request.url.includes("/test1")) {
        // works well
        return NextResponse.next();
    }
    if (request.url.includes("/test2")) {
        return NextResponse.redirect(
            // this redirects to xyz-80.euw.devtunnels.ms
            new URL(`/login`, "http://localhost")
        );
    }
    if (request.url.includes("/test3")) {
        return NextResponse.redirect(
            // this redirects to xyz-3000.euw.devtunnels.ms:3000
            new URL(`/login`, "http://localhost:3000")
        );
    }
}
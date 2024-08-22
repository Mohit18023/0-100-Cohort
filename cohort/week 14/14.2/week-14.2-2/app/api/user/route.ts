import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from '@/db';


// Define a Zod schema for validation
const userSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6),
});

export async function POST(req: NextRequest) {
    try {
        // Parse and validate the request body
        const body = await req.json();
        const validatedData = userSchema.parse(body);

        // Create a new user in the database
        const user = await prisma.user.create({
            data: {
                username: validatedData.username,
                password: validatedData.password,
            },
        });

        // Log the user ID
        console.log(user.id);

        // Return a JSON response
        return NextResponse.json({ message: "Signed up", userId: user.id });
    } catch (error) {
        // Narrow down the error type
        if (error instanceof z.ZodError) {
            // Handle validation errors
            return NextResponse.json({ error: "Validation failed", details: error.errors }, { status: 400 });
        } else if (error instanceof Error) {
            // Handle generic errors
            console.error("Error during signup:", error.message);
            return NextResponse.json({ error: "Failed to sign up", details: error.message }, { status: 400 });
        } else {
            // Handle unknown errors
            console.error("Unknown error during signup:", error);
            return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
        }
    }
}


export async function GET() {
    const user = await prisma.user.findFirst({});
    return Response.json({ name: user?.username, email: user?.username })
}
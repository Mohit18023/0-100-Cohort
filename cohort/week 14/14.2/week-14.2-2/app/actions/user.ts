"use server"
import client from '@/db';

export async function solve(email: string, password: string): Promise<string> {
    try {
        await client.user.create({
            data: {
                username: email,
                password: password
            }
        });
        return "Signup Successful";
    } catch (e) {
        // Check if the error is an instance of Error
        if (e instanceof Error) {
            console.error(e.message);
            return `Error: ${e.message}`;
        } else {
            // Handle unexpected non-Error objects
            console.error("An unknown error occurred:", e);
            return "An unknown error occurred";
        }
    }
}

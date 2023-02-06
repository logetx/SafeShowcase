import { db } from '$lib/server/database';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';


export const POST: RequestHandler = async ({ request }) => {
    console.log(request)
    
    const { hex, secret_key } = await request.json();

    console.log(hex, secret_key)

    const admin_access = await db.admin.findFirst({
        where: {
            api_key: secret_key
        }
    });

    if (!admin_access) {
        throw error(400, "Invalid secret key");
    }
    
    const user = await db.user.findFirst({
        where: {
            hex: hex,
        }
    });

    let status = true;

    if (!user) {
        status = false;
    }

    const log = await db.logs.create({
        data: {
            card_hex: hex,
            action: status ? "Access granted" : "Access denied",
            status: status,
        }
    });

    if (user) {
        await db.logs.update({
            where: {
                id: log.id
            },
            data: {
                users: {
                    connect: {
                        hex: user.hex
                    }
                }
            }
        });
    }

    return json(status);
}
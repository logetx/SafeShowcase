import { db } from '$lib/server/database';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';


export const POST: RequestHandler = async ({ locals, params }) => {
    

    const data = await db.logs.findMany({
        where: {
            card_hex: params.slug,
        },
        orderBy: {
            createdAt: 'desc',
        }
    });

    return json(data);
}
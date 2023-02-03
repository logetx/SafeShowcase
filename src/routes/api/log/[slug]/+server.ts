import { db } from '$lib/server/database';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';


export const POST: RequestHandler = async ({ locals, params }) => {
    if (!locals.currentAdmin) {
        return json({ error: 'Not logged in' }, { status: 401 });
    }

    // const data = await db.logs.findMany({
    //     where: {
    //         card_hex: params.slug,
    //     },
    //     orderBy: {
    //         createdAt: 'desc',
    //     }
    // });

    const data = Array.from({ length: 100 }, (_, i) => ({
        createdAt: new Date().toISOString(),
        status: true,
    }));

    return json(data);
}
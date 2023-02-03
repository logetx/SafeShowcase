import { db } from '$lib/server/database';
import { json, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ locals, request }) => {
    if(locals.currentAdmin) {
        throw redirect(302, '/');
    }

    const { hex } = await request.json();
    const data = await db.logs.findMany({
        where: {
            card_hex: hex
        }
    });

    return json(data);
}
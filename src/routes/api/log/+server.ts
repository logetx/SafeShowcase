import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({request}) => {
    const data = await request.json();
    
    return new Response();
}
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async({ locals }) => {
    return { currentAdmin: locals.currentAdmin };
}
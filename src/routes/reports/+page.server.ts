import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import { db } from "$lib/server/database";

export const load: PageServerLoad = async({ locals }) => {
    if(!locals.currentAdmin) {
        throw redirect(302, '/login');
    }

    const logs = await db.logs.findMany();

    return { logs };
}

import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/database';


export const load: PageServerLoad = async({ locals }) => {
    if(!locals.currentAdmin) {
        throw redirect(302, '/login');
    }

    const lastLogs = await db.logs.findMany({
        where: {
            createdAt: {
                gte: new Date(Date.now() - 1000 * 60 * 60 * 24)
            }
        },
        include: {
            users: true
        }
    })

    const admin = await db.admin.findUnique({
        where: {
            id: locals.currentAdmin.id
        }
    });

    return { admin: admin, lastLogs: lastLogs };
}
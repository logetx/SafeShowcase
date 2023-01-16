import type { Handle } from "@sveltejs/kit";
import { db }from '$lib/server/database';

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');

	if (!session) {
		return await resolve(event);
	}

	// find the user based on the session
	const user = await db.admin.findUnique({
		where: { id: parseInt(session) }
	});

	if(user) {
		event.locals.currentAdmin = {
			id: user.id,
            username: user.username,
		};
	}

	return await resolve(event);
}
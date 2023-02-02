import { redirect, type Actions, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import { db } from "$lib/server/database";
import type { UserClass } from "$lib/form/types";

export const load: PageServerLoad = async({ locals }) => {
    if(!locals.currentAdmin) {
        throw redirect(302, '/login');
    }

    const users = await db.user.findMany();

    return { users };
}

export const actions: Actions = {
    async create({ locals, request }) {
        if(!locals.currentAdmin) {
            throw redirect(302, '/login');
        }
        
        const data = Object.fromEntries(await request.formData()) as unknown as UserClass;


        const hex_verification = await db.user.findUnique({
            where: {
                hex: data.hex
            }
        });

        if (hex_verification) {
            return fail(400);
        }


        const unique_fields_verification = await db.user.findFirst({
            where: {
                OR: [
                    {
                        phone_number: data.phone_number,
                    }, {
                        email: data.name,
                    }, {
                        security_number: data.security_number,
                    }
                ]
            }
        });

        if (unique_fields_verification) {
            return fail(400);
        }


        await db.user.create({
            data: {
                hex: data.hex,
                name: data.name,
                surname: data.surname,
                email: data.email,
                phone_number: data.phone_number,
                security_number: data.security_number,
            }
        });

        return {};
    },

    async delete({ locals, request }) {
        if(!locals.currentAdmin) {
            throw redirect(302, '/login');
        }

        const data = await request.formData();
        const hex = data.get('hex');

        await db.user.delete({
            where: {
                hex: hex?.toString()
            }
        });

        return {};
    }
}
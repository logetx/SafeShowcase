// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			currentAdmin: {
				id: number;
				username: string;
			}
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
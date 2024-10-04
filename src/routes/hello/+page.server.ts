import type { PageServerLoad } from './$types';

export const load = (async () => {

    // Kirim data ke page.svelte
    return {
        pageName : 'Hello'
    };
}) satisfies PageServerLoad;
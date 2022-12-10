import { supabase, userSignUp } from '$lib/supabase';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
    };
};
/** @type {import('./$types').Actions} */
export const actions = {
    default: async (event) => {
        let username = event.url.searchParams.get('email');
        let password = event.url.searchParams.get('password');
        // let user = await userSignUp(username, password);

        console.warn(event.url);

        // if (user.error){
        //     console.warn(user.error)
        // }
        // else{
        //     console.log(user)
        // }
    }
  };
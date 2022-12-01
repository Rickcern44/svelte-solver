import { supabase } from '$lib/supabase'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({}) {
    let testTable = await supabase.from('SudokuTestTable').select('*')

    if (testTable){
        return testTable
    }
    else{
        error(404, 'Unable to fetch data from supabase')
    }
};

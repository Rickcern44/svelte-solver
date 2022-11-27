import { supabase } from '$lib/supabase'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    let testTable = await supabase.from('SudokuTestTable').select('*')

    if (testTable){
        return testTable
    }
    else{
        error(404, 'Unable to fetch data from supabase')
    }
    // return {
    //     game: {
    //         // problem: '004300209005009001070060043006002087190007400050083000600000105003508690042910300',
    //         problem : [
    //             [0,0,4,3,0,0,2,0,9],
    //             [0,0,5,0,0,9,0,0,1],
    //             [0,7,0,0,6,0,0,4,3],
    //             [0,0,6,0,0,2,0,8,7],
    //             [1,9,0,0,0,7,4,0,0],
    //             [0,5,0,0,8,3,0,0,0],
    //             [6,0,0,0,0,0,1,0,5],
    //             [0,0,3,5,0,8,6,9,0],
    //             [0,4,2,9,1,0,3,0,0]
    //         ],
    //         solution: '864371259325849761971265843436192587198657432257483916689734125713528694542916378'
    //     }
    // };
};

export class Game {
    id: number
    problem: any
    solution: any
    solvedAt: any
    solvedBy: string


    constructor(id: number,problem: any, solution: any, solvedAt: any, solvedBy: string){
        this.id = id,
        this.problem = formatProblem(problem),
        this.solution = formatProblem(solution),
        this.solvedAt = solvedAt,
        this.solvedBy = solvedBy
    }
}

const mapNumberArray = (arr: Array<string>) => {
    let numberArray = arr.map(i => Number(i))
    return numberArray
 }

function formatProblem(item: any){
    let arr = []

    arr.push(mapNumberArray(Array.from(item.substring(0,9))));
    arr.push(mapNumberArray(Array.from(item.substring(9,18))));
    arr.push(mapNumberArray(Array.from(item.substring(18,27))));
    arr.push(mapNumberArray(Array.from(item.substring(27,36))));
    arr.push(mapNumberArray(Array.from(item.substring(36,45))));
    arr.push(mapNumberArray(Array.from(item.substring(45,54))));
    arr.push(mapNumberArray(Array.from(item.substring(54,63))));
    arr.push(mapNumberArray(Array.from(item.substring(63,72))));
    arr.push(mapNumberArray(Array.from(item.substring(72,81))));

    return arr;
}


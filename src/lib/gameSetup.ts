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

function formatProblem(item: any){
    let arr = []
    console.log(`Game Setup : Array Length - ${item.length}`)
    arr.push(Array(1).fill(Array.from(item.substring(0,9))));
    arr.push(Array(1).fill(Array.from(item.substring(9,18))));
    arr.push(Array(1).fill(Array.from(item.substring(18,27))));
    arr.push(Array(1).fill(Array.from(item.substring(27,36))));
    arr.push(Array(1).fill(Array.from(item.substring(36,45))));
    arr.push(Array(1).fill(Array.from(item.substring(45,54))));
    arr.push(Array(1).fill(Array.from(item.substring(54,63))));
    arr.push(Array(1).fill(Array.from(item.substring(63,72))));
    arr.push(Array(1).fill(Array.from(item.substring(72,81))));

    return arr;
}


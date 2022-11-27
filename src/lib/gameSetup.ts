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
    return item;
}


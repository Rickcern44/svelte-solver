<script>
// @ts-nocheck
</script>
<div class="page">
    <h1>Svelte Solver</h1>
    <div>
        <p>
            This is a normal game of sudoku, except any cell can be solved by any player, once the puzzle 
            is solved another new puzzle will take its place! The eventual goal for the game will be to have a record of who solved
            each cell of the puzzle and have a leaderboard to show who has solved the most puzzles.
        </p>
    </div>
    <div>
        <button type="button" class="inline-block px-6 mx-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
            <a href="/game"
            class="text-gray-800 hover:text-gray-300 transition duration-300 ease-in-out mb-4"
            >Start Solving</a>
        </button>
    </div>
    
</div>
<style>
    button{
        width: 300px;
    }
</style>


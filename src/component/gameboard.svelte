<script>
    // @ts-nocheck
    export let game;
    let board = game.problem;

    let cellElements = {};
    let numberRange = '123456789';

    const cellId = (rowIndex, cellIndex) => `${rowIndex}-${cellIndex}`;

    const onKeyDown = (event, rowIndex, cellIndex) => {
        if(numberRange.includes(event.key)){
            board[rowIndex] = board[rowIndex].map((cell, ci) => ci === cellIndex ? event.key : cell) 
        }
        if (event.key === 'ArrowLeft' && cellIndex > 0){
            cellElements[cellId(rowIndex, cellIndex - 1)].focus();
        } 
        if (event.key === 'ArrowRight' && cellIndex < 8){
            cellElements[cellId(rowIndex, cellIndex + 1)].focus();
        }
        if (event.key === 'ArrowDown' && rowIndex < 8){
            cellElements[cellId(rowIndex + 1, cellIndex)].focus();
        }
        if (event.key === 'ArrowUp' && rowIndex > 0){
            cellElements[cellId(rowIndex - 1, cellIndex)].focus();
        }
    }
</script>
<div class="container-fluid game-board">
{#each board as row, i}
    <div class="item">
        {#each row as r, j}
                <input
                    bind:this={cellElements[cellId(i,j)]}
                    class="itemInput" 
                    type="tel"
                    bind:value={board[i][j]}
                    on:keydown|preventDefault={(e) => onKeyDown(e, i, j)}
                />
        {/each}
    </div>
{/each}
</div>
<style>
    .item{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .game-board{
        justify-content: center;
    }
    input[type=tel]:focus{
        box-shadow: 0 0 5px green;
        background-color:whitesmoke ;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .itemInput{
            width: 40px;
            height: 40px;
            border: .5px solid black;
            background-color: lightgray;
            text-align: center;
        }
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .itemInput{
            width: 60px;
            height: 60px;
            border: .5px solid black;
            background-color: lightgray;
            text-align: center;
        }
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        .itemInput{
            width: 70px;
            height: 70px;
            border: 1.5px solid black;
            background-color: lightgray;
            text-align: center;
        }
    }
    @media (min-width: 1201px){
        .itemInput{
            width: 100px;
            height: 100px;
            border: 1.5px solid black;
            background-color: lightgray;
            text-align: center;
        }
    }
    </style>
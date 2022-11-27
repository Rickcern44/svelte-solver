<script>
// @ts-nocheck

    let board = Array(9).fill(Array(9).fill('0'));
    export let problem;
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

        console.log(cellElements)
    }
</script>
<div class="container-fluid game-board">
{#each board as row, i}
    <div class="item">
        {#each row as r, j}
                <input
                    bind:this={cellElements[cellId(i,j)]}
                    class="itemInput" type="text" 
                    value="{problem[i][j]}"
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
    .itemInput{
        width: 50px;
        height: 50px;
        border: 1px solid black;
        background-color: slategray;
        text-align: center;
    }
    input[type=text]:focus{
        box-shadow: 0 0 5px green;
    }
</style>
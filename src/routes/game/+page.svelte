<script>
    import { Game } from '$lib/gameSetup';
    import Gameboard from '../../component/gameboard.svelte';

      /** @type {import('./$types').PageServerLoad} */
    export let data;
    let obj = data.data[0];
    const game = new Game(obj.id, obj.problem, obj.solution, obj.solvedAt, obj.solvedBy)
    const showGame = () => {
      console.log(game.solution)
    }

</script>

<h1>Svelte-Doku</h1>

<Gameboard game={game}/>

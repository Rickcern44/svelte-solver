<script>
    import Gameboard from '../../component/gameboard.svelte';

      /** @type {import('./$types').PageServerLoad} */
    export let data;

    const log = () =>{
        console.log(data)
    }
</script>

<h1>Svelte-Doku</h1>

<button on:click={log}>Click to Log</button>
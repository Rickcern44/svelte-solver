<script>
    // @ts-nocheck
    import { onMount } from 'svelte';

    /** @type {import('./$types').PageServerData} */
    export let data;

</script>

<form method="PUT">
    <input 
        class="form-control mb-2" 
        name="email" 
        type="email" 
        id="login" 
        placeholder="Email">
    <input 
        class="form-control mb-2" 
        name="password" 
        type="password" 
        id="password" 
        placeholder="Password">
    <div class="d-grid gap-2">
        <button class="btn btn-dark">Log in</button>
    </div>
  </form>
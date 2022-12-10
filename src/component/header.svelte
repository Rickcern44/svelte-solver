
<script>
    	import { page } from '$app/stores';
        let pageName = $page.url.pathname;
</script>

<nav class="navbar navbar-expand-sm navbar-dark bg-dark px-4">
    <a class="navbar-brand" href="/">Svelte-Doku</a>
    <div id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/" aria-current={pageName === '/' ? 'page' : undefined}>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/game">Game</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item ml-auto">
            <a class="nav-link" href="/login">Log In</a>
          </li>
        </ul>
      </div>
</nav>

<style>
    ul{
        list-style-type: none;
    }
</style>
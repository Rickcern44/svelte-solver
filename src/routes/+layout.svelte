<script>
    import Header from './../component/header.svelte';
	import "./../app.css"
    import NavMenu from './../component/navMenu.svelte'
</script>
<div class="app">
    <NavMenu />
    <main>
        <slot />
    </main>
    <footer>
        <p>Copyright 2022</p>
    </footer>
</div>
<style>
    .app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
    main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
        justify-content: center;
        text-align: center;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}
</style>
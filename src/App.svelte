<script>
	import Modal from './components/modal.svelte'
	import { getTgUser } from './api/api.svelte'

	let user = getTgUser();
	// const tg = window.Telegram.WebApp;

	// let user = tg.initDataUnsafe.id
	let score = 0;

	function incrementScore(){
		score += 1;
	}
</script>

<Modal />
<main>
	<h2>Score: {score}</h2>
	<h2>User~: {user}</h2>
	<button class="clicker" on:click={incrementScore}>
		<img src="assets/chillguy.png" alt="chill guy">
	</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
<script>
	import { toast } from '@zerodevx/svelte-toast';
	import { onMount } from 'svelte';
	let url = 'https://newsletter.coollabs.io';
	let subscribers = 0;
	onMount(async () => {
		const subs = await (await fetch(`${url}/subscribers`)).json();
		subscribers = subs.subscribers;
	});
	let emailSubscribe;
	let emailSubscribeInput;

	async function subscribe(e) {
		if (
			emailSubscribe &&
			/^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/.test(
				emailSubscribeInput.value
			) &&
			emailSubscribeInput.checkValidity()
		) {
			e.preventDefault();
			try {
				const { message } = await (
					await fetch(`${url}/subscribe`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							email: emailSubscribeInput.value
						})
					})
				).json();
				toast.push(message);
			} catch (error) {
				toast.push(error);
			}
		}
	}
</script>

<div class="bg-coolgray-100 text-white">
	<div class="max-w-3xl text-center pb-10 py-5 my-5 mx-auto px-4">
		<p class="font-bold text-xl">
			Interested about Coolify or <a
				href="https://coollabs.io/products"
				target="_blank"
				class="underline text-sky-500 hover:text-white font-extrabold">our other projects?</a
			>
		</p>
		<p class="text-xs md:text-base py-2">
			<span class=" gradient">Subscribe</span> to our newsletter!
		</p>
		<p class="pb-6 text-xs">(No bullsh*t, promise)</p>
		<div class="">
			<div class="py-5">
				<form on:submit|preventDefault>
					<input
						bind:this={emailSubscribeInput}
						class="w-64"
						placeholder="Email address"
						type="email"
						bind:value={emailSubscribe}
						required
					/>
					<button
						type="submit"
						class="w-32 button py-2 bg-coollabs hover:bg-coollabs-100 cursor-pointer text-center"
						on:click={subscribe}>Subscribe</button
					>
				</form>
			</div>
		</div>
		<div class="font-bold pb-10">
			<span class="text-pink-400 font-extrabold">{subscribers}</span> awesome people already subscribed!
		</div>
	</div>
</div>

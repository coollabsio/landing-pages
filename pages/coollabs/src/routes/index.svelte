<script context="module">
	export const hydrate = true;
</script>

<script>
	import Subscribe from '$components/Subscribe.svelte';

	let email;
	let emailInput;
	async function subscribe(e) {
		if (email && emailInput.checkValidity()) {
			e.preventDefault();
			window.location.assign(`https://newsletter.coollabs.io/${email}/subscribe`);
		}
	}
</script>

<div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
	<div class="text-center">
		<p
			class="mt-1 pb-8 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl text-center"
		>
			<span class="gradient">coolLabs</span>
		</p>
		<h2 class="text-xl sm:text-3xl font-extrabold text-white">
			Control your digital footprint with
		</h2>
		<h2 class="text-xl sm:text-3xl font-extrabold text-white">
			<span class="text-yellow-400">applications</span> and
			<span class="text-red-500">services</span>
			built for <span class="text-pink-500">your online safety</span>
		</h2>
	</div>
</div>
<div class="relative px-4 sm:px-6 lg:px-8">
	<div class="text-lg max-w-prose mx-auto">
		<p class="mt-8 text-xl text-white leading-8">
			It's frustrating how deeply we are bonded to large companies. We use their products everyday.
			Rarely thinking of what we give them in return.
		</p>
		<p class="mt-8 text-xl text-white leading-8">
			We allow them to
			<span class="text-red-500 font-bold">collect & aggregate</span>
			our personal information & do whatever they want with it!
		</p>
		<p class="mt-8 text-xl text-white leading-8">
			They are selling literally to anybody who pays for it.
			<br />(<span class="text-red-500 font-bold">+80%</span> of Google's &
			<span class="text-red-500 font-bold">+98%</span>
			of Facebook's income is from
			<a
				class="underline font-bold text-blue-500"
				href="https://www.visualcapitalist.com/how-tech-giants-make-billions/">targeted ads!</a
			>)
		</p>
		<p class="mt-8 text-xl text-white leading-8">
			Even if you keep yourself far away from their products, they are still able to collect data of
			<a
				class="underline font-bold text-blue-500"
				href="https://www.visualcapitalist.com/how-google-tracks-you/">you & your online behavior</a
			>
			on any site where their services are integrated! <br />(<span class="text-red-500 font-bold"
				>+50%</span
			>
			of all websites available online are using
			<a
				class="underline font-bold text-blue-500"
				href="https://w3techs.com/technologies/details/ta-googleanalytics">Google Analytics</a
			>)
		</p>
		<p class="mt-8 text-2xl text-center text-white leading-8 font-bold">
			You & your user's
			<span class="text-green-500 font-bold">should NOT be</span> the products!
		</p>
	</div>
</div>

<div class="py-12  pt-32">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
		<div class="lg:text-center ">
			<p
				class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl gradient max-w-sm mx-auto"
			>
				How we solving it?
			</p>
		</div>
		<div class="mt-10">
			<div class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
				<div>
					<div
						class="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white"
					>
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
							/>
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">
							With privacy-centric mindset
						</div>
						<div class="mt-2 text-base text-white">
							We never sell your data and respects your &amp; your user's privacy. <br /><br />
							We
							<span class="font-bold text-green-500">do not store</span>
							any personal information, only the absolute necessary ones.
						</div>
					</div>
				</div>
				<div>
					<div
						class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white"
					>
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
							/>
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">With trusted architecture</div>
						<div class="mt-2 text-base text-white">
							We do not use large hosting companies, instead dedicated servers from independent and
							reliable companies.
							<br /><br />
							We do not send any data to 3rd parties. You would like to test it?
							<br /><br />Try it with
							<a
								class="underline font-bold text-purple-500"
								href="https://requestmap.webperf.tools/">this</a
							>
							awesome tool.
						</div>
					</div>
				</div>
				<div>
					<div
						class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white"
					>
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">
							With a friendly business model
						</div>
						<div class="mt-2 text-base text-white">
							We are open sourcing all of our codebases. <br /><br />
							This is our first step to be
							<span class="font-bold text-yellow-500">trustworthy</span>.
							<br /><br />
							To make it financially sustainable, we provide you a
							<span class="font-bold text-yellow-500">hassle-free, hosted but paid version</span>
							of our products!
						</div>
					</div>
				</div>
			</div>
			<div class="space-y-10 pt-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
				<div>
					<div class="flex items-center justify-center h-12 w-12 rounded-md bg-red-400 text-white">
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">With hand-made services</div>
						<div class="mt-2 text-base text-white">
							All services used by our apps are carefully
							<span class="font-bold text-red-400">built by us &amp; the community.</span>
							This ensures that your data does not flows beyond us.
						</div>
					</div>
				</div>

				<div>
					<div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">With an open community</div>
						<div class="mt-2 text-base text-white">
							<span class="font-bold text-blue-500">Anybody could shape</span>
							our products with their ideas! Literally anybody!
						</div>
					</div>
				</div>

				<div>
					<div class="flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white">
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							/>
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">With cool technologies</div>
						<div class="mt-2 text-base text-white">
							We use the latest technologies, so we can build lightning fast apps and ship them in a
							blink of an eye!
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="pt-20">
		<div class="max-w-7xl mx-auto text-center py-1 px-4 sm:px-6 lg:pt-16 lg:px-8">
			<h2 class="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
				<span class="block "
					>Follow our journey on
					<a href="https://twitter.com/andrasbacsai"
						><span class="sr-only">Twitter</span>
						<svg
							class="inline-block w-12 h-12 text-blue-500 hover:text-blue-400"
							fill="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
							/>
						</svg></a
					></span
				>
			</h2>
		</div>
	</div>
</div>
<Subscribe />

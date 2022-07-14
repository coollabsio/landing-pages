<script context="module">
	export const hydrate = true;
</script>

<script>
	let url = 'https://get.coollabs.io';
	import Subscribe from '$components/Subscribe.svelte';
	import { onMount } from 'svelte';
	let instances = 0;
	onMount(async () => {
		const { count } = await (
			await fetch(`${url}/instances`, { headers: { 'cool-api-key': 'coolify' } })
		).json();
		instances = count;
	});
</script>

<div class="max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
	<div class="text-center flex flex-col justify-center items-center">
		<p class="mt-1 font-extrabold text-white text-5xl  lg:text-6xl text-center gradient">Coolify</p>
		<h2 class="text-2xl md:text-3xl font-extrabold text-white pt-8">
			An open-source & self-hostable
			<span class="text-indigo-400">Heroku</span>
			<span class="text-pink-400 text-2xl">/</span> <span class="text-green-400">Netlify</span> alternative
		</h2>
	</div>
</div>

<div class="text-center pb-10">
	<p class="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white px-10 sm:text-2xl">
		<span class="text-sky-500 text-4xl">{instances}</span> instances already installed!
	</p>
</div>

<div class="flex justify-center ">
	<iframe
		width="560"
		height="315"
		src="https://www.youtube-nocookie.com/embed/Jg6SWqyvYys"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
</div>
<div class="bg-coolblack ">
	<div class="max-w-7xl mx-auto text-center pt-8 px-4 sm:px-6 lg:pt-8 lg:px-8">
		<div class="text-base font-extrabold tracking-tight text-white sm:text-2xl pb-4">
			Install on your server in a minute!
		</div>

		<div class="flex justify-center px-10">
			<div
				class="tracking-tight text-white font-mono bg-black px-4 py-2 rounded text-xs md:text-sm text-left"
			>
				wget -q https://get.coollabs.io/coolify/install.sh -O install.sh; sudo bash ./install.sh
			</div>
		</div>
		<div class="pb-4">
			<a
				href="https://docs.coollabs.io/coolify/installation"
				target="_blank"
				class="tracking-tight text-gray-300 text-xs font-mono hover:underline"
				>(You can customize the installation process, for more details click here)</a
			>
		</div>
		<div class="text-base font-extrabold tracking-tight text-white sm:text-2xl pb-12">
			Or try out a <a class="text-orange-500 hover:underline" href="https://demo.coolify.io" target="_blank"
				>live demo</a>!
		</div>
	</div>
</div>

<div class="pb-16 md:px-0 px-6">
	<div class="max-w-7xl sm:mx-10  lg:mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mt-10">
			<div class="space-y-10 lg:space-y-0 mx-auto lg:grid lg:grid-cols-3 lg:gap-8 w-custom pb-10">
				<div>
					<div
						class="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentcolor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<rect x="4" y="4" width="6" height="6" rx="1" />
							<rect x="4" y="14" width="6" height="6" rx="1" />
							<rect x="14" y="14" width="6" height="6" rx="1" />
							<line x1="14" y1="7" x2="20" y2="7" />
							<line x1="17" y1="4" x2="17" y2="10" />
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">Applications</div>
						<div class="mt-2 text-base text-gray-300">
							Deploy <span class="font-bold text-green-400"
								>Static, NodeJS, Svelte, React, Vue, Next, Nuxt, Astro, PHP, Rust, and more...</span
							>
							applications hassle-free with
							<span class="font-bold text-green-400">automatic reverse proxy</span> and
							<span class="font-bold text-green-400"> free SSL certificates</span>!
						</div>
					</div>
				</div>
				<div>
					<div
						class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<ellipse cx="12" cy="6" rx="8" ry="3" />
							<path d="M4 6v6a8 3 0 0 0 16 0v-6" />
							<path d="M4 12v6a8 3 0 0 0 16 0v-6" />
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">Databases</div>
						<div class="mt-2 text-base text-gray-300">
							One-click <span class="font-bold text-purple-400"
								>MongoDB, MySQL, PostgreSQL, CouchDB, RedisDB</span
							>
							instances ready to use, <span class="font-bold text-purple-400"> locally </span>or
							<span class="font-bold text-purple-400">over the internet</span>!
						</div>
					</div>
				</div>

				<div>
					<div class="flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">Services</div>
						<div class="mt-2 text-base text-gray-300">
							Need your own instance of <a href="https://wordpress.org" target="_blank"
								><span class="font-bold text-pink-500 underline hover:text-white">WordPress</span>,
							</a>
							<span class="font-bold text-pink-500 underline hover:text-white">Ghost</span>
							<a href="https://plausible.io" target="_blank"
								><span class="font-bold text-pink-500 underline hover:text-white"
									>Plausible Analytics</span
								></a
							>,
							<a href="https://nocodb.com" target="_blank"
								><span class="font-bold text-pink-500 underline hover:text-white">NocoDB</span></a
							>,
							<a href="https://github.com/dani-garcia/vaultwarden" target="_blank"
								><span class="font-bold text-pink-500 underline hover:text-white"
									>BitWarden/VaultWarden</span
								></a
							>,
							<a href="https://languagetool.org/" target="_blank"
								><span class="font-bold text-pink-500 underline hover:text-white">LanguageTool</span
								></a
							>,
							<a href="https://n8n.io/" target="_blank"
								><span class="font-bold text-pink-500 underline hover:text-white">N8n</span></a
							>,
							<a href="https://github.com/cdr/code-server" target="_blank"
								><span class="font-bold text-pink-500 underline hover:text-white"
									>VSCode Server</span
								></a
							>, and	
							<a href="https://docs.coollabs.io/coolify/services/r" target="_blank"
							><span class="font-bold text-pink-500 underline hover:text-white"
								> more...</span
							></a
						>?
						</div>
					</div>
				</div>
			</div>
			<div class="space-y-10 lg:space-y-0 mx-auto lg:grid lg:grid-cols-3 lg:gap-8 w-custom">
				<div>
					<div
						class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<circle cx="6" cy="6" r="2" />
							<circle cx="18" cy="18" r="2" />
							<path d="M11 6h5a2 2 0 0 1 2 2v8" />
							<polyline points="14 9 11 6 14 3" />
							<path d="M13 18h-5a2 2 0 0 1 -2 -2v-8" />
							<polyline points="10 15 13 18 10 21" />
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">Git sources</div>
						<div class="mt-2 text-base text-gray-300">
							Need integration with <span class="text-orange-500 font-bold"
								>GitHub, GitLab, Bitbucket</span
							>
							<span class="text-xs text-red-500 font-mono">(WIP)</span>
							<span class="text-orange-500 font-bold">, Gitea</span>
							<span class="text-xs text-red-500 font-mono">(WIP)</span>
							both
							<span class="text-orange-500 font-bold">hosted</span>
							or <span class="text-orange-500 font-bold">self-hosted version</span>? You are in the
							right place!
						</div>
					</div>
				</div>
				<div>
					<div class="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path
								d="M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1.002 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46z"
							/>
							<path d="M5 10h3v3h-3z" />
							<path d="M8 10h3v3h-3z" />
							<path d="M11 10h3v3h-3z" />
							<path d="M8 7h3v3h-3z" />
							<path d="M11 7h3v3h-3z" />
							<path d="M11 4h3v3h-3z" />
							<path d="M4.571 18c1.5 0 2.047 -.074 2.958 -.78" />
							<line x1="10" y1="16" x2="10" y2="16.01" />
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">Destinations</div>
						<div class="mt-2 text-base text-gray-300">
							No matter what you host, you can deploy it anywhere, <span
								class="text-sky-500 font-bold">Local Docker Engine, Remote Docker Engine</span
							> <span class="text-xs text-red-500 font-mono">(WIP)</span>, or
							<span class="text-sky-500 font-bold">Kubernetes</span>
							<span class="text-xs text-red-500 font-mono">(WIP)</span>.
						</div>
					</div>
				</div>
				<div>
					<div class="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
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
						<div class="text-lg leading-6 font-extrabold text-white">
							Commit / Pull Request deployments
						</div>
						<div class="mt-2 text-base text-gray-300">
							Automagically deploy new commits and pull requests separately to <span
								class="font-bold text-red-500">quickly review contributions</span
							>
							and <span class="font-bold text-red-500">speed up your teamwork</span>!
						</div>
					</div>
				</div>
			</div>
			<div
				class="space-y-10 pt-6 lg:pt-10 lg:space-y-0 mx-auto lg:grid justify-center lg:grid-cols-3 lg:gap-8 w-custom"
			>
				<div>
					<div class="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<circle cx="9" cy="7" r="4" />
							<path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
							<path d="M16 3.13a4 4 0 0 1 0 7.75" />
							<path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">Teams</div>
						<div class="mt-2 text-base text-gray-300">
							You can manage teams easily with our new <span class="text-cyan-500 font-bold"
								>team management system</span
							>. Each team is separated by a <span class="text-cyan-500 font-bold">namespace</span>,
							and you can create as many teams as you want.
						</div>
					</div>
				</div>
				<div>
					<div class="flex items-center justify-center h-12 w-12 rounded-md bg-gray-700 text-white">
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
						<div class="text-lg leading-6 font-extrabold text-white">
							Hassle-free installation and upgrade
						</div>
						<div class="mt-2 text-base text-gray-300">
							<span class="font-bold text-pink-500">Install</span> and
							<span class="font-bold text-pink-500">upgrade </span>
							your all-in-one IaaS platform
							<span class="font-bold text-pink-500">with one button</span>!
						</div>
					</div>
				</div>

				<!-- <div>
					<div
						class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path
								d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
							/>
							<circle cx="12" cy="12" r="3" />
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">New architecture</div>
						<div class="mt-2 text-base text-gray-300">
							<span class="text-yellow-500 font-bold">v2 is fully rewritten</span> from scratch and
							eliminated all the restrictions that v1 had!<br /> Read the docs
							<a
								class="underline text-blue-500 font-bold"
								href="https://docs.coollabs.io/coolify/about"
								target="_blank">here</a
							>.
						</div>
					</div>
				</div> -->
			</div>
		</div>
	</div>
</div>

<div class="text-center pb-4 px-4">
	<h2 class="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
		<span class="block"
			><span class="text-blue-500">Follow</span> for updates
			<a href="https://twitter.com/andrasbacsai" target="_blank"
				><span class="sr-only">Twitter</span>
				<svg
					class="inline-block w-12 h-12 text-blue-500"
					fill="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
					/>
				</svg></a
			>
			<span class="text-yellow-400">star</span> it on
			<a
				href="https://github.com/coollabsio/coolify"
				target="_blank"
				class="text-center text-white pt-10 hover:text-gray-300"
			>
				<svg
					class="inline-block h-12 w-12"
					fill="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clip-rule="evenodd"
					/>
				</svg></a
			>
			<span class="text-purple-400">join</span> our discord
			<a
				href="https://discord.com/invite/6rDM4fkymF"
				target="_blank"
				class="text-center text-white pt-10 hover:text-gray-300"
			>
				<svg
					class="inline-block h-12 w-12"
					width="71"
					height="55"
					viewBox="0 0 71 55"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0)">
						<path
							d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
							fill="#5865F2"
						/>
					</g>
					<defs>
						<clipPath id="clip0">
							<rect width="71" height="55" fill="white" />
						</clipPath>
					</defs>
				</svg></a
			></span
		>
	</h2>
</div>

<Subscribe />

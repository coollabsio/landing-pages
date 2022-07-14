<script>
	import '../app.postcss';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	const options = {
		duration: 4000
	};
</script>

<SvelteToast {options} />
<div class="pb-4 md:px-0 px-6 bg-coollabs">
	<div class="max-w-7xl sm:mx-10  lg:mx-auto px-4 sm:px-6 lg:px-8 text-center">
	<div class="text-2xl font-bold pt-4">Huge change!</div>
	<div class="text-md  pb-2">I left my job to focus on Coolify 😱</div>
	<a class="bg-pink-600 p-2 px-4 hover:bg-pink-500 rounded" href="https://twitter.com/andrasbacsai/status/1542433893273309184" target="_blank">Learn more here</a>
	</div>
</div>
<header class="p-4 flex justify-center items-center">
	<nav
		class="text-xl flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-y-0 space-y-4 lg:space-x-4 font-bold"
	>
		<a class="navbar-link" href="https://docs.coollabs.io/coolify/about">Documentation</a>
		<a class="navbar-link relative" href="https://opencollective.com/coollabsio"
			>Sponsorship <div
				class="text-[8px] md:text-[10px] md:text-xs font-bold absolute bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full px-1 md:px-2 rotate-[17deg] -mr-3 -mt-1  top-0 right-0"
			>
				new
			</div></a
		>
		<a class="navbar-link" href="https://docs.coollabs.io/contact">Contact</a>
		<a class="navbar-link" href="https://coollabs.io">coolLabs</a>
		<div class="flex justify-center">
			<a
				href="https://www.producthunt.com/posts/coolify?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-coolify"
				target="_blank"
				><img
					src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=338273&theme=dark"
					alt="Coolify - An&#0032;open&#0045;source&#0032;&#0038;&#0032;self&#0045;hostable&#0032;Heroku&#0032;&#0047;&#0032;Netlify&#0032;alternative&#0046; | Product Hunt"
					style="width: 250px; height: 54px;"
					loading="lazy"
					width="250"
					height="54"
				/></a
			>
		</div>
	</nav>
</header>
<slot />
<footer class="bg-coolblack text-white">
	<div class="max-w-7xl mx-auto  px-4 sm:px-6 md:flex md:items-center md:justify-center lg:px-8">
		<div class="my-8 md:mt-0 md:order-1">
			<p class="text-center text-sm font-bold">
				Made from
				<svg xmlns="http://www.w3.org/2000/svg" class="w-4 inline-flex" viewBox="0 0 36 36">
					<path
						fill="#5C913B"
						d="M36 33.5c0 .828-.672 1.5-1.5 1.5h-33C.672 35 0 34.328 0 33.5S.672 32 1.5 32h33c.828 0 1.5.672 1.5 1.5z"
					/>
					<path
						fill="#A0041E"
						d="M12.344 14.702h-2c-.276 0-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5h2c.276 0 .5.224.5.5v7c0 .276-.224.5-.5.5z"
					/>
					<path
						fill="#FFCC4D"
						d="M5.942 32c-.137-4.657-.506-8-.942-8-.435 0-.804 3.343-.941 8h1.883z"
					/>
					<path
						fill="#77B255"
						d="M10 18.731C10 24.306 7.762 26 5 26c-2.761 0-5-1.694-5-7.269C0 13.154 4 5 5 5s5 8.154 5 13.731z"
					/>
					<path fill="#FFE8B6" d="M8 16L21 3l13 13v16H8z" />
					<path fill="#FFCC4D" d="M21 16h1v16h-1z" />
					<path
						fill="#66757F"
						d="M34 17c-.256 0-.512-.098-.707-.293L21 4.414 8.707 16.707c-.391.391-1.023.391-1.414 0s-.391-1.023 0-1.414l13-13c.391-.391 1.023-.391 1.414 0l13 13c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293z"
					/>
					<path
						fill="#66757F"
						d="M21 17c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414l6.5-6.5c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-6.5 6.5c-.195.195-.451.293-.707.293z"
					/>
					<path fill="#C1694F" d="M13 26h4v6h-4z" />
					<path fill="#55ACEE" d="M13 17h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z" />
					<path
						fill="#77B255"
						d="M10.625 29.991c0 1.613-.858 2.103-1.917 2.103-1.058 0-1.917-.49-1.917-2.103 0-1.613 1.533-3.973 1.917-3.973s1.917 2.359 1.917 3.973zm25.25 0c0 1.613-.858 2.103-1.917 2.103-1.058 0-1.917-.49-1.917-2.103 0-1.613 1.533-3.973 1.917-3.973.384 0 1.917 2.359 1.917 3.973z"
					/>
				</svg> by Andras Bacsai
			</p>
		</div>
	</div>
</footer>

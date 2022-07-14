<script>
	import '../app.postcss';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	const options = {
		duration: 4000
	};
</script>

<SvelteToast {options} />
<header class="p-4 flex justify-center items-center">
	<nav class="text-xs md:text-xl flex justify-center space-x-4 font-bold">
		<a class="navbar-link" href=".">Home</a>
		<a class="navbar-link" href="products">Products</a>
    <a class="navbar-link relative" href="https://opencollective.com/coollabsio">Sponsorship <span class="text-xs font-bold absolute  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full px-2 rotate-[17deg] -ml-4 -mt-1">new</span></a>
    <a class="navbar-link" href="https://docs.coollabs.io">Docs</a>
		<a class="navbar-link" href="https://docs.coollabs.io/contact">Contact</a>
	</nav>
</header> 
<slot />
<footer class="bg-coolblack text-white">

    <div class="max-w-7xl mx-auto  px-4 sm:px-6 md:flex md:items-center md:justify-center lg:px-8">
      
      <div class="my-8 md:mt-0 md:order-1">
        <a class=" px-14 text-center hover:underline" href="/privacy-policy" target="_blank">Privacy Policy</a>
        <p class="text-center text-sm font-bold">
          Made from
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 inline-flex" viewBox="0 0 36 36">
            <path fill="#5C913B"
              d="M36 33.5c0 .828-.672 1.5-1.5 1.5h-33C.672 35 0 34.328 0 33.5S.672 32 1.5 32h33c.828 0 1.5.672 1.5 1.5z" />
            <path fill="#A0041E"
              d="M12.344 14.702h-2c-.276 0-.5-.224-.5-.5v-7c0-.276.224-.5.5-.5h2c.276 0 .5.224.5.5v7c0 .276-.224.5-.5.5z" />
            <path fill="#FFCC4D" d="M5.942 32c-.137-4.657-.506-8-.942-8-.435 0-.804 3.343-.941 8h1.883z" />
            <path fill="#77B255"
              d="M10 18.731C10 24.306 7.762 26 5 26c-2.761 0-5-1.694-5-7.269C0 13.154 4 5 5 5s5 8.154 5 13.731z" />
            <path fill="#FFE8B6" d="M8 16L21 3l13 13v16H8z" />
            <path fill="#FFCC4D" d="M21 16h1v16h-1z" />
            <path fill="#66757F"
              d="M34 17c-.256 0-.512-.098-.707-.293L21 4.414 8.707 16.707c-.391.391-1.023.391-1.414 0s-.391-1.023 0-1.414l13-13c.391-.391 1.023-.391 1.414 0l13 13c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293z" />
            <path fill="#66757F"
              d="M21 17c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414l6.5-6.5c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-6.5 6.5c-.195.195-.451.293-.707.293z" />
            <path fill="#C1694F" d="M13 26h4v6h-4z" />
            <path fill="#55ACEE" d="M13 17h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z" />
            <path fill="#77B255"
              d="M10.625 29.991c0 1.613-.858 2.103-1.917 2.103-1.058 0-1.917-.49-1.917-2.103 0-1.613 1.533-3.973 1.917-3.973s1.917 2.359 1.917 3.973zm25.25 0c0 1.613-.858 2.103-1.917 2.103-1.058 0-1.917-.49-1.917-2.103 0-1.613 1.533-3.973 1.917-3.973.384 0 1.917 2.359 1.917 3.973z" />
          </svg> by Andras Bacsai
        </p>
      </div>
    </div>
  </footer>

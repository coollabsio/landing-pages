import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    optimizeDeps: {
        exclude: ['@zerodevx/svelte-toast']
    },
    server: {
        hmr: process.env.GITPOD_WORKSPACE_URL
            ? {
                // Due to port fowarding, we have to replace
                // 'https' with the forwarded port, as this
                // is the URI created by Gitpod.
                host: process.env.GITPOD_WORKSPACE_URL.replace("https://", "3000-"),
                protocol: "wss",
                clientPort: 443
            }
            : true,
    },
    resolve: {
        alias: {
            $components: path.resolve('./src/components/'),
            $store: path.resolve('./src/store/index.ts')
        }
    }
};

export default config;

import vue from '@vitejs/plugin-vue';
const path = require("path");

export default ({ command }) => ({
    resolve: {
        alias: {
        '/@/': path.resolve(__dirname, './src')
        }
    },
    base: command === 'serve' ? '' : '/build/',
    publicDir: 'fake_dir_so_nothing_gets_copied',
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/js/app.ts',
        },
    },
    plugins: [
        vue(),
        {
            name: 'blade',
            handleHotUpdate({ file, server }) {
                if (file.endsWith('.blade.php')) {
                    server.ws.send({
                        type: 'full-reload',
                        path: '*',
                    });
                }
            },
        }
    ],
    optimizeDeps: {
        include: [
        'vue',
        '@inertiajs/inertia',
        '@inertiajs/inertia-vue3',
        '@inertiajs/progress',
        'axios'
        ]
    }
});
import "vite/dynamic-import-polyfill";
import { createApp, h } from "vue";
import { App, plugin } from "@inertiajs/inertia-vue3";
import { InertiaProgress as progress } from "@inertiajs/progress";
import "@tabler/core/dist/css/tabler.min.css";
import "@tabler/core/dist/js/tabler.min.js";

const pages = import.meta.glob("./Pages/**/*.vue");
const el = document.getElementById("app");
progress.init();

createApp({
    render: () =>
        h(App, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => {
                const importPage = pages[`./Pages/${name}.vue`];

                if (!importPage) {
                    throw new Error(
                        `Página desconhecida: ${name}. Verifique se o arquivo vue relacionado existe.`
                    );
                }

                return importPage().then((module) => module.default);
            },
        }),
})
    .mixin({
        methods: {
            route: window.route, // ziggy
            setPageTitle: (title: string) => `Admin Explorations - ${title}`,
        },
    })
    .use(plugin)
    .mount(el);

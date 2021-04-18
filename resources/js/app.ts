import "vite/dynamic-import-polyfill";
import { createApp, h } from "vue";
import { App, plugin } from "@inertiajs/inertia-vue3";
import { InertiaProgress as progress } from "@inertiajs/progress";
import GuestLayout from "./Layouts/Guest.vue";
import AuthenticatedLayout from "./Layouts/Authenticated.vue";
import "@tabler/core/dist/css/tabler.min.css";
import "@tabler/core/dist/js/tabler.min.js";

const el = document.getElementById("app");
progress.init();

createApp({
    render: () =>
        h(App, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: async (name) => {
                const pages = import.meta.glob("./Pages/**/*.vue");

                return await pages[`./Pages/${name}.vue`]().then(
                    ({ default: page }) => {
                        if (
                            page.layout === undefined &&
                            name.startsWith("Auth/")
                        ) {
                            page.layout = GuestLayout;
                        } else {
                            page.layout = AuthenticatedLayout;
                        }
                        return page;
                    }
                );
            },
        }),
})
    .mixin({
        methods: {
            route: route, // ziggy
            setPageTitle: (title: string) => `Admin Explorations - ${title}`,
        },
    })
    .use(plugin)
    .mount(el);

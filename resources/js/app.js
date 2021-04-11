import { createApp, h } from "vue";
import { App, plugin } from "@inertiajs/inertia-vue3";
import { InertiaProgress as progress } from "@inertiajs/progress";

const el = document.getElementById("app");
progress.init();

createApp({
    render: () =>
      h(App, {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: (name) => import(`@/Pages/${name}`).then((module) => module.default),
      }),
  })
  .use(plugin)
  .mount(el);

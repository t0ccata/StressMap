import { createApp, h } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/vue3'
import './bootstrap'
import "../css/app.css"
import Layout from './Layouts/Layout.vue'
import { ZiggyVue } from "../../vendor/tightenco/ziggy"

createInertiaApp({
  title: (title) => `Stress Map ${title}`,
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
    let page = pages[`./Pages/${name}.vue`];
    if (page) {
      page.default.layout = page.default.layout || Layout;
    } else {
      console.error(`Page component not found for: ${name}`);
    }
    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue)
      .component('Head', Head)
      .component('Link', Link)
      .mount(el)
  },
  progress: {
    // The color of the progress bar...
    color: 'red',
    // Whether to include the default NProgress styles...
    includeCSS: true,
    // Whether the NProgress spinner will be shown...
    showSpinner: true,
  },
})
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueFullPage from "vue-fullpage.js";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component

  head.link.push(
    {
      rel: "stylesheet",
      href:
        "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.7/fullpage.css"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Trocchi|Montserrat&display=swap"
    }
  );

  Vue.use(VueFullPage);

  Vue.component("Layout", DefaultLayout);
}

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default async function(Vue, { router, head, isClient }) {
  // Set default layout as a global component

  head.link.push(
    {
      rel: "stylesheet",
      href:
        "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.7/fullpage.css"
    },
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css?family=Trocchi|Montserrat&display=swap"
    }
  );

  head.script.push({
    src: "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"
  });

  if (isClient) {
    let VueFullPage, VueLazyLoad;

    const loadNonSSR = async () => {
      import("fullpage.js/vendors/scrolloverflow");

      // const LightBox = require("vue-image-lightbox").default;
      // console.log(LightBox);
      // Vue.component(LightBox);

      VueLazyLoad = require("vue-lazyload").default;
      Vue.use(VueLazyLoad);

      Vue.component("LightBox", () => import("vue-image-lightbox"));
    };

    await loadNonSSR();
  }

  Vue.component("Layout", DefaultLayout);
}

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
    let VueFullPage, scrolloverflow;

    const func = async () => {
      import("fullpage.js/vendors/scrolloverflow");
      VueFullPage = await import("vue-fullpage.js");
      console.log(VueFullPage, ">>>>>", scrolloverflow);
    };

    await func();

    Vue.use(VueFullPage.default);
  }

  Vue.component("Layout", DefaultLayout);
}

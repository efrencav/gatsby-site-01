// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-index-js": () => import("../src/pages/blog/index.js" /* webpackChunkName: "component---src-pages-blog-index-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-info-about-js": () => import("../src/pages/info/about.js" /* webpackChunkName: "component---src-pages-info-about-js" */),
  "component---src-pages-info-files-info-js": () => import("../src/pages/info/files-info.js" /* webpackChunkName: "component---src-pages-info-files-info-js" */),
  "component---src-pages-page-2-js": () => import("../src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}


const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ecavazos/Desktop/gatsby-site-01/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ecavazos/Desktop/gatsby-site-01/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ecavazos/Desktop/gatsby-site-01/src/pages/index.js"))),
  "component---src-pages-info-about-js": hot(preferDefault(require("/Users/ecavazos/Desktop/gatsby-site-01/src/pages/info/about.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/ecavazos/Desktop/gatsby-site-01/src/pages/page-2.js"))),
  "component---src-pages-info-files-info-js": hot(preferDefault(require("/Users/ecavazos/Desktop/gatsby-site-01/src/pages/info/files-info.js")))
}


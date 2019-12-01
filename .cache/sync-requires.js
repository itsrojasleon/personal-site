const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-all-tags-index-js": hot(preferDefault(require("/Users/juanluisrojasleon/Desktop/personal-site/src/templates/allTagsIndex.js"))),
  "component---src-templates-single-tag-index-js": hot(preferDefault(require("/Users/juanluisrojasleon/Desktop/personal-site/src/templates/singleTagIndex.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/juanluisrojasleon/Desktop/personal-site/src/templates/blogPost.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/juanluisrojasleon/Desktop/personal-site/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/juanluisrojasleon/Desktop/personal-site/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/juanluisrojasleon/Desktop/personal-site/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/juanluisrojasleon/Desktop/personal-site/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/juanluisrojasleon/Desktop/personal-site/src/pages/index.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("/Users/juanluisrojasleon/Desktop/personal-site/src/pages/portfolio.js"))),
  "component---src-pages-awesome-mdx": hot(preferDefault(require("/Users/juanluisrojasleon/Desktop/personal-site/src/pages/awesome.mdx")))
}


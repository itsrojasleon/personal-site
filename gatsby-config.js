module.exports = {
  siteMetadata: {
    title: `rojasleon`,
    titleTemplate: `rojasleon`,
    description: `This is such a beautiful world. I love what I do`,
    author: `@rojasleon`,
    keywords: [
      `Rojas`,
      `Juan Luis Rojas León`,
      `Juan Luis`,
      `Rojas León`,
      `rojasleon`,
      `juanluisrojasleon`,
      `juanluisrojasleón`,
      `JuanLuisRojasLeón`,
      `JuanLuisRojasLeon`,
      `Software Engineer`,
      `Software Developer`,
      `React Hooks`,
      `Node`,
      `React`,
      `Javascript`,
    ],
    socialLinks: {
      twitter: `https://twitter.com/rojas_leon_`,
      linkedin: `https://www.linkedin.com/in/rojasleon`,
      github: `https://github.com/rojasleon`,
      email: `rojasleon.dev@gmail.com`,
    },
    siteUrl: 'https://rojasleon.tech',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-154628275-1',
        head: false,
        respectDNT: true,
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Juan Luis Rojas León`,
        short_name: `rojasleon`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        // graphQL query to get siteMetadata
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl,
              author
            }
          }
        }
      
`,
        feeds: [
          // an array of feeds, I just have one below
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              const {
                siteMetadata: { siteUrl },
              } = site;
              return allMarkdownRemark.edges.map(edge => {
                const {
                  node: {
                    frontmatter: { title, date, path, author },
                    excerpt,
                    html,
                  },
                } = edge;
                return Object.assign({}, edge.node.frontmatter, {
                  language: `en-us`,
                  title,
                  description: excerpt,
                  date,
                  url: siteUrl + path,
                  guid: siteUrl + path,
                  author: author,
                  custom_elements: [{ 'content:encoded': html }],
                });
              });
            },
            // query to get blog post data
            query: `
          {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] },
            ) {
              edges {
                node {
                  excerpt
                  html
                  frontmatter {
                    path
                    date
                    title
                    author
                  }
                }
              }
            }
          }
          
`,
            output: '/rss.xml',
            title: `rojasleon | Juan Luis Rojas León`,
          },
        ],
      },
    },
  ],
};

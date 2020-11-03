// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome 2',
  siteUrl: 'http://some.js',
  siteDescription: 'Site desc',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/posts/**/*.md',
        route: '/posts/:slug',
        refs: {
          // Reference to existing authors by id.
          // author: 'Author',
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: 'Tag',
            route: 'tags/:id',
            create: true
          }
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
  ],
  templates: {
    Post: '/posts/:slug'
  }
}

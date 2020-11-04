// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome 2',
  siteUrl: '',
  siteDescription: 'Site desc',
  plugins: [
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'ChiSiamo',
        path: './content/pages/chi-siamo.md'
      }
    },
  ],
  templates: {
    CustomPage: [{
      path: '/:title',
      component: '~/pages/ChiSiamo.vue'
    }],
  }
}

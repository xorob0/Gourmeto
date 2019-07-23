module.exports = {
  siteMetadata: {
    title: `Gourmeto`,
    description: `Gourmeto est le TFE de Sam Mahaux, étudiant en informatique à la HEH.`,
    author: `@samahaux`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gourmeto`,
        short_name: `gourmeto`,
        start_url: `/`, //La page d'accueil
        background_color: `#cc6600`,
        theme_color: `#cc6600`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}

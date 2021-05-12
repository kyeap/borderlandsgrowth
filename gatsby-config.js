module.exports = {
  siteMetadata: {
    title: "borderland",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato:400,700,300,900` // you can also specify font weights and styles
        ],
      }
    }
  ],
};

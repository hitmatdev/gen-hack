exports.createPages = ({ actions }) => {
    const { createPage } = actions;
  
    // Create a custom 404 page
    createPage({
      path: '/404',
      component: require.resolve('./src/pages/404.js'),
    });
  };
  
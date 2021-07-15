module.exports = function ({ env }) {
    return {
      style: {
        css: {
          loaderOptions: {
            url: false,
          },
        },
      },
    };
  };
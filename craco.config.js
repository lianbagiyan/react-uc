const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1DA57A",
              "@menu-inline-submenu-bg": "@background-color-light",
              "@menu-dark-inline-submenu-bg": "#000c17;",
              "@dropdown-menu-bg": "@component-background",
              "@dropdown-vertical-padding": "5px",
              "@dropdown-edge-child-vertical-padding": "4px",
              "@dropdown-font-size": "@font-size-base",
              "@dropdown-line-height": "22px",
              "@menu-item-active-border-width": 0,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

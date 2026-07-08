// slidev.config.js
module.exports = {
  themeConfig: {
    css: {
      '.logo-fixed': {
        position: 'fixed',
        top: '5px',
        left: '5px',
        zIndex: '9999',  // 确保 logo 显示在最上层
      },
    },
  },
}
module.exports = {
  locales: ['en', 'pt', 'es'], // Array with the languages that you want to use
  defaultLocale: 'pt', // Default language of your website
  pages: {
    '*': ['common'], // Namespaces that you want to import per page (we stick to one namespace for all the application in this tutorial)
  },
};
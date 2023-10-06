/** @type {import('next').NextConfig} */
const nextConfig = {}

const nextTranslate = require('next-translate-plugin');
module.exports = nextTranslate({
    reactStrictMode: true,
  });
  
module.exports = nextConfig

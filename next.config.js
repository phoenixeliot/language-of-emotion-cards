module.exports = {
  reactStrictMode: true,
  basePath: "/language-of-emotion-cards",
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return defaultPathMap;
  },
};

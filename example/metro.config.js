/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path')
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: {
      sourceExts,
      assetExts
    }
  } = await getDefaultConfig();

  assetExts.push("pem");
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    watchFolders: [
      path.resolve(__dirname, '../dist'),
    ],
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg",],
      extraNodeModules: new Proxy(
        {},
        {
          get: (target, name) => {
            if (target.hasOwnProperty(name)) {
              return target[name]
            }
            return path.join(process.cwd(), `node_modules/${name}`)
          },
        },
      ),
    },
  }
})();

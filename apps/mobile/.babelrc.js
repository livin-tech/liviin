module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      ['module:@react-native/babel-preset', { useTransformReactJSX: true }],
    ],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@/src': './src',
          }
        }
      ]
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      }
    }
  };
};

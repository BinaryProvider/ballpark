module.exports = function override(config, env) {
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'sass-resources-loader',
          options: {
            resources: 'src/theme/variables.scss'
          }
        }
      ]
    }
  ];

  return config;
};

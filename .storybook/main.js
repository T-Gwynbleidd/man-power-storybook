module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    '@storybook/addon-actions',
    '@storybook/preset-scss',
  ],
  docs: {
    autodocs: true,
  },
};

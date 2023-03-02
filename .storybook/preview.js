import React from 'react';
import { Colours } from '../src/variables/Colours';

import '../src/scss/index.scss';

const customViewports = {
  ExtraLargeDesktop: {
    name: 'Extra Large desktop',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  LargeDesktop: {
    name: 'Large desktop',
    styles: {
      width: '1440px',
      height: '896px',
    },
  },
  Desktop: {
    name: 'Desktop',
    styles: {
      width: '1280px',
      height: '792px',
    },
  },
  LargeTablet: {
    name: 'Large tablet',
    styles: {
      width: '905px',
      height: '792px',
    },
  },
  Tablet: {
    name: 'Tablet',
    styles: {
      width: '600px',
      height: '792px',
    },
  },
  Phone: {
    name: 'Small Phone',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Typography', 'Layouts', 'Components', 'Forms', 'Demo'],
    },
  },
  viewport: { viewports: customViewports },
  backgrounds: { disable: true },
  layout: 'fullscreen', // Removes body padding on stories
  viewMode: 'story', // Default to story mode for all
};

/* Custom toolbar settings */
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme',
    defaultValue: 'Light',
    toolbar: {
      title: 'Theme',
      icon: 'mirror',
      items: ['Light', 'Dark'],
    },
  },
  background: {
    name: 'Background',
    description: 'Background colour of the component window',
    defaultValue: 'Primary',
    toolbar: {
      title: 'Background',
      icon: 'paintbrush',
      items: ['Primary', 'Secondary'],
    },
  },
};

/* The HTML wrapping each story */
export const decorators = [
  (Story, context) => (
    <>
      <div
        className={context.globals.theme === 'Dark' ? 't-dark' : ''}
        style={{
          minHeight: '100vh',
          backgroundColor: `var(${
            context.globals.background === 'Secondary'
              ? Colours.bg_secondary
              : Colours.bg_primary
          })`,
        }}
      >
        <Story />
      </div>
    </>
  ),
];

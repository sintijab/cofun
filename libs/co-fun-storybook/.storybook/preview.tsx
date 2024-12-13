import React from 'react';
import { CoFunUiProvider } from '../../co-fun-ui/src';
 
import type { Preview } from '@storybook/react';

const shouldRenderFullLayout = (keys: string[], filename: string) => keys.some((key) => filename.includes(key));
 
const preview: Preview = {
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, { parameters }) => {
      const { fileName } = parameters;
      return <div style={{ padding: `${!shouldRenderFullLayout(['Navigation', 'Hero', 'Layout', 'Overview', 'Assistant'], fileName) ? '1rem' : '0'}`}}><CoFunUiProvider><Story /></CoFunUiProvider></div>
    }
  ],
};
 
export default preview;
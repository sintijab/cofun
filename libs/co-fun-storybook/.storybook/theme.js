import { create } from '@storybook/theming/create';
 
export default create({
  base: 'light',
  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',
 
  brandTitle: 'CO-FUN Design System',
  brandUrl: 'https://co-fun.com',
  brandImage: './co-fun.png',
  brandTarget: '_self',
 
  //
  colorPrimary: '#3A10E5',
  colorSecondary: '#24252b',
 
  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#24252b',
  appBorderRadius: 4,
 
  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',
 
  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#24252b',
  barHoverColor: '#24252b',
  barBg: '#ffffff',
 
  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});
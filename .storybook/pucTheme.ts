import { create } from '@storybook/theming';
import pucLogo from '../src/assets/logos/pucpr_horizontal_rgb.png';

export default create({
  base: 'light',
  brandTitle: 'PUCPR Design System',
  brandUrl: '',
  brandImage: pucLogo,
  brandTarget: '_self',

  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  //
  colorPrimary: 'rgb(140, 14, 40)',
  colorSecondary: 'rgb(140, 14, 40)',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: 'rgb(240, 242, 242)',
  appBorderRadius: 4,

  // Text colors
  textColor: 'rgb(87, 0, 19)',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#fff',
  barHoverColor: '#fff',
  barBg: 'rgb(140, 14, 40)',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: 'rgb(140, 14, 40)',
  inputTextColor: '#ffffff',
  inputBorderRadius: 2,
});

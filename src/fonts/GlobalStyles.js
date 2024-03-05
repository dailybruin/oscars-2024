import { createGlobalStyle } from 'styled-components';
import PorterSansBlock from './porter-sans-block.block.otf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'porter';
    src: url(${PorterSansBlock}) format('truetype');
  }
`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";
import shlop from "./assets/shlop.otf";
import poppins from "./assets/Poppins-Regular.ttf";
export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: shlop;
    src: url(${shlop}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: poppins;
    src: url(${poppins}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

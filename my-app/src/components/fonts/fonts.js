import { createGlobalStyle } from 'styled-components';

// Fonts
import Andada_otf from './andada/Regular.otf';
import AndadaBold_otf from './andada/Bold.otf';
import AndadaItalic_otf from './andada/Italic.otf';
import AndadaBoldItalic_otf from './andada/BoldItalic.otf';
import AndadaSC_otf from './andada/SC-Regular.otf';
import AndadaSCBold_otf from './andada/SC-Bold.otf';
import AndadaSCItalic_otf from './andada/SC-Italic.otf';
import AndadaSCBoldItalic_otf from './andada/SC-BoldItalic.otf';
import GreatVibes_otf from './great-vibes/Regular.otf';
// TODO look into loading woff, woff2 and other types of font files

export default createGlobalStyle`
  @font-face {
      font-family: Andada;
      src: url(${Andada_otf}) format("opentype");
      font-weight: normal;
      font-style: normal;
  }
  
  @font-face {
    font-family: Andada;
    src: url(${AndadaBold_otf}) format("opentype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: Andada;
    src: url(${AndadaItalic_otf}) format("opentype");
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: Andada;
    src: url(${AndadaBoldItalic_otf}) format("opentype");
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
      font-family: AndadaSC;
      src: url(${AndadaSC_otf}) format("opentype");
      font-weight: normal;
      font-style: normal;
  }
  
  @font-face {
    font-family: AndadaSC;
    src: url(${AndadaSCBold_otf}) format("opentype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: AndadaSC;
    src: url(${AndadaSCItalic_otf}) format("opentype");
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: AndadaSC;
    src: url(${AndadaSCBoldItalic_otf}) format("opentype");
    font-weight: bold;
    font-style: italic;
  }
  
  @font-face {
    font-family: GreatVibes;
    src: url(${GreatVibes_otf}) format("opentype");
    font-weight: normal;
    font-style: normal;
  }
`;
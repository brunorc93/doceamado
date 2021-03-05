import React, { Component } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// SVGs
  import qr_svg from './svg/qrcode_logo.svg';
  import fb_svg from './svg/icon-facebook.svg';
  import insta_svg from './svg/icon-instagram.svg';
  import phone_svg from './svg/icon-whatsapp.svg';
  import mail_svg from './svg/icon-email.svg';
  import background_svg from './svg/background-fouet.svg';

// Fonts
  import GlobalFonts from './fonts/fonts';

// Variables

  // const highlight_color = '#6ABB97';
  // const highlight_color_2 = '#C5E4E7';

  const color_blue = '#B5E8F2';
  const color_border = '#7F705A';
  const color_text = '#7F705A';
  const color_background = '#F7F7ED';


  // const iconSize = 40;
  // const iconRadius = iconSize/2;
  // const circleCoords = iconRadius.toString()+','+iconRadius.toString()+','+iconRadius.toString();
  // const logoMinSize = 120;
  // const pictureFrameDistance = 15;

  const max_width_val = '550px';

// Styles
  const GlobalStyle = createGlobalStyle`
    html {
      width: 100%;
      height: 100%;
      scrollbar-width: none;
      margin: 0px; 
      padding: 0px;
      background-color: ${color_background};
    }

    body {   
      background-color: ${color_background};
      width: 100%;
      height: 100%;
      margin: 0px;
      padding: 0px;
      /* Firefox 64 */
      overflow: -moz-scrollbars-none;
      scrollbar-width: none;
      /* Hide scrollbar for IE and Edge */
      -ms-overflow-style: none;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    body::-webkit-scrollbar {
      display: none;
      width: 0;
    }

    ul {
      list-style-type:none;
    }

    * {
      position: relative;
      margin: 0;
      padding: 0;
    } 
  `;

  /* Grid */
  const StyledDiv = styled.div`
    border: 1px solid ${color_background};
    box-sizing: border-box;
    background-color: ${color_background};
    margin: 0;
    display: grid;
    grid-template-areas:
    'up up up'
    'upL qrcode upR'
    'downL info downR'
    'down down down';
    grid-template-rows: 1fr min-content min-content 1fr;
    grid-template-columns: 1fr min-content 1fr;  
    @media screen and (max-width: ${max_width_val}) {
      grid-template-columns: 1fr 100% 1fr;  
    }
    @media screen and (max-width: ${max_width_val}) {
    }
    min-width: 100vw;
    min-height: 100vh;
  `;

  const StyledUpBGDiv = styled.div`
    grid-area: up;
    background-color: ${color_blue};
    @media screen and (max-width: ${max_width_val}) {
      background-color: ${color_background};
    }
  `;
  const StyledUpLBGDiv = styled.div`
    grid-area: upL;
    display:flex;
    background-color: ${color_blue};
    @media screen and (max-width: ${max_width_val}) {
      background-color: ${color_background};
    }
  `;
  const StyledUpRBGDiv = styled.div`
    grid-area: upR;
    display:flex;
    background-color: ${color_blue};
    @media screen and (max-width: ${max_width_val}) {
      background-color: ${color_background};
    }
  `;

  const WhiteLineDiv = styled.div`
    background-color: ${color_background};
    height: 18px;
    align-self: flex-end;
    width:100%;
    @media screen and (max-width: ${max_width_val}) {
      height: 0px;
    }
  `;

  const QRCodeHolder = styled.div`
    grid-area: qrcode;
    display: flex;
    height: min-content;
    width: max-content;
    padding: 8px 8px 0px 8px;
    border-top: 1px solid ${color_border};
    border-left: 1px solid ${color_border};
    border-right: 1px solid ${color_border};
    background-color: ${color_background};
    @media screen and (max-width: ${max_width_val}) {
      border-radius: 15px 15px 0px 0px;
    }
  `;

  const QRCode = styled.div`
    display: flex;
    height: min-content;
    justify-content: center;
    border-top: 1px solid ${color_border};
    border-left: 1px solid ${color_border};
    border-right: 1px solid ${color_border};
    background-color: ${color_background};
    @media screen and (max-width: ${max_width_val}) {
      border-radius: 10px 10px 0px 0px;
    }
    & > img {
      align-self: end;
      width: 422px;
      @media screen and (max-width: ${max_width_val}) {
        width: calc(100vw - 22px);
      }
    }
  `;

  const InfoDivHolder = styled.div`
    padding: 0px 8px 8px 8px;
    grid-area: info;
    display:flex;
    justify-content: center;
    align-content: flex-start;
    border-bottom: 1px solid ${color_border};
    border-left: 1px solid ${color_border};
    border-right: 1px solid ${color_border};
    background-color: ${color_background};
    height: min-content;
    @media screen and (max-width: ${max_width_val}) {
      border-radius: 0px 0px 15px 15px;
      height: 100%;
    }
  `;

  const InfoDiv = styled.div`
    display:flex;
    justify-content: center;
    align-content: flex-start;
    border-bottom: 1px solid ${color_border};
    border-left: 1px solid ${color_border};
    border-right: 1px solid ${color_border};
    background-image: url(${background_svg});
    background-repeat: no-repeat;
    background-size: 37%;
    background-position: right bottom;
    background-color: ${color_background};
    height: min-content;
    @media screen and (max-width: ${max_width_val}) {
      height: 100%;
      border-radius: 0px 0px 10px 10px;
    }
    & > ul {
      & > li {
        & > div {
          align-content: center;
          position: relative;
          padding: 2% 0px 0px 10%;
          & > a {
            & > img {
              width: 11%;
              margin: 0px 6% 0px 0px;
              display: inline-block;
              vertical-align: middle;
            }
          }
          & > p {
            display: inline-block;
            color: ${color_text};
            font-family: AndadaSC;
            font-size: 1.4em;
            @media screen and (max-width: ${max_width_val}) {
              font-size: 5.39vw;
            }
            font-style: normal;
            font-wight: normal;
            vertical-align: middle;
            & > a {
              color: ${color_text};
              text-decoration: none;
            }
          }
        }      
      }
    }
  `;

class App extends Component {
  render() {
    return(
      <StyledDiv>
        <GlobalStyle/>
        <GlobalFonts/>
        <StyledUpBGDiv/>
        <StyledUpLBGDiv>
          <WhiteLineDiv/>
        </StyledUpLBGDiv>
        <StyledUpRBGDiv>
          <WhiteLineDiv/>
        </StyledUpRBGDiv>
        <QRCodeHolder>
          <QRCode>
            <img src={qr_svg} alt='qr code with logo' className='qrcode'/>
          </QRCode>
        </QRCodeHolder>
        <InfoDivHolder>
          <InfoDiv>
            <ul>
              <li>
                <div>
                  <a href="https://api.whatsapp.com/send?phone=5521920010912" target="_blank" rel="noopener noreferrer"><img src={phone_svg} alt='phone icon' className='phone'/></a>
                  <p><a href="https://api.whatsapp.com/send?phone=5521920010912" target="_blank" rel="noopener noreferrer">(21) 92001 0912</a></p>
                </div>
              </li>
              <li>
                <div>
                  <a href="https://www.instagram.com/doceamadorj/" target="_blank" rel="noopener noreferrer"><img src={insta_svg} alt='instagram icon' className='insta'/></a>
                  <p><a href="https://www.instagram.com/doceamadorj/" target="_blank" rel="noopener noreferrer">@doceamadorj</a></p>
                </div>
              </li>
              <li>
                <div>
                  <a href="https://www.facebook.com/doceamadorj/" target="_blank" rel="noopener noreferrer"><img src={fb_svg} alt='facebook icon' className='weblink'/></a>
                  <p><a href="https://www.facebook.com/doceamadorj/" target="_blank" rel="noopener noreferrer">/doceamadorj</a></p>
                </div>
              </li>
              <li>
                <div>
                  <a href="mailto:contato@doceamado.com" target="_blank" rel="noopener noreferrer"><img src={mail_svg} alt='email icon' className='email' /></a>
                  <p><a href="mailto:contato@doceamado.com" target="_blank" rel="noopener noreferrer">contato@doceamado.com</a></p>
                </div>
              </li>
              <li><div></div></li>
              <li><div></div></li>
              <li><div></div></li>
            </ul>
          </InfoDiv>
        </InfoDivHolder>
      </StyledDiv>
    )
  }
}

export default App;

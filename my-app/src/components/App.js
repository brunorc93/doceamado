import React, { Component } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// SVGs
import qr_svg from './svg/qrcode_logo.svg';
import link_svg from './svg/web_link_icon_stamp.svg';
import insta_svg from './svg/instagram_icon_stamp.svg';
import phone_svg from './svg/telephone_icon_stamp.svg';
import mail_svg from './svg/email_icon_stamp.svg';

// Fonts
import GlobalFonts from './fonts/fonts';

// colors

const text_color = '#7F705A';
const background_color = '#F7F7ED';
const highlight_color = '#6ABB97';
const highlight_color_2 = '#C5E4E7';

const color_blue = '#B5E8F2';
const color_gray_letter = '#666666';
const color_gray_shadow = '#AAAAAA';
const color_white = '#FFFFFF';


const iconSize = 40;
const iconRadius = iconSize/2;
const circleCoords = iconRadius.toString()+','+iconRadius.toString()+','+iconRadius.toString();
const logoMinSize = 120;
const pictureFrameDistance = 15;

const max_width_val = '550px';

// styles
const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    scrollbar-width: none;
    margin: 0px; 
    padding: 0px;
    background-color: ${color_white};
  }

  body {   
    background-color: ${color_white};
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
  border: 1px solid ${color_white};
  box-sizing: border-box;
  background-color: ${color_white};
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
  @media screen and (min-width: ${max_width_val}) {
    min-width: 100vw;
    min-height: 100vh;
  }
`;

const StyledUpBGDiv = styled.div`
  grid-area: up;
  background-color: ${color_blue};
  box-shadow: 0px 5px ${color_blue};
  @media screen and (max-width: ${max_width_val}) {
    background-color: ${color_blue};
    box-shadow: 0px 0px ${color_blue};
  }
`;
const StyledUpLBGDiv = styled.div`
  grid-area: upL;
  display:flex;
  background-color: ${color_blue};
  @media screen and (max-width: ${max_width_val}) {
    background-color: ${color_blue};
  }
`;
const StyledUpRBGDiv = styled.div`
  grid-area: upR;
  display:flex;
  background-color: ${color_blue};
  @media screen and (max-width: ${max_width_val}) {
    background-color: ${color_blue};
  }
`;

const WhiteLineDiv = styled.div`
  background-color: ${color_white};
  height: 18px;
  align-self: flex-end;
  width:100%;
  box-shadow: 0px 5px ${color_white};
  @media screen and (max-width: ${max_width_val}) {
    height: 0px;
    box-shadow: 0px 0px ${color_white};
  }
`;

const QRCode = styled.div`
  grid-area: qrcode;
  display: flex;
  height: min-content;
  justify-content: center;
  border-top: 1px solid ${color_gray_shadow};
  border-left: 1px solid ${color_gray_shadow};
  border-right: 1px solid ${color_gray_shadow};
  box-shadow: 8px 8px ${color_gray_shadow};
  background-color: ${color_blue};
  @media screen and (max-width: ${max_width_val}) {
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    box-shadow: 0px 0px;
  }
  & > img {
    align-self: end;
    width: 422px;
    @media screen and (max-width: ${max_width_val}) {
      width: 100%;
    }
  }
`;

const InfoDiv = styled.div`
  grid-area: info;
  display:flex;
  justify-content: center;
  align-content: flex-start;
  border-bottom: 1px solid ${color_gray_shadow};
  border-left: 1px solid ${color_gray_shadow};
  border-right: 1px solid ${color_gray_shadow};
  box-shadow: 8px 5px ${color_gray_shadow};
  background-color: ${color_white};
  height: min-content;
  @media screen and (max-width: ${max_width_val}) {
    border-bottom: 0px;
    border-left: 0px;
    border-right: 0px;
    box-shadow: 0px 0px;
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
          color: ${color_gray_letter};
          font-family: goudosi;
          font-size: 2em;
          @media screen and (max-width: ${max_width_val}) {
            font-size: 7.7vw;
          }
          font-style: italic;
          vertical-align: middle;
          & > a {
            color: ${color_gray_letter};
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
        <QRCode>
          <img src={qr_svg} alt='qr code with logo' className='qrcode'/>
        </QRCode>
        <InfoDiv>
          <ul>
            <li>
              <div>
                <a href="https://api.whatsapp.com/send?phone=5521967099963" target="_blank" rel="noopener noreferrer"><img src={phone_svg} alt='phone icon' className='phone'/></a>
                <p><a href="https://api.whatsapp.com/send?phone=5521967099963" target="_blank" rel="noopener noreferrer">(21) 96709 9963</a></p>
              </div>
            </li>
            <li>
              <div>
                <a href="mailto:studio@mkashima.com" target="_blank" rel="noopener noreferrer"><img src={mail_svg} alt='email icon' className='email' /></a>
                <p><a href="mailto:studio@mkashima.com" target="_blank" rel="noopener noreferrer">studio@mkashima.com</a></p>
              </div>
            </li>
            <li>
              <div>
                <a href="https://www.instagram.com/mkashima/" target="_blank" rel="noopener noreferrer"><img src={insta_svg} alt='instagram icon' className='insta'/></a>
                <p><a href="https://www.instagram.com/mkashima/" target="_blank" rel="noopener noreferrer">@mkashima</a></p>
              </div>
            </li>
            <li>
              <div>
                <a href="http://www.mkashima.com" target="_blank" rel="noopener noreferrer"><img src={link_svg} alt='weblink icon' className='weblink'/></a>
                <p><a href="http://www.mkashima.com" target="_blank" rel="noopener noreferrer">www.mkashima.com</a></p>
              </div>
            </li>
            <li><div></div></li>
            <li><div></div></li>
            <li><div></div></li>
          </ul>
        </InfoDiv>
      </StyledDiv>
    )
  }
}

export default App;

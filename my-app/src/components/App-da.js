import React, { Component } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// SVGs
import logo_svg from './svg/logo.svg';
import whats_icon_svg from './svg/whatsapp-icon.svg';
import insta_icon_svg from './svg/instagram-icon.svg';
import fb_icon_svg from './svg/facebook-icon.svg';
import email_icon_svg from './svg/email-icon.svg';
import background_fouet_svg from './svg/fouet-background.svg';
import moldura_svg from './svg/moldura.svg';
import fouets_svg from './svg/fouets-outline.svg';

// Fonts
import GlobalFonts from './fonts/fonts';

const text_color = '#7F705A';
const background_color = '#F7F7ED';
const highlight_color = '#6ABB97';
const highlight_color_2 = '#C5E4E7';

const mainMessage = 'Site em construção';
const secondMessage_1 = 'Enquanto isso voce pode dar uma';
const secondMessage_2 = 'olhada no nosso menu de doces!';
const titleMessage = 'Produtos:';
const subtitleMessage = 'Tamanhos Disponíveis';
const memoMessage = '(diâmetro)';
const thirdMessage_1 = 'Para encomendas, sugestões ou dúvidas';
const thirdMessage_2_1 = 'mande uma '
const thirdMessage_2_2 = 'mensagem';
const thirdMessage_2_3 = ' pra gente!';
const footerMessage_l1 = '• doces artesanais •';
const footerMessage_l2 = 'sabor e simplicidade com qualidade';
const nameMessage = 'Sandra Rodrigues';
const oldEmailMessage = 'doceamado@yahoo.com.br';
const emailMessage = 'contato@doceamado.com';
const phoneMessage = '(021) 92001 0912';
const produtos = [
  {
    id: 1,
    nome: "Torta Brownie de doce de leite",
    tamanho: "20cm ou 25cm"
  },
  {
    id: 2,
    nome: "Torta Doce Amado de pão de mel",
    tamanho: "23cm"
  },
  {
    id: 3,
    nome: "Bolo de ameixa com glacê ao rum",
    tamanho: "25cm"
  },
  {
    id: 4,
    nome: "Torta Banoffee",
    tamanho: "25cm"
  },
  {
    id: 5,
    nome: "Torta Marta Rocha",
    tamanho: "25cm"
  },
  {
    id: 6,
    nome: "Bolo Três Leites",
    tamanho: "25cm"
  },
  {
    id: 7,
    nome: "Bolo Chocolate Intenso",
    tamanho: "25cm"
  },
  {
    id: 8,
    nome: "Bolo de cenoura",
    tamanho: "25cm"
  },
];
const buttonMessage = 'mandar mensagem';
const iconSize = 40;
const iconRadius = iconSize/2;
const circleCoords = iconRadius.toString()+','+iconRadius.toString()+','+iconRadius.toString();
const logoMinSize = 120;
const pictureFrameDistance = 15;

// STYLES
  const GlobalStyle = createGlobalStyle`
    html {
      width: 100%;
      height: 100%;
      scrollbar-width: none;
      margin: 0px; 
      padding: 0px;    
      background-color: ${background_color};
    }

    body {   
      background-color: ${background_color};
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

    p {
      color: ${text_color};
    }

    ul {
      list-style: none;    
      color: ${text_color};
    }

    * {    
      position: relative;
      margin: 0;
      padding: 0;
    }

    .outline {
      position: absolute;
      -webkit-text-stroke: 3px ${background_color};
      user-select: none;
    }
  `;
  /* Grid */
  const StyledDiv = styled.div`
    border: 1px solid ${background_color};
    box-sizing: border-box;
    background-color: ${background_color};
    background-repeat: no-repeat;
    @media (orientation: landscape) {
      background-size: 95vh;
    }
    @media (orientation: portrait) {
      background-size: 95vw;
    }
    background-position: bottom right;
    background-image: url("${background_fouet_svg}");
    background-attachment: fixed;
    margin: 0;
    width: 100%;
    height: 100%;
    min-width: 100vw;
    min-height: 100vh;
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    grid-template-areas: 
      ' header '
      ' main '
      ' footer ';
  `;
  /* -1- Header */
  const StyledHeader = styled.header`
    grid-area: header;
    display: grid;
    grid-template-areas:
      'logo icons';    
    grid-template-columns: min-content 1fr;
  `;
  const StyledLogo = styled.div`
    grid-area: logo;
    justify-self: start;
    align-self: start;
    & > img {
      width:100%;
      min-width: ${logoMinSize}px;
      margin: 10px;
      @media screen and (max-width: 400px) {
        min-width: ${logoMinSize-20}px;
        margin: 5px;
      }
    }
  `;
  const StyledIcons = styled.div`
    grid-area: icons;
    & > ul {
      float: right;
      align-self: end;
      & > li {
        display: inline;
        float: right;
        & > img {
          width: ${iconSize}px;
          margin: 10px 10px 10px 0px;
          @media screen and (max-width: 350px) {
            margin: 5px 5px 5px 0px;
          }
        }
        }
      }
    }
  `;
  /* -2- Main */
  const StyledMain = styled.main`
    grid-area: main;
    display: grid;
    grid-template-rows: min-content min-content min-content min-content 1fr;
    grid-template-areas:
      'main-message'
      'second-message'
      'sweets-menu'
      'third-message'
      'button';
    height: 100%;
  `;
  const MainMessage = styled.div`
    display: grid;
    grid-area: main-message;
    justify-self: center;
    align-self: center;
    margin: 0px 15px;
    grid-template-areas:
      'left center right';
    @media screen and (max-width: 480px) {  
      grid-template-columns:
        1fr min-content 1fr;
    }  
    @media screen and (max-width: 360px) {  
      margin: 0px 5px 15px 5px;
    }
    & > img { 
      width: 4em;
      align-self: center;
    }
    & > p {
      grid-area: center;
      margin: 5px 10px 5px 10px;
      @media screen and (max-width: 360px) {  
        margin: 0px;
      }
      font-family: AndadaSC;
      text-align: center;
      align-self: center;
      font-size: 2em;
    }
    & > .left {
      grid-area: left;
      justify-self: end;
    }
    & > ;right {
      grid-area: right;
      justify-self: start;
    }
  `;
  const StyledSecondMessage = styled.div`
    grid-area: second-message;
    justify-self: center;
    text-align: center;
    align-self: center;
    font-family: Andada;
    font-size: 1.5em;
    margin: 30px 10px;
    & > p {
      & > .line-break {
        display: none;
      }
    }
    @media screen and (max-width: 750px) {
      & > p {
        white-space: normal;
        text-align: center;
        & .space {
          display: none;
        }
        & .line-break {
          display: inline;
        }
      }
    }
    @media screen and (max-width: 400px) {
      font-size: 1.2em;
    }
  `;
  /* -2- -1- Sweets Menu */
  const StyledSweetsMenuContainer = styled.div`
    grid-area: sweets-menu;
    display: grid;
    grid-template-areas:
      'title title'
      'blank subtitle'
      'blank memo'
      'menu menu';
    width: 20%;
    @media screen and (max-width: 1850px) {
      width: 30%;
    }
    @media screen and (max-width: 1350px) {
      width: 40%;
    }
    @media screen and (max-width: 930px) {
      width: 50%;
    }
    @media screen and (max-width: 750px) {
      width: 60%;
    }
    @media screen and (max-width: 610px) {
      width: 70%;
    }
    @media screen and (max-width: 500px) {
      width: 75%;
    }  
    @media screen and (max-width: 450px) {
      width: 80%;
    }  
    @media screen and (max-width: 420px) {
      width: 90%;
    }
    justify-self: center;
    align-self: center;
    margin: 20px 0px;
  `;
  // TODO descobrir como fazer essa moldura emoldurar o div que contém ela
  const StyledMoldura = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    & > img {
      position: absolute;
      width: 50px;
    }
    & > .x0y0 {
      left: -${pictureFrameDistance}px;
      top: -${pictureFrameDistance}px;
    }
    & > .x1y0 {
      transform: scaleX(-1);
      right: -${pictureFrameDistance}px;
      top: -${pictureFrameDistance}px;
    }
    & > .x0y1 {
      transform: scaleY(-1);    
      left: -${pictureFrameDistance}px;
      bottom: -${pictureFrameDistance}px;
    }
    & > .x1y1 {
      transform: scaleX(-1) scaleY(-1);
      right: -${pictureFrameDistance}px;
      bottom: -${pictureFrameDistance}px;
    }
  `;
  const StyledTitle = styled.div`
    font-family: GreatVibes;
    grid-area: title;
    justify-self: center;
    align-self: center;
    font-size: 2em;
  `;
  const StyledSubtitle = styled.div`
    font-family: Andada;
    grid-area: subtitle;
    justify-self: end;
    align-self: center;
    font-weight: bold;
    @media screen and (max-width: 400px) {
      font-size: 0.8em;
    }
  `;
  const StyledMemo = styled.div`
    font-family: Andada;
    grid-area: memo;
    justify-self: end;
    align-self: center;
    font-size: 0.7em;
    font-weight: bold;
    @media screen and (max-width: 400px) {
      font-size: 0.6em;
    }
  `;
  const StyledSweetsMenu = styled.ul`
    font-family: Andada;
    grid-area: menu;
    & > li {    
      display: grid;
      grid-template-areas:
      'sweet size';
      margin: 3px 0px 0px 0px;
      & > .nome-produto {
        grid-area: sweet;
        justify-self: start;
        align-self: center;
      }
      & > .tamanho-produto {
        grid-area: size;
        justify-self: end;
        align-self: center;
        white-space: nowrap;
      }
    }
    @media screen and (max-width: 400px) {
      font-size: 0.8em;
    }
  `;
  /* -2- -2- Third Message */
  const StyledLinkOutline = styled.span`
    -webkit-text-stroke: ${props => props.active ? 4 : 6}px ${props => props.active ? highlight_color_2 : background_color};
    font-weight: bold;
  `;
  const StyledA = styled.a`
    color: ${text_color};
    text-decoration: none;
    font-weight: bold;
    :active {
      color: ${background_color};
    }
  `;
  const StyledThirdMessage = styled.div`
    grid-area: third-message;
    text-align: center;
    justify-self: center;
    align-self: start;
    font-family: Andada;
    font-size: 1.5em;
    margin: 30px 10px 15px;
    & > p {
      & > .line-break {
        display: none;
      }
    }
    @media screen and (max-width: 970px) {
      & > p {
        white-space: normal;
        text-align: center;
        & > .space {
          display: none;
        }
        & > .line-break {
          display: inline;
        }
      }
    }
    @media screen and (max-width: 460px) {
      & > p {
        & > .space {
          display: inline;
        }
        & > .line-break {
          display: none;
        }
      }
      @media screen and (max-width: 400px) {
        font-size: 1.2em;
      }
    }
  `;
  const StyledButton = styled.a`
    grid-area: button;
    justify-self: center;
    align-self: start;
    font-family: AndadaSC;
    font-size: 1.2em;
    color: ${text_color};
    background-color: ${background_color};
    padding: 0px 5px 1px 5px;
    margin: 0px 0px 15px 0px;
    border: 4px solid ${highlight_color};
    font-weight: bold;
    border-radius: 7px;
    text-decoration: none;
    :hover {
      background-color: ${highlight_color};
      text-shadow: 0px -1px 0px ${background_color}, 0px 1px 0px ${background_color}, 1px 0px 0px ${background_color}, -1px 0px 0px ${background_color}, 1px 1px 0px ${background_color}, 1px -1px 0px ${background_color}, -1px 1px 0px ${background_color}, -1px -1px 0px ${background_color};
    }
    :active {
      color: ${background_color};
      text-shadow: none;
    }
  `;
  /* -3- Footer */
  const StyledFooter = styled.footer`
    grid-area: footer;
    display: grid;
    grid-template-areas: 
      'left blank right'
      'left c-top right'
      'left c-bot right';    
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr min-content min-content;
    & > .center-top {
      grid-area: c-top;
      justify-self: center;
      align-self: end;
      font-family: AndadaSC;
      font-size: 0.8em;
    }
    & > .center-bot {
      grid-area: c-bot;
      justify-self: center;
      align-self: end;
      font-family: AndadaSC;
      font-size: 0.8em;
    }
    & > .right {
      margin: 0px 10px 10px 0px;
      grid-area: right;
      justify-self: right;
      align-self: end;
      display: grid;
      grid-template-areas:
        'signature'
        'email'
        'phone';
      & > * {
        white-space: nowrap;  
        justify-self: center;
        align-self: end;
      }
      & > .signature {
        grid-area: signature;
        font-family: GreatVibes;
        font-size: 1.5em;
      }
      & > .email {
        grid-area: email;
        font-family: AndadaSC;
        font-size: 0.8em;
      }
      & > .phone {
        grid-area: phone;
        font-family: AndadaSC;
        font-size: 0.8em;
      }
    }
    @media screen and (max-width: 620px) {
      grid-template-areas: 
        'right right right'
        'c-top c-top c-top'
        'c-bot c-bot c-bot';
      & > .right {
        margin: 10px 0px;
        justify-self: center;
        align-self: center;
      }
    }
  `;
// end of STYLES

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: produtos,
      m3l_active: false /* third message link */
    };
  }
  render () {
    return (
      <StyledDiv className="App">
        <GlobalFonts />
        <GlobalStyle />
        <StyledHeader>
          <StyledLogo>
            <img src={logo_svg} className="App-logo" alt="logo" />
          </StyledLogo>
          <StyledIcons>
            <ul>
              <li key='email'>
                <img src={email_icon_svg} className="Email-icon" alt="símbolo de e-mail" useMap='#email'/>
                <map name='email'>
                  <area 
                    shape='circle' 
                    coords={circleCoords} 
                    href='mailto:doceamado@yahoo.com.br' 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    alt='área clicável do link para envio de email'
                  />
                </map>
              </li>
              <li key='fb'>
                <img src={fb_icon_svg} className="Facebook-icon" alt="icone do Facebook" useMap='#fb'/>
                <map name='fb'>
                  <area 
                    shape='circle' coords={circleCoords} 
                    href='https://www.facebook.com/doceamadorj/' 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    alt='área clicável do link para o Facebook'
                  />
                </map>
              </li>
              <li key='insta'>
                <img src={insta_icon_svg} className="Instagram-icon" alt="icone do Instagram" useMap='#insta'/>
                <map name='insta'>
                  <area 
                    shape='circle' 
                    coords={circleCoords} 
                    href='https://www.instagram.com/doceamadorj/' 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    alt='área clicável do link para o Instagram'
                  />
                </map>
              </li>
              <li key='whats'>
                <img src={whats_icon_svg} className="Whatsapp-icon" alt="icone do Whatsapp" useMap='#whats'/>
                <map name='whats'>
                  <area 
                    shape='circle' 
                    coords={circleCoords} 
                    href='https://api.whatsapp.com/send?phone=5521920010912' 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    alt='área clicável do link para o Whatsapp'
                  />
                </map>
              </li>
            </ul>
          </StyledIcons>
        </StyledHeader>
        <StyledMain>
          <MainMessage>
            <img src={fouets_svg} className="left" alt="icone de fouets cruzados"/>
            <p className="outline">{mainMessage}</p><p className="front">{mainMessage}</p>
            <img src={fouets_svg} className="right" alt="icone de fouets cruzados"/>
            </MainMessage>
          <StyledSecondMessage>
            <p className="outline">
              {secondMessage_1}
              <span className='space'> </span>
              <span className='line-break'><br /></span>
              {secondMessage_2}
            </p>
            <p className="front">
              {secondMessage_1}
              <span className='space'> </span>
              <span className='line-break'><br /></span>
              {secondMessage_2}
            </p>
          </StyledSecondMessage>
          <StyledSweetsMenuContainer>
            <StyledMoldura>
              <img src={moldura_svg} className="x0y0" alt="moldura canto superior esquerdo" />
              <img src={moldura_svg} className="x1y0" alt="moldura canto superior direito" />
              <img src={moldura_svg} className="x0y1" alt="moldura canto inferior esquerdo" />
              <img src={moldura_svg} className="x1y1" alt="moldura canto inferior direito" />
            </StyledMoldura>
            <StyledTitle><p className="outline">{titleMessage}</p><p className="front">{titleMessage}</p></StyledTitle>
            <StyledSubtitle><p className="outline">{subtitleMessage}</p><p className="front">{subtitleMessage}</p></StyledSubtitle>
            <StyledMemo><p className="outline">{memoMessage}</p><p className="front">{memoMessage}</p></StyledMemo>
            <StyledSweetsMenu>
              {this.state.value.map(produto => {
                return (
                  <li key={produto.id}>
                    <div className = 'nome-produto'><p className="outline">{produto.nome}</p><p className="front">{produto.nome}</p></div>
                    <div className = 'tamanho-produto'><p className="outline">{produto.tamanho}</p><p className="front">{produto.tamanho}</p></div>
                  </li>
                )
              })}
            </StyledSweetsMenu>
          </StyledSweetsMenuContainer>
          <StyledThirdMessage>
            <p className="outline">
              {thirdMessage_1}
              <span className='space'> </span>
              <span className='line-break'><br /></span>
              {thirdMessage_2_1}<StyledLinkOutline active={this.state.m3l_active}>{thirdMessage_2_2}</StyledLinkOutline>{thirdMessage_2_3}
            </p>
            <p className="front">{thirdMessage_1}
              <span className='space'> </span>
              <span className='line-break'><br /></span>
              {thirdMessage_2_1}
              <StyledA href='https://api.whatsapp.com/send?phone=5521920010912' target="_blank" rel="noopener noreferrer" active={this.state.m3l_active}>
                <span onMouseEnter={() => {this.setState({m3l_active: true})}} onMouseLeave={() => {this.setState({m3l_active: false})}}>
                  {thirdMessage_2_2}
                </span>
              </StyledA>
              {thirdMessage_2_3}
            </p>
          </StyledThirdMessage>
          <StyledButton  href='https://api.whatsapp.com/send?phone=5521920010912' target="_blank" rel="noopener noreferrer">{buttonMessage}</StyledButton>
        </StyledMain>
        <StyledFooter>
          <div className='center-top'><p className="outline">{footerMessage_l1}</p><p className="front">{footerMessage_l1}</p></div>
          <div className='center-bot'><p className="outline">{footerMessage_l2}</p><p className="front">{footerMessage_l2}</p></div>
          <div className='right'>
            <div className='signature'><p className="outline">{nameMessage}</p><p className="front">{nameMessage}</p></div>
            <div className='email'><p className="outline">{emailMessage}</p><p className="front">{emailMessage}</p></div>
            <div className='phone'><p className="outline">{phoneMessage}</p><p className="front">{phoneMessage}</p></div>
          </div>
        </StyledFooter>    
      </StyledDiv>
    );
  }
}

export default App;
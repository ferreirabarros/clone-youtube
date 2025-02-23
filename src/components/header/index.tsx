import { useContext } from 'react';
import HamburgerIcon from '../../assets/menu-hamburger.png';
import MicIcon from '../../assets/microfone-gravador.png';
import SearchIcon from '../../assets/search.png';
import NotificationIcon from '../../assets/sino.png';
import VideoIcon from '../../assets/video.png';
import Logo from '../../assets/YouTube-Logo.png';
import { MenuContext } from '../../contexts/menuContext';
import { ButtonContainer, ButtonIcon, Container, HeaderButton, LogoContainer, SaerchButton, SearchContainer, SearchInput, SearchInputContainer } from "./style";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';


function Header({}){

  const {login} = useContext(UserContext);

  const navigate = useNavigate();
  const {openMenu, setOpenMenu} = useContext(MenuContext);

  return ( 
      <Container>

        <LogoContainer>
          <ButtonContainer onClick={()=> setOpenMenu(!openMenu)} margin='0 10px 0 0'>
            <ButtonIcon alt="" src={HamburgerIcon}/>
          </ButtonContainer>
          <img 
            style={{
              cursor: 'pointer', 
              width: '80px'
            }}
            alt="" 
            src={Logo}
          />
        </LogoContainer>

        <SearchContainer>
          <SearchInputContainer>
            <SearchInput placeholder="Pesquisar"/>
          </SearchInputContainer>
          <SaerchButton>
            <ButtonIcon alt="" src={SearchIcon}/>
          </SaerchButton>
          <ButtonContainer margin='0 0 0 10px'>
            <ButtonIcon alt="" src={MicIcon}/>
          </ButtonContainer>
        </SearchContainer>
        
        <HeaderButton>
          <ButtonContainer margin='0 10px 0 10px'>
            <ButtonIcon alt="" src={VideoIcon}/>
          </ButtonContainer>  
          <ButtonContainer margin='0 10px 0 10px'>
            <ButtonIcon alt="" src={NotificationIcon}/>
          </ButtonContainer>  
          {login?
            <ButtonContainer margin='0 10px 0 10px'>
            F
            </ButtonContainer>  
          :
          <button onClick={()=> navigate('/login')}>Fazer login</button>
          }
        </HeaderButton>

      </Container>
  )
}

export default Header;
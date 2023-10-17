import { RxCross2 } from 'react-icons/rx';
import { BurgerButton } from '../Button/Button';
import { MenuContent, MenuHeader, MenuWrapp, StyledLink } from './MobileMenu.styled';



const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <MenuWrapp className={isOpen ? ['menu', 'active'].join(' ') : 'menu'}>
      <MenuHeader>
        <BurgerButton theme className="closeBtn" onClick={onClose}>
          <RxCross2 />
        </BurgerButton>
      </MenuHeader>
      <MenuContent>
        <StyledLink
          to="/"
          onClick={onClose}>
        Speiseplan
        </StyledLink>
        <StyledLink 
         to="/catalogue"
         onClick={onClose}>
        Kalkulation
        </StyledLink>
        <StyledLink  
        to="/favorites"
        onClick={onClose}>
        Einkauf
        </StyledLink>
        <StyledLink  
        to="/favorites"
        onClick={onClose}>
        Nährwerte
        </StyledLink>
        </MenuContent>
    </MenuWrapp>
  );
};

export default MobileMenu;

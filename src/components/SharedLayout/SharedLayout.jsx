import { Suspense, useState } from "react";
import { Link, Outlet} from 'react-router-dom';
import { ContactsWrapp, MainHeader, NavigationWrapp} from "./SharedLayout.styled";
import { logoGastroSmart } from "images/icons";
import { Navigation } from "components/Navigation/Navigation";
import { AppBar } from "components/AppBar/AppBar";
import { FlatButton } from "components/Button/Button";
import { RxHamburgerMenu } from 'react-icons/rx';
import { MainFooter } from "components/MainFooter/MainFooter";
import MobileMenu from "components/MobileMenu/MobileMenu";





export const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
};

    return (
   <>
        <MainHeader 
        className="main-header"
        >
          <FlatButton 
         className='mobile-menu'
         onClick={toggleMenu}>
         <div>
           <RxHamburgerMenu /> Menu
         </div>
        </FlatButton>
          
          <NavigationWrapp className="main-logo">
            {logoGastroSmart}
            
                    <Navigation/>
          </NavigationWrapp>
        <ContactsWrapp>
          <AppBar/>
          <Link
           to="/login"
          className ="loginBtn">Login</Link>
        </ContactsWrapp>
        </MainHeader>

          <Suspense >
            <Outlet/>
          </Suspense>
        
          <MainFooter className="main-footer">
          </MainFooter>
        
        <MobileMenu isOpen={isOpen} onClose={toggleMenu} />
      </>
    )}
    

import { Suspense } from "react";
import { Outlet} from 'react-router-dom';
import { ContactsWrapp, MainFooter, MainHeader, NavigationWrapp} from "./SharedLayout.styled";
import { logoGastroSmart } from "images/icons";
import { Navigation } from "components/Navigation/Navigation";
import { AppBar } from "components/AppBar/AppBar";
import { FlatButton } from "components/Button/Button";




export const SharedLayout = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
// };
    return (
      <>
        <MainHeader 
        className="main-header"
        >
          <NavigationWrapp>
            {logoGastroSmart}
            
                    <Navigation/>
          </NavigationWrapp>
        <ContactsWrapp>
          <AppBar/>
          <FlatButton
          className ="loginBtn">Login</FlatButton>
        </ContactsWrapp>
        {/* <FlatButton 
         className='mobile-menu'
         onClick={toggleMenu}>
         <RxHamburgerMenu />
        </FlatButton> */}
        </MainHeader>

          <Suspense >
            <Outlet/>
          </Suspense>
        
        <MainFooter className="main-footer">
        2023

          </MainFooter>
        {/* <MobileMenu isOpen={isOpen} onClose={toggleMenu} /> */}
      </>
    )}


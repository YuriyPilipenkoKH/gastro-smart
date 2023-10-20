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
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import  logOut  from '../../redux/auth/authOperations';




export const SharedLayout = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn} = useAuth()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
};

const quit =() => {
  setIsOpen(!isOpen)
  dispatch(logOut())
}


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

          {!isLoggedIn 
          ?  <Link
           to="/login"
          className ="loginBtn">Login</Link>
          :  <FlatButton 
            onClick={quit}
           className ="logoutBtn">Logout</FlatButton>}

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
    
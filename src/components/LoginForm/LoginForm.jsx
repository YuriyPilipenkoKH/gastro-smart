import { FormBG, FormContainer, FormInput, FormLabel, RegLink, StyledForm } from "./LoginForm.styled"
import bgImage from '../../images/slider/meat.jpg'
import { Button, FlatButton } from "components/Button/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import { useDispatch } from "react-redux"
import logIn  from '../../redux/auth/auth-operations';


const LoginForm = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
                          
                switch (name) {
              case 'email':
                return setEmail(value);
              case 'password':
                return setPassword(value);
              default:
                return;
            }
          };
        
          const handleSubmit = e => {
            e.preventDefault();
            dispatch(logIn({ email, password }));
            setEmail('');
            setPassword('');
          };
        

  return (
    <FormContainer>
        <StyledForm onSubmit={handleSubmit}  autoComplete="on">
            <h2>Login</h2>
            <FormLabel > Name
                <FormInput/>
            </FormLabel>
            <FormLabel > Password
                <FormInput
                            type={show ? 'text' : 'password'}
                            name="password"
                            value={password}
                            onChange={handleChange}/>
                <FlatButton 
            type='button' 
            className='showBtn'
            onClick={() => setShow(!show)}>
              {show ? <FaEyeSlash /> : <FaEye />}
              </FlatButton>
            </FormLabel>
        <Button 
        type='submit'
        className='LogBtn'>Submit</Button>
        <RegLink>Don't have an account?
             <Link  to="/register">Register</Link>
        </RegLink>

        </StyledForm>
        <FormBG photo={bgImage}></FormBG>
    </FormContainer>
  )
}

export default LoginForm
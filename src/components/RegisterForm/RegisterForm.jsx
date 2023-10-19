import { Button, FlatButton } from "components/Button/Button";
import { FormBG, FormContainer, FormInput, FormLabel, RegLink, StyledForm } from "components/LoginForm/LoginForm.styled";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import bgImage from '../../images/slider/cereal.jpg'
import  register  from '../../redux/auth/authOperations';

const RegisterForm = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
                          
                switch (name) {
               case 'name':
             return setName(value);      
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
            dispatch(register({ name, email, password }));
            setName('');
            setEmail('');
            setPassword('');
          };
        

  return (
    <FormContainer>
        <StyledForm onSubmit={handleSubmit}  autoComplete="on">
            <h2>Create Account</h2>
            <FormLabel type="text"> Name
                <FormInput 
                           type="text"
                           name="name"
                            value={name} 
                            onChange={handleChange}/>
            </FormLabel>
            <FormLabel > Email
                <FormInput
                     type="email"
                     name="email"
                     value={email}
                     onChange={handleChange}/>
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
        <RegLink>Already have an account?
             <Link  to="/login">Login</Link>
        </RegLink>

        </StyledForm>
        <FormBG photo={bgImage}></FormBG>
    </FormContainer>
  )
}



export default RegisterForm
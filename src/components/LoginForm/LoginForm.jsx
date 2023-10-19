import { ErrorWrap, FormBG, FormContainer, FormInput, FormLabel, RegLink, StyledForm } from "./LoginForm.styled"
import bgImage from '../../images/slider/meat.jpg'
import { Button, FlatButton } from "components/Button/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import { useDispatch } from "react-redux"
import logIn  from '../../redux/auth/authOperations';
import { useForm } from "react-hook-form"


const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
                          
                switch (name) {
                    case 'name':
                return setName(value);   
              case 'password':
                return setPassword(value);
              default:
                return;
            }
          };
        
          const onSubmit = e => {
            // e.preventDefault();
            console.log(name, password)
            // dispatch(logIn({ name, password }));
            setName('');
            setPassword('');
          };
        

  return (
    <FormContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}  autoComplete="on">
            <h2>Login</h2>
            <FormLabel > Name
                <FormInput 
            {...register('name', {
                required:'Name is required'
            })}   
         
           type="text"
           name="name"
            value={name} 
            onChange={handleChange}
            errors={errors.name}
            />
            {errors.name && (
                <ErrorWrap>{errors.name.message}</ErrorWrap>
            )}
            </FormLabel>

            <FormLabel > Password
                <FormInput
                            type={show ? 'text' : 'password'}
                            name="password"
                            value={password}
                            onChange={handleChange}/>


                            {/* border: errors.email
                                ? '1px solid var(--red)'
                                : isEmailValid && !errors.email
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)', */}
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
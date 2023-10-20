import { ErrorWrap, FormBG, FormContainer, FormInput, FormLabel, RegLink, StyledForm } from "./LoginForm.styled"
import bgImage from '../../images/slider/meat.jpg'
import { Button, FlatButton } from "components/Button/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import {FaEye, FaEyeSlash} from 'react-icons/fa';
// import { useDispatch } from "react-redux"
// import logIn  from '../../redux/auth/authOperations';
import { useForm } from "react-hook-form"


const LoginForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: '',
            password: '',
        },
    })
    const [show, setShow] = useState(false);
    // const dispatch = useDispatch();
    const [name, setName] = useState('');
    // const [isNameValid, setIsNameValid] = useState(false);
    const [password, setPassword] = useState('');
    console.log(watch('name'))

    const onChangeName  = (e) => {
        // const isValid = /^[a-zA-Z]{2,16}$/.test(
        //             e.target.value
        //         );
                // setIsNameValid(isValid);
                setName(e.target.value);
                // if (isValid) {
                //     errors.name = undefined;
                // }                
    }
    const onChangePassword  = (e) => {
        setPassword(e.target.value);
    }
        
          const onSubmit = e => {
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
                required:'Name is required',
                minLength:{
                    value: 4,
                    message: 'Minimum length is 4'
                },
                pattern: {
                    value: /^[a-zA-Z]{2,16}$/,
                    message: 'Name should contain only letters'
                }
            })}   
         
           type="text"
           name="name"
            value={name} 
            onChange={onChangeName}
            errors={errors.name}
            />
            {errors?.name && (
                <ErrorWrap>{errors.name.message}</ErrorWrap>
            )}
            </FormLabel>

            <FormLabel > Password
                <FormInput
                            type={show ? 'text' : 'password'}
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            />

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
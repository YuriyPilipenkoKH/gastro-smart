import { ErrorWrap, FormBG, FormContainer, FormInput, FormLabel, RegLink, StyledForm } from "./LoginForm.styled"
import bgImage from '../../images/slider/meat.jpg'
import { Button, FlatButton } from "components/Button/Button"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import {FaEye, FaEyeSlash} from 'react-icons/fa';
// import { useDispatch } from "react-redux"
// import logIn  from '../../redux/auth/authOperations';
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"


const LoginForm = () => {
    const [show, setShow] = useState(false);
    const {
        register,
        handleSubmit,
        control,
        formState,
        reset,
    } = useForm({
        defaultValues: {
            name: '',
            password: '',
        },
        mode:'all',
    })
    const {
        errors,
        isDirty,
        isValid ,
        isSubmitSuccessful,
    } = formState

    useEffect(() => {
        if(isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])
        
    const onSubmit = data => {
            console.log(data)
            // dispatch(logIn({ name, password }));

    };

    const onError = errors => {
        console.log('Form errors', errors)
    };
        
  return (
    <FormContainer>
        <StyledForm 
        onSubmit={handleSubmit(onSubmit, onError)}  noValidate>
            <h2>Login</h2>
            <FormLabel > Name
                <FormInput 
            {...register('name', {
                required:'Name is required',
                minLength:{
                    value: 2,
                    message: 'Minimum length is 2'
                },
                pattern: {
                    value: /^[a-zA-Z0-9]{2,20}$/,
                    message: 'Name is not valid'
                },
                validate: (fieldValue) => {
                    return (
                        fieldValue.toLowerCase() !== 'jonny' || 'Enter a different name'
                    )
                }
            }) }   
         
           type="text"
            errors={errors.name}
            />
            {errors?.name && (
                <ErrorWrap>{errors.name.message}</ErrorWrap>
            )}
            </FormLabel>

            <FormLabel > Password
                <FormInput
                {...register('password', {
                    required:'Password is required',
                    minLength:{
                        value: 6,
                        message: 'Minimum length is 6'
                    },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/,
                        message: 'Include capital letters and numbers'
                    },
                    validate: (fieldValue) => {
                        return (
                            fieldValue.toLowerCase() !== 'qwe123' ||
                             'Enter a different password'
                        )
                    }
                }) }  
                            type={show ? 'text' : 'password'}
                            errors={errors.password}
                            />
                {errors?.password && (
                <ErrorWrap>{errors.password.message}</ErrorWrap>
            )}

                <FlatButton 
            type='button' 
            className='showBtn'
            onClick={() => setShow(!show)}>
              {show ? <FaEyeSlash /> : <FaEye />}
              </FlatButton>
            </FormLabel>
        <Button 
        type='submit'
        className='LogBtn'
        disabled={!isDirty || !isValid } 
        >Submit</Button>
        <RegLink>Don't have an account?
             <Link  to="/register">Register</Link>
        </RegLink>

        </StyledForm>
        <DevTool control={control}/>
        <FormBG photo={bgImage}></FormBG>
    </FormContainer>
  )
}

export default LoginForm
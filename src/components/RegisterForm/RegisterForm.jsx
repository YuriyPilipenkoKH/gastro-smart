import { Button, FlatButton } from "components/Button/Button";
import { ErrorWrap, FormBG, FormContainer, FormInput, FormLabel, RegLink, StyledForm } from "components/LoginForm/LoginForm.styled";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import bgImage from '../../images/slider/cereal.jpg'
// import  register  from '../../redux/auth/authOperations';
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"

const RegisterForm = () => {
    const [show, setShow] = useState(false);
    const {
        register, 
        control,
        handleSubmit,
        formState,
        reset,
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: ''
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
        console.log('Form summited',data)
        
    };

  return (
    <FormContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2>Create Account</h2>
            <FormLabel type="text"> Name
                <FormInput 
                 {...register('name',
                 { 
                 required: {
                     value: true,
                     message: "Name is requred",
                 },
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
                 })}
                 type="text"
                 errors={errors.name}
                />
                {errors?.name && (
                <ErrorWrap>{errors.name.message}</ErrorWrap>
                )}
            </FormLabel>
            <FormLabel > Email
                <FormInput
                {...register('email',{
                    required: {
                        value: true,
                        message: "Email is requred",
                    },
                    pattern: {
                        value:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Email is not valid',
                    },
                    validate: {
                        notAdmin: (fieldValue) => {
                            return (
                                !fieldValue.startsWith('admin') || 
                                'Enter a different email address'
                            )
                        },
                        notBlackListed: (fieldValue) => {
                            return (
                                !fieldValue.endsWith('.ru') ||
                                'This domain is not supported'
                            )
                        },
                    }
                })}

                type="email"
                errors={errors.email}/>
                {errors?.email && (
                <ErrorWrap>{errors.email.message}</ErrorWrap>
                )}
            </FormLabel>
            <FormLabel > Password
                <FormInput
                {...register('password',{
                    required: "Password is requred" ,
                    // disabled: watch('email') === '',
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
                            fieldValue.toLowerCase() !== 'qwe123' || 'Enter a different password'
                        )
                    }
                })}

                type={show ? 'text' : 'password'}
                errors={errors.password}/>
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
        disabled={!isDirty || !isValid}>
            Submit</Button>
        <RegLink>Already have an account?
             <Link  to="/login">Login</Link>
        </RegLink>

        </StyledForm>
        <DevTool control={control}/>
        <FormBG photo={bgImage}></FormBG>
    </FormContainer>
  )
}



export default RegisterForm
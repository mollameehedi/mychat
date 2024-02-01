import * as Yup from 'yup';

const emailRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;

export const registerValidation = Yup.object({
    
    fullname:Yup.string()
        .max(15,'Must be 15 characters or less')
        .min(5,'Must be 5 characters or up')
        .required('Please Enter Your Last name'),
    
    email:Yup.string()
    .required('Please Enter Email')
        .matches(emailRegex,  "Only Email allowed")
        .email('Please Provide The Valid Email'),       
    
    password:Yup.string()
        .required('Please Enter Your Password')
})
export const loginValidation = Yup.object({
    email:Yup.string()
    .required('Please Enter Your Email')
        .matches(emailRegex,  "Please Provide The Valid Email")
        .email('Please Provide The Valid Email'),       
    
    password:Yup.string()
        .required('Please Enter Your Password')
        .max(15,'Must be 15 characters or less')
        .min(5,'Must be 5 characters or up')
})
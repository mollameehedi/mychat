import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./login.css";
import SectionHeading from '../../components/SectionHeading';
import GoogleSvg from '../../../public/google.svg';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import AuthNavigate from '../../components/AuthNavigate';
import LoginImg from '../../assets/images/login.jpg';
import Image from '../../utils/Image';
import Modal from '@mui/material/Modal';
import { FaEye,FaEyeSlash,FaXmark } from "react-icons/fa6";
import { loginValidation } from '../../validation/AuthValidate';
import { useFormik  } from 'formik';
import { Alert } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Login = () => {
  let [passShow, setPassShow] = useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  let handleModalCloss = ()=>{
    setOpen(false)
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema:loginValidation,
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='login_modal_box'
      >
        <Box sx={style}>
          <div className='forgot_box'>
           <div className="flex justify-items-end">
           <button className='forgot_close' onClick={handleModalCloss}><FaXmark/></button>
           </div>
          <h3>Forgot Password</h3>
         <div className="input-group">
         <Input type="email" labeltext="Enter Your Email" variant="standard"/>
         </div>
          <CustomButton styling="pt-5" text="Send Link" variant="contained"/>
          </div>
        </Box>
      </Modal>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <div className="loginbox">
              <div className="loginbox_inner">
                <form  onSubmit={formik.handleSubmit}>
                  <SectionHeading style="auth_heading" text="Login Your Account!" />
                  <div className="provider_login">
                    <img src={GoogleSvg} />
                    <span>Login With Google</span>
                  </div>
                  <div className="form_main">
                    <div className='input-group'>
                      <Input 
                        onChange={formik.handleChange}
                        value={formik.values.email} 
                        name="email" 
                        type="email" 
                        variant="standard" 
                        labeltext="Email Address" 
                        style="login_input_field" 
                    />
                      {formik.touched.email && formik.errors.email ? (<div><Alert severity="error">{formik.errors.email}</Alert></div>) : null}
                    </div>
                    <div className='input-group relative'>
                      <Input 
                       onChange={formik.handleChange}
                       value={formik.values.email} 
                      name="password" 
                      type={passShow ? 'password' : 'text'} 
                      variant="standard" 
                      labeltext="Password" 
                      style="login_input_field" 
                      />
                      {formik.touched.password && formik.errors.password ? (<div><Alert severity="error">{formik.errors.password}</Alert></div>) : null}
                      <button className='right-5 top-50 absolute w-5 password_on_off' type='button' onClick={() => setPassShow(!passShow)}> {passShow ? <FaEye /> : <FaEyeSlash/>}</button>
                    </div>
                    <CustomButton type='submit' styling='loginbtn' variant="contained" text="Login to Continue" />
                    <p className='loginauth'>Password Vuly Gaco ? <span onClick={handleOpen}>Forgot Password</span></p>
                    <AuthNavigate stlye="loginauth" link="/registration" linktext="Sign Up" text="Don't have an account ?" />
                  </div>
                </form>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="loginimg">
              <Image src={LoginImg} alt="Login images" />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login

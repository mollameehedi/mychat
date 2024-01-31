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
import { FaEye } from "react-icons/fa6";

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
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='forgot_box'>
            <button onClick={handleModalCloss}>closse</button>
          <h3>Forgot Password</h3>
          <Input type="email" labeltext="Enter Your Email" variant="standard"/>
          <CustomButton text="Send Link" variant="contained"/>
          </div>
        </Box>
      </Modal>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <div className="loginbox">
              <div className="loginbox_inner">
                <div>
                  <SectionHeading style="auth_heading" text="Login Your Account!" />
                  <div className="provider_login">
                    <img src={GoogleSvg} />
                    <span>Login With Google</span>
                  </div>
                  <div className="form_main">
                    <div>
                      <Input name="email" type="email" variant="standard" labeltext="Email Address" style="login_input_field" />
                    </div>
                    <div>
                      <Input name="password" type={passShow ? 'password' : 'text'} variant="standard" labeltext="Password" style="login_input_field" />
                      {/* <button onClick={() => setPassShow(!passShow)}><FaEye /></button> */}
                    </div>
                    <CustomButton styling='loginbtn' variant="contained" text="Login to Continue" />
                    <p className='loginauth'>Password Vuly Gaco ? <span onClick={handleOpen}>Forgot Password</span></p>
                    <AuthNavigate stlye="loginauth" link="/registration" linktext="Sign Up" text="Don't have an account ?" />
                  </div>
                </div>
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

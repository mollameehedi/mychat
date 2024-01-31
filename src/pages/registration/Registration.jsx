import React from 'react'
import "../login/login.css";
import SectionHeading from '../../components/SectionHeading';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import AuthNavigate from '../../components/AuthNavigate';
import LoginImg from '../../assets/images/login.jpg';
import Image from '../../utils/Image';
import { Box, Grid } from '@mui/material';

const Registration = () => {
  return (
    <>
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <div className="loginbox">
            <div className="loginbox_inner">
              <div>
                <SectionHeading style="auth_heading" text="Get started with easly register" />

                <div className="form_main">
                 <Input name="email" type="email" variant="outlined" labeltext="Email Address" style="login_input_field"/>
                 <Input name="fullname" type="text" variant="outlined" labeltext="Full Name" style="login_input_field"/>
                 <Input name="password" type="password" variant="outlined" labeltext="Password" style="login_input_field"/>
                  <CustomButton styling='loginbtn' variant="contained" text="Sign Up"/>
                  <AuthNavigate stlye="loginauth" link="/" linktext="sign in" text="Already have an account?"/>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="loginimg">
            <Image src={LoginImg} alt="Login images"/>
          </div>
        </Grid>
      </Grid>
    </Box>
  </>
  )
}

export default Registration

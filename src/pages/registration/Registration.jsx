import "../login/login.css";
import SectionHeading from '../../components/SectionHeading';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import AuthNavigate from '../../components/AuthNavigate';
import LoginImg from '../../assets/images/login.jpg';
import Image from '../../utils/Image';
import { Alert, Box, Grid } from '@mui/material';
import { useFormik  } from 'formik';
import { registerValidation } from '../../validation/AuthValidate';

const Registration = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      fullname: '',
      password: '',
    },
    validationSchema:registerValidation,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <>
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <div className="loginbox">
            <div className="loginbox_inner">
              <form  onSubmit={formik.handleSubmit}>
                <SectionHeading style="auth_heading" text="Get started with easly register" />

                <div className="form_main">
                 <div className="input-group">
                 <Input 
                  onChange={formik.handleChange}
                  value={formik.values.email} 
                  name="email"
                  type="email" 
                  variant="outlined" 
                  labeltext="Email Address" 
                  style="login_input_field"
                 />
                  {formik.touched.email && formik.errors.email ? (<div><Alert severity="error">{formik.errors.email}</Alert></div>) : null}
                 </div>
                 <div className="input-group">
                 <Input 
                  onChange={formik.handleChange}
                  value={formik.values.fullname}
                  name="fullname" 
                  type="text" 
                  variant="outlined" 
                  labeltext="Full Name" 
                  style="login_input_field"
                  />
                   {formik.touched.fullname && formik.errors.fullname ? (<div><Alert severity="error">{formik.errors.fullname}</Alert></div>) : null}
                  </div>
                 <div className="input-group">
                 <Input
                  onChange={formik.handleChange}
                  value={formik.values.password} 
                  name="password" 
                  type="password" 
                  variant="outlined" 
                  labeltext="Password" 
                  style="login_input_field"
                  />
                   {formik.touched.password && formik.errors.password ? (<div><Alert severity="error">{formik.errors.password}</Alert></div>) : null}
                  </div>
                  <CustomButton type="submit" styling='loginbtn' variant="contained" text="Sign Up"/>
                  <AuthNavigate stlye="loginauth" link="/" linktext="sign in" text="Already have an account?"/>
                </div>
              </form>
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

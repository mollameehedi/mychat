import "../login/login.css";
import SectionHeading from '../../utils/SectionHeading';
import Input from '../../utils/Input';
import CustomButton from '../../utils/CustomButton';
import AuthNavigate from '../../utils/AuthNavigate';
import LoginImg from '../../assets/images/login.jpg';
import Image from '../../utils/Image';
import { Alert, Box, Grid } from '@mui/material';
import { useFormik  } from 'formik';
import { registerValidation } from '../../validation/AuthValidate';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification,updateProfile  } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";

const Registration = () => {
  const auth = getAuth();
  const db = getDatabase();
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      email: '',
      fullname: '',
      password: '',
    },
    validationSchema:registerValidation,
    onSubmit: values => {
      createUserWithEmailAndPassword(auth, values.email, values.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    sendEmailVerification(auth.currentUser)
    .then(() => {
      updateProfile(auth.currentUser,{
        displayName: values.fullname,
        photoURL:'https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0='
      }).then(()=>{

        set(ref(db, 'users/' + user.uid), {
          username: user.displayName,
          email: user.email,
          profileimg : user.photoURL
        })
        .then(()=>{
          // input reset value here
          navigate('/')

          console.log(user); 
        });

      })
      toast.success('Please Check Your Mail to Verify Your Account!!');
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });
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

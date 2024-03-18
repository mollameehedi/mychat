import React,{useEffect} from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaCommentDots,FaRegBell  } from "react-icons/fa";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import Image from '../../utils/Image';
import { getAuth, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../../slices/userSlice';

const Sidebar = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.loginuserdata.value)

    useEffect(() => {
      if(!data){
          navigate('/')
      }
      else{
          navigate('/home')
      }
  },[]);

    const handleLogout = () => {
        signOut(auth).then(() => {
            toast.error('Logout Successfully!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
              localStorage.removeItem('user')
              dispatch(loginUser(null))
              navigate('/')
          }).catch((error) => {
            // An error happened.
          });
    }
    const userinfo = auth.currentUser;
  return (
    <>
        <div className="sidebarBox">
           <div className="sidebar_user">
           <div className='img_box'>
                <Image src={data && data.photoURL} alt='Profile Photo'/>
            </div>
            <h3 className='username'>{data && data.displayName}</h3>
            <p>{data && data.email}</p>
           </div>
            <div className='nav'>
                <ul className='navigation'>
                    <li><NavLink to="/home"><IoHomeOutline/></NavLink></li>
                    <li><NavLink to="/message"><FaCommentDots /></NavLink></li>
                    <li><NavLink to="/notification"><FaRegBell/></NavLink></li>
                    <li><NavLink to="/setting"><HiOutlineCog6Tooth /></NavLink></li>
                </ul>
            </div>
            <div className='logout'>
                <button onClick={handleLogout}><IoIosLogOut/></button>
            </div>
        </div>
    </>
  )
}

export default Sidebar
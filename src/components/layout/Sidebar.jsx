import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaCommentDots,FaRegBell  } from "react-icons/fa";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import Image from '../../utils/Image';
import { getAuth, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const auth = getAuth();
    const navigate = useNavigate();


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
                <Image src={userinfo.photoURL} alt='Profile Photo'/>
            </div>
            <h3 className='username'>{userinfo.displayName}</h3>
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
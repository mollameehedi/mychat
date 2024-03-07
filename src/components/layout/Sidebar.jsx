import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FaCommentDots,FaRegBell  } from "react-icons/fa";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import Image from '../../utils/Image';

const Sidebar = () => {
  return (
    <>
        <div className="sidebarBox">
           <div className="sidebar_user">
           <div className='img_box'>
                <Image src='' alt='Profile Photo'/>
            </div>
            <h3 className='username'>Mehedi</h3>
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
                <button><IoIosLogOut/></button>
            </div>
        </div>
    </>
  )
}

export default Sidebar
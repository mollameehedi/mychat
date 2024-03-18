import React from 'react'
import Image from '../../utils/Image'
import { FaPlus } from "react-icons/fa";
import GroupCard from '../common/groupcard/GroupCard';


const Friend = () => {
  return (
    <>
     <GroupCard cardTitle='Friend List'>
        <div className="usermainbox">
            {[1,2,3,4,5,6,7,8,9].map((item,index) => (
                <div className='useritem' key={index}>
                <div className='userimgbox'>
                <Image src='' />
                </div>
                <div className='userinfobox'>
                <div>
                    <h3>User name</h3>
                    <p>Mern developer</p>
                </div>
                <button className='addbutton'>block</button>
                </div>
                </div>
           ))}
         
        </div>
      </GroupCard>
    </>
  )
}

export default Friend
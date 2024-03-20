import React,{useEffect, useState} from 'react'
import { getDatabase, ref, onValue,set,push  } from "firebase/database";
import GroupCard from '../common/groupcard/GroupCard';
import Image from '../../utils/Image'
import { FaPlus } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';


const UserLIst = () => {
    const db = getDatabase();

    const [users, setUsers] = useState([]);
    const data = useSelector((state) => state.loginuserdata.value)


   useEffect(() => {
    const userRef = ref(db, 'users/');
    onValue(userRef, (snapshot) => {
        let arr = [];
        snapshot.forEach((item) => {
          if(data.uid != item.key){
            arr.push({ ...item.val(), id: item.key });
          }
        });
       setUsers(arr);
    });
   },[])
   
   // handle friend request
   let handleFRequest = (requestinfo)=>{
    set(push(ref(db, 'friendrequest/')),{
      sender_id:data.uid,
      sendername:data.displayName,
      senderimg:data.photoURL,
      senderemail:data.email,
      receiver_id:requestinfo.id,
      receivername:requestinfo.username,
      receiverimg:requestinfo.profileimg,
      receiveremail:requestinfo.email,
  
  }).then(() => {
  toast.success('Friend Request Sent');
  })
  .catch((error) => {
    console.log(error);
  })
   }

  return (
    <>
         <GroupCard cardTitle='Friend List'>
        <div className="usermainbox">
            {users && users.length > 0 ? users.map((user,index) => (
             <div className='useritem' key={index}>
             <div className='userimgbox'>
             <Image src={user.profileimg} />
             </div>
             <div className='userinfobox'>
             <div>
                 <h3>{user.username}</h3>
                 <p>Mern developer</p>
             </div>
             <button className='addbutton' onClick={()=>handleFRequest(user)}><FaPlus /></button>
             </div>
             </div>
               
           ))
          :
          <p>User Not Found</p>
          }
         
        </div>
      </GroupCard>
    </>
  )
}

export default UserLIst
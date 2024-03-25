import React,{useEffect, useState} from 'react'
import { getDatabase, ref, onValue,set,push,remove  } from "firebase/database";
import GroupCard from '../common/groupcard/GroupCard';
import Image from '../../utils/Image'
import { FaPlus } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';


const FriendRequest = () => {
    const db = getDatabase();

    const [fRequest, setFRequest] = useState([]);
    const data = useSelector((state) => state.loginuserdata.value)


   useEffect(() => {
    const fRequestRef = ref(db, 'friendrequest/');
    onValue(fRequestRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if(data.uid == item.val().receiver_id){
          arr.push({...item.val(),id:item.key})
        }
      })
        setFRequest(arr);
    });
   },[])
   
   // handle friend request
   let handleCencelReqeust = (cencelInfo)=>{
    remove(ref(db, 'friendrequest/' + cencelInfo.id)).then(() => {
      toast.success('Friend Request Canceled!!');
    })
   
   }

   let handleAcceptReqeust = (acceptInfo) =>{
    set(push(ref(db, 'friends/')),{
      whosendname:acceptInfo.sendername,
      whosendid:acceptInfo.sender_id,
      whosendemail:acceptInfo.senderemail,
      whosendphoto:acceptInfo.senderimg,
      whoreceivename:data.displayName,
      whoreceiveid:data.uid,
      whoreceiveemail:data.email,
      whoreceivephoto:data.photoURL,
  
  }).then(() => {
    remove(ref(db, 'friendrequest/' + acceptInfo.id));
  toast.success('Friend Request Accepted Successfully!!');
  })
  .catch((error) => {
    console.log(error);
  })
   }

  return (
    <>
         <GroupCard cardTitle='Friend Request List'>
        <div className="usermainbox">
            {fRequest && fRequest.length > 0 ? fRequest.map((user,index) => (
             <div className='useritem' key={index}>
             <div className='userimgbox'>
             <Image src={user.senderimg} />
             </div>
             <div className='userinfobox'>
             <div>
                 <h3>{user.sendername}</h3>
                 <p>Mern developer</p>
             </div>
             <div className='groupbtn'>
             <button className='addbutton' onClick={()=>handleAcceptReqeust(user)}>Accept</button>
             <button className='addbutton' onClick={()=>handleCencelReqeust(user)}>Cancel</button>
             </div>
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

export default FriendRequest
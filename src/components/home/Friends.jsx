import React,{useEffect,useState} from 'react'
import GroupCard from '../common/groupcard/GroupCard';
import Image from '../../utils/Image'
import { FaPlus } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { getDatabase, ref, onValue,set,push,remove } from "firebase/database";
import { toast } from 'react-toastify';

const Friends = () => {
    const db = getDatabase();
  const[friends,setFriends] = useState([]);
  const data = useSelector((state) => state.loginuserdata.value)

  useEffect(()=> {
    const friendsRef = ref(db, 'friends');
    onValue(friendsRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if(data.uid == item.val().whosendid || data.uid == item.val().whoreceiveid){
          arr.push({...item.val(),id:item.key})
        }
      })
      setFriends(arr);
    });
   },[])

   let handleBlock = (blockInfo) =>{
    set(push(ref(db,'block')),{
      whoblockid:data.uid,
      whoblockname:data.displayName,
      whoblockemail:data.email,
      whoblockimg:data.photoURL,
      blockid:blockInfo.whoreceiveid,
      blockemail:blockInfo.whoreceiveemail,
      blockname:blockInfo.whoreceivename,
      blockimg:blockInfo.whoreceivephoto,
    })
    .then(() => {
      remove(ref(db,'friends/' + blockInfo.id));
      toast.warning('User Blocked!!');
    })
     console.log(blockInfo);
   }

  return (
    <>
    <GroupCard cardTitle='Friend List'>
   <div className="usermainbox">
       {friends && friends.length > 0 ? friends.map((item,index) => (
        <div className='useritem' key={index}>
        <div className='userimgbox'>
        <Image src= {data.uid == item.whosendid ? item.whoreceivephoto : item.whosendphoto} />
        </div>
        <div className='userinfobox'>
        <div>
        {data.uid == item.whosendid ? <h3>{item.whoreceivename}</h3> : <h3>{item.whosendname}</h3>}
            <p>Mern developer</p>
        </div>
        <button className='addbutton' onClick={() => handleBlock(item)}>block</button>
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

export default Friends
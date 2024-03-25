import React,{useEffect,useState} from 'react'
import GroupCard from '../common/groupcard/GroupCard';
import Image from '../../utils/Image'
import { FaPlus } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { getDatabase, ref, onValue,set,push,remove } from "firebase/database";

const Friends = () => {
    const db = getDatabase();
  const[friends,setFriends] = useState([]);
  const data = useSelector((state) => state.loginuserdata.value)

  useEffect(()=> {
    const friendsRef = ref(db, 'friends');
    onValue(friendsRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if(data.uid == item.val().whosendid || data.uid == item.val().recevied){
          arr.push({...item.val(),id:item.key})
        }
      })
      setFriends(arr);
    });
   },[])

  return (
    <>
    <GroupCard cardTitle='Friend List'>
   <div className="usermainbox">
       {friends && friends.length > 0 ? friends.map((user,index) => (
        <div className='useritem' key={index}>
        <div className='userimgbox'>
        <Image src={user.whosendphoto} />
        </div>
        <div className='userinfobox'>
        <div>
            <h3>{user.whosendname}</h3>
            <p>Mern developer</p>
        </div>
        <button className='addbutton'><FaPlus /></button>
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
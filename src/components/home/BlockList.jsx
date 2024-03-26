import React,{useEffect,useState} from 'react'
import GroupCard from '../common/groupcard/GroupCard';
import Image from '../../utils/Image'
import { FaPlus } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { getDatabase, ref, onValue,set,push,remove } from "firebase/database";

const BlockList = () => {
    const db = getDatabase();
  const[blockList,setBlockList] = useState([]);
  const data = useSelector((state) => state.loginuserdata.value)

  useEffect(()=> {
    const blocksRef = ref(db, 'block');
    onValue(blocksRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if(item.val().whoblockid == data.uid){
          arr.push({...item.val(),id:item.key})
        }
      })
      setBlockList(arr);
    });
   },[])

  return (
   <>
   <GroupCard cardTitle='Block List'>
   <div className="usermainbox">
       {blockList && blockList.length > 0 ? blockList.map((item,index) => (
        <div className='useritem' key={index}>
        <div className='userimgbox'>
        <Image src={item.blockimg} />
        </div>
        <div className='userinfobox'>
        <div>
        <h3>{item.blockname}</h3>
            <p>Mern developer</p>
        </div>
        <button className='addbutton'>Unblock</button>
        </div>
        </div>
          
      ))
     :
     <p>No Block List</p>
     }
    
   </div>
 </GroupCard>
   </>
  )
}

export default BlockList
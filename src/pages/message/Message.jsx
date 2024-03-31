import React, { useEffect, useState } from 'react'
import './message.css'
import { useSelector,useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import Image from '../../utils/Image';
import { activeuser } from '../../slices/activeUserSlice';

const Message = () => {

  const [allmessage, setAllMessage] = useState([]);
  const [msgtext, setMsgtext] = useState("");
  const db = getDatabase();
  const [friendList, setFriendList] = useState([]);
  const data = useSelector((state) => state.loginuserdata.value)
  const dispatch = useDispatch()
  const activechat = useSelector((state) => state.activeuserdata.value)

  useEffect(() => {
    const friendsRef = ref(db, 'friends');
    onValue(friendsRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (data.uid == item.val().whosendid || data.uid == item.val().whoreceiveid) {
          arr.push({ ...item.val(), id: item.key })
        }
      })
      setFriendList(arr);
    });
  }, [])



  let handleUser = (i) => {
    dispatch(activeuser(i))
  }

  // message write oparation
  let handleSubmit = () => {
    set(push(ref(db,'message')),{
      senderid:data.uid,
      senderemail:data.email,
      sendenamed:data.displayName,
      sendermsg:msgtext,
      receiverid:data.uid == activechat.whoreceiveid ? activechat.whosendid : activechat.whoreceiveid,
      receivername:data.uid == activechat.whoreceiveid ? activechat.whosendname : activechat.whoreceivename,
      receiveremail:data.uid == activechat.whoreceiveid ? activechat.whosendemail : activechat.whoreceiveemail,
    })
    .then(() => {
      console.log('success');
    })
    .catch((error) => {
      
    })
  }

  // message read oparation
  useEffect(()=> {
    const messageRef = ref(db, 'message');
    onValue(messageRef, (snapshot) => {
      let arr = [];
      let activeuserid = data.uid == activechat.whosendid ? activechat.whoreceiveid : activechat.whosendid
      snapshot.forEach((item) => {
        if((item.val().senderid == data.uid && item.val().receiverid == activeuserid) || (item.val().receiverid == data.uid && item.val().senderid == activeuserid )){
          arr.push({...item.val(),id:item.key})
        }
      })
      setAllMessage(arr);
    });
   },[activechat])
  return (
    <div className='msg_wrapper'>
      <div className='msg_user_body'>
        <h3 className='list_heading'>Friend List</h3>
        <div className="msg_user_wrapper">
          {friendList && friendList.length > 0 ? friendList.map((item, index) => (
            <div className='msg_user_item' key={index} onClick={ () =>handleUser(item)}>
              <div className='userimgbox'>

                <Image src={data.uid == item.whosendid ? item.whoreceivephoto : item.whosendphoto} />
              </div>
              <div className='userinfobox'>
                <div>
                  {data.uid == item.whosendid ? <h3>{item.whoreceivename}</h3> : <h3>{item.whosendname}</h3>}
                  <p>Mern developer</p>
                </div>
                {/* <button className='addbutton' >Message</button> */}
              </div>
            </div>
          )) :
            <h3 >No Friend Available</h3>
          }
        </div>
      </div>
      {activechat != null ?
        <div className='msg_box_body'>
        <div className="msg_box_heading">
          <h2>{ activechat && activechat.whosendid == data.uid ? activechat.whoreceivename : activechat.whosendname }</h2>
          <p>Active Now</p>
        </div>
        <div className="msg_main">
          { allmessage.map((item,index) => (
              <div className={item.receiverid == data.uid ? "receivemsg" : "sendmsg" } key={index}>
             <p>{item.sendermsg}</p>
           </div>
          ))}
        {/* <div className="receivemsg">
            <p>This is my Message</p>
          </div>
          <div className="sendmsg">
            <p>hello</p>
          </div>
          <div className="receivemsg">
            <p>This is my Message</p>
          </div>
          <div className="sendmsg">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quod sed voluptatibus atque labore, minus et dolorem repellat unde laboriosam culpa! Voluptatibus facilis eius placeat debitis temporibus, repudiandae illum illo?</p>
          </div> */}
        </div>
        <div className="msg_footer">
          {/* <input onChange={handleForm} type="text" placeholder='Please Enter Your Message' className='msg_input'/> */}
          <input onChange={(e) => setMsgtext(e.target.value)} type="text" placeholder='Please Enter Your Message' className='msg_input'/>
          <button onClick={handleSubmit} className='mgs_send_btn'>Send</button>
        </div>
      </div>
      :
      <h1>Please Select a User</h1>
      }
    </div>
  )
}

export default Message
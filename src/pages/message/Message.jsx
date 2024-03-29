import React, { useEffect, useState } from 'react'
import './message.css'
import { useSelector, } from 'react-redux'
import { toast } from 'react-toastify';
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import Image from '../../utils/Image';

const Message = () => {

  const db = getDatabase();
  const [friendList, setFriendList] = useState([]);
  const data = useSelector((state) => state.loginuserdata.value)

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
    console.log(i);
  }
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
      <div className='msg_box_body'>
        <div className="msg_box_heading">
          <h2>Mehedi</h2>
          <p>Active Now</p>
        </div>
        <div className="msg_main">
        <div className="receivemsg">
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
          </div>
        </div>
        <div className="msg_footer">
          <input type="text" placeholder='Please Enter Your Message' />
        </div>
      </div>
    </div>
  )
}

export default Message
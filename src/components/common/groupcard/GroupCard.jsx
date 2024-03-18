import './groupcard.css';
import { BsThreeDotsVertical } from "react-icons/bs";
const GroupCard = ({ children, cardTitle }) => {
  return (
    <div className='groupcard'>
      <div className='group-heading'>
        <h4>{cardTitle}</h4>
        <div className='dots'>
          <BsThreeDotsVertical />
        </div>
      </div>
      {children}
    </div>
  )
}

export default GroupCard

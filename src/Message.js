import { Avatar } from '@mui/material';
import './Message.css';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

const Message = ({id, contents: {timestamp, displayName, email, message, photo, uid}}) => {

    const user = useSelector(selectUser)
    return ( 
        <div className={`message ${user.email === email && 'message__sender'}`}>
            <Avatar src={photo} className="message__photo"/>
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
     );
}
 
export default Message;
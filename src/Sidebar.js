import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css'
import db, { auth } from "./firebase";
import SidebarChat from './SidebarChat';
import { useEffect, useState } from 'react';
const Sidebar = () => {
    const user = useSelector(selectUser)
    const [chats, setChats] = useState([])

    useEffect(() => {
        db.collection('chats').onSnapshot((snapshot) => {
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])
    const addChat = () => {
        const chatName = prompt("Enter a chat name")
        if(chatName){
            db.collection('chats').add({
                chatName: chatName
            })
        }
    }
    return ( 
        <aside className="sidebar">
            {/* Sidebar Header */}
            <div className="sidebar__header">
                <Avatar onClick={() => auth.signOut()} src={user.photo}/>
                <div className="sidebar__headerInput">
                    <ion-icon name="search-outline"></ion-icon>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="sidebar__createChat">
                    <ion-icon name="create-outline" onClick={addChat}></ion-icon>
                </div>
            </div>
            <div className="sidebar__chats">
                {chats.map(({id, data: {chatName}}) => (
                    <SidebarChat key={id} id={id} chatName={chatName}/>
                ))}
            </div>
        </aside>
     );
}
 
export default Sidebar;
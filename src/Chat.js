import { useEffect, useState } from 'react'
import './Chat.css'
import Message from './Message'
import { selectChatId, selectChatName } from './features/chatSlice'
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux'
import db from './firebase'
import firebase from 'firebase'

const Chat = () => {
    const user = useSelector(selectUser)
    const [input, setInput] = useState("");
    const channelName = useSelector(selectChatName)
    const chatId = useSelector(selectChatId)
    const[messages, setMessages] = useState([]);

    useEffect(() => {
        if(chatId) {
            db.collection('chats').doc(chatId).collection('messages').orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
                setMessages(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        }
        
    }, [chatId])
    const sendiMessage = (e) => {
        e.preventDefault()

        if(input != ""){
            db.collection('chats').doc(chatId).collection('messages').add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                uid: user.uid, 
                email: user.email,
                photo: user.photo,
                displayName: user.displayName
            })

            setInput("")
        }
    }
    return ( 
        <main className="chat">
            <div className="chat__header">
                <div className="chat__headerInfo">
                    <p>To: <b>{channelName}</b></p>
                </div>
                <p><b>Details</b></p>
            </div>
            <div className="chat__body">
                {messages.map(({id, data}) => (
                    <Message key={id} contents={data}/>
                ))}
            </div>
            <form className="chat__input">
                <div className="chatInput__input">
                    <input 
                    type="text" 
                    placeholder="iMessage"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit" onClick={sendiMessage}>Send</button>
                    <ion-icon name="happy-outline"></ion-icon>
                </div>
                <ion-icon name="mic-outline"></ion-icon>
            </form>
        </main>
     );
}
 
export default Chat;
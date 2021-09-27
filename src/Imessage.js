import Chat from './Chat';
import Sidebar from './Sidebar';
import './Imessage.css'
const Imessage = () => {
    return ( 
        <div className="imessage">
            <Sidebar/>
            <Chat />
        </div>
     );
}
 
export default Imessage;
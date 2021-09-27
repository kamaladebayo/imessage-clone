import './Login.css'
import { auth, provider } from "./firebase";
// import { Button } from '@mui/material';
const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(error => alert(error.message))
    }
    return ( 
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png" alt="iMessage" />
                <h1>iMessage</h1>
            </div>
            {/* <Button variant="contained">SIGN IN</Button> */}
            <button onClick={signIn}>SIGN IN</button>
        </div>
     );
}
 
export default Login;
import {useState} from 'react';
import axios from 'axios';
function LogIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const callLogInApi = async () => {
        const payload = ({
            email: email,
            password: password
        })
        const response = await axios.post('http://localhost:2563/prav/Ulogin',payload)
        console.log(response.data.data)
        alert("welcome"+" "+response.data.data.name)
    }
    return(
        <div>
            <div>
                <p>Enter your Email</p>
                <input  type="text" value={email} onChange={handleEmailChange}></input>
            </div>
            <div>
                <p>Enter your Password</p>
                <input type="password" value={password} onChange={handlePasswordChange}></input>
            </div>
            <button onClick={callLogInApi}>LOGIN</button>
        </div>
    )
}
export default LogIn;
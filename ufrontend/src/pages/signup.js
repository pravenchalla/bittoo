import {useState} from 'react'
import axios from 'axios'
//import './signup'
function SignUp() {
    const [name, setName] = useState('')
    const [age, setAge] = useState()
    const [role, setRole] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleAgeChange = (e) => {
        setAge(parseInt(e.target.value))
    }
    const handleRoleChange = (e) => {
        setRole(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const callSignUpApi = async () => {
        const payload = {
            name: name,
            age: age,
            role: role,
            email: email,
            password: password
        }
        const response = await axios.post('http://localhost:2563/prav/Ucreate', payload)
        console.log(response)
    }
    


    return(
        <div>
            <div>
                <p className='p'>Enter your Name</p>
                <input className='input' type="text" value={name} onChange={handleNameChange}></input>
            </div>
            <div>
                <p>Enter your Age</p>
                <input type="number" value={age} onChange={handleAgeChange}></input>
            </div>
            <div>
                <p>Enter your Role</p>
                <input type="text" value={role} onChange={handleRoleChange}></input>
            </div>
            <div>
                <p>Enter your E-mail</p>
                <input type="text" value={email} onChange={handleEmailChange}></input>
            </div>
            <div>
                <p>Enter your Password</p>
                <input type="password" value={password} onChange={handlePasswordChange}></input>
            </div>
            <button className='signbutton' onClick={callSignUpApi}>SIGNUP</button>
        </div>
    )
}

export default SignUp;
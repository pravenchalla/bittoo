import axios from 'axios'
import {useState} from 'react'
function ViewAllUsers () {
    const [users, setUsers] = useState('')

    const fetchAllUsers = async () => {
        const response = await axios.get('http://localhost:2563/prav/Uview', )
        if(response.data.users === true){
            setUsers(response.data.data)
        }else{
            alert(response.data.message)
        }
       
             
        
    }

    return(
        <div>
            <h1>Get All Users Details</h1>
        </div>
    )
}

export default ViewAllUsers;
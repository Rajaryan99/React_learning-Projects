import { useState } from "react"

export default function Form() {


    let [fieldData, setfieldData] = useState({
        fullname: '',
        username: '',
    })

    let handleInputChange = (e) => {

        setfieldData((currData) => {
            return {...currData, [e.target.name]: e.target.value}
        })

    }

    // let [username, setUsername] = useState('');
    // let [fullname, setfullname] = useState('');

    // let handleNameChange = (e) => {
    //     setUsername(e.target.value)
    // }
    // let handleusername = (e) => {
    //     setfullname(e.target.value)
    // }

    let handleSubmit = (e) => {
        e.preventDefault();
        setfieldData({
            fullname: '',
            username: ''
        })
        console.log(fieldData);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname"> Full Name</label>
            <input type="text" id="fullname" name="fullname" placeholder="Enter Your fullname" value={fieldData.fullname} onChange={handleInputChange} />
<br />
            <label htmlFor="username"> Username</label>
            <input type="text" id="Username" name="username" placeholder="Enter Your username" value={fieldData.username} onChange={handleInputChange} />
             <button type="submit">submit</button>
        </form>
        
    )
}
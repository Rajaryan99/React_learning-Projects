import { useState } from "react"

export default function Form() {

    let [username, setUsername] = useState('');

    let handleNameChange = (e) => {
        setUsername(e.target.value)
    }

    return(
        <form action="">
            
            <input type="text" placeholder="Enter Your username" value={username} onChange={handleNameChange} />
             <button>submit</button>
        </form>
    )
}
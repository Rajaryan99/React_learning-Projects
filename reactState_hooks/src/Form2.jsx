import { useState } from 'react'
import './form.css'

export default function Form2() {

    let [fieldData, setfieldData] = useState({
        fullname: '',
        username: ''
    })

    let handleinputChange = (e) => {
        
        setfieldData((currData) => {
            return {...currData, [e.target.name]: e.target.value}
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        setfieldData({
            fullname: '',
            username: ''
        })
        console.log(fieldData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name - </label>
            <input  type="text"
                placeholder='Enter your full name'
                id='fullname'
                name='fullname'
                onChange={handleinputChange}
             />
            <br /><br />
              <input  type="text"
                placeholder='Enter your username'
                id='username'
                name='username'
                onChange={handleinputChange}
             />
            &nbsp;&nbsp;&nbsp;
            <button type='submit'>Submit</button>
        </form>
    )
}
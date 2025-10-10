import { useState } from 'react'
import './form.css'

export default function CommentForm() {

    let [formData, setformData] = useState({
        username: '',
        remarks: '',
        rating: 5
    })

    let handleInputChange = (e) => {
        setformData((currData) => {
            return {...currData}
        })
    }

    return (
        <div>
            <h1>Give a comment!</h1>
            <form action="">
                <input type="text" placeholder='Username' value={formData.username} />
                <br />
                <textarea name="" id="" 
                rows={10}
                 cols={40}
                 placeholder='Write  a comment!'
                 value={formData.remarks}
                 >
            
                 </textarea>
                 <br />
                 <input type="number" placeholder='Rating' min={1} max={5} value={formData.rating} />
            <br /><br />
                <button>Add Comment</button>
            </form>
        </div>
    )
}
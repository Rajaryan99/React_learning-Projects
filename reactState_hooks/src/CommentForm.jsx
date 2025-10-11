import { useState } from 'react'
import './form.css'
import { useFormik } from 'formik'

export default function CommentForm({addNewComment}) {

    let [formData, setformData] = useState({
        username: '',
        remarks: '',
        rating: 5
    })

    let handleInputChange = (e) => {
        setformData((currData) => {
            return {...currData, [e.target.name]: e.target.value}
        })
    }

    let handleCommentBtn = (e) => {
        console.log(formData);
        addNewComment(formData);
        e.preventDefault();
        setformData({
            username: '',
        remarks: '',
        rating: 5
        })
    }

    return (
        <div>
            <h1>Give a comment!</h1>
            <form action="">
                <label htmlFor="Username">Username - </label>
                <input  id='Username' name='username' type="text" placeholder='Username' value={formData.username} onChange={handleInputChange} />
                <br />
                <label htmlFor="textarea">Comment -  </label>
                <textarea name="remarks" id="textarea" 
                rows={10}
                 cols={40}
                 placeholder='Write  a comment!'
                 value={formData.remarks}
                 onChange={handleInputChange}
                 >
                 </textarea>
                 <br />
                 <label htmlFor="rating">Rating -   </label>
                 <input id='rating' name='rating' type="number" placeholder='Rating' min={1} max={5} value={formData.rating} onChange={handleInputChange} />
            <br /><br />
                <button onClick={handleCommentBtn}>Add Comment</button>
            </form>
        </div>
    )
}
import { useState } from "react";
import './comment.css'

export default function Comment(){

    let [comments, setComments] = useState([{
        username: '@sk',
        remark: 'gerat job',
        rating: 4
    }])


    return (
        <div className="main">
            <h3>All comments</h3>
            <div className="comment">
                <label htmlFor="remark"><b>Remark - </b></label>
                <span>{comments[0].remark}</span>
                &nbsp;
                <br />
             <label htmlFor="rating"><b>Rating - </b></label>
                <span>{comments[0].rating}</span>
                <br />
             <label htmlFor="username"><b>Username - </b></label>
                <span>{comments[0].username}</span> 
            </div>
        </div>
    )
}
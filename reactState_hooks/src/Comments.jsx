import { useState } from "react";
import './comment.css'
import CommentForm from "./CommentForm";

export default function Comment(){

    let [comments, setComments] = useState([{
        username: '@sk',
        remark: 'gerat job',
        rating: 4
    }])

    let  addNewComment = (comment) =>{
        setComments((currComment) => [...currComment, comment])
            console.log('adde new comment')
        
    }
    return (
        <>
        <div className="main">
            <h3>All comments</h3>
            {comments.map((comment, idx) => (
                 <div className="comment" key={idx}>
                <label htmlFor="remark"><b>Remark - </b></label>
                <span>{comment.remark}</span>
                &nbsp;
                <br />
             <label htmlFor="rating"><b>Rating - </b></label>
                <span>{comment.rating}</span>
                <br />
             <label htmlFor="username"><b>Username - </b></label>
                <span>{comment.username}</span> 
            </div>
            ))}
           
        </div>
        <hr />

        <CommentForm addNewComment={addNewComment}/>
        </>
        
    )
}
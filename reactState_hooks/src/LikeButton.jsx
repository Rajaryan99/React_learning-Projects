import { useState } from "react"

export default function LikeButton() {

    let [isLike, setIsLike] = useState(false);
    let toggleLike = () => {
        setIsLike(!isLike);
    }

    let likeStyle = {color: 'red'};

    return (
        <div>
              <h1 onClick={toggleLike}>
                {isLike ? <i className="fa-solid fa-heart" style={likeStyle}></i> : 
                 <i className="fa-regular fa-heart"></i>
                }
        
                </h1>
           
        </div>
    )
}
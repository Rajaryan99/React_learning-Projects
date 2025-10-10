import './form.css'

export default function CommentForm() {
    return (
        <div>
            <h1>Give a comment!</h1>
            <form action="">
                <input type="text" placeholder='Username' />
                <br />
                <textarea name="" id="" 
                rows={10}
                 cols={40}
                 placeholder='Write  a comment!'
                 >
            
                 </textarea>
            <br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}
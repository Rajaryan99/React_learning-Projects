function handleFormSubmit(event) {
    event.preventDefault();
    console.log('formwas submitted');
}

export default function form() {
    return (
        <form>
            <input type="text" placeholder="Write something..." />
           <button onClick={handleFormSubmit} >Submit</button>
        </form>
    )
}
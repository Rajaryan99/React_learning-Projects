
function printHello(){
    console.log('hello World')
}

function mouserHover(){
    console.log('Hover')
}



export default function Button() {
    return (
        <div>
            <button onMouseOver={mouserHover}>Click me!</button>
        </div>
    );
}
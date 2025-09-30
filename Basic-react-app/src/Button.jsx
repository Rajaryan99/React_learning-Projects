
function printHello(event){
    console.log('hello World');
    console.log(event);
}

function mouserHover(){
    console.log('Hover')
}



export default function Button() {
    return (
        <div>
            <button onMouseOver={printHello}>Click me!</button>
        </div>
    );
}
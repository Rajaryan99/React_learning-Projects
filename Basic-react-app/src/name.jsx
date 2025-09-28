import './name.css';


function Name({name, des}) {

    // let name = ' Arnav'
    return (
        <div className="Name">
            <h1>{name}</h1>
            <p>{des}</p>
        </div>
    )
}

export default Name;
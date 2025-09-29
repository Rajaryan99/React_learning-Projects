import './price.css'

export default function Price({oldPrice, newPrice}){
    return (
        <div className="Price">
            <span className="old">Rs{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span><b>{newPrice}/-</b></span>
        </div>
    )
}
import Price from "./price";

export default function Product({title, idx}){
    let oldPrice = ["12,999", '15,999', '1,299', '499'];
    let newPrice = ['9,999', '12,999', '999', '299'];
    let description  = ['8,000 DPI', 'intuitive surface', 'designed for iPad Pro', 'wireless']
    return (
        <div className="Product">
             <h3>{title}</h3>
             <p>{description[idx]}</p>
             <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}
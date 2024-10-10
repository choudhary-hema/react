import ProductCard from "./ProductCard";
function Product(){
    const product = [{
        "id": 1,
        "title": "iPhone 9"
    },
    {
        "id": 2,
        "title": "iPhone 9"
    }];
    
    return (
    <>
    {product.map(<ProductCard product={product}></ProductCard>)}
    </>
    )
}
export default Product;
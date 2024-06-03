import { Product } from "./Product"

export const ProductList = ({ products }: { products: Product[] }) => {
    return (
        <>
            {products.map((product) => (<Product key={product.id} product={product}/>))}
        </>
    )
}
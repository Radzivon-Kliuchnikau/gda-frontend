import { Dispatch } from "react";
import { Product } from "./Product"
import "./ProductList.css"

export const ProductList = ({ products, selections, addSelection, removeSelection }: {
    products: Product[];
    selections: number[];
    addSelection: Dispatch<number>;
    removeSelection: Dispatch<number>;
}) => {
    return (
        <>
            <div className="productsContainer">
                {products.map((product) => (
                    <Product
                        key={product.id} product={product}
                        selections={selections}
                        addSelection={addSelection}
                        removeSelection={removeSelection}
                    />))}
            </div>
        </>
    )
}
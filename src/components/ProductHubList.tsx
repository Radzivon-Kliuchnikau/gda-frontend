import { Tab, TabList } from "@fluentui/react-components";
import { Dispatch, useState } from "react";
import { ProductList } from "./ProductList";



export const ProductsHubList = ({ data, selections, addSelection, removeSelection }: {
    data: ProductsHub;
    selections: number[];
    addSelection: Dispatch<number>;
    removeSelection: Dispatch<number>;
}) => {
    const categories: string[] = [];
    data.products.map((product) => categories.push(product.category));
    const uniqueCategories = categories.filter((product, index, dataArray) => index == dataArray.indexOf(product));

    const [selectedCategory, setSelectedCategory] = useState<string>(uniqueCategories[0]);

    return (
        <>
            <TabList selectedValue={selectedCategory}>
                {uniqueCategories.map((category, i) => (
                    <Tab
                        key={i + Math.round(Math.random() * 100)}
                        value={category}
                        onClick={() => setSelectedCategory(() => category)}>
                        {category.toString().toUpperCase()}
                    </Tab>
                ))}
            </TabList>
            <ProductList
                products={data.products.filter((product) => product.category == selectedCategory)}
                selections={selections}
                addSelection={addSelection}
                removeSelection={removeSelection}
            />
        </>
    );
};

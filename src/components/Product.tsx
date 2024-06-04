import { Body1, Button, Caption1, Card, CardHeader, CardPreview, makeStyles } from "@fluentui/react-components";
import { Dispatch } from "react";

const useStyles = makeStyles({
    card: {
        margin: "auto",
        width: "300px",
        maxWidth: "50%",
    },
});

export const Product = ({ product, selections, addSelection, removeSelection }: {
    product: Product;
    selections: number[];
    addSelection: Dispatch<number>;
    removeSelection: Dispatch<number>;
}) => {
    const styles = useStyles();

    const isSelected = selections.includes(product.id);

    return (
        <>
            <Card className={styles.card}>
                <CardHeader
                    header={
                        <Body1>
                            {product.brand}
                        </Body1>
                    }
                    description={<Caption1>{product.title}</Caption1>}
                />
                <CardPreview>
                    <img
                        src={product.images[0]}
                        alt="Preview of a Word document: About Us - Overview"
                    />
                </CardPreview>
                {isSelected
                    ? <Button appearance="secondary" onClick={() => removeSelection(product.id)}>Remove from the cart</Button>
                    : <Button appearance="secondary" onClick={() => addSelection(product.id)}>Add to cart</Button>}
            </Card>
        </>
    )
}
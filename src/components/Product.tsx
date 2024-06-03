import { Body1, Caption1, Card, CardHeader, CardPreview, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
    card: {
        margin: "auto",
        width: "720px",
        maxWidth: "100%",
    },
});

export const Product = ({ product }: { product: Product }) => {



    const styles = useStyles();

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
            </Card>
        </>
    )
}
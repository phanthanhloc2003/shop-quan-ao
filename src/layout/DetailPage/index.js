import { Box, Container, Grid, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductThumbnail from "../../compomet/siderba/component/ProductThumbnail";
import useProductDetail from "../../compomet/siderba/hooks/useProductDetail";
import Header from "../../compomet/Header";
import ProductInfo from "../../compomet/siderba/component/ProductInfo";
import AddToCartFrom from "../../compomet/siderba/component/AddToCartFrom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/cartSlice";

function Detailpage() {
    const { id } = useParams();
    const dispatch = useDispatch()

    const { data = [], loading } = useProductDetail(id);




    if (loading) {
        return <Box>loading</Box>;
    }

    const handleToCartFrom = ({ quantity }) => {

        const action = addToCart({
            id: data[0].id,
            data,
            quantity
        })

        dispatch(action)
    };
    return (
        <div>
            <Header />

            <Box marginTop={5}>
                <Container>
                    <Paper elevation={0}>
                        <Grid container spacing={2} padding={3}>
                            <Grid item className="w-[400px] ">
                                <ProductThumbnail data={data} />
                            </Grid>
                            <Grid item className="flex-1 p-[12px]">
                                <ProductInfo data={data} />

                                <AddToCartFrom onSubmit={handleToCartFrom} />
                            </Grid>
                        </Grid>
                    </Paper>

                </Container>
            </Box>
        </div>
    );
}

export default Detailpage;

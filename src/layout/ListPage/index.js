import React, { useEffect, useState } from "react";
import { Container, Grid, Box, Paper } from "@mui/material";
import ProductSkeleton from "../../compomet/siderba/component/productskeleton";
import Pagination from "@mui/material/Pagination";
import ProductList from "../../compomet/siderba/component/productList";
import productListApi from "../../api/productListApi";
import ProductSort from "../../compomet/siderba/component/productSort";
import ProductFilters from "../../compomet/siderba/component/ProductFilters";
import { useSelector } from "react-redux";

function Listpage(props) {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(9);
    const [pageIndex, setPageIndex] = useState(1);
    const [sortOrder, setSortOrder] = useState("asc");
    const [categoryId, setCategoryId] = useState(0);
    const [priceProduct, setPriceProduct] = useState({
        priceStart: 0,
        priceEnd: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await productListApi.getAll({
                    _sort: "salePrice",
                    _order: sortOrder,
                    name_like: props?.searchParam ?? "",
                });
                setProductList(data);
            } catch (error) {
                console.log("Failed to get data", error);
            }
            setLoading(false);
        };
        fetchData();
        console.log(props.searchParam);
    }, [sortOrder, props.searchParam]);

    const handleSortChange = (newSortOrder) => {
        setSortOrder(newSortOrder);
    };
    const handleFiltersChange = (data) => {
        switch (data.key) {
            case "price":
                setPriceProduct({
                    priceStart: Number(data.value.salePrice_gte) || 0,
                    priceEnd: Number(data.value.salePrice_lte) || 0,
                });
                break;
            default:
                setCategoryId(Number(data));
        }
    };
    const filteredData = productList.filter((item) => {
        return (
            (categoryId === 0 || item.category.id === categoryId) &&
            (priceProduct.priceStart === 0 ||
                item.salePrice >= priceProduct.priceStart) &&
            (priceProduct.priceEnd === 0 || item.salePrice <= priceProduct.priceEnd)
        );
    });

    const total = filteredData.length;
    const pages = Math.ceil(total / limit);
    const currentData = filteredData.slice(
        (pageIndex - 1) * limit,
        pageIndex * limit
    );

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid className="w-[250px]">
                        <Paper className="mr-[4px]" elevation={0}>
                            <ProductFilters
                                filters={categoryId}
                                onChange={handleFiltersChange}
                            />
                        </Paper>
                    </Grid>
                    <Grid className="flex-1 ">
                        <Paper elevation={0}>
                            <ProductSort onSortChange={handleSortChange} />
                            {loading ? (
                                <ProductSkeleton />
                            ) : (
                                <ProductList data={currentData} />
                            )}

                            <Box className="flex  flex-row flex-nowrap justify-center pb-[20px]">
                                <Pagination
                                    count={pages}
                                    onChange={(_, v) => {
                                        setPageIndex(v);
                                    }}
                                    variant="outlined"
                                    color="secondary"
                                />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Listpage;

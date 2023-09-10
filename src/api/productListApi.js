import axiosRroduct from "./axiosProduct";


const productListApi = {
    getAll(params) {
        const url = "/product";
        return axiosRroduct.get(url, { params: params })
    },
    // getAll(params) {
    //     const url = "/pagination";
    //     return axiosRroduct.get(url, { params: params })
    // }
}


export default productListApi
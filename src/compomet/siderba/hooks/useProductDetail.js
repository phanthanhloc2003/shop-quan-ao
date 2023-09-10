import { useEffect, useState } from "react"
import productListApi from "../../../api/productListApi";

export default function useProductDetail(id) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const result = await productListApi.getAll({ id })

                setData(result.data)
            } catch (error) {

            }
            setLoading(false)
        })();
    }, [id])
    return { data, loading }
}
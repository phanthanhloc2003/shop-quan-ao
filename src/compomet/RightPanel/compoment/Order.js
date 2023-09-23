import { useSelector } from "react-redux";

function Order() {
    const receivedItem = useSelector((state) => state.history.receivedItems);

    const datavalue = receivedItem.data



    if (!receivedItem || receivedItem.length === 0 || !receivedItem.data) {
        return <div className="h-[600px] flex items-center justify-center">
            <div className="flex flex-col items-center">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/5fafbb923393b712b96488590b8f781f.png" alt="" />
                <div>chưa có dơn hàng</div>
            </div>

        </div>;
    }
    // const datavalue = receivedItem.map(item => item.data)
    // console.log(datavalue)
    return (


        <div>




            {datavalue.map(item => (

                <div className="mb-[10px] bg-[#FFFFFF] p-[20px]">
                    <div className="flex justify-end py-[20px] border-b-[1px] border-[#E0E0E0]">
                        <span className="text-[#24AA99]">Đơn hàng đã được giao thành công</span>
                        <span className="px-[10px] text-[#E0E0E0]"> |</span>
                        <span className="text-[#EE4D2D]">HOÀN THÀNH</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="py-[20px] flex items-center">
                            <img className="h-[80px] w-[80px] mr-[10px]"
                                src={item.name.image} alt="" />
                            <span>{item.name.name}</span>
                        </div>
                        <div>
                            <span className="text-[#BDBDBD] line-through">
                                {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(item.thaoTac.Listedprice)}

                            </span>
                            <span className="text-[#EE4D2D] ml-[3px]">

                                {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(item.name.salePrice)}
                            </span>
                        </div>
                    </div>
                </div>


            ))}

        </div>


    );
}

export default Order;

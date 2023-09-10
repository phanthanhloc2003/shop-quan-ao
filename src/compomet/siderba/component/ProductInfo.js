import { Box } from "@mui/material";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductInfo({ data }) {
    return (
        <div>
            {data.map((item) => (
                <Box key={item.id}>
                    <div className="max-w-[41.5625rem]">
                        {item.like ? (
                            <div className="bg-[#EE4D2D] relative inline-flex text-[white] rounded-[3px] leading-none py-[2px] px-[4px] mr-[10px]">
                                {" "}
                                {item.like}
                            </div>
                        ) : (
                            ""
                        )}

                        <span className="font-medium text-[1.2rem] ">{item.name}</span>
                    </div>
                    <div className="mt-[10px]">
                        <span className="text-[#EE4D2D] hover:cursor-pointer">
                            {item.rating}
                        </span>
                        <span className="mx-[20px]"> |</span>
                        <span className="text-[#767676] hover:cursor-pointer">
                            Đánh Giá
                        </span>
                        <span className="mx-[20px]">|</span>
                        <span className="text-[#767676]">Đã Bán</span>
                    </div>
                    <Box bgcolor="#FAFAFA" marginTop={5}>
                        <div className="flex flex-col">
                            <div className="flex py-[15px] px-[20px] items-center">
                                <div className="line-through text-[#929292] mr-[20px]">
                                    {new Intl.NumberFormat("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    }).format(item.Listedprice)}
                                </div>
                                <div className="text-[#EE4D2D] text-[25px] font-medium">
                                    {new Intl.NumberFormat("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    }).format(item.originalPrice)}
                                </div>
                                {item.promotionPercent ? (
                                    <div className="bg-[#EE4D2D] text-[white] text-[12px] rounded-[3px] px-[5px] ml-[10px] py-[2px] font-semibold leading-none">
                                        {item.promotionPercent}
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </Box>

                    <div className="flex mt-[20px]">
                        <label className="w-[110px]">Vận chuyển</label>
                        <div>
                            <div className="flex">
                                <img
                                    className="h-[20px] mr-[5px]"
                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/d9e992985b18d96aab90969636ebfd0e.png"
                                    alt=""
                                />
                                <div>Miễn phí vận Chuyển</div>
                            </div>
                            <div className="flex mt-[10px]">
                                <div className=" mr-[5px]">
                                    <FontAwesomeIcon icon={faPlane} />
                                </div>
                                <div className="flex ">
                                    <div className="flex ">
                                        <div>vận chuyển từ</div>
                                        <div className="ml-[10px]">
                                            nước ngoài tới <span className="font-medium">Huyện ba vì</span>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </Box>
            ))}
        </div>
    );
}

export default ProductInfo;

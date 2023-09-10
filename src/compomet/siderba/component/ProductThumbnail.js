import { Box, Button } from "@mui/material";
import { useState } from "react";

function ProductThumbnail({ data }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageSelect = (image) => {
        setSelectedImage(image);
    };

    return (
        <div>
            <Box>
                {data.map((item) => (
                    <Box className="flex flex-col" key={item.id}>
                        <div className="">
                            <img className="" src={selectedImage || item.image} alt={item.name} />
                        </div>
                        <div className="flex mt-[10px]">
                            {item.imageList.map((image, index) => (
                                index < 4 && (
                                    <Button

                                        key={index}
                                        onClick={() => handleImageSelect(image)}
                                        className="mr-[10px] hover:border-[2px] hover:border-[#EE4D2D]"
                                    >
                                        <img src={image} width={85} alt={`Thumbnail ${index}`} />
                                    </Button>
                                )
                            ))}
                        </div>

                    </Box>
                ))}
            </Box>
        </div>
    );
}

export default ProductThumbnail;

import { Box } from "@mui/material";
import Listpage from "../../layout/ListPage";

function Siderba({searchParam}) {
  return (
    <Box pt={2}>
      <div className=" pb-[20px] ">
        <Listpage searchParam={searchParam} />
      </div>
    </Box>
  );
}

export default Siderba;

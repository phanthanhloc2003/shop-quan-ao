import { useState } from "react";
import Header from "../../compomet/Header";
import Footer from "../../compomet/footer";
import Siderba from "../../compomet/siderba";

function Homepage() {
  const [searchParam, setSearchParam] = useState("");
  const onClickSearch = function (params) {
    setSearchParam(params);
  
  };
  return (
    <div>
      <div>
        <Header onClickHeaderSearch={onClickSearch} />
      </div>
      <div>
        <Siderba searchParam={searchParam} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;

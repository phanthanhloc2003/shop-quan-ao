import Homepage from "./layout/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./layout/Login";
import Register from "./layout/Register";
import SinUp from "./layout/Sigup";
import Listpage from "./layout/ListPage";
import DetailPage from "./layout/DetailPage";
import CartFeature from "./layout/Cart";

function App() {
  return (
    <div className="bg-[#F4F4F4]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/login" element={<Login />}>
            <Route index element={<SinUp />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="listpage" element={<Listpage />} />
          <Route path="detail/:id" element={<DetailPage />} />
          <Route path="/cart" element={<CartFeature />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

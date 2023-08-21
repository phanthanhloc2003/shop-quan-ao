import Homepage from "./layout/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./layout/Login";
import Register from "./layout/Register"
import SinUp from "./layout/Sigup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />}>
            <Route index element={<SinUp />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

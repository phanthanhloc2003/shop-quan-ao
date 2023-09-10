import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../Auth/compoment/userSlice";
import RegisterPage from "../../compomet/loginPage/registerPage";

function Register() {

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const {enqueueSnackbar} = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      values.username = values.email;
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
     
      enqueueSnackbar('tạo tài khoản thành công🎉🎉', {variant: "success" , autoHideDuration: 3000} );

    Navigate("/login")

    } catch (error) {
      console.log("Failed to register : ", error);
      enqueueSnackbar(error.message, {variant: "error"});
    }
  };

  return (
    <div>
      {/* Truyền hàm handleSubmit làm prop onSubmit vào RegisterPage */}
      <RegisterPage onSubmitProp={handleSubmit} />
    </div>
  );
}

export default Register;

import React from "react";
import SigupPage from "../../compomet/loginPage/sigupPage";
import { unwrapResult } from "@reduxjs/toolkit";
import { login } from "../../Auth/compoment/userSlice";
import { useNavigate } from "react-router-dom";


import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

function SinUp() {

  
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const Navigate = useNavigate();
 

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      
      Navigate("/")

    } catch (error) {
      console.log("Failed to register : ", error);
      enqueueSnackbar(error.message, { variant: "error" ,autoHideDuration: 3000});
    }
  };

  return (
    <div>
      <SigupPage onSubmitProp={handleSubmit} />
    </div>
  );
}

export default SinUp;

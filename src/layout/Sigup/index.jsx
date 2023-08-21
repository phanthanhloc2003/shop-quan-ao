import React from "react";
import SigupPage from "../../compomet/loginPage/sigupPage";
import { unwrapResult } from "@reduxjs/toolkit";
import { login } from "../../Auth/compoment/userSlice";

import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

function SinUp() {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log("new user", user);
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

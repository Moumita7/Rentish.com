import axios from "axios";
import { setToast } from "../Utils/tost";
import * as data from "./actionTypes"

const signUp = (payload, toast, navigate) => (dispatch) => {
    dispatch({ type: data.SIGNUP_FAILURE });
    return axios
        .post("https://worrisome-tick-tights.cyclic.app/users/register", payload)
        .then((res) => {
            console.log(res)
            // setToast(toast, "Signup Successful", "success");
            setToast(toast, "Signup Successful", "success");

            dispatch({ type: data.SIGNUP_SUCCESS, payload: res.data });
            navigate("/login")
        })
        .catch((err) => {
            setToast(toast, err.response.data.message, "error");
            dispatch({ type: data.SIGNUP_FAILURE, payload: err });
        });
};

const LoginUser = (payload, toast, navigate) => (dispatch) => {
    dispatch({ type: data.LOGIN_REQUEST })
    return axios.post("https://worrisome-tick-tights.cyclic.app/users/login", payload).then((res) => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userId", res.data._id)
        setToast(toast, "Login Successfully", "success");
        dispatch({ type: data.LOGIN_SUCCESS, payload: res.data })
        // if (res.data.role === "Admin") {
        //     navigate("/admin")
        // } else {
        //     navigate("/")
        // }
            navigate("/")

    }).catch((err) => {
        setToast(toast, err.response.data.message, "error");
        dispatch({ type: data.LOGIN_FAILURE, payload: err });
    })
}
export { signUp, LoginUser }
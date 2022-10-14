import React from "react";
// import '../App.css'
import { useNavigate } from "react-router";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../assests/login.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { Api } from "../utils/Api";
import toast, { Toaster } from "react-hot-toast";
import FacebookLogin from 'react-facebook-login'
const Login = () => {
  const navigate = useNavigate();
  const [enterEmail, setEmail] = useState("");
  const [enterPassword, setPassword] = useState("");
  const [passErr, setPassErr] = useState(true);
  function loginHandle(e) {
    if (enterPassword.length < 3) {
      alert("type correct values");
    } else {
      alert("all good :)");
    }
    e.preventDefault();
    // localStorage.setItem("isAuth", false);
    navigate("/");
  }

  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  }
  function handleGoogleLogin(credentialResponse) {
    //console.log("credentailresponse",credentialResponse);
    let token = credentialResponse.credential;
    Api.post("/user/google", { token: token })
      .then((response) => {
        const { token } = response.data.result;
        let message = response?.data?.message;
        toast.success(`${message}`);
        localStorage.setItem("isAuth", token.accessToken);
        navigate("/");
      })
      .catch((error) => {
        let message = error?.response?.data?.message;
        toast.error(`${message}`);
      });
  }
  function responseFacebook(response){
    //console.log(response);
    let token = response.accessToken;

   // console.log("token------->", token);

    Api.post("/user/facebook", { token: token })
      .then((response) => {
        const { token } = response.data.result;
        
        let message = response?.data?.message;
        //console.log(message);
        toast.success(`${message}`);
        localStorage.setItem("isAuth", token.accessToken);
        navigate("/");
      })
      .catch((error) => {
        let message = error?.response?.data?.message;
        //console.log(message);
        toast.error(`${message}`);
      });
  }
function componentClicked(data){
  console.log(data);
}
  return (
    <div className="d-flex align-items-center justify-content-center ">
      <div className="login">
        <h1> Sign In</h1>
        <form action="" onSubmit={loginHandle}>
          <div className="mb-3">
            <label htmlFor="example" className="form-label fw-bold">
              Email Address:
            </label>
            <input
              required
              type="email"
              className="form-control"
              value={enterEmail}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              autoComplete="name@example.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="example" className="form-label fw-bold">
              Password:
            </label>
            <input
              value={enterPassword}
              onChange={passwordHandler}
              type="password"
              className="form-control"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
            {passErr ? (
              <small style={{ fontSize: "10px", color: "red" }}>
                Password Must Three Character Long
              </small>
            ) : (
              ""
            )}
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-success mt-2">
              Sign In
            </button>
          </div>
        </form>
        <GoogleOAuthProvider clientId="553456385681-t7rietli1kfjur0u68bgb29lub7ml7j0.apps.googleusercontent.com">
          <GoogleLogin
            size="medium"
            shape="pill"
            text="Sign in"
            onSuccess={handleGoogleLogin}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
        <div>
        <FacebookLogin
          appId="620463259563081"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          icon="fa-facebook"
        />
      </div>
      </div>
     
    </div>
  );
};

export default Login;

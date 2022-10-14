import { Navigate } from "react-router-dom";

const Private=({children})=>{
      const isAuth=localStorage.getItem("isAuth");
      console.log(isAuth);
    return isAuth? children: <Navigate to="/login"/>
}
export default Private;
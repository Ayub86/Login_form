import { Navigate } from "react-router-dom";

const privateRoute=({children})=>{
    const Auth=false;
    return Auth? children:<Navigate to="/"/>
}
export default privateRoute;
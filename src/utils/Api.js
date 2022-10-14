import axios from "axios";

export const Api=axios.create({
    baseURL: "https://whipz.herokuapp.com/api/v1/",
})

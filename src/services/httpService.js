import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
    if (error.response && error.response.status >= 400 && error.response.status < 500) {
        return Promise.reject(error);
    }
    console.log(error);
    toast.error("Unexpected error ocurred!");
    return Promise.reject(error);
});

function setJwt(jwt) {
    axios.defaults.headers.common["x-auth-token"] = jwt;
}

const exportedFunctionsHttp = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt,
};

export default exportedFunctionsHttp;

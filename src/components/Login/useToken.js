
import { useState } from "react";

//Source: https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications?fbclid=IwAR2y4l2yBvpOauFUEiDdHZho_a-fYX0bwlhNwei_j4iIm-fq3EVRsf3vJ5s

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem("token");
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };

    const [token, setToken] = useState(getToken);

    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken.token));
        setToken(userToken.token);
    };

    return {
        setToken:saveToken,
        token
    }
}
import { func } from "prop-types";
import { useState } from "react";
/*Inspiration to comming from: https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications?fbclid=IwAR2y4l2yBvpOauFUEiDdHZho_a-fYX0bwlhNwei_j4iIm-fq3EVRsf3vJ5s
 */

export default function useUserId() {

    const getUserId = () => {
        const userIdString = sessionStorage.getItem("userId");
        const userId = JSON.parse(userIdString);
        return userId?.userId
    };

    const [userId, setUserId] = useState(getUserId);

    const saveUserId = userToken => {
        sessionStorage.setItem('userId', JSON.stringify(userToken.user_id[0].User_Id))
        console.log(userToken.user_id[0].User_Id);
        setUserId(userToken.user_id[0].User_Id);
    };

    return {
        setUserId:saveUserId,
        userId
    }
}
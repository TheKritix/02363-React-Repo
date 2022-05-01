import React from "react";
import CreateProducts from "../components/CreateProducts/CreateProducts";
import Login from "../components/Login/Login";
import useUserId from '../components/Login/useUserId';
import useToken from '../components/Login/useToken';

function CreateProductPage() {

    const {token, setToken} = useToken();
    const {userId, setUserId} = useUserId();
  

  if (window.sessionStorage.getItem("token")) {
    return (
      <>
        <CreateProducts />
      </>
    );
  } else {
    return (
      <>
        <Login setToken={setToken} setUserId={setUserId}/> 
      </>
    );
  }
}

export default CreateProductPage;

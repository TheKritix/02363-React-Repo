import React from "react";
import Topbar from "../components/Topbar/Topbar";
import Navbar from "../components/Navbar/Navbar";
import Profil from "../components/Profile/Profile";
import Menu from "../components/Profile/ProfilMenu/ProfileMenu";
import Favorit from "../components/Favorit/Favorit";

function FavoritPage() {
  return (
    <>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <Profil></Profil>
      <Menu></Menu>
      <Favorit></Favorit>
    </>
  );
}

export default FavoritPage;

import React from "react";
import Profil from "../components/Profile/Profile";
import Menu from "../components/Profile/ProfilMenu/ProfileMenu";
import Favorit from "../components/Favorit/Favorit";

function FavoritPage() {
  return (
    <>
      <Profil></Profil>
      <Menu></Menu>
      <Favorit></Favorit>
    </>
  );
}

export default FavoritPage;

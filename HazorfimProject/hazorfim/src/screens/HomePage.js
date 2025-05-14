import React from "react";
import ChangePictures from "../components/HomePage/ChangePictures";
import Buttom from "../components/HomePage/Buttom";
import HomePageCat from "../components/HomePage/HomePageCat";
import Collections from "../components/HomePage/Collections";

const HomePage=()=>{
return(
    <>
    <ChangePictures></ChangePictures>
    <HomePageCat></HomePageCat>
    <Collections></Collections>
    <Buttom></Buttom>
    </>
);
}
export default HomePage;
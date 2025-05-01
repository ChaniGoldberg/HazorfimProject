import React from "react";
import Logo from "../nav2/components/Logo";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
const CategoryPage = () => {
    const location = useLocation();
    // const [pathName, setPathName] = useState(null);
    // useEffect(() => {
    //     if (location) {
    //         let tmp = location.pathName.slice(location.pathName.lastIndexOf("/"), location.pathName.length);
    //         setPathName(tmp);
    //     }
    // }, [location])
    return (
        <>
          <h1>hugyuijo</h1>
        </>
    )
}
export default CategoryPage;
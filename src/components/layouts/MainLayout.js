import Header from "../ui/common/Header";
import Footer from "../ui/common/Footer";
import {Outlet} from "react-router-dom";

export default function MainLayout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
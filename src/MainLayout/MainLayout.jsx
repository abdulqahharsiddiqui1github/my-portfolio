import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="mx-16">
            <Navbar></Navbar>
            <Outlet></Outlet>     
        </div>
    );
};

export default MainLayout;
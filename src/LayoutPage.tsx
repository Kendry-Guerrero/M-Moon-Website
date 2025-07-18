import { Outlet } from "react-router";
import { Navbar } from "./components/NavbarFolder/Navbar";
import { Footer } from "./components/FooterFolder/Footer";



export const LayoutPage = () => {


    return (


        <div>
            <Navbar />

            <Outlet />

            <Footer />

        </div>
    );
}
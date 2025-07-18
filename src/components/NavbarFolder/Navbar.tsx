import { NavLink } from "react-router";
import "./NavbarStyles.css";
import { MobileMenu } from "../MobileMenuFolder/MobileMenu";
import { DesktopMenu } from "../DesktopMenuFolder/DesktopMenu";
import { useState, useEffect } from "react";




export const Navbar = () => {
    const [vwWidth, setVwWidth] = useState<number>(window.innerWidth);//Setting the initial viewPort width
    const [loadMobile, setLoadMobile] = useState<boolean>(false); //bool to check the mobile menu has to load


    //Every time the page is re -render I'm checking the viewport width
    useEffect(()=>{

        const handleVwResize = ()=>{
            setVwWidth(window.innerWidth);
        }
        window.addEventListener('resize',handleVwResize);
        return () => window.removeEventListener('resize',handleVwResize);
    }, [])
    
    //handling the case when the viewport reaches the desire width to load the mobile component
    useEffect(()=>{
        if(vwWidth <=715){
            setLoadMobile(true);
            console.log('change to mobile: ' + loadMobile);
        }else{
            setLoadMobile(false);
            console.log('change to mobile: ' + loadMobile);

        }
    }, [vwWidth])




    return (


        <nav>
            <NavLink to="/" className= "home-btn" id="page-btn">
            Moon Author
                {/* <h1 className="home-btn-txt" >
                    
                </h1> */}
             
            </NavLink>

            <div className="menu-cont">
                {(loadMobile) ? <MobileMenu/> : <DesktopMenu/> }
            </div>
        </nav >



    );
}
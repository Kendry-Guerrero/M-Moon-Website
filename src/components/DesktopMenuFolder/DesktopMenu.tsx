import "./DesktopMenuStyles.css"
import { NavLink } from "react-router";
import { motion } from 'motion/react'
export const DesktopMenu = ()=>{

    //Checking if the route matches the page on the screen and applying the correct style in css by changing the class
    const activeRoute = (isActive:boolean) =>{
        return isActive ? 'current-route': 'desktop-btn-text';
    }
    return(
        
                 <ul className="desktop-btn-cont" >

                    <NavLink className={({isActive}) => activeRoute(isActive)} id= "page-btn" to="/about" > <motion.li
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    >Autora</motion.li></NavLink>
                    <NavLink className={({isActive}) => activeRoute(isActive)} id="page-btn" to="/faqs" > <motion.li
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    >Faqs</motion.li></NavLink>
                    <NavLink className={({isActive}) => activeRoute(isActive)} id= "page-btn" to="/writings" > <motion.li
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    >Escritos</motion.li></NavLink>
                     <NavLink className={({isActive}) => activeRoute(isActive)} id= "page-btn" to="/books" > <motion.li
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    >Libros</motion.li></NavLink>
                     <NavLink className={({isActive}) => activeRoute(isActive)} id= "page-btn" to="/contact" > <motion.li
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    >Contacto</motion.li></NavLink>
                
                 
                </ul>
    
    )
}
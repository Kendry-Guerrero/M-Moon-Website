import { motion } from 'motion/react'
import { NavLink } from "react-router";

import "./MenuModalStyles.css";
interface MenuModalProps {
    show:boolean;
    onClose: () => void;
    
}
export const MenuModal = ({ show, onClose, }: MenuModalProps) => {

    //If the variable is false don't render the component
    console.log("modal show: " + show);
     if (!show) {

       
        return null;
    }
    
    
    return (
        <div className="modal-overlay">
                     <ul className="page-btn-cont" >

                    <NavLink className="page-btn-text" id= "page-btn" to="/" onClick={onClose} > <motion.li
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                    >Inicio</motion.li></NavLink>
                    <NavLink className="page-btn-text" id= "page-btn" to="/about" onClick={onClose} > <motion.li
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                    >Autora</motion.li></NavLink>
                    <NavLink className="page-btn-text" id="page-btn" to="/faqs" onClick={onClose} > <motion.li
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                    >Faqs</motion.li></NavLink>
                    <NavLink className="page-btn-text" id= "page-btn" to="/writings" onClick={onClose} > <motion.li
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                    >Escritos</motion.li></NavLink>
                     <NavLink className="page-btn-text" id= "page-btn" to="/books" onClick={onClose} > <motion.li
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                    >Libros</motion.li></NavLink>
             
                     <NavLink className="page-btn-text" id= "page-btn" to="/contact" onClick={onClose} > <motion.li
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                    >Contacto</motion.li></NavLink>
             
                 
                </ul>
        </div>
    )
}
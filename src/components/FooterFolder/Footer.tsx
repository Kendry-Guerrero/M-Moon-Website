import "./FooterStyles.css"
import { motion } from 'motion/react'

export const Footer = () => {
    return (
        <div className="footer-cont">
            <ul className="footer-btn-cont">

                <motion.li
                    whileTap={{ scale: 0.9 }} whileHover={{scale:1.1}}>
                    <a className="btn" id="footer-btn2">TikTok </a>
                </motion.li>
                <motion.li

                    whileTap={{ scale: 0.9 }} whileHover={{scale:1.1}}>
                    <a className="btn" id="footer-btn3">Instagram </a>
                </motion.li>
                <motion.li

                    whileTap={{ scale: 0.9 }} whileHover={{scale:1.1}}>
                    <a className="btn" id="footer-btn4">Wattpad </a>
                </motion.li>
                 <motion.li

                    whileTap={{ scale: 0.9 }} whileHover={{scale:1.1}}>
                    <a className="btn" id="footer-btn5">Amazon</a>
                </motion.li>
            </ul>

        </div>
    );
}
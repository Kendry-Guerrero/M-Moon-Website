import './ContactPageStyles.css'
import Transition from '../../animations/PageTransition'
import { NavLink } from "react-router";

export const ContactPage = () => {
    return (

        <Transition>
            <section className="contact-page-cont">
                <p style={{ color: 'var(--secondary-accent-text-color)' }}> Para consultas comerciales,
                    incluidos derechos de traducción literaria y extranjera,
                    enviar un email a esta dirección: email@email.com</p>

                <p style={{ color: 'var(--secondary-accent-text-color)', borderBottom: 'none' }} >Si tienes alguna duda, por favor consulta la página de: {' '}
                    <NavLink to="/faqs"
                    style={{ color: '#FF6E40', textDecoration: 'none' }}
                    >
                     preguntas frecuentes
                    </NavLink>
                    
                    </p>
                    
                <p style={{ color: 'var(--secondary-accent-text-color)' }}> Para contactar a M.Moon sobre cualquier otro asunto,
                    envía un correo con el asunto,
                    tu nombre y la razón por la que preguntas al siguiente email: {' '} 
                    
                    <span style={{color: '#FF6E40'}}>

                    email2@email.com
                    </span>
                    
                    </p>
                <h3 style={{ color: 'var(--primary-accent-text-color)' }}>Redes Sociales</h3>
                <ul style={{ color: 'var(--secondary-accent-text-color)' }}>
                    <li>Tiktok</li>
                    <li>Instagram</li>
                    <li>Página de autor de amazon</li>


                </ul>

            </section>

        </Transition>

    )
}
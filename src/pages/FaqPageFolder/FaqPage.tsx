import "./FaqPageStyle.css"
import { faqs } from "../../constants/Index";
import Transition from "../../animations/PageTransition";



export const FaqPage = () => {


    return (

        <Transition>
            <section className="faq-page-cont">
                <ul className="questions-list-cont">

                    {faqs.map((faq, index) => (
                        <li className="question-cont" key={index}>
                            <h3 className="question">{faq.quesstion}</h3>
                            <p> {faq.asnwer}</p>
                        </li>
                    ))}
                </ul>




            </section>

        </Transition>





    );
}
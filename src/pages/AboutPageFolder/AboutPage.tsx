import "./AboutPageStyles.css"
import Transition from "../../animations/PageTransition";
export const AboutPage = () => {
    return (

        <Transition>
            <section className="about-page-cont">
                <article className="abou-author-cont">
                    <h2 className="about-author-title">
                        M.Moon
                    </h2>
                    <p className="about-author-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam, sed pariatur animi sapiente expedita vel ipsa tempora
                        labore similique ipsum possimus repellendus culpa necessitatibus sit adipisci?
                        Voluptas maxime atque delectus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam, sed pariatur animi sapiente expedita vel ipsa tempora
                        labore similique ipsum possimus repellendus culpa necessitatibus sit adipisci?
                        Voluptas maxime atque delectus?
                    </p>


                </article>
                <article className="about-person-cont">
                    <h2 className="about-person-title">
                        ¿Y... cuándo no estoy escribiendo?
                    </h2>
                    <div className="about-person-list-cont">
                        <ul id="list-cont">
                            <li className="about-person-fact">Algo que escribir sobre ella aqu 1</li>
                            <li className="about-person-fact">Algo que escribir sobre ella aqu 2</li>
                            <li className="about-person-fact">Algo que escribir sobre ella aqu 3</li>
                            <li className="about-person-fact">Algo que escribir sobre ella aqu 4</li>
                            <li className="about-person-fact">Algo que escribir sobre ella aqu 5</li>
                            <li className="about-person-fact">Algo que escribir sobre ella aqu 6</li>
                            <li className="about-person-fact">Algo que escribir sobre ella aqu 7</li>
                            <li className="about-person-fact">Algo que escribir sobre ella aqu 8</li>
                            <li className="about-person-fact">Algo que escribir sobre ella aqu 9</li>
                            <li className="about-person-fact">Algo que escribir sobre ella aqu 10</li>
                            <li className="about-person-fact">Algo que escribir sobre ella aqu 11</li>
                            <li className="about-person-fact">Algo que escribir sobre ella aqu 12</li>

                        </ul>

                    </div>

                </article>

            </section>


        </Transition>

    );
}
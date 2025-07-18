import { useState } from 'react';
import './WritingPageStyle.css'
import { writings } from '../../constants/Index';
import Transition from "../../animations/PageTransition";

export const WritingsPage = () => {

    //VARIABLES
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    //FUNCTIONS
    const toggleWriting = (i: number) => {
        if (selectedItem == i) {
            return setSelectedItem(null);
        }
        setSelectedItem(i);

    }

    return (

        <Transition>
            <section className="writings-page-cont">

                <ul className="writings-list-cont">

                    {writings.map((writing, index) => (

                        <li className='writing-cont' key={index} >
                            <div className='writing-title-cont'>
                                <h3 className='writing-title' onClick={() => toggleWriting(index)}> {writing.title}</h3>
                                <span className='material-symbols-outlined' onClick={() => toggleWriting(index)}>
                                    {selectedItem == index ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
                                </span>
                            </div>
                            <div className={selectedItem == index ? 'desc-cont active' : 'desc-cont'}>
                                <p className='desc' >{writing.desc}</p>
                            </div>


                        </li>
                    ))}


                </ul>


            </section>


        </Transition>

    );
}
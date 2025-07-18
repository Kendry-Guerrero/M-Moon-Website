import './BooksPageStyles.css'
import { books } from '../../constants/Index'
import {motion, scale} from 'motion/react'
import Transition from '../../animations/PageTransition'
export const BooksPage = () => {
    return (

        <Transition>

           <section className='books-page-cont'>
                <div className='saga-cont'>
                    <h2 className='saga-title'> Saga El color del Pecado</h2>
                    <h4 className='reading-order-txt'> In reading order</h4>
                </div>

                <ul className='saga-books-cont'>

                    {books.map((book, index) => (


                        <li className='saga-book-cont' key={index}>
                            <div className='saga-book-cover-cont'>
                                <img className='saga-book-cover' src={book.img} alt='Book Cover' />
                            </div>

                            <div className='saga-book-info-cont'>
                                <p className='saga-book-desc'> {book.desc}</p>

                                <div>
                                    <p className='tropes'>{book.tropes}</p>
                                    <div>

                                        <motion.button
                                        whileHover={{scale: 1.05}}
                                        whileTap={{scale:0.95}}
                                        
                                        className='buy-book-normal'>Edición Normal</motion.button>
                                        <motion.button
                                        whileHover={{scale: 1.05}}
                                        whileTap={{scale:0.95}}
                                        
                                        className='buy-book-special'>Edición Especial</motion.button>
                                    </div>
                                </div>

                                {(book.editing) &&

                                    <p className="book-progress-bar" > 9,000/15,000 palabras | Editando </p>


                                }
                            </div>
                        </li>

                    ))}


                </ul>

            </section>

        </Transition>
         




    )
}
import "./HomePageStyle.css";
import { books } from "../../constants/Index";
import { useState } from "react";
import { motion } from 'motion/react'
import Transition from "../../animations/PageTransition";



export const HomePage = () => {

  //VARIABLE
  const [selectedBook, setSelectedBook] = useState<number>(0); // Variable to check the current book info that it is being displayed
  const [isAnimating, setIsAnimating] = useState<boolean>(false); // Variable to check if the animation has finished to load the new book
  const [bookSrc, setBookSrc] = useState<string>(books[0].img); //Variable to hold the src path

  //FUNCTIONS

  //Playing animation and waiting before the src is changed
  const handleImgAnimation = (n: number) => {

    setIsAnimating(true);
    console.log('Animation started. Book: ' + selectedBook);


    setTimeout(() => {
      setSelectedBook((prev) => {
        const newIndex: number = Math.min(Math.max(prev + n, 0), books.length -1);        
        // const newIndex:number = prev + n;
        setBookSrc(() => books[newIndex].img);
        console.log("Animation finished. Current book: " + newIndex);
        return newIndex;
      });

      setIsAnimating(false);
    }, 700)
  }


  const changeBookUp = () => {

    if (selectedBook == 2) {
      console.log('Last book cant go further: ' + selectedBook);
      return;
    }
    handleImgAnimation(1);

  }
  const changeBookDown = () => {


    if (selectedBook == 0) {
      console.log('First book, cant go lower: ' + selectedBook);
      return;
    }
    handleImgAnimation(-1);

  }


  return (
    <Transition>



      <section className="homepage-cont">
        <article className="homepage-desc-cont">
          <h2 className="book-title"> {books[selectedBook].title}</h2>
          <p className="book-desc">{books[selectedBook].desc}</p>
          <div className="shop-btns-cont">
            <motion.button
              className="normal-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >Normal edition</motion.button>
            <motion.button
              className="special-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >Special edition</motion.button>
          </div>
        </article>
        <article className="carousel-cont">
          <div className="showcase-book-img-cont">
            <motion.img
              className="showcase-book-img"
              key={bookSrc}
              src={bookSrc}
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: isAnimating ? -500 : 0, opacity: isAnimating ? 0 : 1 }}
              exit={{ x: -500, opacity: 0 }}
              transition={{ duration: 0.7 }}
              alt="Poner que es la portada del nimbro con el nombre" />

            {(books[selectedBook].editing) &&

              <p className="progress-bar" > 9,000/15,000 palabras | Editando </p>


            }
          </div>
          <div className="nav-btns-cont">
            <motion.button
              className="nav-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={changeBookDown}
              disabled={isAnimating}> 
            <span className="material-symbols-outlined">
                chevron_left
              </span></motion.button>
            <motion.button
              className="nav-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={changeBookUp}
              disabled={isAnimating}> <span className="material-symbols-outlined">
                chevron_right
              </span></motion.button>
          </div>
          <div className="shop-btns-cont-mobile">
            <motion.button
              className="normal-btn-mobile"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >Normal edition</motion.button>
            <motion.button
              className="special-btn-mobile"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >Special edition</motion.button>

          </div>
        </article>
      </section>


    </Transition>




  );
}
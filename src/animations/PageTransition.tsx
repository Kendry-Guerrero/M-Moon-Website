import { motion } from 'motion/react';
import { ReactNode } from 'react';
import './PageTransition.css'

type Props = {
    children: ReactNode
}

//Custom component to handle the page transitions when the user navigates between pages
export default function Transition({ children }: Props) {
    return (
        <>

            <motion.div
                className='slide-in'
                initial={{x: -300}}
                animate={{ x:  0 }}
                exit={{ x: 0 }}
                transition={{  duration: 1.1, bounce: 0.6}}
            >
                {children}
            </motion.div>
            <motion.div
                className='slide-out'
                initial={{ x: 0  }}
                animate={{ x: 2000  }}
                exit={{ x: 0 }}
                transition={{ duration: 1.1, bounce: 0.2 }}
            >
                
            </motion.div>
            

        </>



    )
}
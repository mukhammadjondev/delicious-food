import Veggie from '../components/veggie'
import Popular from '../components/popular'
import { AnimatePresence, motion } from 'framer-motion'

function Home() {
  return (
    <AnimatePresence>
      <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 0.5}}>
        <Veggie />
        <Popular />
      </motion.div>
    </AnimatePresence>
  )
}

export default Home
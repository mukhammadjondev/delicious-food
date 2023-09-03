import { AnimatePresence, motion } from 'framer-motion'
import TopFoods from '../components/top-foods'

function Home() {
  return (
    <AnimatePresence>
      <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 0.5}}>
        <TopFoods type={'veggie'} />
        <TopFoods type={'popular'} />
      </motion.div>
    </AnimatePresence>
  )
}

export default Home
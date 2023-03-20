import Faq from '../components/FAQ/Faq';
import Layout from "../components/Layout"
import { motion , easeInOut } from 'framer-motion';
// About Page
 function about() {
  return (
    <Layout title="Foods" contain={
      <motion.div initial={{x:-400 , y:-400 , opacity:0}}
                    animate={{x:0 , y:0 , opacity:1}}
                    transition={{type:'spring' , duration:1 , ease:easeInOut}}
                    end={{x:-400 , y:-400 , opacity:0}}>
      <Faq />
      </motion.div>} />
  )
}
export default about
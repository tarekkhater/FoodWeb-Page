import Header from "../components/Foods/Header"
import { useState } from "react-redux"
import Form from "../components/Foods/Form"
import Layout from "../components/Layout"
import { motion , easeInOut } from 'framer-motion';
//Help Page

function help() {
  
    return (
      <Layout title='Foods' contain={
        <motion.div initial={{x:-400 , y:-400 , opacity:0}}
                    animate={{x:0 , y:0 , opacity:1}}
                    transition={{type:'spring' , duration:1 , ease:easeInOut}}
                    end={{x:-400 , y:-400 , opacity:0}}>
          <Header />
          </motion.div>
      }/>
    )
  }
  export default help
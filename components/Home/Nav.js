import React from 'react'
import Link from 'next/link';
import styles from '../../styles/Nav.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import Image from 'next/dist/client/image';
import img from '../../images/logo.png';
import { motion , easeInOut } from 'framer-motion';
export default function Nav() {
  const variants ={
    hover:{scale:1.2 , originX:0 ,
      translation:{type:'spring' , stiffness:300}
    }
  }
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
    },[])
  return (
    <>
        <nav className="navbar navbar-expand-lg " id={styles.container} >
  <div className="container-fluid" id={styles.contain}>
    <motion.div initial={{y:-200 , x:-200 , opacity:0}}
    animate={{x:0 , y:0 , opacity:1}}
    transition={{type:'spring' , delay:1.2}}>
    <Image src={img} alt="" height="80px" width="150px" />
    </motion.div> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" 
    >
      <motion.ul className="navbar-nav me-auto mb-2 mb-lg-0" initial={{x:100 , y:-100 , opacity:0}}
    animate={{x:0 , y:0 , opacity:1}}
    transition={{type:'spring' , duration:1 , delay:0.3 , ease:'ease-in-out'}}>
        <motion.li className="nav-item" id={styles.links} variants={variants} whileHover='hover'>
          <Link className="nav-link active" aria-current="page" href="/">Home </Link>
        </motion.li>
        <motion.li className="nav-item" id={styles.links} variants={variants} whileHover='hover'>
          <Link className="nav-link" href="/foods" variants={variants} whileHover='hover'>Explore Foods</Link>
        </motion.li>
        <motion.li className="nav-item" id={styles.links} variants={variants} whileHover='hover'>
          <Link className="nav-link" href="/faq">FAQ</Link>
        </motion.li>
        <motion.li className="nav-item" id={styles.links} variants={variants} whileHover='hover'>
          <Link className="nav-link" href="/#footer2">Contact</Link>
        </motion.li>
      </motion.ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

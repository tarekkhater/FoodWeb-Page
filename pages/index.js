import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import img from '../images/2.jpg';
import Header from '../components/Home/Header';
import Row from '../components/Home/Row';
import Div from '../components/Home/Div';
import Div2 from '../components/Home/Div2';
import Div3 from '../components/Home/Div3';
import Craousel from '../components/Home/Craousel';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import { motion , easeInOut } from 'framer-motion';
export default function Home() {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
    <Layout title="Home" contain={
    <div>
      <div  id={styles.header}>  <Header /></div>
      <div  id={styles.row}> <Row /></div>
      <div  id={styles.div1}> <Div /></div>
      <div  id={styles.div2}> <Div2 /></div>
      <div  id={styles.div3}> <Div3 /></div>
      <div  id={styles.craousel}>  <Craousel /></div>
    </div>
    }/>
      
  )
}

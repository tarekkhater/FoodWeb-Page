import React from 'react'
import Nav from './Home/Nav';
import styles from '../styles/Home.module.css'
import Head from 'next/head';
import Link from 'next/link';
import Footer from './Home/Footer';
export default function Layout({title , contain}) {
    
  return (
    <div className={styles.container}>
        <Head>
            <title>{title ? title + ' - Foodera' : 'Foodera'}</title>
            <meta name="description" content="Foodera Website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Nav />
        </header>
        <main className={styles.main}>
            {contain}
        </main>
        <footer >
            <Footer />
            
        </footer>
    </div>
  )
}

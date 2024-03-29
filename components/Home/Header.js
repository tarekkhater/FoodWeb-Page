import React, { Component, Fragment } from 'react';
import styles from '../../styles/Header.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';

function Header(){
    return(
        <Fragment >
            <div className={styles.header}>
             <div className={styles.text}>
                    <p className={styles.txttt}>Good food choices are good investments.</p> 
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</span>
                    </div>
                    <br/><br/>
                    <button className={styles.btn1}><Link href="/foods">Order Now  &nbsp;</Link> <span className="bi bi-cart4"></span></button>
                    <button className={styles.btn2}><Link href='/faq'>Learn More &nbsp;</Link><i className="bi bi-chevron-right"></i></button>
             </div>
            </Fragment>
        )
    
}
export default Header;
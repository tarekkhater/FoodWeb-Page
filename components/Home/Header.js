import React, { Component, Fragment } from 'react';
import styles from '../../styles/Header.module.css';
import 'bootstrap/dist/css/bootstrap.css';

function Header(){
    return(
        <Fragment >
            <div className={styles.header}>
            <div className={styles.head}>
            <div className={styles.headImg}>
            </div> 
             <div className={styles.text}>
                    <p className={styles.txttt}>Good food choices are good investments.</p> 
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</span>
                    <br/><br/>
                    <button className={styles.btn1}><a href="/foods">Order Now  &nbsp;<span className="bi bi-cart4"></span></a></button>
                    <button className={styles.btn2}><a href='/faq'>Learn More &nbsp;<i className="bi bi-chevron-right"></i></a></button>
             </div>
             </div>
             </div>
            </Fragment>
        )
    
}
export default Header;
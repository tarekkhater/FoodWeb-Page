import React, { Component, Fragment } from 'react';
import styles from '../../styles/Div.module.css';


function Div(){
     return(
         <Fragment >
            <div className={styles.Div1}>
                <div className={styles.image}>
                </div>
               <div className={styles.text1}>
                    <p className={styles.txet1}>We pride ourselves on making real food from the best ingredients.</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</span>
                    <br/><button className={styles.btn1} ><a href='/faq'>Learn More &nbsp;<i className="bi bi-chevron-right"></i></a></button>
               </div>
            </div>
        </Fragment>
     )
}
export default Div;
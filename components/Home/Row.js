import React, { Component, Fragment } from 'react';
import styles from '../../styles/Row.module.css';


function Row(){
        return(
            <Fragment >
                <div className={styles.rows}>
                   
                        
                            <div>
                                <p className={styles.headRow}>1287+</p>
                                <p className={styles.names}>SAVINGS</p>
                            </div>
                            <div>
                                <p className={styles.headRow}>5786+</p>
                                <p className={styles.names}>PHOTOS</p>
                            </div>
                            <div>
                                <p className={styles.headRow}>1440+</p>
                                <p className={styles.names}>ROCKETS</p>
                            </div>
                            <div>
                                <p className={styles.headRow}>7110+</p>
                                <p className={styles.names}>GLOBES</p>
                            </div>
                        
                    
                 </div>
            </Fragment>
        )
}
export default Row;
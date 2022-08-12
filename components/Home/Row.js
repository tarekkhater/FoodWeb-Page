import React, { Component, Fragment } from 'react';
import styles from '../../styles/Row.module.css';


function Row(){
        return(
            <Fragment >
                <div className={styles.rows}>
                    <table>
                        <tr>
                            <td>
                                <p className={styles.headRow}>1287+</p>
                                <p className={styles.names}>SAVINGS</p>
                            </td>
                            <td>
                                <p className={styles.headRow}>5786+</p>
                                <p className={styles.names}>PHOTOS</p>
                            </td>
                            <td>
                                <p className={styles.headRow}>1440+</p>
                                <p className={styles.names}>ROCKETS</p>
                            </td>
                            <td>
                                <p className={styles.headRow}>7110+</p>
                                <p className={styles.names}>GLOBES</p>
                            </td>
                        </tr>
                    </table>
                 </div>
            </Fragment>
        )
}
export default Row;
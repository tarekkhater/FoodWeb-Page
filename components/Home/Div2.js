import React,{ Fragment} from 'react';
import styles from '../../styles/Div2.module.css';
import divImg from '../../images/2.png';
import Image from 'next/dist/client/image';
import Link from 'next/link';
function Div2(){
      return(
               <div className={styles.Div2}>
               <div className={styles.divTxt}>
                  <p className={styles.text}>We make everything by hand with the best possible ingredients.</p><br/><br/>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</span>
                  <ul>
                     <li>Etiam sed dolor ac diam volutpat.</li>
                     <li>Erat volutpat aliquet imperdiet.</li>
                     <li>purus a odio finibus bibendum.</li>
                  </ul>
                  <button className={styles.btn1} ><Link href='/faq'>Learn More &nbsp;</Link><i className="bi bi-chevron-right"></i></button>
                  </div>
               <div className={styles.divImg}>
                  <Image src={divImg} alt=""/> </div>
                  </div>

      )
}
export default Div2;
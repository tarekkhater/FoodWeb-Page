import React,{ Fragment} from 'react';
import styles from "../../styles/Div3.module.css";
import imgg1 from '../../images/01.jpg';
import imgg2 from '../../images/02.jpg';
import imgg3 from '../../images/03.jpg';
import Image from 'next/dist/client/image';
import Form from '../Foods/Form';
import Link from 'next/link';
class Div4 extends React.Component{
    render(){
        return(
            <Fragment >
                <div className={styles.Div3}>
                    <div className={styles.text}>
                <h1 className={styles.H1}>Explore Our Foods</h1>
                <p className={styles.P1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                    </div>
              <div className={styles.divimages}>
                <div className={styles.divv1}>
                    <Image src={imgg1} alt="" className={styles.imgg1} />
                    <h2>Rainbow Vegetable Sandwich</h2>
                    <p>Time: 15 - 20 Minutes | Serves: 1</p>
                    <span className={styles.rightPrice}> $10.50 </span><span className={styles.oldPrice}>  $11.70</span><br/>
                    <button className={styles.btn1} ><Link href='/foods'>Order Now </Link></button>
                </div>
                <div className={styles.divv2}>
                    <Image src={imgg2} alt=""  className={styles.imgg2} />
                    <h2>Vegetarian Burger Sandwich</h2>
                    <p>Time: 30 - 45 Minutes | Serves: 1</p>
                    <span className={styles.rightPrice}> $9.20 </span><span className={styles.oldPrice}>  $10.50</span><br/>
                    <button className={styles.btn1} ><Link href='/foods'>Order Now </Link></button>
                </div>
                <div className={styles.divv3}>
                    <Image src={imgg3} alt="" className={styles.imgg3} />
                    <h2>Raspberry Stuffed French Toast</h2>
                    <p>Time: 10 - 15 Minutes | Serves: 1</p>
                    <span className={styles.rightPrice}> $12.50 </span><span className={styles.oldPrice}>  $13.20</span><br/>
                    <button className={styles.btn1} ><Link href='/foods'>Order Now </Link></button>  
                </div>
                </div>
                </div>
            </Fragment>
        )
    }
}
export default Div4;
import React, { useState } from 'react'
import styles from '../../styles/HeaderFoods.module.css';
import item1 from '../../images/01.jpg';
import item2 from '../../images/02.jpg';
import item3 from '../../images/03.jpg';
import item4 from '../../images/04.jpg';
import item5 from '../../images/05.jpg';
import item6 from '../../images/06.jpg';
import item7 from '../../images/07.jpg';
import item8 from '../../images/08.jpg';
import item9 from '../../images/09.jpg';
import item10 from '../../images/10.jpg';
import item11 from '../../images/11.jpg';
import item12 from '../../images/12.jpg';
import Image from 'next/dist/client/image';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './Form';
 function Header() {
    
    const Products = () => {
        let [items, setItems] = useState( [
            { img :item1 , name:"Rainbow Vegetable Sandwich" , Time: "15 - 20 Minutes" , Service : 1 , rightPrice:'$10.50' , oldPrice:'$11.70'},
            { img :item2 , name:"Vegetarian Burger Sandwich" , Time: "15 - 20 Minutes" , Service : 1 , rightPrice:'$9.20' , oldPrice:'$10.50'},
            { img :item3 , name:"Raspberry Stuffed French " , Time: "20 - 30 Minutes" , Service : 1 , rightPrice:'$12.50' , oldPrice:'$13.20'},
            { img :item4 , name:"Summer Salad Sandwich" , Time: "15 - 20 Minutes" , Service : 1 , rightPrice:'$8.20' , oldPrice:'$9.50'},
            { img :item5 , name:"Fried Chicken Sandwich" , Time: "25 - 30 Minutes" , Service : 1 , rightPrice:'$10.20' , oldPrice:'$12.10'},
            { img :item6 , name:"Grilled Cheese Sandwich" , Time: "10 - 20 Minutes" , Service : 1 , rightPrice:'$7.50' , oldPrice:'$8.70'},
            { img :item7 , name:"Vegetarian Pan Banat Sandwich" , Time: "10 - 15 Minutes" , Service : 1 , rightPrice:'$7.50' , oldPrice:'$8.70'},
            { img :item8 , name:" Butter milk-Fried Chicken " , Time: "25 - 40 Minutes" , Service : 1 , rightPrice:'$10.20' , oldPrice:'$11.50'},
            { img :item9 , name:"RedHot Spicy Fried Chicken" , Time: "25 - 40 Minutes" , Service : 1 , rightPrice:'$11.50' , oldPrice:'$13.20'},
            { img :item10 , name:"Air-Fryer Fried Chicken" , Time: "20 - 30 Minutes" , Service : 1 , rightPrice:'$10.00' , oldPrice:'$11.20'},
            { img :item11 , name:"Hot-Crispy Fried Chicken" , Time: "15 - 20 Minutes" , Service : 1 , rightPrice:'$9.80' , oldPrice:'$10.50'},
            { img :item12 , name:"Southwest Fried Chicken " , Time: "25 - 30 Minutes" , Service : 1 , rightPrice:'$10.50' , oldPrice:'$12.00'},
       ]);
    
        return (
            setItems = items.map(item=>{
                return(
                    <div key={item.id} className={styles.item}>
                        <Image src={item.img} alt='' height='250px' width='250px' className={styles.image} />
                        <h2>{item.name}</h2>
                        <p>Time: {item.Time} || Service: {item.Service}</p>
                        <span className={styles.rightPrice}>{item.rightPrice}  </span>
                        <span className={styles.oldPrice}>  {item.oldPrice}</span><br />
                        <button className={styles.btn} onClick={() => setForm(false)} >Order Now</button>
                    </div>
                    
                )
            }
        )
        )
    };
   
    
        
          
        
const [form, setForm] = useState(true);
      
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
    },[])
  return (
    form?(<div className={styles.container}>
       
        <h1>Explore Our Foods</h1>
        <div className='container'>
         <div className='row' id={styles.products}>{Products()}</div>
        </div>
 
        
     </div>) : (<div>
        <Form />
        <div className={styles.container}>
       
       <h1>Explore Our Foods</h1>
       <div className='container'>
        <div className='row' id={styles.products}>{Products()}</div>
       </div>

       
    </div>
     </div>)
   
    
  )
}
export default Header;
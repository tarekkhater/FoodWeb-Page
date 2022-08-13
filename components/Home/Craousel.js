import React, { Fragment } from 'react';
import styles from '../../styles/Craousel.module.css'
import Image from "next/dist/client/image";
import img from '../../images/05.jpg'
import img2 from '../../images/06.jpg'
import img3 from '../../images/10.jpg';
function Craousel(){
   return(
    <Fragment >
      <div className={styles.carsoul}>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
  <div className="carousel-item active">
      <Image src={img} className="d-block w-100" alt="..."  height="450px" width="750px" align="center"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Fried Chicken Sandwich</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <Image src={img2} className="d-block w-100" alt="..."  height="450px" width="750px" align="center"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Grilled Cheese Sandwich</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <Image src={img3} className="d-block w-100" alt="..." height="450px" width="750px" align="center" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Air-Fryer Fried Chicken</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    </Fragment>
  )
}

export default Craousel;
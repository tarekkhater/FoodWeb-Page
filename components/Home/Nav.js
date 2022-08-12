import React from 'react'
import Link from 'next/link';
import styles from '../../styles/Nav.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import Image from 'next/dist/client/image';
import img from '../../images/logo.png';
export default function Nav() {
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
    },[])
  return (
    <div className={styles.container}>
        <nav className="navbar navbar-expand-lg bg-dark" >
  <div className="container-fluid" id={styles.contain}>
    <Image src={img} alt="" height="" width="" /> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" id={styles.links}>
          <Link className="nav-link active" aria-current="page" href="/">Home </Link>
        </li>
        <li className="nav-item" id={styles.links}>
          <Link className="nav-link" href="/foods">Explore Foods</Link>
        </li>
        <li className="nav-item" id={styles.links}>
          <Link className="nav-link" href="/faq">FAQ</Link>
        </li>
        <li className="nav-item" id={styles.links}>
          <Link className="nav-link" href="/#footer2">Contact</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

import React from 'react'
import Link from 'next/link';
import styles from '../../styles/Footer.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';


function Footer() {
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
    },[])
  return (
    <div>
    <footer className={styles.footer2} id="footer2">
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.textCenter}>
                        <Link href="/">Home</Link>
                        <Link  href="/foods">Foods</Link >
                        <Link  href="/faq">FAQ</Link >
                        <Link  href="/#footer2">Contact</Link >
                        
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
                    </div>
                    <div className={styles.footerSocial}>
                       <span> <Link  href="https://web.facebook.com/"  target="_blank"><i className="bi bi-facebook"></i></Link ></span>
                        <span><Link  href="https://twitter.com/?lang=en"  target="_blank"><i className="bi bi-twitter"></i></Link ></span>
                        <span><Link  href="https://www.youtube.com/"  target="_blank"><i className="bi bi-youtube"></i></Link ></span>
                        <span><Link  href="https://www.linkedin.com/"  target="_blank"><i className="bi bi-linkedin"></i></Link ></span>
                        <span><Link  href="https://www.instagram.com/"  target="_blank"><i className="bi bi-instagram"></i></Link ></span>
                    </div>
                </div>
            </div>
        </footer>
        <div className={styles.footercopy}>
            
                © 2021. Foods. All rights reserved.
            
        </div>
    </div>
  )
}
export default Footer;
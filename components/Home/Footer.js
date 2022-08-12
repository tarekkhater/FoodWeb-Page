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
                        <a href="/">Home</a>
                        <a href="/foods">Foods</a>
                        <a href="/faq">FAQ</a>
                        <a href="/#footer2">Contact</a>
                        
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
                    </div>
                    <div className={styles.footerSocial}>
                        <a href="https://web.facebook.com/" className="bi bi-facebook" target="_blank"></a>
                        <a href="https://twitter.com/?lang=en" className="bi bi-twitter" target="_blank"></a>
                        <a href="https://www.youtube.com/" className="bi bi-youtube" target="_blank"></a>
                        <a href="https://www.linkedin.com/" className="bi bi-linkedin" target="_blank"></a>
                        <a href="https://www.instagram.com/" className="bi bi-instagram" target="_blank"></a>
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
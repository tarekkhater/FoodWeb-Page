import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Nav from "../components/Home/Nav";

import { useEffect } from 'react';
import Footer from '../components/Home/Footer';
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return ( 
    <div>
  <Nav />
      <br/>
  <Component {...pageProps} />
 <Footer />
  </div>
  )
}

export default MyApp

import React from "react";
import styles from '../../styles/Form.module.css';
export default function Form() {
    
    
      
        
         
    
  return (
    <div className={styles.container}>    
        <form id={styles.form} className="row g-3 needs-validation" noValidate>
            <h1>Make Your Order Now!</h1>
          <div className="">
              <label htmlFor="validationCustom01" className="form-label">First name</label>
              <input type="text" className="form-control" id="validationCustom01"  required />
                <div className="valid-feedback">
                  Looks good!
                </div>
            </div>
            <div className="">
              <label htmlFor="validationCustom02" className="form-label">last name</label>
              <input type="text" className="form-control" id="validationCustom01"  required />
                <div className="valid-feedback">
                  Looks good!
                </div>
           </div>
           <div className="">
              <label htmlFor="validationCustomm" className="form-label">phone</label>
              <input type="phone" className="form-control" id="validationCustomm"  required />
                <div className="valid-feedback">
                  please put your mobile number
                </div>
           </div>
          <div className="">
            <label htmlFor="validationCustom03" className="form-label">Adress</label>
            <input type="text" className="form-control" id="validationCustom03" required  />
              <div className="invalid-feedback">
                Please provide a valid adress.
              </div>
          </div>
            <div className="">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                <label className="form-check-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
          </label>
             <div className="invalid-feedback">
                 You must agree before submitting.
             </div>
          </div>
        </div>
        <div className="">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
    
  )
}



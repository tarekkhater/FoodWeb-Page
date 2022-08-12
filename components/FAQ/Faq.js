import React from 'react'
import styles from '../../styles/Faq.module.css';
function Faq() {
  return (
    <div className={styles.container}>
      <div className={styles.Div}>
            <div className={styles.text}>
                <h3>Frequently Asked Questions </h3>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-6">
                    <div className="faq">
                        <h4> <span>~</span> Is Foodera Bread really baked fresh each day?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>

                <div className="col-md-6 col-sm-6">
                    <div className="faq">
                        <h4> <span>~</span> Do you bake breads containing animal fats or products?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <div className="faq">
                        <h4> <span>~</span> Can I order your products online?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <div className="faq">
                        <h4> <span>~</span> When are you opening a shop near me?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
            </div>
      </div>
    </div>
    </div>
  )
}
export default Faq;
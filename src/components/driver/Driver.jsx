import React from 'react'
import styles from './Driver.module.css'
import drive from '../../images/drive.png'

const Driver = () => {
  return (
    <div className={styles.driver}>
        <div className={styles.image}>
            <img src={drive} alt='/'/>
        </div>
        <div className={styles.text}>
            <h2>Find your perfect car <span>to try before you buy</span></h2>
            <p>Make sure your future wheels work well with your lifestyle by taking your time in the driver's seat.</p>
            <button>Browse cars</button>
        </div>
      
    </div>
  )
}

export default Driver

import React from 'react'
import styles from './Find.module.css'

const Card = ({image,name}) => {
  return (
    <div className={styles.card}>
        <img src={image} alt='/'/>
        <p>{name}</p>
      
    </div>
  )
}

export default Card

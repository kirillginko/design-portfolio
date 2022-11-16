import React from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image';

export default function About() {
  return (
    <>
    <div data-scroll data-scroll-section className={styles.container}>
      <div className={styles.span_container}>
      <span className={styles.span}>01/</span>
      </div>
      <div className={styles.about_container}>
      <h1 className={styles.about_title}>Creative</h1>
      <h1 className={styles.about_title}>Digital</h1>
      <h1 className={styles.about_title}>Designer</h1>
      </div>
        </div>
        <div className={styles.image_container} data-scroll data-scroll-section >
          <img  className={styles.image} src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1657828279/gradient_3_s9z3f6.png"data-scroll />
      </div>
      <div className={styles.location_container} data-scroll data-scroll-section>
        <h1 className={styles.location_title}>Based In NYC</h1>
        </div>
        <div className={styles.description_container} data-scroll data-scroll-section>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur molestiae maiores ipsum est ea doloremque repellendus! Vitae, minus quaerat!</h1>
        </div>
        </>
        
  )
}

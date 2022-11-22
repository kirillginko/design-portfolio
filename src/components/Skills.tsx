import React from 'react'
import styles from "../styles/Skills.module.css"

export default function Skills() {
  return (
    <>
        <div className={styles.container} data-scroll-section>
        <span className={styles.span}>02/</span>
        <h1 className={styles.title}>Services</h1>
        <div className={styles.skills_container}>
        <div className={styles.span_container}>
        <span className={styles.border}></span>
        </div>
        <div className={styles.description_container}>
        <span className={styles.letters}>(A)</span>
        <h2 className={styles.description1}>Front-end Development/ Engineering ←</h2>
        <h2 className={styles.description2}>✷ plan, design, build, test and maintain scalable front-end web applications.</h2>
        </div>
        <div className={styles.span_container2}>
        <span className={styles.border}></span>
        </div>
        <div className={styles.description_container}>
        <span className={styles.letters}>(B)</span>
        <h2 className={styles.description1}>Web Design/ Animation/ UX/UI ←</h2>
        <h2 className={styles.description2}>✷ design and create user friendly experiences using the latest tools in animation and web graphics.</h2>
        </div>
        <div className={styles.span_container2}>
        <span className={styles.border}></span>
        </div>
        <div className={styles.description_container}>
        <span className={styles.letters}>(C)</span>
        <h2 className={styles.description1}>Graphic Design/ Photography/ Video Creation ←</h2>
        <h2 className={styles.description2}>✷ create a strong brand identity through graphic design, photography, and video creation.</h2>
        </div>
        <div className={styles.span_container2}>
        <span className={styles.border}></span>
        </div>
    </div>
    </div>
    </>
  )
}

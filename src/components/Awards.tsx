import styles from '../styles/Awards.module.css'
import Award from "../components/Award"
export default function Awards() {
  return (
    <div className={styles.container} data-scroll-section >
        <span className={styles.span}>04/</span>
        <h1 className={styles.title}>Awards and Recognition</h1>
        <div className={styles.award_container}>
          <Award/>
        </div>
        </div>
  )
}

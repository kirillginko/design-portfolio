import styles from "../styles/Award.module.css"
export default function Award() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>WEBSITE</h2>
        <h2 className={styles.platform}>Award or Platform</h2>
        <h2 className={styles.year}>Year</h2>
        <span className={styles.span}></span>
        </div>
  )
}

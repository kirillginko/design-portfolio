import styles from "../styles/Award.module.css"
export default function Award({website, platform, year}) {
  return (
    <>
    <div className={styles.container}>
        <h2 className={styles.title}>{website}</h2>
        <h2 className={styles.platform}>{platform}</h2>
        <h2 className={styles.year}>{year}</h2>
        </div>
        <div className={styles.span_container}>
        <span className={styles.span}></span>
        </div>
    </>
  )
}

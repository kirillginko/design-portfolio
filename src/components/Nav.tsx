import styles from '../styles/Nav.module.css'

export default function Nav() {
  return (
    <>
        <div className={styles.container} data-scroll-section>
        <h1 className={styles.nav_name}>Kirill Ginko</h1>
        <h2 className={styles.nav_title1}>Currently Based in NYC</h2>
        <h2 className={styles.nav_title2}>Digital Designer and Developer</h2>
        </div>
    </>
  )
}

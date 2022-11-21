import styles from '../styles/Awards.module.css'
import Award from "../components/Award"
export default function Awards() {
  return (
    <div className={styles.container} data-scroll-section >
        <span className={styles.span}>04/</span>
        <h1 className={styles.title}>Awards and Recognition</h1>
        <div className={styles.award_container}>
          <Award website={"website"} platform={"Award or Platform"} year={"Year"}/>
        </div>
        <div className={styles.award_container2}>
          <Award website={"Kirill Ginko Portfolio"} platform={"Awwwards Site of the Day"} year={"2022"}/>
        </div>
        <div className={styles.award_container3}>
          <Award  website={"Kirill Ginko Portfolio"} platform={"Awwwards Developer Award"} year={"2022"}/>
        </div>
        <div className={styles.award_container4}>
          <Award  website={"Kirill Ginko Portfolio"} platform={"Awwwards Developer Award"} year={"2022"}/>
        </div>
        <div className={styles.award_container5}>
          <Award  website={"Kirill Ginko Portfolio"} platform={"FWA of the Day"} year={"2022"}/>
        </div>
        <div className={styles.award_container6}>
          <Award website={"Kirill Ginko Portfolio"} platform={"Godly"} year={"2022"}/>
        </div>
        <div className={styles.award_container7}>
          <Award website={"Kirill Ginko Portfolio"} platform={"Muzli Portfolio Design Inspiration"} year={"2022"}/>
        </div>
        </div>
  )
}

import Image from 'next/image'
import Project from "../images/infinite2.png"
import Project1 from "../images/infinite.png"
import Project2 from "../images/cmpnd.png"
import styles from '../styles/Projects.module.css'

export default function Projects() {
  return (
    <div data-scroll-section className={styles.container}>
        <span className={styles.span}>03/</span>
        <h1 className={styles.title}>Recent Work</h1>
        <h2 className={styles.genre}>(✷)Web Design/ Front-End/ UX/UI</h2>
        <div className={styles.img}>
          <a href="https://art-infinite-3abd8.web.app/" className={styles.img}>
          <Image src={Project}/>
          </a>
        </div>
        <div className={styles.img2}>
          <a href="https://www.cmpndgroup.com/" className={styles.img2}>
          <Image src={Project2}/>
          </a>
        </div>
        <div className={styles.img3}>
          <a href="https://music-player-be63c.web.app/" className={styles.img3}>
          <Image src={Project1}/>
          </a>
        </div>
        <a href="https://art-infinite-3abd8.web.app/" className={styles.description}>
        <h2 className={styles.description}>➔ Infinite Gallery is a infinitely generating art gallery in collaboration with the Art Institute of Chicago archives.</h2>
        </a>
        <a href="https://www.cmpndgroup.com/" className={styles.description2}>
        <h2 className={styles.description2}>➔ Design and Front-End Development for Baltimore based artist management studio CMPND Group.</h2>
        </a>
        <a href="https://music-player-be63c.web.app/" className={styles.description3}>
        <h2 className={styles.description3}>➔ Design, Art Direction, and Development for Infinite Lofi, an improved browser web player. </h2>
        </a>
        <h2 className={styles.genre2}>(✷)Graphic Design</h2>
        </div>
  )
}

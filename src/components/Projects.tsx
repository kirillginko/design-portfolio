import Image from 'next/image'
import Project1 from "../images/infinite2.png"
import Project2 from "../images/infinite.png"
import Project3 from "../images/cmpnd.png"
import Project4 from "../images/1987.png"
import Project5 from "../images/made.png"
import Project6 from "../images/risoprint4.png"
import styles from '../styles/Projects.module.css'

export default function Projects() {
  return (
    <>
        <div data-scroll-section className={styles.container}>
        <span className={styles.span}>03/</span>
        <h1 className={styles.title}>Recent Work</h1>
        <h2 className={styles.genre}>(✷)Web Design/ Development/ Ux/Ui</h2>
        </div>
        <div data-scroll-section className={styles.image_container}>
        <div className={styles.img}>
           <a href="https://art-infinite-3abd8.web.app/" className={styles.img} target="_blank">
           <Image src={Project1}/>
           </a>
        </div>
        <div className={styles.img2}>
           <a href="https://www.cmpndgroup.com/" className={styles.img2} target="_blank">
           <Image src={Project3}/>
           </a>
        </div>
        <div className={styles.img3}>
           <a href="https://music-player-be63c.web.app/" className={styles.img3} target="_blank">
           <Image src={Project2}/>
           </a>
        </div>
        <a href="https://art-infinite-3abd8.web.app/" className={styles.description} target="_blank">
        <h2 className={styles.description}>✷ Infinite Gallery is a infinitely generating art gallery in collaboration with the Art Institute of Chicago archives.</h2>
        </a>
        <a href="https://www.cmpndgroup.com/" className={styles.description2} target="_blank">
        <h2 className={styles.description2}>✷ Design and Front-End Development for Baltimore based artist management studio CMPND Group.</h2>
        </a>
        <a href="https://music-player-be63c.web.app/" className={styles.description3} target="_blank">
        <h2 className={styles.description3}>✷ Design, Art Direction, and Development for Infinite Lofi, an improved browser web player. </h2>
        </a>
        </div>
        <div data-scroll-section className={styles.graphics_container}>
        <h2 className={styles.genre2}>(✷)Graphic Design</h2>
        <div className={styles.img4}>
        <Image src={Project6}/>
        </div>
        <div className={styles.img5}>
        <Image src={Project4}/>
        </div>
        <div className={styles.img6}>
        <Image src={Project5}/>
        </div>
        </div>
    </>
  )
}

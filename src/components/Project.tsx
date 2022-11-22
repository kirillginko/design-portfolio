import Image from 'next/image'
import Project1 from "../images/infinite2.png"
import Project2 from "../images/infinite.png"
import Project3 from "../images/cmpnd.png"
import styles from "../styles/Project.module.css"

export default function Project() {
  return (
    <div className={styles.container}>
        <div className={styles.type}>
        <h2>(✷) Web Design/ Front-End/ UX/UI</h2>
        <div className={styles.img}>
          <a href="https://art-infinite-3abd8.web.app/" className={styles.img}>
          <Image src={Project1}/>
          </a>
        </div>
        </div> 
    </div>
  )
}

import styles from '../styles/About.module.css'
import Image from 'next/image'
import aboutImage from "../images/about.png"
import selfImage from "../images/profile.jpeg"

export default function About() {
   
  return (
    <>
    <div data-scroll-section className={styles.container}>
      <span className={styles.span}>01/</span>
      <div className={styles.title_container}>
      <h1 className={styles.title}>Creative</h1>
      <h1 className={styles.title}>Digital</h1>
      <h1 className={styles.title}>Designer</h1>
      </div>
    </div>
    <div className={styles.img_container} data-scroll-section>
      <div className={styles.img}>
      <Image
        src={aboutImage}
        alt="abstract design"
      />
      </div>
    </div>
    <div className={styles.self_container} data-scroll-section>
      <div className={styles.self_img}>
      <Image
        src={selfImage}
        alt="image of Kirill Ginko"
      />
      </div>
    </div>
    <div className={styles.about_container} data-scroll-section>
    <h2 className={styles.about_left}>A journey of curiosity and exploration.</h2>
    <h2 className={styles.about_right}>I'm a creative designer and developer with experience in building products and innovative digital experiences. I've helped brands build innovative experiences and create user-friendly design experiences.</h2>
    <h2 className={styles.about_lower_right}>My multi-disciplinary background brings a diverse set of skills to create successful branding and design identity to companies. I specialize in ux/ui, graphic design, and front-end development.</h2>
    </div>
        </>
        
  )
}

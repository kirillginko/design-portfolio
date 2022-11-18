import styles from '../styles/About.module.css'

export default function About() {
  return (
    <>
    <div data-scroll data-scroll-section className={styles.container}>
      <span className={styles.span}>01/</span>
      <div className={styles.about_container}>
      <h1 className={styles.about_title}>Creative</h1>
      <h1 className={styles.about_title}>Digital</h1>
      <h1 className={styles.about_title}>Designer</h1>
      </div>
        </div>
        <div className={styles.image_container} data-scroll data-scroll-section >
      </div>
      <div className={styles.location_container} data-scroll data-scroll-section>
        <h1 className={styles.location_title}>Based In NYC</h1>
        </div>
          <div className={styles.description_inner}  data-scroll data-scroll-section>
          <span className={styles.span}>02/</span>
          <div className={styles.description_left}><h2 className={styles.title}>A journey of curiosity and exploration.</h2></div>
          <div className={styles.description_right}><h2 className={styles.title}>I'm a creative designer and developer with experience in building products and innovative digital experiences. I've helped brands build innovative experiences and create user-friendly design experiences.</h2></div>
          <div className={styles.description_lowerright}><h2 className={styles.title}>My multi-disciplinary background brings a diverse set of skills to create successful branding and design identity to companies. I specialize in ux/ui, graphic design, and front-end development.</h2></div>
          </div>
        </>
        
  )
}

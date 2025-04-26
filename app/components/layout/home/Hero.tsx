import Image from 'next/image'
import styles from "./Hero.module.css"
export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <Image src="/images/Swkima_Hero_background.png"
          alt="Picture of Hero"
          width="1920"
          height="800" />

        <div className={styles.heroText}>
          <h1>Swkima</h1>
          <p>Art invites you into <br />-{'>'} an elaborately created world</p>
        </div>
      </div>
    </div>
  )
}

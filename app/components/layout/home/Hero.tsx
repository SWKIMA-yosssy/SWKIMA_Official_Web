import Image from 'next/image'
import styles from "./Hero.module.css"
export default function Hero() {
  return (
    <div className="w-full relative">
      <div className="relative h-[400px] md:h-[800px]">
        <Image src="/images/Swkima_Hero_background.png"
          alt="Picture of Hero"
          fill
          priority
          className="object-cover"
        />

        <div className={styles.heroText}>
          <h1>Swkima</h1>
          <p>Art invites you into <br /> → an elaborately created world</p>
        </div>
      </div>
    </div>
  )
}

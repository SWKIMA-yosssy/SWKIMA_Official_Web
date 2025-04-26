import Link from "next/link"
import Image from "next/image"
import styles from "./header.module.css"
export default function Header() {

  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>

        <div className={styles.logoWrapper}>
          <Link href="/">
            <div className={styles.logo}>
              <Image src="/images/Swkima_Logo.png"
                alt="Swkima Logo"
                width={80}
                height={80}
              />
            </div>
          </Link>
        </div>

        <div className={styles.navWrapper}>
          <Link className={styles.navLink} href="/">Home</Link>
          <Link className={styles.navLink} href="works">Works</Link>
          <Link className={styles.navLink} href="contact">Contact</Link>
        </div>
      </nav>
    </header >
  )
}

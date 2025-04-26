"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./header.module.css"
export default function Header() {

  const [hovering, setHover] = useState(false)
  return (
    <header className={hovering ? styles.headerHover : styles.header}>
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
          <Link className={hovering ? styles.navLinkHover : styles.navLink}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} href="/">Home</Link>
          <Link className={hovering ? styles.navLinkHover : styles.navLink}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} href="works">Works</Link>
          <Link className={hovering ? styles.navLinkHover : styles.navLink}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} href="contact">Contact</Link>
        </div>
      </nav>
    </header >
  )
}

"use client";
import { usePathname } from "next/navigation";
import Link from "next/link"
import Image from "next/image"
import styles from "./header.module.css"
export default function Header() {
  const pathname = usePathname();
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/works', label: 'Works' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="w-full m-2">
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
          {navLinks.map(({ href, label }) => {
            const isActive = pathname == href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-xl duration-500 ease-linear
                  ${isActive ? 'text-muted-foreground line-through' : 'visible'}`}
              >{label}</Link>
            )
          }
          )}
        </div>
      </nav>
    </header >
  )
}

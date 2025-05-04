"use client";
import { usePathname } from "next/navigation";
import Link from "next/link"
import Image from "next/image"
export default function Header() {
  const pathname = usePathname();
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/works', label: 'Works' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="w-full m-2">
      <nav className="flex flex-wrap items-center">

        <Link className="ml-[1.5%]" href="/">
          <Image src="/images/Swkima_Logo.png"
            alt="Swkima Logo"
            width={80}
            height={80}
          />
        </Link>

        <div className="flex gap-[1rem] md:gap-[4rem] ml-auto mr-[5%]">
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

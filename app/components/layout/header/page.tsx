import Link from "next/link"
export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="works">Works</Link>
        <Link href="contact">Contact</Link>
      </nav>
    </header>
  )
}

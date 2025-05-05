import Image from 'next/image'
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

        <div className="absolute top-[32%] left-[20%]">
          <h1 className="text-7xl">Swkima</h1>
          <p className="p-6 text-2xl">invites you into <br /> → an elaborately created world</p>
        </div>
      </div>
    </div>
  )
}

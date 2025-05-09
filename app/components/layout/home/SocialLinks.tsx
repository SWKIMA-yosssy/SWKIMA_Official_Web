import Image from "next/image"
export default function SocialLinks() {
  return (
    <div className="m-20 xl:pl-[15%] xl:pr-[15%]">
      <div className="flex flex-row w-full">
        <h1 className="text-5xl w-2/5">SNS Links</h1>
        <hr className="m-6 w-full border-gray-400" />
      </div>

      <div className="m-6 pt-10 flex flex-row flex-wrap gap-12">
        <a className="rounded-md" href="https://x.com/swkima"><Image src="/images/xLogoBlack.png"
          alt="X" height="50" width="50" />
        </a>
        <a className="rounded-md" href="https://www.instagram.com/_swkima/"><Image src="/images/Instagram_Glyph_Black.png"
          alt="IG" height="50" width="50" />
        </a>
        <a className="tounded-md pt-3" href="https://soundcloud.com/user-270776023"><Image src="/images/sc-logo-black.svg"
          alt="IG" height="50" width="50" />
        </a>
      </div>
    </div>
  )
}

import Image from "next/image"
export default function SocialLinks() {
  return (
    <div className="m-20">
      <div className="flex flex-row w-full">
        <h1 className="text-5xl w-1/5">SNS Links</h1>
        <hr className="m-6 w-full border-gray-400" />
      </div>

      <div className="m-6 pt-10 flex flex-row w-full">
        <a className="rounded-md ml-6 mr-6" href="https://x.com/swkima"><Image src="/images/xLogoBlack.png"
          alt="X" height="75" width="75" />
        </a>
        <a className="rounded-md ml-6 mr-6" href="https://www.instagram.com/_swkima/"><Image src="/images/Instagram_Glyph_Black.png"
          alt="IG" height="75" width="75" />
        </a>
      </div>
    </div>
  )
}

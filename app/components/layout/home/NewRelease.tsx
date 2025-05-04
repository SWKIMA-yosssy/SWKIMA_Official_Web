import releases from "@/src/data/releases.json"
import Image from "next/image"
export default function NewRelease() {

  const recentRelease = Object.values(releases)[releases.length - 1];
  return (
    <div className="m-20 flex flex-col">
      <div className="flex flex-row">
        <h1 className="text-5xl">NewRelease</h1>
        <hr className="m-6 w-full border-gray-400" />
      </div>

      <div className="flex md:flex-row flex-col pt-10">

        <div className="aspect-square">
          <Image src={recentRelease.jacketPath}
            alt={recentRelease.title} height="500" width="500" />
        </div>

        <div className="flex flex-col md:flex-row flex-wrap w-full">
          <h1 className="text-5xl text-center w-full">{recentRelease.title}</h1>
          <div className="ml-auto p-3">
            <h2 className="mr-auto mt-1 text-right">Label: Citrus Tones</h2>
            <h2 className="mr-auto mt-1 text-right">Genre: {recentRelease.genre}</h2>
            <h2 className="mr-auto mt-1 text-right">{recentRelease.releaseDate}</h2>
          </div>
          <iframe /* SoundCloud embed */
            className="w-full pl-5 pr-5 pt-5"
            width="100%"
            height="300"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2081971197&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
      </div>
    </div>
  )
}

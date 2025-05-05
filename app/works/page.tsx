import releases from "@/src/data/releases.json"
import WorksCard from "./WorksCard"

const reversedReleases = [...releases].reverse();
//edited to debug unused _ error

export default function Page() {
  return (
    <div className="xl:pl-[15%] xl:pr-[15%]">
      <h1 className="text-5xl text-center mt-[5%] mb-[3%]">Works</h1>
      <div className="w-full flex flex-wrap justify-center">
        {reversedReleases.map((work) => {
          // ここで links から undefined を除外する
          const filteredLinks = Object.fromEntries(
            Object.entries(work.links).filter(([, value]) => value !== undefined)
          );

          return (
            <WorksCard
              key={work.id}
              title={work.title}
              genre={work.genre}
              releaseDate={work.releaseDate}
              jacketPath={work.jacketPath}
              links={filteredLinks} // 除外したlinksを渡す
            />
          )
        })}
      </div>
    </div>
  )
}


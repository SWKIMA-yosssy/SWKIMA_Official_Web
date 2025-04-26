
import releases from "@/src/data/releases.json"
import WorksCard from "./WorksCard"
import styles from "./page.module.css"

const reversedReleases = [...releases].reverse();

export default function Page() {
  return (
    <div>
      <h1 className={styles.worksTitle}>works</h1>
      <div className={styles.cardWrapper}>
        {reversedReleases.map((work) => {
          // ここで links から undefined を除外する
          const filteredLinks = Object.fromEntries(
            Object.entries(work.links).filter(([_, value]) => value !== undefined)
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


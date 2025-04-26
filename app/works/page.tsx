import releases from "@/src/data/releases.json"
import WorksCard from "./WorksCard"
import styles from "./page.module.css"

const reversedReleases = releases.map((_, i, a) => a[a.length - 1 - i])
export default function Page() {
  return (
    <div>
      <h1 className={styles.worksTitle}>works</h1>
      <div className={styles.cardWrapper}>
        {reversedReleases.map((work) => (
          <WorksCard
            key={work.id}
            title={work.title}
            genera={work.genera}
            releaseDate={work.releaseDate}
            jacketPath={work.jacketPath}
          />
        ))
        }
      </div>
    </div>
  )
}

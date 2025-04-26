import Image from "next/image"
import styles from "./WorksCard.module.css"
type CardProps = {
  title: string;
  genre: string;
  releaseDate: string;
  jacketPath: string;
  links: { [serviceName: string]: string }; // 追加：リンクオブジェクト
};

export default function WorksCard(props: CardProps) {
  // 追加: linksオブジェクトの最初のURLを取り出す
  const firstLink = Object.values(props.links)[0];

  return (
    <div className={styles.card}>
      <a href={firstLink} target="_blank" rel="noopener noreferrer" className={styles.cardWrapper}>
        <Image className={styles.image}
          src={props.jacketPath} alt={props.title} height="3000" width="3000" />
        <div className={styles.cardTextBox}>
          <h2 className={styles.title}>{props.title}</h2>
          <div className={styles.detailData}>
            <p className={styles.releaseDate}>{props.releaseDate}</p>
            <p className={styles.genre}>{props.genre}</p>
          </div>

        </div>
      </a>
    </div>
  )
}

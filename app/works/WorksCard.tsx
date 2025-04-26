import Image from "next/image"
import styles from "./WorksCard.module.css"
type CardProps = {
  title: string;
  genera: string;
  releaseDate: string;
  jacketPath: string;
};

export default function WorksCard(props: CardProps) {
  return (
    <div className={styles.card}>
      <Image className={styles.image}
        src={props.jacketPath} alt={props.title} height="500" width="500" />
      <div className={styles.cardTextBox}>
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles.detailData}>
          <p className={styles.releaseDate}>{props.releaseDate}</p>
          <p className={styles.genera}>{props.genera}</p>
        </div>
      </div>
    </div>
  )
}

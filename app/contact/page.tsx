import styles from "./page.module.css"
export default function Page() {
  return (
    <div className={styles.contact}>
      <div>
        <h1>CONTACT</h1>
        <p>swkima.contact@gmail.com</p>
      </div>
      <hr />
      <div>
        <h1>MANEGEMENT</h1>
        <p>現在、楽曲をリリースできるレーベルを探しています<br />
          ご興味のあるオーナー様はぜひ上記メールアドレスにご一報くださいませ
        </p>
      </div>
    </div>
  )
}

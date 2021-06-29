import styles from '~/styles/components/DefaultSection.module.scss'
import linkStyles from '~/styles/components/Link.module.scss'

const CoC = () => {
  return (
    <section className={styles.lSection}>
      <h2 className={styles.sectionHeading}>CODE OF CONDUCT</h2>
      <p className={styles.sectionText}>
        誰もが快くイベントに参加するために、Code for
        コミュニティでは行動規範を定めています。同意した上でご参加ください。
      </p>
      <p className={linkStyles.button}>
        <a
          href="https://github.com/codeforjapan/codeofconduct"
          target="_blank"
          rel="noreferrer noopener"
        >
          詳しく読む
        </a>
      </p>
    </section>
  )
}

export default CoC

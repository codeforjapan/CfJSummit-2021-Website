import { VFC } from 'react'
import styles from '~/styles/components/DefaultSection.module.scss'
import linkStyles from '~/styles/components/Link.module.scss'

const Accessibility: VFC = () => {
  return (
    <section className={styles.lSection}>
      <h2 className={styles.sectionHeading}>ACCESSIBILITY</h2>
      <p className={styles.sectionText}>
        アプリ「UDトーク」を利用して、すべてのプログラムでリアルタイム字幕を提供します。
        <br />
        その他、特別な配慮が必要な方はお申し出ください。
      </p>
      <p className={linkStyles.button}>
        <a href="https://udtalk.jp/cfjs2020/" target="_blank" rel="noreferrer">
          UDトークアプリページへ
        </a>
      </p>
    </section>
  )
}

export default Accessibility

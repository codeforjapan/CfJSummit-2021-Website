import { VFC } from 'react'
import styles from '~/styles/components/DefaultSection.module.scss'
import linkStyles from '~/styles/components/Link.module.scss'
import classNames from 'classnames'

const Accessibility: VFC = () => {
  return (
    <section className={styles.lSection}>
      <h2 className={styles.sectionHeading}>ACCESSIBILITY</h2>
      <p className={styles.sectionText}>
        アプリ「UDトーク」を利用して、すべてのプログラムでリアルタイム字幕を提供します。
        <br />
        その他、特別な配慮が必要な方はお申し出ください。
      </p>
      <p className={classNames(linkStyles.button, linkStyles.isComingsoon)}>
        <a>Coming soon</a>
      </p>
    </section>
  )
}

export default Accessibility

import { VFC } from 'react'
import styles from '~/styles/components/DefaultSection.module.scss'

const Contact = () => {
  return (
    <section className={styles.lSection}>
      <h2 className={styles.sectionHeading}>CONTACT</h2>
      <p className={styles.sectionText}>
        取材依頼、スポンサー希望企業など、イベントについての各種お問い合わせは、
        <a href="mailto:info@code4japan.org">info@code4japan.org</a> にメールください。
      </p>
    </section>
  )
}

export default Contact

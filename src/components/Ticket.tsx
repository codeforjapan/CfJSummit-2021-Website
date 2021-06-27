import { VFC } from 'react'
import styles from '~/styles/components/DefaultSection.module.scss'
import linkStyles from '~/styles/components/Link.module.scss'

const Ticket: VFC = () => {
  return (
    <section className={styles.lSection}>
      <h2 className={styles.sectionHeading}>TICKET</h2>
      <p className={styles.sectionText}>
        イベント参加費は基本無料ですが、参加にはPeatixでのチケット入手が必要です。詳細はチケット販売ページをご覧ください。
      </p>
      <p className={linkStyles.button}>
        <a href="https://cfj-summit2021.peatix.com/" target="_blank" rel="noreferrer noopener">
          Peatixへ
        </a>
      </p>
    </section>
  )
}

export default Ticket

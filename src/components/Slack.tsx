import { VFC } from 'react'
import styles from '~/styles/components/DefaultSection.module.scss'
import linkStyles from '~/styles/components/Link.module.scss'

const Slack: VFC = () => {
  return (
    <section className={styles.lSection}>
      <h2 className={styles.sectionHeading}>SLACK</h2>
      <p className={styles.sectionText}>
        イベント当日の案内などは、Code for JapanのSlackでおこないます。
      </p>
      <p className={linkStyles.button}>
        <a
          href="https://join.slack.com/t/cfj/shared_invite/zt-473qa2x1-Fc_Uo76uPPRm2j~JBWRx1w"
          target="_blank"
          rel="noreferrer noopener"
        >
          Slackへ
        </a>
      </p>
    </section>
  )
}

export default Slack

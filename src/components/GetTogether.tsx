import { VFC } from 'react'
import styles from '~/styles/components/DefaultSection.module.scss'
import linkStyles from '~/styles/components/Link.module.scss'
import classNames from 'classnames'

const Ticket: VFC = () => {
  return (
    <section className={styles.lSection}>
      <h2 className={styles.sectionHeading}>GET TOGETHER</h2>
      <p className={styles.sectionText}>2020年に続き今年もオンライン開催になってしまいました。</p>
      <p className={styles.sectionText}>
        せめて懇親会(9/18 19:00-)の乾杯では、みんなで同じお酒を楽しみたい。
      </p>
      <p className={styles.sectionText}>
        そんな思いで東北のお酒をスタッフみんなで厳選し、今回は福島のクラフトビール醸造所「HOPJAPAN」さんのご協力のもと、福島で栽培されるホップを生のまま使用したAbukuma
        GREENを乾杯酒としてご用意いただきました！
      </p>
      <br />
      <p className={styles.sectionText} style={{ fontWeight: 'bold' }}>
        乾杯酒の販売は締め切りました。ご購入いただいた皆様ありがとうございました。
      </p>

      <p className={classNames(linkStyles.button, linkStyles.isComingsoon)}>
        <a>HOPJAPAN Storeへ</a>
      </p>
    </section>
  )
}

export default Ticket

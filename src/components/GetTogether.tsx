import { VFC } from 'react'
import styles from '~/styles/components/DefaultSection.module.scss'
import linkStyles from '~/styles/components/Link.module.scss'

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
      <p className={styles.sectionText}>
        乾杯酒限定でオリジナルグッズも同封していますので、楽しみにしていてください！
      </p>
      <p className={styles.sectionText}>
        ※注文から到着まで時間がかかりますので、お早めに注文をお願いします
      </p>
      <p className={styles.sectionText}>
        ※未成年の方、アルコールが苦手な方は福島県産リンゴとお酢を掛け合わせた「リンゴスター」という新感覚ドリンクをご用意しています
      </p>
      <p className={styles.sectionText}>飲酒は20歳になってから</p>

      <p className={linkStyles.button}>
        <a
          href="https://hopjapan.stores.jp/items/6128e78fe4943314e3341629"
          target="_blank"
          rel="noopener noreferrer"
        >
          HOPJAPAN Storeへ
        </a>
      </p>
    </section>
  )
}

export default Ticket

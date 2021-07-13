import { VFC } from 'react'
import keynoteStyles from '~/styles/components/KeynoteSection.module.scss'
import styles from '~/styles/components/DefaultSection.module.scss'
import linkStyles from '~/styles/components/Link.module.scss'
import classNames from 'classnames'

const Program: VFC = () => {
  return (
    <section className={styles.lSection}>
      <h2 className={styles.sectionHeading}>PROGRAM</h2>
      {/*
      <h3 className={styles.sectionHeadingSub}>KEY NOTES</h3>
      <div>
        <div className={keynoteStyles.keynoteImage}>
          <img src="./assets/img/2020/keynote1.jpg" alt="台湾デジタル担当大臣 唐鳳氏" />
        </div>
        <dl className={keynoteStyles.keynoteName}>
          <dt>唐鳳氏</dt>
          <dd>台湾デジタル担当大臣</dd>
        </dl>
      </div>
      <div>
        <div className={keynoteStyles.keynoteImage}>
          <img src="./assets/img/2020/keynote2.jpg" alt="慶応義塾大学医学部教授 宮田 裕章氏" />
        </div>
        <dl className={keynoteStyles.keynoteName}>
          <dt>宮田 裕章氏</dt>
          <dd>慶応義塾大学医学部教授</dd>
        </dl>
      </div>
      <p className={styles.sectionText}>
        キーノート以外にも、地域で活動するエンジニアのプレゼンテーションやパネルディスカッションを予定しています。
      </p>
      <p className={classNames(linkStyles.button, linkStyles.isComingsoon)}>
        <a href="">Coming soon</a>
      </p>
      */}
      <h3 className={styles.sectionHeadingSub}>ENTRY</h3>
      <p className={styles.sectionText}>
        プレゼンテーションやパネルディスカッションへの応募を受付中です。
      </p>
      <p className={linkStyles.button}>
        <a href="https://forms.gle/S8DfdxhMrVgrh8Vk7" target={'_blank'} rel={'noreferrer noopener'}>
          Entryフォームへ
        </a>
      </p>
    </section>
  )
}

export default Program

import React, { VFC } from 'react'
import keynoteStyles from '~/styles/components/KeynoteSection.module.scss'
import styles from '~/styles/components/DefaultSection.module.scss'
import linkStyles from '~/styles/components/Link.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import KeyNote1 from '~/assets/keynote/keynote1.png'
import KeyNote2 from '~/assets/keynote/keynote2.jpeg'
import dayjs from 'dayjs'

const Program: VFC = () => {
  return (
    <section className={styles.lSection}>
      <h2 className={styles.sectionHeading}>PROGRAM</h2>
      <h3 className={styles.sectionHeadingSub}>KEY NOTES</h3>
      <div className={keynoteStyles.keynote}>
        <div className={keynoteStyles.keynoteImage}>
          <Image src={KeyNote1} alt="東北大学理事・副学長 青木 孝文氏" />
        </div>
        <div>
          <dl className={keynoteStyles.keynoteName}>
            <dt>青木 孝文氏</dt>
            <dd>東北大学理事・副学長</dd>
          </dl>
          <Link href={'/programs/d6f1c5487eae4cb5b219d09192be49c8'}>
            <a className={keynoteStyles.keynoteProgram}>
              プログラム詳細へ
              <i>
                <svg
                  id="arrow_right"
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: 'rotate(180deg)' }}
                >
                  <path
                    d="M7.99967 1.99945C8.00013 2.2331 7.91875 2.45953 7.76967 2.63945L3.28967 7.99945L7.60967 13.3694C7.69274 13.4717 7.75477 13.5894 7.7922 13.7158C7.82963 13.8421 7.84173 13.9746 7.82779 14.1056C7.81385 14.2367 7.77415 14.3636 7.71098 14.4793C7.6478 14.5949 7.5624 14.6969 7.45967 14.7794C7.35738 14.8625 7.23969 14.9245 7.11335 14.962C6.98701 14.9994 6.85452 15.0115 6.72349 14.9976C6.59246 14.9836 6.46548 14.9439 6.34984 14.8808C6.23421 14.8176 6.1322 14.7322 6.04967 14.6294L1.21968 8.62945C1.07259 8.45051 0.992187 8.22607 0.992187 7.99445C0.992187 7.76282 1.07259 7.53838 1.21968 7.35945L6.21967 1.35945C6.30362 1.25819 6.40672 1.17449 6.52307 1.11313C6.63942 1.05178 6.76672 1.01398 6.8977 1.00191C7.02868 0.989834 7.16075 1.00372 7.28635 1.04276C7.41196 1.0818 7.52862 1.14524 7.62967 1.22945C7.74438 1.3225 7.83706 1.43981 7.90103 1.57295C7.96501 1.70608 7.99869 1.85174 7.99967 1.99945Z"
                    fill="#E19821"
                  />
                </svg>
              </i>
            </a>
          </Link>
        </div>
      </div>
      <div className={keynoteStyles.keynote}>
        <div className={keynoteStyles.keynoteImage}>
          <Image src={KeyNote2} alt="経済産業省商務情報政策局情報経済課長 須賀 千鶴氏" />
        </div>
        <div>
          <dl className={keynoteStyles.keynoteName}>
            <dt>須賀 千鶴氏</dt>
            <dd>経済産業省商務情報政策局情報経済課長</dd>
          </dl>
          <Link href={'/programs/c9faeec4558446b89c373b5ccd58a867'}>
            <a className={keynoteStyles.keynoteProgram}>
              プログラム詳細へ
              <i>
                <svg
                  id="arrow_right"
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: 'rotate(180deg)' }}
                >
                  <path
                    d="M7.99967 1.99945C8.00013 2.2331 7.91875 2.45953 7.76967 2.63945L3.28967 7.99945L7.60967 13.3694C7.69274 13.4717 7.75477 13.5894 7.7922 13.7158C7.82963 13.8421 7.84173 13.9746 7.82779 14.1056C7.81385 14.2367 7.77415 14.3636 7.71098 14.4793C7.6478 14.5949 7.5624 14.6969 7.45967 14.7794C7.35738 14.8625 7.23969 14.9245 7.11335 14.962C6.98701 14.9994 6.85452 15.0115 6.72349 14.9976C6.59246 14.9836 6.46548 14.9439 6.34984 14.8808C6.23421 14.8176 6.1322 14.7322 6.04967 14.6294L1.21968 8.62945C1.07259 8.45051 0.992187 8.22607 0.992187 7.99445C0.992187 7.76282 1.07259 7.53838 1.21968 7.35945L6.21967 1.35945C6.30362 1.25819 6.40672 1.17449 6.52307 1.11313C6.63942 1.05178 6.76672 1.01398 6.8977 1.00191C7.02868 0.989834 7.16075 1.00372 7.28635 1.04276C7.41196 1.0818 7.52862 1.14524 7.62967 1.22945C7.74438 1.3225 7.83706 1.43981 7.90103 1.57295C7.96501 1.70608 7.99869 1.85174 7.99967 1.99945Z"
                    fill="#E19821"
                  />
                </svg>
              </i>
            </a>
          </Link>
        </div>
      </div>
      <p className={styles.sectionText}>
        キーノート以外にも、地域で活動するエンジニアのプレゼンテーションやパネルディスカッションを予定しています。
      </p>
      <p className={linkStyles.button}>
        <Link href={dayjs().isBefore(dayjs('2021/09/19')) ? '/programs/day1' : '/programs/day2'}>
          <a>PROGRAMページへ</a>
        </Link>
      </p>
      <h3 className={styles.sectionHeadingSub} style={{ marginTop: '80px' }}>
        ENTRY
      </h3>
      <p className={styles.sectionText}>LTの募集を受付中です</p>
      <p className={linkStyles.button}>
        <a href="https://forms.gle/qHoTu8PaQhaADNLJ6" target={'_blank'} rel={'noreferrer noopener'}>
          Entryフォームへ
        </a>
      </p>
    </section>
  )
}

export default Program

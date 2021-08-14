import Navigation from '~/components/Navigation'
import { NextPage } from 'next'
import Footer from '~/components/Footer'
import MetaHead from '~/components/MetaHead'
import styles from '~/styles/components/DefaultSection.module.scss'
import conceptStyles from '~/styles/components/Concept.module.scss'

const Analytics: NextPage = () => {
  const pageTitle = 'Google Analytics について | Code for Japan Summit 2021'

  const links = [
    {
      p: 'Google Analytics利用規約',
      href: 'https://marketingplatform.google.com/about/analytics/terms/jp/',
    },
    {
      p: 'Googleのプライバシーポリシー',
      href: 'https://policies.google.com/privacy?hl=ja',
    },
    {
      p: 'Google Analyticsに関する詳細情報',
      href: 'https://support.google.com/analytics/answer/6004245?hl=ja',
    },
  ]
  return (
    <>
      <MetaHead title={pageTitle} />
      <Navigation />
      <section className={styles.lSection}>
        <h1 className={styles.sectionHeading}>Google Analyticsについて</h1>
        <div className={styles.sectionText}>
          <p>
            当サイトでは、サービス向上やサイトの改善のためにGoogle
            LLCの提供するアクセス分析のツールであるGoogle Analyticsを利用した計測を行っております。
          </p>
          <p>
            Google Analyticsでは、当サイトが発行するクッキー (Cookie)
            等を利用して、Webサイトの利用データ（アクセス状況、トラフィック、閲覧環境、IPアドレスなど）を収集しております。クッキーの利用に関してはGoogleのプライバシーポリシーと規約に基づいております。
          </p>
          <p>
            取得したデータはWebサイト利用状況を分析しサービスの改善につなげるため、またはサイト運営者へのレポートを作成するため、その他のサービスの提供に関わる目的に限り、これを使用します。（サイト運営者へのレポートでは、クッキーはブラウザ単位で本サイトのユーザー数をカウントするため、IPアドレスはGoogle
            Analyticsの分析機能を通じてアクセス元の地域分布（国、州・都道府県、都市）を把握するために利用されています。）
          </p>
          <p>
            Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google
            Analyticsのサイトをご覧ください。
          </p>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} target={'_blank'} rel={'noopener noreferrer'}>
                  {link.p}
                </a>
              </li>
            ))}
          </ul>
          <p>
            Google Analyticsによる情報送信を回避する場合は、Google がサポートする
            <a
              href="https://tools.google.com/dlpage/gaoptout?hl=ja"
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              測定を無効にするブラウザ アドオン
            </a>
            をご利用ください。
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Analytics

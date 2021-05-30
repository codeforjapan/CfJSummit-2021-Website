import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <nav className="l-nav">
        <ul className="nav-list">
          <li>
            <a href="/" className="is-active">
              HOME
            </a>
          </li>
          <img src="./assets/img/2020/logo.png" alt="Re:Design" />{' '}
          <li>
            <a href="">PROGRAM</a>
          </li>
        </ul>
        <ul className="nav-sns">
          <li className="nav-sns-facebook">
            <a href="https://www.facebook.com/codeforjapan" target="_blank" rel="noreferrer">
              <svg>
                <defs>
                  <symbol
                    id="icon-facebook"
                    viewBox="0 0 10 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.49636 20V10.8919H9.45801L9.89824 7.32578H6.49636V5.05432C6.49636 4.02527 6.77271 3.32071 8.19623 3.32071H10V0.141321C9.12236 0.0437405 8.2402 -0.0033761 7.35754 0.000187992C4.73972 0.000187992 2.94237 1.65823 2.94237 4.70204V7.31912H0V10.8852H2.9488V20H6.49636Z"
                      fill="white"
                    />
                  </symbol>
                </defs>
              </svg>
            </a>
          </li>
          <li className="nav-sns-twitter">
            <a href="https://twitter.com/codeforJP" target="_blank" rel="noreferrer">
              <svg>
                <defs>
                  <symbol
                    id="icon-twitter"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 1.9006C19.2645 2.21303 18.4641 2.43788 17.6397 2.52545C18.4956 2.02471 19.1366 1.23362 19.4424 0.300601C18.6392 0.771108 17.7593 1.10104 16.8417 1.27575C16.4582 0.872024 15.9944 0.5504 15.4792 0.330915C14.9639 0.11143 14.4083 -0.00121132 13.8469 9.82343e-06C11.5755 9.82343e-06 9.74883 1.81303 9.74883 4.03788C9.74883 4.3503 9.78729 4.66273 9.84978 4.96332C6.44874 4.78817 3.41546 3.18817 1.39887 0.738471C1.03143 1.3565 0.838874 2.06019 0.841245 2.77634C0.841245 4.17752 1.56472 5.41302 2.66795 6.13965C2.0178 6.11444 1.38287 5.93846 0.814806 5.62604V5.67575C0.814806 7.63787 2.22329 9.26391 4.10047 9.63787C3.74801 9.72803 3.38543 9.77415 3.02127 9.77515C2.75448 9.77515 2.5021 9.74912 2.24733 9.71361C2.76649 11.3136 4.27833 12.4757 6.0786 12.5136C4.67011 13.6 2.9059 14.2391 0.990266 14.2391C0.646557 14.2391 0.329287 14.2272 0 14.1894C1.81709 15.3373 3.97308 16 6.29492 16C13.8325 16 17.957 9.85089 17.957 4.51362C17.957 4.33847 17.957 4.16332 17.945 3.98817C18.7429 3.41303 19.4424 2.7006 20 1.9006Z"
                      fill="white"
                    />
                  </symbol>
                </defs>
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <head className="l-header">
        <div className="header-movie">
          <video src="./assets/movie/wave.mp4" playsInline muted autoPlay></video>
        </div>
        <section className="header-title">
          <h1>2020.10.17(sat.)-18(sun.)</h1>
          <p>@オンライン開催</p>
        </section>
      </head>

      <main className="l-main">
        <section className="l-section">
          <h2 className="section-heading">CONCEPT</h2>
          <h3 className="section-heading_sub_big">ともに考え、ともにつくる</h3>
          <p className="section-text">
            SNSを見ると、世の中は不満で溢れています。
            <br />
            確かに、社会の課題は大きく、一人の力では弱いかもしれません。しかし、誰かが動きはじめることで兆しが見え、人々がつながり、大きなうねりになり、社会を変えていくことができます。
            <br />
            <br />
            国内にも、海外にも、テクノロジーで社会課題を解決しようとしている多くの仲間たちがいます。
            <br />
            <br />
            Code for Japan
            Summitは、年に一度のシビックテックの祭典。他の地域の活動を知り、仲間とつながり、次の一歩を踏み出すためのイベントです。
            <br />
            <br />
            今年のテーマは「Re:DESIGN」
            <br />
            世界が大きく変わっていく今だからこそ、少し立ち止まって一緒に未来を考えてみましょう。
          </p>
        </section>

        <section className="l-logo">
          <h1>
            <img src="./assets/img/2020/logo.png" alt="Re:Design" />
          </h1>
        </section>

        <section className="l-section">
          <h2 className="section-heading">PROGRAM</h2>
          <h3 className="section-heading_sub">KEY NOTES</h3>
          <div className="l-keynote">
            <p className="keynote-image">
              <img src="./assets/img/2020/keynote1.jpg" alt="台湾デジタル担当大臣 唐鳳氏" />
            </p>
            <dl className="keynote-name">
              <dt>唐鳳氏</dt>
              <dd>台湾デジタル担当大臣</dd>
            </dl>
          </div>
          <div className="l-keynote">
            <p className="keynote-image">
              <img src="./assets/img/2020/keynote2.jpg" alt="慶応義塾大学医学部教授 宮田 裕章氏" />
            </p>
            <dl className="keynote-name">
              <dt>宮田 裕章氏</dt>
              <dd>慶応義塾大学医学部教授</dd>
            </dl>
          </div>
          <p className="section-text">
            キーノート以外にも、地域で活動するエンジニアのプレゼンテーションやパネルディスカッションを予定しています。
          </p>
          <p className="button is-comingsoon">
            <a href="">Coming soon</a>
          </p>
        </section>

        <section className="l-section">
          <h2 className="section-heading">TICKET</h2>
          <p className="section-text">
            イベント参加費は基本無料ですが、参加にはPeatixでのチケット入手が必要です。詳細はチケット販売ページをご覧ください。
          </p>
          <p className="button">
            <a href="https://cfj-summit2020.peatix.com" target="_blank" rel="noreferrer">
              Peatixチケット購入ページへ
            </a>
          </p>
        </section>

        <section className="l-section">
          <h2 className="section-heading">SLACK</h2>
          <p className="section-text">
            イベント当日の登壇者への質疑応答や参加者同士の交流は、Code for
            JapanのSlackでおこないます。
          </p>
          <p className="button">
            <a
              href="https://join.slack.com/t/cfj/shared_invite/zt-473qa2x1-Fc_Uo76uPPRm2j~JBWRx1w"
              target="_blank"
              rel="noreferrer"
            >
              Slackへ
            </a>
          </p>
        </section>

        <section className="l-section">
          <h2 className="section-heading">CODE OF CONDUCT</h2>
          <p className="section-text">
            誰もが快くイベントに参加するために、Code for
            コミュニティでは行動規範を定めています。同意した上でご参加ください。
          </p>
          <p className="button">
            <a
              href="https://github.com/codeforjapan/codeofconduct"
              target="_blank"
              rel="noreferrer"
            >
              詳しく読む
            </a>
          </p>
        </section>

        <section className="l-section">
          <h2 className="section-heading">ACCESSIBILITY</h2>
          <p className="section-text">
            アプリ「UDトーク」を利用して、すべてのプログラムでリアルタイム字幕を提供します。
            <br />
            その他、特別な配慮が必要な方はお申し出ください。
          </p>
          <p className="button">
            <a href="https://udtalk.jp/cfjs2020/" target="_blank" rel="noreferrer">
              UDトークアプリページへ
            </a>
          </p>
        </section>

        <section className="l-section">
          <h2 className="section-heading">CONTACT</h2>
          <p className="section-text">
            取材依頼、スポンサー希望企業など、イベントについての各種お問い合わせは、
            <a href="mailto:info@code4japan.org">info@code4japan.org</a> にメールください。
          </p>
        </section>

        <section className="l-sponsors">
          <div className="logo_small">
            <img src="./assets/img/2020/logo_small.png" alt="Re:Design" />
          </div>
          <h2 className="sponsors-heading">プラチナパートナー</h2>
          <ul className="sponsors-logos">
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/01.png" alt="" />
              </a>
            </li>
          </ul>
          <h2 className="sponsors-heading">ゴールドパートナー</h2>
          <ul className="sponsors-logos">
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/02.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/03.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/04.png" alt="" />
              </a>
            </li>
          </ul>
          <h2 className="sponsors-heading">シルバーパートナー</h2>
          <ul className="sponsors-logos">
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/05.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/06.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/07.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/08.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/09.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/10.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/11.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/12.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/13.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/14.png" alt="" />
              </a>
            </li>
          </ul>
          <h2 className="sponsors-heading">ブロンズパートナー</h2>
          <ul className="sponsors-logos">
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/15.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/16.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/17.png" alt="" />
              </a>
            </li>
          </ul>
          <h2 className="sponsors-heading">メディアパートナー</h2>
          <ul className="sponsors-logos">
            <li>
              <a href="">
                <img src="./assets/img/2020/sponsors/18.png" alt="" />
              </a>
            </li>
          </ul>
          <h2 className="sponsors-heading">主催</h2>
          <ul className="sponsors-logos">
            <li>
              <img src="./assets/img/2020/sponsors/cfj.png" alt="Code for Japan" />
            </li>
          </ul>
          <h2 className="sponsors-heading">共催</h2>
          <ul className="sponsors-logos">
            <li>
              <img src="./assets/img/2020/sponsors/cf_aichi.png" alt="Code for AICHI" />
            </li>
            <li>
              <img src="./assets/img/2020/sponsors/cf_nagoya.png" alt="Code for Nagoya" />
            </li>
            <li>
              <img src="./assets/img/2020/sponsors/cf_toyota.png" alt="Code for Toyota" />
            </li>
            <li>
              <img src="./assets/img/2020/sponsors/cf_mikawa.png" alt="Code for MIKAWA" />
            </li>
            <li>
              <img src="./assets/img/2020/sponsors/cf_gifu.png" alt="Code for Gifu" />
            </li>
            <li>
              <img src="./assets/img/2020/sponsors/cf_fujinokuni.png" alt="Code for ふじのくに" />
            </li>
          </ul>
          <h2 className="sponsors-heading">後援</h2>
          <p className="sponsors-name">場所が入ります場所が入ります</p>
        </section>
      </main>

      <footer className="l-footer">
        <h1 className="footer-logo">
          <a href="">
            <img src="./assets/img/common/logo_cfj.png" alt="Code for Japan" />
          </a>
        </h1>
        <p className="footer-copy">&copy; Code for Japan All rights reserved.</p>
      </footer>
    </>
  )
}

export default Home

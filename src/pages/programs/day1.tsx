import Navigation from '~/components/Navigation'
import { NextPage } from 'next'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import MetaHead from '~/components/MetaHead'
import styles from '../../styles/Programs.module.scss'
import classNames from 'classnames'
import Link from 'next/link'

const Programs: NextPage = () => {
  return (
    <>
      <MetaHead isTop />
      <Navigation />
      <Header />
      <div className={styles.timetableWrapper}>
        <h2 className={styles.sectionHeading}>PROGRAM</h2>
        <ul className={styles.menuTab}>
          <li className={styles.active}>
            <Link href={'day1'}>
              <a className={styles.tab}>10.17(sat.)</a>
            </Link>
          </li>
          <li>
            <Link href={'day2'}>
              <a className={styles.tab}>10.18(sun.)</a>
            </Link>
          </li>
        </ul>
        <div className={styles.titleContent}>
          <h2> TIME TABLE</h2>
        </div>
        <div className={classNames(styles.tabContents, styles.active)} id="timetable">
          <div className={styles.col2of4}>
            <div className={styles.tableBoxPc}>
              <table>
                <tbody>
                  <tr>
                    <td className={styles.times}></td>
                    <th className={styles.color01}>MAIN</th>
                    <th className={styles.color01}>TRACK1</th>
                    <th className={styles.color01}>TRACK2</th>
                    <th className={styles.color01}>TRACK3</th>
                    <th className={styles.color01}>TRACK4</th>
                    <th className={styles.color01}>TRACK5</th>
                    <th className={styles.color01}>TRACK6</th>
                    <th className={styles.color01}>TRACK7</th>
                  </tr>

                  <tr>
                    <td className={styles.times} rowSpan={3}>
                      13:00
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>13:00-13:10</p>
                        <p className={styles.boldTitle}>オープニング</p>
                      </a>
                    </td>
                    <td className={styles.blank} colSpan={7} rowSpan={2}></td>
                  </tr>
                  <tr>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>13:10-13:50</p>
                        <p className={styles.boldTitle}>KEYNOTE</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.color02} colSpan={8}>
                      <p className={styles.time}>13:50-14:00</p>
                      <p className={styles.boldTitle}>全体休憩</p>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.times} rowSpan={2}>
                      14:00
                    </td>
                    <td rowSpan={4}>
                      <a href="">
                        <p className={styles.time}>14:00-16:00</p>
                        <p className={styles.boldTitle}>
                          シビックパワー
                          <br />
                          バトル全国大会
                        </p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:50-15:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:50-15:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:50-15:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:50-15:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:50-15:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:50-15:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:50-15:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.times} rowSpan={2}>
                      15:00
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:50-16:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:50-16:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:50-16:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:50-16:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:50-16:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:50-16:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:50-16:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.times} rowSpan={2}>
                      16:00
                    </td>
                    <td className={styles.blank} rowSpan={3}></td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.color02}>
                      <p className={styles.time}>16:50-17:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>16:50-17:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>16:50-17:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>16:50-17:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>16:50-17:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>16:50-17:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>16:50-17:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.times} rowSpan={2}>
                      17:00
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.color02} colSpan={8}>
                      <p className={styles.time}>17:50-18:00</p>
                      <p className={styles.boldTitle}>全体休憩</p>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.times} rowSpan={1}>
                      18:00
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>18:00-18:30</p>
                        <p className={styles.boldTitle}>クロージング</p>
                      </a>
                    </td>
                    <td className={styles.blank} colSpan={7} rowSpan={2}></td>
                  </tr>
                  <tr>
                    <td className={classNames(styles.times, styles.last_time)} rowSpan={1}>
                      18:00
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>18:30-20:30</p>
                        <p className={styles.boldTitle}>オンライン交流会</p>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.tableBoxTbSp}>
              <ul>
                <li className={styles.trackList}>
                  <a href="#main_1">MAIN</a>
                </li>
                <li className={styles.trackList}>
                  <a href="#track1_1">TRACK1</a>
                </li>
                <li className={styles.trackList}>
                  <a href="#track2_1">TRACK2</a>
                </li>
                <li className={styles.trackList}>
                  <a href="#track3_1">TRACK3</a>
                </li>
                <li className={styles.trackList}>
                  <a href="#track4_1">TRACK4</a>
                </li>
                <li className={styles.trackList}>
                  <a href="#track5_1">TRACK5</a>
                </li>
                <li className={styles.trackList}>
                  <a href="#track6_1">TRACK6</a>
                </li>
                <li className={styles.trackList}>
                  <a href="#track7_1">TRACK7</a>
                </li>
              </ul>
              <table>
                <tbody>
                  <tr id="main_1">
                    <th className={classNames(styles.color01, styles.track)}>MAIN</th>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>13:00-13:10</p>
                        <p className={styles.boldTitle}>オープニング</p>
                      </a>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>13:00-13:10</p>
                        <p className={styles.boldTitle}>オープニング</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>13:50-14:00</p>
                      <p className={styles.boldTitle}>全体休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>14:00-16:00</p>
                        <p className={styles.boldTitle}>シビックパワーバトル全国大会</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>17:50-18:00</p>
                      <p className={styles.boldTitle}>全体休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>18:00-18:30</p>
                        <p className={styles.boldTitle}>クロージング</p>
                      </a>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>18:30-20:30</p>
                        <p className={styles.boldTitle}>オンライン交流会</p>
                      </a>
                    </td>
                  </tr>
                  <tr id="track1_1">
                    <th className={classNames(styles.color01, styles.track)}>TRACK1</th>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:50-15:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>15:00-15:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:50-16:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>16:00-16:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>16:50-17:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>17:00-17:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                  </tr>
                  <tr id="track2_1">
                    <th className={classNames(styles.color01, styles.track)}>TRACK2</th>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:50-15:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>15:00-15:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:50-16:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>16:00-16:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>16:50-17:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>17:00-17:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                  </tr>
                  <tr id="track3_1">
                    <th className={classNames(styles.color01, styles.track)}>TRACK3</th>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:50-15:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>15:00-15:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:50-16:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>16:00-16:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>16:50-17:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>17:00-17:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                  </tr>
                  <tr id="track4_1">
                    <th className={classNames(styles.color01, styles.track)}>TRACK4</th>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:50-15:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>15:00-15:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:50-16:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>16:00-16:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>16:50-17:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>17:00-17:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                  </tr>
                  <tr id="track5_1">
                    <th className={classNames(styles.color01, styles.track)}>TRACK5</th>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:50-15:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>15:00-15:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:50-16:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>16:00-16:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>16:50-17:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>17:00-17:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                  </tr>
                  <tr id="track6_1">
                    <th className={classNames(styles.color01, styles.track)}>TRACK6</th>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:50-15:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>15:00-15:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:50-16:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>16:00-16:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>16:50-17:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>17:00-17:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                  </tr>
                  <tr id="track7_1">
                    <th className={classNames(styles.color01, styles.track)}>TRACK7</th>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>14:00-14:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:50-15:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>15:00-15:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:50-16:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>16:00-16:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>16:50-17:00</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>17:00-17:50</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Programs

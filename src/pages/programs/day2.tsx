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
          <li>
            <Link href={'day1'}>
              <a className={styles.tab}>10.17(sat.)</a>
            </Link>
          </li>
          <li className={styles.active}>
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
                    <td className={styles.times} />
                    <th className={styles.color01}>MAIN</th>
                    <th className={styles.color01}>TRACK1</th>
                    <th className={styles.color01}>TRACK2</th>
                    <th className={styles.color01}>TRACK3</th>
                    <th className={styles.color01}>TRACK4</th>
                    <th className={styles.color01}>TRACK5</th>
                  </tr>
                  <tr>
                    <td className={styles.times} rowSpan={1}>
                      13:00
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>13:00-13:30</p>
                        <p className={styles.boldTitle}>オープニング</p>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.times} rowSpan={2}>
                      13:30
                    </td>
                    <td className={styles.blank} rowSpan={2} />
                    <td>
                      <a href="">
                        <p className={styles.time}>13:30-14:20</p>
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
                        <p className={styles.time}>13:30-14:20</p>
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
                        <p className={styles.time}>13:30-14:20</p>
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
                        <p className={styles.time}>13:30-14:20</p>
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
                        <p className={styles.time}>13:30-14:20</p>
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
                      <p className={styles.time}>14:20-14:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:20-14:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:20-14:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:20-14:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:20-14:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.times} rowSpan={2}>
                      14:00
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>14:30-15:20</p>
                        <p className={styles.boldTitle}>有償セッション</p>
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
                        <p className={styles.boldTitle}>KEYNOTE</p>
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
                        <p className={styles.boldTitle}>KEYNOTE</p>
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
                        <p className={styles.boldTitle}>KEYNOTE</p>
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
                        <p className={styles.boldTitle}>KEYNOTE</p>
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
                    <td className={styles.blank} rowSpan={2}></td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:20-15:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:20-15:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:20-15:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:20-15:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:20-15:30</p>
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
                        <p className={styles.boldTitle}>KEYNOTE</p>
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
                        <p className={styles.boldTitle}>KEYNOTE</p>
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
                        <p className={styles.boldTitle}>KEYNOTE</p>
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
                        <p className={styles.boldTitle}>KEYNOTE</p>
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
                    <td className={styles.color02} colSpan={6}>
                      <p className={styles.time}>13:50-14:00</p>
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
                        <p className={styles.boldTitle}>アンカンファレンス</p>
                      </a>
                    </td>
                    <td className={styles.blank} colSpan={5} rowSpan={2}></td>
                  </tr>
                  <tr>
                    <td className={classNames(styles.times, styles.lastTime)} rowSpan={1}>
                      18:00
                    </td>
                    <td>
                      <a href="">
                        <p className={styles.time}>18:30-20:30</p>
                        <p className={styles.boldTitle}>クロージング</p>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.tableBoxTbSp}>
              <ul>
                <li className={styles.trackList}>
                  <a href="#main_2">MAIN</a>
                </li>
                <li className={styles.trackList}>
                  <a href="#track1_2">TRACK1</a>
                </li>
                <li className={styles.trackList}>
                  <a href="#track2_2">TRACK2</a>
                </li>
                <li className={styles.trackList}>
                  <a href="#track3_2">TRACK3</a>
                </li>
                <li className={styles.trackList}>
                  <a href="#track4_2">TRACK4</a>
                </li>
                <li className={styles.trackList}>
                  <a href="#track5_2">TRACK5</a>
                </li>
              </ul>
              <table>
                <tbody>
                  <tr id="main_2">
                    <th className={classNames(styles.color01, styles.track)}>MAIN</th>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>13:00-13:30</p>
                        <p className={styles.boldTitle}>オープニング</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                      </a>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>14:30-15:20</p>
                        <p className={styles.boldTitle}>有償セッション</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>16:20-16:30</p>
                      <p className={styles.boldTitle}>全体休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>16:30-17:10</p>
                        <p className={styles.boldTitle}>アンカンファレンス</p>
                      </a>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>17:10-17:50</p>
                        <p className={styles.boldTitle}>クロージング</p>
                      </a>
                    </td>
                  </tr>
                  <tr id="track1_2">
                    <th className={classNames(styles.color01, styles.track)}>TRACK1</th>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>13:30-14:20</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:20-14:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>14:30-15:20</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:20-15:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>15:30-16:20</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                  </tr>
                  <tr id="track2_2">
                    <th className={classNames(styles.color01, styles.track)}>TRACK2</th>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>13:30-14:20</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:20-14:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>14:30-15:20</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:20-15:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>15:30-16:20</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                  </tr>
                  <tr id="track3_2">
                    <th className={classNames(styles.color01, styles.track)}>TRACK3</th>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>13:30-14:20</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:20-14:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>14:30-15:20</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:20-15:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>15:30-16:20</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                  </tr>
                  <tr id="track4_2">
                    <th className={classNames(styles.color01, styles.track)}>TRACK4</th>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>13:30-14:20</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:20-14:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>14:30-15:20</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:20-15:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>15:30-16:20</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                  </tr>
                  <tr id="track5_2">
                    <th className={classNames(styles.color01, styles.track)}>TRACK5</th>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>13:30-14:20</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>14:20-14:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>14:30-15:20</p>
                        <div className={styles.detail}>
                          <p>
                            タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。
                          </p>
                        </div>
                        <p className={styles.performer}>高度 太郎</p>
                      </a>
                    </td>
                    <td className={styles.color02}>
                      <p className={styles.time}>15:20-15:30</p>
                      <p className={styles.boldTitle}>休憩</p>
                    </td>
                    <td className={styles.color01}>
                      <a href="">
                        <p className={styles.time}>15:30-16:20</p>
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

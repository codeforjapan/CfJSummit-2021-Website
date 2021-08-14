import Navigation from '~/components/Navigation'
import { NextPage } from 'next'
import Footer from '~/components/Footer'
import MetaHead from '~/components/MetaHead'
import styles from '../../styles/Programs.module.scss'
import classNames from 'classnames'
import Link from 'next/link'

type ProgramData = {
  title: string
  startTime: string
  endTime: string
  category: number
  description: string
  presenters: string[]
  programId: string
}

type TrackData = {
  trackName: string
  programs: ProgramData[]
}

type Props = {
  Tracks: string[]
  pcTimeTable: [string, ...(ProgramData | number)[]][]
  spTimeTable: TrackData[]
}
type prog = ProgramData & { trackNum: number }

type ResponseType = {
  data: TrackData[]
  result: string
  timestamp: string
}
export const getStaticProps = async () => {
  const response = await fetch(
    'https://webapi20210430062843.azurewebsites.net/api/listprogramforweb?lang=ja&date=1',
    {
      headers: {
        Authorization: process.env.API_KEY ? process.env.API_KEY : 'APIKEY is Required',
      },
    }
  )
  /*const Data = {
    data: [
      {
        trackName: 'トラック0',
        programs: [
          {
            title: 'vvvvvvvvvvvvvvvvvvvvvvvvvvvv',
            startTime: '13:00',
            endTime: '13:25',
            category: 1,
            description: 'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv',
            presenters: [],
            programId: 'b8864c129a84482191080cb7a573ad07',
          },
          {
            title: 'vvvvvvvvvvvvvvvvvvvvvvvvvvvv',
            startTime: '13:25',
            endTime: '14:15',
            category: 1,
            description: 'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv',
            presenters: [],
            programId: 'b8864c129a84482191080cb7a573ad09',
          },
        ],
      },
      {
        trackName: 'トラック1',
        programs: [
          {
            title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            startTime: '14:30',
            endTime: '15:20',
            category: 1,
            description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            presenters: ['test'],
            programId: '5329ff1fdf834b98904c8a5c4d5c5a13',
          },
          {
            title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            startTime: '15:30',
            endTime: '16:20',
            category: 1,
            description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            presenters: ['test'],
            programId: '5329ff1fdf834b98904c8a5c4d5c5a13',
          },
          {
            title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            startTime: '16:30',
            endTime: '17:20',
            category: 1,
            description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            presenters: ['test'],
            programId: '5329ff1fdf834b98904c8a5c4d5c5a13',
          },
        ],
      },
    ],
    result: '1',
    timestamp: '2021-08-09T03:15:09.2164445Z',
  }*/
  const Data = (await response.json()) as ResponseType
  const programs: prog[] = []
  const StartTimeList: string[] = []
  const Tracks: string[] = []
  Data.data.forEach((track, index) => {
    track.programs.forEach((program) => {
      StartTimeList.push(program.startTime)
      programs.push({ ...program, trackNum: index })
    })
    Tracks.push(track.trackName)
  })
  // @ts-ignore
  const StartTimes = [...new Set(StartTimeList)].sort((a, b) => a.localeCompare(b))
  const pcTimeTable = StartTimes.map((startTime) => {
    const filterProgram = programs.filter((value) => {
      return value.startTime === startTime
    })
    let data: (string | ProgramData | number)[] = Array.apply(null, new Array(Tracks.length)).map(
      Number.prototype.valueOf,
      0
    )
    data[0] = startTime
    filterProgram.forEach((value) => {
      const { trackNum, ...v } = value
      data[trackNum + 1] = v
    })
    return data
  })
  return {
    props: {
      Tracks,
      pcTimeTable,
      spTimeTable: Data.data,
    },
  }
}

const Programs: NextPage<Props> = ({ Tracks, pcTimeTable, spTimeTable }: Props) => {
  return (
    <>
      <MetaHead isTop />
      <Navigation nowPage={'Programs'} />
      <div className={styles.timetableWrapper}>
        <h2 className={styles.sectionHeading}>PROGRAM</h2>
        <ul className={styles.menuTab}>
          <li className={styles.active}>
            <Link href={'/programs/day1'}>
              <a>10.17(sat.)</a>
            </Link>
          </li>
          <li>
            <Link href={'/programs/day2'}>
              <a>10.18(sun.)</a>
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
                    {Tracks.map((value) => {
                      return (
                        <th className={styles.color01} key={value}>
                          {value}
                        </th>
                      )
                    })}
                  </tr>
                  {pcTimeTable.map((tt) => {
                    return (
                      <tr key={tt[0]}>
                        {tt.map((value) => {
                          if (typeof value === 'string') {
                            return (
                              <td key={Math.random()} className={styles.times}>
                                {value}
                              </td>
                            )
                          } else if (typeof value === 'number') {
                            return <td key={Math.random()} className={styles.blank} />
                          } else if (value) {
                            if (value.category === 0) {
                              return <td key={Math.random()} className={styles.blank} />
                            }
                            if (value.category === 4) {
                              return (
                                <td key={value.programId} className={styles.color02}>
                                  <p className={styles.time}>
                                    {value.startTime}-{value.endTime}
                                  </p>
                                  <p className={styles.boldTitle}>{value.title}</p>
                                  <div className={styles.detail}>
                                    <p>{value.description}</p>
                                  </div>
                                  {value.presenters.map((value) => {
                                    return (
                                      <p key={value} className={styles.performer}>
                                        {value}
                                      </p>
                                    )
                                  })}
                                </td>
                              )
                            } else {
                              return (
                                <td key={value.programId} className={styles.color01}>
                                  <Link href={`/programs/${value.programId}`}>
                                    <a>
                                      <p className={styles.time}>
                                        {value.startTime}-{value.endTime}
                                      </p>
                                      <p className={styles.boldTitle}>{value.title}</p>
                                      <div className={styles.detail}>
                                        <p>{value.description}</p>
                                      </div>
                                      {value.presenters.map((value) => {
                                        return (
                                          <p key={value} className={styles.performer}>
                                            {value}
                                          </p>
                                        )
                                      })}
                                    </a>
                                  </Link>
                                </td>
                              )
                            }
                          } else {
                            return <td key={Math.random()} className={styles.blank} />
                          }
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className={styles.tableBoxTbSp}>
              <ul>
                {Tracks.map((value) => {
                  return (
                    <li className={styles.trackList} key={value}>
                      <Link href={`#${value}`}>
                        <a>{value}</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <table>
                <tbody>
                  {spTimeTable.map((value) => {
                    return (
                      <tr id={value.trackName} key={value.trackName}>
                        <th className={classNames(styles.color01, styles.track)}>
                          {value.trackName}
                        </th>
                        {value.programs.map((value) => {
                          if (value.category === 4) {
                            return (
                              <td key={value.programId} className={styles.color02}>
                                <p className={styles.time}>
                                  {value.startTime}-{value.endTime}
                                </p>
                                <p className={styles.boldTitle}>{value.title}</p>
                                <div className={styles.detail}>
                                  <p>{value.description}</p>
                                </div>
                                {value.presenters.map((value) => {
                                  return (
                                    <p key={value} className={styles.performer}>
                                      {value}
                                    </p>
                                  )
                                })}
                              </td>
                            )
                          }
                          return (
                            <td className={styles.color01} key={value.programId}>
                              <Link href={`/programs/${value.programId}`}>
                                <a>
                                  <p className={styles.time}>
                                    {value.startTime}-{value.endTime}
                                  </p>
                                  <p className={styles.boldTitle}>{value.title}</p>
                                  <div className={styles.detail}>
                                    <p>{value.description}</p>
                                  </div>
                                  {value.presenters.map((value) => {
                                    return (
                                      <p key={value} className={styles.performer}>
                                        {value}
                                      </p>
                                    )
                                  })}
                                </a>
                              </Link>
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
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
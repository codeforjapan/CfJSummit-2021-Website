import styles from '~/styles/components/ProgramDetail.module.scss'
import MetaHead from '~/components/MetaHead'
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'
import Link from 'next/link'
import { GetStaticPropsContext } from 'next'
import dayjs from 'dayjs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getLocaleVocabulary } from '~/lib/settings'
import React from 'react'

export const getStaticPaths = async () => {
  try {
    /*
    const data = (await client.get({ endpoint: 'news' })) as NewsListType
    const paths = data.contents.map((content) => `/news/${content.id}`) */
    return { paths: [], fallback: 'blocking' }
  } catch (e) {
    return { paths: [], fallback: 'blocking' }
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!params) {
    return {
      redirect: {
        destination: '/programs/day1',
        permanent: false,
      },
    }
  }
  const requestHeaders = new Headers()
  requestHeaders.append('Authorization', process.env.API_KEY ? process.env.API_KEY : '')
  requestHeaders.append('Content-Type', 'application/json')

  const raw = JSON.stringify({
    v: 'string',
    uid: 'string',
    data: {
      programId: params.id,
    },
  })

  const requestOptions = {
    method: 'POST',
    headers: requestHeaders,
    body: raw,
  }

  const response = await fetch(
    'https://webapi20210430062843.azurewebsites.net/api/getprogram',
    requestOptions
  )
  const json = await response.json()
  const { presenters, date, description, startTime, endTime, title, trackName, urls, programId } =
    json.data
  return {
    props: {
      presenters,
      date,
      description,
      startTime,
      endTime,
      title,
      trackName,
      urls,
      programId,
    },
    revalidate: 60,
  }
}
const ProgramDetails = ({
  presenters,
  date,
  description,
  startTime,
  endTime,
  title,
  trackName,
  urls,
  programId,
}: any) => {
  const router = useRouter()
  const locale = router.locale ? router.locale : 'ja'
  dayjs.locale(locale.toLowerCase())
  return (
    <>
      <MetaHead isTop />
      <Navigation nowPage={'Programs'} />
      <main className={styles.lMain}>
        <div className={styles.timetableDetailWrapper}>
          <div className={styles.detailTitle}>
            <p className={styles.track}>
              {trackName[locale]
                ? trackName[locale]
                : trackName['en']
                ? trackName['en']
                : trackName['ja']}
            </p>
            <p className={styles.date}>
              {dayjs(date).format('MM.DD(ddd)')} {startTime}-{endTime}
            </p>
            {router.locales ? (
              <ul className={styles.headingLang}>
                {router.locales.map((value) => {
                  return (
                    <li key={value}>
                      <Link href={`/programs/${programId}`} locale={value}>
                        <a className={locale === value ? styles.isActive : undefined}>{value}</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            ) : undefined}
          </div>
          <h1 className={styles.topicTitle}>
            {title[locale] ? title[locale] : title['en'] ? title['en'] : title['ja']}
          </h1>

          <section className={styles.topicDetail}>
            <h2 className={styles.topicHeading}>{getLocaleVocabulary(locale, 'overview')}</h2>
            <p>
              {(() => {
                const descriptionlocale = description[locale]
                  ? description[locale]
                  : description['en']
                  ? description['en']
                  : description['ja']
                return descriptionlocale.split('\n').map((str: string, index: number) => (
                  <React.Fragment key={index}>
                    {str}
                    <br />
                  </React.Fragment>
                ))
              })()}
            </p>

            <ul>
              {urls.map((url: any) => {
                const urlTitle = url.title[locale]
                  ? url.title[locale]
                  : url.title['en']
                  ? url.title['en']
                  : url.title['ja']
                if (urlTitle || url.url) {
                  return (
                    <li key={Math.random()}>
                      <a href={url.url} target={'_blank'} rel={'noreferrer noopener'}>
                        {urlTitle}
                        {urlTitle ? <br /> : undefined}
                        {url.url}
                      </a>
                    </li>
                  )
                } else {
                  return undefined
                }
              })}
            </ul>
          </section>
          <section className={styles.topicPerformer}>
            <h2 className={styles.topicHeading}>{getLocaleVocabulary(locale, 'speakers')}</h2>
            {presenters.map((value: any) => {
              return (
                <div className={styles.flex} key={value.presenterId}>
                  <div className={styles.picsContent}>
                    {value.photoURL ? (
                      <Image
                        src={value.photoURL}
                        alt={'picture'}
                        width={'240px'}
                        height={'240px'}
                      />
                    ) : undefined}
                  </div>
                  <div className={styles.textContent}>
                    <p className={styles.presenterName}>
                      {value.name[locale]
                        ? value.name[locale]
                        : value.name['en']
                        ? value.name['en']
                        : value.name['ja']}

                      {locale === 'ja' ||
                      (value.name[locale]
                        ? value.name[locale]
                        : value.name['en']
                        ? value.name['en']
                        : value.name['ja']) === value.name['ja']
                        ? `（${value.name['ja_kana']}）`
                        : undefined}
                    </p>
                    <p className={styles.organizationName}>
                      {value.organization[locale]
                        ? value.organization[locale]
                        : value.organization['en']
                        ? value.organization['en']
                        : value.organization['ja']}
                    </p>
                    <p>
                      {(() => {
                        const descriptionlocale = value.description[locale]
                          ? value.description[locale]
                          : value.description['en']
                          ? value.description['en']
                          : value.description['ja']
                        return descriptionlocale.split('\n').map((str: string, index: number) => {
                          if (str) {
                            return (
                              <React.Fragment key={index}>
                                {str}
                                <br />
                              </React.Fragment>
                            )
                          }
                        })
                      })()}
                    </p>
                    <ul>
                      {value.urls.map((url: any) => {
                        const urlTitle = url.title[locale]
                          ? url.title[locale]
                          : url.title['en']
                          ? url.title['en']
                          : url.title['ja']
                        if (urlTitle || url.url) {
                          return (
                            <li key={Math.random()}>
                              <a href={url.url} target={'_blank'} rel={'noreferrer noopener'}>
                                {urlTitle}
                                {urlTitle ? <br /> : undefined}
                                {url.url}
                              </a>
                            </li>
                          )
                        } else {
                          return undefined
                        }
                      })}
                    </ul>
                  </div>
                </div>
              )
            })}
          </section>
          <Link href={date === '2021-09-19' ? '/programs/day2' : '/programs/day1'}>
            <a className={styles.linkBack}>
              <i>
                <svg
                  id="arrow_left"
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99967 1.99945C8.00013 2.2331 7.91875 2.45953 7.76967 2.63945L3.28967 7.99945L7.60967 13.3694C7.69274 13.4717 7.75477 13.5894 7.7922 13.7158C7.82963 13.8421 7.84173 13.9746 7.82779 14.1056C7.81385 14.2367 7.77415 14.3636 7.71098 14.4793C7.6478 14.5949 7.5624 14.6969 7.45967 14.7794C7.35738 14.8625 7.23969 14.9245 7.11335 14.962C6.98701 14.9994 6.85452 15.0115 6.72349 14.9976C6.59246 14.9836 6.46548 14.9439 6.34984 14.8808C6.23421 14.8176 6.1322 14.7322 6.04967 14.6294L1.21968 8.62945C1.07259 8.45051 0.992187 8.22607 0.992187 7.99445C0.992187 7.76282 1.07259 7.53838 1.21968 7.35945L6.21967 1.35945C6.30362 1.25819 6.40672 1.17449 6.52307 1.11313C6.63942 1.05178 6.76672 1.01398 6.8977 1.00191C7.02868 0.989834 7.16075 1.00372 7.28635 1.04276C7.41196 1.0818 7.52862 1.14524 7.62967 1.22945C7.74438 1.3225 7.83706 1.43981 7.90103 1.57295C7.96501 1.70608 7.99869 1.85174 7.99967 1.99945Z"
                    fill="#E19821"
                  />
                </svg>
              </i>
              {getLocaleVocabulary(locale, 'backToList')}
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ProgramDetails

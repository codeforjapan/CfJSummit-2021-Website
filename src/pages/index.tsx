import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navigation from '~/components/Navigation'
import { NextPage } from 'next'
import Header from '~/components/Header'
import Concept from '~/components/Concept'
import Logo from '~/components/Logo'
import Program from '~/components/Program'
import Ticket from '~/components/Ticket'
import Slack from '~/components/Slack'
import CoC from '~/components/CoC'
import Accessibility from '~/components/Accessibility'
import Contact from '~/components/Contact'
import Sponsors from '~/components/Sponsors'
import Footer from '~/components/Footer'
import Scroll from '../styles/components/Scroll.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Code for Japan Summit 2021</title>
      </Head>
      <div className={Scroll.box}>
        <Navigation />
        <Header />
        <div className={Scroll.arrowWrap} aria-hidden={true}>
          <div className={Scroll.arrowInner}>
            <p>SCROLL DOWN</p>
            <div className={Scroll.arrow} />
          </div>
        </div>
      </div>

      <main className="l-main">
        <Concept />
        <Logo />
        {/*<Program />*/}
        <Ticket />
        <Slack />
        <CoC />
        <Accessibility />
        <Contact />
        <Sponsors />
      </main>
      <Footer />
    </>
  )
}

export default Home
